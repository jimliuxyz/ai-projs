# Study Game Kids - 專案架構文件

## 📋 專案概述

**Study Game Kids** 是一個結構化的兒童學習遊戲平台，專為商業化設計。

### 核心特色
- ✅ 強型別系統 (TypeScript strict mode)
- ✅ 統一遊戲核心 (game-core)
- ✅ 智慧適配器系統 (adapters)
- ✅ 結構化教材管理
- ✅ 彈性設定系統
- ✅ 響應式設計

---

## 🏗️ 專案結構

\`\`\`
study-game-kids/
│
├── src/
│   │
│   ├── types/                          # 型別定義 (核心架構)
│   │   ├── content.types.ts           # 教材系統型別
│   │   │   • AgeGroup (5/10/20)
│   │   │   • ContentFormat (vocabulary/lyrics/story/quiz/mixed)
│   │   │   • VocabularyContent, LyricsContent, StoryContent, QuizContent
│   │   │   • ContentFilter (篩選條件)
│   │   │
│   │   ├── game.types.ts              # 遊戲系統型別
│   │   │   • GameState (idle/loading/ready/playing/paused/finished)
│   │   │   • GameDifficulty (easy/medium/hard)
│   │   │   • IGame (遊戲介面)
│   │   │   • GameDataItem (標準化遊戲資料)
│   │   │   • IContentAdapter (適配器介面)
│   │   │
│   │   └── settings.types.ts          # 設定系統型別
│   │       • VoiceSettings (語音設定)
│   │       • ContentSettings (教材設定)
│   │       • GameSettings (遊戲設定)
│   │       • AppSettings (應用設定)
│   │
│   ├── game-core/                     # 遊戲核心引擎
│   │   └── BaseGame.ts                # 基礎遊戲類別
│   │       • 生命週期管理 (init/start/pause/resume/stop/reset)
│   │       • 狀態管理
│   │       • 結果計算
│   │       • 事件系統
│   │
│   ├── adapters/                      # 內容適配器
│   │   └── content-adapters.ts
│   │       • BaseContentAdapter       # 基礎適配器
│   │       • VocabularyAdapter        # 單字適配器
│   │       • LyricsAdapter            # 歌詞適配器
│   │       • StoryAdapter             # 故事適配器
│   │       • QuizAdapter              # 選擇題適配器
│   │       • UniversalAdapter         # 通用適配器
│   │
│   ├── games/                         # 遊戲實作
│   │   └── QuestionListGame.ts        # 題目清單遊戲
│   │       • 繼承 BaseGame
│   │       • 答案提交
│   │       • 跳過功能
│   │       • 提示系統
│   │       • 音訊播放
│   │
│   ├── stores/                        # 狀態管理 (Pinia)
│   │   ├── settings.store.ts          # 設定管理
│   │   │   • 語音設定
│   │   │   • 教材設定
│   │   │   • 遊戲設定
│   │   │   • 持久化 (localStorage)
│   │   │
│   │   └── content.store.ts           # 教材管理
│   │       • 載入教材
│   │       • 篩選教材
│   │       • 選擇教材
│   │       • 教材 CRUD
│   │
│   ├── components/                    # Vue 組件
│   │   ├── SettingsDialog.vue         # 設定對話框
│   │   └── settings/
│   │       ├── ContentTab.vue         # 教材設定頁
│   │       ├── VoiceTab.vue           # 語音設定頁
│   │       └── GameTab.vue            # 遊戲設定頁
│   │
│   ├── views/                         # 頁面視圖
│   │   └── QuestionListView.vue       # 遊戲視圖
│   │
│   ├── App.vue                        # 主應用組件
│   ├── main.ts                        # 應用入口點
│   └── style.css                      # 全域樣式
│
├── public/
│   └── contents/                      # 教材檔案
│       ├── 5_vocabulary_animals_basic_001.json
│       ├── 5_quiz_colors_basic_001.json
│       └── 5_vocabulary_numbers_counting_basic_001.json
│
└── 配置檔案
    ├── package.json
    ├── vite.config.ts
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── .gitignore
\`\`\`

---

## 🎯 核心系統說明

### 1. 教材系統

#### 檔名規範
\`\`\`
[年齡層]_[內容格式]_[標籤1]_[標籤2]..._[編號].json
\`\`\`

範例:
- `5_vocabulary_animals_colors_001.json`
- `10_quiz_science_math_001.json`
- `20_story_adventure_fantasy_001.json`

#### 教材格式

**Vocabulary (單字)**
\`\`\`typescript
{
  word: string;
  translation: string;
  pronunciation?: string;
  examples?: string[];
  audioUrl?: string;
  imageUrl?: string;
}
\`\`\`

**Quiz (選擇題)**
\`\`\`typescript
{
  question: string;
  options: Array<{
    text: string;
    isCorrect: boolean;
  }>;
  explanation?: string;
  audioUrl?: string;
}
\`\`\`

**Lyrics (歌詞)**
\`\`\`typescript
{
  text: string;
  translation?: string;
  startTime?: number;
  endTime?: number;
}
\`\`\`

**Story (故事)**
\`\`\`typescript
{
  text: string;
  translation?: string;
  audioUrl?: string;
}
\`\`\`

### 2. 遊戲核心 (Game Core)

#### BaseGame 生命週期
\`\`\`
┌─────────┐
│  IDLE   │ ← reset()
└────┬────┘
     │ init(data)
     ▼
┌─────────┐
│ LOADING │
└────┬────┘
     │
     ▼
┌─────────┐
│  READY  │ ◄──┐
└────┬────┘    │ pause/resume
     │ start() │
     ▼         │
┌─────────┐    │
│ PLAYING │────┘
└────┬────┘
     │ stop()
     ▼
┌──────────┐
│ FINISHED │
└──────────┘
\`\`\`

#### 實作新遊戲
\`\`\`typescript
export class MyGame extends BaseGame {
  readonly id = 'my-game';
  readonly name = 'My Game';
  readonly description = 'Description';
  readonly icon = '🎮';
  readonly supportedFormats = ['vocabulary', 'quiz'];

  protected override onStart(): void {
    // 遊戲開始邏輯
  }
}
\`\`\`

### 3. 適配器系統 (Adapters)

#### 資料流程
\`\`\`
Content (JSON)
    ↓
[ContentAdapter]
    ↓
GameDataItem (統一格式)
    ↓
Game (遊戲使用)
\`\`\`

#### 標準化遊戲資料格式
\`\`\`typescript
interface GameDataItem {
  id: string;
  question: string;
  answer: string;
  options?: string[];
  hint?: string;
  audioUrl?: string;
  imageUrl?: string;
  metadata?: Record<string, unknown>;
}
\`\`\`

#### 使用適配器
\`\`\`typescript
const adapter = new UniversalAdapter();
const gameData = adapter.merge(contents, settings);
\`\`\`

### 4. 設定系統

#### 三層設定架構
1. **Content Settings** (教材設定)
   - 篩選條件
   - 選擇的教材
   - 自動載入設定

2. **Voice Settings** (語音設定)
   - TTS 引擎
   - 語言
   - 語速、音調、音量

3. **Game Settings** (遊戲設定)
   - 難度
   - 音效/音樂
   - 計時器/分數顯示

---

## 🔌 擴展指南

### 新增遊戲

1. 創建遊戲類別 (繼承 BaseGame)
\`\`\`typescript
// src/games/MyNewGame.ts
import { BaseGame } from '~/game-core/BaseGame';

export class MyNewGame extends BaseGame {
  readonly id = 'my-new-game';
  readonly name = 'My New Game';
  readonly description = 'A new amazing game';
  readonly icon = '🎲';
  readonly supportedFormats = ['vocabulary'];

  protected override onStart(): void {
    // 實作遊戲邏輯
  }
}
\`\`\`

2. 創建遊戲視圖組件
\`\`\`vue
<!-- src/views/MyNewGameView.vue -->
<script setup lang="ts">
import { MyNewGame } from '~/games/MyNewGame';
// ...
</script>
\`\`\`

3. 在 App.vue 中註冊

### 新增教材格式

1. 在 `content.types.ts` 定義型別
2. 在 `content-adapters.ts` 創建適配器
3. 更新 UniversalAdapter

### 新增設定項目

1. 在 `settings.types.ts` 定義型別
2. 在對應的 Store 中新增狀態
3. 在設定 Tab 中新增 UI

---

## 🎨 設計原則

### 1. 型別安全
- 所有代碼使用 TypeScript strict mode
- 明確的介面定義
- 避免 `any` 型別

### 2. 模組化
- 單一職責原則
- 清晰的模組邊界
- 易於測試

### 3. 可擴展性
- 使用介面和抽象類別
- 插件式架構
- 最小化耦合

### 4. 易維護性
- 清晰的命名
- 完整的註解
- 一致的代碼風格

---

## 🚀 未來發展方向

### 短期目標
- [ ] 增加更多遊戲類型
- [ ] 教材編輯器
- [ ] 進度追蹤
- [ ] 成就系統

### 中期目標
- [ ] 使用者認證
- [ ] 雲端同步
- [ ] 社群功能
- [ ] 教材市場

### 長期目標
- [ ] AI 個人化學習
- [ ] 多人對戰
- [ ] VR/AR 支援
- [ ] 教育機構版本

---

## 📝 開發備註

### 關鍵決策記錄

1. **為什麼選擇 Pinia 而不是 Vuex?**
   - 更好的 TypeScript 支援
   - 更簡潔的 API
   - 自動 devtools 整合

2. **為什麼使用適配器模式?**
   - 解耦教材格式和遊戲邏輯
   - 易於新增教材類型
   - 統一的資料介面

3. **為什麼選擇 Vuetify?**
   - 成熟的組件庫
   - Material Design
   - 響應式設計支援
   - 快速開發

### 效能考量
- 教材懶加載
- 組件懶載入
- 虛擬滾動 (大量教材列表)
- 圖片優化

### 安全性
- 輸入驗證
- XSS 防護
- CSRF 防護 (如有後端)
- 安全的儲存機制

---

## 📞 聯絡資訊

如有問題或建議，請聯繫開發團隊。

**專案版本**: 1.0.0  
**最後更新**: 2026-01-29
