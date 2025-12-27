# 🚗 3D 車輛物理引擎專案 - 部署指南

## 快速部署

專案已完成測試，車輛物理引擎運作正常。執行以下命令即可部署到 GitHub Pages：

```bash
cd c:\projects\ai-projs\car-physics-demo
npm run deploy
```

## 部署後訪問

```
https://jimliuxyz.github.io/ai-projs/
```

## 首次部署注意事項

如果是第一次部署，需要在 GitHub repository 設定中：
1. 進入 Settings → Pages
2. Source 選擇 `gh-pages` 分支
3. 點擊 Save

## 本地測試

當前開發伺服器運行於：
```
http://localhost:5186/ai-projs/
```

## 控制說明

- **W / ↑** - 前進（可達 120+ km/h）
- **S / ↓** - 後退
- **A / ←** - 左轉
- **D / →** - 右轉
- **空白鍵** - 煞車

## 物理參數（已調校）

- 驅動力：30000N
- 摩擦係數：0.01
- 車身質量：500kg
- 線性阻尼：0.1

所有功能已測試通過 ✅
