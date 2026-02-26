import { QuestionListInfo } from './question-list/QuestionListStore';
import { ParkingGameInfo } from './parking-game/ParkingGameStore';
import type { BaseGameInfo } from '~/types/game.types';

/**
 * 註冊所有遊戲
 */
export const ALL_GAMES: BaseGameInfo[] = [
    QuestionListInfo,
    ParkingGameInfo,
    // 以後新增的遊戲都在這裡註冊
    {
        id: 'story-match',
        name: 'Story Match',
        description: 'Find the pairs',
        icon: '🧩',
        supportedFormats: []
    },
    {
        id: 'word-fall',
        name: 'Word Fall',
        description: 'Type fast!',
        icon: '☄️',
        supportedFormats: []
    },
    {
        id: 'flash-cards',
        name: 'Flash Cards',
        description: 'Memory boost',
        icon: '🗂️',
        supportedFormats: []
    },
    {
        id: 'speed-read',
        name: 'Speed Read',
        description: 'Read quickly',
        icon: '⚡',
        supportedFormats: []
    }
];
