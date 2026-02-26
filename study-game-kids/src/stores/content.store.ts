/**
 * 教材管理 Store (使用 import.meta.glob 按需載入)
 */

import { defineStore } from 'pinia';
import type { Content, ContentFilter, AgeGroup, ContentFormat } from '~/types/content.types';
import type { GameDataItem, GameSettings, BaseGameInfo } from '~/types/game.types';
import { useSettingsStore } from './settings.store';
import { UniversalAdapter } from '~/adapters/content-adapters';

// 使用 Vite 的 glob import 獲取所有教材檔案
const contentModules = import.meta.glob('/public/contents/*.json');

// 從檔案路徑解析基本資訊
interface ContentMetadata {
    id: string;
    filePath: string;
    fileName: string;
    loader: () => Promise<any>;
}

const STORAGE_KEY = 'study-game-kids-content-state';

export const useContentStore = defineStore('content', {
    state: () => ({
        allContents: [] as Content[],
        selectedContentIds: [] as string[],
        filter: {
            ageGroups: [],
            formats: [],
            tags: [],
            searchText: ''
        } as ContentFilter,
        loading: false,
        initialized: false,
        error: null as string | null,
        availableMetadata: [] as ContentMetadata[]
    }),

    getters: {
        /**
         * 已篩選的教材
         */
        filteredContents(state): Content[] {
            return state.allContents.filter(content => {
                // 年齡層篩選
                if (state.filter.ageGroups && state.filter.ageGroups.length > 0) {
                    if (!state.filter.ageGroups.includes(content.ageGroup)) {
                        return false;
                    }
                }

                // 格式篩選
                if (state.filter.formats && state.filter.formats.length > 0) {
                    if (!state.filter.formats.includes(content.format)) {
                        return false;
                    }
                }

                // 標籤篩選
                if (state.filter.tags && state.filter.tags.length > 0) {
                    const hasMatchingTag = state.filter.tags.some(tag =>
                        content.tags.includes(tag)
                    );
                    if (!hasMatchingTag) {
                        return false;
                    }
                }

                // 文字搜尋
                if (state.filter.searchText) {
                    const searchLower = state.filter.searchText.toLowerCase();
                    const matchesTitle = content.title.toLowerCase().includes(searchLower);
                    const matchesTags = content.tags.some(tag =>
                        tag.toLowerCase().includes(searchLower)
                    );
                    if (!matchesTitle && !matchesTags) {
                        return false;
                    }
                }

                return true;
            });
        },

        /**
         * 已選擇的教材
         */
        selectedContents(state): Content[] {
            return state.allContents.filter(content =>
                state.selectedContentIds.includes(content.id)
            );
        },

        /**
         * 所有可用的標籤
         */
        availableTags(state): string[] {
            const tags = new Set<string>();
            state.allContents.forEach(content => {
                content.tags.forEach(tag => tags.add(tag));
            });
            return Array.from(tags).sort();
        },

        /**
         * 所有可用的年齡層
         */
        availableAgeGroups(state): AgeGroup[] {
            const ageGroups = new Set<AgeGroup>();
            state.allContents.forEach(content => {
                ageGroups.add(content.ageGroup);
            });
            return Array.from(ageGroups).sort();
        },

        /**
         * 所有可用的格式
         */
        availableFormats(state): ContentFormat[] {
            const formats = new Set<ContentFormat>();
            state.allContents.forEach(content => {
                formats.add(content.format);
            });
            return Array.from(formats).sort();
        }
    },

    actions: {
        /**
         * 初始化 - 從檔案名稱解析元數據（零載入成本）
         */
        async initializeContents(): Promise<void> {
            if (this.initialized) return;
            this.loading = true;
            this.error = null;

            try {
                const { parseFileName, isValidFileName } = await import('~/utils/file-parser');

                // 掃描所有教材檔案
                const metadata: ContentMetadata[] = [];
                const contents: Content[] = [];

                for (const path in contentModules) {
                    const fileName = path.split('/').pop() || '';

                    // 檢查檔案名格式
                    if (!isValidFileName(fileName)) {
                        console.warn(`Skipping invalid file name: ${fileName}`);
                        continue;
                    }

                    // 從檔案名解析元數據
                    const fileMeta = parseFileName(path);
                    if (!fileMeta) {
                        console.warn(`Failed to parse file name: ${fileName}`);
                        continue;
                    }

                    const id = fileName.replace('.json', '');

                    // 保存元數據
                    metadata.push({
                        id,
                        filePath: path,
                        fileName,
                        loader: contentModules[path] as () => Promise<any>
                    });

                    // 創建輕量級 Content 對象
                    const lightContent: Content = {
                        id,
                        title: fileMeta.title,
                        ageGroup: fileMeta.ageGroup,
                        format: fileMeta.format,
                        tags: fileMeta.tags,
                        items: [],
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    } as Content;

                    contents.push(lightContent);
                }

                this.availableMetadata = metadata;
                this.allContents = contents;
                this.initialized = true;

                // 清理舊的、不存在的選擇 ID
                this.validateSelection();
                this.loadState(); // 在初始化後加載持久化狀態

                console.log(`✅ Initialized ${this.allContents.length} contents (zero load cost)`);
            } catch (err) {
                this.error = err instanceof Error ? err.message : 'Failed to initialize contents';
                console.error('Failed to initialize contents:', err);
            } finally {
                this.loading = false;
            }
        },

        /**
         * 確保已初始化
         */
        async ensureInitialized(): Promise<void> {
            if (this.initialized) return;
            // 如果正在載入，則直接返回，外部會等待 initializeContents 完成
            if (this.loading) {
                while (this.loading) {
                    await new Promise(resolve => setTimeout(resolve, 50));
                }
                return;
            }
            await this.initializeContents();
        },

        /**
         * 載入完整教材內容（包含 items）
         */
        async loadFullContent(contentId: string): Promise<Content | null> {
            await this.ensureInitialized();

            try {
                const meta = this.availableMetadata.find(m => m.id === contentId);
                if (!meta) {
                    throw new Error(`Content not found: ${contentId}`);
                }

                const module = await meta.loader();
                const fullContent = {
                    ...module.default,
                    id: contentId
                } as Content;

                // 更新 store 中的資料
                const index = this.allContents.findIndex(c => c.id === contentId);
                if (index >= 0) {
                    this.allContents[index] = fullContent;
                }

                return fullContent;
            } catch (err) {
                console.error(`Failed to load full content for ${contentId}:`, err);
                return null;
            }
        },

        /**
         * 批次載入選中的教材完整內容
         */
        async loadSelectedContents(): Promise<Content[]> {
            await this.ensureInitialized();
            const loadPromises = this.selectedContentIds.map(id => this.loadFullContent(id));
            const results = await Promise.all(loadPromises);
            return results.filter(c => c !== null) as Content[];
        },

        /**
         * 準備遊戲數據 (整合 Content 與 Settings)
         * 內部會自動獲取全域 SettingsStore 的設定
         */
        async prepareGameData(gameInfo: BaseGameInfo): Promise<GameDataItem[]> {
            const settingsStore = useSettingsStore();
            const adapter = new UniversalAdapter();

            const fullContents = await this.loadSelectedContents();
            if (fullContents.length === 0) return [];

            // 根據遊戲支持的格式進行過濾
            const supportedContents = fullContents.filter(content =>
                gameInfo.supportedFormats.includes(content.format)
            );

            if (supportedContents.length === 0) return [];

            // 合併全域遊戲設定與該遊戲的特定設定
            const combinedSettings = {
                ...settingsStore.gameSettings,
                ...(settingsStore.gameSpecificSettings[gameInfo.id] || {})
            };

            // 進行資料轉換
            return adapter.merge(supportedContents, combinedSettings as any);
        },

        /**
         * 更新篩選條件
         */
        updateFilter(updates: Partial<ContentFilter>): void {
            this.filter = {
                ...this.filter,
                ...updates
            };
            this.saveState();
        },

        /**
         * 清除篩選條件
         */
        clearFilter(): void {
            this.filter = {
                ageGroups: [],
                formats: [],
                tags: [],
                searchText: ''
            };
            this.saveState();
        },

        /**
         * 切換教材選擇狀態
         */
        toggleContentSelection(contentId: string): void {
            const index = this.selectedContentIds.indexOf(contentId);
            if (index >= 0) {
                this.selectedContentIds.splice(index, 1);
            } else {
                this.selectedContentIds.push(contentId);
            }
            this.saveState();
        },

        /**
         * 選擇所有 (已篩選的) 教材
         */
        selectAll(): void {
            this.selectedContentIds = this.filteredContents.map(c => c.id);
            this.saveState();
        },

        /**
         * 清除所有選擇
         */
        clearSelection(): void {
            this.selectedContentIds = [];
            this.saveState();
        },

        /**
         * 清理無效的選擇（當檔案名稱變更後）
         */
        validateSelection() {
            if (this.availableMetadata.length > 0) {
                const validIds = new Set(this.availableMetadata.map(m => m.id));
                this.selectedContentIds = this.selectedContentIds.filter(id => validIds.has(id));
            }
        },

        saveState() {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({
                selectedContentIds: this.selectedContentIds,
                filter: this.filter
            }));
        },

        loadState() {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    if (parsed.selectedContentIds) {
                        this.selectedContentIds = parsed.selectedContentIds;
                    }
                    if (parsed.filter) {
                        this.filter = parsed.filter;
                    }
                    this.validateSelection();
                } catch (e) {
                    console.error('Failed to load content state:', e);
                }
            }
        }
    }
});
