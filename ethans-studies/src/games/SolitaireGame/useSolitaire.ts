import { ref, computed } from 'vue';

export type Suit = 'hearts' | 'diamonds' | 'clubs' | 'spades';
export type Rank = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';

export interface Card {
    id: string;
    suit: Suit;
    rank: Rank;
    value: number;
    isFaceUp: boolean;
}

export function useSolitaire() {
    const stock = ref<Card[]>([]);
    const waste = ref<Card[]>([]);
    const foundations = ref<{ [key in Suit]: Card[] }>({
        hearts: [],
        diamonds: [],
        clubs: [],
        spades: [],
    });
    const tableau = ref<Card[][]>(Array.from({ length: 7 }, () => []));

    const ranks: Rank[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const suits: Suit[] = ['hearts', 'diamonds', 'clubs', 'spades'];

    const createDeck = (): Card[] => {
        const deck: Card[] = [];
        suits.forEach((suit) => {
            ranks.forEach((rank, index) => {
                deck.push({
                    id: `${suit}-${rank}`,
                    suit,
                    rank,
                    value: index + 1,
                    isFaceUp: false,
                });
            });
        });
        return deck;
    };

    const shuffle = (deck: Card[]) => {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    };

    const initGame = () => {
        let validDeal = false;
        let attempts = 0;

        while (!validDeal && attempts < 100) {
            attempts++;
            const deck = createDeck();
            shuffle(deck);

            // Create a deep copy for simulation
            const tempDeck = [...deck];
            const tempTableau: Card[][] = Array.from({ length: 7 }, () => []);
            for (let i = 0; i < 7; i++) {
                for (let j = i; j < 7; j++) {
                    const card = { ...tempDeck.pop()! };
                    if (i === j) card.isFaceUp = true;
                    tempTableau[j].push(card);
                }
            }

            // Simple check: Can ANY move be made in the first few steps?
            // 1. Check tableau to tableau
            let canMove = false;
            for (let i = 0; i < 7; i++) {
                if (tempTableau[i].length === 0) continue;
                const card = tempTableau[i][tempTableau[i].length - 1];
                for (let j = 0; j < 7; j++) {
                    if (i === j) continue;
                    if (canMoveToTableau(card, tempTableau[j])) {
                        canMove = true;
                        break;
                    }
                }
                if (canMove) break;
            }

            // 2. Check tableau to foundation
            if (!canMove) {
                for (let i = 0; i < 7; i++) {
                    if (tempTableau[i].length === 0) continue;
                    const card = tempTableau[i][tempTableau[i].length - 1];
                    if (card.rank === 'A') {
                        canMove = true;
                        break;
                    }
                }
            }

            // 3. Check stock/waste (simulate first few draws)
            if (!canMove && tempDeck.length > 0) {
                const sampleSize = Math.min(tempDeck.length, 5);
                for (let i = 0; i < sampleSize; i++) {
                    const card = tempDeck[tempDeck.length - 1 - i];
                    if (card.rank === 'A' || card.rank === 'K') {
                        canMove = true;
                        break;
                    }
                }
            }

            if (canMove) {
                // Actual deal
                stock.value = [...deck];
                waste.value = [];
                foundations.value = { hearts: [], diamonds: [], clubs: [], spades: [] };
                tableau.value = Array.from({ length: 7 }, () => []);

                for (let i = 0; i < 7; i++) {
                    for (let j = i; j < 7; j++) {
                        const card = stock.value.pop()!;
                        if (i === j) card.isFaceUp = true;
                        tableau.value[j].push(card);
                    }
                }
                validDeal = true;
            }
        }
    };

    const drawCard = () => {
        if (stock.value.length === 0) {
            stock.value = [...waste.value].reverse().map(c => ({ ...c, isFaceUp: false }));
            waste.value = [];
            return;
        }
        const card = stock.value.pop()!;
        card.isFaceUp = true;
        waste.value.push(card);
    };

    const canMoveToTableau = (card: Card, targetPile: Card[]) => {
        if (targetPile.length === 0) {
            return card.rank === 'K';
        }
        const topCard = targetPile[targetPile.length - 1];
        if (!topCard.isFaceUp) return false;

        const isDifferentColor =
            (['hearts', 'diamonds'].includes(card.suit) && ['clubs', 'spades'].includes(topCard.suit)) ||
            (['clubs', 'spades'].includes(card.suit) && ['hearts', 'diamonds'].includes(topCard.suit));

        return isDifferentColor && card.value === topCard.value - 1;
    };

    const canMoveToFoundation = (card: Card) => {
        const targetFoundation = foundations.value[card.suit];
        if (targetFoundation.length === 0) {
            return card.rank === 'A';
        }
        const topCard = targetFoundation[targetFoundation.length - 1];
        return card.value === topCard.value + 1;
    };

    const moveTableauToTableau = (fromIdx: number, cardIdx: number, toIdx: number) => {
        const cardsToMove = tableau.value[fromIdx].slice(cardIdx);
        if (canMoveToTableau(cardsToMove[0], tableau.value[toIdx])) {
            tableau.value[toIdx] = [...tableau.value[toIdx], ...cardsToMove];
            tableau.value[fromIdx] = tableau.value[fromIdx].slice(0, cardIdx);
            if (tableau.value[fromIdx].length > 0) {
                tableau.value[fromIdx][tableau.value[fromIdx].length - 1].isFaceUp = true;
            }
            return true;
        }
        return false;
    };

    const moveWasteToTableau = (toIdx: number) => {
        if (waste.value.length === 0) return false;
        const card = waste.value[waste.value.length - 1];
        if (canMoveToTableau(card, tableau.value[toIdx])) {
            tableau.value[toIdx].push(waste.value.pop()!);
            return true;
        }
        return false;
    };

    const moveWasteToFoundation = () => {
        if (waste.value.length === 0) return false;
        const card = waste.value[waste.value.length - 1];
        if (canMoveToFoundation(card)) {
            foundations.value[card.suit].push(waste.value.pop()!);
            return true;
        }
        return false;
    };

    const moveTableauToFoundation = (tableauIdx: number) => {
        const pile = tableau.value[tableauIdx];
        if (pile.length === 0) return false;
        const card = pile[pile.length - 1];
        if (canMoveToFoundation(card)) {
            foundations.value[card.suit].push(pile.pop()!);
            if (pile.length > 0) {
                pile[pile.length - 1].isFaceUp = true;
            }
            return true;
        }
        return false;
    };

    const moveFoundationToTableau = (suit: Suit, toIdx: number) => {
        const foundation = foundations.value[suit];
        if (foundation.length === 0) return false;
        const card = foundation[foundation.length - 1];
        if (canMoveToTableau(card, tableau.value[toIdx])) {
            tableau.value[toIdx].push(foundation.pop()!);
            return true;
        }
        return false;
    };

    const checkAutoMove = () => {
        let moved = false;
        // Check waste
        if (waste.value.length > 0 && moveWasteToFoundation()) moved = true;
        // Check tableau
        for (let i = 0; i < 7; i++) {
            if (moveTableauToFoundation(i)) moved = true;
        }
        return moved;
    };

    const isGameWon = computed(() => {
        return Object.values(foundations.value).every(f => f.length === 13);
    });

    return {
        stock, waste, foundations, tableau,
        initGame, drawCard,
        moveTableauToTableau, moveWasteToTableau,
        moveWasteToFoundation, moveTableauToFoundation,
        moveFoundationToTableau,
        checkAutoMove, isGameWon
    };
}
