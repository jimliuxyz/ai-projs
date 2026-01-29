/**
 * 設定管理 Store
 * 使用 Pinia 管理應用程式設定
 */

import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import type { AppSettings } from '~/types/settings.types';
import { DEFAULT_APP_SETTINGS } from '~/types/settings.types';

const STORAGE_KEY = 'study-game-kids-settings';

export const useSettingsStore = defineStore('settings', () => {
    // ==================== 狀態 ====================

    const settings = ref<AppSettings>(loadSettings());

    // ==================== 計算屬性 ====================

    const voiceSettings = computed(() => settings.value.voice);
    const contentSettings = computed(() => settings.value.content);
    const gameSettings = computed(() => settings.value.game);
    const theme = computed(() => settings.value.theme);
    const locale = computed(() => settings.value.locale);

    // ==================== 方法 ====================

    /**
     * 更新語音設定
     */
    function updateVoiceSettings(updates: Partial<AppSettings['voice']>): void {
        settings.value.voice = {
            ...settings.value.voice,
            ...updates
        };
    }

    /**
     * 更新教材設定
     */
    function updateContentSettings(updates: Partial<AppSettings['content']>): void {
        settings.value.content = {
            ...settings.value.content,
            ...updates
        };
    }

    /**
     * 更新遊戲設定
     */
    function updateGameSettings(updates: Partial<AppSettings['game']>): void {
        settings.value.game = {
            ...settings.value.game,
            ...updates
        };
    }

    /**
     * 更新主題
     */
    function updateTheme(newTheme: 'light' | 'dark' | 'auto'): void {
        settings.value.theme = newTheme;
    }

    /**
     * 更新語言
     */
    function updateLocale(newLocale: string): void {
        settings.value.locale = newLocale;
    }

    /**
     * 重置所有設定
     */
    function resetSettings(): void {
        settings.value = { ...DEFAULT_APP_SETTINGS };
    }

    /**
     * 重置特定類別的設定
     */
    function resetVoiceSettings(): void {
        settings.value.voice = { ...DEFAULT_APP_SETTINGS.voice };
    }

    function resetContentSettings(): void {
        settings.value.content = { ...DEFAULT_APP_SETTINGS.content };
    }

    function resetGameSettings(): void {
        settings.value.game = { ...DEFAULT_APP_SETTINGS.game };
    }

    // ==================== 持久化 ====================

    /**
     * 從 localStorage 載入設定
     */
    function loadSettings(): AppSettings {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                // 合併預設值，確保新增的設定項目有預設值
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
                    game: { ...DEFAULT_APP_SETTINGS.game, ...parsed.game }
                };
            }
        } catch (error) {
            console.error('Failed to load settings:', error);
        }
        return { ...DEFAULT_APP_SETTINGS };
    }

    /**
     * 儲存設定到 localStorage
     */
    function saveSettings(): void {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(settings.value));
        } catch (error) {
            console.error('Failed to save settings:', error);
        }
    }

    /**
     * 匯出設定
     */
    function exportSettings(): string {
        return JSON.stringify(settings.value, null, 2);
    }

    /**
     * 匯入設定
     */
    function importSettings(jsonString: string): boolean {
        try {
            const imported = JSON.parse(jsonString);
            // 驗證匯入的資料
            if (imported && typeof imported === 'object') {
                settings.value = {
                    ...DEFAULT_APP_SETTINGS,
                    ...imported
                };
                return true;
            }
        } catch (error) {
            console.error('Failed to import settings:', error);
        }
        return false;
    }

    // ==================== 監聽變更並自動儲存 ====================

    watch(settings, () => {
        saveSettings();
    }, { deep: true });

    // ==================== 返回狀態和方法 ====================

    return {
        // 狀態
        settings,
        voiceSettings,
        contentSettings,
        gameSettings,
        theme,
        locale,

        // 方法
        updateVoiceSettings,
        updateContentSettings,
        updateGameSettings,
        updateTheme,
        updateLocale,
        resetSettings,
        resetVoiceSettings,
        resetContentSettings,
        resetGameSettings,
        exportSettings,
        importSettings
    };
});
