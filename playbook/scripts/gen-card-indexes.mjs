/** 从 map.json 生成卡片索引 Markdown（非真源）。node ./scripts/gen-card-indexes.mjs */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const map = JSON.parse(readFileSync(join(root, "data/map.json"), "utf8"));
const byKind = (k) => map.nodes.filter((n) => n.kind === k);

function table(rows) {
  const head = `| id | 名称 | parent | 状态 |\n|----|------|--------|------|\n`;
  return head + rows.map((n) => `| \`${n.id}\` | ${n.name} | ${n.parent ?? "—"} | ${n.status} |`).join("\n");
}

function writeIndex(rel, title, kind) {
  const dir = join(root, rel);
  mkdirSync(dir, { recursive: true });
  const body = `# ${title}\n\n> 由 \`data/map.json\` 生成；冲突以 JSON 为准。\n\n${table(byKind(kind))}\n`;
  writeFileSync(join(dir, "00-索引.md"), body, "utf8");
}

writeIndex("卡片/玩法", "玩法卡索引", "play");
writeIndex("卡片/技能", "技能卡索引", "skill");
writeIndex("卡片/AI", "AI 能力卡索引", "ai");

// sample detail cards for first 3 plays
const plays = byKind("play").slice(0, 3);
mkdirSync(join(root, "卡片/玩法"), { recursive: true });
for (const p of plays) {
  const md = `# ${p.name}\n\n| 字段 | 内容 |\n|------|------|\n| id | \`${p.id}\` |\n| kind | play |\n| parent | ${p.parent} |\n| 一句话 | ${p.oneLiner} |\n| 适合谁 | ${p.whoFor} |\n| 需要技能 | ${(p.needsSkills || []).join(" · ") || "—"} |\n| AI 杠杆 | ${(p.aiLevers || []).join(" · ") || "—"} |\n| 流量 | ${p.trafficNote || "—"} |\n| 怎么收钱 | ${p.moneyNote || "—"} |\n| 主要坑 | ${p.riskNote || "—"} |\n| 来源 | ${(p.sourceRefs || []).map((r) => `${r.level} ${r.ref}`).join("；") || "—"} |\n| 状态 | ${p.status} |\n`;
  writeFileSync(join(root, "卡片/玩法", `${p.id}.md`), md, "utf8");
}

console.log("card indexes written");
