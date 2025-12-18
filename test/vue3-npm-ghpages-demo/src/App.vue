<template>
  <div class="app">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <input v-model="message" placeholder="修改訊息" />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const title = 'Vue 3 + Vite Demo'
    const message = ref('這是一個最小的 Vue 3 + Vite 專案。')
    return { title, message }
  }
}
</script>

<style scoped>
.app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif;
  padding: 2rem;
}
input {
  padding: 0.5rem;
  font-size: 1rem;
  margin-top: 1rem;
}
</style>
