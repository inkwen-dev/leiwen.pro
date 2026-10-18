import Link from "next/link";
import { homeEntries, siteSlogan } from "@/lib/site/nav";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
      <section className="mb-8 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-[var(--leiwen-ink)] sm:text-3xl">
          {siteSlogan}
        </h1>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        {homeEntries.map((entry) => (
          <Link
            key={entry.href}
            href={entry.href}
            className="rounded-lg border border-[var(--leiwen-line)] bg-[var(--leiwen-card)] p-4 text-left no-underline transition-colors hover:border-[var(--leiwen-accent)]"
          >
            <h2 className="mb-1 text-base font-bold text-[var(--leiwen-ink)]">
              {entry.label}
            </h2>
            <p className="text-sm text-[var(--leiwen-muted)]">{entry.hint}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
