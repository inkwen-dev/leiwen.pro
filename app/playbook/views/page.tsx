import Link from "next/link";
import { playbookPath } from "@/lib/playbook/paths";
import { listSiteDiagrams } from "@/lib/playbook/loadViewDoc";

export const metadata = { title: "大方向" };

export default function ViewsPage() {
  const diagrams = listSiteDiagrams();
  return (
    <main>
      <h1 className="sr-only">大方向</h1>
      <div className="grid">
        {diagrams.map((d) => (
          <Link key={d.id} className="card" href={playbookPath(`views/${d.id}`)}>
            <h3>{d.title}</h3>
          </Link>
        ))}
      </div>
    </main>
  );
}
