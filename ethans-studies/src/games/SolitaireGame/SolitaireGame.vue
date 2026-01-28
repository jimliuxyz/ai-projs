<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useSolitaire, type Suit } from './useSolitaire';

const { 
    stock, waste, foundations, tableau, 
    initGame, drawCard, 
    moveTableauToTableau, moveWasteToTableau,
    moveWasteToFoundation, moveTableauToFoundation,
    isGameWon 
} = useSolitaire();

const emit = defineEmits(['exit']);

const showExitConfirm = ref(false);
const showRestartConfirm = ref(false);
const selectedItem = ref<{ type: 'waste' | 'tableau' | 'foundation', pileIdx?: number, cardIdx?: number, suit?: Suit } | null>(null);

onMounted(() => {
    initGame();
});

const handleStockClick = () => {
    drawCard();
    selectedItem.value = null;
};

const handleCardClick = (type: 'waste' | 'tableau' | 'foundation', pileIdx?: number, cardIdx?: number, suit?: Suit) => {
    if (winner.value) return;

    // Direct Foundation Move Attempt (Double Click Simulation or Single Click if valid)
    if (selectedItem.value === null) {
        if (type === 'waste') {
            const moved = moveWasteToFoundation();
            if (moved) return;
        } else if (type === 'tableau' && pileIdx !== undefined) {
            const pile = tableau.value[pileIdx];
            if (cardIdx === pile.length - 1) {
                const moved = moveTableauToFoundation(pileIdx);
                if (moved) return;
            }
        }
        selectedItem.value = { type, pileIdx, cardIdx, suit };
    } else {
        // Carry out move
        const from = selectedItem.value;
        let success = false;

        if (type === 'tableau' && pileIdx !== undefined) {
            if (from.type === 'waste') {
                success = moveWasteToTableau(pileIdx);
            } else if (from.type === 'tableau' && from.pileIdx !== undefined && from.cardIdx !== undefined) {
                success = moveTableauToTableau(from.pileIdx, from.cardIdx, pileIdx);
            }
        } else if (type === 'foundation') {
            if (from.type === 'waste') {
                success = moveWasteToFoundation();
            } else if (from.type === 'tableau' && from.pileIdx !== undefined) {
                success = moveTableauToFoundation(from.pileIdx);
            }
        }

        selectedItem.value = null;
    }
};

const getSuitSymbol = (suit: Suit) => {
    const symbols = { hearts: '♥', diamonds: '♦', clubs: '♣', spades: '♠' };
    return symbols[suit];
};

const isItemSelected = (type: string, pIdx?: number, cIdx?: number, s?: string) => {
    if (!selectedItem.value) return false;
    return selectedItem.value.type === type && 
           selectedItem.value.pileIdx === pIdx && 
           selectedItem.value.cardIdx === cIdx && 
           selectedItem.value.suit === s;
};

const winner = isGameWon;
</script>

<template>
    <div class="solitaire-container">
        <!-- Floating Back Button -->
        <button class="back-btn-overlay" @click="showExitConfirm = true">
            <v-icon>mdi-arrow-left</v-icon>
        </button>

        <div class="game-area">
            <!-- Top Section: Stock, Waste, Foundations -->
            <div class="top-row">
                <div class="stock-waste">
                    <div class="card-slot stock" @click="handleStockClick">
                        <div v-if="stock.length > 0" class="card back">
                            <div class="pattern"></div>
                        </div>
                        <div v-else class="empty-slot"><v-icon>mdi-refresh</v-icon></div>
                    </div>
                    <div class="card-slot waste">
                        <div v-if="waste.length > 0" 
                            class="card face-up" 
                            :class="[waste[waste.length-1].suit, { 'selected': isItemSelected('waste') }]"
                            @click="handleCardClick('waste')"
                        >
                            <span class="rank">{{ waste[waste.length-1].rank }}</span>
                            <div class="center-suit">{{ getSuitSymbol(waste[waste.length-1].suit) }}</div>
                        </div>
                    </div>
                </div>

                <div class="foundations">
                    <div v-for="suit in (['hearts', 'diamonds', 'clubs', 'spades'] as Suit[])" :key="suit" 
                        class="card-slot foundation"
                        @click="handleCardClick('foundation', undefined, undefined, suit)"
                    >
                        <div v-if="foundations[suit].length > 0" 
                            class="card face-up" 
                            :class="[suit, { 'selected': isItemSelected('foundation', undefined, undefined, suit) }]"
                        >
                            <span class="rank">{{ foundations[suit][foundations[suit].length-1].rank }}</span>
                            <div class="center-suit">{{ getSuitSymbol(suit) }}</div>
                        </div>
                        <div v-else class="suit-placeholder">{{ getSuitSymbol(suit) }}</div>
                    </div>
                </div>
            </div>

            <!-- Tableau Section -->
            <div class="tableau">
                <div v-for="(pile, pIdx) in tableau" :key="pIdx" class="tableau-pile">
                    <div v-if="pile.length === 0" class="empty-tableau-slot" @click="handleCardClick('tableau', pIdx)"></div>
                    <div v-for="(card, cIdx) in pile" :key="card.id" 
                        class="card stacked"
                        :class="[
                            card.isFaceUp ? 'face-up' : 'back', 
                            card.suit,
                            { 'selected': isItemSelected('tableau', pIdx, cIdx) }
                        ]"
                        :style="{ top: cIdx * 25 + 'px' }"
                        @click.stop="card.isFaceUp && handleCardClick('tableau', pIdx, cIdx)"
                    >
                        <template v-if="card.isFaceUp">
                            <span class="rank">{{ card.rank }}</span>
                            <div class="center-suit">{{ getSuitSymbol(card.suit) }}</div>
                        </template>
                        <div v-else class="pattern"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Floating Utils -->
        <div class="floating-utils">
            <button class="icon-btn-round" @click="showRestartConfirm = true" title="Restart">
                <v-icon>mdi-refresh</v-icon>
            </button>
        </div>

        <v-dialog :model-value="winner" persistent max-width="400">
            <v-card class="rounded-xl pa-8 text-center win-card" color="#064e3b" theme="dark">
                <div class="celebration">✨🎇✨</div>
                <v-card-title class="text-h3 font-weight-black mb-4">Solitaire!</v-card-title>
                <v-card-text class="text-h6 opacity-80 mb-6">Congratulations! You cleared the deck.</v-card-text>
                <v-card-actions class="justify-center gap-4">
                    <v-btn variant="outlined" rounded="lg" class="px-8" @click="emit('exit')">Exit</v-btn>
                    <v-btn color="primary" variant="flat" rounded="lg" class="px-8" @click="initGame">Play Again</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- Common Dialogs -->
        <v-dialog v-model="showExitConfirm" max-width="400">
            <v-card class="rounded-xl pa-4" color="#1a1a1a" theme="dark">
                <v-card-title class="text-h5 text-center">Exit Game?</v-card-title>
                <v-card-actions class="justify-center gap-2">
                    <v-btn variant="text" @click="showExitConfirm = false">Stay</v-btn>
                    <v-btn color="error" variant="flat" rounded="lg" class="px-6" @click="emit('exit')">Leave</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="showRestartConfirm" max-width="400">
            <v-card class="rounded-xl pa-4" color="#1a1a1a" theme="dark">
                <v-card-title class="text-h5 text-center">Restart Game?</v-card-title>
                <v-card-actions class="justify-center gap-2">
                    <v-btn variant="text" @click="showRestartConfirm = false">Cancel</v-btn>
                    <v-btn color="primary" variant="flat" rounded="lg" class="px-6" @click="initGame(); showRestartConfirm = false">Restart</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<style scoped>
.solitaire-container {
    width: 100vw;
    height: 100dvh;
    background: radial-gradient(circle at center, #065f46, #064e3b);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    font-family: 'Fredoka', sans-serif;
}

.back-btn-overlay {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 100;
    color: white;
    background: rgba(4, 120, 87, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: 44px;
    height: 44px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
}

.game-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 80px 20px 20px;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
}

.top-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    height: 120px;
}

.stock-waste {
    display: flex;
    gap: 15px;
}

.foundations {
    display: flex;
    gap: 10px;
}

.card-slot {
    width: 80px;
    height: 110px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    border: 2px dashed rgba(255, 255, 255, 0.1);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.suit-placeholder {
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.1);
}

.empty-slot {
    color: rgba(255, 255, 255, 0.2);
}

.tableau {
    display: flex;
    justify-content: space-between;
    flex: 1;
}

.tableau-pile {
    width: 80px;
    position: relative;
}

.empty-tableau-slot {
    width: 100%;
    height: 110px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    border: 2px dashed rgba(255, 255, 255, 0.1);
}

/* Card Styling */
.card {
    width: 80px;
    height: 110px;
    border-radius: 8px;
    background: white;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    position: relative;
    transition: all 0.2s;
    user-select: none;
}

.card.stacked {
    position: absolute;
    left: 0;
}

.card.back {
    background: #1e293b;
    border: 4px solid white;
}

.card.back .pattern {
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(45deg, #334155, #334155 10px, #1e293b 10px, #1e293b 20px);
    border-radius: 4px;
}

.card.face-up {
    padding: 8px;
    display: flex;
    flex-direction: column;
}

.card.hearts, .card.diamonds { color: #e11d48; }
.card.clubs, .card.spades { color: #1e293b; }

.card .rank { font-size: 1.8rem; font-weight: 800; line-height: 1; }
.card .center-suit { 
    position: absolute; top: 50%; left: 50%; 
    transform: translate(-50%, -50%); 
    font-size: 2.8rem; opacity: 0.2; 
}

.card.selected {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 15px 30px rgba(0,0,0,0.4);
    outline: 3px solid #38bdf8;
    z-index: 100 !important;
}

.floating-utils {
    position: absolute; bottom: 20px; right: 20px;
}

.icon-btn-round {
    background: rgba(255, 255, 255, 0.1);
    color: white; width: 48px; height: 48px; border-radius: 50%;
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
}
.icon-btn-round:hover { background: rgba(255, 255, 255, 0.2); transform: scale(1.1); }

.win-card .celebration { font-size: 3rem; margin-bottom: 10px; }

@media (max-width: 600px) {
    .card, .card-slot, .empty-tableau-slot { width: 45px; height: 65px; }
    .card .rank { font-size: 1.1rem; }
    .card .center-suit { font-size: 1.6rem; }
    .top-row { height: 75px; }
    .tableau-pile { width: 45px; }
    .game-area { padding-top: 60px; }
}
</style>
