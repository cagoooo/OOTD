# OOTD · 智慧日系約會穿搭指南與提案系統 🇯🇵

> 參考 YouTube 穿搭企劃《夏天約會穿搭指南☀️ 這些細節女生很在意❓不費力穿出「日系感」的技巧大公開 🇯🇵 ft. 老辣妹》以及日本流行穿搭網站（.dot st / StyleHint / WEAR）精華，打造包含單品自由混搭、卡片 PNG 匯出、Gemini AI 穿搭顧問與氣溫感測的全功能 Web 應用。

🌐 **線上展示網址 (GitHub Pages)**：[https://cagoooo.github.io/OOTD/](https://cagoooo.github.io/OOTD/)  
📦 **GitHub 開源專案庫**：[https://github.com/cagoooo/OOTD](https://github.com/cagoooo/OOTD)

---

## 🌟 核心功能與升級亮點

1. **雙維度情境地圖 (Stage & Scenario Matrix)**：
   - **感情階段**：🌱 曖昧期 (1st Date) / 🌹 熱戀期與紀念日 (Anniversary)
   - **五大約會場合**：🎨 看展覽/美術館｜🛍️ 逛街購物｜🌿 公園散步/野餐｜🍷 高級餐廳晚宴｜🍸 夜間酒吧小酌
2. **🎨 Fitting Studio 自由混搭試穿工作台 (Mix & Match)**：
   - 自由組合上衣、下裝、鞋款與配件，實時計算「上挺下飄黃金比例得分 (0-100分)」與老辣妹短評。
3. **📸 日系雜誌風 PNG 卡片匯出 (Magazine Card Exporter)**：
   - 運用 Canvas 技術，一鍵匯出如 POPEYE / FUDGE 雜誌排版風格之日系約會 OOTD 穿搭卡片。
4. **🤖 Gemini 2.5 Flash Lite 智慧約會顧問 (AI Stylist Agent)**：
   - 嵌入 AI 對話框，輸入具體場合（如「34度去基隆夜市」）即時獲得專屬穿搭與破冰話題指南。
5. **☀️ 氣溫與天氣動態感測連動 (Weather & Temp Sync)**：
   - 15°C 至 38°C 動態氣溫滑桿，連動材質標籤（涼感/亞麻/多層次外套）推薦。
6. **📋 身型與膚色檢測問卷 (Body & Color Quiz)**：
   - 快速問卷為使用者標註專屬「🌟 完美推薦」徽章。
7. **📲 LINE / IG 社群一鍵複製 (Social Share)**：
   - 一鍵複製約會詢問文案（「我們那天去看展覽這樣穿好不好？✨」）。

---

## 📁 專案檔案結構

```
g:/Agent/OOTD/
├── index.html              # 主應用頁面 (包含 Fitting Studio, AI Agent, Modals)
├── css/
│   └── style.css           # 日系雜誌風格 CSS 設計系統 (RWD & 動畫)
├── js/
│   ├── data.js             # 穿搭資料庫 (場景、單品、混搭選單、材質與評分規則)
│   └── app.js              # 前端邏輯 (混搭計算、Canvas 匯出、Gemini AI、氣溫感測)
├── images/                 # AI 生成之日系男女約會情境精美形象照 (5張)
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions 自動部署工作流
├── rdq/
│   └── RDQ-spec-ootd-next-20260804.md  # RDQ 需求規格卡 (confirmed)
├── README.md               # 專案說明文件 (全繁體中文)
```

---

## 🚀 部署與版控

本專案使用 GitHub Actions CI/CD 流水線，每次更新自動部署至 `gh-pages` 分支並線上發布。
