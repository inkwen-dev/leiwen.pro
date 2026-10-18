# map.json 字段说明

> **真源：** 同目录 `map.json`。冲突时以 JSON 为准。

## 顶层

| 字段 | 含义 |
|------|------|
| `version` | 整数；破坏性变更时 +1 |
| `brand` | 固定 `副业有术` |
| `nodes` | 节点数组（一张卡 = 一个节点） |
| `edges` | 边数组 |
| `views` | 分页简图定义 |

## `nodes[].kind`

| kind | 含义 |
|------|------|
| `direction` | 大方向 D1–D10 |
| `subdirection` | 子方向 / 形态枝 |
| `platform` | 分发平台 |
| `play` | 副业玩法卡 |
| `skill` | 技能卡 |
| `ai` | AI 能力卡 |
| `stage` | 决策链阶段 |
| `dimension` | 横切维 |
| `group` | 分组容器（技能组/AI 组） |

## 简卡字段（可空则 `""` 或 `[]`，`status` 标待补）

| 字段 | 含义 |
|------|------|
| `id` | 稳定主键，如 `dir.d1`、`play.vertical-niche-seed` |
| `name` | 展示名 |
| `kind` | 上表 |
| `parent` | 父节点 id 或 `null` |
| `oneLiner` | 一句话 |
| `whoFor` | 适合谁 |
| `needsSkills` | 技能 id 列表 |
| `aiLevers` | AI id 列表 |
| `trafficNote` | 流量一句 |
| `moneyNote` | 变现一句 |
| `riskNote` | 坑一句 |
| `sourceRefs` | `{ level, ref }[]`：A 生财结构 · B 生财例证 · C 全网补充 · D 假设 |
| `status` | `seeded` \| `filled` \| `needs_review` |

## `edges[]`

| 字段 | 含义 |
|------|------|
| `from` / `to` | 节点 id |
| `rel` | `contains` \| `requires` \| `levered_by` \| `feeds` \| `precedes` \| `related` |
| `note` | 可选 |

## `views[]`

| 字段 | 含义 |
|------|------|
| `id` | 如 `V-we-media-forms` |
| `title` / `purpose` | 标题与用途 |
| `nodeIds` | 要画的节点 |
| `edgeFilter` | 可选：只显示这些 rel |
| `layoutHint` | `simple-page` \| `overview` |
