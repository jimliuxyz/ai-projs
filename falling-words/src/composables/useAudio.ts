
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

    const speak = (text: string, interrupt = true) => {
        if (!synth) return;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = settings.speechRate;

        const voices = synth.getVoices();
        if (settings.voiceURI) {
            const selected = voices.find(v => v.voiceURI === settings.voiceURI);
            if (selected) utterance.voice = selected;
        } else {
            const googleUS = voices.find(v => v.name === 'Google US English');
            const anyUS = voices.find(v => v.lang === 'en-US');
            if (googleUS) utterance.voice = googleUS;
            else if (anyUS) utterance.voice = anyUS;
        }

        if (interrupt) synth.cancel();
        synth.speak(utterance);
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
        playThrust
    };
}
