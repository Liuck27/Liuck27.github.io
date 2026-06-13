import { background } from '../data.ts'
import { Reveal } from './Reveal.tsx'
import { SectionHeading } from './SectionHeading.tsx'

/** Education and certification rendered as a simple vertical timeline. */
export function Background() {
  return (
    <section id="background" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading index="04" title="Background" />
      </Reveal>

      <ol className="relative ml-3 border-l border-[var(--color-border)]">
        {background.map((entry, index) => (
          <Reveal key={entry.title} delay={index * 60}>
            <li className="relative ml-6 pb-8 last:pb-0">
              <span className="absolute -left-[1.6875rem] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-base)]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-muted)]">
                {entry.kind === 'education' ? 'Education' : 'Certification'}
              </span>
              <h3 className="mt-1 text-base font-semibold text-white">
                {entry.title}
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                {entry.institution}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
