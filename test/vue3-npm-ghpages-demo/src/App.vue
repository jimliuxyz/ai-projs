<template>
  <v-app dark>
    <v-main class="d-flex align-center justify-center" style="min-height:100vh;">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts"></script>

<style scoped>
/* 根層樣式留空，交給各 view 控制 */
</style>
