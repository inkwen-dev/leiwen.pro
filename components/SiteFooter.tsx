import Link from "next/link";
import { brandName, footerNav, siteShortSign } from "@/lib/site/nav";

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--leiwen-line)] bg-[var(--leiwen-bg)]">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <nav className="mb-4 flex flex-wrap gap-x-3 gap-y-2 text-sm" aria-label="页脚栏目">
          {footerNav.map((item, i) => (
            <span key={item.href} className="flex items-center gap-3">
              {i > 0 ? (
                <span className="text-[var(--leiwen-muted)]" aria-hidden>
                  ·
                </span>
              ) : null}
              <Link
                href={item.href}
                className="text-[var(--leiwen-muted)] no-underline hover:text-[var(--leiwen-accent)]"
              >
                {item.label}
              </Link>
            </span>
          ))}
        </nav>
        <p className="mb-3 text-sm text-[var(--leiwen-ink)]">{siteShortSign}</p>
        <p className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--leiwen-muted)]">
          <span>© {brandName} leiwen.pro</span>
          <span aria-hidden>·</span>
          <a
            href="mailto:jtly2050@gmail.com"
            className="hover:text-[var(--leiwen-accent)]"
          >
            jtly2050@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
