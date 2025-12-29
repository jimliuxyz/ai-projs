import { settings } from '../store/settings';
import type { Word } from '../data/words';

export function useAudioContent() {
    /**
     * Get speech text for the main question announcement
     */
    const getQuestion = (word: Word, isCloze: boolean = false): string => {
        if (isCloze) {
            // In cloze mode, we always read the explanation/expression as the main text
            return (word.exps && word.exps.length > 0) ? word.exps[0] : word.q;
        }

        const q = settings.readAnswer ? (word.a || word.q) : '';
        const exp = (word.exps && word.exps.length > 0) ? `，${word.exps[0]}` : '';

        const transition = (settings.readTransition && word.t) ? `，${word.t}` : ''

        return (q + transition + exp).trim();
    };

    /**
     * Get speech text for an answer hint (e.g. clicking on a spot)
     */
    const getAnswerHint = (word: Word): string => {
        const answer = word.a || word.q;
        if (answer.length == 1)
            return answer;
        const spelled = answer.split('').join('-');
        let text = `${answer}. ${spelled}`;

        const isZhuyin = /[\u3105-\u3129\u02CA\u02C7\u02CB\u02D9]/.test(answer);
        if (isZhuyin && answer.length > 1 && word.q.length == 1) {
            text += `. ${word.q}`;
        }
        return text;
    };

    /**
     * Get speech text for a single character (e.g. clicking on a car)
     */
    const getChar = (char: string): string => {
        return char;
    };

    return {
        getQuestion,
        getAnswerHint,
        getChar
    };
}
