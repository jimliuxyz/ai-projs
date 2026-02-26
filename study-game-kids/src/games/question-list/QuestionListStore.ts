import { defineStore } from 'pinia';
import type {
    GameDataItem,
    GameResult,
    GameResultDetail,
    BaseGameInfo,
    GameSettings
} from '~/types/game.types';
import { GameState, GameDifficulty } from '~/types/game.types';
import { useAudio } from '~/composables/useAudio';
import { useContentStore } from '~/stores/content.store';
import { useSettingsStore } from '~/stores/settings.store';

import { ContentFormat } from '~/types/content.types';

/**
 * QuestionList 遊戲資訊
 */
export const QuestionListInfo: BaseGameInfo = {
    id: 'question-list',
    name: 'game.questionList.name',
    description: 'game.questionList.desc',
    icon: '📝',
    supportedFormats: [
        ContentFormat.VOCABULARY,
        ContentFormat.LYRICS,
        ContentFormat.STORY,
        ContentFormat.QUIZ
    ]
};

/**
 * QuestionListStore - 遊戲引擎
 */
export const useQuestionListStore = defineStore('game-question-list', {
    state: () => ({
        state: GameState.IDLE,
        data: [] as GameDataItem[],
        currentIndex: 0,
        results: [] as GameResultDetail[],
        startTime: 0,
        itemStartTime: 0,

        currentAnswer: '',
        isLoading: false,
        error: null as string | null,
    }),

    getters: {
        // 直接讀取全域設定，確保永遠同步
        gameSettings: (): GameSettings => useSettingsStore().gameSettings,
        specificSettings: () => {
            const settingsStore = useSettingsStore();
            return settingsStore.gameSpecificSettings['question-list'] || {
                difficulty: GameDifficulty.MEDIUM,
                autoPlay: true,
                showHints: true
            };
        },

        currentItem(state): GameDataItem | null {
            return state.data[state.currentIndex] || null;
        },
        totalItems(state): number {
            return state.data.length;
        },
        progress(state): number {
            return state.data.length > 0 ? (state.currentIndex / state.data.length) * 100 : 0;
        },
        isPlaying(state): boolean {
            return state.state === GameState.PLAYING;
        },
        isFinished(state): boolean {
            return state.state === GameState.FINISHED;
        },
        question(state): string {
            return state.data[state.currentIndex]?.question || '';
        },
        options(state): string[] | null {
            return state.data[state.currentIndex]?.options || null;
        },
        imageUrl(state): string | null {
            return state.data[state.currentIndex]?.imageUrl || null;
        },
        audioUrl(state): string | null {
            return state.data[state.currentIndex]?.audioUrl || null;
        },
    },

    actions: {
        async prepareAndStart() {
            const contentStore = useContentStore();
            this.isLoading = true;
            this.error = null;

            try {
                const gameData = await contentStore.prepareGameData(QuestionListInfo);
                if (gameData.length === 0) throw new Error('No data available');

                this.data = gameData;
                this.currentIndex = 0;
                this.results = [];
                this.state = GameState.READY;
                this.start();
            } catch (err) {
                this.error = err instanceof Error ? err.message : 'Failed to start game';
                this.state = GameState.ERROR;
            } finally {
                this.isLoading = false;
            }
        },

        start() {
            if (this.state !== GameState.READY && this.state !== GameState.IDLE) return;
            this.startTime = Date.now();
            this.state = GameState.PLAYING;
            this.loadCurrentItem();
        },

        pause() {
            if (this.state === GameState.PLAYING) {
                this.state = GameState.PAUSED;
                const { stopSpeaking } = useAudio();
                stopSpeaking();
            }
        },

        resume() {
            if (this.state === GameState.PAUSED) {
                this.state = GameState.PLAYING;
                // 恢復時如果當前題目還沒加載（或被暫停中斷），重新觸發加載邏輯
                if (this.currentAnswer === '') {
                    this.loadCurrentItem();
                }
            }
        },

        loadCurrentItem() {
            if (this.state === GameState.PAUSED) return;
            this.itemStartTime = Date.now();
            this.currentAnswer = '';

            // 直接讀取遊戲特定設定判斷是否自動播放
            if (this.specificSettings.autoPlay) {
                this.playAudio();
            }
        },

        submitAnswer(answer: string) {
            if (this.state !== GameState.PLAYING || !this.currentItem) return false;

            const { playCorrect, playWrong } = useAudio();
            const timeTaken = (Date.now() - this.itemStartTime) / 1000;
            const isCorrect = answer.toLowerCase().trim() === this.currentItem.answer.toLowerCase().trim();

            this.results.push({
                itemId: this.currentItem.id,
                question: this.currentItem.question,
                userAnswer: answer,
                correctAnswer: this.currentItem.answer,
                isCorrect,
                timeTaken
            });

            isCorrect ? playCorrect() : playWrong();

            if (this.currentIndex < this.data.length - 1) {
                this.currentIndex++;
                setTimeout(() => this.loadCurrentItem(), 800);
            } else {
                this.state = GameState.FINISHED;
            }

            return isCorrect;
        },

        skip() {
            if (this.state !== GameState.PLAYING || !this.currentItem) return;

            this.results.push({
                itemId: this.currentItem.id,
                question: this.currentItem.question,
                userAnswer: '(skipped)',
                correctAnswer: this.currentItem.answer,
                isCorrect: false,
                timeTaken: (Date.now() - this.itemStartTime) / 1000
            });

            if (this.currentIndex < this.data.length - 1) {
                this.currentIndex++;
                this.loadCurrentItem();
            } else {
                this.state = GameState.FINISHED;
            }
        },

        playAudio() {
            const { speak, playAudio } = useAudio();
            if (this.audioUrl) {
                playAudio(this.audioUrl);
            } else if (this.question) {
                speak(this.question);
            }
        },

        showHint(): string | null {
            const { speak } = useAudio();
            const hint = this.currentItem?.hint || null;
            if (hint) speak(hint);
            return hint;
        },

        getResult(): GameResult | null {
            if (this.results.length === 0) return null;

            const correctAnswers = this.results.filter(r => r.isCorrect).length;
            const totalQuestions = this.results.length;
            const timeTaken = (Date.now() - this.startTime) / 1000;

            const base = (correctAnswers / totalQuestions) * 1000;
            const difficultyMultiplier = {
                [GameDifficulty.EASY]: 1.0,
                [GameDifficulty.MEDIUM]: 1.5,
                [GameDifficulty.HARD]: 2.0
            }[this.specificSettings.difficulty as GameDifficulty];

            return {
                score: Math.round(base * difficultyMultiplier + Math.max(0, 100 - timeTaken)),
                totalQuestions,
                correctAnswers,
                accuracy: (correctAnswers / totalQuestions) * 100,
                timeTaken,
                details: [...this.results]
            };
        },

        exit() {
            const { stopSpeaking } = useAudio();
            stopSpeaking();
            this.state = GameState.IDLE;
            this.data = [];
            this.results = [];
        }
    }
});
