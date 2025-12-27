<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useParkingPhysics } from '../composables/useParkingPhysics';
import { useAudio } from '../composables/useAudio';

const emit = defineEmits(['exit']);
const { speak, playTone, playWrong } = useAudio();
const canvasRef = ref<HTMLCanvasElement | null>(null);
const p1Speed = ref(1.0);
const p2Speed = ref(1.0);

// Virtual Routing Logic
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#/', '');
    if (!hash) emit('exit');
});

onMounted(() => {
    window.location.hash = '#/parking-jam';
    if (canvasRef.value) {
        useParkingPhysics(canvasRef.value, {
            p1Speed,
            p2Speed,
            onScore: () => {
                playTone(600, 'sine', 0.1);
            },
            onWin: () => {
                playTone(800, 'triangle', 0.3);
            },
            onSpeak: (text) => speak(text),
            onParkSuccess: () => playTone(1000, 'sine', 0.05),
            onParkFail: () => playWrong()
        });
    }
});
</script>

<template>
    <div class="game-container">
        <canvas ref="canvasRef" class="webgl"></canvas>
        
        <!-- P2 Layout (Top) -->
        <div class="player-overlay p2">
            <div class="speed-control">
                <span>P2 SPEED</span>
                <input type="range" v-model.number="p2Speed" min="0.5" max="3.0" step="0.1">
            </div>
        </div>

        <!-- P1 Layout (Bottom) -->
        <div class="player-overlay p1">
            <div class="speed-control">
                <span>P1 SPEED</span>
                <input type="range" v-model.number="p1Speed" min="0.5" max="3.0" step="0.1">
            </div>
        </div>
    </div>
</template>

<style scoped>
.game-container {
    width: 100vw;
    height: 100vh;
    position: relative;
    background: #000;
    overflow: hidden;
}

.webgl {
    width: 100%;
    height: 100%;
    display: block;
}

.hud-center {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    z-index: 100;
}

.player-overlay {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
    pointer-events: none;
}

.player-overlay.p2 { top: 0; transform: translateX(-50%) rotate(180deg); }
.player-overlay.p1 { bottom: 0; }

.speed-control {
    pointer-events: auto;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    padding: 10px 20px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    gap: 12px;
    color: white;
    font-weight: 900;
    font-size: 0.9rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

.player-overlay.p1 .speed-control { border-color: rgba(37, 99, 235, 0.6); }
.player-overlay.p2 .speed-control { border-color: rgba(220, 38, 38, 0.6); }

.speed-control span {
    min-width: 80px;
}

.speed-control input {
    width: 120px;
    accent-color: #4fd1c5;
}

.exit-btn {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 25, 25, 0.3);
    color: #ff4d4d;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 1;
}

.exit-btn:hover {
    background: #ff4d4d;
    color: white;
    transform: scale(1.1);
}

.interaction-hint {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.6);
    padding: 12px 24px;
    border-radius: 30px;
    color: #4fd1c5;
    font-weight: bold;
    pointer-events: none;
    animation: fadeInOut 3s infinite;
}

@keyframes fadeInOut {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; }
}
</style>
