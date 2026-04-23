import Link from "next/link";
import { ArrowRight, Calendar, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SITE_CONFIG, BOOK_CALL_MAILTO } from "@/lib/constants";

export default function CtaSection() {
  return (
    <section id="cta" className="relative z-10 py-20 md:py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="font-mono text-3xl md:text-5xl leading-tight text-fg mb-6">
            Looking for a reliable dev team? Let&apos;s talk.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-fg-muted md:text-lg max-w-xl mx-auto mb-10">
            Reply within a day. Able to start within a week.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOK_CALL_MAILTO}
              className="group font-mono text-sm uppercase tracking-wider bg-accent text-background px-6 py-3 rounded-full hover:bg-accent/90 transition-all inline-flex items-center justify-center gap-2 accent-glow"
            >
              <Calendar size={16} />
              Book a call
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.contactEmail}`}
              className="group font-mono text-sm uppercase tracking-wider border border-border-hi text-fg px-6 py-3 rounded-full hover:border-accent/50 hover:text-accent transition-all inline-flex items-center justify-center gap-2"
            >
              <Mail size={16} />
              {SITE_CONFIG.contactEmail}
            </a>
            <Link
              href="/contact"
              className="group font-mono text-sm uppercase tracking-wider text-fg-muted hover:text-accent transition-colors inline-flex items-center justify-center gap-2 px-2 py-3"
            >
              More ways to reach us →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
