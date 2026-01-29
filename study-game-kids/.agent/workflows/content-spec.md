---
description: 教材檔案命名規範與解析規則 (Content file naming conventions and parsing rules)
---

# 教材檔案命名規範

教材檔案採用方括號標記法，直接在檔案名稱中嵌入元數據，實現零成本加載。

## 格式
`ageGroup[format][title][tags].json`

## 規則
1. **[ageGroup]**: 數字表示 (例如 `5`, `10`, `20`)。
2. **[format]**: 格式類型 (`vocabulary`, `lyrics`, `story`, `quiz`, `mixed`)。
3. **[title]**: PascalCase 標題 (例如 `BasicAnimals`)，顯示時會自動轉為帶空格的名稱 (`Basic Animals`)。
4. **[tags]**: 
   - 使用 `^` 表示父子層級 (例如 `animals^mammals`)。
   - 使用 `+` 分隔多個標籤 (例如 `animals^pets+beginners`)。

## 範例
`5[vocabulary][BasicAnimals][animals^basic+beginners].json`

## 自動處理
系統會自動從檔名解析標題和標籤，無需讀取檔案內容即可在列表顯示。
