"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import TerminalMark from "./TerminalMark";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all",
        scrolled
          ? "backdrop-blur-md bg-background/70 border-b border-border"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <TerminalMark size="md" />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs uppercase tracking-wider text-fg-muted hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={`mailto:${SITE_CONFIG.contactEmail}`}
            className="font-mono text-xs uppercase tracking-wider border border-accent/40 text-accent px-4 py-2 rounded-full hover:bg-accent hover:text-background transition-all"
          >
            Get in touch →
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden text-fg hover:text-accent transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm uppercase tracking-wider text-fg-muted hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                onClick={() => setOpen(false)}
                className="inline-block font-mono text-xs uppercase tracking-wider border border-accent/40 text-accent px-4 py-2 rounded-full"
              >
                Get in touch →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
