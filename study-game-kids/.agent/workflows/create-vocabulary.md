---
description: 建立新的單字教材組 (Create a new vocabulary word set)
---

# 建立單字教材組

這是針對 `vocabulary` 格式教材的專用流程。

## 步驟

1. **收集單字資料**：
   - 準備單字、翻譯、發音及例句。

2. **設定檔案屬性**：
   - 設定適合的年齡層 (5, 10, 20)。
   - 思考階層標籤 (例如 `nature/weather`)。

3. **生成檔名**：
   - 範例：`[5][vocabulary][MyNewVocabulary][tag^sub+tag2].json`

// turbo
4. **執行建立指令**：
   使用 `write_to_file` 工具建立 JSON 檔案到 `public/contents/`。

## 檔案結構範例
```json
{
  "id": "my-vocab-unique-id",
  "title": "My Vocabulary Title",
  "ageGroup": "5",
  "format": "vocabulary",
  "tags": ["nature/weather"],
  "items": [
    {
      "word": "rain",
      "translation": "下雨",
      "pronunciation": "/reɪn/",
      "examples": ["It is raining today."]
    }
  ]
}
```
