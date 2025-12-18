# Vue 3 + Vite + GitHub Pages (Deploy via gh-pages)

本專案為一個完整的 npm 專案，使用 Vue 3 與 Vite，並提供一鍵部署至 GitHub Pages 的流程。

## 基本使用
- 在專案根目錄執行 `npm install` 安裝套件。
- 開發：`npm run dev`
- 建構：`npm run build`
- 本地預覽：`npm run preview`

## 部署到 GitHub Pages
1) 在 GitHub 建立一個新的倉庫，例如：`https://github.com/your-username/vue3-npm-ghpages-demo`
2) 將專案推送到遠端（建議使用 main 分支）
3) 首次推送後，於倉庫設定中啟用 GitHub Pages，來源選擇 gh-pages 分支，根目錄即可
4) 執行部署：`npm run deploy`
   - 此指令會先執行建構，產物放在 `dist/`，再推送到遠端的 `gh-pages` 分支。

> 注意：要先將 package.json 的 homepage 與 repository 配置為實際的 GitHub 倉庫位址，`gh-pages` 也必須能連線到該 repo。

## 後續升級建議
- 若需要完整的單頁路由與元件組合，可以往 `src/components` 擴充。
- 若你要把部屬架構改成自動化（CI/CD），可以考慮在 GitHub Actions 使用 `actions/setup-node` 與 `peaceiris/actions-gh-pages` 進行自動佈署。
