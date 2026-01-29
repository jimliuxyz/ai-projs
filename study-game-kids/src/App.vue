<script setup lang="ts">
import { onMounted } from 'vue';
import { useContentStore } from '~/stores/content.store';

const contentStore = useContentStore();

// 全域初始化教材系統
onMounted(async () => {
  try {
    await contentStore.initializeContents();
    console.log('Global content initialization complete');
  } catch (error) {
    console.error('Failed to initialize contents:', error);
  }
});
</script>

<template>
  <v-app>
    <!-- 路由視圖 -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </v-app>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<style scoped>
.home-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header-section {
  text-align: center;
  color: white;
  max-width: 800px;
  margin-bottom: 60px;
}

.app-title {
  font-size: 4rem;
  margin-bottom: 30px;
  text-shadow: 3px 3px 6px rgba(0,0,0,0.2);
}

.settings-btn {
  padding: 14px 32px;
  background: rgba(255,255,255,0.2);
  color: white;
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  backdrop-filter: blur(10px);
}

.settings-btn:hover {
  background: rgba(255,255,255,0.3);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
}

.games-section {
  max-width: 1000px;
  width: 100%;
}

.section-title {
  text-align: center;
  color: white;
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.game-card {
  background: white;
  border-radius: 25px;
  padding: 40px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.game-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.game-icon {
  font-size: 5rem;
  margin-bottom: 20px;
}

.game-name {
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
}

.game-desc {
  color: #666;
  font-size: 1.1rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .app-title {
    font-size: 2.5rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .games-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .game-card {
    padding: 30px;
  }

  .game-icon {
    font-size: 4rem;
  }

  .game-name {
    font-size: 1.5rem;
  }
}
</style>
