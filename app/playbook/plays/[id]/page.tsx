import { notFound } from "next/navigation";
import { loadMap, nodeById, nodesByKind } from "@/lib/playbook/loadMap";

export function generateStaticParams() {
  return nodesByKind(loadMap(), "play").map((p) => ({ id: p.id }));
}

export default async function PlayDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const map = loadMap();
  const play = nodeById(map, id);
  if (!play || play.kind !== "play") notFound();

  const skillNames = play.needsSkills
    .map((sid) => nodeById(map, sid)?.name)
    .filter((name): name is string => Boolean(name))
    .join(" · ");
  const aiNames = play.aiLevers
    .map((aid) => nodeById(map, aid)?.name)
    .filter((name): name is string => Boolean(name))
    .join(" · ");

  return (
    <main>
      <h1>{play.name}</h1>
      <table>
        <tbody>
          <tr>
            <th>一句话</th>
            <td>{play.oneLiner}</td>
          </tr>
          <tr>
            <th>适合谁</th>
            <td>{play.whoFor || "—"}</td>
          </tr>
          <tr>
            <th>需要技能</th>
            <td>{skillNames || "—"}</td>
          </tr>
          <tr>
            <th>AI 杠杆</th>
            <td>{aiNames || "—"}</td>
          </tr>
          <tr>
            <th>流量</th>
            <td>{play.trafficNote || "—"}</td>
          </tr>
          <tr>
            <th>怎么收钱</th>
            <td>{play.moneyNote || "—"}</td>
          </tr>
          <tr>
            <th>主要坑</th>
            <td>{play.riskNote || "—"}</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
