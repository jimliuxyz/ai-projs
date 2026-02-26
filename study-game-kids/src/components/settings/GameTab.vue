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
    <h3 class="section-title">🎮 {{ $t('settings.gameTab.title') }}</h3>

    <div class="settings-group">
      <v-switch
        :model-value="gameSettings.soundEnabled"
        @update:model-value="settingsStore.updateGameSettings({ soundEnabled: !!$event })"
        :label="'🔊 ' + $t('settings.gameTab.soundEffects')"
        color="primary"
        hide-details
      ></v-switch>
    </div>

    <div class="settings-group">
      <v-switch
        :model-value="gameSettings.musicEnabled"
        @update:model-value="settingsStore.updateGameSettings({ musicEnabled: !!$event })"
        :label="'🎵 ' + $t('settings.gameTab.backgroundMusic')"
        color="primary"
        hide-details
      ></v-switch>
    </div>

    <div class="settings-group">
      <v-switch
        :model-value="gameSettings.vibrationEnabled"
        @update:model-value="settingsStore.updateGameSettings({ vibrationEnabled: !!$event })"
        :label="'📳 ' + $t('settings.gameTab.vibration')"
        color="primary"
        hide-details
      ></v-switch>
    </div>

    <div class="settings-group">
      <v-switch
        :model-value="gameSettings.fullscreen"
        @update:model-value="settingsStore.updateGameSettings({ fullscreen: !!$event })"
        :label="'🖥️ ' + $t('settings.gameTab.fullscreen')"
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
        {{ $t('settings.gameTab.reset') }}
      </v-btn>
    </div>

    <div class="info-box">
      <h4>💡 {{ $t('settings.gameTab.tips') }}</h4>
      <ul>
        <li>{{ $t('settings.gameTab.tip1') }}</li>
        <li>{{ $t('settings.gameTab.tip2') }}</li>
        <li>{{ $t('settings.gameTab.tip3') }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.game-tab {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.section-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.settings-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.action-buttons {
  margin-top: 32px;
}

.info-box {
  background: var(--glass-bg);
  border-left: 6px solid var(--accent-primary);
  padding: 32px;
  border-radius: var(--radius-md);
  margin-top: 24px;
}

.info-box h4 {
  font-size: var(--font-size-lg);
  margin-bottom: 20px;
  color: var(--accent-primary);
  font-weight: 700;
}

.info-box ul {
  margin-left: 24px;
}

.info-box li {
  font-size: var(--font-size-base);
  margin-bottom: 12px;
  color: var(--text-secondary);
}

/* Vuetify Overrides */
:deep(.v-label) {
  font-size: var(--font-size-base) !important;
  font-weight: 600 !important;
  color: var(--text-primary) !important;
  opacity: 1 !important;
}
</style>
