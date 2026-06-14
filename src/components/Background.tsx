import { background } from '../data.ts'
import { Reveal } from './Reveal.tsx'
import { SectionHeading } from './SectionHeading.tsx'
import { AcademicCapIcon, CertificateIcon } from './icons.tsx'

/**
 * Education and certifications as a centered, alternating timeline: a single
 * vertical spine with ringed nodes, and each entry bounded in its own glass
 * card so one credential is clearly separated from the next.
 */
export function Background() {
  return (
    <section
      id="background"
      className="border-y border-[var(--color-border)] bg-[var(--color-surface)]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeading
            index="04"
            title="Background"
            kicker="// Credentials"
          />
        </Reveal>

        <Reveal>
          <p className="mb-14 max-w-2xl leading-relaxed text-[var(--color-muted)]">
            An academic foundation in control systems and information
            engineering, extended with cloud and generative-AI certification.
          </p>
        </Reveal>

        <ol className="relative">
          {/* Vertical spine: emerald at the top, fading into the hairline. */}
          <div
            aria-hidden="true"
            className="absolute left-[7px] top-1 bottom-1 w-px bg-gradient-to-b from-[var(--color-accent)]/70 via-[var(--color-border)] to-[var(--color-border)] md:left-1/2 md:-translate-x-1/2"
          />

          {background.map((entry, index) => {
            const isEducation = entry.kind === 'education'
            const isLeft = index % 2 === 0
            const Icon = isEducation ? AcademicCapIcon : CertificateIcon

            return (
              <li
                key={entry.title}
                className="relative mb-8 pl-10 last:mb-0 md:mb-12 md:pl-0"
              >
                {/* Ringed node, centered on the spine. */}
                <span className="absolute left-0 top-6 z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-base)] shadow-[0_0_10px_rgba(0,227,143,0.5)] md:left-1/2 md:-translate-x-1/2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                </span>

                <Reveal
                  delay={index * 60}
                  className={`md:w-[calc(50%-2.25rem)] ${
                    isLeft ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <article className="glass-panel glow-hover p-6">
                    <div className="mb-3 flex items-center gap-2 text-[var(--color-accent)]">
                      <Icon className="h-4 w-4" />
                      <span className="font-mono text-xs uppercase tracking-[0.15em]">
                        {isEducation ? 'Education' : 'Certification'}
                        {entry.year ? ` · ${entry.year}` : ''}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold leading-snug text-[var(--color-text)]">
                      {entry.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">
                      {entry.institution}
                    </p>
                  </article>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
