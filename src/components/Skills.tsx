import { skills } from '../data.ts'
import { Reveal } from './Reveal.tsx'
import { SectionHeading } from './SectionHeading.tsx'

/** Skills grouped by category, rendered as a numbered tech bento grid. */
export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading
          index="02"
          title="Core Tech Stack"
          kicker="// Capabilities"
        />
      </Reveal>

      <div className="grid gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, groupIndex) => (
          <Reveal key={group.category} delay={groupIndex * 60}>
            <div className="glow-hover h-full bg-[var(--color-surface)] p-8 hover:bg-[var(--color-surface-2)]">
              <div className="mb-5 flex items-baseline justify-between">
                <h3 className="font-mono text-sm uppercase tracking-[0.15em] text-[var(--color-text)]">
                  {group.category}
                </h3>
                <span className="font-mono text-xs text-[var(--color-accent)]">
                  {String(groupIndex + 1).padStart(2, '0')}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-[var(--color-border)] bg-[var(--color-base)] px-2.5 py-1 font-mono text-xs text-[var(--color-muted)]"
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
