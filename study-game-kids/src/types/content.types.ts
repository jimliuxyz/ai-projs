/**
 * 教材系統核心型別定義
 * 這些型別定義了整個教材系統的基礎架構
 */

// ==================== 年齡層定義 ====================
export enum AgeGroup {
    AGE_5 = '5',   // 5 歲以下
    AGE_10 = '10', // 5-10 歲
    AGE_20 = '20'  // 10-20 歲
}

// ==================== 內容格式定義 ====================
export enum ContentFormat {
    VOCABULARY = 'vocabulary', // 單字
    LYRICS = 'lyrics',         // 歌詞
    STORY = 'story',           // 故事
    QUIZ = 'quiz',             // 選擇題
    MIXED = 'mixed'            // 混合
}

// ==================== 教材標籤 ====================
export type ContentTag = string; // 可自由定義的標籤，例如: 'animals', 'colors', 'numbers'

// ==================== 教材檔名規範 ====================
/**
 * 教材檔名格式: [年齡層]_[內容格式]_[標籤1]_[標籤2]..._[編號].json
 * 範例: 5_vocabulary_animals_colors_001.json
 */
export interface ContentFileName {
    ageGroup: AgeGroup;
    format: ContentFormat;
    tags: ContentTag[];
    index: string; // 編號，例如: '001', '002'
}

// ==================== 基礎教材介面 ====================
export interface BaseContent {
    id: string;              // 唯一識別碼
    title: string;           // 標題
    ageGroup: AgeGroup;      // 年齡層
    format: ContentFormat;   // 內容格式
    tags: ContentTag[];      // 標籤列表
    createdAt: string;       // 建立時間 (ISO 8601)
    updatedAt: string;       // 更新時間 (ISO 8601)
}

// ==================== 單字教材 ====================
export interface VocabularyItem {
    word: string;            // 單字
    translation: string;     // 翻譯
    pronunciation?: string;  // 發音 (IPA 或音標)
    examples?: string[];     // 例句
    imageUrl?: string;       // 圖片 URL
    audioUrl?: string;       // 音檔 URL
    spelling?: string;       // 拼寫目標 (例如注音或拆解，若無則依 word)
}

export interface VocabularyContent extends BaseContent {
    format: ContentFormat.VOCABULARY;
    items: VocabularyItem[];
}

// ==================== 歌詞教材 ====================
export interface LyricLine {
    text: string;            // 歌詞文字
    translation?: string;    // 翻譯
    startTime?: number;      // 開始時間 (秒)
    endTime?: number;        // 結束時間 (秒)
}

export interface LyricsContent extends BaseContent {
    format: ContentFormat.LYRICS;
    artist?: string;         // 歌手
    audioUrl?: string;       // 音檔 URL
    lines: LyricLine[];      // 歌詞行
}

// ==================== 故事教材 ====================
export interface StoryParagraph {
    text: string;            // 段落文字
    translation?: string;    // 翻譯
    audioUrl?: string;       // 音檔 URL
}

export interface StoryContent extends BaseContent {
    format: ContentFormat.STORY;
    author?: string;         // 作者
    coverImageUrl?: string;  // 封面圖片
    paragraphs: StoryParagraph[];
}

// ==================== 選擇題教材 ====================
export interface QuizOption {
    text: string;            // 選項文字
    isCorrect: boolean;      // 是否正確答案
}

export interface QuizItem {
    question: string;        // 題目
    options: QuizOption[];   // 選項 (至少 2 個)
    explanation?: string;    // 解釋
    audioUrl?: string;       // 音檔 URL
}

export interface QuizContent extends BaseContent {
    format: ContentFormat.QUIZ;
    items: QuizItem[];
}

// ==================== 混合教材 ====================
export interface MixedContent extends BaseContent {
    format: ContentFormat.MIXED;
    contents: Array<
        Omit<VocabularyContent, 'id' | 'title' | 'ageGroup' | 'tags' | 'createdAt' | 'updatedAt'> |
        Omit<LyricsContent, 'id' | 'title' | 'ageGroup' | 'tags' | 'createdAt' | 'updatedAt'> |
        Omit<StoryContent, 'id' | 'title' | 'ageGroup' | 'tags' | 'createdAt' | 'updatedAt'> |
        Omit<QuizContent, 'id' | 'title' | 'ageGroup' | 'tags' | 'createdAt' | 'updatedAt'>
    >;
}

// ==================== 聯合型別 ====================
export type Content =
    | VocabularyContent
    | LyricsContent
    | StoryContent
    | QuizContent
    | MixedContent;

// ==================== 教材過濾器 ====================
export interface ContentFilter {
    ageGroups?: AgeGroup[];
    formats?: ContentFormat[];
    tags?: ContentTag[];
    searchText?: string;
}

// ==================== 教材集合 ====================
export interface ContentCollection {
    contents: Content[];
    selectedIds: string[];  // 已選擇的教材 ID
}
