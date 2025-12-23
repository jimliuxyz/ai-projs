import { ref, onUnmounted, reactive } from 'vue';
import { type Word } from '../data/words';
import { useAudio } from './useAudio';
import { vocabularyStore } from '../store/vocabulary';

export interface FallingItem {
    id: number;
    word: Word;
    x: number; // Percentage 0-100
    y: number; // Percentage 0-100
    speed: number;
    isTarget: boolean;
}

export interface Point {
    x: number;
    y: number;
}

export function useGame(callbacks?: {
    onHitCorrect?: (x: number, y: number) => void,
    onHitWrong?: (x: number, y: number) => void
}) {
    const { speak, playCorrect, playExplosion, playThrust } = useAudio();

    const gameState = ref<'menu' | 'playing'>('menu'); // No more gameover state logic for now
    const score = ref(0);
    const currentTarget = ref<Word | null>(null);
    const fallingItems = ref<FallingItem[]>([]);

    const playerPos = ref<Point>({ x: 50, y: 80 });

    // Movement State
    const targetPos = ref<Point | null>(null); // For mouse/touch lerping
    const keysPressed = reactive<Set<string>>(new Set());

    const playerSpeedLerp = 0.15;
    const playerSpeedKey = 1.8; // Significantly increased for fast keyboard response
    let thrustCooldown = 0;

    let gameLoopId: number | null = null;
    let spawnIntervalId: number | null = null;
    let lastTime = 0;
    let spawnRate = 2000;
    let difficultyMultiplier = 1;

    const startGame = () => {
        gameState.value = 'playing';
        score.value = 0;
        fallingItems.value = [];
        difficultyMultiplier = 1;
        playerPos.value = { x: 50, y: 80 };
        targetPos.value = null; // Reset target

        pickNewTarget();

        lastTime = performance.now();
        gameLoopId = requestAnimationFrame(loop);

        spawnIntervalId = window.setInterval(spawnItem, spawnRate);
    };

    const stopGame = () => {
        // Just pauses logic, stays in playing or goes to menu if desired
        // For now, let's just clear intervals
        if (gameLoopId) cancelAnimationFrame(gameLoopId);
        if (spawnIntervalId) clearInterval(spawnIntervalId);
    };

    const announceTarget = () => {
        if (!currentTarget.value) return;
        const text = currentTarget.value.text;
        const spelled = text.split('').join(',');
        const example = currentTarget.value.example ? `. ${currentTarget.value.example}` : '';
        speak(`${text}, (${spelled}), ${text}${example}`);
    };

    const pickNewTarget = () => {
        const vocab = vocabularyStore.currentList.value;
        if (vocab.length === 0) return;
        const randomIndex = Math.floor(Math.random() * vocab.length);
        currentTarget.value = vocab[randomIndex];
        announceTarget();
    };

    const spawnItem = () => {
        if (gameState.value !== 'playing') return;

        const vocab = vocabularyStore.currentList.value;
        if (vocab.length === 0) return;

        const isTarget = Math.random() < 0.4;
        let wordToSpawn: Word | null = currentTarget.value;

        if (!isTarget || !wordToSpawn) {
            let randomWord: Word;
            let attempts = 0;
            do {
                randomWord = vocab[Math.floor(Math.random() * vocab.length)];
                attempts++;
            } while (randomWord === currentTarget.value && attempts < 10);
            wordToSpawn = randomWord;
        }

        if (!wordToSpawn) return;

        fallingItems.value.push({
            id: Date.now() + Math.random(),
            word: wordToSpawn,
            x: Math.random() * 80 + 10,
            y: -10,
            speed: (Math.random() * 0.2 + 0.3) * difficultyMultiplier,
            isTarget: wordToSpawn === currentTarget.value
        });
    };

    const loop = (time: number) => {
        const deltaTime = time - lastTime;
        lastTime = time;

        const prevX = playerPos.value.x;
        const prevY = playerPos.value.y;

        // Movement Logic
        // 1. Keyboard (Linear direct control)
        let dx = 0;
        let dy = 0;
        if (keysPressed.has('ArrowLeft')) dx -= 1;
        if (keysPressed.has('ArrowRight')) dx += 1;
        if (keysPressed.has('ArrowUp')) dy -= 1;
        if (keysPressed.has('ArrowDown')) dy += 1;

        if (dx !== 0 || dy !== 0) {
            // Keyboard overrides target lerp
            targetPos.value = null;

            // 1. Normalize diagonal speed
            const mag = Math.sqrt(dx * dx + dy * dy);
            const nDx = dx / mag;
            const nDy = dy / mag;

            // 2. Account for Aspect Ratio: percentage speed should result in same pixel speed
            const worldW = window.innerWidth;
            const worldH = window.innerHeight - 100;
            const aspectRatio = worldW / worldH;

            const moveAmt = playerSpeedKey * (deltaTime / 16);
            playerPos.value.x = Math.max(5, Math.min(95, playerPos.value.x + nDx * moveAmt));
            playerPos.value.y = Math.max(5, Math.min(95, playerPos.value.y + nDy * moveAmt * aspectRatio));
        } else if (targetPos.value) {
            // 2. Mouse/Touch (Lerp)
            const lerpFactor = 1 - Math.pow(1 - playerSpeedLerp, deltaTime / 16);
            playerPos.value.x += (targetPos.value.x - playerPos.value.x) * lerpFactor;
            playerPos.value.y += (targetPos.value.y - playerPos.value.y) * lerpFactor;

            // Stop lerping if close enough to save perf?
            if (Math.abs(targetPos.value.x - playerPos.value.x) < 0.1 &&
                Math.abs(targetPos.value.y - playerPos.value.y) < 0.1) {
                targetPos.value = null;
            }
        }

        const moved = Math.abs(playerPos.value.x - prevX) > 0.1 || Math.abs(playerPos.value.y - prevY) > 0.1;
        if (moved) {
            if (thrustCooldown <= 0) { // Using thrustCooldown as a "ready to play again" flag
                playThrust();
                thrustCooldown = 1; // Mark as "has played at start"
            }
        } else {
            thrustCooldown = 0; // Reset when stopped
        }

        // Items Logic
        fallingItems.value.forEach(item => {
            item.y += item.speed * (deltaTime / 16);
        });

        fallingItems.value = fallingItems.value.filter(item => {
            if (item.y > 110) return false;
            return true;
        });

        // Collision
        const playerWidth = 12;
        const playerHeight = 10;

        // Check collisions but avoiding multiple hits on same item? 
        // Filter out hit items immediately.
        fallingItems.value = fallingItems.value.filter(item => {
            const dx = Math.abs(item.x - playerPos.value.x);
            const dy = Math.abs(item.y - playerPos.value.y);

            const hit = dx < (playerWidth / 2 + 3) && dy < (playerHeight / 2 + 3);

            if (hit) {
                if (item.isTarget) {
                    score.value += 10;
                    difficultyMultiplier += 0.05;
                    playCorrect();
                    callbacks?.onHitCorrect?.(item.x, item.y);
                    pickNewTarget();
                    return false;
                } else {
                    score.value = Math.max(0, score.value - 5);
                    playExplosion();
                    callbacks?.onHitWrong?.(item.x, item.y);
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
        fallingItems,
        playerPos,
        startGame,
        setPlayerTarget,
        setKey,
        speak,
        announceTarget
    };
}
