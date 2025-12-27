<script setup lang="ts">
import { onMounted, ref, nextTick, watch } from 'vue';
import { useParkingGame } from '../composables/useParkingGame';
import { useAudio } from '../composables/useAudio';

const emit = defineEmits(['exit']);
const { speak, playBrake, playTone, playWrong } = useAudio();

const {
    currentWord,
    slots,
    nextSlotIndex,
    p1Hand,
    p2Hand,
    p1Score,
    p2Score,
    isGameOver,
    initRound,
    tryPark,
    recordPark
} = useParkingGame({
    onWrong: () => playWrong()
});

interface FlyingCar {
    id: number;
    char: string;
    player: 1 | 2;
    startX: number;
    startY: number;
    startRot: number;
    targetSlotIdx: number;
    currentRot: number;
    isBraking?: boolean;
}

const flyingCars = ref<FlyingCar[]>([]);

onMounted(() => {
    initRound();
});

// Speak topic when word changes
watch(() => currentWord.value.text, (newVal) => {
    if (newVal) {
        setTimeout(() => {
            const isAllEnglish = /^[a-zA-Z\s,.'"-]+$/.test(currentWord.value.text);
            speak(isAllEnglish ? currentWord.value.text : currentWord.value.translation);
        }, 500);
    }
});

// Speak topic again on game over
watch(isGameOver, (done) => {
    if (done) {
        setTimeout(() => {
            const isAllEnglish = /^[a-zA-Z\s,.'"-]+$/.test(currentWord.value.text);
            speak(isAllEnglish ? currentWord.value.text : currentWord.value.translation);
        }, 1500);
    }
});

const p1Speed = ref(1.2); 
const p2Speed = ref(1.2);

const handleCarClick = async (player: 1 | 2, car: any, event: MouseEvent) => {
    speak(car.char);

    const result = tryPark(player, car.id);
    if (result) {
        const { slotIdx, car: carData } = result;
        const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
        const flyingId = Date.now() + Math.random();
        
        const multiplier = player === 1 ? p1Speed.value : p2Speed.value;
        const duration = 1000 / multiplier;
        const moveDelay = 200 / multiplier;

        const slotEl = document.getElementById(`slot-${slotIdx}`);
        if (!slotEl) return;
        const slotRect = slotEl.getBoundingClientRect();
        
        const targetRot = Math.atan2(slotRect.top - rect.top, slotRect.left - rect.left) * (180 / Math.PI) + 90;
        
        const newFlying: FlyingCar = {
            id: flyingId,
            char: carData.char,
            player,
            startX: rect.left,
            startY: rect.top,
            startRot: carData.rotation,
            currentRot: carData.rotation,
            targetSlotIdx: slotIdx,
            isBraking: false
        };
        flyingCars.value.push(newFlying);

        playTone(300 + Math.random() * 200, 'sine', 0.1);

        await nextTick();
        const flyEl = document.getElementById(`fly-${flyingId}`);
        if (flyEl) {
            flyEl.style.transitionDuration = `${duration}ms`;
            flyEl.style.transform = `translate(0, 0) rotate(${targetRot}deg)`;
            flyEl.style.opacity = '1';
            
            setTimeout(() => {
                if (flyEl) {
                    const finalRot = player === 2 ? 180 : 0; 
                    flyEl.style.transform = `translate(${slotRect.left - rect.left}px, ${slotRect.top + 5 - rect.top}px) rotate(${finalRot}deg)`;
                }
            }, moveDelay);
        }

        setTimeout(() => {
            const success = recordPark(player, slotIdx);
            
            if (success) {
                flyingCars.value = flyingCars.value.filter(fc => fc.id !== flyingId);
                playTone(800, 'triangle', 0.1);
            } else {
                playBrake();
                const targetFC = flyingCars.value.find(fc => fc.id === flyingId);
                if (targetFC) {
                    targetFC.isBraking = true;
                    // Stop at current position - capture where the car is RIGHT NOW
                    const flyEl = document.getElementById(`fly-${flyingId}`);
                    if (flyEl) {
                        // Get the current computed position from the DOM
                        const currentRect = flyEl.getBoundingClientRect();
                        const finalRot = player === 2 ? 180 : 0;
                        
                        // Calculate the translate values to keep it at its current visual position
                        const currentTranslateX = currentRect.left - rect.left;
                        const currentTranslateY = currentRect.top - rect.top;
                        
                        // Immediately stop all transitions and freeze at current position
                        flyEl.style.transition = 'none';
                        flyEl.style.transform = `translate(${currentTranslateX}px, ${currentTranslateY}px) rotate(${finalRot}deg)`;
                        flyEl.style.opacity = '0.7';

                        // Stop shaking after 1 second
                        setTimeout(() => {
                            const still存在 = flyingCars.value.find(fc => fc.id === flyingId);
                            if (still存在) {
                                flyEl.classList.add('stopped');
                            }
                        }, 1000);
                    }
                }
            }
        }, duration);
    }
};

const handleRestart = () => {
    flyingCars.value = [];
    initRound();
};



</script>

<template>
    <div class="pg-container">
        <!-- Player 2 Zone (Top) -->
        <div class="player-zone p2 flipped">
            <div class="car-playground">
                <div 
                    v-for="car in p2Hand" 
                    :key="car.id" 
                    class="car-wrapper"
                    :style="{ left: car.x + '%', top: car.y + '%', transform: `rotate(${car.rotation}deg)` }"
                    @click="handleCarClick(2, car, $event)"
                >
                    <div class="car top-down p2">
                        <div class="car-body">
                            <div class="headlights">
                                <div class="light L"></div><div class="light R"></div>
                            </div>
                            <div class="windshield"></div>
                            <div class="wheels">
                                <div class="w tl"></div><div class="w tr"></div>
                                <div class="w bl"></div><div class="w br"></div>
                            </div>
                        </div>
                        <div class="car-letter">
                            {{ car.char }}
                            <div class="letter-underline"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="header-dual">
                <div class="scores p2">SCORE: {{ p2Score }}</div>
                <div class="topic-info">
                    <div class="topic-text">{{ currentWord.translation }}</div>
                </div>
                <div class="controls">
                    <div class="slider-group">
                        <span class="label">SPEED</span>
                        <input type="range" v-model.number="p2Speed" min="0.5" max="2.5" step="0.1">
                    </div>
                </div>
            </div>
        </div>

        <!-- Central Parking Lot + Shared Controls -->
        <div class="parking-lot-area">
            <div class="parking-lot-scroller">
                <div class="parking-lot">
                    <div 
                        v-for="(slot, idx) in slots" 
                        :key="idx" 
                        :id="`slot-${idx}`"
                        class="parking-spot"
                        :class="{ active: idx === nextSlotIndex && !isGameOver }"
                    >
                        <div class="spot-lines"></div>
                        <div class="spot-label">{{ slot.char }}</div>
                        <div v-if="slot.owner" class="parked-car-container" :class="'p' + slot.owner">
                            <div class="car top-down" :class="'p' + slot.owner">
                                <div class="car-body">
                                    <div class="headlights mini"><div class="light L"></div><div class="light R"></div></div>
                                    <div class="windshield"></div>
                                </div>
                                <div class="car-letter">
                                    {{ slot.char }}
                                    <div class="letter-underline"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Shared Buttons Sidebar -->
            <div class="shared-sidebar">
                <button v-if="isGameOver" class="sidebar-btn next" @click="handleRestart">NEXT</button>
                <button class="sidebar-btn exit" @click="$emit('exit')">EXIT</button>
            </div>
        </div>

        <!-- Player 1 Zone (Bottom) -->
        <div class="player-zone p1">
            <div class="car-playground">
                <div 
                    v-for="car in p1Hand" 
                    :key="car.id" 
                    class="car-wrapper"
                    :style="{ left: car.x + '%', top: car.y + '%', transform: `rotate(${car.rotation}deg)` }"
                    @click="handleCarClick(1, car, $event)"
                >
                    <div class="car top-down p1">
                        <div class="car-body">
                            <div class="headlights">
                                <div class="light L"></div><div class="light R"></div>
                            </div>
                            <div class="windshield"></div>
                            <div class="wheels">
                                <div class="w tl"></div><div class="w tr"></div>
                                <div class="w bl"></div><div class="w br"></div>
                            </div>
                        </div>
                        <div class="car-letter">
                            {{ car.char }}
                            <div class="letter-underline"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="header-dual">
                <div class="controls">
                    <div class="slider-group">
                        <span class="label">SPEED</span>
                        <input type="range" v-model.number="p1Speed" min="0.5" max="2.5" step="0.1">
                    </div>
                </div>
                <div class="topic-info">
                    <div class="topic-text">{{ currentWord.translation }}</div>
                </div>
                <div class="scores p1">SCORE: {{ p1Score }}</div>
            </div>
        </div>

        <!-- Flying Layer -->
        <div class="flying-layer">
            <div 
                v-for="fc in flyingCars" 
                :key="fc.id" 
                :id="`fly-${fc.id}`"
                class="flying-car-box"
                :class="{ 'is-braking': fc.isBraking }"
                :style="{ left: fc.startX + 'px', top: fc.startY + 'px', transform: `rotate(${fc.startRot}deg)` }"
            >
                <div class="car top-down" :class="'p' + fc.player">
                    <div class="car-body">
                        <div class="headlights" :class="{ on: !fc.isBraking }">
                            <div class="light L"></div><div class="light R"></div>
                        </div>
                        <div class="taillights" :class="{ active: fc.isBraking }">
                            <div class="light L"></div><div class="light R"></div>
                        </div>
                        <div v-if="fc.isBraking" class="brake-smoke">
                            <div class="puff"></div><div class="puff"></div>
                        </div>
                        <div class="windshield"></div>
                        <div class="wheels">
                            <div class="w tl"></div><div class="w tr"></div>
                            <div class="w bl"></div><div class="w br"></div>
                        </div>
                    </div>
                    <div class="car-letter">
                        {{ fc.char }}
                        <div class="letter-underline"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pg-container {
    width: 100vw;
    height: 100vh;
    background: #050505;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    color: white;
}

.player-zone {
    height: 40vh;
    background: #0f0f0f;
    position: relative;
    display: flex;
    flex-direction: column;
}
.player-zone.flipped { transform: rotate(180deg); }

.car-playground {
    flex: 1;
    position: relative;
}

.car-wrapper {
    position: absolute;
    width: 60px;
    height: 90px;
    cursor: pointer;
}

/* Headlights & Taillights */
.headlights, .taillights {
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    z-index: 5;
}
.headlights { top: -5px; }
.taillights { bottom: -5px; }

.light {
    width: 10px;
    height: 6px;
    background: rgba(255,255,170,0.5);
    border-radius: 50%;
}
.headlights .light { box-shadow: 0 0 10px #ffff00; }
.taillights .light { background: #ff0000; box-shadow: 0 0 15px #ff0000; opacity: 0; }
.taillights.active .light { opacity: 1; }

.headlights.on .light::after {
    content: '';
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 70px;
    background: linear-gradient(to top, rgba(255,255,100,0.4) 0%, transparent 100%);
    clip-path: polygon(10% 100%, 90% 100%, 100% 0%, 0% 0%);
    pointer-events: none;
    filter: blur(5px);
}

/* Brake Effect */
.is-braking .car {
    animation: shake 0.1s infinite;
}

/* Add a class to stop shaking after a while */
.is-braking.stopped .car {
    animation: none;
    transition: transform 0.5s ease-out;
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-2px); }
    75% { transform: translateX(2px); }
}

.brake-smoke {
    position: absolute;
    bottom: -10px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    pointer-events: none;
}
.puff {
    width: 20px;
    height: 20px;
    background: rgba(255,255,255,0.3);
    border-radius: 50%;
    filter: blur(5px);
    animation: smokePuff 0.8s ease-out forwards;
}
@keyframes smokePuff {
    0% { transform: scale(0.5); opacity: 0.8; }
    100% { transform: scale(2) translateY(20px); opacity: 0; }
}

/* Car Visuals */
.car.top-down {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.car-body {
    position: absolute;
    width: 44px;
    height: 70px;
    border-radius: 12px;
    background: #333;
    border: 2px solid #000;
}
.p1 .car-body { background: #2563eb; }
.p2 .car-body { background: #dc2626; }

.windshield {
    position: absolute;
    top: 18px;
    left: 6px;
    right: 6px;
    height: 14px;
    background: rgba(255,255,255,0.15);
    border-radius: 4px;
}
.wheels .w {
    position: absolute;
    width: 8px;
    height: 14px;
    background: #000;
    border-radius: 2px;
}
.tl { top: 10px; left: -4px; }
.tr { top: 10px; right: -4px; }
.bl { bottom: 10px; left: -4px; }
.br { bottom: 10px; right: -4px; }

.car-letter {
    position: relative;
    z-index: 10;
    font-size: 2.22rem;
    font-weight: 900;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.letter-underline {
    width: 100%;
    height: 3px;
    background: rgba(255,255,255,0.3);
    margin-top: -2px;
    border-radius: 2px;
}

/* Central Parking + Shared Area */
.parking-lot-area {
    height: 20vh;
    background: #111;
    border-top: 4px dashed #333;
    border-bottom: 4px dashed #333;
    display: flex;
    position: relative;
}

.parking-lot-scroller {
    flex: 1;
    overflow-x: auto;
    display: flex;
    align-items: center;
    padding: 0 40px;
    scrollbar-width: none;
}
.parking-lot-scroller::-webkit-scrollbar { display: none; }

.parking-lot { display: flex; gap: 15px; }

.parking-spot {
    width: 60px;
    height: 100px;
    background: #050505;
    border-left: 2px solid #222;
    border-right: 2px solid #222;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-shrink: 0;
}
.spot-label { color: #1a1a1a; font-weight: 900; font-size: 2rem; }

.shared-sidebar {
    width: 120px;
    background: #1a1a1a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    gap: 10px;
    border-left: 4px solid #333;
}

.sidebar-btn {
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-weight: 900;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.2s;
}
.sidebar-btn.exit { background: #333; color: #777; }
.sidebar-btn.next { 
    background: #4fd1c5; 
    color: #000;
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

/* Sliders */
.slider-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
}
.slider-group .label { font-size: 0.7rem; color: #666; font-weight: bold; }
input[type="range"] {
    width: 100px;
    accent-color: #4fd1c5;
    cursor: pointer;
}

/* Header UI */
.header-dual {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0,0,0,0.8);
    border-top: 2px solid #333;
}
.scores { font-size: 1.2rem; font-weight: 900; }
.scores.p1 { color: #2563eb; }
.scores.p2 { color: #dc2626; }
.topic-text { font-size: 1.8rem; font-weight: 900; color: #4fd1c5; }

/* Flying/Parked Overlay */
.parked-car-container {
    position: absolute;
    width: 60px;
    height: 90px;
    z-index: 5;
    /* Center visually in 100px height spot */
    top: 5px;
}
.parked-car-container.p2 { transform: rotate(180deg); }

.flying-layer { position: fixed; inset: 0; pointer-events: none; z-index: 1000; }
.flying-car-box {
    position: absolute;
    width: 60px;
    height: 90px;
    opacity: 0;
    transition: transform 0.8s cubic-bezier(0.45, 0, 0.55, 1), opacity 0.2s;
}

</style>
