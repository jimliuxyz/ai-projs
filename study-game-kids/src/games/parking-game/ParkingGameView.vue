<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useParkingGameStore } from './ParkingGameStore';
import { useParkingPhysics } from './useParkingPhysics';
import { useAudio } from '~/composables/useAudio';
import SettingsDialog from '~/components/SettingsDialog.vue';
import CarSettingsTabContent from './CarSettingsTabContent.vue';

const { t } = useI18n();
const router = useRouter();
const gameStore = useParkingGameStore();
const { speak, stopSpeaking, playTone, playCorrect, playWrong } = useAudio();

const canvasRef = ref<HTMLCanvasElement | null>(null);
const showSettings = ref(false);
const p1Speed = ref(1.0);
const p2Speed = ref(1.0);

const scores = ref({ P1: 0, P2: 0 });

onMounted(async () => {
    await gameStore.prepareAndStart();
    
    if (canvasRef.value) {
        useParkingPhysics(canvasRef.value, {
            p1Speed,
            p2Speed,
            onScore: (team, total) => {
                gameStore.updateScore(team, total);
                scores.value = { ...gameStore.scores };
                playTone(600, 'sine', 0.1);
            },
            onWin: () => {
                playCorrect();
            },
            onSpeak: (text) => speak(text),
            onParkSuccess: () => playTone(1000, 'sine', 0.05),
            onParkFail: () => playWrong(),
            onComplete: () => {
                gameStore.state = 'finished' as any;
            }
        });
    }
});

function goBack() {
    stopSpeaking();
    gameStore.exit();
    router.push('/');
}

// Control pausing
watch(showSettings, (val) => {
    if (val) gameStore.pause();
    else gameStore.resume();
});
</script>

<template>
    <div class="game-view-container">
        <canvas ref="canvasRef" class="webgl"></canvas>
        
        <!-- P2 Function Area (Top, Rotated) -->
        <div class="function-area p2">
            <div class="ctrl-group">
                <button class="icon-btn" @click="showSettings = true" title="Game Settings">🚗</button>
                <div class="speed-container">
                    <v-icon color="white" size="x-small">mdi-speedometer</v-icon>
                    <input type="range" v-model.number="p2Speed" min="0.5" max="3.0" step="0.1" class="speed-slider">
                </div>
            </div>
            <div class="score-display">
                {{ scores.P2 }}
                <span v-if="scores.P2 > scores.P1" class="trophy">🏆</span>
            </div>
        </div>

        <!-- P1 Function Area (Bottom) -->
        <div class="function-area p1">
            <div class="ctrl-group">
                <button class="icon-btn" @click="showSettings = true" title="Game Settings">🚗</button>
                <div class="speed-container">
                    <v-icon color="white" size="x-small">mdi-speedometer</v-icon>
                    <input type="range" v-model.number="p1Speed" min="0.5" max="3.0" step="0.1" class="speed-slider">
                </div>
            </div>
            <div class="center-controls">
                <button class="icon-btn main-set" @click="showSettings = true">⚙️</button>
                <button class="icon-btn main-exit" @click="goBack">🚪</button>
            </div>
            <div class="score-display">
                {{ scores.P1 }}
                <span v-if="scores.P1 > scores.P2" class="trophy">🏆</span>
            </div>
        </div>

        <!-- Settings Dialog (Global) -->
        <SettingsDialog 
            v-model="showSettings" 
            initial-tab="extra"
            :extra-tab-title="$t('game.parkingGame.name')"
            extra-tab-icon="mdi-car"
        >
            <template #game-settings>
                <div class="parking-settings-section">
                    <h3 class="text-h6 mb-4 d-flex align-center">
                        <v-icon start color="primary">mdi-car-settings</v-icon>
                        {{ $t('game.parkingGame.carTitle', 'Car Customization') }}
                    </h3>
                    
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-card variant="outlined" class="pa-4 rounded-xl border-opacity-25">
                                <div class="text-overline mb-2 text-primary">PLAYER 1</div>
                                <CarSettingsTabContent team="P1" />
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-card variant="outlined" class="pa-4 rounded-xl border-opacity-25">
                                <div class="text-overline mb-2 text-error">PLAYER 2</div>
                                <CarSettingsTabContent team="P2" />
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
            </template>
        </SettingsDialog>
    </div>
</template>

<style scoped>
.game-view-container {
    width: 100vw;
    height: 100vh;
    position: relative;
    background: #050505;
    overflow: hidden;
}

.webgl {
    width: 100%;
    height: 100%;
    display: block;
}

.function-area {
    position: absolute;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background: rgba(15, 15, 15, 0.85);
    backdrop-filter: blur(15px);
    z-index: 1000;
    box-sizing: border-box;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.function-area.p2 {
    top: 0;
    transform: rotate(180deg);
}

.function-area.p1 {
    bottom: 0;
}

.ctrl-group {
    display: flex;
    align-items: center;
    gap: 15px;
}

.speed-container {
    display: flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.05);
    padding: 6px 12px;
    border-radius: 20px;
}

.speed-slider {
    appearance: none;
    -webkit-appearance: none;
    width: 120px;
    height: 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
    outline: none;
}

.speed-slider::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.p1 .speed-slider::-webkit-slider-thumb { background: #3b82f6; box-shadow: 0 0 15px rgba(59, 130, 246, 0.5); }
.p2 .speed-slider::-webkit-slider-thumb { background: #ef4444; box-shadow: 0 0 15px rgba(239, 68, 68, 0.5); }

.score-display {
    color: white;
    font-size: 1.5rem;
    font-weight: 900;
    font-family: 'Outfit', sans-serif;
}

.p1 .score-display { color: #3b82f6; }
.p2 .score-display { color: #ef4444; }

.trophy {
    margin: 0 5px;
    font-size: 1.2rem;
}

.center-controls {
    display: flex;
    gap: 20px;
}

.icon-btn {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    font-size: 24px;
    color: white;
    cursor: pointer;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
}

.icon-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
}

.car-modal {
    background: #1e293b !important;
    color: white !important;
}

@media (max-width: 600px) {
    .speed-slider { width: 80px; }
    .function-area { padding: 0 10px; }
}
</style>
