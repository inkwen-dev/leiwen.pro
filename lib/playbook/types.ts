export type SourceRef = { level: string; ref: string };

export type MapNode = {
  id: string;
  name: string;
  kind: string;
  parent: string | null;
  oneLiner: string;
  whoFor: string;
  needsSkills: string[];
  aiLevers: string[];
  trafficNote: string;
  moneyNote: string;
  riskNote: string;
  sourceRefs: SourceRef[];
  status: string;
};

export type MapEdge = {
  from: string;
  to: string;
  rel: string;
  note?: string;
};

export type MapView = {
  id: string;
  title: string;
  purpose: string;
  nodeIds: string[];
  edgeFilter?: string[];
  layoutHint?: string;
};

export type SideHustleMap = {
  version: number;
  brand: string;
  domain: string;
  updated: string;
  nodes: MapNode[];
  edges: MapEdge[];
  views: MapView[];
};
