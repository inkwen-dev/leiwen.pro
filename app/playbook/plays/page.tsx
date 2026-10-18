import Link from "next/link";
import { groupPlays } from "@/lib/playbook/groupPlays";
import { playbookPath, loadMap } from "@/lib/playbook/loadMap";

export const metadata = { title: "玩法" };

export default function PlaysPage() {
  const groups = groupPlays(loadMap());
  return (
    <main>
      <h1 className="sr-only">玩法</h1>
      {groups.map((group) => (
        <section key={group.title}>
          <h2 className="section-title">{group.title}</h2>
          <div className="grid">
            {group.plays.map((play) => (
              <Link key={play.id} className="card" href={playbookPath(`plays/${play.id}`)}>
                <h3>{play.name}</h3>
                <p>{play.oneLiner}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
