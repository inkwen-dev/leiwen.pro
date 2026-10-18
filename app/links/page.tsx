import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "副业导航",
  description: "精选工具与网址，建设中。",
};

export default function LinksPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <h1 className="mb-4 text-3xl font-bold tracking-tight">副业导航</h1>
      <p className="mb-6 text-[var(--leiwen-muted)] leading-relaxed">
        精选工具与网址，建设中。先去「副业有术」看清地图。
      </p>
      <Link
        href="/playbook"
        className="inline-flex rounded-md bg-[var(--leiwen-accent)] px-4 py-2 text-sm font-medium text-white no-underline hover:bg-[var(--leiwen-accent-hover)]"
      >
        进入副业有术
      </Link>
    </main>
  );
}
