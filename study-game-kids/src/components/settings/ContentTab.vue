<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useContentStore } from '~/stores/content.store';
import { AgeGroup, ContentFormat } from '~/types/content.types';

const { t } = useI18n();
const contentStore = useContentStore();

const selectedAgeGroups = computed({
  get: () => contentStore.filter.ageGroups || [],
  set: (value) => contentStore.updateFilter({ ageGroups: value })
});

const selectedFormats = computed({
  get: () => contentStore.filter.formats || [],
  set: (value) => contentStore.updateFilter({ formats: value })
});

const selectedTags = computed({
  get: () => contentStore.filter.tags || [],
  set: (value) => contentStore.updateFilter({ tags: value })
});

const searchText = computed({
  get: () => contentStore.filter.searchText || '',
  set: (value) => contentStore.updateFilter({ searchText: value })
});

const ageGroupOptions = [
  { title: t('settings.contentTab.ageGroup5'), value: AgeGroup.AGE_5 },
  { title: t('settings.contentTab.ageGroup10'), value: AgeGroup.AGE_10 },
  { title: t('settings.contentTab.ageGroup20'), value: AgeGroup.AGE_20 }
];

const formatOptions = [
  { title: t('formats.vocabulary'), value: ContentFormat.VOCABULARY },
  { title: t('formats.lyrics'), value: ContentFormat.LYRICS },
  { title: t('formats.story'), value: ContentFormat.STORY },
  { title: t('formats.quiz'), value: ContentFormat.QUIZ },
  { title: t('formats.mixed'), value: ContentFormat.MIXED }
];

/**
 * 動態標籤選項 - 根據已選年齡層和格式篩選
 */
const availableDynamicTags = computed(() => {
  // 先篩選符合年齡層和格式的內容
  let filteredContents = contentStore.allContents;
  
  if (selectedAgeGroups.value.length > 0) {
    filteredContents = filteredContents.filter(c => 
      selectedAgeGroups.value.includes(c.ageGroup)
    );
  }
  
  if (selectedFormats.value.length > 0) {
    filteredContents = filteredContents.filter(c => 
      selectedFormats.value.includes(c.format)
    );
  }
  
  // 收集這些內容的所有標籤
  const tags = new Set<string>();
  filteredContents.forEach(content => {
    content.tags.forEach(tag => tags.add(tag));
  });
  
  return Array.from(tags).sort();
});

/**
 * 標籤樹節點
 */
interface TagTreeNode {
  id: string;           // 用於唯一識別（parent 或 parent/child）
  label: string;        // 顯示文字
  value?: string;       // 完整值（只有葉節點有）
  children?: TagTreeNode[];
  isParent: boolean;
}

/**
 * 將扁平標籤轉換為樹狀結構
 */
const tagTree = computed<TagTreeNode[]>(() => {
  const tree: Map<string, TagTreeNode> = new Map();
  
  availableDynamicTags.value.forEach(tag => {
    const parts = tag.split('/');
    
    if (parts.length === 2) {
      // 階層標籤：parent/child
      const [parent, child] = parts;
      
      // 確保父節點存在
      if (!tree.has(parent)) {
        tree.set(parent, {
          id: parent,
          label: parent,
          children: [],
          isParent: true
        });
      }
      
      // 添加子節點
      const parentNode = tree.get(parent)!;
      if (!parentNode.children) {
        parentNode.children = [];
      }
      parentNode.children.push({
        id: tag,
        label: child,
        value: tag,
        isParent: false
      });
    } else {
      // 單層標籤
      if (!tree.has(tag)) {
        tree.set(tag, {
          id: tag,
          label: tag,
          value: tag,
          isParent: false
        });
      }
    }
  });
  
  return Array.from(tree.values()).sort((a, b) => a.label.localeCompare(b.label));
});

function toggleSelection(contentId: string) {
  contentStore.toggleContentSelection(contentId);
}

function isSelected(contentId: string): boolean {
  return contentStore.selectedContentIds.includes(contentId);
}

function toggleAgeGroup(value: AgeGroup) {
  const current = [...selectedAgeGroups.value];
  const index = current.indexOf(value);
  if (index >= 0) {
    current.splice(index, 1);
  } else {
    current.push(value);
  }
  selectedAgeGroups.value = current;
}

function toggleFormat(value: ContentFormat) {
  const current = [...selectedFormats.value];
  const index = current.indexOf(value);
  if (index >= 0) {
    current.splice(index, 1);
  } else {
    current.push(value);
  }
  selectedFormats.value = current;
}

function toggleTag(value: string) {
  const current = [...selectedTags.value];
  const index = current.indexOf(value);
  if (index >= 0) {
    current.splice(index, 1);
  } else {
    current.push(value);
  }
  selectedTags.value = current;
}

const ageGroupSummary = computed(() => {
  const count = selectedAgeGroups.value.length;
  return count > 0 ? `${count} ${t('settings.contentTab.selected')}` : t('settings.contentTab.ageGroups');
});

const formatSummary = computed(() => {
  const count = selectedFormats.value.length;
  return count > 0 ? `${count} ${t('settings.contentTab.selected')}` : t('settings.contentTab.formats');
});

const tagSummary = computed(() => {
  const count = selectedTags.value.length;
  return count > 0 ? `${count} ${t('settings.contentTab.selected')}` : t('settings.contentTab.tags');
});
</script>

<template>
  <div class="content-tab">
    <!-- Fixed Filter Bar -->
    <div class="filter-bar">
      <!-- Search -->
      <div class="filter-item search-item">
        <v-text-field
          v-model="searchText"
          :placeholder="$t('settings.contentTab.search')"
          variant="outlined"
          density="compact"
          hide-details
          clearable
          prepend-inner-icon="mdi-magnify"
          class="search-field"
        ></v-text-field>
      </div>

      <!-- Age Groups Menu -->
      <div class="filter-item">
        <v-menu :close-on-content-click="false">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              variant="outlined"
              :color="selectedAgeGroups.length > 0 ? 'primary' : 'default'"
              class="filter-btn"
            >
              <v-icon start>mdi-account-group</v-icon>
              {{ ageGroupSummary }}
              <v-icon end>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list density="compact">
            <v-list-item
              v-for="age in ageGroupOptions"
              :key="age.value"
              @click="toggleAgeGroup(age.value)"
            >
              <template v-slot:prepend>
                <v-icon :color="selectedAgeGroups.includes(age.value) ? 'primary' : ''">
                  {{ selectedAgeGroups.includes(age.value) ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}
                </v-icon>
              </template>
              <v-list-item-title>{{ age.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <!-- Formats Menu -->
      <div class="filter-item">
        <v-menu :close-on-content-click="false">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              variant="outlined"
              :color="selectedFormats.length > 0 ? 'primary' : 'default'"
              class="filter-btn"
            >
              <v-icon start>mdi-format-list-bulleted-type</v-icon>
              {{ formatSummary }}
              <v-icon end>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list density="compact">
            <v-list-item
              v-for="format in formatOptions"
              :key="format.value"
              @click="toggleFormat(format.value)"
            >
              <template v-slot:prepend>
                <v-icon :color="selectedFormats.includes(format.value) ? 'primary' : ''">
                  {{ selectedFormats.includes(format.value) ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}
                </v-icon>
              </template>
              <v-list-item-title>{{ format.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <!-- Tags Menu (Dynamic & Tree Structure) -->
      <div class="filter-item" v-if="tagTree.length > 0">
        <v-menu :close-on-content-click="false" max-height="400">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              variant="outlined"
              :color="selectedTags.length > 0 ? 'primary' : 'default'"
              class="filter-btn"
            >
              <v-icon start>mdi-tag-multiple</v-icon>
              {{ tagSummary }}
              <v-icon end>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list density="compact" max-height="400">
            <template v-for="node in tagTree" :key="node.id">
              <!-- Parent Node with Children -->
              <v-list-group v-if="node.isParent && node.children" :value="node.id">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" :title="node.label">
                    <template v-slot:prepend>
                      <v-icon>mdi-folder</v-icon>
                    </template>
                  </v-list-item>
                </template>
                
                <!-- Child Nodes -->
                <v-list-item
                  v-for="child in node.children"
                  :key="child.id"
                  @click="toggleTag(child.value!)"
                  class="child-item"
                >
                  <template v-slot:prepend>
                    <v-icon :color="selectedTags.includes(child.value!) ? 'primary' : ''">
                      {{ selectedTags.includes(child.value!) ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}
                    </v-icon>
                  </template>
                  <v-list-item-title>{{ child.label }}</v-list-item-title>
                </v-list-item>
              </v-list-group>
              
              <!-- Single Node (no children) -->
              <v-list-item
                v-else
                @click="toggleTag(node.value!)"
              >
                <template v-slot:prepend>
                  <v-icon :color="selectedTags.includes(node.value!) ? 'primary' : ''">
                    {{ selectedTags.includes(node.value!) ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}
                  </v-icon>
                </template>
                <v-list-item-title>{{ node.label }}</v-list-item-title>
              </v-list-item>
            </template>
          </v-list>
        </v-menu>
      </div>

      <!-- Clear Filters -->
      <div class="filter-item">
        <v-btn
          variant="text"
          color="secondary"
          @click="contentStore.clearFilter()"
          class="clear-btn"
        >
          <v-icon start>mdi-filter-remove</v-icon>
          {{ $t('settings.contentTab.clearFilters') }}
        </v-btn>
      </div>
    </div>

    <!-- Content List Section -->
    <div class="content-list-section">
      <div class="section-header">
        <div class="selection-summary">
          {{ $t('settings.contentTab.selected') }}: {{ contentStore.selectedContents.length }} / {{ contentStore.filteredContents.length }}
        </div>
        <div class="selection-actions">
          <v-btn 
            size="small" 
            variant="text" 
            @click="contentStore.selectAll()"
          >
            {{ $t('settings.contentTab.selectAll') }}
          </v-btn>
          <v-btn 
            size="small" 
            variant="text" 
            @click="contentStore.clearSelection()"
          >
            {{ $t('settings.contentTab.clearAll') }}
          </v-btn>
        </div>
      </div>

      <!-- Virtual Scroller for Large Lists -->
      <v-virtual-scroll
        :items="contentStore.filteredContents"
        height="500"
        item-height="80"
        class="content-list"
      >
        <template v-slot:default="{ item }">
          <div 
            class="content-item"
            :class="{ selected: isSelected(item.id) }"
            @click="toggleSelection(item.id)"
          >
            <div class="content-info">
              <h4 class="content-title">{{ item.title }}</h4>
              <div class="content-meta">
                <v-chip size="x-small" color="primary">{{ item.ageGroup }}+</v-chip>
                <v-chip size="x-small" color="secondary">{{ $t(`formats.${item.format}`) }}</v-chip>
                <v-chip 
                  v-for="tag in item.tags.slice(0, 2)" 
                  :key="tag"
                  size="x-small"
                  variant="outlined"
                >
                  {{ tag }}
                </v-chip>
              </div>
            </div>
          </div>
        </template>
      </v-virtual-scroll>

      <div v-if="contentStore.filteredContents.length === 0" class="empty-state">
        <p>{{ $t('settings.contentTab.noContent') }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-tab {
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
}

/* Fixed Filter Bar */
.filter-bar {
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 16px;
  background: var(--glass-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-md);
  flex-wrap: nowrap;
  overflow-x: auto;
  flex-shrink: 0;
}

.filter-item {
  flex-shrink: 0;
}

.search-item {
  min-width: 300px;
  flex-shrink: 1;
}

.search-field {
  background: var(--input-bg);
  border-radius: 12px;
  color: var(--text-primary);
}

.filter-btn {
  text-transform: none;
  font-weight: 700;
  white-space: nowrap;
  font-size: var(--font-size-sm);
  height: 44px !important;
  border-radius: 12px !important;
}

.clear-btn {
  text-transform: none;
  font-weight: 600;
  font-size: var(--font-size-sm);
}

/* Content List Section */
.content-list-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 8px;
}

.selection-summary {
  font-weight: 700;
  font-size: var(--font-size-base);
  color: var(--accent-primary);
}

.selection-actions {
  display: flex;
  gap: 12px;
}

.content-list {
  flex: 1;
  background: var(--glass-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-lg);
  padding: 16px;
}

.content-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  margin-bottom: 12px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.content-item:hover {
  transform: translateX(8px);
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--accent-primary);
}

.content-item.selected {
  border-color: var(--accent-primary);
  background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%);
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.3);
}

.content-item.selected .content-title,
.content-item.selected .stat-label,
.content-item.selected .body-text {
  color: white !important;
}

.content-info {
  flex: 1;
}

.content-title {
  font-size: var(--font-size-lg);
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.content-meta {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.empty-state {
  text-align: center;
  padding: 60px;
  color: var(--text-secondary);
  font-size: var(--font-size-lg);
}

/* Tag Tree Styles */
.child-item {
  padding-left: 32px !important;
}

/* Vuetify Overrides for Theme Sync */
:deep(.v-field) {
  background: var(--input-bg) !important;
  color: var(--text-primary) !important;
}

:deep(.v-list) {
  background: var(--card-bg) !important;
  color: var(--text-primary) !important;
}

:deep(.v-chip) {
  font-weight: 700 !important;
}
</style>
