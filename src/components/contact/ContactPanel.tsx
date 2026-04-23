import { Mail, Linkedin, Globe, Github, Calendar, ArrowRight } from "lucide-react";
import { SITE_CONFIG, BOOK_CALL_MAILTO } from "@/lib/constants";
import { TEAM } from "@/lib/team";
import Reveal from "@/components/Reveal";

export default function ContactPanel() {
  return (
    <section className="relative z-10 py-16 md:py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
            {"// contact"}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-mono text-4xl md:text-6xl leading-tight text-fg mb-6">
            Let&apos;s build something.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-fg-muted md:text-lg max-w-2xl mb-12">
            Tell us what you&apos;re working on — scope, timeline, rough
            budget. We reply within a day and can start within a week.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-16">
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
              href={`mailto:${SITE_CONFIG.contactEmail}?subject=${encodeURIComponent("Project inquiry")}`}
              className="group font-mono text-sm uppercase tracking-wider border border-border-hi text-fg px-6 py-3 rounded-full hover:border-accent/50 hover:text-accent transition-all inline-flex items-center justify-center gap-2"
            >
              <Mail size={16} />
              {SITE_CONFIG.contactEmail}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="pt-10 border-t border-border">
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-fg-dim mb-6">
              Or reach us directly
            </h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {TEAM.map((m) => (
                <li
                  key={m.slug}
                  className="border border-border rounded-xl p-5 bg-surface/40"
                >
                  <p className="font-mono text-sm text-fg">{m.name}</p>
                  <p className="font-mono text-[11px] text-fg-muted mt-0.5">
                    {m.role}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <a
                      href={`mailto:${m.links.email}`}
                      aria-label={`Email ${m.name}`}
                      className="p-2 rounded-full border border-border text-fg-muted hover:text-accent hover:border-accent/40 transition-all"
                    >
                      <Mail size={14} />
                    </a>
                    {m.links.linkedin && (
                      <a
                        href={m.links.linkedin}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${m.name} on LinkedIn`}
                        className="p-2 rounded-full border border-border text-fg-muted hover:text-accent hover:border-accent/40 transition-all"
                      >
                        <Linkedin size={14} />
                      </a>
                    )}
                    {m.links.github && (
                      <a
                        href={m.links.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${m.name} on GitHub`}
                        className="p-2 rounded-full border border-border text-fg-muted hover:text-accent hover:border-accent/40 transition-all"
                      >
                        <Github size={14} />
                      </a>
                    )}
                    {m.links.website && (
                      <a
                        href={m.links.website}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${m.name} website`}
                        className="p-2 rounded-full border border-border text-fg-muted hover:text-accent hover:border-accent/40 transition-all"
                      >
                        <Globe size={14} />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
