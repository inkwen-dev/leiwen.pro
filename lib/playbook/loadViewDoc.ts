import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

export type SiteDiagram = {
  id: string;
  title: string;
  blurb: string;
  file: string;
};

const MERMAID_BLOCK = /```mermaid\s*([\s\S]*?)```/i;

function siteRoot() {
  return join(process.cwd(), "playbook", "站点");
}

/** 上屏图清单。只读 playbook/站点/catalog.json */
export function listSiteDiagrams(): SiteDiagram[] {
  const p = join(siteRoot(), "catalog.json");
  const raw = readFileSync(p, "utf8");
  return JSON.parse(raw) as SiteDiagram[];
}

/** 从 playbook/站点/图 抽出 mermaid。缺文件返回 null */
export function loadSiteMermaid(id: string): string | null {
  const item = listSiteDiagrams().find((d) => d.id === id);
  if (!item) return null;
  const p = join(siteRoot(), "图", item.file);
  if (!existsSync(p)) return null;
  const raw = readFileSync(p, "utf8");
  const m = raw.match(MERMAID_BLOCK);
  return m?.[1]?.trim() ?? null;
}
