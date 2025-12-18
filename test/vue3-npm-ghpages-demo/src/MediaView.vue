<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" class="text-center" style="min-height:60vh;">
      <v-col>
        <div class="audio-area" style="width:100%;">
          <audio ref="audioRef" :src="audioUrl" controls style="width:100%;" />
        </div>
        <div class="image-area" style="margin-top:1rem;">
          <img :src="imageUrl" alt="Demo Image" style="width:100%; display:block; margin:0 auto;" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{ param: string }>()
const param = props.param ?? 'test'
const imageUrl = `https://raw.githubusercontent.com/jimliuxyz/ai-projs/main/assets/${param}/image.png`
const audioUrl = `https://raw.githubusercontent.com/jimliuxyz/ai-projs/main/assets/${param}/audio.wav`
const audioRef = ref<HTMLAudioElement | null>(null)
</script>

<style scoped>
.image-area { text-align:center; }
.image-area img { max-width: 100%; height: auto; display: block; margin: 0 auto; }
</style>
