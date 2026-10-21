"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { brandName, primaryNav } from "@/lib/site/nav";

function isExternal(
  item: (typeof primaryNav)[number],
): item is (typeof primaryNav)[number] & { external: true } {
  return "external" in item && item.external === true;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (href: string) => {
    const active =
      href === "/"
        ? pathname === "/"
        : pathname === href || pathname.startsWith(`${href}/`);
    return active
      ? "text-[var(--leiwen-accent)] font-medium"
      : "text-[var(--leiwen-ink)] hover:text-[var(--leiwen-accent)]";
  };

  const externalClass =
    "font-semibold text-[var(--leiwen-accent)] no-underline hover:text-[var(--leiwen-accent-hover)]";

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--leiwen-line)] bg-[var(--leiwen-bg)]/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-base font-bold tracking-tight text-[var(--leiwen-ink)] no-underline hover:text-[var(--leiwen-accent)] sm:text-lg"
        >
          {brandName}
        </Link>

        <nav className="hidden items-center gap-6 text-sm sm:flex" aria-label="主导航">
          {primaryNav.map((item) =>
            isExternal(item) ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={externalClass}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`${linkClass(item.href)} no-underline`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[var(--leiwen-ink)] sm:hidden"
          aria-label={open ? "关闭菜单" : "打开菜单"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav
          className="border-t border-[var(--leiwen-line)] px-4 py-3 sm:hidden"
          aria-label="移动导航"
        >
          <ul className="flex flex-col gap-3 text-sm">
            {primaryNav.map((item) => (
              <li key={item.href}>
                {isExternal(item) ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={externalClass}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`${linkClass(item.href)} no-underline`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
