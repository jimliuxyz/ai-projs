import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // 基於 GH Pages 的部署，使用相對路徑
  base: './',
})
