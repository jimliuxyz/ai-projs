<script setup lang="ts">
import { ref } from 'vue';
import { useCodeKnight } from './useCodeKnight';
import { useAudio } from '~/composables/useAudio';
import type { CharacterType } from './useCodeKnight';

const emit = defineEmits(['exit']);
const { playSuccess, playExplosion, playTone } = useAudio();
const { gridSize, player, entities, message, animation, initLevel, processCommand, setCharacter } = useCodeKnight({
    onWin: () => playSuccess(),
    onHitObstacle: () => playExplosion()
});

const isListening = ref(false);
const showCharSelect = ref(true);
const isProcessing = ref(false); // Prevent duplicate commands

const selectCharacter = (char: CharacterType) => {
    setCharacter(char);
    showCharSelect.value = false;
    initLevel();
};

const startVoice = () => {
    const Recognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!Recognition) {
        alert("Voice recognition not supported in this browser.");
        return;
    }

    if (isProcessing.value) {
        console.log("Already processing a command, ignoring...");
        return;
    }

    const rec = new Recognition();
    rec.lang = 'en-US';
    rec.continuous = false;
    rec.interimResults = false; // Disable interim results to prevent duplicates
    rec.maxAlternatives = 3;
    
    rec.start();
    isListening.value = true;
    playTone(880, 'sine', 0.1);

    rec.onresult = async (e: any) => {
        // Only process if we're not already processing
        if (isProcessing.value) {
            console.log("Command already processing, skipping...");
            return;
        }

        isProcessing.value = true;
        isListening.value = false;

        // Only process final results
        if (!e.results[0].isFinal) {
            console.log("Interim result, skipping...");
            isProcessing.value = false;
            return;
        }

        // Try all alternatives
        for (let i = 0; i < e.results[0].length; i++) {
            const text = e.results[0][i].transcript;
            const confidence = e.results[0][i].confidence;
            
            console.log(`Alternative ${i}: "${text}" (confidence: ${confidence})`);
            
            // Only try if confidence is reasonable
            if (confidence < 0.3) {
                console.log(`Skipping low confidence alternative ${i}`);
                continue;
            }

            const prevMsg = message.value;
            processCommand(text);
            
            // If we got a valid command, stop trying alternatives
            if (message.value !== prevMsg && !message.value.includes("didn't understand")) {
                break;
            }
        }

        // Wait a bit before allowing next command
        await new Promise(r => setTimeout(r, 500));
        isProcessing.value = false;
    };

    rec.onerror = (e: any) => {
        console.error('Speech recognition error:', e.error);
        isListening.value = false;
        isProcessing.value = false;
        
        if (e.error === 'no-speech') {
            message.value = "No speech detected. Try again!";
        } else if (e.error === 'audio-capture') {
            message.value = "Microphone not found!";
        } else if (e.error === 'aborted') {
            // Ignore aborted errors
            return;
        } else {
            message.value = `Error: ${e.error}`;
        }
    };

    rec.onend = () => {
        isListening.value = false;
        // Don't reset isProcessing here, let the result handler do it
    };
};

const getEntity = (x: number, y: number) => {
    if (player.value.x === x && player.value.y === y) return 'player';
    const found = entities.value.find(e => e.x === x && e.y === y);
    return found?.type || null;
};

const getEmoji = (type: string | null) => {
    if (type === 'player') {
        return player.value.character === 'knight' ? '🛡️' : '🤖';
    }
    switch (type) {
        case 'bug-green': return '🐛';
        case 'bug-blue': return '👾';
        case 'rock': return '🪨';
        case 'water': return '💧';
        case 'tree': return '🌳';
        case 'box': return '📦';
        default: return '';
    }
};

const getCellClass = (x: number, y: number) => {
    if (player.value.x === x && player.value.y === y) return 'player';
    const entity = entities.value.find(e => e.x === x && e.y === y);
    return entity?.type || '';
};

</script>

<template>
    <!-- Character Selection Screen -->
    <div v-if="showCharSelect" class="char-select-screen">
        <h1 class="select-title">Choose Your Hero</h1>
        <div class="char-options">
            <div class="char-card" @click="selectCharacter('knight')">
                <div class="char-icon">🛡️</div>
                <div class="char-name">Knight</div>
                <div class="char-desc">Brave warrior with sword</div>
            </div>
            <div class="char-card" @click="selectCharacter('robot')">
                <div class="char-icon">🤖</div>
                <div class="char-name">Robot</div>
                <div class="char-desc">Tech-powered fighter</div>
            </div>
        </div>
        <button class="back-btn-select" @click="$emit('exit')">⬅ Back to Menu</button>
    </div>

    <!-- Game Screen -->
    <div v-else class="ck-container">
        <div class="header">
            <button class="back-btn" @click="$emit('exit')">⬅ BACK</button>
            <div class="game-title">Code Knight</div>
            <div class="status-bar">
                <div class="holding-display" v-if="player.holding">
                    Holding: {{ getEmoji(player.holding) }}
                </div>
                <div class="msg-box">{{ message }}</div>
            </div>
        </div>

        <div class="grid-board" :style="{ '--size': gridSize }">
            <template v-for="y in gridSize" :key="'row-'+y">
                <div 
                    v-for="x in gridSize" 
                    :key="'cell-'+(x-1)+'-'+(y-1)"
                    class="cell"
                    :class="getCellClass(x-1, y-1)"
                >
                    <div class="entity-icon">{{ getEmoji(getEntity(x-1, y-1)) }}</div>
                    
                    <!-- Attack Animation -->
                    <div 
                        v-if="animation.type === 'attack' && animation.x === x-1 && animation.y === y-1"
                        class="attack-slash"
                        :class="'slash-' + animation.direction"
                    >⚔️</div>
                    
                    <!-- Throw Animation -->
                    <div 
                        v-if="animation.type === 'throw' && animation.x === x-1 && animation.y === y-1"
                        class="throw-projectile"
                        :class="'throw-' + animation.direction"
                    >📦</div>
                </div>
            </template>
        </div>

        <div class="controls">
            <button 
                class="mic-btn" 
                :class="{ listening: isListening }"
                @click="startVoice"
            >
                <span class="mic-icon">{{ isListening ? '📡' : '🎤' }}</span>
                <span class="btn-text">{{ isListening ? 'Listening...' : 'Push to Talk' }}</span>
            </button>
            <div class="hints">
                Just say: "Right two" | "Down" | "Attack left" | "Pickup" | "Throw up"
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Character Selection Screen */
.char-select-screen {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.select-title {
    font-size: 3rem;
    color: white;
    margin-bottom: 50px;
    text-shadow: 0 4px 10px rgba(0,0,0,0.3);
    font-family: 'Fredoka', sans-serif;
}

.char-options {
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
}

.char-card {
    background: white;
    border-radius: 20px;
    padding: 40px;
    width: 250px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.char-card:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
}

.char-icon {
    font-size: 6rem;
    margin-bottom: 20px;
}

.char-name {
    font-size: 2rem;
    font-weight: 800;
    color: #333;
    margin-bottom: 10px;
}

.char-desc {
    color: #666;
    font-size: 1.1rem;
}

.back-btn-select {
    background: rgba(255,255,255,0.2);
    border: 2px solid white;
    color: white;
    padding: 15px 30px;
    border-radius: 50px;
    font-size: 1.2rem;
    cursor: pointer;
    font-weight: bold;
}

/* Game Screen */
.ck-container {
    width: 100vw;
    height: 100vh;
    background: #1a202c;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Fredoka', sans-serif;
    padding: 20px;
}

.header {
    width: 100%;
    max-width: 900px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    gap: 20px;
}

.back-btn {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    color: white;
    padding: 10px 20px;
    border-radius: 12px;
    cursor: pointer;
    white-space: nowrap;
}

.game-title {
    font-size: 2rem;
    font-weight: 800;
    background: linear-gradient(to right, #4fd1c5, #63b3ed);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: nowrap;
}

.status-bar {
    display: flex;
    gap: 10px;
    align-items: center;
}

.holding-display {
    background: rgba(255,193,7,0.2);
    border: 2px solid #ffc107;
    padding: 8px 15px;
    border-radius: 15px;
    color: #ffc107;
    font-weight: 700;
    white-space: nowrap;
}

.msg-box {
    background: rgba(0,0,0,0.3);
    padding: 10px 20px;
    border-radius: 20px;
    border: 1px solid #4fd1c5;
    color: #4fd1c5;
    font-weight: 600;
    min-width: 200px;
}

.grid-board {
    display: grid;
    grid-template-columns: repeat(var(--size), 1fr);
    grid-template-rows: repeat(var(--size), 1fr);
    width: min(65vh, 85vw);
    aspect-ratio: 1;
    gap: 2px;
    background: #2d3748;
    padding: 6px;
    border-radius: 12px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
}

.cell {
    background: #4a5568;
    border-radius: 3px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
}

.cell.player {
    background: #4299e1;
    box-shadow: 0 0 20px #4299e1;
    z-index: 10;
}

.cell.bug-green, .cell.bug-blue {
    background: #e53e3e;
    box-shadow: 0 0 10px #e53e3e;
}

.cell.water {
    background: #3182ce;
}

.cell.tree {
    background: #38a169;
}

.cell.rock {
    background: #718096;
}

.cell.box {
    background: #d69e2e;
}

.entity-icon {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    transition: transform 0.2s;
    position: relative;
    z-index: 2;
}

.player .entity-icon {
    transform: scale(1.3);
    filter: drop-shadow(0 0 5px rgba(255,255,255,0.8));
}

/* Attack Animation */
.attack-slash {
    position: absolute;
    font-size: 3rem;
    animation: slash 0.5s ease-out;
    z-index: 100;
    pointer-events: none;
}

.slash-right { animation: slashRight 0.5s ease-out; }
.slash-left { animation: slashLeft 0.5s ease-out; }
.slash-up { animation: slashUp 0.5s ease-out; }
.slash-down { animation: slashDown 0.5s ease-out; }

@keyframes slashRight {
    0% { transform: translateX(-20px) rotate(-45deg) scale(0.5); opacity: 0; }
    50% { transform: translateX(30px) rotate(45deg) scale(1.5); opacity: 1; }
    100% { transform: translateX(50px) rotate(90deg) scale(0.8); opacity: 0; }
}

@keyframes slashLeft {
    0% { transform: translateX(20px) rotate(45deg) scale(0.5); opacity: 0; }
    50% { transform: translateX(-30px) rotate(-45deg) scale(1.5); opacity: 1; }
    100% { transform: translateX(-50px) rotate(-90deg) scale(0.8); opacity: 0; }
}

@keyframes slashUp {
    0% { transform: translateY(20px) rotate(45deg) scale(0.5); opacity: 0; }
    50% { transform: translateY(-30px) rotate(-45deg) scale(1.5); opacity: 1; }
    100% { transform: translateY(-50px) rotate(-90deg) scale(0.8); opacity: 0; }
}

@keyframes slashDown {
    0% { transform: translateY(-20px) rotate(-45deg) scale(0.5); opacity: 0; }
    50% { transform: translateY(30px) rotate(45deg) scale(1.5); opacity: 1; }
    100% { transform: translateY(50px) rotate(90deg) scale(0.8); opacity: 0; }
}

/* Throw Animation */
.throw-projectile {
    position: absolute;
    font-size: 2rem;
    z-index: 100;
    pointer-events: none;
}

.throw-right { animation: throwRight 0.6s ease-out; }
.throw-left { animation: throwLeft 0.6s ease-out; }
.throw-up { animation: throwUp 0.6s ease-out; }
.throw-down { animation: throwDown 0.6s ease-out; }

@keyframes throwRight {
    0% { transform: translateX(0) scale(1); opacity: 1; }
    100% { transform: translateX(100px) scale(0.5) rotate(360deg); opacity: 0; }
}

@keyframes throwLeft {
    0% { transform: translateX(0) scale(1); opacity: 1; }
    100% { transform: translateX(-100px) scale(0.5) rotate(-360deg); opacity: 0; }
}

@keyframes throwUp {
    0% { transform: translateY(0) scale(1); opacity: 1; }
    100% { transform: translateY(-100px) scale(0.5) rotate(360deg); opacity: 0; }
}

@keyframes throwDown {
    0% { transform: translateY(0) scale(1); opacity: 1; }
    100% { transform: translateY(100px) scale(0.5) rotate(-360deg); opacity: 0; }
}

.controls {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

.mic-btn {
    background: #e53e3e;
    border: none;
    color: white;
    padding: 15px 40px;
    border-radius: 50px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 10px 20px rgba(229, 62, 62, 0.3);
    transition: all 0.3s;
}

.mic-btn.listening {
    background: #48bb78;
    box-shadow: 0 0 25px #48bb78;
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.btn-text {
    text-transform: uppercase;
    letter-spacing: 1px;
}

.hints {
    color: #a0aec0;
    font-style: italic;
    text-align: center;
    max-width: 600px;
}

</style>
