<script setup lang="ts">
import { ref } from 'vue';
import FallingWordsGame from './components/FallingWordsGame.vue';
import SpellingGame from './components/SpellingGame.vue';
import DuelGame from './components/DuelGame.vue';
import CodeKnight from './components/CodeKnight.vue';
import ParkingGame from './components/ParkingGame.vue';
import { settings } from './store/settings';
import { vocabularyStore } from './store/vocabulary';
import { useAudio } from './composables/useAudio';

const { speak } = useAudio();
const currentGame = ref<string | null>(null);
const showVocabPicker = ref(false);

const games = [
    { id: 'falling-words', name: 'Star Words', desc: 'Catch the words in space!', icon: '🚀' },
    { id: 'spelling-mode', name: 'Spell Master', desc: 'Spell words letter by letter!', icon: '🛸' },
    { id: 'duel-mode', name: 'Duel', desc: '2-Player Battle!', icon: '⚔️' },
    { id: 'code-knight', name: 'Code Knight', desc: 'Control by your voice!', icon: '🛡️' },
    { id: 'parking-jam', name: 'Parking Jam', desc: 'Race to park cars!', icon: '🚗' },
    { id: 'coming-soon', name: 'More Games', desc: 'Coming Soon...', icon: '🔐' }
];

const selectGame = (id: string) => {
    if (id === 'coming-soon') return;
    currentGame.value = id;
};

const exitGame = () => {
    currentGame.value = null;
};

const availableVoices = ref<SpeechSynthesisVoice[]>([]);

const updateVoices = () => {
    availableVoices.value = window.speechSynthesis.getVoices()
        .filter(v => v.lang.startsWith('en') || v.lang.startsWith('zh'));
};

const testVoice = () => {
    speak('Hello, 你好');
};

updateVoices();
if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = updateVoices;
}

const toggleVocabPicker = () => {
    showVocabPicker.value = !showVocabPicker.value;
};

const pickVocab = (name: string) => {
    vocabularyStore.selectList(name);
    showVocabPicker.value = false;
};
</script>

<template>
  <div v-if="!currentGame" class="portal-container">
    <h1 class="portal-title">Kid's Learning Ark</h1>
    
    <div class="settings-panel">
        <div class="setting-item">
            <label>Vocabulary:</label>
            <button class="vocab-btn" @click="toggleVocabPicker">
                📖 {{ vocabularyStore.state.currentListName }}
            </button>
        </div>

        <div class="setting-item">
            <label>Speech Speed: {{ settings.speechRate }}x</label>
            <input 
              type="range" 
              min="0.5" 
              max="2.0" 
              step="0.1" 
              v-model.number="settings.speechRate"
            >
        </div>

        <div class="setting-item">
            <label>Game Voice:</label>
            <select v-model="settings.voiceURI">
                <option :value="null">Default (Auto)</option>
                <option v-for="voice in availableVoices" :key="voice.voiceURI" :value="voice.voiceURI">
                    {{ voice.name }}
                </option>
            </select>
        </div>

        <div class="test-voice">
            <button @click="testVoice">Test Voice</button>
        </div>
    </div>

    <div class="games-grid">
        <div 
          v-for="game in games" 
          :key="game.id" 
          class="game-card"
          :class="{ disabled: game.id === 'coming-soon' }"
          @click="selectGame(game.id)"
        >
            <div class="game-icon">{{ game.icon }}</div>
            <div class="game-info">
                <h3>{{ game.name }}</h3>
                <p>{{ game.desc }}</p>
            </div>
        </div>
    </div>

    <!-- Vocabulary Picker Popup -->
    <div v-if="showVocabPicker" class="modal-overlay" @click.self="showVocabPicker = false">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Select Vocabulary</h2>
                <button class="close-btn" @click="showVocabPicker = false">×</button>
            </div>
            <div class="vocab-list">
                <div 
                    v-for="list in vocabularyStore.lists" 
                    :key="list.name" 
                    class="vocab-item"
                    :class="{ active: list.name === vocabularyStore.state.currentListName }"
                    @click="pickVocab(list.name)"
                >
                    <span class="vocab-name">{{ list.name }}</span>
                    <span class="vocab-count">{{ list.data.length }} words</span>
                </div>
            </div>
        </div>
    </div>
  </div>

  <FallingWordsGame 
    v-else-if="currentGame === 'falling-words'" 
    @exit="exitGame"
  />

  <SpellingGame 
    v-else-if="currentGame === 'spelling-mode'" 
    @exit="exitGame"
  />

  <DuelGame 
    v-else-if="currentGame === 'duel-mode'" 
    @exit="exitGame"
  />

  <CodeKnight 
    v-else-if="currentGame === 'code-knight'" 
    @exit="exitGame"
  />

  <ParkingGame
    v-else-if="currentGame === 'parking-jam'"
    @exit="exitGame"
  />
</template>

<style scoped>
.portal-container {
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: #333;
    font-family: 'Fredoka', sans-serif;
    overflow-x: hidden;
}

.portal-title {
    font-size: 4rem;
    color: #333;
    margin-bottom: 30px;
    text-shadow: 2px 2px white;
}

.settings-panel {
    background: white;
    padding: 20px 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    max-width: 900px;
}

.setting-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.vocab-btn {
    padding: 10px 20px;
    background: #FF9800;
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s;
    font-size: 1.1rem;
    min-width: 150px;
}
.vocab-btn:hover {
    background: #F57C00;
}

.setting-item select {
    padding: 10px;
    border-radius: 10px;
    font-size: 1rem;
    max-width: 250px;
}

.test-voice button {
    padding: 10px 20px;
    background: #4caf50;
    color: white;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-weight: bold;
}

.games-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    width: 100%;
    max-width: 1000px;
}

.game-card {
    background: white;
    border-radius: 30px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.game-card:hover:not(.disabled) {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.game-card.disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: #eee;
}

.game-icon {
    font-size: 5rem;
    margin-bottom: 20px;
}

.game-info h3 {
    margin: 0;
    font-size: 2rem;
    color: #333;
}
.game-info p {
    color: #666;
    font-size: 1.2rem;
}

/* Modal Styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(4px);
}

.modal-content {
    background: white;
    width: 90%;
    max-width: 500px;
    border-radius: 25px;
    padding: 30px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    max-height: 80vh;
    display: flex;
    flex-direction: column;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
.modal-header h2 { margin: 0; color: #333; }
.close-btn {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #999;
}

.vocab-list {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-right: 5px;
}

.vocab-item {
    background: #f8f9fa;
    padding: 15px 20px;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s;
    border: 2px solid transparent;
}
.vocab-item:hover {
    background: #e9ecef;
    transform: translateX(5px);
}
.vocab-item.active {
    border-color: #FF9800;
    background: #FFF3E0;
}
.vocab-name {
    font-weight: bold;
    font-size: 1.2rem;
    text-transform: capitalize;
}
.vocab-count {
    color: #666;
    font-size: 0.9rem;
}
</style>
