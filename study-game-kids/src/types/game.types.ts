/**
 * 遊戲核心型別定義
 * 定義遊戲引擎和遊戲介面的標準
 */

import type { Content } from './content.types';

// ==================== 遊戲狀態 ====================
export enum GameState {
    IDLE = 'idle',         // 閒置
    LOADING = 'loading',   // 載入中
    READY = 'ready',       // 準備就緒
    PLAYING = 'playing',   // 遊玩中
    PAUSED = 'paused',     // 暫停
    FINISHED = 'finished', // 完成
    ERROR = 'error'        // 錯誤
}

// ==================== 遊戲難度 ====================
export enum GameDifficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}

// ==================== 遊戲資料格式 ====================
/**
 * 標準化的遊戲資料格式
 * 所有遊戲都應該使用這個格式接收資料
 */
export interface GameDataItem {
    id: string;              // 唯一識別碼
    question: string;        // 題目/問題
    answer: string;          // 答案
    options?: string[];      // 選項 (如果是選擇題)
    hint?: string;           // 提示
    audioUrl?: string;       // 音檔 URL
    imageUrl?: string;       // 圖片 URL
    metadata?: Record<string, unknown>; // 額外資料
}

// ==================== 遊戲結果 ====================
export interface GameResult {
    score: number;           // 分數
    totalQuestions: number;  // 總題數
    correctAnswers: number;  // 正確答案數
    accuracy: number;        // 準確率 (0-100)
    timeTaken: number;       // 花費時間 (秒)
    details?: GameResultDetail[]; // 詳細結果
}

export interface GameResultDetail {
    itemId: string;
    question: string;
    userAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
    timeTaken: number;       // 花費時間 (秒)
}

// ==================== 遊戲設定 ====================
export interface GameSettings {
    difficulty: GameDifficulty;
    timeLimit?: number;      // 時間限制 (秒)，undefined 表示無限制
    lives?: number;          // 生命數，undefined 表示無限
    soundEnabled: boolean;   // 是否啟用音效
    musicEnabled: boolean;   // 是否啟用背景音樂
    autoPlay: boolean;       // 是否自動播放音檔
    showHints: boolean;      // 是否顯示提示
}

// ==================== 遊戲介面定義 ====================
/**
 * 所有遊戲必須實作這個介面
 */
export interface IGame {
    // 遊戲基本資訊
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly icon: string;
    readonly supportedFormats: string[]; // 支援的教材格式

    // 遊戲狀態
    state: GameState;
    settings: GameSettings;

    // 遊戲方法
    init(data: GameDataItem[]): Promise<void>;
    start(): void;
    pause(): void;
    resume(): void;
    stop(): void;
    reset(): void;
    getResult(): GameResult | null;

    // 事件回調
    onStateChange?: (state: GameState) => void;
    onProgress?: (progress: number) => void;
    onComplete?: (result: GameResult) => void;
    onError?: (error: Error) => void;
}

// ==================== 遊戲適配器介面 ====================
/**
 * 將教材轉換為遊戲資料的適配器
 */
export interface IContentAdapter {
    /**
     * 檢查是否支援此教材格式
     */
    canAdapt(content: Content): boolean;

    /**
     * 將教材轉換為遊戲資料
     */
    adapt(content: Content, settings?: Partial<GameSettings>): GameDataItem[];

    /**
     * 合併多個教材
     */
    merge(contents: Content[], settings?: Partial<GameSettings>): GameDataItem[];
}

// ==================== 遊戲註冊資訊 ====================
export interface GameRegistration {
    game: IGame;
    adapter: IContentAdapter;
    metadata?: {
        version?: string;
        author?: string;
        tags?: string[];
    };
}
