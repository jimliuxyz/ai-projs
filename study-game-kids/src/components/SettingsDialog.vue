<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useSettingsStore } from '~/stores/settings.store';
import { useContentStore } from '~/stores/content.store';
import ContentTab from './settings/ContentTab.vue';
import VoiceTab from './settings/VoiceTab.vue';
import GameTab from './settings/GameTab.vue';

const { t } = useI18n();

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

const settingsStore = useSettingsStore();
const contentStore = useContentStore();

const currentTab = ref<'content' | 'voice' | 'game'>('content');

const show = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
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
        <span class="settings-title">⚙️ {{ $t('settings.title') }}</span>
        <v-btn icon="mdi-close" variant="text" @click="close"></v-btn>
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
  border-radius: 0 !important;
}

.settings-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  flex-shrink: 0;
}

.settings-title {
  font-size: 1.8rem;
  font-weight: 600;
}

.settings-tabs {
  border-bottom: 1px solid #e0e0e0;
  flex-shrink: 0;
}

.settings-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px 30px;
  min-height: 0;
}

.settings-actions {
  padding: 16px 24px;
  border-top: 1px solid #e0e0e0;
  background: white;
  flex-shrink: 0;
}
</style>
