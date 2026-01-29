---
description: 建立新的教材檔案 (Create a new content file)
---

# 建立新教材流程

請提供教材的標題、年齡層、格式、標籤以及內容。

## 步驟

1. **確定元數據**：
   - 標題 (Title): 例如 "Fruits"
   - 年齡層 (Age): 例如 "5"
   - 格式 (Format): 例如 "vocabulary"
   - 標籤 (Tags): 例如 `["food/fruits", "basic"]`

2. **轉換為檔名**：
   - 使用 `[Age][Format][PascalTitle][Tags].json` 格式。
   - 標籤中的 `/` 轉為 `^`，多個標籤用 `+` 連接。
   - 例如：`[5][vocabulary][Fruits][food^fruits+basic].json`

3. **建立檔案內容**：
   遵循 `src/types/content.types.ts` 中的介面定義。

4. **寫入檔案**：
   將檔案儲存至 `public/contents/` 目錄。

## 範例模板 (Vocabulary)
```json
{
  "id": "隨機或具描述性的ID",
  "title": "標題",
  "ageGroup": "5",
  "format": "vocabulary",
  "tags": ["food/fruits", "basic"],
  "createdAt": "當前 ISO 時間",
  "updatedAt": "當前 ISO 時間",
  "items": [
    { "word": "apple", "translation": "蘋果", "pronunciation": "/ˈæp.əl/" }
  ]
}
```
