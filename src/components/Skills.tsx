import { skills } from '../data.ts'
import { Reveal } from './Reveal.tsx'
import { SectionHeading } from './SectionHeading.tsx'

/** Skills grouped by category, rendered as flowing tag rows. */
export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading title="Core Tech Stack" />
      </Reveal>

      <div className="space-y-8">
        {skills.map((group, groupIndex) => (
          <Reveal key={group.category} delay={groupIndex * 60}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:gap-6">
              <h3 className="shrink-0 font-mono text-sm uppercase tracking-[0.15em] text-[var(--color-accent)] sm:w-40">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="glow-hover border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 font-mono text-xs text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
