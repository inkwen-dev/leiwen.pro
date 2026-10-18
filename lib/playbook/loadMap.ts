import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { MapNode, SideHustleMap } from "./types";

/** 真源：本仓 playbook/data/map.json（与 LeiwenVoice 已分家） */
export function loadMap(): SideHustleMap {
  const p = join(process.cwd(), "playbook", "data", "map.json");
  const raw = readFileSync(p, "utf8");
  return JSON.parse(raw) as SideHustleMap;
}

export function nodesByKind(map: SideHustleMap, kind: string): MapNode[] {
  return map.nodes.filter((n) => n.kind === kind);
}

export function nodeById(map: SideHustleMap, id: string): MapNode | undefined {
  return map.nodes.find((n) => n.id === id);
}

export { playbookPath } from "./paths";
