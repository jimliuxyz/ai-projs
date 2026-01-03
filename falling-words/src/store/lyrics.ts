import { reactive, computed } from 'vue';

interface LyricLine {
    start: string;
    end: string;
    text: string;
    translation: string;
}

interface LyricsFile {
    name: string;
    path: string;
    data: LyricLine[];
}

// 1. Load all JSONs via Glob
const modules = import.meta.glob('../assets/lyrics/*.json', { eager: true });

// 2. Parse into list
const lists: LyricsFile[] = [];
for (const path in modules) {
    const name = path.split('/').pop()?.replace('.json', '') || 'unknown';
    const data = (modules[path] as any).default as LyricLine[];
    lists.push({ name, path, data });
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

// 5. Actions
const selectLyrics = (name: string) => {
    state.currentLyricsName = name;
    localStorage.setItem('lyrics_list', name);
};

export const lyricsStore = {
    state,
    lists,
    currentLines,
    selectLyrics
};
