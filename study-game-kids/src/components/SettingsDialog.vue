<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useSettingsStore } from '~/stores/settings.store';
import { useContentStore } from '~/stores/content.store';
import ContentTab from './settings/ContentTab.vue';
import VoiceTab from './settings/VoiceTab.vue';
import GameTab from './settings/GameTab.vue';

const { t } = useI18n();

const props = defineProps<{
  modelValue: boolean;
  initialTab?: 'content' | 'voice' | 'game' | 'extra';
  extraTabTitle?: string;
  extraTabIcon?: string;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

const settingsStore = useSettingsStore();
const contentStore = useContentStore();

const currentTab = ref<'content' | 'voice' | 'game' | 'extra'>('content');

const show = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

watch(() => props.modelValue, (val) => {
  if (val && props.initialTab) {
    currentTab.value = props.initialTab;
  }
});

function close() {
  show.value = false;
}

function resetAll() {
  if (confirm(t('settings.confirmReset'))) {
    settingsStore.resetSettings();
    contentStore.clearSelection();
    contentStore.clearFilter();
  }
}
</script>

<template>
  <v-dialog 
    v-if="show || modelValue" 
    v-model="show" 
    fullscreen
    transition="dialog-bottom-transition"
  >
    <v-card class="settings-card">
      <v-card-title class="settings-header">
        <div class="d-flex align-center">
          <v-icon size="large" class="mr-3">mdi-cog-outline</v-icon>
          <span class="settings-title">{{ $t('settings.title') }}</span>
        </div>
        
        <div class="d-flex align-center">
          <!-- Theme Switcher -->
          <v-btn-toggle
            :model-value="settingsStore.theme"
            @update:model-value="settingsStore.updateTheme($event)"
            variant="flat"
            density="compact"
            class="theme-toggle mr-4"
            mandatory
          >
            <v-btn value="light">
              <v-icon>mdi-weather-sunny</v-icon>
            </v-btn>
            <v-btn value="dark">
              <v-icon>mdi-weather-night</v-icon>
            </v-btn>
            <v-btn value="auto">
              <v-icon>mdi-theme-light-dark</v-icon>
            </v-btn>
          </v-btn-toggle>
          
          <v-btn icon="mdi-close" variant="text" @click="close"></v-btn>
        </div>
      </v-card-title>

      <v-tabs v-model="currentTab" class="settings-tabs" color="primary">
        <v-tab value="content">
          <v-icon start>mdi-book-open-variant</v-icon>
          {{ $t('settings.content') }}
        </v-tab>
        <v-tab value="voice">
          <v-icon start>mdi-microphone</v-icon>
          {{ $t('settings.voice') }}
        </v-tab>
        <v-tab value="game">
          <v-icon start>mdi-gamepad-variant</v-icon>
          {{ $t('settings.game') }}
        </v-tab>
        <v-tab v-if="extraTabTitle" value="extra">
          <v-icon v-if="extraTabIcon" start>{{ extraTabIcon }}</v-icon>
          {{ extraTabTitle }}
        </v-tab>
      </v-tabs>

      <v-card-text class="settings-content">
        <v-window v-model="currentTab">
          <v-window-item value="content">
            <ContentTab />
          </v-window-item>

          <v-window-item value="voice">
            <VoiceTab />
          </v-window-item>

          <v-window-item value="game">
            <GameTab />
          </v-window-item>

          <v-window-item v-if="extraTabTitle" value="extra">
            <div class="extra-settings-tab">
              <slot name="game-settings"></slot>
            </div>
          </v-window-item>
        </v-window>
      </v-card-text>

      <v-card-actions class="settings-actions">
        <v-btn color="error" variant="text" @click="resetAll">
          {{ $t('settings.resetAll') }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" variant="elevated" @click="close">
          {{ $t('settings.done') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.settings-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--bg-color);
  color: var(--text-primary);
}

.settings-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  background: var(--bg-gradient);
  color: white;
  flex-shrink: 0;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}

.settings-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
}

.theme-toggle {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  overflow: hidden;
}

.settings-tabs {
  background: var(--bg-color);
  border-bottom: 1px solid var(--card-border);
  flex-shrink: 0;
}

:deep(.v-tab) {
  font-size: var(--font-size-base) !important;
  font-weight: 700 !important;
  text-transform: none !important;
  letter-spacing: normal !important;
}

.settings-content {
  flex: 1;
  overflow-y: auto;
  padding: 40px;
  background: var(--bg-color);
  min-height: 0;
}

.settings-actions {
  padding: 24px 32px;
  border-top: 1px solid var(--card-border);
  background: var(--bg-color);
  flex-shrink: 0;
}

:deep(.v-btn--variant-elevated) {
  padding: 0 32px !important;
  height: 52px !important;
  font-size: var(--font-size-base) !important;
  border-radius: 16px !important;
}
</style>
