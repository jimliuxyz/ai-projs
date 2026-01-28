import { ref } from 'vue';
import { type Word } from '~/data/words';
import { vocabularyStore } from '~/store/vocabulary';
import { useAudio } from '~/composables/useAudio';
import { useAudioContent } from '~/composables/useAudioContent';

export interface DuelOption {
    text: string;
    isCorrect: boolean;
}

export function useDuel() {
    const { speak, playCorrect, playSuccess, playExplosion } = useAudio();
    const { getQuestion } = useAudioContent();

    const p1Score = ref(0);
    const p2Score = ref(0);
    const whoHasTrophy = ref<0 | 1 | 2>(0); // 0: None, 1: P1, 2: P2
    const currentTarget = ref<Word | null>(null);
    const options = ref<DuelOption[]>([]);
    const isLocked = ref(false);

    // Distractor Logic
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = 'bcdfghjklmnpqrstvwxyz'.split('');

    const generateDistractor = (word: string): string => {
        const chars = word.split('');
        const len = chars.length;
        const strategy = Math.random();

        const isUpper = (c: string) => c === c.toUpperCase() && c !== c.toLowerCase();

        // Strategy 0: First Letter Swap (30%)
        if (strategy < 0.3) {
            const first = chars[0];
            const lowerFirst = first.toLowerCase();
            const wasUpper = isUpper(first);

            if (consonants.includes(lowerFirst)) {
                let randC = consonants[Math.floor(Math.random() * consonants.length)];
                if (wasUpper) randC = randC.toUpperCase();
                chars[0] = randC;
            } else if (vowels.includes(lowerFirst)) {
                const items = vowels.filter(v => v !== lowerFirst);
                let randV = items[Math.floor(Math.random() * items.length)];
                if (wasUpper) randV = randV.toUpperCase();
                chars[0] = randV;
            }
            return chars.join('');
        }

        // Strategy 1: Vowel Swap (30%)
        if (strategy < 0.6) {
            for (let i = 0; i < len; i++) {
                const char = chars[i];
                const lowerChar = char.toLowerCase();
                const wasUpper = isUpper(char);

                if (vowels.includes(lowerChar)) {
                    const items = vowels.filter(v => v !== lowerChar);
                    let randV = items[Math.floor(Math.random() * items.length)];
                    if (wasUpper) randV = randV.toUpperCase();
                    chars[i] = randV;
                    return chars.join('');
                }
            }
        }

        // Strategy 2: Consonant Swap (20%)
        if (strategy < 0.8) {
            for (let i = 0; i < len; i++) {
                const char = chars[i];
                const lowerChar = char.toLowerCase();
                const wasUpper = isUpper(char);

                if (consonants.includes(lowerChar)) {
                    let randC = consonants[Math.floor(Math.random() * consonants.length)];
                    if (wasUpper) randC = randC.toUpperCase();
                    chars[i] = randC;
                    return chars.join('');
                }
            }
        }

        // Strategy 3: Double/Undouble (20%)
        const idx = Math.floor(Math.random() * len);
        if (chars[idx] === chars[idx + 1]) {
            chars.splice(idx, 1);
        } else {
            // Match case of the character we are doubling
            chars.splice(idx, 0, chars[idx]);
        }
        return chars.join('');
    };

    const announceTarget = () => {
        if (!currentTarget.value) return;
        const text = getQuestion(currentTarget.value);
        if (text) speak(text);
    };

    // Generate a round
    const nextRound = () => {
        isLocked.value = false;

        // Get current list
        const vocab = vocabularyStore.currentList.value;
        if (vocab.length === 0) return;

        // Pick target
        const target = vocab[Math.floor(Math.random() * vocab.length)];
        currentTarget.value = target;

        const targetText = target.q;

        // Generate options
        const rawOptions = new Set<string>();
        // Add target
        rawOptions.add(targetText);

        // Attempt 100 times to find 3 unique distractors (safety limit)
        let safety = 0;
        while (rawOptions.size < 4 && safety < 100) {
            // Generate base fake
            let fake = generateDistractor(targetText);

            // Check against targetText
            if (fake !== targetText) {
                rawOptions.add(fake);
            }
            safety++;
        }

        while (rawOptions.size < 4) {
            let fake = targetText + (Math.random() > 0.5 ? 's' : 'e');
            rawOptions.add(fake);
        }

        // Convert to objects
        options.value = Array.from(rawOptions)
            .sort(() => Math.random() - 0.5)
            .map(t => ({
                text: t,
                isCorrect: t === targetText
            }));

        // Announce
        announceTarget();
    };

    const handleChoice = (player: 1 | 2, choice: DuelOption): boolean => {
        if (isLocked.value || !currentTarget.value) return false;

        if (choice.isCorrect) {
            // Correct
            isLocked.value = true;
            playCorrect();
            if (player === 1) p1Score.value++;
            else p2Score.value++;

            // LEAD CHANGE LOGIC
            const newLead: 0 | 1 | 2 = p1Score.value > p2Score.value ? 1 : (p2Score.value > p1Score.value ? 2 : 0);
            if (newLead !== 0 && newLead !== whoHasTrophy.value) {
                // Trophy has moved or appeared!
                playSuccess(); // TADA!
            }
            whoHasTrophy.value = newLead;

            setTimeout(nextRound, 1000);
            return true;
        } else {
            // Wrong
            playExplosion(); // Boom!
            if (player === 1) p1Score.value = Math.max(0, p1Score.value - 1);
            else p2Score.value = Math.max(0, p2Score.value - 1);

            // Even on wrong answer, lead could change back to 0 or other player
            const newLead: 0 | 1 | 2 = p1Score.value > p2Score.value ? 1 : (p2Score.value > p1Score.value ? 2 : 0);
            if (newLead !== 0 && newLead !== whoHasTrophy.value) {
                playSuccess(); // Tada!
            }
            whoHasTrophy.value = newLead;

            return false;
        }
    };

    return {
        p1Score,
        p2Score,
        currentTarget,
        options,
        nextRound,
        handleChoice,
        speak,
        announceTarget
    };
}
