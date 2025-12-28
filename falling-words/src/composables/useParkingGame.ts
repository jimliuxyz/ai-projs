import { ref } from 'vue';
import { vocabularyStore } from '../store/vocabulary';
import type { Word } from '../data/words';

export interface ParkingSlot {
    char: string;
    owner: 1 | 2 | null;
}

export interface Car {
    id: number;
    char: string;
    x: number;
    y: number;
    rotation: number;
}

export function useParkingGame(callbacks?: { onPerfect?: () => void, onWrong?: () => void }) {
    const currentWord = ref<Partial<Word>>({ q: '', t: '' });
    const slots = ref<ParkingSlot[]>([]);
    const nextSlotIndex = ref(0);
    const p1Hand = ref<Car[]>([]);
    const p2Hand = ref<Car[]>([]);
    const p1Score = ref(0);
    const p2Score = ref(0);
    const isGameOver = ref(false);
    const winner = ref<1 | 2 | 0 | null>(null);

    const initRound = () => {
        const list = vocabularyStore.currentList.value;
        if (list.length === 0) return;

        const word = list[Math.floor(Math.random() * list.length)];
        currentWord.value = word;

        // Preserve case from word
        slots.value = word.q.split('').map(char => ({
            char: char, // Use original case
            owner: null
        }));

        nextSlotIndex.value = 0;
        isGameOver.value = false;
        winner.value = null;

        generateHands();
    };

    const generateHands = () => {
        const wordText = currentWord.value.q!; // Original case
        const requiredChars = wordText.split('');

        // Determine script for noise
        const isZhuyinWord = /[\u3105-\u3129\u02CA\u02C7\u02CB\u02D9]/.test(wordText);
        const alphabet = isZhuyinWord
            ? 'ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄧㄨㄩㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦ'.split('')
            : 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

        const createHand = () => {
            const hand: Car[] = [];
            const carWidth = 10; // Approx width in %
            const carHeight = 15; // Approx height in %

            const isOverlapping = (x: number, y: number, otherCars: Car[]) => {
                return otherCars.some(other => {
                    const dx = Math.abs(x - other.x);
                    const dy = Math.abs(y - other.y);
                    return dx < carWidth && dy < carHeight;
                });
            };

            const placeCar = (char: string, idSuffix: number) => {
                let x, y, attempts = 0;
                do {
                    x = 5 + Math.random() * 85;
                    y = 10 + Math.random() * 75;
                    attempts++;
                } while (isOverlapping(x, y, hand) && attempts < 50);

                hand.push({
                    id: Math.random() + idSuffix,
                    char,
                    x,
                    y,
                    rotation: Math.random() * 360
                });
            };

            // Add required chars with correct case
            requiredChars.forEach((c, i) => placeCar(c, i));

            // Add noise chars (matching script)
            for (let i = 0; i < 8; i++) {
                placeCar(alphabet[Math.floor(Math.random() * alphabet.length)], i + 100);
            }

            return hand;
        };

        p1Hand.value = createHand();
        p2Hand.value = createHand();
    };

    const tryPark = (player: 1 | 2, carId: number) => {
        if (isGameOver.value) return null;
        if (nextSlotIndex.value >= slots.value.length) return null;

        const hand = player === 1 ? p1Hand.value : p2Hand.value;
        const car = hand.find(c => c.id === carId);
        if (!car) return null;

        const targetSlot = slots.value[nextSlotIndex.value];

        // CASE SENSITIVE comparison
        if (car.char === targetSlot.char) {
            const slotIdx = nextSlotIndex.value;
            // DO NOT increment nextSlotIndex here, wait for recordPark to "win" the spot

            if (player === 1) p1Hand.value = p1Hand.value.filter(c => c.id !== carId);
            else p2Hand.value = p2Hand.value.filter(c => c.id !== carId);

            return { slotIdx, car };
        } else {
            callbacks?.onWrong?.();
            return null;
        }
    };

    const recordPark = (player: 1 | 2, slotIndex: number) => {
        // If someone else already parked here while we were in the air
        if (slots.value[slotIndex].owner !== null) {
            return false;
        }

        slots.value[slotIndex].owner = player;
        if (player === 1) p1Score.value++;
        else p2Score.value++;

        // Advance the target to the next character in the word
        nextSlotIndex.value++;

        if (slots.value.every(s => s.owner !== null)) {
            endGame();
        }
        return true;
    };

    const endGame = () => {
        isGameOver.value = true;
        // Winner determined by round score or total? Usually round.
        // We'll keep total score persistent but calculate round winner for visual.
        // Actually, user just said "don't reset scores", so we keep winner logic on CURRENT state.
    };

    return {
        currentWord,
        slots,
        nextSlotIndex,
        p1Hand,
        p2Hand,
        p1Score,
        p2Score,
        isGameOver,
        winner,
        initRound,
        tryPark,
        recordPark
    };
}

