/** 按关系排版。不手写坐标：读节点和连线，再选脑图或流程。 */

export type DiagramLayout = "mindmap" | "flow";

const NODE_H = 36;
const GAP_Y = 10;
const GAP_X = 40;
const PAD = 8;

type Tree = { id: string; label: string; children: Tree[] };
type Box = {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  core: boolean;
};
type Link = { from: string; to: string };

export function diagramLayout(id: string): DiagramLayout {
  return id === "stages" ? "flow" : "mindmap";
}

function textWidth(label: string) {
  let width = 28;
  for (const ch of label) width += ch.charCodeAt(0) > 255 ? 15 : 8;
  return Math.ceil(width);
}

function parseTree(chart: string): Tree | null {
  const labels = new Map<string, string>();
  const kids = new Map<string, string[]>();
  const incoming = new Set<string>();
  const nodeRe = /(\w+)\["([^"]*)"\]/g;
  let match: RegExpExecArray | null;
  while ((match = nodeRe.exec(chart))) {
    labels.set(match[1], match[2]);
    if (!kids.has(match[1])) kids.set(match[1], []);
  }
  const edgeRe = /(\w+)\s*-->\s*(\w+)/g;
  while ((match = edgeRe.exec(chart))) {
    const from = match[1];
    const to = match[2];
    if (!labels.has(from) || !labels.has(to)) continue;
    kids.get(from)!.push(to);
    incoming.add(to);
  }
  const roots = [...labels.keys()].filter((id) => !incoming.has(id));
  if (roots.length === 0) return null;

  function build(id: string, seen: Set<string>): Tree {
    if (seen.has(id)) return { id, label: labels.get(id) ?? id, children: [] };
    const next = new Set(seen);
    next.add(id);
    return {
      id,
      label: labels.get(id) ?? id,
      children: (kids.get(id) ?? []).map((child) => build(child, next)),
    };
  }

  return build(roots[0], new Set());
}

function span(node: Tree): number {
  if (node.children.length === 0) return NODE_H;
  const inner = node.children.reduce((sum, child) => sum + span(child), 0);
  return inner + GAP_Y * (node.children.length - 1);
}

function stackSpan(nodes: Tree[]) {
  if (nodes.length === 0) return 0;
  return nodes.reduce((sum, node) => sum + span(node), 0) + GAP_Y * (nodes.length - 1);
}

function splitSides(children: Tree[]): [Tree[], Tree[]] {
  const left: Tree[] = [];
  const right: Tree[] = [];
  let leftHeight = 0;
  let rightHeight = 0;
  for (const child of children) {
    const height = span(child);
    if (leftHeight <= rightHeight) {
      left.push(child);
      leftHeight += height + GAP_Y;
    } else {
      right.push(child);
      rightHeight += height + GAP_Y;
    }
  }
  return [left, right];
}

function placeOutward(
  node: Tree,
  anchor: number,
  top: number,
  dir: 1 | -1,
  core: boolean,
  boxes: Box[],
  links: Link[],
) {
  const width = textWidth(node.label);
  const height = span(node);
  const y = top + height / 2 - NODE_H / 2;
  const x = dir === 1 ? anchor : anchor - width;
  boxes.push({ id: node.id, label: node.label, x, y, w: width, h: NODE_H, core });
  let childTop = top;
  for (const child of node.children) {
    links.push({ from: node.id, to: child.id });
    const childAnchor = dir === 1 ? x + width + GAP_X : x - GAP_X;
    placeOutward(child, childAnchor, childTop, dir, false, boxes, links);
    childTop += span(child) + GAP_Y;
  }
}

function layoutMindmap(root: Tree): { boxes: Box[]; links: Link[] } {
  const [left, right] = splitSides(root.children);
  const rootW = textWidth(root.label);
  const height = Math.max(stackSpan(left), stackSpan(right), NODE_H);
  const rootY = (height - NODE_H) / 2;
  const boxes: Box[] = [
    { id: root.id, label: root.label, x: 0, y: rootY, w: rootW, h: NODE_H, core: true },
  ];
  const links: Link[] = [];

  function placeList(list: Tree[], dir: 1 | -1) {
    if (list.length === 0) return;
    const total = stackSpan(list);
    let top = rootY + NODE_H / 2 - total / 2;
    const anchor = dir === 1 ? rootW + GAP_X : -GAP_X;
    for (const child of list) {
      links.push({ from: root.id, to: child.id });
      placeOutward(child, anchor, top, dir, false, boxes, links);
      top += span(child) + GAP_Y;
    }
  }

  placeList(right, 1);
  placeList(left, -1);
  return { boxes, links };
}

function layoutFlow(root: Tree): { boxes: Box[]; links: Link[] } {
  const boxes: Box[] = [];
  const links: Link[] = [];
  let x = 0;
  let current: Tree | undefined = root;
  const seen = new Set<string>();
  let first = true;
  while (current && !seen.has(current.id)) {
    seen.add(current.id);
    const width = textWidth(current.label);
    boxes.push({
      id: current.id,
      label: current.label,
      x,
      y: 0,
      w: width,
      h: NODE_H,
      core: first,
    });
    const next: Tree | undefined = current.children[0];
    if (next) links.push({ from: current.id, to: next.id });
    x += width + GAP_X;
    current = next;
    first = false;
  }
  return { boxes, links };
}

function normalize(boxes: Box[]) {
  const minX = Math.min(...boxes.map((box) => box.x));
  const minY = Math.min(...boxes.map((box) => box.y));
  for (const box of boxes) {
    box.x += PAD - minX;
    box.y += PAD - minY;
  }
  const width = Math.max(...boxes.map((box) => box.x + box.w)) + PAD;
  const height = Math.max(...boxes.map((box) => box.y + box.h)) + PAD;
  return { width, height };
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function renderDiagramSvg(
  chart: string,
  layout: DiagramLayout,
): { svg: string; width: number; height: number } | null {
  const root = parseTree(chart);
  if (!root) return null;
  const placed = layout === "flow" ? layoutFlow(root) : layoutMindmap(root);
  if (placed.boxes.length === 0) return null;
  const { width, height } = normalize(placed.boxes);
  const byId = new Map(placed.boxes.map((box) => [box.id, box]));

  const paths = placed.links
    .map((link) => {
      const from = byId.get(link.from);
      const to = byId.get(link.to);
      if (!from || !to) return "";
      const forward = to.x >= from.x;
      const x1 = forward ? from.x + from.w : from.x;
      const x2 = forward ? to.x : to.x + to.w;
      const y1 = from.y + from.h / 2;
      const y2 = to.y + to.h / 2;
      const mid = (x1 + x2) / 2;
      return `<path d="M ${x1} ${y1} C ${mid} ${y1}, ${mid} ${y2}, ${x2} ${y2}" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>`;
    })
    .join("");

  const nodes = placed.boxes
    .map((box) => {
      const fill = box.core ? "#eff6ff" : "#ffffff";
      const stroke = box.core ? "#2563eb" : "#e2e8f0";
      const weight = box.core ? "700" : "500";
      return `<g><rect x="${box.x}" y="${box.y}" width="${box.w}" height="${box.h}" rx="6" fill="${fill}" stroke="${stroke}"/><text x="${box.x + box.w / 2}" y="${box.y + box.h / 2}" text-anchor="middle" dominant-baseline="middle" font-size="15" font-weight="${weight}" fill="#0f172a" font-family="Segoe UI, PingFang SC, Microsoft YaHei, Noto Sans SC, sans-serif">${escapeXml(box.label)}</text></g>`;
    })
    .join("");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img">${paths}${nodes}</svg>`;
  return { svg, width, height };
}
