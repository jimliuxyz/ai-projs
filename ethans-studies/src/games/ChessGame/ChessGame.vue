<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useChess } from './useChess';
import { useAudio } from '~/composables/useAudio';
import { settings } from '~/store/settings';
import ChessSettingsTabContent from './ChessSettingsTabContent.vue';
import CommonSettingsDialog from '~/components/CommonSettingsDialog.vue';

const chessExtraTabs = [{ id: 'colors', label: 'Theme', icon: '🎨' }];

const emit = defineEmits(['exit']);
const showSettings = ref(false);
const showExitConfirm = ref(false);
const showRestartConfirm = ref(false);
const { speak } = useAudio();

const { 
    board, 
    selectedSquare, 
    validMoves, 
    turn, 
    captureHistory,
    gameStatus,
    winner,
    isCheck,
    initBoard, 
    handleSquareClick: rawHandleClick 
} = useChess();

const handleSquareClick = (square: any) => {
    // Speak piece name if selecting a piece of the current turn's color
    const isOurPiece = square.piece && square.piece.color === turn.value;
    const isDifferentPiece = square !== selectedSquare.value;
    
    if (isOurPiece && isDifferentPiece) {
        speak(square.piece.type);
    }
    rawHandleClick(square);
};

import { type Piece } from './useChess';

onMounted(() => {
    initBoard();
});

const getPieceSymbol = (type: string, color: string) => {
    const symbols: Record<string, Record<string, string>> = {
        white: {
            king: '♚',
            queen: '♛',
            rook: '♜',
            bishop: '♝',
            knight: '♞',
            pawn: '♟'
        },
        black: {
            king: '♚',
            queen: '♛',
            rook: '♜',
            bishop: '♝',
            knight: '♞',
            pawn: '♟'
        }
    };
    return symbols[color][type];
};

const isSelected = (square: any) => selectedSquare.value === square;
const isValidMove = (square: any) => validMoves.value.includes(square);

</script>

<template>
    <div class="chess-game-container">
        <!-- Floating Back Button -->
        <button class="back-btn-overlay" @click="showExitConfirm = true">
            <v-icon>mdi-arrow-left</v-icon>
        </button>

        <div class="game-layout">
            <!-- Player Black Area -->
            <div class="player-panel black" :class="{ 'active': turn === 'black' }">
                <div class="player-info">
                    <span class="avatar" :class="{ 'breathing': turn === 'black' }"
                        :style="{ 
                            color: settings.chessBlackColor, 
                            '-webkit-text-stroke': `0.2px ${settings.chessBlackOutlineColor}` 
                        }">
                        {{ getPieceSymbol('king', 'black') }}
                    </span>
                    <v-chip v-if="isCheck() && turn === 'black'" size="x-small" color="error" class="ml-2 px-2" variant="flat" style="transform: rotate(180deg)">CHECK</v-chip>
                    <div class="captured-pieces">
                        <div v-for="(p, i) in captureHistory.filter((p: Piece) => p.color === 'white')" :key="i" class="mini-piece"
                            :style="{ 
                                color: settings.chessWhiteColor, 
                                '-webkit-text-stroke': `0.2px ${settings.chessWhiteOutlineColor}` 
                            }">
                            {{ getPieceSymbol(p.type, p.color) }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Chess Board -->
            <div class="board-container">
                <div class="board-inner">
                    <div class="board">
                        <div 
                            v-for="square in board" 
                            :key="`${square.row}-${square.col}`"
                            class="square"
                            :class="[
                                (square.row + square.col) % 2 === 0 ? 'light' : 'dark',
                                { 
                                    'selected': isSelected(square),
                                    'highlight': isValidMove(square),
                                    'clickable': (square.piece && square.piece.color === turn) || isValidMove(square),
                                    'check': square.piece?.type === 'king' && isCheck() && square.piece.color === turn
                                },
                            ]"
                            @click="handleSquareClick(square)"
                        >
                            <div v-if="isValidMove(square)" class="move-dot"></div>
                            <div 
                                v-if="square.piece" 
                                class="piece" 
                                :class="[square.piece.color, { 'pulse': isSelected(square) }]"
                                :style="{ 
                                    color: square.piece.color === 'white' ? settings.chessWhiteColor : settings.chessBlackColor,
                                    '-webkit-text-stroke': square.piece.color === 'white' 
                                        ? `0.2px ${settings.chessWhiteOutlineColor}` 
                                        : `0.2px ${settings.chessBlackOutlineColor}`
                                }"
                            >
                                {{ getPieceSymbol(square.piece.type, square.piece.color) }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Player White Area -->
            <div class="player-panel white" :class="{ 'active': turn === 'white' }">
                <div class="player-info">
                    <span class="avatar" :class="{ 'breathing': turn === 'white' }"
                        :style="{ 
                            color: settings.chessWhiteColor, 
                            '-webkit-text-stroke': `0.2px ${settings.chessWhiteOutlineColor}` 
                        }">
                        {{ getPieceSymbol('king', 'white') }}
                    </span>
                    <v-chip v-if="isCheck() && turn === 'white'" size="x-small" color="error" class="ml-2 px-2" variant="flat">CHECK</v-chip>
                    <div class="captured-pieces">
                        <div v-for="(p, i) in captureHistory.filter((p: Piece) => p.color === 'black')" :key="i" class="mini-piece"
                            :style="{ 
                                color: settings.chessBlackColor, 
                                '-webkit-text-stroke': `0.2px ${settings.chessBlackOutlineColor}` 
                            }">
                            {{ getPieceSymbol(p.type, p.color) }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Floating Utilities -->
        <div class="floating-utils">
            <button class="icon-btn-round" @click="showRestartConfirm = true" title="Restart">
                <v-icon>mdi-refresh</v-icon>
            </button>
            <button class="icon-btn-round" @click="showSettings = true" title="Settings">
                <v-icon>mdi-cog</v-icon>
            </button>
        </div>

        <CommonSettingsDialog v-model="showSettings" title="Chess Settings" :extra-tabs="chessExtraTabs">
            <template #colors>
                <ChessSettingsTabContent />
            </template>
        </CommonSettingsDialog>

        <!-- Exit Confirmation Dialog -->
        <v-dialog v-model="showExitConfirm" max-width="400">
            <v-card class="rounded-xl pa-4" color="#0f172a" theme="dark" border>
                <v-card-title class="text-h5 font-weight-bold d-flex align-center">
                    <v-icon color="warning" class="mr-2">mdi-alert</v-icon>
                    End Game?
                </v-card-title>
                <v-card-text class="text-body-1 opacity-80 pt-2">
                    Are you sure you want to leave the current chess match? Your progress will be lost.
                </v-card-text>
                <v-card-actions class="pb-2 px-2 gap-2">
                    <v-spacer></v-spacer>
                    <v-btn
                        variant="text"
                        rounded="lg"
                        class="px-6"
                        @click="showExitConfirm = false"
                    >
                        Stay
                    </v-btn>
                    <v-btn
                        color="error"
                        variant="flat"
                        rounded="lg"
                        class="px-6"
                        @click="emit('exit')"
                    >
                        Leave
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- Restart Confirmation Dialog -->
        <v-dialog v-model="showRestartConfirm" max-width="400">
            <v-card class="rounded-xl pa-4" color="#0f172a" theme="dark" border>
                <v-card-title class="text-h5 font-weight-bold d-flex align-center">
                    <v-icon color="info" class="mr-2">mdi-refresh-circle</v-icon>
                    Restart Game?
                </v-card-title>
                <v-card-text class="text-body-1 opacity-80 pt-2">
                    This will clear the current board and reset the match. Are you sure?
                </v-card-text>
                <v-card-actions class="pb-2 px-2 gap-2">
                    <v-spacer></v-spacer>
                    <v-btn
                        variant="text"
                        rounded="lg"
                        class="px-6"
                        @click="showRestartConfirm = false"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        color="primary"
                        variant="flat"
                        rounded="lg"
                        class="px-6"
                        @click="() => { initBoard(); showRestartConfirm = false; }"
                    >
                        Restart
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- Game Over Dialog -->
        <v-dialog :model-value="gameStatus !== 'playing'" persistent max-width="400">
            <v-card class="rounded-xl pa-6 text-center" color="#0f172a" theme="dark" border>
                <div class="text-h3 mb-4">
                    {{ gameStatus === 'checkmate' ? '🏆' : '🤝' }}
                </div>
                <v-card-title class="text-h4 font-weight-bold justify-center mb-2">
                    {{ gameStatus === 'checkmate' ? 'Checkmate!' : 'Stalemate' }}
                </v-card-title>
                <v-card-text class="text-h6 opacity-80 pb-6">
                    <template v-if="gameStatus === 'checkmate'">
                        <span :style="{ color: winner === 'white' ? settings.chessWhiteColor : settings.chessBlackColor }">
                            {{ winner === 'white' ? 'Player 1' : 'Player 2' }}
                        </span> wins the match!
                    </template>
                    <template v-else>
                        The match ended in a draw.
                    </template>
                </v-card-text>
                <v-card-actions class="justify-center gap-4">
                    <v-btn
                        variant="outlined"
                        rounded="lg"
                        class="px-8"
                        @click="emit('exit')"
                    >
                        Exit
                    </v-btn>
                    <v-btn
                        color="primary"
                        variant="flat"
                        rounded="lg"
                        class="px-8"
                        @click="initBoard"
                    >
                        Play Again
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<style scoped>
.chess-game-container {
    width: 100vw;
    height: 100vh;
    background: radial-gradient(circle at center, #1e293b 0%, #020617 100%);
    color: white;
    font-family: 'Outfit', sans-serif;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
}

/* Floating Elements */
.back-btn-overlay {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 100;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    backdrop-filter: blur(12px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.back-btn-overlay:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.2);
}

.floating-utils {
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 100;
}

.icon-btn-round {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    backdrop-filter: blur(12px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.icon-btn-round:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(90deg) scale(1.1);
    border-color: rgba(255, 255, 255, 0.3);
}

/* Main Layout */
.game-layout {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0;
}

.player-panel {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    background: rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.02);
}

.player-panel.white { order: 2; border-top: 1px solid rgba(255, 255, 255, 0.02); border-bottom: none; }
.player-panel.black { order: 0; transform: rotate(180deg); }

.player-panel.active {
    background: linear-gradient(to right, rgba(56, 189, 248, 0.05), rgba(56, 189, 248, 0.15), rgba(56, 189, 248, 0.05));
}

.player-info {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    max-width: 600px;
    padding: 0 24px;
}

.avatar { 
    font-size: 1.6rem; 
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    filter: drop-shadow(0 0 8px rgba(255,255,255,0.2));
    transform-origin: center center;
}

.name { 
    display: none;
}

.player-panel.active .name { 
    color: #e2e8f0;
    text-shadow: 0 0 10px rgba(255,255,255,0.3);
}

.captured-pieces {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-left: 15px;
    min-height: 30px;
    align-items: center;
}

.mini-piece { 
    font-size: 1.3rem; 
    opacity: 0.4;
    transition: opacity 0.5s;
    filter: grayscale(0.5);
}

.player-panel.active .mini-piece { opacity: 1; filter: grayscale(0); }

/* Board Container */
.board-container {
    flex: 1;
    order: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #020617;
    overflow: hidden;
    padding: 10px;
}

.board-inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.board {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    width: 100%;
    height: 100%;
    max-height: 150vw; 
    max-width: 150vh;
    
    /* Physical Board Frame */
    border: 12px solid #3d2b1f;
    outline: 2px solid #5d4037;
    border-radius: 4px;
    box-shadow: 
        0 20px 50px rgba(0,0,0,0.9),
        inset 0 0 40px rgba(0,0,0,0.5);
    background: #2b1d16;
}

.square {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: default;
    box-sizing: border-box;
}

.square.clickable {
    cursor: pointer;
}

.square:not(.clickable) {
    pointer-events: none;
}

/* Premium Wood Textures */
.square.light { 
    background-color: #d2b48c; /* Tan/Maple */
    background-image: 
        linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px),
        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
        repeating-linear-gradient(
            3deg, 
            transparent 0px, transparent 2px, 
            rgba(0,0,0,0.04) 3px, transparent 4px
        ),
        repeating-linear-gradient(
            -2deg, 
            transparent 0px, transparent 5px, 
            rgba(255,255,255,0.03) 6px, transparent 7px
        );
}

.square.dark { 
    background-color: #5d4037; /* Walnut */
    background-image: 
        linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px),
        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
        repeating-linear-gradient(
            4deg, 
            transparent 0px, transparent 3px, 
            rgba(0,0,0,0.15) 4px, transparent 5px
        ),
        repeating-linear-gradient(
            -3deg, 
            transparent 0px, transparent 8px, 
            rgba(255,255,255,0.02) 9px, transparent 10px
        );
}

.square.selected { 
    background: linear-gradient(135deg, rgba(245, 158, 11, 0.8) 0%, rgba(217, 119, 6, 0.9) 100%) !important;
    box-shadow: inset 0 0 20px rgba(0,0,0,0.3);
    z-index: 10;
}

.square.highlight { 
    background: radial-gradient(circle, rgba(16, 185, 129, 0.5) 0%, transparent 80%) !important;
}

.square.highlight::after {
    content: '';
    position: absolute;
    width: 30%;
    height: 30%;
    background: rgba(16, 185, 129, 0.4);
    border-radius: 50%;
    box-shadow: 0 0 15px rgba(16, 185, 129, 0.3);
}

.square.check {
    background: radial-gradient(circle, rgba(239, 68, 68, 0.8) 0%, transparent 80%) !important;
}

.square.check .piece {
    filter: drop-shadow(0 0 15px rgba(239, 68, 68, 0.8)) !important;
}

.move-dot {
    display: none; /* Replaced by square.highlight pseudo element */
}

.piece {
    font-size: clamp(24px, min(11vw, 8vh), 100px); 
    user-select: none;
    z-index: 5;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    line-height: 1;
    pointer-events: none;
}

.piece.white {
    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.6));
}

.piece.black {
    transform: rotate(180deg);
    filter: drop-shadow(0 2px 4px rgba(255,255,255,0.1)) drop-shadow(0 6px 10px rgba(0,0,0,0.8));
}

.piece.selected {
    /* Potential future use for selection styles */
}

.square:hover .piece.white {
    transform: scale(1.1) translateY(-4px);
}

.square:hover .piece.black {
    transform: rotate(180deg) scale(1.1) translateY(-4px);
}

.square.selected .piece.black {
    transform: rotate(180deg) scale(1.1);
}

.square.selected .piece.white {
    transform: scale(1.1);
}

/* Breathing & Pulse Animations */
@keyframes breathing {
    0% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.2); opacity: 1; filter: drop-shadow(0 0 12px rgba(255,255,255,0.4)); }
    100% { transform: scale(1); opacity: 0.8; }
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
}

.breathing {
    animation: breathing 2s ease-in-out infinite;
}

.piece.pulse {
    animation: pulse 1.5s ease-in-out infinite;
}

.piece.black.pulse {
    animation: pulse-black 1.5s ease-in-out infinite;
}

@keyframes pulse-black {
    0% { transform: rotate(180deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.15); }
    100% { transform: rotate(180deg) scale(1); }
}

.player-panel {
    pointer-events: none; /* Icons are purely decorative */
}

</style>
