import { loadMap, nodesByKind } from "@/lib/playbook/loadMap";

export const metadata = { title: "技能" };

export default function SkillsPage() {
  const map = loadMap();
  const groups = nodesByKind(map, "group").filter((g) => g.id.startsWith("skill."));
  const skills = nodesByKind(map, "skill");

  return (
    <main>
      <h1>技能轴</h1>
      {groups.map((g) => (
        <section key={g.id}>
          <h2>{g.name}</h2>
          <div className="grid">
            {skills
              .filter((s) => s.parent === g.id)
              .map((s) => (
                <div key={s.id} className="card">
                  <h3>{s.name}</h3>
                  <p>{s.oneLiner}</p>
                </div>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}
