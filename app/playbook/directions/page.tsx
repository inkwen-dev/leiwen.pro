import Link from "next/link";
import { playbookPath, loadMap, nodesByKind } from "@/lib/playbook/loadMap";

export const metadata = { title: "方向" };

export default function DirectionsPage() {
  const map = loadMap();
  const dirs = nodesByKind(map, "direction");
  const childrenOf = (id: string) =>
    map.nodes.filter((n) => n.parent === id && n.kind === "subdirection");

  return (
    <main>
      <h1>十大方向</h1>
      {dirs.map((d) => (
        <section key={d.id}>
          <h2>{d.name}</h2>
          <p>{d.oneLiner}</p>
          <ul>
            {childrenOf(d.id).map((s) => (
              <li key={s.id}>
                <strong>{s.name}</strong> — {s.oneLiner}
              </li>
            ))}
          </ul>
          {d.id === "dir.d1" && (
            <p className="meta">
              自媒体形态见{" "}
              <Link href={playbookPath("views/content")}>自媒体</Link>
            </p>
          )}
        </section>
      ))}
    </main>
  );
}
