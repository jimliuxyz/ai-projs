import { reactive, computed } from 'vue';

export interface LyricLine {
    start: string;
    end: string;
    text: string;
    translation: string;
}

interface LyricsFile {
    name: string;
    path: string;
    audio?: string; // Optional audio filename
    data: LyricLine[];
}

// 1. Load all JSONs via Glob
const modules = import.meta.glob('~/assets/lyrics/*.json', { eager: true });

// 2. Parse into list
const lists: LyricsFile[] = [];
for (const path in modules) {
    const name = path.split('/').pop()?.replace('.json', '') || 'unknown';
    const rawData = (modules[path] as any).default;

    let data: LyricLine[] = [];
    let audio: string | undefined = undefined;

    if (Array.isArray(rawData)) {
        data = rawData as LyricLine[];
    } else if (rawData && typeof rawData === 'object') {
        data = rawData.lines || [];
        audio = rawData.audio;
    }

    lists.push({ name, path, data, audio });
}

// 3. Store State
const state = reactive({
    currentLyricsName: localStorage.getItem('lyrics_list') || (lists[0]?.name || 'default'),
});

// 4. Computed Current List
const currentLines = computed(() => {
    const found = lists.find(l => l.name === state.currentLyricsName);
    return found ? found.data : (lists[0]?.data || []);
});

const currentAudio = computed(() => {
    const found = lists.find(l => l.name === state.currentLyricsName);
    return found ? found.audio : undefined;
});

// 5. Actions
const selectLyrics = (name: string) => {
    state.currentLyricsName = name;
    localStorage.setItem('lyrics_list', name);
};

export const lyricsStore = {
    state,
    lists,
    currentLines,
    currentAudio,
    selectLyrics
};
