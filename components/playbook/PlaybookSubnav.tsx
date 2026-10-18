"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { playbookPath } from "@/lib/playbook/paths";

const items = [
  {
    href: playbookPath(),
    label: "大方向",
    active: (pathname: string) =>
      pathname === "/playbook" || pathname.startsWith("/playbook/views"),
  },
  {
    href: playbookPath("plays"),
    label: "玩法",
    active: (pathname: string) => pathname.startsWith("/playbook/plays"),
  },
];

export default function PlaybookSubnav() {
  const pathname = usePathname();
  return (
    <nav className="subnav" aria-label="副业有术栏目">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-current={item.active(pathname) ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
