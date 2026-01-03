
import { settings } from '../store/settings';

const synth = window.speechSynthesis;
const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
const audioCtx = new AudioContext();

// CDN Audio Assets (Royalty-free)
const SFX = {
    SUCCESS: 'https://raw.githubusercontent.com/walles/numbervaders/master/app/src/main/res/raw/medal_earned_tada.mp3',
    WRONG: 'https://raw.githubusercontent.com/walles/numbervaders/master/app/src/main/res/raw/wrong_answer.wav',
    EXPLOSION: 'https://raw.githubusercontent.com/walles/numbervaders/master/app/src/main/res/raw/cannon_explosion.mp3',
    UI_CLICK: 'https://www.soundjay.com/buttons/sounds/button-16.mp3'
};

// Preload audio objects for low latency
const audioCache: Record<string, HTMLAudioElement> = {};
const getAudio = (url: string) => {
    if (!audioCache[url]) {
        audioCache[url] = new Audio(url);
    }
    return audioCache[url];
};

export function useAudio() {
    const playSFX = (url: string) => {
        const audio = getAudio(url);
        audio.currentTime = 0;
        audio.volume = 0.4;
        audio.play().catch(e => console.warn('SFX playback blocked or failed:', e));
    };

    const playTone = (freq: number, type: 'sine' | 'square' | 'triangle' | 'sawtooth' = 'sine', duration = 0.1, vol = 0.1) => {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        gain.gain.setValueAtTime(vol, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    };

    const playThrust = () => {
        if (audioCtx.state === 'suspended') audioCtx.resume();

        const duration = 0.8; // Longer duration for the tail
        const bufferSize = audioCtx.sampleRate * duration;
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = audioCtx.createBufferSource();
        noise.buffer = buffer;

        // Use lowpass for a smoother "air" sound
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.Q.value = 1;

        const now = audioCtx.currentTime;
        // High to low sweep creates the "whoosh" speed feel
        filter.frequency.setValueAtTime(5000, now);
        filter.frequency.exponentialRampToValueAtTime(400, now + duration);

        const gain = audioCtx.createGain();
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.08, now + 0.04); // Quick attack
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration); // Long, smooth tail

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);

        noise.start();
        noise.stop(now + duration);
    };

    const speak = (text: string, interrupt = true, onEnd?: () => void, voiceURI?: string) => {
        if (!synth) return;
        console.log(`speak : ${text}`);
        const utterance = new SpeechSynthesisUtterance(text);

        if (onEnd) {
            utterance.onend = () => {
                console.log('Speech ended');
                onEnd();
            };
        }

        // Auto-detect language
        const isChinese = /[\u4e00-\u9fa5\u3105-\u3129\u02CA\u02C7\u02CB\u02D9]/.test(text);
        utterance.lang = isChinese ? 'zh-TW' : 'en-US';

        utterance.rate = settings.speechRate;

        const voices = synth.getVoices();
        const targetURI = voiceURI || settings.voiceURI;

        if (targetURI) {
            const selected = voices.find(v => v.voiceURI === targetURI);
            if (selected) {
                utterance.voice = selected;
                // If user picked a specific voice, trust its lang over our auto-detect
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

        // Small delay for some mobile browsers to handle cancel() effectively
        if (interrupt) {
            setTimeout(() => synth.speak(utterance), 50);
        } else {
            synth.speak(utterance);
        }
    };

    const playBrake = () => {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const now = audioCtx.currentTime;
        const duration = 0.6;

        // 1. Friction Noise (Rubber on asphalt)
        const bufferSize = audioCtx.sampleRate * duration;
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            // Add some "grain" to the noise
            const noise = Math.random() * 2 - 1;
            const grain = Math.sin(i * 0.05) > 0 ? 1 : 0.5;
            data[i] = noise * grain;
        }
        const noiseSource = audioCtx.createBufferSource();
        noiseSource.buffer = buffer;

        const noiseFilter = audioCtx.createBiquadFilter();
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.setValueAtTime(2500, now);
        noiseFilter.frequency.exponentialRampToValueAtTime(800, now + duration);
        noiseFilter.Q.value = 3;

        // 2. High Squeal (Vibration)
        const squeal1 = audioCtx.createOscillator();
        squeal1.type = 'sawtooth';
        squeal1.frequency.setValueAtTime(3500, now);
        squeal1.frequency.exponentialRampToValueAtTime(1200, now + duration);

        const squeal2 = audioCtx.createOscillator();
        squeal2.type = 'triangle';
        squeal2.frequency.setValueAtTime(3550, now);
        squeal2.frequency.exponentialRampToValueAtTime(1250, now + duration);

        // 3. Modulator for "chirp" effect
        const mod = audioCtx.createOscillator();
        mod.type = 'sine';
        mod.frequency.value = 50;
        const modGain = audioCtx.createGain();
        modGain.gain.value = 100;

        mod.connect(modGain);
        modGain.connect(squeal1.frequency);
        modGain.connect(squeal2.frequency);

        const mainGain = audioCtx.createGain();
        mainGain.gain.setValueAtTime(0, now);
        mainGain.gain.linearRampToValueAtTime(0.12, now + 0.05);
        mainGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        noiseSource.connect(noiseFilter);
        noiseFilter.connect(mainGain);
        squeal1.connect(mainGain);
        squeal2.connect(mainGain);
        mainGain.connect(audioCtx.destination);

        noiseSource.start();
        squeal1.start();
        squeal2.start();
        mod.start();

        noiseSource.stop(now + duration);
        squeal1.stop(now + duration);
        squeal2.stop(now + duration);
        mod.stop(now + duration);
    };

    const playCorrect = () => {
        // Soft synthesized chime: C6 -> E6
        playTone(1046.50, 'sine', 0.15, 0.05);
        setTimeout(() => playTone(1318.51, 'sine', 0.25, 0.05), 80);
    };
    const playSuccess = () => playSFX(SFX.SUCCESS);
    const playWrong = () => playSFX(SFX.WRONG);
    const playExplosion = () => playSFX(SFX.EXPLOSION);


    return {
        speak,
        playCorrect,
        playSuccess,
        playWrong,
        playExplosion,
        playThrust,
        playTone,
        playBrake
    };
}
