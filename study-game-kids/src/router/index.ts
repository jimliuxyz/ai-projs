import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '~/views/HomeView.vue';
import QuestionListView from '~/games/question-list/QuestionListView.vue';
import ParkingGameView from '~/games/parking-game/ParkingGameView.vue';

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/game/question-list',
            name: 'question-list',
            component: QuestionListView
        },
        {
            path: '/game/parking-game',
            name: 'parking-game',
            component: ParkingGameView
        },
        // 後續可以在此新增更多遊戲子路徑
        {
            path: '/:pathMatch(.*)*',
            redirect: '/'
        }
    ]
});

export default router;
