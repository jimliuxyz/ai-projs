<script setup lang="ts">
import { useStoryContent } from './useStoryContent';

const { mode, isRandom, isLoop } = useStoryContent();
</script>

<template>
  <v-container class="pa-0">
    <v-card variant="tonal" class="mb-4 w-100" color="secondary">
        <v-card-item title="Mode Selection">
            <v-card-text class="mt-2">
                <v-btn-toggle
                    v-model="mode"
                    color="primary"
                    mandatory
                    rounded="xl"
                    class="mb-4 d-flex w-100"
                >
                    <v-btn value="lyrics" class="flex-grow-1">Story Mode</v-btn>
                    <v-btn value="vocabulary" class="flex-grow-1">Vocab Mode</v-btn>
                </v-btn-toggle>

                <div class="d-flex align-center justify-space-between mb-2">
                    <span class="text-body-1">Random Shuffle</span>
                    <v-switch
                        v-model="isRandom"
                        color="primary"
                        hide-details
                        inset
                    ></v-switch>
                </div>
                <div class="text-caption text-grey mb-4">Randomize the order of lines or words each time you start.</div>

                <div class="d-flex align-center justify-space-between mb-2">
                    <span class="text-body-1">Loop Mode</span>
                    <v-switch
                        v-model="isLoop"
                        color="primary"
                        hide-details
                        inset
                    ></v-switch>
                </div>
                <div class="text-caption text-grey">Automatically restart from the beginning when finished.</div>
            </v-card-text>
        </v-card-item>
    </v-card>
  </v-container>
</template>
