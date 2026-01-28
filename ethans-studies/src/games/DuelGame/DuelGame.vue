<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useDuel } from './useDuel';

const emit = defineEmits(['exit']);

const { 
  p1Score, 
  p2Score, 
  currentTarget, 
  options, 
  nextRound, 
  handleChoice,
  announceTarget
} = useDuel();

const explosions = ref<{id: number, x: number, y: number}[]>([]);
let explId = 0;

const onOptionClick = (e: MouseEvent, player: 1 | 2, opt: any) => {
    const isCorrect = handleChoice(player, opt);
    if (!isCorrect) {
        // Trigger visual effect at click position
        const id = explId++;
        explosions.value.push({ id, x: e.clientX, y: e.clientY });
        setTimeout(() => {
            explosions.value = explosions.value.filter(ex => ex.id !== id);
        }, 500);
    }
};

onMounted(() => {
    nextRound();
});
</script>

<template>
  <div class="duel-container">
    <!-- Explosions Layer -->
    <div 
        v-for="exp in explosions" 
        :key="exp.id" 
        class="explosion"
        :style="{ left: exp.x + 'px', top: exp.y + 'px' }"
    >💥</div>

    <div class="center-strip">
       <!-- Left Side (Player 2 Score) -->
       <div class="strip-side p2-side rot-180">
           <div v-if="p2Score > p1Score" class="trophy-container">
               <div class="trophy-icon">🏆</div>
           </div>
           <div class="score-display" style="color:#FFA726">{{ p2Score }}</div> <!-- Vibrant Orange -->
       </div>

       <!-- Center (Targets + Exit) -->
       <div class="strip-center">
           <div 
             class="target-mini rot-180" 
             @click="announceTarget()"
             :style="{ '--char-count': currentTarget?.t?.length || 1 }"
           >
               <span class="text-content">{{ currentTarget?.t }}</span>
           </div>
           
           <button class="exit-btn" @click="$emit('exit')">EXIT</button>
           
           <div 
             class="target-mini" 
             @click="announceTarget()"
             :style="{ '--char-count': currentTarget?.t?.length || 1 }"
           >
               <span class="text-content">{{ currentTarget?.t }}</span>
           </div>
       </div>

       <!-- Right Side (Player 1 Score) -->
       <div class="strip-side p1-side">
           <div v-if="p1Score > p2Score" class="trophy-container">
                <div class="trophy-icon">🏆</div>
           </div>
           <div class="score-display" style="color:#42A5F5">{{ p1Score }}</div> <!-- Vibrant Blue -->
       </div>
    </div>

    <!-- Player 2 Zone (Top, Rotated 180) -->
    <div class="player-zone p2">
        <div class="options-grid">
            <button 
              v-for="opt in options" 
              :key="'p2-'+opt.text"
              class="option-btn"
              @click="onOptionClick($event, 2, opt)"
              :style="{ '--char-count': opt.text.length }"
            >
                <span class="btn-text">{{ opt.text }}</span>
            </button>
        </div>
    </div>

    <!-- Player 1 Zone (Bottom) -->
    <div class="player-zone p1">
        <div class="options-grid">
            <button 
              v-for="opt in options" 
              :key="'p1-'+opt.text"
              class="option-btn"
              @click="onOptionClick($event, 1, opt)"
              :style="{ '--char-count': opt.text.length }"
            >
                <span class="btn-text">{{ opt.text }}</span>
            </button>
        </div>
    </div>
  </div>
</template>

<style scoped>
.duel-container {
    width: 100vw;
    height: 100vh;
    background: #333;
    display: flex;
    flex-direction: column;
    position: relative;
    user-select: none;
    overflow: hidden;
}

.player-zone {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    padding-top: 110px; /* Clear the center strip (180px height shared) */
}

.p2 {
    background: #2D241E; /* Deep Warm Charcoal */
    transform: rotate(180deg);
    border-bottom: 2px solid #555;
}

.p1 {
    background: #1A202C; /* Deep Navy Charcoal */
    border-top: 2px solid #555;
    /* For P1, padding-top pushes down from center line. */
    /* For P2 (Rotated), padding-top pushes UP from center line (visual bottom of div). */
}

.options-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 100%;
    max-width: 800px; /* Increased to allow wider buttons */
    height: 85%; /* Slightly taller */
}

.option-btn {
    background: #3D3D3D; /* Dark Button */
    border: none;
    border-radius: 25px;
    font-family: 'Fredoka', sans-serif;
    cursor: pointer;
    /* Dark Theme Shadow: Deep black base and subtle glow */
    box-shadow: 0 8px 0px #111, 0 15px 30px rgba(0,0,0,0.4);
    transition: all 0.1s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    height: 100%;
    min-width: 0;
    container-type: inline-size; /* Enable container queries */
}

.btn-text {
    /* More aggressive multiplier (160 instead of 85) to fill the width.
       Since height is also limited by the button shape, 
       this will hit the 3.5rem max-size for short words more easily. */
    font-size: clamp(1.2rem, calc(160cqw / var(--char-count)), 3.5rem);
    font-weight: 700;
    white-space: nowrap;
    line-height: 1;
    color: #E0E0E0; /* Bright but soft text */
    pointer-events: none;
}

.option-btn:active {
    transform: translateY(4px);
    box-shadow: 0 4px 0px #111, 0 10px 20px rgba(0,0,0,0.4);
    background: #4A4A4A;
}

.center-strip {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 180px; /* Taller for 3 items stack */
    transform: translateY(-50%);
    background: rgba(0,0,0,0.9);
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    color: white;
    pointer-events: none;
}
.center-strip > * {
    pointer-events: auto;
}

.strip-side {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2px;
    padding: 10px;
    position: relative;
}

.strip-center {
    width: 140px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.target-mini {
    color: #ffeb3b;
    font-weight: 800;
    padding: 5px;
    cursor: pointer;
    min-width: 0;
    text-align: center;
    text-shadow: 0 0 15px rgba(0,0,0,0.7);
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    container-type: inline-size;
}

.text-content {
    /* Target words also need a more aggressive scale to fill the central strip */
    font-size: clamp(1rem, calc(160cqw / var(--char-count)), 2.5rem);
    white-space: nowrap;
    line-height: 1;
}

.target-mini:active {
    transform: scale(0.95);
    color: white;
}

.score-display {
    font-size: 4rem;
    font-weight: 900;
    line-height: 1;
    filter: drop-shadow(2px 2px 0px rgba(0,0,0,0.5));
}

.trophy-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.trophy-icon {
    font-size: 3rem;
    filter: drop-shadow(0 0 10px gold);
    animation: bounce 1s infinite alternate;
}

@keyframes bounce {
    from { transform: scale(1); }
    to { transform: scale(1.1); }
}

.rot-180 {
    transform: rotate(180deg);
}

.exit-btn {
    background: #ff4d4d;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    font-weight: bold;
}

.explosion {
    position: fixed;
    font-size: 4rem;
    pointer-events: none;
    z-index: 200;
    transform: translate(-50%, -50%);
    animation: explode 0.5s ease-out forwards;
}

@keyframes explode {
    0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
}
</style>
