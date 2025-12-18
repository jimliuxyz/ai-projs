# Vue 3 CDN Demo

此專案為最小化的 Vue 3 Demo，透過 CDN 載入 Vue 3，方便直接在 GitHub Pages 部署。

## 純前端執行方式
- 只需在瀏覽器開啟 `index.html` 即可看到畫面（不需要安裝 Node/npm）。
- 檔案結構非常簡單，適合快速上手與佈署。

## 專案內容
- `index.html`：包含 Vue 3 CDN 引入與簡易元件。

## 在 GitHub Pages 部署步驟
1) 建立 GitHub 儲存庫，例如 `https://github.com/your-username/your-repo`。
2) 將本專案推送到該儲存庫（建議使用 main 分支，或根目錄的 docs 資料夾）
   - 新增 git 建立與提交：
     - `git init`
     - `git add .`
     - `git commit -m "feat: scaffold Vue 3 CDN demo"`
   - 設定遠端：`git remote add origin https://github.com/your-username/your-repo.git`
   - 推送：`git push -u origin main`
3) 在 GitHub 儲存庫設定中啟用 Pages，來源選擇 main 分支的根目錄（或 /docs）
4) 完成後的網站 URL 會是 `https://your-username.github.io/your-repo/`

## 後續升級建議
- 若需要完整的本地開發與打包流程，建議採用 Vite + Vue 3 的專案骨架，方便後續自動化佈署與優化效能。
- 我可以幫你把此專案轉換成 Vite 專案，並設定 GitHub Pages 自動佈署（透過 gh-pages 或 GitHub Actions）。
