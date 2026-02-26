import { defineStore } from 'pinia';
import { GameState, GameDifficulty, type GameDataItem, type GameResult, type BaseGameInfo } from '~/types/game.types';
import { ContentFormat } from '~/types/content.types';
import { useContentStore } from '~/stores/content.store';
import { useSettingsStore } from '~/stores/settings.store';
import { useAudio } from '~/composables/useAudio';

export const ParkingGameInfo: BaseGameInfo = {
    id: 'parking-game',
    name: 'game.parkingGame.name',
    description: 'game.parkingGame.desc',
    icon: '🚗',
    supportedFormats: [
        ContentFormat.VOCABULARY,
        ContentFormat.QUIZ
    ]
};

export const useParkingGameStore = defineStore('parking-game', {
    state: () => ({
        state: GameState.IDLE,
        gameData: [] as GameDataItem[],
        currentIndex: 0,
        scores: { P1: 0, P2: 0 },
        error: null as string | null,
    }),

    getters: {
        gameSettings: () => useSettingsStore().gameSettings,
        totalItems: (state) => state.gameData.length,
    },

    actions: {
        async prepareAndStart() {
            const contentStore = useContentStore();
            this.state = GameState.LOADING;
            this.error = null;

            try {
                const data = await contentStore.prepareGameData(ParkingGameInfo);
                if (data.length === 0) throw new Error('No data available');

                this.gameData = data;
                this.currentIndex = 0;
                this.scores = { P1: 0, P2: 0 };
                this.state = GameState.READY;
                this.start();
            } catch (e: any) {
                this.state = GameState.ERROR;
                this.error = e.message;
            }
        },

        start() {
            if (this.state !== GameState.READY && this.state !== GameState.IDLE) return;
            this.state = GameState.PLAYING;
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
            }
        },

        exit() {
            this.state = GameState.IDLE;
            this.gameData = [];
            const { stopSpeaking } = useAudio();
            stopSpeaking();
        },

        updateScore(team: 'P1' | 'P2', score: number) {
            this.scores[team] = score;
        }
    }
});
