<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch, computed } from 'vue';
import { useSpellingGame } from './useSpellingGame';

import CommonSettingsDialog from '~/components/CommonSettingsDialog.vue';

const emit = defineEmits(['exit']);
const showSettings = ref(false);
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
  spellingIndex,
  fallingItems, 
  playerPos, 
  startGame, 
  setKey, 
  setPlayerTarget,
  announceTarget
} = useSpellingGame({
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

    const headerHeight = 100;
    const gameHeight = window.innerHeight - headerHeight;
    
    let yRelative = clientY - headerHeight;
    yRelative = Math.max(0, Math.min(gameHeight, yRelative));
    
    const xPct = (clientX / window.innerWidth) * 100;
    const yPct = (yRelative / gameHeight) * 100;
    
    setPlayerTarget(xPct, yPct);
};

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

// Calculate characters for display
const targetChars = computed(() => {
    if (!currentTarget.value) return [];
    return currentTarget.value.q.split('').map((char: string, index: number) => ({
        char,
        isCaught: index < spellingIndex.value,
        isCurrent: index === spellingIndex.value
    }));
});
</script>

<template>
  <div class="game-container" @click="handleInput" @touchstart="handleInput">
    <div class="stars"></div>
    <div class="stars2"></div>
    
    <div class="ui-header">
      <div class="header-left">
          <button class="back-btn" @click.stop="$emit('exit')">⬅ BACK</button>
          <button class="icon-btn" @click.stop="showSettings = true">⚙️</button>
      </div>

      <div class="header-center">
            <div v-if="currentTarget" class="spelling-display">
                <div class="chinese-hint">{{ currentTarget.t }}</div>
                <div class="word-progress" @click.stop="announceTarget()">
                    <span 
                        v-for="(item, idx) in targetChars" 
                        :key="idx"
                        class="char-box"
                        :class="{ 'caught': item.isCaught, 'current': item.isCurrent }"
                    >
                        {{ item.char }}
                    </span>
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

    <div class="game-world">
      <div 
        v-for="exp in explosions" 
        :key="exp.id" 
        class="explosion"
        :style="{ left: exp.x + '%', top: exp.y + '%' }"
      >💥</div>

      <div 
        v-for="item in fallingItems" 
        :key="item.id"
        class="falling-item"
        :style="{ left: item.x + '%', top: item.y + '%' }"
      >
        <div class="meteor-letter">
            {{ item.char }}
        </div>
        <div class="meteor-tail"></div>
      </div>

      <div 
        class="player" 
        :style="{ left: playerPos.x + '%', top: playerPos.y + '%' }"
      >
        <div v-if="scorePopup" class="score-popup">+10!</div>
        <svg viewBox="0 0 512 512" width="100" height="65" class="ufo-svg">
           <!-- Ufo Saucer Body -->
           <ellipse cx="256" cy="320" rx="200" ry="60" fill="#9e9e9e" stroke="#424242" stroke-width="8"/>
           <ellipse cx="256" cy="310" rx="180" ry="50" fill="#bdbdbd"/>
           
           <!-- Glass Dome -->
           <path d="M160,300 q96,-150 192,0" fill="#66ccff" opacity="0.8" stroke="#333" stroke-width="5"/>
           <path d="M200,240 q56,-40 112,0" fill="white" opacity="0.3"/>
           
           <!-- Decorative Lights -->
           <circle cx="120" cy="330" r="10" fill="#ffeb3b" class="ufo-light"/>
           <circle cx="188" cy="350" r="12" fill="#ffeb3b" class="ufo-light" style="animation-delay: 0.2s"/>
           <circle cx="256" cy="360" r="14" fill="#ffeb3b" class="ufo-light" style="animation-delay: 0.4s"/>
           <circle cx="324" cy="350" r="12" fill="#ffeb3b" class="ufo-light" style="animation-delay: 0.6s"/>
           <circle cx="392" cy="330" r="10" fill="#ffeb3b" class="ufo-light" style="animation-delay: 0.8s"/>
        </svg>
      </div>
    </div>
    <!-- Settings Dialog -->
    <CommonSettingsDialog v-model="showSettings" title="Game Settings" />
  </div>
</template>

<style scoped>
.game-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #050510 100%);
  font-family: 'Fredoka', sans-serif;
  color: white;
  user-select: none;
}

.stars {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 200%;
  background: transparent;
  background-image: 
    radial-gradient(1px 1px at 20px 30px, #eee, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 130px 80px, #fff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
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
    radial-gradient(3px 3px at 50% 16%, #fff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 90% 40%, #fff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 13% 80%, #fff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 60% 12%, #fff, rgba(0,0,0,0));
  background-repeat: repeat;
  background-size: 300px 300px;
  animation: animStar 60s linear infinite, twinkle 2s ease-in-out infinite alternate;
  animation-delay: 1s;
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
  top: 0; left: 0; width: 100%; height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
  border-bottom: 2px solid rgba(0, 200, 255, 0.3);
  padding: 0 20px;
}

.header-left, .header-right { flex: 1; display: flex; }
.header-left { justify-content: flex-start; }
.header-right { justify-content: flex-end; }
.header-center { flex: 3; display: flex; justify-content: center; }

.back-btn {
    background: rgba(255, 255, 255, 0.1);
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    border: 1px solid rgba(0, 255, 255, 0.3);
    color: white;
    font-family: inherit;
}

.icon-btn {
    background: rgba(0, 204, 255, 0.1);
    border: 1px solid rgba(0, 204, 255, 0.3);
    border-radius: 10px;
    font-size: 1.5rem;
    padding: 5px 10px;
    margin-left: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
}
.icon-btn:hover {
    background: rgba(0, 204, 255, 0.3);
    transform: scale(1.1);
}

.score-board {
  text-align: right;
}

.label { display: block; font-size: 0.8rem; color: #00ccff; font-weight: bold; }
.value { font-size: 2rem; font-weight: 700; color: #ffeb3b; }

.spelling-display {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chinese-hint {
  font-size: 1.1rem;
  color: #66ccff;
  margin-bottom: 5px;
  font-weight: bold;
}

.word-progress {
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
}

.char-box {
  width: 35px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.2);
}

.char-box.caught {
  color: #ffeb3b;
  border-color: #ffeb3b;
  background: rgba(255, 235, 59, 0.2);
  box-shadow: 0 0 10px rgba(255, 235, 59, 0.5);
}

.char-box.current {
  color: white;
  border-color: #00ccff;
  background: rgba(0, 204, 255, 0.2);
  animation: pulse 1s infinite alternate;
}

@keyframes pulse {
  from { box-shadow: 0 0 2px #00ccff; }
  to { box-shadow: 0 0 15px #00ccff; }
}

.game-world {
  position: absolute;
  top: 100px;
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

.meteor-letter {
  background: linear-gradient(135deg, #fff 0%, #00ccff 100%);
  color: #000;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  font-size: 2rem;
  box-shadow: 0 0 20px #00ccff;
  z-index: 2;
}

.meteor-tail {
  width: 4px;
  height: 60px;
  background: linear-gradient(to bottom, #00ccff, transparent);
  margin-top: -10px;
  opacity: 0.6;
}

.player {
  position: absolute;
  transform: translate(-50%, -50%);
  filter: drop-shadow(0 0 10px cyan);
}

.ufo-light {
  animation: flash 1s infinite;
}

@keyframes flash {
  0%, 100% { fill: #ffeb3b; filter: contrast(1); }
  50% { fill: #fff176; filter: contrast(2) drop-shadow(0 0 5px yellow); }
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
}

@keyframes floatUp {
  0% { opacity: 1; transform: translate(-50%, 0); }
  100% { opacity: 0; transform: translate(-50%, -50px); }
}

.explosion {
    position: absolute;
    font-size: 5rem;
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
