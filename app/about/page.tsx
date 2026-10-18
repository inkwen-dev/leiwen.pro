import Link from "next/link";
import type { Metadata } from "next";
import { brandName, siteSlogan } from "@/lib/site/nav";

export const metadata: Metadata = {
  title: "关于",
  description: siteSlogan,
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">关于{brandName}</h1>
      <p className="mb-4 text-lg leading-relaxed text-[var(--leiwen-ink)]">{siteSlogan}</p>
      <p className="mb-4 text-[var(--leiwen-muted)] leading-relaxed">
        做过产品，也踩过坑。这里讲怎么用 AI 把事做成、怎么赚钱。不装大神、不装暴富；还没靠内容赚大钱，只讲正在跑通的。
      </p>
      <p className="mb-8 text-[var(--leiwen-muted)] leading-relaxed">
        本站是中文枢纽：副业有术（方法论与地图）、副业导航（建设中）会逐步丰富。旧出海实验站已收到「其它作品」，不再占首页。
      </p>
      <div className="flex flex-wrap gap-3 text-sm">
        <Link
          href="/"
          className="rounded-md border border-[var(--leiwen-line)] px-4 py-2 no-underline hover:border-[var(--leiwen-accent)] hover:text-[var(--leiwen-accent)]"
        >
          回首页
        </Link>
        <Link
          href="/playbook"
          className="rounded-md bg-[var(--leiwen-accent)] px-4 py-2 font-medium text-white no-underline hover:bg-[var(--leiwen-accent-hover)]"
        >
          副业有术
        </Link>
      </div>
    </main>
  );
}
