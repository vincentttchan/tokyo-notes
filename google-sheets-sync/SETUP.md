# Google Sheets 錢包備份設定

網站仍會先將每筆支出儲存在手機。此 Apps Script 只是第二重備份；離線時，網站會保留待同步工作並於恢復連線後重試。

## 一次性設定

1. 建立一個新的 Google Sheet，例如「Tokyo 2026 Expenses」。
2. 在試算表開啟「擴充功能 → Apps Script」。
3. 以本資料夾的 `Code.gs` 完整取代編輯器內容並儲存。
4. 在 Apps Script 左方開啟「專案設定 → 指令碼屬性」，新增：
   - 屬性：`SYNC_TOKEN`
   - 值：自行設定一段至少 24 個字元、只有你知道的同步碼。
5. 在函式選單選擇 `setup`，按「執行」並完成一次 Google 授權。
6. 選擇「部署 → 新增部署作業 → 網頁應用程式」：
   - 執行身分：我
   - 誰可以存取：任何人
7. 完成部署後，複製以 `/exec` 結尾的網頁應用程式網址。
8. 回到 Tokyo Notes 的「計算機／錢包 → Google Sheets 備份」，輸入該網址及相同同步碼，按「儲存並測試」。

## 更新 Apps Script

修改 `Code.gs` 後，請在「部署 → 管理部署作業」建立新版本。一般毋須更換網站內已保存的 `/exec` 網址。

## 私隱與復原

- Apps Script 網址和同步碼只存於目前瀏覽器的 `localStorage`，不會包含在網站的 JSON 匯出，也不會提交到 GitHub。
- Google Sheet 會以 Record ID 更新同一行；重試不會產生重複支出。
- 在網站刪除支出時，Google Sheet 對應行會標記為 `deleted`，不會直接清除，方便復原或稽核。
- 「清除全部本機資料」不會清空 Google Sheet。
