import { ref, onUnmounted, reactive } from 'vue';
import { type Word } from '../data/words';
import { useAudio } from './useAudio';
import { useAudioContent } from './useAudioContent';
import { vocabularyStore } from '../store/vocabulary';

export interface FallingLetter {
    id: number;
    char: string;
    x: number;
    y: number;
    speed: number;
    isTarget: boolean;
}

export interface Point {
    x: number;
    y: number;
}

export function useSpellingGame(callbacks?: {
    onHitCorrect?: (x: number, y: number) => void,
    onHitWrong?: (x: number, y: number) => void
}) {
    const { speak, playCorrect, playSuccess, playExplosion, playThrust } = useAudio();
    const { getQuestion } = useAudioContent();

    const gameState = ref<'menu' | 'playing'>('menu');
    const score = ref(0);
    const currentTarget = ref<Word | null>(null);
    const spellingIndex = ref(0); // Current character index we are looking for
    const fallingItems = ref<FallingLetter[]>([]);
    const distractorPool = ref<string[]>([]); // Only these letters will appear

    const playerPos = ref<Point>({ x: 50, y: 80 });
    const targetPos = ref<Point | null>(null);
    const keysPressed = reactive<Set<string>>(new Set());

    const playerSpeedLerp = 0.15;
    const playerSpeedKey = 1.8;
    let thrustCooldown = 0;

    let gameLoopId: number | null = null;
    let spawnIntervalId: number | null = null;
    let lastTime = 0;
    let spawnRate = 1200; // Faster spawns for letters
    let difficultyMultiplier = 1;

    const startGame = () => {
        gameState.value = 'playing';
        score.value = 0;
        fallingItems.value = [];
        difficultyMultiplier = 1;
        playerPos.value = { x: 50, y: 80 };
        targetPos.value = null;
        spellingIndex.value = 0;

        pickNewTarget();

        lastTime = performance.now();
        gameLoopId = requestAnimationFrame(loop);
        spawnIntervalId = window.setInterval(spawnItem, spawnRate);
    };

    const stopGame = () => {
        if (gameLoopId) cancelAnimationFrame(gameLoopId);
        if (spawnIntervalId) clearInterval(spawnIntervalId);
    };

    const announceTarget = () => {
        if (!currentTarget.value) return;
        const text = getQuestion(currentTarget.value);
        if (text) speak(text);
    };

    const pickNewTarget = () => {
        const vocab = vocabularyStore.currentList.value;
        if (vocab.length === 0) return;
        const randomIndex = Math.floor(Math.random() * vocab.length);
        currentTarget.value = vocab[randomIndex];
        spellingIndex.value = 0;

        // Generate a small, focused distractor pool (max 8 characters total)
        // Preserve case for distractions based on the word
        const targetWord = currentTarget.value.a || currentTarget.value.q;
        const wordChars = [...new Set(targetWord.split(''))];
        const extras = 'abcdefghijklmnopqrstuvwxyz'.split('').filter(c => !wordChars.some(wc => wc.toLowerCase() === c));
        const shuffledExtras = extras.sort(() => Math.random() - 0.5);

        // Match the casing of the first char of the word for extras if it's capitalized, otherwise lower
        const isWordCapitalized = /^[A-Z]/.test(targetWord);
        const mappedExtras = shuffledExtras.map(c => isWordCapitalized && Math.random() < 0.3 ? c.toUpperCase() : c);

        const pool = [...wordChars, ...mappedExtras.slice(0, Math.max(0, 8 - wordChars.length))];
        distractorPool.value = pool.slice(0, 8);

        announceTarget();
    };

    const spawnItem = () => {
        if (gameState.value !== 'playing' || !currentTarget.value) return;

        const target = currentTarget.value;
        const targetWord = target.a || target.q;
        const nextChar = targetWord[spellingIndex.value];

        // Increased target chance so user doesn't wait too long
        const isTarget = Math.random() < 0.4;
        let charToSpawn = nextChar;

        if (!isTarget) {
            // Pick from our focused pool, avoiding nextChar (case-sensitive)
            const others = distractorPool.value.filter(c => c !== nextChar);
            charToSpawn = others[Math.floor(Math.random() * others.length)] || (nextChar === nextChar.toUpperCase() ? 'X' : 'x');
        }

        fallingItems.value.push({
            id: Date.now() + Math.random(),
            char: charToSpawn, // Preserve original case
            x: Math.random() * 80 + 10,
            y: -10,
            speed: (Math.random() * 0.2 + 0.3) * difficultyMultiplier,
            isTarget: charToSpawn === nextChar
        });
    };

    const loop = (time: number) => {
        const deltaTime = time - lastTime;
        lastTime = time;

        const prevX = playerPos.value.x;
        const prevY = playerPos.value.y;

        let dx = 0;
        let dy = 0;
        if (keysPressed.has('ArrowLeft')) dx -= 1;
        if (keysPressed.has('ArrowRight')) dx += 1;
        if (keysPressed.has('ArrowUp')) dy -= 1;
        if (keysPressed.has('ArrowDown')) dy += 1;

        if (dx !== 0 || dy !== 0) {
            targetPos.value = null;
            const mag = Math.sqrt(dx * dx + dy * dy);
            const nDx = dx / mag;
            const nDy = dy / mag;
            const worldW = window.innerWidth;
            const worldH = window.innerHeight - 100;
            const aspectRatio = worldW / worldH;

            const moveAmt = playerSpeedKey * (deltaTime / 16);
            playerPos.value.x = Math.max(5, Math.min(95, playerPos.value.x + nDx * moveAmt));
            playerPos.value.y = Math.max(5, Math.min(95, playerPos.value.y + nDy * moveAmt * aspectRatio));
        } else if (targetPos.value) {
            const lerpFactor = 1 - Math.pow(1 - playerSpeedLerp, deltaTime / 16);
            playerPos.value.x += (targetPos.value.x - playerPos.value.x) * lerpFactor;
            playerPos.value.y += (targetPos.value.y - playerPos.value.y) * lerpFactor;
            if (Math.abs(targetPos.value.x - playerPos.value.x) < 0.1 &&
                Math.abs(targetPos.value.y - playerPos.value.y) < 0.1) {
                targetPos.value = null;
            }
        }

        const moved = Math.abs(playerPos.value.x - prevX) > 0.1 || Math.abs(playerPos.value.y - prevY) > 0.1;
        if (moved) {
            if (thrustCooldown <= 0) {
                playThrust();
                thrustCooldown = 1;
            }
        } else {
            thrustCooldown = 0;
        }

        fallingItems.value.forEach(item => {
            item.y += item.speed * (deltaTime / 16);
        });

        fallingItems.value = fallingItems.value.filter(item => item.y <= 110);

        const playerWidth = 12;
        const playerHeight = 10;

        fallingItems.value = fallingItems.value.filter(item => {
            const hdx = Math.abs(item.x - playerPos.value.x);
            const hdy = Math.abs(item.y - playerPos.value.y);
            const hit = hdx < (playerWidth / 2 + 3) && hdy < (playerHeight / 2 + 3);

            if (hit) {
                const target = currentTarget.value;
                const targetWord = (target?.a || target?.q) || '';
                const nextChar = targetWord[spellingIndex.value];

                if (item.char === nextChar) {
                    score.value += 10;
                    spellingIndex.value++;
                    callbacks?.onHitCorrect?.(item.x, item.y);

                    if (spellingIndex.value >= targetWord.length) {
                        score.value += 50; // Bonus for finishing word
                        difficultyMultiplier += 0.05;
                        playSuccess(); // Impactful CDN sound
                        pickNewTarget();
                    } else {
                        playCorrect(); // Soft chime for letters
                    }
                    return false;
                } else {
                    // WRONG LETTER - RESTART WORD
                    playExplosion();
                    callbacks?.onHitWrong?.(item.x, item.y);
                    spellingIndex.value = 0; // Reset progress
                    // Re-announce to help
                    announceTarget();
                    return false;
                }
            }
            return true;
        });

        if (gameState.value === 'playing') {
            gameLoopId = requestAnimationFrame(loop);
        }
    };

    const setPlayerTarget = (x: number, y: number) => {
        targetPos.value = {
            x: Math.max(5, Math.min(95, x)),
            y: Math.max(5, Math.min(95, y))
        };
    };

    const setKey = (key: string, pressed: boolean) => {
        if (pressed) keysPressed.add(key);
        else keysPressed.delete(key);
    };

    onUnmounted(() => {
        stopGame();
    });

    return {
        gameState,
        score,
        currentTarget,
        spellingIndex,
        fallingItems,
        playerPos,
        startGame,
        setPlayerTarget,
        setKey,
        speak,
        announceTarget
    };
}
