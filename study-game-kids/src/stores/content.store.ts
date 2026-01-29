/**
 * 教材管理 Store (使用 import.meta.glob 按需載入)
 */

import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import type { Content, ContentFilter, AgeGroup, ContentFormat } from '~/types/content.types';

// 使用 Vite 的 glob import 獲取所有教材檔案
// eager: false 表示不立即載入，返回 import 函數
const contentModules = import.meta.glob('/public/contents/*.json');

// 從檔案路徑解析基本資訊
interface ContentMetadata {
    id: string;
    filePath: string;
    fileName: string;
    loader: () => Promise<any>;
}

export const useContentStore = defineStore('content', () => {
    // ==================== 狀態 ====================

    const allContents = ref<Content[]>([]);
    const selectedContentIds = ref<string[]>([]);
    const filter = ref<ContentFilter>({
        ageGroups: [],
        formats: [],
        tags: [],
        searchText: ''
    });
    const loading = ref(false);
    const initialized = ref(false);
    const error = ref<string | null>(null);

    // 可用的內容元數據（從檔案路徑掃描）
    const availableMetadata = ref<ContentMetadata[]>([]);

    // ==================== 計算屬性 ====================

    /**
     * 已篩選的教材
     */
    const filteredContents = computed(() => {
        return allContents.value.filter(content => {
            // 年齡層篩選
            if (filter.value.ageGroups && filter.value.ageGroups.length > 0) {
                if (!filter.value.ageGroups.includes(content.ageGroup)) {
                    return false;
                }
            }

            // 格式篩選
            if (filter.value.formats && filter.value.formats.length > 0) {
                if (!filter.value.formats.includes(content.format)) {
                    return false;
                }
            }

            // 標籤篩選
            if (filter.value.tags && filter.value.tags.length > 0) {
                const hasMatchingTag = filter.value.tags.some(tag =>
                    content.tags.includes(tag)
                );
                if (!hasMatchingTag) {
                    return false;
                }
            }

            // 文字搜尋
            if (filter.value.searchText) {
                const searchLower = filter.value.searchText.toLowerCase();
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
    });

    /**
     * 已選擇的教材
     */
    const selectedContents = computed(() => {
        return allContents.value.filter(content =>
            selectedContentIds.value.includes(content.id)
        );
    });

    /**
     * 所有可用的標籤
     */
    const availableTags = computed(() => {
        const tags = new Set<string>();
        allContents.value.forEach(content => {
            content.tags.forEach(tag => tags.add(tag));
        });
        return Array.from(tags).sort();
    });

    /**
     * 所有可用的年齡層
     */
    const availableAgeGroups = computed(() => {
        const ageGroups = new Set<AgeGroup>();
        allContents.value.forEach(content => {
            ageGroups.add(content.ageGroup);
        });
        return Array.from(ageGroups).sort();
    });

    /**
     * 所有可用的格式
     */
    const availableFormats = computed(() => {
        const formats = new Set<ContentFormat>();
        allContents.value.forEach(content => {
            formats.add(content.format);
        });
        return Array.from(formats).sort();
    });

    // ==================== 方法 ====================

    /**
   * 初始化 - 從檔案名稱解析元數據（零載入成本）
   */
    async function initializeContents(): Promise<void> {
        if (initialized.value) return;
        loading.value = true;
        error.value = null;

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
                    id, // 強制使用檔名作為 ID
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

            availableMetadata.value = metadata;
            allContents.value = contents;
            initialized.value = true;

            // 清理舊的、不存在的選擇 ID
            validateSelection();

            console.log(`✅ Initialized ${allContents.value.length} contents (zero load cost)`);
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Failed to initialize contents';
            console.error('Failed to initialize contents:', err);
        } finally {
            loading.value = false;
        }
    }

    /**
     * 確保已初始化
     */
    async function ensureInitialized(): Promise<void> {
        if (initialized.value) return;
        if (loading.value) {
            // 如果正在載入，等待
            return new Promise((resolve) => {
                const unwatch = watch(initialized, (val) => {
                    if (val) {
                        unwatch();
                        resolve();
                    }
                });
            });
        }
        await initializeContents();
    }

    /**
     * 載入完整教材內容（包含 items）
     */
    async function loadFullContent(contentId: string): Promise<Content | null> {
        await ensureInitialized();

        try {
            const meta = availableMetadata.value.find(m => m.id === contentId);
            if (!meta) {
                throw new Error(`Content not found: ${contentId}`);
            }

            const module = await meta.loader();
            const fullContent = {
                ...module.default,
                id: contentId // 強制注入 ID，確保與檔名一致
            } as Content;

            // 更新 store 中的資料
            const index = allContents.value.findIndex(c => c.id === contentId);
            if (index >= 0) {
                allContents.value[index] = fullContent;
            }

            return fullContent;
        } catch (err) {
            console.error(`Failed to load full content for ${contentId}:`, err);
            return null;
        }
    }

    /**
     * 批次載入選中的教材完整內容
     */
    async function loadSelectedContents(): Promise<Content[]> {
        await ensureInitialized();
        const loadPromises = selectedContentIds.value.map(id => loadFullContent(id));
        const results = await Promise.all(loadPromises);
        return results.filter(c => c !== null) as Content[];
    }

    /**
     * 載入單一教材檔案 (向後兼容)
     */
    async function loadContentFile(filePath: string): Promise<void> {
        try {
            const response = await fetch(filePath);
            const content: Content = await response.json();

            const existingIndex = allContents.value.findIndex(c => c.id === content.id);
            if (existingIndex >= 0) {
                allContents.value[existingIndex] = content;
            } else {
                allContents.value.push(content);
            }
        } catch (err) {
            console.error('Failed to load content file:', filePath, err);
            throw err;
        }
    }

    /**
     * 新增教材
     */
    function addContent(content: Content): void {
        const existingIndex = allContents.value.findIndex(c => c.id === content.id);
        if (existingIndex >= 0) {
            allContents.value[existingIndex] = content;
        } else {
            allContents.value.push(content);
        }
    }

    /**
     * 移除教材
     */
    function removeContent(contentId: string): void {
        const index = allContents.value.findIndex(c => c.id === contentId);
        if (index >= 0) {
            allContents.value.splice(index, 1);
        }
        const selectedIndex = selectedContentIds.value.indexOf(contentId);
        if (selectedIndex >= 0) {
            selectedContentIds.value.splice(selectedIndex, 1);
        }
    }

    /**
     * 更新篩選條件
     */
    function updateFilter(updates: Partial<ContentFilter>): void {
        filter.value = {
            ...filter.value,
            ...updates
        };
    }

    /**
     * 清除篩選條件
     */
    function clearFilter(): void {
        filter.value = {
            ageGroups: [],
            formats: [],
            tags: [],
            searchText: ''
        };
    }

    /**
     * 選擇教材
     */
    function selectContent(contentId: string): void {
        if (!selectedContentIds.value.includes(contentId)) {
            selectedContentIds.value.push(contentId);
        }
    }

    /**
     * 取消選擇教材
     */
    function deselectContent(contentId: string): void {
        const index = selectedContentIds.value.indexOf(contentId);
        if (index >= 0) {
            selectedContentIds.value.splice(index, 1);
        }
    }

    /**
     * 切換教材選擇狀態
     */
    function toggleContentSelection(contentId: string): void {
        if (selectedContentIds.value.includes(contentId)) {
            deselectContent(contentId);
        } else {
            selectContent(contentId);
        }
    }

    /**
     * 選擇所有 (已篩選的) 教材
     */
    function selectAll(): void {
        selectedContentIds.value = filteredContents.value.map(c => c.id);
    }

    /**
     * 清除所有選擇
     */
    function clearSelection(): void {
        selectedContentIds.value = [];
    }

    // ==================== 持久化 ====================

    const STORAGE_KEY = 'study-game-kids-content-state';

    function saveState() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            selectedContentIds: selectedContentIds.value,
            filter: filter.value
        }));
    }

    function loadState() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                // 只有在 availableMetadata 初始化後才過濾，或者先暫存
                if (parsed.selectedContentIds) {
                    selectedContentIds.value = parsed.selectedContentIds;
                }
                if (parsed.filter) filter.value = parsed.filter;
            } catch (e) {
                console.error('Failed to load content state:', e);
            }
        }
    }

    /**
     * 清理無效的選擇（當檔案名稱變更後）
     */
    function validateSelection() {
        if (availableMetadata.value.length > 0) {
            const validIds = new Set(availableMetadata.value.map(m => m.id));
            selectedContentIds.value = selectedContentIds.value.filter(id => validIds.has(id));
        }
    }

    // 初始載入狀態
    loadState();

    // 監聽並儲存
    watch([selectedContentIds, filter], () => {
        saveState();
    }, { deep: true });

    // ==================== 返回狀態和方法 ====================

    return {
        // 狀態
        allContents,
        selectedContentIds,
        filter,
        loading,
        error,

        // 計算屬性
        filteredContents,
        selectedContents,
        availableTags,
        availableAgeGroups,
        availableFormats,

        // 方法
        initializeContents,
        loadFullContent,
        loadSelectedContents,
        loadContentFile,
        addContent,
        removeContent,
        updateFilter,
        clearFilter,
        selectContent,
        deselectContent,
        toggleContentSelection,
        selectAll,
        clearSelection
    };
});
