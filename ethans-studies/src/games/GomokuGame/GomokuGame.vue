<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useGomoku } from './useGomoku';
import { useAudio } from '~/composables/useAudio';

const BOARD_SIZE = 15;
const { board, turn, winner, lastMove, initBoard, placeStone } = useGomoku(BOARD_SIZE);
const { speak } = useAudio();
const emit = defineEmits(['exit']);

const showExitConfirm = ref(false);
const showRestartConfirm = ref(false);

onMounted(() => {
    initBoard();
});

const handleIntersectionClick = (index: number) => {
    if (winner.value) return;
    const colorBefore = turn.value;
    const success = placeStone(index);
    if (success) {
        speak(colorBefore);
    }
};

const isLastMove = (index: number) => lastMove.value === index;
</script>

<template>
    <div class="gomoku-game-container">
        <!-- Floating Back Button -->
        <button class="back-btn-overlay" @click="showExitConfirm = true">
            <v-icon>mdi-arrow-left</v-icon>
        </button>

        <div class="game-layout">
            <!-- Player Black Area (Top - Rotated) -->
            <div class="player-panel black" :class="{ 'active': turn === 'black' && !winner }">
                <div class="player-info">
                    <span class="avatar" :class="{ 'breathing': turn === 'black' && !winner }">
                        <div class="stone-icon black"></div>
                    </span>
                    <div class="stats">
                        <span class="label">Black</span>
                        <span class="status">{{ winner === 'black' ? 'Winner! 🏆' : 'Opponent' }}</span>
                    </div>
                </div>
            </div>

            <!-- Board Container -->
            <div class="board-container">
                <div class="board-inner">
                    <div class="go-board" :style="{ '--size': BOARD_SIZE }">
                        <!-- Board Lines -->
                        <div class="grid-lines">
                            <div v-for="i in BOARD_SIZE" :key="'h'+i" class="line horizontal" :style="{ top: `${(i-0.5) * (100/BOARD_SIZE)}%` }"></div>
                            <div v-for="i in BOARD_SIZE" :key="'v'+i" class="line vertical" :style="{ left: `${(i-0.5) * (100/BOARD_SIZE)}%` }"></div>
                        </div>

                        <!-- Star Points (Hoshi) for 15x15 -->
                        <div class="star-points">
                            <!-- Line 4, 8, 12 positions: (3.5/15), (7.5/15), (11.5/15) -->
                            <div class="star-point" style="top: 23.33%; left: 23.33%"></div>
                            <div class="star-point" style="top: 23.33%; left: 76.67%"></div>
                            <div class="star-point" style="top: 76.67%; left: 23.33%"></div>
                            <div class="star-point" style="top: 76.67%; left: 76.67%"></div>
                            <div class="star-point" style="top: 50%; left: 50%"></div>
                            <div class="star-point" style="top: 50%; left: 23.33%"></div>
                            <div class="star-point" style="top: 50%; left: 76.67%"></div>
                            <div class="star-point" style="top: 23.33%; left: 50%"></div>
                            <div class="star-point" style="top: 76.67%; left: 50%"></div>
                        </div>

                        <!-- Intersections / Stones -->
                        <div class="intersections">
                            <div 
                                v-for="(stone, index) in board" 
                                :key="index"
                                class="intersection"
                                @click="handleIntersectionClick(index)"
                            >
                                <div v-if="stone" class="stone" :class="[stone, { 'last-move': isLastMove(index) }]">
                                    <div class="stone-glint"></div>
                                    <div v-if="isLastMove(index)" class="last-move-marker"></div>
                                </div>
                                <div v-else class="hover-ghost" :class="turn"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Player White Area (Bottom) -->
            <div class="player-panel white" :class="{ 'active': turn === 'white' && !winner }">
                <div class="player-info">
                    <span class="avatar" :class="{ 'breathing': turn === 'white' && !winner }">
                        <div class="stone-icon white"></div>
                    </span>
                    <div class="stats">
                        <span class="label">White</span>
                        <span class="status">{{ winner === 'white' ? 'Winner! 🏆' : 'You' }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Floating Utilities -->
        <div class="floating-utils">
            <button class="icon-btn-round" @click="showRestartConfirm = true" title="Restart">
                <v-icon>mdi-refresh</v-icon>
            </button>
        </div>

        <!-- Win Dialog -->
        <v-dialog :model-value="!!winner" persistent max-width="400">
            <v-card class="rounded-xl pa-6 text-center" color="#0f172a" theme="dark" border>
                <div class="text-h3 mb-4">🏆</div>
                <v-card-title class="text-h4 font-weight-bold justify-center mb-2">
                    Game Over!
                </v-card-title>
                <v-card-text class="text-h6 opacity-80 pb-6">
                    <span :class="winner" class="winner-label">{{ winner?.toUpperCase() }}</span> wins the match!
                </v-card-text>
                <v-card-actions class="justify-center gap-4">
                    <v-btn variant="outlined" rounded="lg" class="px-8" @click="emit('exit')">Exit</v-btn>
                    <v-btn color="primary" variant="flat" rounded="lg" class="px-8" @click="initBoard">Play Again</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- Dialogs -->
        <v-dialog v-model="showExitConfirm" max-width="400">
            <v-card class="rounded-xl pa-4" color="#1a1a1a" theme="dark">
                <v-card-title class="text-h5 text-center">
                    <v-icon color="warning" class="mr-2">mdi-alert</v-icon> Exit Game?
                </v-card-title>
                <v-card-actions class="justify-center gap-2">
                    <v-btn variant="text" rounded="lg" @click="showExitConfirm = false">Stay</v-btn>
                    <v-btn color="error" variant="flat" rounded="lg" class="px-6" @click="emit('exit')">Leave</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="showRestartConfirm" max-width="400">
            <v-card class="rounded-xl pa-4" color="#1a1a1a" theme="dark">
                <v-card-title class="text-h5 text-center">
                    <v-icon color="info" class="mr-2">mdi-refresh</v-icon> Restart Game?
                </v-card-title>
                <v-card-actions class="justify-center gap-2">
                    <v-btn variant="text" rounded="lg" @click="showRestartConfirm = false">Cancel</v-btn>
                    <v-btn color="primary" variant="flat" rounded="lg" class="px-6" @click="initBoard(); showRestartConfirm = false">Restart</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<style scoped>
.gomoku-game-container {
    width: 100vw;
    height: 100dvh;
    background: #020617;
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
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: 44px;
    height: 44px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    backdrop-filter: blur(12px);
}

.game-layout {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
}

.player-panel {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0 20px;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.player-panel.black { 
    background: linear-gradient(to bottom, rgba(0,0,0,0.6), transparent); 
    transform: rotate(180deg);
}
.player-panel.white { background: linear-gradient(to top, rgba(255,255,255,0.05), transparent); }

.player-panel.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: #38bdf8;
    border-radius: 2px;
    box-shadow: 0 0 15px #38bdf8;
}
.player-panel.active.black::after { bottom: auto; top: 0; }

.player-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
}

.avatar {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.stats {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.label {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
}

.status {
    font-size: 1.1rem;
    color: white;
    font-weight: 600;
}

.board-container {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    background: #020617;
}

.board-inner {
    width: 100%;
    max-width: min(99vw, 80vh);
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.go-board {
    width: 100%;
    height: 100%;
    background-color: #d1a15e;
    background-image: 
        url('https://www.transparenttextures.com/patterns/wood-pattern-7.png'),
        radial-gradient(circle at center, transparent, rgba(0,0,0,0.05));
    border-radius: 2px;
    position: relative;
    box-shadow: 0 20px 60px rgba(0,0,0,0.8);
    border: 6px solid #2d1e14;
}

.grid-lines {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
}

.line { position: absolute; background: rgba(0, 0, 0, 0.7); }
.line.horizontal { left: calc(50% / var(--size)); right: calc(50% / var(--size)); height: 1px; }
.line.vertical { top: calc(50% / var(--size)); bottom: calc(50% / var(--size)); width: 1px; }

.star-point {
    position: absolute;
    width: 5px;
    height: 5px;
    background: #000;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.9;
}

.intersections {
    display: grid;
    grid-template-columns: repeat(var(--size), 1fr);
    grid-template-rows: repeat(var(--size), 1fr);
    width: 100%;
    height: 100%;
    position: relative;
}

.intersection {
    display: flex;
    align-items: center;
    justify-content: center;
}

.stone {
    width: 94%;
    height: 94%;
    border-radius: 50%;
    position: relative;
}

.stone.black {
    background: radial-gradient(circle at 30% 30%, #333, #000);
    box-shadow: 1px 2px 4px rgba(0,0,0,0.8);
}

.stone.white {
    background: radial-gradient(circle at 30% 30%, #fff, #ddd);
    box-shadow: 1px 2px 4px rgba(0,0,0,0.4);
}

.stone-glint {
    position: absolute; top: 15%; left: 20%; width: 30%; height: 20%;
    background: rgba(255, 255, 255, 0.4); filter: blur(2px); border-radius: 50%;
}

.last-move-marker {
    position: absolute; top: 50%; left: 50%; width: 20%; height: 20%;
    border-radius: 50%; transform: translate(-50%, -50%);
    border: 1.5px solid;
    opacity: 0.8;
}
.stone.black .last-move-marker { border-color: rgba(255,255,255,0.9); }
.stone.white .last-move-marker { border-color: rgba(0,0,0,0.8); }

.hover-ghost {
    width: 80%;
    height: 80%;
    border-radius: 50%;
    opacity: 0;
}
.intersection:hover .hover-ghost { opacity: 0.2; }
.hover-ghost.black { background: black; }
.hover-ghost.white { background: white; }

.stone-icon { width: 100%; height: 100%; border-radius: 50%; }
.stone-icon.black { background: radial-gradient(circle at 30% 30%, #444, #000); }
.stone-icon.white { background: radial-gradient(circle at 30% 30%, #fff, #bbb); border: 1px solid rgba(0,0,0,0.1); }

.floating-utils {
    position: absolute; bottom: 20px; right: 20px;
    display: flex; flex-direction: column; gap: 12px; z-index: 100;
}

.icon-btn-round {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white; width: 48px; height: 48px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; backdrop-filter: blur(10px); transition: all 0.3s;
}
.icon-btn-round:hover { background: rgba(56, 189, 248, 0.2); border-color: #38bdf8; transform: scale(1.1); }

.winner-label.black { color: #fff; text-shadow: 0 0 10px rgba(255,255,255,0.5); }
.winner-label.white { color: #38bdf8; }

@keyframes breathing {
    0% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(255,255,255,0.1)); }
    50% { transform: scale(1.1); filter: drop-shadow(0 0 15px rgba(56, 189, 248, 0.5)); }
    100% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(255,255,255,0.1)); }
}
.breathing { animation: breathing 2s ease-in-out infinite; }

@media (min-width: 900px) and (orientation: landscape) {
    .game-layout { flex-direction: row; }
    .player-panel { height: 100%; width: 200px; background: none !important; }
    .player-panel.active::after { width: 4px; height: 60px; left: 0; top: 50%; transform: translateY(-50%); }
    .player-panel.white.active::after { left: auto; right: 0; }
    .player-info { flex-direction: column; }
    .stats { align-items: center; text-align: center; }
}
</style>
