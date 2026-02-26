/**
 * 設定管理 Store
 * 使用 Pinia 管理應用程式設定
 */

import { defineStore } from 'pinia';
import type { AppSettings } from '~/types/settings.types';
import {
    DEFAULT_APP_SETTINGS,
    DEFAULT_VOICE_SETTINGS,
    DEFAULT_CONTENT_SETTINGS,
    DEFAULT_GAME_SETTINGS
} from '~/types/settings.types';

const STORAGE_KEY = 'study-game-kids-settings';

/**
 * 從 localStorage 載入設定的輔助函數
 */
function loadPersistedSettings(): AppSettings {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            return {
                ...DEFAULT_APP_SETTINGS,
                ...parsed,
                voice: { ...DEFAULT_APP_SETTINGS.voice, ...parsed.voice },
                content: {
                    ...DEFAULT_APP_SETTINGS.content,
                    ...parsed.content,
                    filter: {
                        ...DEFAULT_APP_SETTINGS.content.filter,
                        ...parsed.content?.filter
                    }
                },
                game: { ...DEFAULT_APP_SETTINGS.game, ...parsed.game },
                games: { ...DEFAULT_APP_SETTINGS.games, ...parsed.games }
            };
        }
    } catch (error) {
        console.error('Failed to load settings:', error);
    }
    return { ...DEFAULT_APP_SETTINGS };
}

export const useSettingsStore = defineStore('settings', {
    state: () => ({
        settings: loadPersistedSettings()
    }),

    getters: {
        voiceSettings: (state) => state.settings.voice,
        contentSettings: (state) => state.settings.content,
        gameSettings: (state) => state.settings.game,
        gameSpecificSettings: (state) => state.settings.games,
        theme: (state) => state.settings.theme,
        locale: (state) => state.settings.locale
    },

    actions: {
        /**
         * 強制重新載入設定
         */
        refresh() {
            this.settings = loadPersistedSettings();
        },

        updateVoiceSettings(updates: Partial<AppSettings['voice']>): void {
            this.settings.voice = { ...this.settings.voice, ...updates };
            this.saveSettings();
        },

        updateContentSettings(updates: Partial<AppSettings['content']>): void {
            this.settings.content = { ...this.settings.content, ...updates };
            this.saveSettings();
        },

        updateGameSettings(updates: Partial<AppSettings['game']>): void {
            this.settings.game = { ...this.settings.game, ...updates };
            this.saveSettings();
        },

        updateGameSpecificSettings(gameId: string, updates: any): void {
            if (!this.settings.games[gameId]) {
                this.settings.games[gameId] = {};
            }
            this.settings.games[gameId] = { ...this.settings.games[gameId], ...updates };
            this.saveSettings();
        },

        updateTheme(newTheme: 'light' | 'dark' | 'auto'): void {
            this.settings.theme = newTheme;
            this.saveSettings();
        },

        updateLocale(newLocale: string): void {
            this.settings.locale = newLocale;
            this.saveSettings();
        },

        resetVoiceSettings(): void {
            this.settings.voice = { ...DEFAULT_VOICE_SETTINGS };
            this.saveSettings();
        },

        resetContentSettings(): void {
            this.settings.content = { ...DEFAULT_CONTENT_SETTINGS };
            this.saveSettings();
        },

        resetGameSettings(): void {
            this.settings.game = { ...DEFAULT_GAME_SETTINGS };
            this.saveSettings();
        },

        resetSettings(): void {
            this.settings = { ...DEFAULT_APP_SETTINGS };
            this.saveSettings();
        },

        saveSettings(): void {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.settings));
            } catch (error) {
                console.error('Failed to save settings:', error);
            }
        },

        exportSettings(): string {
            return JSON.stringify(this.settings, null, 2);
        },

        importSettings(jsonString: string): boolean {
            try {
                const imported = JSON.parse(jsonString);
                if (imported && typeof imported === 'object') {
                    this.settings = { ...DEFAULT_APP_SETTINGS, ...imported };
                    this.saveSettings();
                    return true;
                }
            } catch (error) {
                console.error('Failed to import settings:', error);
            }
            return false;
        }
    }
});
