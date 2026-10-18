import Link from "next/link";
import MermaidDiagram from "@/components/playbook/MermaidDiagram";
import { playbookPath } from "@/lib/playbook/paths";
import { diagramLayout } from "@/lib/playbook/layoutDiagram";
import { listSiteDiagrams, loadSiteMermaid } from "@/lib/playbook/loadViewDoc";

export default function PlaybookHomePage() {
  const diagrams = listSiteDiagrams();
  const first = diagrams[0];
  const chart = first ? loadSiteMermaid(first.id) : null;
  const rest = diagrams.slice(1);

  return (
    <main>
      <h1 className="sr-only">副业有术 · 大方向</h1>
      {first ? (
        <section className="diagram-hero">
          {chart ? (
            <MermaidDiagram chart={chart} label={first.title} layout={diagramLayout(first.id)} />
          ) : null}
          <div className="diagram-caption">
            <h2>{first.title}</h2>
            {first.blurb ? <p className="blurb">{first.blurb}</p> : null}
          </div>
        </section>
      ) : null}
      <div className="grid">
        {rest.map((d) => (
          <Link key={d.id} className="card" href={playbookPath(`views/${d.id}`)}>
            <h3>{d.title}</h3>
          </Link>
        ))}
      </div>
    </main>
  );
}
