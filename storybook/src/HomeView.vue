<script setup lang="ts">
import { computed, ref } from 'vue'
import { items } from 'virtual:content-list'

type ContentItem = { key: string; audio: string[]; video: string[]; image: string[] }
const contentMap = items as Record<string, ContentItem>

const bottomKeys = computed<string[]>(() => Object.keys(contentMap))
const topKeys = ref<string[]>([
  'Word-Tag'
])

</script>

<template>
  <div>
    <div v-for="(k, idx) in topKeys" :key="k" style="display:inline-flex; align-items:center;">
      <v-chip size="large" color="secondary">{{ k }}</v-chip>
    </div>

    <div style="display:flex; flex-wrap:wrap; gap:12px; justify-content:center; align-items:center; padding: 2rem;">
      <v-chip v-for="k in bottomKeys" size="large" :key="k" :to="{ name: 'Media', params: { param: k } }" clickable color="primary">
        {{ k }}
      </v-chip>
    </div>
  </div>
</template>
