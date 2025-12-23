import { reactive, computed } from 'vue';
import type { Word } from '../data/words';

interface VocabularyFile {
    name: string;
    path: string;
    data: Word[];
}

// 1. Load all JSONs via Glob
const modules = import.meta.glob('../assets/vocabularies/*.json', { eager: true });

// 2. Parse into list
const lists: VocabularyFile[] = [];
for (const path in modules) {
    // Extract filename as name (e.g. /path/to/animals.json -> animals)
    const name = path.split('/').pop()?.replace('.json', '') || 'unknown';
    const data = (modules[path] as any).default as Word[];
    lists.push({ name, path, data });
}

// 3. Store State
const state = reactive({
    currentListName: localStorage.getItem('vocab_list') || 'default',
});

// 4. Computed Current List
const currentList = computed(() => {
    const found = lists.find(l => l.name === state.currentListName);
    return found ? found.data : (lists[0]?.data || []);
});

// 5. Actions
const selectList = (name: string) => {
    state.currentListName = name;
    localStorage.setItem('vocab_list', name);
};

export const vocabularyStore = {
    state,
    lists,
    currentList,
    selectList
};
