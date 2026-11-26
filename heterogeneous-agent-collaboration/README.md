# Heterogeneous Agent Collaboration Skill

此目錄提供可跨專案使用的 Skill 原始檔。它支援有授權時的任務收斂、模型選擇、階段派工與驗收；不自行賦予派工、資源或操作授權。

## 版本與完整性

- 來源版本：委派決策與資源選擇修訂快照；尚未正式指定版本號或 Git tag。
- 日期：2026-11-26（Asia/Taipei）。
- `heterogeneous-agent-collaboration/SKILL.md` SHA-256：`9e4087192611d1cc72bb50e4b0d72ef8425b5ee94f4a810a9075e438dc922376`。
- 本目錄依 Repository 的 [CC BY 4.0 授權](../LICENSE)提供；內部驗證原始紀錄不包含於此。

## 安裝與使用

在支援 Codex filesystem skills 的環境，將 `heterogeneous-agent-collaboration` 資料夾放入該環境的 `$CODEX_HOME/skills`；未設定時使用使用者的 `~/.codex/skills`。若目標已存在，先比較內容並保留既有修改；新 Session 是否發現應以實測確認。

當工作涉及多階段、可獨立驗收子任務、異質模型或多智能體協作，評估後按需使用；也可明確呼叫 `$heterogeneous-agent-collaboration`。簡單已收斂任務可直接完成。依當前 runtime 的權限、工具與模型清單操作；不同主機的路徑和設定不應假設相同。

建議全域 AGENTS.md 指引：當任務涉及多階段工作、可獨立驗收的子任務、異質模型派工或多智能體協作時，應評估並按需使用此 Skill。簡單且已充分收斂的任務，不應為使用 Skill 而增加管理層級。

## 驗證狀態

詳見 [VALIDATION.md](VALIDATION.md)。新 Session 完整載入及可觀察的異質派工尚未通過驗收；目前沒有量化成本改善的證據。
