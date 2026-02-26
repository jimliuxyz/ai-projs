<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useQuestionListStore } from './QuestionListStore';
import { useSettingsStore } from '~/stores/settings.store';
import SettingsDialog from '~/components/SettingsDialog.vue';

const { t } = useI18n();
const router = useRouter();
const gameStore = useQuestionListStore();
const settingsStore = useSettingsStore();

const showSettings = ref(false);

const updateSpecificSetting = (key: string, value: any) => {
  settingsStore.updateGameSpecificSettings('question-list', { [key]: value });
};

// 切換設定時暫停/恢復遊戲
watch(showSettings, (val) => {
  if (val) {
    gameStore.pause();
  } else {
    gameStore.resume();
  }
});

onMounted(async () => {
  await gameStore.prepareAndStart();
  // 如果發生初始化錯誤，導回首頁
  if (gameStore.error) {
    alert(t('alerts.failedToStart') + ': ' + gameStore.error);
    router.push('/');
  }
});

onUnmounted(() => {
  gameStore.exit();
});

function handleExit() {
  gameStore.exit();
  router.push('/');
}

function handleHint() {
  const hint = gameStore.showHint();
  if (hint) {
    alert(`${t('game.hint')}: ${hint}`);
  } else {
    alert(t('alerts.noHint'));
  }
}
</script>

<template>
  <div class="game-view">
    <!-- Game Header -->
    <div class="game-header">
      <button class="exit-btn" @click="handleExit">
        ← {{ $t('game.exit') }}
      </button>
      <div class="progress-info">
        <span class="question-counter">{{ gameStore.currentIndex + 1 }} / {{ gameStore.totalItems }}</span>
      </div>
      <div class="spacer">
        <button class="settings-mini-btn" @click="showSettings = true">
          ⚙️
        </button>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: gameStore.progress + '%' }"></div>
    </div>

    <!-- Game Content -->
    <div v-if="!gameStore.isFinished" class="game-content">
      <div class="question-card">
        <h2 class="question-text">{{ gameStore.question }}</h2>

        <!-- Image Display -->
        <div v-if="gameStore.imageUrl" class="question-image">
          <img :src="gameStore.imageUrl" alt="Question" />
        </div>

        <!-- Audio Button -->
        <button 
          class="audio-btn"
          @click="gameStore.playAudio()"
        >
          🔊 {{ $t('game.playAudio') }}
        </button>

        <!-- Options (for quiz) -->
        <div v-if="gameStore.options" class="options-grid">
          <button
            v-for="(option, index) in gameStore.options"
            :key="index"
            class="option-btn"
            @click="gameStore.submitAnswer(option)"
          >
            {{ option }}
          </button>
        </div>

        <!-- Text Input (for vocabulary, etc.) -->
        <div v-else class="answer-input-section">
          <input
            v-model="gameStore.currentAnswer"
            type="text"
            class="answer-input"
            :placeholder="$t('game.typeAnswer')"
            @keyup.enter="gameStore.submitAnswer(gameStore.currentAnswer)"
            autofocus
          />
        </div>

        <!-- Action Buttons -->
        <div class="action-buttons">
          <button 
            v-if="gameStore.specificSettings.showHints"
            class="hint-btn" 
            @click="handleHint"
          >
            💡 {{ $t('game.hint') }}
          </button>
          <button 
            v-if="!gameStore.options"
            class="submit-btn" 
            @click="gameStore.submitAnswer(gameStore.currentAnswer)"
            :disabled="!gameStore.currentAnswer?.trim()"
          >
            ✓ {{ $t('game.submit') }}
          </button>
          <button class="skip-btn" @click="gameStore.skip()">
            ⏭️ {{ $t('game.skip') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Result Screen -->
    <div v-else class="result-screen">
      <div class="result-card">
        <h2 class="result-title">🎉 {{ $t('game.gameComplete') }}</h2>
        
        <div class="result-stats">
          <div class="stat-item">
            <div class="stat-icon">🏆</div>
            <div class="stat-value">{{ gameStore.getResult()?.score }}</div>
            <div class="stat-label">{{ $t('result.score') }}</div>
          </div>

          <div class="stat-item">
            <div class="stat-icon">✅</div>
            <div class="stat-value">{{ gameStore.getResult()?.correctAnswers }}</div>
            <div class="stat-label">{{ $t('result.correct') }}</div>
          </div>

          <div class="stat-item">
            <div class="stat-icon">📊</div>
            <div class="stat-value">{{ Math.round(gameStore.getResult()?.accuracy || 0) }}%</div>
            <div class="stat-label">{{ $t('result.accuracy') }}</div>
          </div>

          <div class="stat-item">
            <div class="stat-icon">⏱️</div>
            <div class="stat-value">{{ Math.round(gameStore.getResult()?.timeTaken || 0) }}s</div>
            <div class="stat-label">{{ $t('result.time') }}</div>
          </div>
        </div>

        <div class="result-actions">
          <button class="primary-btn" @click="gameStore.prepareAndStart()">
            🔄 {{ $t('game.playAgain') }}
          </button>
          <button class="secondary-btn" @click="handleExit">
            🏠 {{ $t('game.backHome') }}
          </button>
        </div>
      </div>
    </div>
    <!-- Settings Dialog -->
    <SettingsDialog 
      v-model="showSettings" 
      initial-tab="extra"
      :extra-tab-title="$t('game.questionList.settings', 'Game Settings')"
      extra-tab-icon="mdi-cog"
    >
      <template #game-settings>
        <div class="specific-settings">
          <h3 class="text-h6 mb-4 d-flex align-center">
            <v-icon start color="primary">mdi-tune</v-icon>
            {{ $t('game.questionList.specificSettings', 'Specific Settings') }}
          </h3>
          
          <div class="settings-group mb-4">
            <label class="d-block mb-2 font-weight-bold">{{ $t('game.questionList.difficulty', 'Difficulty') }}</label>
            <v-btn-toggle
              :model-value="gameStore.specificSettings.difficulty"
              @update:model-value="updateSpecificSetting('difficulty', $event)"
              color="primary"
              variant="outlined"
              divided
              mandatory
              density="comfortable"
            >
              <v-btn :value="'easy'">
                😊 {{ $t('game.questionList.easy', 'Easy') }}
              </v-btn>
              <v-btn :value="'medium'">
                🤔 {{ $t('game.questionList.medium', 'Medium') }}
              </v-btn>
              <v-btn :value="'hard'">
                😤 {{ $t('game.questionList.hard', 'Hard') }}
              </v-btn>
            </v-btn-toggle>
          </div>
          
          <v-switch
            :model-value="gameStore.specificSettings.autoPlay"
            @update:model-value="updateSpecificSetting('autoPlay', !!$event)"
            :label="$t('game.questionList.autoPlay', 'Auto Play Audio')"
            color="primary"
            hide-details
            class="mb-2"
          ></v-switch>

          <v-switch
            :model-value="gameStore.specificSettings.showHints"
            @update:model-value="updateSpecificSetting('showHints', !!$event)"
            :label="$t('game.questionList.showHints', 'Show Hints Button')"
            color="primary"
            hide-details
          ></v-switch>
        </div>
      </template>
    </SettingsDialog>
  </div>
</template>

<style scoped>
.game-view {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
}

.game-header {
  display: flex;
  align-items: center;
  padding: 20px;
  color: white;
}

.exit-btn {
  background: rgba(255,255,255,0.2);
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s;
}

.exit-btn:hover {
  background: rgba(255,255,255,0.3);
}

.progress-info {
  flex: 1;
  text-align: center;
}

.question-counter {
  font-size: 1.2rem;
  font-weight: 600;
}

.spacer {
  width: 100px;
  display: flex;
  justify-content: flex-end;
}

.settings-mini-btn {
  background: rgba(255,255,255,0.2);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.2s;
}

.settings-mini-btn:hover {
  background: rgba(255,255,255,0.3);
  transform: rotate(30deg);
}

.progress-bar {
  height: 6px;
  background: rgba(255,255,255,0.3);
  margin: 0 20px;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  transition: width 0.3s ease;
}

.game-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.question-card {
  background: white;
  border-radius: 30px;
  padding: 50px;
  max-width: 700px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  animation: fadeIn 0.5s;
}

.question-text {
  font-size: 2rem;
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.question-image {
  text-align: center;
  margin-bottom: 30px;
}

.question-image img {
  max-width: 100%;
  max-height: 300px;
  border-radius: 15px;
}

.audio-btn {
  display: block;
  margin: 0 auto 30px;
  padding: 12px 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.2s;
}

.audio-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 30px;
}

.option-btn {
  padding: 20px;
  background: #f8f9fa;
  border: 2px solid #e0e0e0;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.2s;
}

.option-btn:hover {
  background: #667eea;
  color: white;
  border-color: #667eea;
  transform: translateY(-2px);
}

.answer-input-section {
  margin-bottom: 30px;
}

.answer-input {
  width: 100%;
  padding: 18px;
  font-size: 1.3rem;
  border: 2px solid #e0e0e0;
  border-radius: 15px;
  font-family: 'Fredoka', sans-serif;
  transition: all 0.2s;
}

.answer-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.action-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.hint-btn,
.submit-btn,
.skip-btn {
  padding: 14px 28px;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 25px;
  transition: all 0.2s;
}

.hint-btn {
  background: #ffc107;
  color: #333;
}

.submit-btn {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.skip-btn {
  background: #e0e0e0;
  color: #666;
}

.hint-btn:hover,
.submit-btn:not(:disabled):hover,
.skip-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.result-screen {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.result-card {
  background: white;
  border-radius: 30px;
  padding: 50px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  text-align: center;
}

.result-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
}

.result-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.stat-item {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 15px;
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.stat-value {
  font-size: 2rem;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
}

.result-actions {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.primary-btn,
.secondary-btn {
  padding: 16px 32px;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 25px;
  transition: all 0.2s;
}

.primary-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.secondary-btn {
  background: #e0e0e0;
  color: #666;
}

.primary-btn:hover,
.secondary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .question-card {
    padding: 30px 20px;
  }

  .question-text {
    font-size: 1.5rem;
  }

  .result-card {
    padding: 30px 20px;
  }
}
</style>
