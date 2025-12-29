<script setup lang="ts">
import { ref, computed } from 'vue';
import ThreeCarPreview from './ThreeCarPreview.vue';
import { settings } from '../store/settings';

const props = defineProps<{
  team: 'P1' | 'P2';
}>();

const currentCar = computed(() => props.team === 'P1' ? settings.p1Car : settings.p2Car);
const subTab = ref<'body' | 'tires'>('body');

const activeColor = computed({
    get: () => currentCar.value[subTab.value],
    set: (val) => {
        currentCar.value[subTab.value] = val;
    }
});

const hexColor = computed({
    get: () => '#' + activeColor.value.toString(16).padStart(6, '0'),
    set: (val) => {
        activeColor.value = parseInt(val.replace('#', ''), 16);
    }
});

const PRESETS = [
    0xe81123, // Red
    0x0164e8, // Blue
    0x107c10, // Green
    0xffaa00, // Orange
    0x881798, // Purple
    0x00bcf2, // Cyan
    0xffffff, // White
    0x333333, // Dark Grey
    0xff00ff, // Pink
    0xffd700  // Gold
];

const isCustomColor = computed(() => !PRESETS.includes(activeColor.value));
</script>

<template>
  <v-container class="pa-0">
    <!-- Preview Area -->
    <v-card color="black" class="mb-4 rounded-lg overflow-hidden position-relative border" variant="outlined" style="border-color: rgba(255,255,255,0.1) !important;">
      <ThreeCarPreview :color="currentCar" />
      <div class="position-absolute bottom-0 w-100 text-center text-caption text-medium-emphasis pb-2 font-italic" style="pointer-events: none;">
        Drag to Rotate
      </div>
    </v-card>

    <v-tabs v-model="subTab" grow density="compact" class="mb-4" color="primary">
        <v-tab value="body">Body</v-tab>
        <v-tab value="tires">Tires</v-tab>
    </v-tabs>

    <!-- Color Selection -->
    <v-card variant="flat" color="transparent">
        <div class="d-flex flex-wrap gap-2 justify-center align-center">
            <v-btn
                v-for="c in PRESETS"
                :key="c"
                icon
                size="small"
                variant="flat"
                :color="'#' + c.toString(16).padStart(6, '0')"
                class="ma-1 border-sm"
                :style="activeColor === c ? 'border: 2px solid white !important; transform: scale(1.1)' : 'border-color: rgba(255,255,255,0.2) !important;'"
                @click="activeColor = c"
            >
            </v-btn>

            <!-- Custom Picker Button -->
            <v-menu :close-on-content-click="false" location="top center">
                <template v-slot:activator="{ props }">
                    <v-btn
                        v-bind="props"
                        icon
                        size="small"
                        variant="flat"
                        :color="isCustomColor ? hexColor : 'surface'"
                        class="ma-1 border-sm"
                        :style="isCustomColor ? 'border: 2px solid white !important; transform: scale(1.1)' : 'border-color: rgba(255,255,255,0.2) !important;'"
                    >
                        <v-icon :color="isCustomColor ? 'white' : 'primary'" size="20">mdi-palette</v-icon>
                    </v-btn>
                </template>
                <v-card class="pa-2">
                    <v-color-picker v-model="hexColor" mode="hex" hide-inputs></v-color-picker>
                </v-card>
            </v-menu>
        </div>
        
        <div class="text-center mt-4 text-overline text-medium-emphasis">
            {{ hexColor.toUpperCase() }}
        </div>
    </v-card>
  </v-container>
</template>

<style scoped>
.gap-2 { gap: 8px; }
.border-sm { border: 1px solid rgba(255,255,255,0.1); }
</style>
