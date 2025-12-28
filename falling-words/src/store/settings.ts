import { reactive, watch } from 'vue';

const SETTINGS_KEY = 'star_words_settings';

export interface GameSettings {
    speechRate: number; // 0.5 to 2.0
    volume: number; // 0.0 to 1.0 (placeholder for now)
    voiceURI: string | null;
    p1Color?: number;
    p2Color?: number;
}

const defaultSettings: GameSettings = {
    speechRate: 0.9,
    volume: 1.0,
    voiceURI: null,
    p1Color: 0x0164e8,
    p2Color: 0xe81123,
};

// Load from local storage or default
const stored = localStorage.getItem(SETTINGS_KEY);
const initialState = stored ? JSON.parse(stored) : defaultSettings;

export const settings = reactive<GameSettings>(initialState);

// Auto-save
watch(settings, (newSettings) => {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(newSettings));
});
