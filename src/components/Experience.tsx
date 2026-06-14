import { experience } from '../data.ts'
import { Reveal } from './Reveal.tsx'
import { SectionHeading } from './SectionHeading.tsx'

/** Professional experience as detailed, bounded achievement cards. */
export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading
          index="03"
          title="Where I've Worked"
          kicker="// Experience"
        />
      </Reveal>

      <div className="space-y-6">
        {experience.map((entry, index) => (
          <Reveal key={`${entry.company}-${entry.role}`} delay={index * 60}>
            <article className="glass-panel glow-hover p-8">
              <div className="flex flex-col gap-2 border-b border-[var(--color-border)] pb-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-bold leading-snug text-[var(--color-text)]">
                    {entry.company}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    {entry.role} · {entry.location}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-accent)]">
                  {entry.period}
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                    />
                    <span className="text-sm leading-relaxed text-[var(--color-muted)]">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2">
                {entry.tech.map((tag) => (
                  <li
                    key={tag}
                    className="border border-[var(--color-border)] bg-[var(--color-base)] px-2.5 py-1 font-mono text-xs text-[var(--color-muted)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
