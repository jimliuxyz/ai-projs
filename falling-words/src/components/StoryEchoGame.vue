<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted, watch } from 'vue';
import { lyricsStore } from '../store/lyrics';
import { useAudio } from '../composables/useAudio';
import CommonSettingsDialog from './CommonSettingsDialog.vue';

const emit = defineEmits(['exit']);
const { speak, playCorrect } = useAudio();

const lines = computed(() => lyricsStore.currentLines.value);
const currentIndex = ref(0);
const currentLine = computed(() => lines.value[currentIndex.value] || { text: '', translation: '' });

const showSettings = ref(false);

// Watch for story changes to restart
watch(() => lyricsStore.state.currentLyricsName, () => {
    restart();
});

const isListening = ref(false);
const recognizedText = ref('');
const resultMessage = ref('');
const isAutoMode = ref(true);
const isFinished = ref(false);
const isSpeaking = ref(false); // Track TTS state
const isPaused = ref(false); // Manually stopped/paused state

const Recognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
let recognition: any = null;

const startListening = () => {
    if (!recognition || isSpeaking.value) return;
    if (isListening.value) return;

    recognizedText.value = '';
    resultMessage.value = '';
    try {
        recognition.start();
        // isListening will be set in onstart
    } catch (e) {
        console.warn('Recognition start failed:', e);
        isListening.value = false;
    }
};

// Watchdog Timer to ensure recognition never stays dead
let watchdogTimer: any = null;
const startWatchdog = () => {
    if (watchdogTimer) return;
    watchdogTimer = setInterval(() => {
        // If we should be listening but aren't, and not currently speaking/paused
        if (!isListening.value && !isSpeaking.value && isAutoMode.value && !isPaused.value) {
            console.log('Watchdog: Recognition inactive. Restarting...');
            startListening();
        }
    }, 5000);
};

if (Recognition) {
    recognition = new Recognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = () => {
        isListening.value = true;
    };

    recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
            .map((result: any) => result[0])
            .map(result => result.transcript)
            .join('');
        
        recognizedText.value = transcript;

        if (event.results[0].isFinal) {
            processResult(transcript);
        }
    };

    recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        isListening.value = false;
        
        // Immediate retry for common interruption errors
        if ((event.error === 'no-speech' || event.error === 'aborted') && isAutoMode.value && !isSpeaking.value && !isPaused.value) {
            setTimeout(() => {
                if (!isListening.value && !isSpeaking.value && !isPaused.value) startListening();
            }, 500);
        }
    };

    recognition.onend = () => {
        isListening.value = false;
    };
}

const normalizeText = (text: string) => {
    return text.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()?"']/g, "").replace(/\s{2,}/g, " ").trim();
};

const numMap: any = {
    'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
    'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10
};

const extractNumber = (text: string) => {
    const words = text.split(' ');
    for (const word of words) {
        if (!isNaN(parseInt(word))) return parseInt(word);
        if (numMap[word]) return numMap[word];
    }
    return 1;
};

const processResult = (transcript: string) => {
    const normalizedTranscript = normalizeText(transcript);
    
    // Command Processing
    if (normalizedTranscript === 'exit' || normalizedTranscript === 'quit' || normalizedTranscript === 'go home') {
        emit('exit');
        return;
    }
    
    if (normalizedTranscript.startsWith('next') || normalizedTranscript.startsWith('skip') || normalizedTranscript.includes('go next')) {
        const offset = extractNumber(normalizedTranscript);
        nextStep(offset);
        return;
    }
    if (normalizedTranscript.startsWith('previous') || normalizedTranscript.startsWith('back') || normalizedTranscript.startsWith('go back')) {
        const offset = extractNumber(normalizedTranscript);
        prevStep(offset);
        return;
    }
    if (normalizedTranscript === 'again' || normalizedTranscript === 'repeat' || normalizedTranscript === 'once more') {
        if (isFinished.value) {
            restart();
        } else {
            playCurrent();
        }
        return;
    }
    if (normalizedTranscript === 'stop' || normalizedTranscript === 'wait' || normalizedTranscript === 'pause') {
        isPaused.value = true;
        resultMessage.value = "Paused ⏸️";
        try { recognition.stop(); } catch(e) {}
        return;
    }

    const targetText = normalizeText(currentLine.value.text);
    const transcriptWords = normalizedTranscript.split(' ');
    const targetWords = targetText.split(' ');
    
    let matchCount = 0;
    targetWords.forEach(word => {
        if (transcriptWords.includes(word)) matchCount++;
    });

    const matchRatio = matchCount / targetWords.length;
    const isVeryShortMatch = targetWords.length <= 3 && (normalizedTranscript.includes(targetText) || (targetText.includes(normalizedTranscript) && normalizedTranscript.length > 3));

    if (matchRatio > 0.6 || isVeryShortMatch) {
        playCorrect();
        resultMessage.value = "Great job! 🌟";
        setTimeout(() => {
            nextStep();
        }, 1500);
    } else {
        resultMessage.value = "Almost there! Try again? 🤗";
        if (isAutoMode.value && !isSpeaking.value && !isPaused.value) {
            setTimeout(() => {
                if (!isListening.value && !isSpeaking.value && !isPaused.value) startListening();
            }, 2000);
        }
    }
};

const resume = () => {
    isPaused.value = false;
    resultMessage.value = "";
    startListening();
};

const playCurrent = () => {
    if (isListening.value) {
        try { recognition.stop(); } catch(e) {}
    }
    isSpeaking.value = true;
    speak(currentLine.value.text, true, () => {
        isSpeaking.value = false;
        if (isAutoMode.value && !isFinished.value && !isPaused.value) {
            setTimeout(() => {
                if (!isPaused.value) startListening();
            }, 400);
        }
    });
};

const nextStep = (offset: number = 1) => {
    const targetIndex = Math.min(currentIndex.value + offset, lines.value.length - 1);
    if (targetIndex !== currentIndex.value || currentIndex.value < lines.value.length - 1) {
        currentIndex.value = targetIndex;
        recognizedText.value = '';
        resultMessage.value = '';
        setTimeout(() => playCurrent(), 600);
    } else {
        isFinished.value = true;
    }
};

const prevStep = (offset: number = 1) => {
    const targetIndex = Math.max(currentIndex.value - offset, 0);
    if (targetIndex !== currentIndex.value || isFinished.value) {
        currentIndex.value = targetIndex;
        isFinished.value = false; // We are back in the story
        recognizedText.value = '';
        resultMessage.value = '';
        setTimeout(() => playCurrent(), 600);
    }
};

const restart = () => {
    currentIndex.value = 0;
    isFinished.value = false;
    isPaused.value = false;
    recognizedText.value = '';
    resultMessage.value = '';
    setTimeout(() => playCurrent(), 600);
};

onMounted(() => {
    startWatchdog();
    setTimeout(() => {
        playCurrent();
    }, 1500);
});

onUnmounted(() => {
    if (watchdogTimer) clearInterval(watchdogTimer);
    if (recognition) {
        recognition.stop();
    }
});
</script>

<template>
  <div class="story-container dark-mode">
    <div class="header">
        <div class="header-left">
            <button class="exit-btn" @click="$emit('exit')">✖ EXIT</button>
            <button class="settings-btn" @click="showSettings = true">⚙️</button>
        </div>
        <div class="progress" v-if="!isFinished">
            <span class="step-count">{{ currentIndex + 1 }} / {{ lines.length }}</span>
            <div class="progress-bar">
                <div class="progress-fill" :style="{ width: ((currentIndex + 1) / lines.length * 100) + '%' }"></div>
            </div>
        </div>
    </div>

    <div class="main-content-area">
        <div v-if="!isFinished" class="story-content">
            <div class="card story-card">
                <div class="text">{{ currentLine.text }}</div>
                <div class="translation">{{ currentLine.translation }}</div>
            </div>
        </div>

        <!-- Finished Screen -->
        <div v-else class="finished-screen">
            <div class="stars-bg">
                <div v-for="n in 20" :key="n" class="star-fx">⭐</div>
            </div>
            <div class="finish-card">
                <div class="finish-icon">🏆</div>
                <h2>Story Complete!</h2>
                <div class="story-name-badge">{{ lyricsStore.state.currentLyricsName }}</div>
                <p>Amazing job! You read the whole story!</p>
                <div class="finish-ops">
                    <button class="restart-btn" @click="restart">
                        <span class="mr-2">🔄</span> Play Again
                    </button>
                    <button class="exit-btn-large" @click="$emit('exit')">Back to Menu</button>
                </div>
                
                <div class="finish-hint">Say "Again" to restart by voice!</div>
            </div>
        </div>
    </div>

    <div class="feedback-area" :class="{ 'in-finish': isFinished }">
        <div class="visualizer" :class="{ pulses: isListening }">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>

        <div class="recognized-box" :class="{ empty: !recognizedText }">
            {{ recognizedText || (isFinished ? 'Say "Again" to restart...' : 'Listening for your voice...') }}
        </div>
        
        <div class="result-msg" :class="{ success: resultMessage.includes('Great job') }">
            {{ resultMessage }}
        </div>

        <v-btn
            v-if="isPaused"
            color="primary"
            prepend-icon="mdi-play"
            rounded="pill"
            size="large"
            class="mt-2 resume-btn"
            @click="resume"
        >
            Resume
        </v-btn>
    </div>
    
    <div class="voice-hints">
        <span>Voice commands:</span>
        <code>"next"</code> <code>"previous"</code> <code>"again"</code> <code>"stop"</code> <code>"exit"</code>
    </div>
    <!-- Settings Dialog -->
    <CommonSettingsDialog v-model="showSettings" title="Story Settings" />
  </div>
</template>

<style scoped>
.story-container.dark-mode {
    width: 100vw;
    height: 100vh;
    background: #0f172a;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-family: 'Fredoka', sans-serif;
    color: #f8fafc;
    overflow: hidden;
}

.header {
    width: 100%;
    max-width: 900px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.exit-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 8px 16px;
    border-radius: 10px;
    color: #94a3b8;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;
}

.exit-btn:hover {
    background: #ef4444;
    color: white;
    border-color: #ef4444;
}

.settings-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 8px 12px;
    border-radius: 10px;
    color: #94a3b8;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.settings-btn:hover {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    transform: scale(1.05);
}

.header-left {
    display: flex;
    gap: 10px;
    align-items: center;
}

.progress {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
}

.step-count {
    font-size: 0.8rem;
    color: #64748b;
}

.progress-bar {
    width: 150px;
    height: 4px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #38bdf8, #818cf8);
    transition: width 0.5s ease-out;
}

.story-content {
    width: 100%;
    max-width: 850px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
}

.main-content-area {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.card {
    background: rgba(30, 41, 59, 0.7);
    backdrop-filter: blur(10px);
    border-radius: 30px;
    padding: 30px 40px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    text-align: center;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.story-card {
    position: relative;
    overflow: hidden;
}

.translation {
    font-size: 1.4rem;
    color: #94a3b8;
    margin-top: 15px;
    font-weight: 400;
}

.text {
    font-size: 2.2rem;
    font-weight: 700;
    color: #f1f5f9;
    line-height: 1.3;
}

.feedback-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    min-height: 140px;
    width: 100%;
    position: relative;
    z-index: 2;
}

.feedback-area.in-finish {
    margin-top: -20px;
    margin-bottom: 20px;
}

.visualizer {
    display: flex;
    gap: 8px;
    height: 16px;
    align-items: center;
}

.dot {
    width: 8px;
    height: 8px;
    background: #38bdf8;
    border-radius: 50%;
    opacity: 0.3;
}

.visualizer.pulses .dot {
    animation: pulseDot 1.2s infinite ease-in-out;
    opacity: 1;
}

.visualizer.pulses .dot:nth-child(2) { animation-delay: 0.2s; }
.visualizer.pulses .dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes pulseDot {
    0%, 100% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(1.4); opacity: 1; }
}

.recognized-box {
    font-size: 1.6rem;
    color: #38bdf8;
    font-style: italic;
    text-align: center;
    min-height: 2.2rem;
}

.recognized-box.empty {
    color: #475569;
}

.result-msg {
    font-size: 1.8rem;
    font-weight: bold;
    height: 2.5rem;
    display: flex;
    align-items: center;
}

.result-msg.success {
    color: #4ade80;
}

.voice-hints {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #475569;
    font-size: 0.9rem;
    margin-top: 10px;
}

.voice-hints code {
    background: rgba(255, 255, 255, 0.05);
    padding: 3px 8px;
    border-radius: 6px;
    color: #64748b;
}

.resume-btn {
    animation: bounceIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    font-weight: bold;
    font-family: 'Fredoka', sans-serif;
}

@keyframes bounceIn {
    0% { transform: scale(0.3); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
}

.finished-screen {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.finish-card {
    background: rgba(30, 41, 59, 0.8);
    padding: 40px;
    border-radius: 40px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.restart-btn {
    background: linear-gradient(135deg, #38bdf8 0%, #3b82f6 100%);
    color: white;
    border: none;
    padding: 15px 40px;
    border-radius: 15px;
    font-size: 1.3rem;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 15px;
}

.finish-icon { font-size: 5rem; margin-bottom: 15px; }
.finish-card h2 { font-size: 2.5rem; margin-bottom: 10px; color: #38bdf8; }
.finish-card p { font-size: 1.2rem; color: #94a3b8; margin-bottom: 30px; }
.finish-ops { display: flex; flex-direction: column; align-items: center; gap: 10px; }

.exit-btn-large {
    background: transparent;
    border: 1px solid #334155;
    color: #64748b;
    padding: 10px 30px;
    border-radius: 12px;
    cursor: pointer;
    width: 200px;
    transition: all 0.2s;
}
.exit-btn-large:hover {
    background: rgba(255, 255, 255, 0.05);
    color: white;
}

.story-name-badge {
    background: rgba(56, 189, 248, 0.1);
    color: #38bdf8;
    padding: 6px 16px;
    border-radius: 20px;
    display: inline-block;
    margin-bottom: 20px;
    font-weight: bold;
    border: 1px solid rgba(56, 189, 248, 0.2);
}

.finish-hint {
    margin-top: 30px;
    font-size: 0.9rem;
    color: #475569;
    font-style: italic;
}

.stars-bg {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    pointer-events: none;
    overflow: hidden;
}

.star-fx {
    position: absolute;
    font-size: 1.5rem;
    animation: floatUp var(--d) infinite linear;
    opacity: 0;
    top: 100%;
}

@keyframes floatUp {
    0% { transform: translateY(0) rotate(0); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateY(-110vh) rotate(360deg); opacity: 0; }
}

/* Staggered stars */
.star-fx:nth-child(1) { left: 10%; --d: 6s; animation-delay: 0s; }
.star-fx:nth-child(2) { left: 20%; --d: 8s; animation-delay: 1s; }
.star-fx:nth-child(3) { left: 35%; --d: 5s; animation-delay: 2s; }
.star-fx:nth-child(4) { left: 50%; --d: 9s; animation-delay: 0.5s; }
.star-fx:nth-child(5) { left: 65%; --d: 7s; animation-delay: 1.5s; }
.star-fx:nth-child(6) { left: 80%; --d: 6s; animation-delay: 2.5s; }
.star-fx:nth-child(7) { left: 90%; --d: 10s; animation-delay: 0.2s; }
.star-fx:nth-child(8) { left: 15%; --d: 5s; animation-delay: 3s; }
.star-fx:nth-child(9) { left: 45%; --d: 7s; animation-delay: 4s; }
.star-fx:nth-child(10) { left: 75%; --d: 8s; animation-delay: 3.5s; }
.star-fx:nth-child(11) { left: 5%; --d: 11s; animation-delay: 0.8s; }
.star-fx:nth-child(12) { left: 25%; --d: 6s; animation-delay: 1.2s; }
.star-fx:nth-child(13) { left: 40%; --d: 8s; animation-delay: 2.2s; }
.star-fx:nth-child(14) { left: 60%; --d: 5s; animation-delay: 0.3s; }
.star-fx:nth-child(15) { left: 85%; --d: 9s; animation-delay: 1.8s; }
.star-fx:nth-child(16) { left: 95%; --d: 7s; animation-delay: 2.8s; }
</style>
