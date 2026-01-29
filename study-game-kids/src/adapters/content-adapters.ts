/**
 * 基礎適配器類別
 * 提供教材轉換的通用功能
 */

import type {
    Content,
    VocabularyContent,
    LyricsContent,
    StoryContent,
    QuizContent,
    ContentFormat
} from '~/types/content.types';
import type { GameDataItem, IContentAdapter, GameSettings } from '~/types/game.types';

export abstract class BaseContentAdapter implements IContentAdapter {
    protected supportedFormats: ContentFormat[];

    constructor(supportedFormats: ContentFormat[]) {
        this.supportedFormats = supportedFormats;
    }

    canAdapt(content: Content): boolean {
        return this.supportedFormats.includes(content.format);
    }

    abstract adapt(content: Content, settings?: Partial<GameSettings>): GameDataItem[];

    merge(contents: Content[], settings?: Partial<GameSettings>): GameDataItem[] {
        const allItems: GameDataItem[] = [];

        for (const content of contents) {
            if (this.canAdapt(content)) {
                const items = this.adapt(content, settings);
                allItems.push(...items);
            }
        }

        // 如果設定要求隨機排序
        if (settings?.autoPlay !== false) { // 暫時用 autoPlay 代表 shuffle
            this.shuffleArray(allItems);
        }

        return allItems;
    }

    protected shuffleArray<T>(array: T[]): void {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    protected generateId(prefix: string, index: number): string {
        return `${prefix}-${Date.now()}-${index}`;
    }
}

/**
 * 單字教材適配器
 */
export class VocabularyAdapter extends BaseContentAdapter {
    constructor() {
        super(['vocabulary' as ContentFormat]);
    }

    adapt(content: Content, _settings?: Partial<GameSettings>): GameDataItem[] {
        if (content.format !== 'vocabulary') {
            throw new Error('Invalid content format for VocabularyAdapter');
        }

        const vocabContent = content as VocabularyContent;
        return vocabContent.items.map((item, index) => ({
            id: this.generateId('vocab', index),
            question: item.word,
            answer: item.translation,
            hint: item.pronunciation,
            audioUrl: item.audioUrl,
            imageUrl: item.imageUrl,
            metadata: {
                examples: item.examples,
                originalContent: content
            }
        }));
    }
}

/**
 * 歌詞教材適配器
 */
export class LyricsAdapter extends BaseContentAdapter {
    constructor() {
        super(['lyrics' as ContentFormat]);
    }

    adapt(content: Content, _settings?: Partial<GameSettings>): GameDataItem[] {
        if (content.format !== 'lyrics') {
            throw new Error('Invalid content format for LyricsAdapter');
        }

        const lyricsContent = content as LyricsContent;
        return lyricsContent.lines.map((line, index) => ({
            id: this.generateId('lyrics', index),
            question: line.text,
            answer: line.translation || line.text,
            audioUrl: lyricsContent.audioUrl,
            metadata: {
                startTime: line.startTime,
                endTime: line.endTime,
                artist: lyricsContent.artist,
                originalContent: content
            }
        }));
    }
}

/**
 * 故事教材適配器
 */
export class StoryAdapter extends BaseContentAdapter {
    constructor() {
        super(['story' as ContentFormat]);
    }

    adapt(content: Content, _settings?: Partial<GameSettings>): GameDataItem[] {
        if (content.format !== 'story') {
            throw new Error('Invalid content format for StoryAdapter');
        }

        const storyContent = content as StoryContent;
        return storyContent.paragraphs.map((paragraph, index) => ({
            id: this.generateId('story', index),
            question: paragraph.text,
            answer: paragraph.translation || paragraph.text,
            audioUrl: paragraph.audioUrl,
            metadata: {
                author: storyContent.author,
                coverImage: storyContent.coverImageUrl,
                originalContent: content
            }
        }));
    }
}

/**
 * 選擇題教材適配器
 */
export class QuizAdapter extends BaseContentAdapter {
    constructor() {
        super(['quiz' as ContentFormat]);
    }

    adapt(content: Content, _settings?: Partial<GameSettings>): GameDataItem[] {
        if (content.format !== 'quiz') {
            throw new Error('Invalid content format for QuizAdapter');
        }

        const quizContent = content as QuizContent;
        return quizContent.items.map((item, index) => {
            const correctAnswer = item.options.find(opt => opt.isCorrect)?.text || '';

            return {
                id: this.generateId('quiz', index),
                question: item.question,
                answer: correctAnswer,
                options: item.options.map(opt => opt.text),
                hint: item.explanation,
                audioUrl: item.audioUrl,
                metadata: {
                    allOptions: item.options,
                    originalContent: content
                }
            };
        });
    }
}

/**
 * 通用適配器
 * 可以處理所有類型的教材
 */
export class UniversalAdapter extends BaseContentAdapter {
    private adapters: Map<ContentFormat, BaseContentAdapter>;

    constructor() {
        super(['vocabulary', 'lyrics', 'story', 'quiz', 'mixed'] as ContentFormat[]);

        this.adapters = new Map();
        this.adapters.set('vocabulary' as ContentFormat, new VocabularyAdapter());
        this.adapters.set('lyrics' as ContentFormat, new LyricsAdapter());
        this.adapters.set('story' as ContentFormat, new StoryAdapter());
        this.adapters.set('quiz' as ContentFormat, new QuizAdapter());
    }

    adapt(content: Content, settings?: Partial<GameSettings>): GameDataItem[] {
        const adapter = this.adapters.get(content.format);
        if (!adapter) {
            throw new Error(`No adapter found for format: ${content.format}`);
        }
        return adapter.adapt(content, settings);
    }

    merge(contents: Content[], settings?: Partial<GameSettings>): GameDataItem[] {
        const allItems: GameDataItem[] = [];

        for (const content of contents) {
            const items = this.adapt(content, settings);
            allItems.push(...items);
        }

        if (settings?.autoPlay !== false) {
            this.shuffleArray(allItems);
        }

        return allItems;
    }
}
