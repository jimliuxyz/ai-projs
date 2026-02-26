<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useSettingsStore } from '~/stores/settings.store';

const settingsStore = useSettingsStore();

const availableVoices = ref<SpeechSynthesisVoice[]>([]);

const voiceSettings = computed(() => settingsStore.voiceSettings);

onMounted(() => {
  loadVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
});

function loadVoices() {
  availableVoices.value = window.speechSynthesis.getVoices();
}

function updateVoice(event: Event) {
  const target = event.target as HTMLSelectElement;
  settingsStore.updateVoiceSettings({ voice: target.value });
}

function testVoice() {
  const utterance = new SpeechSynthesisUtterance('Hello! This is a test of the voice settings.');
  utterance.lang = voiceSettings.value.language;
  utterance.rate = voiceSettings.value.rate;
  utterance.pitch = voiceSettings.value.pitch;
  utterance.volume = voiceSettings.value.volume;
  
  if (voiceSettings.value.voice) {
    const voice = availableVoices.value.find(v => v.name === voiceSettings.value.voice);
    if (voice) {
      utterance.voice = voice;
    }
  }
  
  window.speechSynthesis.speak(utterance);
}

function resetVoice() {
  settingsStore.resetVoiceSettings();
}
</script>

<template>
  <div class="voice-tab">
    <h3 class="section-title">🎤 Voice Settings</h3>

    <div class="settings-group">
      <v-switch
        :model-value="voiceSettings.enabled"
        @update:model-value="settingsStore.updateVoiceSettings({ enabled: !!$event })"
        label="Enable Voice"
        color="primary"
        hide-details
      ></v-switch>
    </div>

    <div class="settings-group" v-if="voiceSettings.enabled">
      <label>Voice Engine</label>
      <v-radio-group
        :model-value="voiceSettings.engine"
        @update:model-value="$event && settingsStore.updateVoiceSettings({ engine: $event as 'browser' | 'custom' })"
        inline
        hide-details
      >
        <v-radio label="Browser TTS" value="browser"></v-radio>
        <v-radio label="Custom" value="custom" disabled></v-radio>
      </v-radio-group>
    </div>

    <div class="settings-group" v-if="voiceSettings.enabled">
      <label>Language</label>
      <v-select
        :model-value="voiceSettings.language"
        @update:model-value="$event && settingsStore.updateVoiceSettings({ language: $event })"
        :items="[
          { title: 'English (US)', value: 'en-US' },
          { title: 'English (UK)', value: 'en-GB' },
          { title: '中文 (繁體)', value: 'zh-TW' },
          { title: '中文 (简体)', value: 'zh-CN' },
        ]"
        variant="outlined"
        density="compact"
      ></v-select>
    </div>

    <div class="settings-group" v-if="voiceSettings.enabled && availableVoices.length > 0">
      <label>Voice</label>
      <v-select
        :model-value="voiceSettings.voice"
        @update:model-value="settingsStore.updateVoiceSettings({ voice: $event || undefined })"
        :items="availableVoices.map(v => ({ title: v.name, value: v.name }))"
        variant="outlined"
        density="compact"
        clearable
      ></v-select>
    </div>

    <div class="settings-group" v-if="voiceSettings.enabled">
      <label>Speed: {{ voiceSettings.rate.toFixed(1) }}x</label>
      <v-slider
        :model-value="voiceSettings.rate"
        @update:model-value="settingsStore.updateVoiceSettings({ rate: Number($event) })"
        :min="0.5"
        :max="2.0"
        :step="0.1"
        thumb-label
        color="primary"
      ></v-slider>
    </div>

    <div class="settings-group" v-if="voiceSettings.enabled">
      <label>Pitch: {{ voiceSettings.pitch.toFixed(1) }}</label>
      <v-slider
        :model-value="voiceSettings.pitch"
        @update:model-value="settingsStore.updateVoiceSettings({ pitch: Number($event) })"
        :min="0.5"
        :max="2.0"
        :step="0.1"
        thumb-label
        color="primary"
      ></v-slider>
    </div>

    <div class="settings-group" v-if="voiceSettings.enabled">
      <label>Volume: {{ Math.round(voiceSettings.volume * 100) }}%</label>
      <v-slider
        :model-value="voiceSettings.volume"
        @update:model-value="settingsStore.updateVoiceSettings({ volume: Number($event) })"
        :min="0"
        :max="1"
        :step="0.1"
        thumb-label
        color="primary"
      ></v-slider>
    </div>

    <div class="action-buttons">
      <v-btn 
        color="primary" 
        variant="elevated"
        @click="testVoice"
        :disabled="!voiceSettings.enabled"
      >
        🔊 Test Voice
      </v-btn>
      <v-btn 
        color="secondary" 
        variant="outlined"
        @click="resetVoice"
      >
        Reset to Default
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
.voice-tab {
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

.settings-group label {
  font-size: var(--font-size-base);
  font-weight: 700;
  color: var(--text-primary);
}

.action-buttons {
  display: flex;
  gap: 20px;
  margin-top: 32px;
}

/* Vuetify Overrides */
:deep(.v-label) {
  font-size: var(--font-size-base) !important;
  font-weight: 600 !important;
  color: var(--text-primary) !important;
  opacity: 1 !important;
}

:deep(.v-selection-control) {
  min-height: 48px !important;
}

:deep(.v-field) {
  background: var(--input-bg) !important;
  border-radius: 12px !important;
  color: var(--text-primary) !important;
}
</style>
