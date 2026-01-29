/**
 * 語音功能 Composable
 * 提供 TTS (Text-to-Speech) 和音效功能
 */

import { useSettingsStore } from '~/stores/settings.store';

const synth = window.speechSynthesis;

export function useAudio() {
    const settingsStore = useSettingsStore();

    /**
     * 語音朗讀文字
     * @param text 要朗讀的文字
     * @param interrupt 是否中斷當前朗讀
     * @param onEnd 朗讀結束回調
     */
    const speak = (text: string, interrupt = true, onEnd?: () => void): void => {
        if (!synth || !settingsStore.voiceSettings.enabled) return;

        const utterance = new SpeechSynthesisUtterance(text);

        if (onEnd) {
            utterance.onend = () => {
                console.log('Speech ended');
                onEnd();
            };
        }

        // 自動檢測語言
        const isChinese = /[\u4e00-\u9fa5\u3105-\u3129\u02CA\u02C7\u02CB\u02D9]/.test(text);
        utterance.lang = isChinese ? settingsStore.voiceSettings.language.includes('zh') ? settingsStore.voiceSettings.language : 'zh-TW' : settingsStore.voiceSettings.language;

        // 應用設定
        utterance.rate = settingsStore.voiceSettings.rate;
        utterance.pitch = settingsStore.voiceSettings.pitch;
        utterance.volume = settingsStore.voiceSettings.volume;

        // 選擇語音
        const voices = synth.getVoices();
        if (settingsStore.voiceSettings.voice) {
            const selected = voices.find(v => v.name === settingsStore.voiceSettings.voice);
            if (selected) {
                utterance.voice = selected;
                utterance.lang = selected.lang;
            }
        } else if (isChinese) {
            const twVoice = voices.find(v => v.lang.includes('zh-TW')) ||
                voices.find(v => v.lang.includes('zh')) ||
                voices.find(v => v.lang.includes('TW'));
            if (twVoice) utterance.voice = twVoice;
        } else {
            const googleUS = voices.find(v => v.name === 'Google US English');
            const anyUS = voices.find(v => v.lang === 'en-US');
            if (googleUS) utterance.voice = googleUS;
            else if (anyUS) utterance.voice = anyUS;
        }

        if (interrupt) synth.cancel();

        // 小延遲確保 cancel() 生效
        if (interrupt) {
            setTimeout(() => synth.speak(utterance), 50);
        } else {
            synth.speak(utterance);
        }
    };

    /**
     * 停止當前朗讀
     */
    const stopSpeaking = (): void => {
        if (synth) {
            synth.cancel();
        }
    };

    /**
     * 播放音檔
     * @param url 音檔 URL
     * @param volume 音量 (0-1)
     */
    const playAudio = (url: string, volume = 1.0): Promise<void> => {
        return new Promise((resolve, reject) => {
            const audio = new Audio(url);
            audio.volume = volume;

            audio.onended = () => resolve();
            audio.onerror = (error) => reject(error);

            audio.play().catch(error => reject(error));
        });
    };

    /**
     * 播放正確音效
     */
    const playCorrect = (): void => {
        if (!settingsStore.gameSettings.soundEnabled) return;

        // 簡單的音調組合
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        const audioCtx = new AudioContext();

        const playTone = (freq: number, duration: number, delay: number) => {
            setTimeout(() => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

                gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

                osc.connect(gain);
                gain.connect(audioCtx.destination);

                osc.start();
                osc.stop(audioCtx.currentTime + duration);
            }, delay);
        };

        playTone(1046.50, 0.15, 0);      // C6
        playTone(1318.51, 0.25, 80);     // E6
    };

    /**
     * 播放錯誤音效
     */
    const playWrong = (): void => {
        if (!settingsStore.gameSettings.soundEnabled) return;

        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        const audioCtx = new AudioContext();

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.3);

        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
    };

    return {
        speak,
        stopSpeaking,
        playAudio,
        playCorrect,
        playWrong
    };
}
