<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { settings } from '~/store/settings';
import { vocabularyStore } from '~/store/vocabulary';
import { lyricsStore } from '~/store/lyrics';
import { useAudio } from '~/composables/useAudio';
import { useAudioContent } from '~/composables/useAudioContent';

defineProps<{
    modelValue: boolean;
    title?: string;
    extraTabs?: { id: string, label: string, icon: string }[];
}>();

const emit = defineEmits(['update:modelValue']);
const { speak } = useAudio();
const { getQuestion } = useAudioContent();

const activeTab = ref('basic');
const showVocabPicker = ref(false);
const showLyricsPicker = ref(false);
const availableVoices = ref<SpeechSynthesisVoice[]>([]);

const updateVoices = () => {
    availableVoices.value = window.speechSynthesis.getVoices()
        .filter(v => v.lang.startsWith('en') || v.lang.startsWith('zh'));
};

const previewVoice = (voiceURI: string) => {
    const list = vocabularyStore.currentList.value;
    const sampleWord = (list && list.length > 0) ? list[0] : { q: 'Apple', a: 'apple', t: '蘋果', exps: ['A fruit'] };
    const text = getQuestion(sampleWord);
    speak(text, true, undefined, voiceURI);
};

onMounted(() => {
    updateVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = updateVoices;
    }
});

const pickVocab = (name: string) => {
    vocabularyStore.selectList(name);
    showVocabPicker.value = false;
};

const pickLyrics = (name: string) => {
    lyricsStore.selectLyrics(name);
    showLyricsPicker.value = false;
};

const close = () => {
    emit('update:modelValue', false);
};
</script>

<template>
  <v-dialog 
    :model-value="modelValue" 
    @update:model-value="close"
    max-width="960"
    min-height="95vh"
    scrollable
    transition="dialog-bottom-transition"
  >
    <v-card class="settings-card" rounded="xl" theme="dark">
      <v-toolbar density="compact">
        <v-toolbar-title class="font-weight-bold text-h6">
             {{ title || 'Settings' }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-close" variant="text" @click="close"></v-btn>
      </v-toolbar>

      <v-tabs
        v-model="activeTab"
        color="primary"
        align-tabs="center"
        bg-color="surface"
      >
        <v-tab value="basic">
          <v-icon start icon="mdi-earth" class="mr-2"></v-icon>
          Basic
        </v-tab>
        
        <v-tab 
          v-for="tab in extraTabs" 
          :key="tab.id"
          :value="tab.id"
        >
          <span class="mr-2">{{ tab.icon }}</span>
          {{ tab.label }}
        </v-tab>
      </v-tabs>

      <v-card-text class="pa-0" style="height: 600px;">
        <v-window v-model="activeTab" class="fill-height">
            <!-- Content Items -->
            <v-window-item value="basic" class="fill-height overflow-y-auto">
                <v-container class="pa-2">
                    <!-- Vocabulary Card -->
                    <v-card variant="tonal" class="mb-4 w-100" color="secondary">
                        <v-card-item title="Vocabulary">
                            <v-card-text class="d-flex align-center justify-space-between mt-2">
                                <div class="text-h6 text-capitalize">
                                    {{ vocabularyStore.state.currentListName }}
                                </div>
                                <v-btn color="primary" variant="elevated" size="small" @click="showVocabPicker = true">
                                    Change
                                </v-btn>
                            </v-card-text>
                        </v-card-item>
                    </v-card>

                    <!-- Lyrics Card -->
                    <v-card variant="tonal" class="mb-4 w-100" color="secondary">
                        <v-card-item title="Story / Lyrics">
                            <v-card-text class="d-flex align-center justify-space-between mt-2">
                                <div class="text-h6 text-capitalize">
                                    {{ lyricsStore.state.currentLyricsName }}
                                </div>
                                <v-btn color="primary" variant="elevated" size="small" @click="showLyricsPicker = true">
                                    Change
                                </v-btn>
                            </v-card-text>
                        </v-card-item>
                    </v-card>

                    <!-- Speech Card -->
                    <v-card variant="tonal" class="w-100 mb-4" color="secondary">
                        <v-card-item title="Speech Settings">
                            <v-card-text class="mt-2">
                                <div class="mb-4">
                                    <div class="text-caption mb-1">Speed: {{ settings.speechRate.toFixed(1) }}x</div>
                                    <v-slider
                                        v-model.number="settings.speechRate"
                                        min="0.5"
                                        max="2.0"
                                        step="0.1"
                                        color="primary"
                                        track-color="grey"
                                        thumb-label
                                    ></v-slider>
                                </div>

                                <div class="mb-4">
                                    <div class="text-caption mb-2">Voice:</div>
                                    <v-list density="compact" class="voice-list bg-grey-darken-4 rounded" border>
                                        <v-list-item
                                            v-for="voice in availableVoices"
                                            :key="voice.voiceURI"
                                            :active="settings.voiceURI === voice.voiceURI"
                                            active-color="primary"
                                            @click="settings.voiceURI = voice.voiceURI"
                                        >
                                            <v-list-item-title class="text-body-2 font-weight-medium">
                                                {{ voice.name }}
                                            </v-list-item-title>
                                            <v-list-item-subtitle class="text-caption opacity-70">
                                                {{ voice.lang }}
                                            </v-list-item-subtitle>
                                            <template v-slot:append>
                                                <v-btn
                                                    icon="mdi-play-circle"
                                                    variant="text"
                                                    size="small"
                                                    color="primary"
                                                    @click.stop="previewVoice(voice.voiceURI)"
                                                ></v-btn>
                                            </template>
                                        </v-list-item>
                                        <v-list-item
                                            v-if="availableVoices.length === 0"
                                            disabled
                                        >
                                            <v-list-item-title>No voices detected</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                    <v-btn 
                                        block variant="text" size="x-small" 
                                        class="mt-1" color="grey"
                                        @click="settings.voiceURI = null"
                                        v-if="settings.voiceURI"
                                    >
                                        Reset to Auto
                                    </v-btn>
                                </div>
                            </v-card-text>
                        </v-card-item>
                    </v-card>

                    <!-- Gameplay Card -->
                    <v-card variant="tonal" class="w-100" color="secondary">
                        <v-card-item title="Gameplay">
                            <v-card-text class="mt-2">
                                    <v-switch
                                        v-model="settings.readAnswer"
                                        label="Read answer along with question"
                                        color="primary"
                                        inset
                                        density="compact"
                                        hide-details
                                    ></v-switch>

                                    <v-switch
                                        v-model="settings.readTransition"
                                        label="Read traditional Chinese (t)"
                                        color="primary"
                                        inset
                                        density="compact"
                                        class="mt-2"
                                        hide-details
                                    ></v-switch>
                            </v-card-text>
                        </v-card-item>
                    </v-card>
                </v-container>
            </v-window-item>

            <v-window-item 
                v-for="tab in extraTabs"
                :key="tab.id"
                :value="tab.id"
                class="fill-height overflow-y-auto"
            >
                <div class="pa-2">
                    <slot :name="tab.id"></slot>
                </div>
            </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>

    <!-- Vocab Picker Dialog ... -->
    <v-dialog v-model="showVocabPicker" max-width="500" scrollable>
        <v-card theme="dark" rounded="xl">
            <v-card-title class="d-flex align-center pa-4 bg-secondary">
                <v-icon icon="mdi-format-list-bulleted" class="mr-2"></v-icon>
                Select Vocabulary
                <v-spacer></v-spacer>
                <v-btn icon="mdi-close" variant="text" density="comfortable" @click="showVocabPicker = false"></v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height: 400px;" class="pa-0">
                <v-list lines="two" bg-color="background">
                    <v-list-item
                        v-for="list in vocabularyStore.lists" 
                        :key="list.name"
                        :active="list.name === vocabularyStore.state.currentListName"
                        active-color="primary"
                        @click="pickVocab(list.name)"
                        rounded="lg"
                        class="ma-2"
                    >
                        <template v-slot:prepend>
                            <v-avatar color="primary" variant="tonal">
                                {{ list.name.charAt(0).toUpperCase() }}
                            </v-avatar>
                        </template>
                        <v-list-item-title class="font-weight-bold text-capitalize">{{ list.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ list.data.length }} words</v-list-item-subtitle>
                        
                        <template v-slot:append v-if="list.name === vocabularyStore.state.currentListName">
                            <v-icon color="success" icon="mdi-check-circle"></v-icon>
                        </template>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>
    </v-dialog>

    <!-- Lyrics Picker Dialog -->
    <v-dialog v-model="showLyricsPicker" max-width="500" scrollable>
        <v-card theme="dark" rounded="xl">
            <v-card-title class="d-flex align-center pa-4 bg-secondary">
                <v-icon icon="mdi-book-open-variant" class="mr-2"></v-icon>
                Select Story
                <v-spacer></v-spacer>
                <v-btn icon="mdi-close" variant="text" density="comfortable" @click="showLyricsPicker = false"></v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height: 400px;" class="pa-0">
                <v-list lines="two" bg-color="background">
                    <v-list-item
                        v-for="list in lyricsStore.lists" 
                        :key="list.name"
                        :active="list.name === lyricsStore.state.currentLyricsName"
                        active-color="primary"
                        @click="pickLyrics(list.name)"
                        rounded="lg"
                        class="ma-2"
                    >
                        <template v-slot:prepend>
                            <v-avatar color="primary" variant="tonal">
                                <v-icon icon="mdi-book-play"></v-icon>
                            </v-avatar>
                        </template>
                        <v-list-item-title class="font-weight-bold text-capitalize">{{ list.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ list.data.length }} lines</v-list-item-subtitle>
                        
                        <template v-slot:append v-if="list.name === lyricsStore.state.currentLyricsName">
                            <v-icon color="success" icon="mdi-check-circle"></v-icon>
                        </template>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>
    </v-dialog>
  </v-dialog>
</template>

<style scoped>
.voice-list {
    max-height: 250px;
    overflow-y: auto;
}
/* Theme colors are handled by Vuetify configuration */
</style>
