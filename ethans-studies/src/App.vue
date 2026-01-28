<script setup lang="ts">
import { ref } from 'vue';
import FallingWordsGame from '~/games/FallingWordsGame/FallingWordsGame.vue';
import SpellingGame from '~/games/SpellingGame/SpellingGame.vue';
import DuelGame from '~/games/DuelGame/DuelGame.vue';
import CodeKnight from '~/games/CodeKnight/CodeKnight.vue';
import ParkingGame from '~/games/ParkingGame/ParkingGame.vue';
import StoryEchoGame from '~/games/StoryEchoGame/StoryEchoGame.vue';
import CommonSettingsDialog from '~/components/CommonSettingsDialog.vue';

const currentGame = ref<string | null>(window.location.hash.replace('#/', '') || null);
const showSettings = ref(false);

const games = [
    { id: 'parking-jam', name: 'Parking Jam', desc: 'Race to park cars!', icon: '🚗' },
    { id: 'falling-words', name: 'Star Words', desc: 'Catch the words in space!', icon: '🚀' },
    { id: 'spelling-mode', name: 'Spell Master', desc: 'Spell words letter by letter!', icon: '🛸' },
    { id: 'duel-mode', name: 'Duel', desc: '2-Player Battle!', icon: '⚔️' },
    { id: 'code-knight', name: 'Code Knight', desc: 'Control by your voice!', icon: '🛡️' },
    { id: 'story-echo', name: 'Story Echo', desc: 'Listen and repeat!', icon: '📖' },
    { id: 'coming-soon', name: 'More Games', desc: 'Coming Soon...', icon: '🔐' }
];

// Virtual Routing Sync
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#/', '');
    currentGame.value = hash || null;
});

const selectGame = (id: string) => {
    if (id === 'coming-soon') return;
    currentGame.value = id;
    window.location.hash = `#/${id}`;
};

const exitGame = () => {
    currentGame.value = null;
    window.location.hash = '';
};
</script>

<template>
  <v-app>
    <div v-if="!currentGame" class="portal-container">
      <div class="header-section">
          <h1 class="portal-title">Ethan's Studies</h1>
          <button class="main-settings-btn" @click="showSettings = true">
              ⚙️ Settings
          </button>
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
  
      <!-- Global Settings Dialog -->
      <CommonSettingsDialog v-model="showSettings" title="Game Settings" />
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
  
    <StoryEchoGame
      v-else-if="currentGame === 'story-echo'"
      @exit="exitGame"
    />
  </v-app>
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

.header-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    gap: 20px;
}

.portal-title {
    font-size: 4rem;
    color: #333;
    margin-bottom: 0px;
    text-shadow: 2px 2px white;
}

.main-settings-btn {
    padding: 12px 30px;
    background: white;
    border: none;
    border-radius: 50px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #666;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: all 0.2s;
}

.main-settings-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    color: #333;
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
</style>
