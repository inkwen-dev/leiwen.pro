import Link from "next/link";
import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "其它作品",
  description: "历史出海与实验站外链，逐步下线。",
};

const projectCopy: Record<string, string> = {
  beautygirlgallery: "动漫、美感与 AI 艺术",
  wallpapersense: "壁纸产品",
  markdownstudio: "Markdown 编辑器",
  contentqr: "营销内容转二维码",
  inkwellflow: "写作产品",
  ghibliwallpapers: "吉卜力风格壁纸",
  jiutianlanyue: "企业 AI 咨询",
  startupsense: "创业验证",
  levelmere: "品牌 AI 可见度",
  mahjonghand: "麻将手牌工具",
  humannatureexplained: "人性科普",
  physicsexplained: "物理科普",
  maxtool: "在线小工具",
};

export default function WorksPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="mb-2 text-3xl font-bold tracking-tight">其它作品</h1>
      <p className="mb-8 text-sm text-[var(--leiwen-muted)] leading-relaxed">
        历史出海 / 实验站，非本站主内容；将逐步下线。主内容请看首页与「副业有术」。
      </p>
      <ul className="divide-y divide-[var(--leiwen-line)] border-y border-[var(--leiwen-line)]">
        {projects.map((project) => {
          const domain = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
          return (
            <li key={project.id}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-3 py-3 no-underline hover:bg-[var(--leiwen-card)]"
              >
                <div>
                  <p className="font-medium text-[var(--leiwen-ink)]">{project.name}</p>
                  <p className="text-xs text-[var(--leiwen-muted)]">{domain}</p>
                  <p className="mt-1 text-sm text-[var(--leiwen-muted)]">
                    {projectCopy[project.id] ?? project.description}
                  </p>
                </div>
                <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-[var(--leiwen-muted)]" />
              </a>
            </li>
          );
        })}
      </ul>
      <p className="mt-8">
        <Link href="/" className="text-sm text-[var(--leiwen-accent)] hover:underline">
          ← 回首页
        </Link>
      </p>
    </main>
  );
}
