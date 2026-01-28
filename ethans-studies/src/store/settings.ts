import { reactive, watch } from 'vue';

const SETTINGS_KEY = 'star_words_settings';

export interface CarColors {
    body: number;
    tires: number;
}

export interface GameSettings {
    speechRate: number; // 0.5 to 2.0
    volume: number; // 0.0 to 1.0 (placeholder for now)
    voiceURI: string | null;
    p1Color?: number; // Deprecated
    p2Color?: number; // Deprecated
    p1Car: CarColors;
    p2Car: CarColors;
    readAnswer: boolean;
    readTransition: boolean;
}

const defaultSettings: GameSettings = {
    speechRate: 0.9,
    volume: 1.0,
    voiceURI: null,
    p1Color: 0x0164e8,
    p2Color: 0xe81123,
    p1Car: { body: 0x0164e8, tires: 0x333333 },
    p2Car: { body: 0xe81123, tires: 0x333333 },
    readAnswer: true,
    readTransition: true,
};

// Load from local storage or default
const stored = localStorage.getItem(SETTINGS_KEY);
const rawState = stored ? JSON.parse(stored) : defaultSettings;

// Migration/Cleanup
if (!rawState.p1Car) {
    rawState.p1Car = { body: rawState.p1Color || 0x0164e8, tires: 0x333333 };
}
if (!rawState.p2Car) {
    rawState.p2Car = { body: rawState.p2Color || 0xe81123, tires: 0x333333 };
}
if (rawState.readTransition === undefined) {
    rawState.readTransition = true;
}

export const settings = reactive<GameSettings>(rawState);

// Auto-save
watch(settings, (newSettings) => {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(newSettings));
});
