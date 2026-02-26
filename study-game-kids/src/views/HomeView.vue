<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useContentStore } from '~/stores/content.store';
import { useSettingsStore } from '~/stores/settings.store';
import { ALL_GAMES } from '~/games';
import SettingsDialog from '~/components/SettingsDialog.vue';

const { t } = useI18n();
const contentStore = useContentStore();
const settingsStore = useSettingsStore();
const router = useRouter();

const showSettings = ref(false);

const languages = [
  { code: 'zh-TW', name: '繁體中文', flag: 'https://flagcdn.com/w80/tw.png' },
  { code: 'en', name: 'English', flag: 'https://flagcdn.com/w80/us.png' }
];

const currentLanguage = computed(() => {
  return languages.find(l => l.code === settingsStore.locale) || languages[0];
});

function changeLanguage(code: string) {
  settingsStore.updateLocale(code);
}

const games = ALL_GAMES;

function startGame(gameId: string) {
  if (contentStore.selectedContents.length === 0) {
    alert(t('alerts.selectContent'));
    showSettings.value = true;
    return;
  }
  router.push(`/game/${gameId}`);
}
</script>

<template>
  <div class="home-container">
    <!-- Top Action Bar -->
    <div class="top-bar">
      <!-- Language Dropdown -->
      <v-menu location="bottom end" transition="slide-y-transition">
        <template v-slot:activator="{ props }">
          <button v-bind="props" class="lang-btn">
            <div class="flag-circle">
              <img :src="currentLanguage.flag" :alt="currentLanguage.name" />
            </div>
            <v-icon color="white" size="small">mdi-chevron-down</v-icon>
          </button>
        </template>
        
        <v-list class="lang-list">
          <v-list-item
            v-for="lang in languages"
            :key="lang.code"
            @click="changeLanguage(lang.code)"
            :class="{ active: settingsStore.locale === lang.code }"
          >
            <template v-slot:prepend>
              <div class="flag-circle-small mr-3">
                <img :src="lang.flag" :alt="lang.name" />
              </div>
            </template>
            <v-list-item-title class="lang-text">
              {{ lang.name }}
              <span class="lang-native">({{ lang.code === 'en' ? 'English' : 'Traditional Chinese' }})</span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- Settings Button -->
      <button class="settings-mini-btn" @click="showSettings = true" :title="$t('home.settings')">
        <v-icon color="white">mdi-cog</v-icon>
      </button>
    </div>

    <div class="header-section">
      <h1 class="app-title">{{ $t('app.title') }}</h1>
    </div>

    <div class="games-section">
      <div class="games-grid">
        <div 
          v-for="game in games" 
          :key="game.id" 
          class="game-card"
          @click="startGame(game.id)"
        >
          <div class="game-icon">{{ game.icon }}</div>
          <h3 class="game-name">{{ $t(game.name) }}</h3>
          <p class="game-desc">{{ $t(game.description) }}</p>
        </div>
      </div>
    </div>

    <!-- Settings Dialog -->
    <SettingsDialog v-model="showSettings" />
  </div>
</template>

<style scoped>
.home-container {
  min-height: 100vh;
  padding: 60px 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.top-bar {
  position: absolute;
  top: 30px;
  right: 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 100;
}

.lang-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px 8px 8px;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 50px;
  color: var(--text-primary);
}

.lang-btn:hover {
  background: var(--glass-border);
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.flag-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.flag-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.settings-mini-btn {
  width: 52px;
  height: 52px;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
}

.settings-mini-btn:hover {
  background: var(--glass-border);
  transform: rotate(45deg) scale(1.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.lang-list {
  background: var(--card-bg) !important;
  backdrop-filter: blur(24px) !important;
  border-radius: var(--radius-md) !important;
  border: 1px solid var(--card-border);
  padding: 12px !important;
}

.lang-text {
  color: var(--text-primary) !important;
  font-weight: 600;
  font-size: var(--font-size-base);
}

.lang-native {
  font-size: 0.9rem;
  opacity: 0.6;
  margin-left: 8px;
  font-weight: 400;
}

.header-section {
  text-align: center;
  max-width: 900px;
  margin-top: 80px;
  margin-bottom: 60px;
}

.app-title {
  font-size: var(--font-size-xxl);
  color: var(--text-primary);
  text-shadow: 0 10px 30px rgba(0,0,0,0.3);
  margin-bottom: 20px;
}

.games-section {
  max-width: 1300px;
  width: 100%;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 32px;
  justify-content: center;
}

.game-card {
  padding: 48px 32px;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.game-card:hover {
  transform: translateY(-12px) scale(1.02);
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--accent-primary);
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}

.game-icon {
  font-size: 5rem;
  margin-bottom: 24px;
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.2));
}

.game-name {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
  line-height: 1.1;
}

.game-desc {
  color: var(--text-secondary);
  font-size: var(--font-size-base);
  line-height: 1.4;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .home-container {
    padding: 100px 1.5rem 40px;
  }
  
  .top-bar {
    top: 20px;
    right: 20px;
    left: 20px;
    justify-content: space-between;
  }

  .header-section {
    margin-top: 40px;
  }

  .games-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .game-card {
    padding: 40px 24px;
  }

  .game-icon {
    font-size: 4.5rem;
  }
}
</style>
