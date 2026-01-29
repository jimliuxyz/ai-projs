<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useContentStore } from '~/stores/content.store';
import { useSettingsStore } from '~/stores/settings.store';
import { QuestionListGame } from '~/games/QuestionListGame';
import { UniversalAdapter } from '~/adapters/content-adapters';
import { useAudio } from '~/composables/useAudio';
import type { GameResult } from '~/types/game.types';

const { t } = useI18n();
const router = useRouter();
const contentStore = useContentStore();
const settingsStore = useSettingsStore();

const { speak, stopSpeaking, playAudio, playCorrect, playWrong } = useAudio();

const game = ref<QuestionListGame | null>(null);
const adapter = new UniversalAdapter();

const userAnswer = ref('');
const showResult = ref(false);
const gameResult = ref<GameResult | null>(null);
const currentQuestionIndex = ref(0);
const totalQuestions = ref(0);

const currentQuestion = computed(() => game.value?.getCurrentQuestion() || '');
const currentOptions = computed(() => game.value?.getCurrentOptions() || null);
const currentProgress = computed(() => {
  if (!game.value) return 0;
  return (currentQuestionIndex.value / totalQuestions.value) * 100;
});

onMounted(async () => {
  await initializeGame();
});

onUnmounted(() => {
  stopSpeaking();
});

async function initializeGame() {
  try {
    // 載入選中教材的完整內容（包含 items）
    const fullContents = await contentStore.loadSelectedContents();
    
    if (fullContents.length === 0) {
      alert(t('alerts.noData'));
      router.push('/');
      return;
    }

    // 轉換教材為遊戲資料
    const gameData = adapter.merge(
      fullContents,
      settingsStore.gameSettings
    );

    if (gameData.length === 0) {
      alert(t('alerts.noData'));
      router.push('/');
      return;
    }

    // 建立遊戲實例
    game.value = new QuestionListGame();
    
    // 設定遊戲設定
    game.value.settings = {
      ...settingsStore.gameSettings,
      autoPlay: true,
      showHints: true
    };

    // 設定事件監聽
    game.value.onProgress = (progress) => {
      currentQuestionIndex.value = game.value?.currentItemIndex || 0;
    };

    game.value.onComplete = (result) => {
      gameResult.value = result;
      showResult.value = true;
    };

    // 初始化並開始遊戲
    await game.value.init(gameData);
    totalQuestions.value = game.value.totalItems;
    game.value.start();
    
    // 朗讀第一題
    speakQuestion();
  } catch (error) {
    console.error('Failed to initialize game:', error);
    alert(t('alerts.failedToStart'));
    router.push('/');
  }
}

function speakQuestion() {
  if (currentQuestion.value) {
    speak(currentQuestion.value);
  }
}

function submitAnswer() {
  if (!game.value || !userAnswer.value.trim()) {
    return;
  }

  const isCorrect = game.value.submitAnswer(userAnswer.value.trim());
  
  // 播放音效
  if (isCorrect) {
    playCorrect();
  } else {
    playWrong();
  }
  
  userAnswer.value = '';
  
  // 延遲後朗讀下一題
  setTimeout(() => {
    if (!showResult.value) {
      speakQuestion();
    }
  }, 800);
}

function submitOption(option: string) {
  if (!game.value) return;
  
  const isCorrect = game.value.submitAnswer(option);
  
  // 播放音效
  if (isCorrect) {
    playCorrect();
  } else {
    playWrong();
  }
  
  // 延遲後朗讀下一題
  setTimeout(() => {
    if (!showResult.value) {
      speakQuestion();
    }
  }, 800);
}

function skipQuestion() {
  if (!game.value) return;
  game.value.skip();
  userAnswer.value = '';
  
  // 延遲後朗讀下一題
  setTimeout(() => {
    speakQuestion();
  }, 300);
}

function playCurrentAudio() {
  const audioUrl = game.value?.getCurrentAudioUrl();
  if (audioUrl) {
    playAudio(audioUrl);
  } else {
    // 如果沒有音檔，使用 TTS
    speakQuestion();
  }
}

function showHint() {
  const hint = game.value?.showHint();
  if (hint) {
    speak(hint);
    alert(`${t('game.hint')}: ${hint}`);
  } else {
    alert(t('alerts.noHint'));
  }
}

function exitGame() {
  stopSpeaking();
  if (game.value) {
    game.value.stop();
  }
  router.push('/');
}

function restartGame() {
  stopSpeaking();
  showResult.value = false;
  gameResult.value = null;
  userAnswer.value = '';
  currentQuestionIndex.value = 0;
  initializeGame();
}
</script>

<template>
  <div class="game-view">
    <!-- Game Header -->
    <div class="game-header">
      <button class="exit-btn" @click="exitGame">
        ← {{ $t('game.exit') }}
      </button>
      <div class="progress-info">
        <span class="question-counter">{{ currentQuestionIndex + 1 }} / {{ totalQuestions }}</span>
      </div>
      <div class="spacer"></div>
    </div>

    <!-- Progress Bar -->
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: currentProgress + '%' }"></div>
    </div>

    <!-- Game Content -->
    <div v-if="!showResult" class="game-content">
      <div class="question-card">
        <h2 class="question-text">{{ currentQuestion }}</h2>

        <!-- Image Display -->
        <div v-if="game?.getCurrentImageUrl()" class="question-image">
          <img :src="game.getCurrentImageUrl() ?? ''" alt="Question" />
        </div>

        <!-- Audio Button -->
        <button 
          class="audio-btn"
          @click="playCurrentAudio"
        >
          🔊 {{ $t('game.playAudio') }}
        </button>

        <!-- Options (for quiz) -->
        <div v-if="currentOptions" class="options-grid">
          <button
            v-for="(option, index) in currentOptions"
            :key="index"
            class="option-btn"
            @click="submitOption(option)"
          >
            {{ option }}
          </button>
        </div>

        <!-- Text Input (for vocabulary, etc.) -->
        <div v-else class="answer-input-section">
          <input
            v-model="userAnswer"
            type="text"
            class="answer-input"
            :placeholder="$t('game.typeAnswer')"
            @keyup.enter="submitAnswer"
            autofocus
          />
        </div>

        <!-- Action Buttons -->
        <div class="action-buttons">
          <button class="hint-btn" @click="showHint">
            💡 {{ $t('game.hint') }}
          </button>
          <button 
            v-if="!currentOptions"
            class="submit-btn" 
            @click="submitAnswer"
            :disabled="!userAnswer.trim()"
          >
            ✓ {{ $t('game.submit') }}
          </button>
          <button class="skip-btn" @click="skipQuestion">
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
            <div class="stat-value">{{ gameResult?.score }}</div>
            <div class="stat-label">{{ $t('result.score') }}</div>
          </div>

          <div class="stat-item">
            <div class="stat-icon">✅</div>
            <div class="stat-value">{{ gameResult?.correctAnswers }}</div>
            <div class="stat-label">{{ $t('result.correct') }}</div>
          </div>

          <div class="stat-item">
            <div class="stat-icon">📊</div>
            <div class="stat-value">{{ Math.round(gameResult?.accuracy || 0) }}%</div>
            <div class="stat-label">{{ $t('result.accuracy') }}</div>
          </div>

          <div class="stat-item">
            <div class="stat-icon">⏱️</div>
            <div class="stat-value">{{ Math.round(gameResult?.timeTaken || 0) }}s</div>
            <div class="stat-label">{{ $t('result.time') }}</div>
          </div>
        </div>

        <div class="result-actions">
          <button class="primary-btn" @click="restartGame">
            🔄 {{ $t('game.playAgain') }}
          </button>
          <button class="secondary-btn" @click="exitGame">
            🏠 {{ $t('game.backHome') }}
          </button>
        </div>
      </div>
    </div>
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
  box-shadow: 0 20px 60px rg ba(0,0,0,0.3);
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
