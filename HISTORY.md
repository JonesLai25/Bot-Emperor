# 從工程憲章到 Bot 治理框架

## 歷史範圍與證據

這份歷史以可查閱的正式規範、公開 Repository 資訊及既有工程紀錄重建。現有證據可確認部分工程問題與後續處置，卻不足以重建每一條原則的首次提出日期、完整討論順序或唯一成因。因此以下按工程問題的主題連貫敘述，不把文件編號順序當成時間線，也不把品牌故事當作真實事件紀錄。

公開資料不包含私人工作階段、原始對話、私有程式碼、主機名稱、私人路徑、IP 位址、客戶或公司資訊、認證資料。可取得的紀錄沒有可靠的工時、金額、Token 用量或返工時數，故不填入數字，也不宣稱已量得治理效益。

## 目標環境不能只留在派工者心中

一項工程工作明確指定 WSL2 Ubuntu 為目標環境，但執行過程在 Windows Host 留下了該工作產生的臨時筆記、腳本及驗收產物。後續盤點找不到模型或推論工具安裝於 Windows，確認沒有修改 Windows 安裝或服務，並移除了四個可確認屬於該工作的檔案。這些證據支持「工作產物曾偏離指定環境」及「事後完成範圍明確的清理」；不支持「已在 Windows 完成部署」，也不能單獨確定偏差的全部成因或每個參與者的責任。

這項紀錄提供一個具體的治理檢驗問題：當任務被拆分或轉交時，目標、環境、授權及驗收條件是否仍然可見、可取得且有效？它與 G01、G02、G13、G15 的目標一致及上下文要求相呼應，但現有紀錄不能證明任何單一條原則就是該事件後才創立。

## 未知結果不能靠逾時推定

另一項工程紀錄指出，一個恢復流程可能在工作結果仍未知時，僅因時間到期便清除相應的資源保留紀錄。修正方式是把期限當作需要對帳的提示；先取得可信狀態，再明確釋放保留，並保留未知工作的證據。這項修正處理了「到期」與「工作是否已完成」不能互相代替的問題。

此案例是 P09–P12、P16 與故障恢復交互作用的實際反例及修正紀錄。它支持狀態必須如實標成未知、恢復前應保留證據並重新驗證的工程教訓。現有紀錄沒有提供可靠的發生日期、成本數字或可普遍化的系統效益，因此不據此推論其他工作流程已安全。

## 從個體工程行為到組織協作

本專案採用的通用工程憲章 P01–P23，涵蓋減少不必要人工中繼、分辨程序成功與需求驗收、定義可證偽條件、保存故障證據、限制權限、在授權階段內自主工作，以及依效益停止。通用專案治理原則 G01–G15 則處理多層級協作中的共同目標、上下文交接、分層自治、例外介入、方向校準、同層協作、決策沉澱與最小充分上下文。

這兩組文本共同呈現由工程行為規範延伸至組織協作規範的框架結構。現有版本資料能確認兩組規範目前並列適用，不能證明各條原則的實際起草先後、某次事故與條文形成之間的直接因果，或框架已經降低多少返工。跨 Agent 上下文遺失、局部阻塞後的整體停擺、過度回報及人工介入、過度搜尋與驗證、權責不對稱等均是文件及調研中提出的工程問題；除上文列明且有紀錄支持的案例外，本文件不把它們描述為已逐一查證的事件。

## 規範來源與版本差異

本專案的繁體中文正式規範以本機正式《AI 通用工程憲章 v1.1》為來源，該檔案 SHA-256 為 `CA766AE38B4477F964A75CE3B290698C5268822708D1AA0992420073E74AA21D`；組織治理原則採用通用專案治理原則 v1.0。兩份全文已整合於 [GOVERNANCE.md](GOVERNANCE.md)，並附不擴張條文的英文翻譯。

既有公開 [AI-Engineering-Constitution Repository](https://github.com/JonesLai25/AI-Engineering-Constitution) 保留其獨立性及歷史價值。本次來源核對發現，公開樹中的同標 v1.1 檔案與本機通用版措辭及內容範圍不同，公開樹亦未見 G01–G15 的完整文本。沒有找到能證明此版本差異之意圖或正式調和決策的紀錄，因此本專案採用本次提供並核對的本機正式版本，不拼接兩種文本，也不回寫既有 Repository。差異詳見 [GOVERNANCE.md](GOVERNANCE.md)。

## 未能由現有紀錄證實的部分

- P01–P23 及 G01–G15 各自首次提出、修改及核准的日期與完整版本順序。
- 除前述兩項工程紀錄以外，調研草稿提及的每一項失敗、部署偏差、責任爭議或返工事件。
- 任何精確時間、金額、Token 消耗、返工比例、人工介入幅度或治理前後差異。
- 原則導入對 Agent 實際行為、工程結果或總體成本的因果效果。

這些未知事項不以推測補齊。後續若取得可公開且經去識別化的原始證據，可增補可追溯的事件；不得將私人調研材料或完整對話直接放入公開 Repository。

---

# From Engineering Principles to Bot Governance

## Scope and evidence

This history is reconstructed from available formal texts, public repository information, and existing engineering records. The evidence confirms some engineering problems and subsequent handling, but it does not establish the first proposal date, complete discussion order, or unique cause of every principle. The account is organized by connected engineering problems, not by principle number or an invented chronology. The project’s theatrical brand story is not presented as a factual incident report.

The public account excludes private sessions, raw conversations, private source code, hostnames, private paths, IP addresses, customer or company information, and credentials. Available records do not provide reliable hours, money, token usage, or rework duration, so this history reports no such figures and makes no measured claim of governance effectiveness.

## The target environment must survive handoffs

One engineering task explicitly targeted WSL2 Ubuntu, but temporary notes, scripts, and acceptance artifacts produced by that task were left on the Windows host. A later audit found no model or inference tool installed on Windows, confirmed that no Windows installation or service had been changed, and removed four files confirmed to belong to the task. The evidence supports that some artifacts drifted from the requested environment and that a bounded cleanup followed. It does not support a claim that deployment was completed on Windows, nor does it establish every cause or participant’s responsibility.

This record supplies a concrete governance question: when work is decomposed or handed off, do its goal, environment, authorization, and acceptance conditions remain visible, accessible, and current? It connects to G01, G02, G13, and G15, but the evidence does not prove that any one of those principles was created after this incident.

## An unknown outcome cannot be inferred from a timeout

Another engineering record describes a recovery workflow that could clear a corresponding resource reservation merely because time had expired while the work outcome was still unknown. The correction treated expiry as a prompt to reconcile state: obtain an authoritative status, explicitly release the reservation only afterward, and retain evidence of the unknown work. This addressed the fact that elapsed time and completion are not interchangeable.

This is an actual counterexample and correction relevant to P09–P12, P16, and their recovery interactions. It supports preserving an unknown state, retaining evidence, and re-verifying before recovery. The record does not provide a reliable date or cost, and it does not establish that other workflows are safe.

## From individual engineering behavior to organizational collaboration

The general engineering constitution P01–P23 used by this project addresses unnecessary human relays, the distinction between process success and acceptance, falsifiable conditions, failure evidence, permission boundaries, autonomy within an authorized stage, and stopping when additional work has no value. The general project governance principles G01–G15 address shared goals, handoff context, layered autonomy, exception handling, direction alignment, peer coordination, decision retention, and minimum sufficient context across organizational levels.

Together, the texts form a framework that covers both engineering behavior and organizational collaboration. Available versions confirm that the two sets currently apply together; they do not establish the drafting order of every principle, a direct causal link between each incident and each rule, or a measured reduction in rework. Context loss across agents, global stalls after local blocks, excess reporting and human intervention, over-searching and over-verification, and mismatched responsibility and authority appear as engineering questions in the texts and research draft. Except for the sourced cases above, this history does not present them as individually verified events.

## Source versions and differences

The Traditional Chinese normative source used here is the local formal *AI General Engineering Constitution v1.1*, SHA-256 `CA766AE38B4477F964A75CE3B290698C5268822708D1AA0992420073E74AA21D`. Organizational governance uses *General Project Governance Principles v1.0*. Both complete texts appear in [GOVERNANCE.md](GOVERNANCE.md), with an English translation that does not broaden the rules.

The existing public [AI-Engineering-Constitution repository](https://github.com/JonesLai25/AI-Engineering-Constitution) retains its independence and historical value. Source review found that its publicly visible file carrying the same v1.1 label differs in wording and scope from the local general version; the visible tree did not contain the complete G01–G15 text. No record was found that establishes the intent behind this version difference or an authorized reconciliation decision. This project therefore uses the local formal version supplied and checked for this task, does not combine the two texts, and does not write to the earlier repository. See [GOVERNANCE.md](GOVERNANCE.md) for the source note.

## What the available evidence cannot establish

- The first proposal, revision, or approval date and full version order of each of P01–P23 and G01–G15.
- Every failure, deployment drift, responsibility dispute, or rework event mentioned in the research draft beyond the two records described above.
- Exact time, money, token use, rework rates, changes in human intervention, or before-and-after differences.
- A causal effect of the principles on agent behavior, engineering outcomes, or total cost.

Unknowns are not filled with guesses. If public, de-identified primary evidence becomes available, traceable events may be added. Private research material and full conversations must not be placed in the public repository.
