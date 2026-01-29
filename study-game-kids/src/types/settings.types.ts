/**
 * 應用設定型別定義
 */

import type { AgeGroup, ContentFormat, ContentTag } from './content.types';
import { GameDifficulty } from './game.types';

// ==================== 語音設定 ====================
export interface VoiceSettings {
    enabled: boolean;           // 是否啟用語音
    engine: 'browser' | 'custom'; // 語音引擎
    language: string;           // 語言代碼，例如: 'en-US', 'zh-TW'
    rate: number;               // 語速 (0.5 - 2.0)
    pitch: number;              // 音調 (0.5 - 2.0)
    volume: number;             // 音量 (0 - 1.0)
    voice?: string;             // 特定語音名稱
}

// ==================== 教材設定 ====================
export interface ContentSettings {
    filter: {
        ageGroups: AgeGroup[];    // 篩選年齡層
        formats: ContentFormat[]; // 篩選內容格式
        tags: ContentTag[];       // 篩選標籤
    };
    selectedContentIds: string[]; // 已選擇的教材 ID
    autoLoadNext: boolean;      // 是否自動載入下一個教材
    shuffleContent: boolean;    // 是否隨機排序教材
}

// ==================== 遊戲通用設定 ====================
export interface CommonGameSettings {
    difficulty: GameDifficulty;
    soundEnabled: boolean;
    musicEnabled: boolean;
    vibrationEnabled: boolean;  // 是否啟用震動 (行動裝置)
    fullscreen: boolean;        // 是否全螢幕
    showTimer: boolean;         // 是否顯示計時器
    showScore: boolean;         // 是否顯示分數
}

// ==================== 應用設定 ====================
export interface AppSettings {
    voice: VoiceSettings;
    content: ContentSettings;
    game: CommonGameSettings;
    theme: 'light' | 'dark' | 'auto'; // 主題
    locale: string;             // 介面語言
}

// ==================== 預設設定 ====================
export const DEFAULT_VOICE_SETTINGS: VoiceSettings = {
    enabled: true,
    engine: 'browser',
    language: 'en-US',
    rate: 1.0,
    pitch: 1.0,
    volume: 1.0
};

export const DEFAULT_CONTENT_SETTINGS: ContentSettings = {
    filter: {
        ageGroups: [],
        formats: [],
        tags: []
    },
    selectedContentIds: [],
    autoLoadNext: true,
    shuffleContent: false
};

export const DEFAULT_GAME_SETTINGS: CommonGameSettings = {
    difficulty: GameDifficulty.MEDIUM,
    soundEnabled: true,
    musicEnabled: true,
    vibrationEnabled: false,
    fullscreen: false,
    showTimer: true,
    showScore: true
};

export const DEFAULT_APP_SETTINGS: AppSettings = {
    voice: DEFAULT_VOICE_SETTINGS,
    content: DEFAULT_CONTENT_SETTINGS,
    game: DEFAULT_GAME_SETTINGS,
    theme: 'auto',
    locale: 'en-US'
};
