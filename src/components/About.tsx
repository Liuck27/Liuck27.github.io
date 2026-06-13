import { profile } from '../data.ts'
import { Reveal } from './Reveal.tsx'
import { SectionHeading } from './SectionHeading.tsx'

/** Short bio paragraph. */
export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading index="01" title="About" />
        <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
          {profile.about}
        </p>
      </Reveal>
    </section>
  )
}
