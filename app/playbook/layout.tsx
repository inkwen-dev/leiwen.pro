import type { Metadata } from "next";
import PlaybookSubnav from "@/components/playbook/PlaybookSubnav";
import "./playbook.css";

export const metadata: Metadata = {
  title: {
    default: "副业有术",
    template: "%s · 副业有术",
  },
  description: "看清副业大方向和做法",
};

export default function PlaybookLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="playbook-root">
      <div className="shell">
        <PlaybookSubnav />
        {children}
      </div>
    </div>
  );
}
