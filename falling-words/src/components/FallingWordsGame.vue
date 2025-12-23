<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { useGame } from '../composables/useGame';

const emit = defineEmits(['exit']);

const explosions = ref<{id: number, x: number, y: number}[]>([]);
let explId = 0;

const onExplosion = (xPct: number, yPct: number) => {
    const id = explId++;
    explosions.value.push({ id, x: xPct, y: yPct });
    setTimeout(() => {
        explosions.value = explosions.value.filter(ex => ex.id !== id);
    }, 500);
};

const { 
  gameState, 
  score, 
  currentTarget, 
  fallingItems, 
  playerPos, 
  startGame, 
  setKey, 
  setPlayerTarget,
  announceTarget
} = useGame({
    onHitWrong: (x, y) => onExplosion(x, y)
});

const handleKeyDown = (e: KeyboardEvent) => {
  if (gameState.value !== 'playing') return;
  if (e.key === 'Escape') {
      emit('exit');
  }
  if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
      setKey(e.key, true);
  }
};

const handleKeyUp = (e: KeyboardEvent) => {
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
      setKey(e.key, false);
  }
}

const handleInput = (e: MouseEvent | TouchEvent) => {
    if (gameState.value !== 'playing') return;

    // Ignore if clicking a button (like back or hint)
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('.back-btn') || target.closest('.target-word')) {
        return;
    }
    
    let clientX, clientY;
    if (e instanceof MouseEvent) {
        clientX = e.clientX;
        clientY = e.clientY;
    } else {
        const touch = e.touches[0];
        if (!touch) return;
        clientX = touch.clientX;
        clientY = touch.clientY;
    }

    // Adjust for game world offset
    const headerHeight = 100; // px
    const gameHeight = window.innerHeight - headerHeight;
    
    // We want y=0 to be at headerHeight, y=100 at bottom
    // Input Y needs to be mapped: (clientY - headerHeight) / gameHeight
    // If click is in header, clamp it.
    
    let yRelative = clientY - headerHeight;
    yRelative = Math.max(0, Math.min(gameHeight, yRelative));
    
    const xPct = (clientX / window.innerWidth) * 100;
    const yPct = (yRelative / gameHeight) * 100;
    
    setPlayerTarget(xPct, yPct);
};

// ... keep existing watches ...
const scorePopup = ref(false);

watch(score, (newVal, oldVal) => {
  if (newVal > oldVal) {
    scorePopup.value = true;
    setTimeout(() => {
      scorePopup.value = false;
    }, 1000);
  }
});

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);
  startGame();
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
  window.removeEventListener('keyup', handleKeyUp);
});
</script>

<template>
  <div class="game-container" @click="handleInput" @touchstart="handleInput">
    <!-- Starry Background -->
    <div class="stars"></div>
    <div class="stars2"></div>
    
    <!-- UI Header (Fixed Height Block) -->
    <div class="ui-header">
      <div class="header-left">
          <button class="back-btn" @click.stop="$emit('exit')">⬅ BACK</button>
      </div>

      <div class="header-center">
            <div v-if="currentTarget" class="target-display">
                <div class="target-hint">FIND:</div>
                <div class="target-word" @click.stop="announceTarget()">
                    {{ currentTarget.translation }}
                    <span class="audio-icon">🔊</span>
                </div>
            </div>
      </div>
      
      <div class="header-right">
          <div class="score-board">
            <span class="label">SCORE</span>
            <span class="value">{{ score }}</span>
          </div>
      </div>
    </div>

    <!-- Game World (Below Header) -->
    <div class="game-world">
      <!-- Explosions Layer -->
      <div 
        v-for="exp in explosions" 
        :key="exp.id" 
        class="explosion"
        :style="{ left: exp.x + '%', top: exp.y + '%' }"
      >💥</div>

      <!-- Falling Items -->
      <div 
        v-for="item in fallingItems" 
        :key="item.id"
        class="falling-item"
        :style="{ left: item.x + '%', top: item.y + '%' }"
      >
        <div class="meteor-body">
            {{ item.word.text }}
        </div>
        <div class="meteor-tail"></div>
      </div>

      <!-- Player -->
      <div 
        class="player" 
        :style="{ left: playerPos.x + '%', top: playerPos.y + '%' }"
      >
        <div v-if="scorePopup" class="score-popup">+10!</div>
        <svg viewBox="0 0 512 512" width="70" height="80" class="rocket-svg">
           <!-- Rocket Fins -->
           <path d="M150,450 q-50,0 -30,-100 l30,50 z" fill="#ff4d4d" stroke="#333" stroke-width="4"/>
           <path d="M362,450 q50,0 30,-100 l-30,50 z" fill="#ff4d4d" stroke="#333" stroke-width="4"/>
           
           <!-- Rocket Body -->
           <path d="M256,20 c-100,200 -80,350 -80,400 h160 c0,-50 20,-200 -80,-400z" fill="#f5f5f5" stroke="#333" stroke-width="6"/>
           <path d="M256,20 c40,150 40,300 40,400 h-80 c0,-100 0,-250 40,-400z" fill="#e0e0e0"/>
           
           <!-- Nose Cone -->
           <path d="M256,20 c-30,60 -35,100 -35,130 h70 c0,-30 -5,-70 -35,-130z" fill="#ff4d4d" stroke="#333" stroke-width="4"/>
           
           <!-- Window -->
           <circle cx="256" cy="240" r="35" fill="#66ccff" stroke="#333" stroke-width="6"/>
           <path d="M256,215 q20,10 0,50" fill="white" opacity="0.3"/>
           
           <!-- Flame -->
           <path d="M220,430 q36,80 72,0" fill="#ffeb3b" class="main-flame" stroke="#ff9800" stroke-width="2"/>
           <path d="M236,430 q20,50 40,0" fill="#fff" opacity="0.8" class="inner-flame"/>
        </svg>
      </div>
    </div>

  </div>
</template>

<style scoped>
.game-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  font-family: 'Fredoka', sans-serif;
  color: white;
  user-select: none;
}

/* Background Stars Animation */
.stars {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 200%;
  background: transparent;
  background-image: 
    radial-gradient(1px 1px at 20px 30px, #eee, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0));
  background-repeat: repeat;
  background-size: 200px 200px;
  animation: animStar 100s linear infinite, twinkle 3s ease-in-out infinite;
  opacity: 0.5;
}

.stars2 {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 200%;
  background: transparent;
  background-image: 
    radial-gradient(2px 2px at 20% 30%, #fff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 40% 70%, #fff, rgba(0,0,0,0)),
    radial-gradient(3px 3px at 50% 16%, #fff, rgba(0,0,0,0));
  background-repeat: repeat;
  background-size: 300px 300px;
  animation: animStar 60s linear infinite, twinkle 2s ease-in-out infinite alternate;
  animation-delay: 1.5s;
  opacity: 0.3;
}

@keyframes animStar {
  from { transform: translateY(0); }
  to { transform: translateY(-1000px); }
}

@keyframes twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
}

.ui-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px; /* Fixed height for header block */
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  pointer-events: auto; /* Allow clicks */
  background: rgba(0, 0, 0, 0.6); /* Solid/semi-transparent block */
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding: 0 20px;
}

.header-left, .header-right {
    flex: 1;
    display: flex;
    justify-content: center;
}
.header-left { justify-content: flex-start; }
.header-right { justify-content: flex-end; }
.header-center { flex: 2; display: flex; justify-content: center; }

.back-btn {
    background: rgba(255, 255, 255, 0.2);
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    border: 1px solid rgba(255,255,255,0.3);
    color: white;
    font-family: inherit;
    font-size: 1rem;
}
.back-btn:hover {
    background: rgba(255, 255, 255, 0.4);
}

.score-board {
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 20px;
  border-radius: 20px;
  backdrop-filter: blur(5px);
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.label {
  display: block;
  font-size: 0.8rem;
  color: #aaa;
  font-weight: bold;
}

.value {
  font-size: 2rem;
  font-weight: 700;
  color: #ffeb3b;
}

.target-display {
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 5px 30px;
  border-radius: 30px;
  border: 3px solid #66ccff;
  box-shadow: 0 0 20px #66ccff80;
}

.target-hint {
  font-size: 0.8rem;
  color: #ccc;
  letter-spacing: 2px;
}

.target-word {
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}
.target-word:active {
    transform: scale(0.95);
}

.game-world {
  position: absolute;
  top: 100px; /* Below header */
  left: 0;
  width: 100%;
  height: calc(100% - 100px);
}

.falling-item {
  position: absolute;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.meteor-body {
  background: white;
  color: #333;
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.6rem;
  box-shadow: 0 0 10px white, 0 0 20px #ff00de;
  z-index: 2;
}

.meteor-tail {
  width: 2px;
  height: 40px;
  background: linear-gradient(to bottom, white, transparent);
  margin-top: -5px;
}

.player {
  position: absolute;
  transform: translate(-50%, -50%); /* Center on the point */
  transition: none; /* We handle smoothing in JS loop now */
  filter: drop-shadow(0 0 10px cyan);
}

.main-flame {
  animation: flicker 0.1s infinite alternate;
}
.inner-flame {
  animation: flicker 0.08s infinite alternate-reverse;
}

@keyframes flicker {
  from { opacity: 0.7; transform: scaleY(1) translateY(0); }
  to { opacity: 1; transform: scaleY(1.3) translateY(2px); }
}

.overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  backdrop-filter: blur(5px);
}


.score-popup {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  color: #ffeb3b;
  font-weight: bold;
  animation: floatUp 1s ease-out forwards;
  pointer-events: none;
  text-shadow: 0 0 5px black;
}

@keyframes floatUp {
  0% { opacity: 1; transform: translate(-50%, 0); }
  100% { opacity: 0; transform: translate(-50%, -50px); }
}

.explosion {
    position: absolute;
    font-size: 4rem;
    pointer-events: none;
    z-index: 50;
    transform: translate(-50%, -50%);
    animation: explode 0.5s ease-out forwards;
}

@keyframes explode {
    0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
}
</style>
