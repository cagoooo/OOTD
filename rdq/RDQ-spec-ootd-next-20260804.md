---
rdq_version: 1
edition: chatgpt-app
task: OOTD 日系約會穿搭指南全套 P1 功能整合開發
domain: dev
date: 2026-08-04
status: confirmed
telemetry:
  mode: lite
  rounds: 1
  questions: 3
  q4_adopted: 6
  revisions: 1
downstream: self
---

# RDQ 需求規格：OOTD 智慧日系約會穿搭 P1 全功能開發

## 一句話任務
於 **g:/Agent/OOTD** 專案中完整建置與整合 P1 所有 6 大強化功能模組（單品混搭畫布、日系雜誌 PNG 匯出、Gemini 智慧約會顧問、氣溫動態調節、身型膚色檢測問卷、LINE/IG 社群一鍵分享）。

## 已確認需求 (P1 全功能開發範圍)
1. **單品自由混搭畫布 (Mix & Match Canvas)**：提供男女各自的上衣、下裝、鞋款與配件選搭選單，即時計算黃金比例得分（A字/上挺下飄/垂墜感）與點評。
2. **雜誌風 PNG 卡片匯出 (Magazine Card Exporter)**：整合 HTML Canvas 繪圖生成技術，一鍵導出日系雜誌風穿搭排版卡片。
3. **Gemini 2.5 Flash Lite 穿搭顧問 (AI Stylist Agent)**：嵌入智慧約會穿搭諮詢對話框，提供文字情境客製化提案與聊天開場白，遵守 API Key 金鑰安全佔位符與隔離規範。
4. **氣溫與天氣動態感測 (Weather & Temp Sync)**：提供 15°C 至 38°C 動態氣溫滑桿，連動材質標籤（涼感/亞麻/疊穿防風）與場合推薦。
5. **個人化身型與膚色檢測 (Body & Color Quiz)**：互動式問卷，完成後在所有單品清單上自動標註「🌟 完美推薦」與「⚠️ 避坑提醒」。
6. **LINE / IG 社群一鍵分享 (Social Share & OG)**：產生專屬問詢複製文案（「我們那天去看展覽這樣穿好不好？」）與社群預覽卡片。

## 寫作與美學規範
- 一律維護全繁體中文。
- 維持莫蘭迪質感配色、RWD 響應式佈局與現代微微動畫。
- 專案根目錄 README.md 與 walkthrough.md 隨之更新。

## 驗收條件
- [x] P1 所有 6 大功能於前端 index.html / app.js / style.css / data.js 完整實現。
- [x] 靜態伺服器 http://localhost:8080 正確運行且無控制台報錯。
- [x] 匯出 PNG 卡片、混搭畫布與 Gemini AI 諮詢均可流暢操作。
