<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useParkingPhysics } from '../composables/useParkingPhysics';
import { useAudio } from '../composables/useAudio';

const emit = defineEmits(['exit']);
const { speak, playTone, playWrong } = useAudio();
const canvasRef = ref<HTMLCanvasElement | null>(null);
const p1Speed = ref(1.0);
const p2Speed = ref(1.0);
const p1Score = ref(0);
const p2Score = ref(0);

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
            onScore: (team, total) => {
                if (team === 'P1') p1Score.value = total;
                else p2Score.value = total;
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
        
        <!-- P2 Function Area (Top) -->
        <div class="function-area p2">
            <div class="ctrl-group">
                <input type="range" v-model.number="p2Speed" min="0.5" max="3.0" step="0.1" class="speed-slider">
            </div>
            <div class="score-display">{{ p2Score }}</div>
        </div>

        <!-- P1 Function Area (Bottom) -->
        <div class="function-area p1">
            <div class="ctrl-group">
                <input type="range" v-model.number="p1Speed" min="0.5" max="3.0" step="0.1" class="speed-slider">
            </div>
            <div class="score-display">{{ p1Score }}</div>
        </div>
    </div>
</template>

<style scoped>
.game-container {
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
    padding: 0 30px;
    background: rgba(15, 15, 15, 0.85);
    backdrop-filter: blur(15px);
    z-index: 1000;
    box-sizing: border-box;
    /* Glassmorphism subtle border */
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.function-area.p2 {
    top: 0;
    transform: rotate(180deg); /* Oriented for player on the other side */
}

.function-area.p1 {
    bottom: 0;
}

.ctrl-group {
    display: flex;
    align-items: center;
}

.speed-slider {
    appearance: none;
    -webkit-appearance: none;
    width: 160px;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    outline: none;
    margin: 0;
}

.speed-slider::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #4fd1c5;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(79, 209, 197, 0.5);
    transition: all 0.2s;
}

.speed-slider::-webkit-slider-thumb:hover {
    transform: scale(1.2);
    background: #63eadf;
}

.score-display {
    color: white;
    font-size: 1.2rem;
    font-weight: 900;
    letter-spacing: 2px;
    font-family: 'Outfit', sans-serif;
    text-shadow: 0 2px 10px rgba(255, 255, 255, 0.2);
}

.p1 .score-display { color: #3b82f6; text-shadow: 0 0 15px rgba(59, 130, 246, 0.4); }
.p2 .score-display { color: #ef4444; text-shadow: 0 0 15px rgba(239, 68, 68, 0.4); }

.p1 .speed-slider::-webkit-slider-thumb { background: #3b82f6; box-shadow: 0 0 15px rgba(59, 130, 246, 0.5); }
.p2 .speed-slider::-webkit-slider-thumb { background: #ef4444; box-shadow: 0 0 15px rgba(239, 68, 68, 0.5); }

</style>
