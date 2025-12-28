<script setup lang="ts">
import { ref } from 'vue';
import ThreeCarPreview from './ThreeCarPreview.vue';
import { settings } from '../store/settings';

const props = defineProps<{
  team: 'P1' | 'P2';
  modelValue: boolean;
}>();

const emit = defineEmits(['update:modelValue']);

// Local color state, initialized from store
const color = ref(props.team === 'P1' ? (settings.p1Color || 0x0164e8) : (settings.p2Color || 0xe81123));

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

function save() {
    if (props.team === 'P1') settings.p1Color = color.value;
    else settings.p2Color = color.value;
    
    // Save to local storage triggers automatically via watcher in settings store 
    // but we might need to update existing game instance if possible (usually next round)
    
    close();
}

function close() {
    emit('update:modelValue', false);
}
</script>

<template>
  <div v-if="modelValue" class="modal-overlay" @click.self="close">
    <div class="modal">
      <div class="modal-header">
        <h3>Customize {{ team }} Car</h3>
        <button class="close-btn" @click="close">×</button>
      </div>

      <div class="preview-area">
        <ThreeCarPreview :color="color" />
        <div class="drag-hint">Drag to Rotate</div>
      </div>

      <div class="color-picker">
        <div 
          v-for="c in PRESETS" 
          :key="c"
          class="color-dot"
          :style="{ backgroundColor: '#' + c.toString(16).padStart(6, '0') }"
          :class="{ active: color === c }"
          @click="color = c"
        ></div>
      </div>

      <div class="actions">
        <button class="btn-cancel" @click="close">Cancel</button>
        <button class="btn-save" @click="save">Save</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
    position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 2000;
    display: flex; align-items: center; justify-content: center;
}
.modal {
    background: #1a1a1a; width: 90%; max-width: 500px;
    border-radius: 16px; border: 1px solid #333; padding: 20px;
    color: white;
}
.modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.close-btn { background: none; border: none; font-size: 24px; color: #888; cursor: pointer; }
.actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px; }
.btn-save { background: #0078d7; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; }
.btn-cancel { background: #333; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; }

.color-picker { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-top: 20px; }
.color-dot {
    width: 30px; height: 30px; border-radius: 50%; cursor: pointer;
    border: 2px solid transparent; transition: transform 0.2s;
}
.color-dot:hover { transform: scale(1.1); }
.color-dot.active { border-color: white; transform: scale(1.2); box-shadow: 0 0 10px white; }

.drag-hint { text-align: center; color: #666; font-size: 12px; margin-top: 5px; }
</style>
