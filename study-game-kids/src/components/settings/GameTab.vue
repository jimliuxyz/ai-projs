<script setup lang="ts">
import { computed } from 'vue';
import { useSettingsStore } from '~/stores/settings.store';
import { GameDifficulty } from '~/types/game.types';

const settingsStore = useSettingsStore();

const gameSettings = computed(() => settingsStore.gameSettings);

function resetGame() {
  settingsStore.resetGameSettings();
}
</script>

<template>
  <div class="game-tab">
    <h3 class="section-title">🎮 Game Settings</h3>

    <div class="settings-group">
      <label>Difficulty</label>
      <v-btn-toggle
        :model-value="gameSettings.difficulty"
        @update:model-value="$event && settingsStore.updateGameSettings({ difficulty: $event })"
        color="primary"
        variant="outlined"
        divided
        mandatory
      >
        <v-btn :value="GameDifficulty.EASY">
          😊 Easy
        </v-btn>
        <v-btn :value="GameDifficulty.MEDIUM">
          🤔 Medium
        </v-btn>
        <v-btn :value="GameDifficulty.HARD">
          😤 Hard
        </v-btn>
      </v-btn-toggle>
    </div>

    <div class="settings-group">
      <v-switch
        :model-value="gameSettings.soundEnabled"
        @update:model-value="settingsStore.updateGameSettings({ soundEnabled: !!$event })"
        label="🔊 Sound Effects"
        color="primary"
        hide-details
      ></v-switch>
    </div>

    <div class="settings-group">
      <v-switch
        :model-value="gameSettings.musicEnabled"
        @update:model-value="settingsStore.updateGameSettings({ musicEnabled: !!$event })"
        label="🎵 Background Music"
        color="primary"
        hide-details
      ></v-switch>
    </div>

    <div class="settings-group">
      <v-switch
        :model-value="gameSettings.vibrationEnabled"
        @update:model-value="settingsStore.updateGameSettings({ vibrationEnabled: !!$event })"
        label="📳 Vibration (Mobile)"
        color="primary"
        hide-details
      ></v-switch>
    </div>

    <div class="settings-group">
      <v-switch
        :model-value="gameSettings.showTimer"
        @update:model-value="settingsStore.updateGameSettings({ showTimer: !!$event })"
        label="⏱️ Show Timer"
        color="primary"
        hide-details
      ></v-switch>
    </div>

    <div class="settings-group">
      <v-switch
        :model-value="gameSettings.showScore"
        @update:model-value="settingsStore.updateGameSettings({ showScore: !!$event })"
        label="🏆 Show Score"
        color="primary"
        hide-details
      ></v-switch>
    </div>

    <div class="settings-group">
      <v-switch
        :model-value="gameSettings.fullscreen"
        @update:model-value="settingsStore.updateGameSettings({ fullscreen: !!$event })"
        label="🖥️ Fullscreen Mode"
        color="primary"
        hide-details
      ></v-switch>
    </div>

    <div class="action-buttons">
      <v-btn 
        color="secondary" 
        variant="outlined"
        @click="resetGame"
        block
      >
        Reset to Default
      </v-btn>
    </div>

    <div class="info-box">
      <h4>💡 Tips</h4>
      <ul>
        <li>Easy mode gives more time and hints</li>
        <li>Hard mode increases speed and reduces hints</li>
        <li>Score multiplier increases with difficulty</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.game-tab {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.section-title {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #333;
}

.settings-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.settings-group label {
  font-weight: 500;
  color: #555;
  margin-bottom: 5px;
}

.action-buttons {
  margin-top: 20px;
}

.info-box {
  background: #f0f7ff;
  border-left: 4px solid #667eea;
  padding: 20px;
  border-radius: 8px;
}

.info-box h4 {
  margin-bottom: 12px;
  color: #667eea;
}

.info-box ul {
  margin-left: 20px;
}

.info-box li {
  margin-bottom: 8px;
  color: #555;
}
</style>
