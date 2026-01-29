import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '~/views/HomeView.vue';
import QuestionListView from '~/views/QuestionListView.vue';

const router = createRouter({
    history: createWebHistory(),
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
        // 後續可以在此新增更多遊戲子路徑
        {
            path: '/:pathMatch(.*)*',
            redirect: '/'
        }
    ]
});

export default router;
