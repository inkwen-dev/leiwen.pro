/**
 * 一次性：从 map.json 中文名写出 playbook/站点/图 与 catalog.json。
 * 运行：node ./playbook/scripts/build-site-diagrams.mjs
 * 写出后站点图以文件为准，勿把本脚本挂进构建。
 */
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const map = JSON.parse(readFileSync(join(root, "data", "map.json"), "utf8"));
const outDir = join(root, "站点", "图");
mkdirSync(outDir, { recursive: true });

const byId = new Map(map.nodes.map((n) => [n.id, n]));

function label(text) {
  return String(text).replace(/"/g, "'");
}

function walkDirection(node) {
  let cur = node;
  const guard = new Set();
  while (cur && !guard.has(cur.id)) {
    guard.add(cur.id);
    if (cur.kind === "direction") return cur;
    cur = cur.parent ? byId.get(cur.parent) : null;
  }
  return null;
}

function children(id, kind) {
  return map.nodes.filter((n) => n.parent === id && (!kind || n.kind === kind));
}

function flowchart(lines) {
  return "```mermaid\nflowchart TB\n" + lines.join("\n") + "\n```\n";
}

function doc(title, body) {
  return `# ${title}\n\n上屏图。节点只用中文，不含内部编号。\n\n${body}`;
}

let seq = 0;
function nid() {
  seq += 1;
  return `n${seq}`;
}

function treeFrom(rootNode, extraChildKinds) {
  seq = 0;
  const lines = [];
  const rootId = nid();
  lines.push(`  ${rootId}["${label(rootNode.name)}"]`);
  function add(parentNode, parentMermaidId) {
    const kids = map.nodes.filter(
      (n) => n.parent === parentNode.id && extraChildKinds.includes(n.kind),
    );
    for (const kid of kids) {
      const id = nid();
      lines.push(`  ${id}["${label(kid.name)}"]`);
      lines.push(`  ${parentMermaidId} --> ${id}`);
      add(kid, id);
    }
  }
  add(rootNode, rootId);
  return flowchart(lines);
}

const directions = map.nodes.filter((n) => n.kind === "direction");

const files = [];

function push(id, title, markdown) {
  const file = `${id}.md`;
  writeFileSync(join(outDir, file), markdown, "utf8");
  files.push({ id, title, file });
}

{
  seq = 0;
  const lines = [];
  const hub = nid();
  lines.push(`  ${hub}["副业大方向"]`);
  for (const d of directions) {
    const id = nid();
    lines.push(`  ${id}["${label(d.name)}"]`);
    lines.push(`  ${hub} --> ${id}`);
  }
  push("directions", "十大方向", doc("十大方向", flowchart(lines)));
}

const branchIds = [
  ["content", "内容与平台分发"],
  ["commerce", "电商与货"],
  ["virtual", "虚拟产品与知识变现"],
  ["ai-leverage", "AI 提效与工具"],
  ["ai-product", "AI 产品与开发"],
  ["overseas", "出海"],
  ["acquire", "获客与成交"],
  ["local", "本地与实体"],
  ["select", "认知与选事"],
  ["community", "人群与社群运营"],
];

for (const [id, name] of branchIds) {
  const node = directions.find((d) => d.name === name);
  if (!node) throw new Error("missing direction " + name);
  push(
    id,
    name,
    doc(name, treeFrom(node, ["subdirection", "platform", "play"])),
  );
}

{
  seq = 0;
  const lines = [];
  const hub = nid();
  lines.push(`  ${hub}["玩法"]`);
  const buckets = new Map();
  for (const play of map.nodes.filter((n) => n.kind === "play")) {
    const dir = walkDirection(play);
    const key = dir ? dir.name : "其它";
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key).push(play);
  }
  for (const [dirName, plays] of buckets) {
    const did = nid();
    lines.push(`  ${did}["${label(dirName)}"]`);
    lines.push(`  ${hub} --> ${did}`);
    for (const play of plays) {
      const pid = nid();
      lines.push(`  ${pid}["${label(play.name)}"]`);
      lines.push(`  ${did} --> ${pid}`);
    }
  }
  push("plays-map", "玩法总图", doc("玩法总图", flowchart(lines)));
}

function groupTree(prefix, title, rootLabel) {
  seq = 0;
  const lines = [];
  const hub = nid();
  lines.push(`  ${hub}["${label(rootLabel)}"]`);
  const groups = map.nodes.filter(
    (n) => n.kind === "group" && n.id.startsWith(prefix),
  );
  for (const g of groups) {
    const gid = nid();
    lines.push(`  ${gid}["${label(g.name)}"]`);
    lines.push(`  ${hub} --> ${gid}`);
    for (const child of map.nodes.filter((n) => n.parent === g.id)) {
      const cid = nid();
      lines.push(`  ${cid}["${label(child.name)}"]`);
      lines.push(`  ${gid} --> ${cid}`);
    }
  }
  push(prefix.replace(".", ""), title, doc(title, flowchart(lines)));
}

groupTree("skill.", "技能总图", "技能");
groupTree("ai.", "AI 能力总图", "AI 能力");

{
  const stages = map.nodes.filter((n) => n.kind === "stage");
  seq = 0;
  const ids = stages.map(() => nid());
  const lines = stages.map(
    (s, i) => `  ${ids[i]}["${label(s.name)}"]`,
  );
  for (let i = 0; i < ids.length - 1; i += 1) {
    lines.push(`  ${ids[i]} --> ${ids[i + 1]}`);
  }
  push("stages", "做事顺序", doc("做事顺序", flowchart(lines)));
}

writeFileSync(
  join(root, "站点", "catalog.json"),
  JSON.stringify(files, null, 2) + "\n",
  "utf8",
);
console.log("wrote", files.length, "diagrams");
