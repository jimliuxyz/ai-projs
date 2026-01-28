import { computed, ref, watch } from 'vue';
import { lyricsStore } from '~/store/lyrics';
import { vocabularyStore } from '~/store/vocabulary';

export interface StoryLine {
    text: string;
    translation: string;
    start?: string;
    end?: string;
}

export type ContentMode = 'lyrics' | 'vocabulary';

// Persist mode selection
const savedMode = localStorage.getItem('story_echo_mode') as ContentMode | null;
const mode = ref<ContentMode>(savedMode || 'lyrics');

// Persist random selection
const savedRandom = localStorage.getItem('story_echo_random') === 'true';
const isRandom = ref(savedRandom);

// Persist loop selection
const savedLoop = localStorage.getItem('story_echo_loop') === 'true';
const isLoop = ref(savedLoop);

watch(mode, (newMode) => {
    localStorage.setItem('story_echo_mode', newMode);
});

watch(isRandom, (newVal) => {
    localStorage.setItem('story_echo_random', String(newVal));
});

watch(isLoop, (newVal) => {
    localStorage.setItem('story_echo_loop', String(newVal));
});

export function useStoryContent() {
    const currentContent = computed(() => {
        let lines = [];
        let title = '';
        let audio = undefined;

        if (mode.value === 'lyrics') {
            title = lyricsStore.state.currentLyricsName;
            lines = lyricsStore.currentLines.value.map(l => ({
                text: l.text,
                translation: l.translation,
                start: l.start,
                end: l.end
            }));
            audio = lyricsStore.currentAudio.value;
        } else {
            title = vocabularyStore.state.currentListName;
            lines = vocabularyStore.currentList.value.map(w => ({
                text: w.q,
                translation: w.t,
                start: undefined,
                end: undefined
            }));
            audio = undefined;
        }

        if (isRandom.value) {
            // Fisher-Yates shuffle
            for (let i = lines.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [lines[i], lines[j]] = [lines[j], lines[i]];
            }
        }

        return {
            title,
            lines,
            audio
        };
    });

    return {
        mode,
        isRandom,
        isLoop,
        currentContent
    };
}
