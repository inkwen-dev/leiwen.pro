import { nodeById, nodesByKind } from "./loadMap";
import type { MapNode, SideHustleMap } from "./types";

/** 玩法页五个架子。一个方向只进一个架子；页面不另维护玩法名单。 */
const SHELVES: { title: string; directionIds: string[] }[] = [
  { title: "做内容", directionIds: ["dir.d1"] },
  { title: "卖东西", directionIds: ["dir.d2", "dir.d8"] },
  { title: "卖知识", directionIds: ["dir.d3"] },
  { title: "做产品", directionIds: ["dir.d4", "dir.d5", "dir.d6"] },
  { title: "获客与选事", directionIds: ["dir.d7", "dir.d9", "dir.d10"] },
];

/** 沿 parent 走到 kind=direction。 */
export function ancestorDirection(map: SideHustleMap, node: MapNode): MapNode | undefined {
  const seen = new Set<string>();
  let current: MapNode | undefined = node;
  while (current && !seen.has(current.id)) {
    seen.add(current.id);
    if (current.kind === "direction") return current;
    if (!current.parent) return undefined;
    current = nodeById(map, current.parent);
  }
  return undefined;
}

export type PlayShelf = { title: string; plays: MapNode[] };

export function groupPlays(map: SideHustleMap): PlayShelf[] {
  const buckets = SHELVES.map((shelf) => ({
    title: shelf.title,
    directionIds: new Set(shelf.directionIds),
    plays: [] as MapNode[],
  }));
  const other: MapNode[] = [];

  for (const play of nodesByKind(map, "play")) {
    const direction = ancestorDirection(map, play);
    const bucket = direction
      ? buckets.find((item) => item.directionIds.has(direction.id))
      : undefined;
    if (bucket) bucket.plays.push(play);
    else other.push(play);
  }

  const groups = buckets
    .filter((item) => item.plays.length > 0)
    .map(({ title, plays }) => ({ title, plays }));
  if (other.length > 0) groups.push({ title: "其他", plays: other });
  return groups;
}
