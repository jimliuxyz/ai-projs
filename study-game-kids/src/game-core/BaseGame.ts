/**
 * 遊戲核心基礎類別
 * 提供遊戲的通用功能和狀態管理
 */

import {
    GameState,
    GameDifficulty
} from '~/types/game.types';
import type {
    IGame,
    GameSettings,
    GameDataItem,
    GameResult,
    GameResultDetail
} from '~/types/game.types';

export abstract class BaseGame implements IGame {
    // 遊戲基本資訊
    abstract readonly id: string;
    abstract readonly name: string;
    abstract readonly description: string;
    abstract readonly icon: string;
    abstract readonly supportedFormats: string[];

    // 遊戲狀態
    state: GameState = GameState.IDLE;
    settings: GameSettings = {
        difficulty: GameDifficulty.MEDIUM,
        soundEnabled: true,
        musicEnabled: true,
        autoPlay: true,
        showHints: true
    };

    // 遊戲資料
    protected data: GameDataItem[] = [];
    protected currentIndex: number = 0;
    protected startTime: number = 0;
    protected results: GameResultDetail[] = [];

    // 事件回調
    onStateChange?: (state: GameState) => void;
    onProgress?: (progress: number) => void;
    onComplete?: (result: GameResult) => void;
    onError?: (error: Error) => void;

    // ==================== 公開方法 ====================

    async init(data: GameDataItem[]): Promise<void> {
        if (data.length === 0) {
            throw new Error('No data provided to initialize game');
        }

        this.data = data;
        this.currentIndex = 0;
        this.results = [];
        this.updateState(GameState.LOADING);

        try {
            await this.onInit();
            this.updateState(GameState.READY);
        } catch (error) {
            this.handleError(error as Error);
        }
    }

    start(): void {
        if (this.state !== GameState.READY) {
            console.warn('Game is not ready to start');
            return;
        }

        this.startTime = Date.now();
        this.updateState(GameState.PLAYING);
        this.onStart();
    }

    pause(): void {
        if (this.state !== GameState.PLAYING) {
            return;
        }

        this.updateState(GameState.PAUSED);
        this.onPause();
    }

    resume(): void {
        if (this.state !== GameState.PAUSED) {
            return;
        }

        this.updateState(GameState.PLAYING);
        this.onResume();
    }

    stop(): void {
        this.updateState(GameState.FINISHED);
        this.onStop();

        const result = this.getResult();
        if (result && this.onComplete) {
            this.onComplete(result);
        }
    }

    reset(): void {
        this.currentIndex = 0;
        this.results = [];
        this.startTime = 0;
        this.updateState(GameState.READY);
        this.onReset();
    }

    getResult(): GameResult | null {
        if (this.results.length === 0) {
            return null;
        }

        const correctAnswers = this.results.filter(r => r.isCorrect).length;
        const totalQuestions = this.results.length;
        const accuracy = (correctAnswers / totalQuestions) * 100;
        const timeTaken = (Date.now() - this.startTime) / 1000;

        return {
            score: this.calculateScore(correctAnswers, totalQuestions, timeTaken),
            totalQuestions,
            correctAnswers,
            accuracy,
            timeTaken,
            details: this.results
        };
    }

    // ==================== 受保護方法 (子類別可覆寫) ====================

    protected onInit(): Promise<void> {
        // 子類別可以覆寫此方法進行初始化
        return Promise.resolve();
    }

    protected onStart(): void {
        // 子類別可以覆寫此方法
    }

    protected onPause(): void {
        // 子類別可以覆寫此方法
    }

    protected onResume(): void {
        // 子類別可以覆寫此方法
    }

    protected onStop(): void {
        // 子類別可以覆寫此方法
    }

    protected onReset(): void {
        // 子類別可以覆寫此方法
    }

    // ==================== 工具方法 ====================

    protected updateState(newState: GameState): void {
        this.state = newState;
        if (this.onStateChange) {
            this.onStateChange(newState);
        }
    }

    protected updateProgress(): void {
        if (this.onProgress && this.data.length > 0) {
            const progress = (this.currentIndex / this.data.length) * 100;
            this.onProgress(progress);
        }
    }

    protected recordResult(
        itemId: string,
        question: string,
        userAnswer: string,
        correctAnswer: string,
        isCorrect: boolean,
        timeTaken: number
    ): void {
        this.results.push({
            itemId,
            question,
            userAnswer,
            correctAnswer,
            isCorrect,
            timeTaken
        });

        this.updateProgress();
    }

    protected calculateScore(
        correctAnswers: number,
        totalQuestions: number,
        timeTaken: number
    ): number {
        const baseScore = (correctAnswers / totalQuestions) * 1000;

        // 根據難度調整分數
        const difficultyMultiplier = {
            easy: 1.0,
            medium: 1.5,
            hard: 2.0
        }[this.settings.difficulty];

        // 時間加成 (越快越高分)
        const timeBonus = Math.max(0, 100 - timeTaken);

        return Math.round(baseScore * difficultyMultiplier + timeBonus);
    }

    protected handleError(error: Error): void {
        console.error('Game error:', error);
        this.updateState(GameState.ERROR);
        if (this.onError) {
            this.onError(error);
        }
    }

    // ==================== 資料存取 ====================

    protected get currentItem(): GameDataItem | null {
        return this.data[this.currentIndex] || null;
    }

    protected get hasNext(): boolean {
        return this.currentIndex < this.data.length - 1;
    }

    protected get hasPrevious(): boolean {
        return this.currentIndex > 0;
    }

    protected nextItem(): GameDataItem | null {
        if (this.hasNext) {
            this.currentIndex++;
            return this.currentItem;
        }
        return null;
    }

    protected previousItem(): GameDataItem | null {
        if (this.hasPrevious) {
            this.currentIndex--;
            return this.currentItem;
        }
        return null;
    }
}
