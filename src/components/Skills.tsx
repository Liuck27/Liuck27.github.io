import { skills } from '../data.ts'
import { Reveal } from './Reveal.tsx'
import { SectionHeading } from './SectionHeading.tsx'

/** Skills grouped by category, rendered as labeled chips. */
export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading index="02" title="Skills" />
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((group, groupIndex) => (
          <Reveal key={group.category} delay={groupIndex * 60}>
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-[var(--color-muted)]">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-[var(--color-border)] bg-[var(--color-base)] px-3 py-1.5 text-sm text-slate-200"
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
