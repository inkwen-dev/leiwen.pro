import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MermaidDiagram from "@/components/playbook/MermaidDiagram";
import { diagramLayout } from "@/lib/playbook/layoutDiagram";
import { listSiteDiagrams, loadSiteMermaid } from "@/lib/playbook/loadViewDoc";

export function generateStaticParams() {
  return listSiteDiagrams().map((d) => ({ id: d.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const item = listSiteDiagrams().find((d) => d.id === id);
  return { title: item?.title ?? "大方向" };
}

export default async function ViewDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = listSiteDiagrams().find((d) => d.id === id);
  if (!item) notFound();
  const chart = loadSiteMermaid(id);
  if (!chart) notFound();

  return (
    <main>
      <figure className="diagram-figure">
        <MermaidDiagram chart={chart} label={item.title} layout={diagramLayout(item.id)} />
        <figcaption className="diagram-caption">
          <h1>{item.title}</h1>
          {item.blurb ? <p className="blurb">{item.blurb}</p> : null}
        </figcaption>
      </figure>
    </main>
  );
}
