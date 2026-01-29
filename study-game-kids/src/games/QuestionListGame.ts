/**
 * 題目清單遊戲
 * 簡單的題目列表展示，用於測試和初期開發
 */

import { BaseGame } from '~/game-core/BaseGame';

export class QuestionListGame extends BaseGame {
    readonly id = 'question-list';
    readonly name = 'Question List';
    readonly description = 'A simple list of questions';
    readonly icon = '📝';
    readonly supportedFormats = ['vocabulary', 'lyrics', 'story', 'quiz'];

    // ==================== 遊戲特定狀態 ====================
    private itemStartTime: number = 0;
    private currentAnswer: string = '';

    // ==================== 覆寫生命週期方法 ====================

    protected override async onInit(): Promise<void> {
        console.log('QuestionListGame initialized with', this.data.length, 'items');
    }

    protected override onStart(): void {
        this.loadCurrentItem();
    }

    protected override onReset(): void {
        this.currentAnswer = '';
        this.itemStartTime = 0;
    }

    // ==================== 遊戲邏輯 ====================

    private loadCurrentItem(): void {
        const item = this.currentItem;
        if (!item) {
            this.stop();
            return;
        }

        this.itemStartTime = Date.now();
        this.currentAnswer = '';

        // 如果啟用自動播放音訊
        if (this.settings.autoPlay && item.audioUrl) {
            this.playAudio(item.audioUrl);
        }
    }

    /**
     * 提交當前題目的答案
     */
    submitAnswer(userAnswer: string): boolean {
        if (this.state !== 'playing') {
            console.warn('Cannot submit answer when game is not playing');
            return false;
        }

        const item = this.currentItem;
        if (!item) {
            return false;
        }

        const timeTaken = (Date.now() - this.itemStartTime) / 1000;
        const isCorrect = this.checkAnswer(userAnswer, item.answer);

        this.recordResult(
            item.id,
            item.question,
            userAnswer,
            item.answer,
            isCorrect,
            timeTaken
        );

        // 如果還有下一題，繼續
        if (this.hasNext) {
            this.nextItem();
            this.loadCurrentItem();
        } else {
            // 沒有下一題了，結束遊戲
            this.stop();
        }

        return isCorrect;
    }

    /**
     * 跳過當前題目
     */
    skip(): void {
        if (this.state !== 'playing') {
            return;
        }

        const item = this.currentItem;
        if (!item) {
            return;
        }

        const timeTaken = (Date.now() - this.itemStartTime) / 1000;

        this.recordResult(
            item.id,
            item.question,
            '(skipped)',
            item.answer,
            false,
            timeTaken
        );

        if (this.hasNext) {
            this.nextItem();
            this.loadCurrentItem();
        } else {
            this.stop();
        }
    }

    /**
     * 顯示提示
     */
    showHint(): string | null {
        if (!this.settings.showHints) {
            return null;
        }

        const item = this.currentItem;
        return item?.hint || null;
    }

    /**
     * 播放音訊
     */
    playAudio(url: string): void {
        if (!this.settings.soundEnabled) {
            return;
        }

        try {
            const audio = new Audio(url);
            audio.volume = 1.0;
            audio.play().catch(error => {
                console.warn('Failed to play audio:', error);
            });
        } catch (error) {
            console.warn('Audio playback error:', error);
        }
    }

    /**
     * 檢查答案是否正確
     */
    private checkAnswer(userAnswer: string, correctAnswer: string): boolean {
        const normalize = (str: string) => str.toLowerCase().trim();
        return normalize(userAnswer) === normalize(correctAnswer);
    }

    // ==================== 公開訪問器 ====================

    get totalItems(): number {
        return this.data.length;
    }

    get currentItemIndex(): number {
        return this.currentIndex;
    }

    get progress(): number {
        return this.data.length > 0 ? (this.currentIndex / this.data.length) * 100 : 0;
    }

    getCurrentQuestion(): string {
        return this.currentItem?.question || '';
    }

    getCurrentOptions(): string[] | null {
        return this.currentItem?.options || null;
    }

    getCurrentImageUrl(): string | null {
        return this.currentItem?.imageUrl || null;
    }

    getCurrentAudioUrl(): string | null {
        return this.currentItem?.audioUrl || null;
    }
}
