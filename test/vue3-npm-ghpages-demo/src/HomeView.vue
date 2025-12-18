<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" class="text-center" style="min-height:60vh;">
      <v-col cols="12" md="6">
        <v-list dense>
          <v-list-item v-for="l in links" :key="l" :to="{ name: 'Media', params: { param: l } }" link>
            <v-list-item-content>
              <v-list-item-title class="display-1" style="font-size:2.7rem; font-weight:500; text-align:center;">{{ l }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const links = ref<string[]>(['test'])
</script>

<style scoped>
.display-1 { font-weight: 500; text-align: center; display: block; }
</style>
