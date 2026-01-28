<script setup lang="ts">
import { ref } from 'vue';
import { settings } from '~/store/settings';

const subTab = ref<'white' | 'black'>('white');

const PRESETS = [
    '#ffffff', '#000000', '#71717a', '#3d2b1f', '#d2b48c', 
    '#e81123', '#ef4444', '#0164e8', '#3b82f6', '#107c10', 
    '#22c55e', '#facc15', '#ffaa00', '#8b5cf6', '#ec4899', '#06b6d4'
];

const getPieceSymbol = (type: string) => {
    const symbols: Record<string, string> = { 
        king: '♚', queen: '♛', rook: '♜', bishop: '♝', knight: '♞', pawn: '♟' 
    };
    return symbols[type];
};

// Helper for custom color check
const isCustom = (color: string) => !PRESETS.includes(color);

</script>

<template>
  <v-container class="pa-0">
    <!-- Side Selection -->
    <v-tabs v-model="subTab" grow density="compact" class="mb-6" color="primary">
        <v-tab value="white">
            <v-icon start icon="mdi-account-star"></v-icon>
            You (Bottom)
        </v-tab>
        <v-tab value="black">
            <v-icon start icon="mdi-account-outline"></v-icon>
            Opponent (Top)
        </v-tab>
    </v-tabs>

    <!-- Single Preview Area -->
    <v-card color="#0a0f1a" class="mb-6 rounded-xl border d-flex flex-column align-center justify-center py-6" variant="outlined" style="border-color: rgba(255,255,255,0.1) !important;">
        <div class="preview-label text-overline opacity-40 mb-2">Live Preview</div>
        <div class="preview-piece" :style="{ 
            color: subTab === 'white' ? settings.chessWhiteColor : settings.chessBlackColor, 
            '-webkit-text-stroke': subTab === 'white' 
                ? `0.2px ${settings.chessWhiteOutlineColor}` 
                : `0.2px ${settings.chessBlackOutlineColor}`,
            transform: subTab === 'black' ? 'rotate(180deg)' : 'none'
        }">
            {{ getPieceSymbol('king') }}
        </div>
        <div class="text-caption mt-2 font-weight-bold" :class="subTab === 'white' ? 'text-primary' : 'text-blue-grey-lighten-3'">
            {{ subTab === 'white' ? 'Your Pieces' : 'Opponent pieces' }}
        </div>
    </v-card>

    <!-- Color Groups -->
    <div class="color-settings-layout px-1">
        <!-- 1. Body Color -->
        <div class="setting-section mb-6">
            <div class="d-flex align-center mb-3">
                <v-icon size="small" color="primary" class="mr-2">mdi-format-color-fill</v-icon>
                <span class="text-subtitle-2 font-weight-bold">Piece Main Color</span>
                <v-spacer></v-spacer>
                <span class="text-caption opacity-60">{{ subTab === 'white' ? settings.chessWhiteColor : settings.chessBlackColor }}</span>
            </div>
            
            <div class="d-flex flex-wrap gap-2">
                <v-btn
                    v-for="c in PRESETS" :key="`body-${c}`"
                    icon size="x-small" variant="flat" :color="c" class="color-chip"
                    :style="(subTab === 'white' ? settings.chessWhiteColor : settings.chessBlackColor) === c ? 'outline: 2px solid white; outline-offset: 2px; z-index: 1' : ''"
                    @click="subTab === 'white' ? settings.chessWhiteColor = c : settings.chessBlackColor = c"
                ></v-btn>
                
                <v-menu :close-on-content-click="false" location="top center">
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" icon size="x-small" variant="outlined" class="color-chip border-dashed"
                            :color="isCustom(subTab === 'white' ? settings.chessWhiteColor : settings.chessBlackColor) ? (subTab === 'white' ? settings.chessWhiteColor : settings.chessBlackColor) : ''">
                            <v-icon size="16">mdi-palette</v-icon>
                        </v-btn>
                    </template>
                    <v-card theme="dark" class="pa-2">
                        <v-color-picker v-if="subTab === 'white'" v-model="settings.chessWhiteColor" mode="hex" hide-inputs show-swatches></v-color-picker>
                        <v-color-picker v-else v-model="settings.chessBlackColor" mode="hex" hide-inputs show-swatches></v-color-picker>
                    </v-card>
                </v-menu>
            </div>
        </div>

        <!-- 2. Outline Color -->
        <div class="setting-section mb-4">
            <div class="d-flex align-center mb-3">
                <v-icon size="small" color="secondary" class="mr-2">mdi-border-all-variant</v-icon>
                <span class="text-subtitle-2 font-weight-bold">Outline Color</span>
                <v-spacer></v-spacer>
                <span class="text-caption opacity-60">{{ subTab === 'white' ? settings.chessWhiteOutlineColor : settings.chessBlackOutlineColor }}</span>
            </div>
            
            <div class="d-flex flex-wrap gap-2">
                <v-btn
                    v-for="c in PRESETS" :key="`out-${c}`"
                    icon size="x-small" variant="flat" :color="c" class="color-chip"
                    :style="(subTab === 'white' ? settings.chessWhiteOutlineColor : settings.chessBlackOutlineColor) === c ? 'outline: 2px solid white; outline-offset: 2px; z-index: 1' : ''"
                    @click="subTab === 'white' ? settings.chessWhiteOutlineColor = c : settings.chessBlackOutlineColor = c"
                ></v-btn>

                <v-menu :close-on-content-click="false" location="top center">
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" icon size="x-small" variant="outlined" class="color-chip border-dashed"
                            :color="isCustom(subTab === 'white' ? settings.chessWhiteOutlineColor : settings.chessBlackOutlineColor) ? (subTab === 'white' ? settings.chessWhiteOutlineColor : settings.chessBlackOutlineColor) : ''">
                            <v-icon size="16">mdi-palette</v-icon>
                        </v-btn>
                    </template>
                    <v-card theme="dark" class="pa-2">
                        <v-color-picker v-if="subTab === 'white'" v-model="settings.chessWhiteOutlineColor" mode="hex" hide-inputs show-swatches></v-color-picker>
                        <v-color-picker v-else v-model="settings.chessBlackOutlineColor" mode="hex" hide-inputs show-swatches></v-color-picker>
                    </v-card>
                </v-menu>
            </div>
        </div>
    </div>
  </v-container>
</template>

<style scoped>
.gap-2 { gap: 8px; }
.preview-piece {
    font-size: 5rem;
    line-height: 1;
    filter: drop-shadow(0 8px 16px rgba(0,0,0,0.4));
    transition: all 0.3s ease;
}
.color-chip {
    transition: transform 0.2s;
}
.color-chip:hover {
    transform: scale(1.1);
}
.border-dashed {
    border-style: dashed !important;
}
.preview-label {
    letter-spacing: 2px;
}
</style>
