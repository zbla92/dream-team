import { SITE_CONFIG } from "@/lib/constants";
import TerminalMark from "./TerminalMark";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-border mt-24">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <TerminalMark size="sm" />
        <p className="font-mono text-xs text-fg-dim">
          © {year} {SITE_CONFIG.name} · Built with Next.js, Tailwind, and Claude Code.
        </p>
        <a
          href={`mailto:${SITE_CONFIG.contactEmail}`}
          className="font-mono text-xs text-fg-muted hover:text-accent transition-colors"
        >
          {SITE_CONFIG.contactEmail}
        </a>
      </div>
    </footer>
  );
}
