import { createApp } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import App from './App.vue'
import HomeView from './HomeView.vue'
import MediaView from './MediaView.vue'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: { defaultTheme: 'dark' }
})

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/media/:param', name: 'Media', component: MediaView, props: true }
]

const router = createRouter({ history: createWebHashHistory(), routes })

createApp(App).use(router).use(vuetify).mount('#app')
