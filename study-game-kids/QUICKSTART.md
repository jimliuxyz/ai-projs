# 🚀 快速開始指南

## 👋 歡迎使用 Study Game Kids

這是一個為兒童設計的互動學習遊戲平台，具有商業級架構和完整的型別安全。

---

## 📦 安裝

\`\`\`bash
# 1. 克隆或進入專案目錄
cd study-game-kids

# 2. 安裝依賴
npm install

# 3. 啟動開發伺服器
npm run dev

# 4. 打開瀏覽器訪問
# http://localhost:5174 (或終端機顯示的 URL)
\`\`\`

---

## 🎮 第一次使用

### 步驟 1: 打開設定
點擊首頁的 **⚙️ Settings** 按鈕

### 步驟 2: 選擇教材
1. 在 **Content** 標籤頁
2. 選擇你想要的教材 (可多選)
3. 例如選擇 "Basic Animals" 和 "Colors Quiz"

### 步驟 3: 調整設定 (可選)
- **Voice** 標籤: 調整語音設定
- **Game** 標籤: 選擇難度等級

### 步驟 4: 開始學習
1. 點擊 **Done** 關閉設定
2. 點擊 **▶️ Start Learning**
3. 開始答題！

---

## 📚 新增自己的教材

### 基本格式

在 `public/contents/` 目錄下創建新的 JSON 檔案。

#### 檔名格式
\`\`\`
[年齡層]_[格式]_[標籤]_[編號].json
\`\`\`

範例檔名:
- `5_vocabulary_fruits_001.json`
- `10_quiz_history_001.json`

### 單字教材範例

\`\`\`json
{
  "id": "vocab-fruits-001",
  "title": "Common Fruits",
  "ageGroup": "5",
  "format": "vocabulary",
  "tags": ["fruits", "food"],
  "createdAt": "2026-01-29T00:00:00.000Z",
  "updatedAt": "2026-01-29T00:00:00.000Z",
  "items": [
    {
      "word": "apple",
      "translation": "蘋果",
      "pronunciation": "/ˈæp.əl/",
      "examples": [
        "I eat an apple every day.",
        "This apple is red."
      ]
    },
    {
      "word": "banana",
      "translation": "香蕉",
      "pronunciation": "/bəˈnɑː.nə/",
      "examples": [
        "Bananas are yellow.",
        "Monkeys like bananas."
      ]
    }
  ]
}
\`\`\`

### 選擇題教材範例

\`\`\`json
{
  "id": "quiz-math-001",
  "title": "Basic Math",
  "ageGroup": "5",
  "format": "quiz",
  "tags": ["math", "numbers"],
  "createdAt": "2026-01-29T00:00:00.000Z",
  "updatedAt": "2026-01-29T00:00:00.000Z",
  "items": [
    {
      "question": "What is 2 + 2?",
      "options": [
        { "text": "3", "isCorrect": false },
        { "text": "4", "isCorrect": true },
        { "text": "5", "isCorrect": false }
      ],
      "explanation": "2 + 2 = 4"
    }
  ]
}
\`\`\`

### 載入新教材

在 `src/App.vue` 的 `onMounted` 中新增:

\`\`\`typescript
await contentStore.loadContentFile('/contents/你的檔名.json');
\`\`\`

---

## 🎯 常見任務

### 修改難度
1. 開啟設定 → Game 標籤
2. 選擇 Easy / Medium / Hard

### 調整語音
1. 開啟設定 → Voice 標籤
2. 調整語速、音調、音量
3. 點擊 "Test Voice" 測試

### 篩選教材
1. 開啟設定 → Content 標籤
2. 使用年齡層、格式、標籤篩選
3. 或使用搜尋框

---

## 🐛 常見問題

### Q: 為什麼點擊開始沒有反應?
A: 請確認你已經在設定中選擇至少一個教材。

### Q: 語音不播放?
A: 檢查瀏覽器是否允許音頻自動播放，並確認 Voice 設定已啟用。

### Q: 教材沒有顯示?
A: 確認:
1. JSON 格式正確
2. 檔案放在 `public/contents/` 目錄
3. 在 App.vue 中已註冊載入

### Q: 如何重置所有設定?
A: 設定對話框底部有 "Reset All" 按鈕。

---

## 🔧 開發相關

### 專案結構速覽
\`\`\`
study-game-kids/
├── src/
│   ├── types/          # 型別定義
│   ├── game-core/      # 遊戲引擎
│   ├── adapters/       # 教材適配器
│   ├── games/          # 遊戲實作
│   ├── stores/         # 狀態管理
│   ├── components/     # UI 組件
│   └── views/          # 頁面視圖
└── public/
    └── contents/       # 教材檔案
\`\`\`

### 可用指令
\`\`\`bash
npm run dev      # 開發模式
npm run build    # 建置生產版本
npm run preview  # 預覽生產版本
\`\`\`

### 開發工具
- Vue DevTools (瀏覽器擴充功能)
- TypeScript Language Service
- Vite HMR (熱模組替換)

---

## 📖 深入學習

想要更深入了解系統架構?

- 閱讀 [ARCHITECTURE.md](./ARCHITECTURE.md) - 完整架構文件
- 閱讀 [README.md](./README.md) - 專案說明

---

## 💡 提示

### 最佳實踐
1. ✅ 定期備份你的教材檔案
2. ✅ 使用有意義的檔名和 ID
3. ✅ 為教材添加適當的標籤
4. ✅ 測試教材在不同難度下的表現

### 教材設計建議
1. **年齡適當**: 確保內容符合目標年齡層
2. **漸進式**: 由簡入深安排教材
3. **多樣化**: 混合不同類型的內容
4. **有趣**: 使用吸引人的範例和圖片

---

## 🎉 開始創作吧！

現在你已經準備好創建自己的學習內容了。祝你玩得開心！

**記住**: 這個平台的目標是讓學習變得有趣和有效。盡情發揮創意！
