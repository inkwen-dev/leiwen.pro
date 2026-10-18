import { loadMap, nodesByKind } from "@/lib/playbook/loadMap";

export const metadata = { title: "AI 能力" };

export default function AiPage() {
  const map = loadMap();
  const groups = nodesByKind(map, "group").filter((g) => g.id.startsWith("ai."));
  const ais = nodesByKind(map, "ai");

  return (
    <main>
      <h1>AI 能力层</h1>
      {groups.map((g) => (
        <section key={g.id}>
          <h2>{g.name}</h2>
          <div className="grid">
            {ais
              .filter((a) => a.parent === g.id)
              .map((a) => (
                <div key={a.id} className="card">
                  <h3>{a.name}</h3>
                  <p>{a.oneLiner}</p>
                </div>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}
