import { profile } from '../data.ts'
import { Reveal } from './Reveal.tsx'
import { SectionHeading } from './SectionHeading.tsx'

/** Short bio, presented as a two-column technical readout. */
export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading title="About" />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <div className="glass-panel p-6">
            <dl className="space-y-4 font-mono text-xs">
              <div>
                <dt className="uppercase tracking-[0.15em] text-[var(--color-muted)]">
                  Role
                </dt>
                <dd className="mt-1 text-[var(--color-text)]">
                  Software Engineer
                </dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.15em] text-[var(--color-muted)]">
                  Company
                </dt>
                <dd className="mt-1 text-[var(--color-text)]">
                  Leonardo Helicopters
                </dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.15em] text-[var(--color-muted)]">
                  Location
                </dt>
                <dd className="mt-1 text-[var(--color-text)]">Milan, Italy</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.15em] text-[var(--color-muted)]">
                  Focus
                </dt>
                <dd className="mt-1 text-[var(--color-accent)]">
                  AI/ML · Avionics · Backend
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-8" delay={80}>
          <p className="text-lg leading-relaxed text-[var(--color-muted)]">
            {profile.about}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
