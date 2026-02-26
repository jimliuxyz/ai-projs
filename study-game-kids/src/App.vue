<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useContentStore } from '~/stores/content.store';
import { useSettingsStore } from '~/stores/settings.store';

const i18n = useI18n();
const contentStore = useContentStore();
const settingsStore = useSettingsStore();

// 同步 i18n 語言與 store
watch(() => settingsStore.locale, (newLocale) => {
  i18n.locale.value = newLocale;
}, { immediate: true });

// 同步主題設定至 body class
watch(() => settingsStore.theme, (newTheme) => {
  const isDark = newTheme === 'dark' || (newTheme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.body.classList.toggle('theme-light', !isDark);
}, { immediate: true });

// 全域初始化教材系統
onMounted(async () => {
  await contentStore.initializeContents();
});
</script>

<template>
  <v-app>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </v-app>
</template>

<style>
/* 移除冗餘樣式，已移至 style.css */
</style>
