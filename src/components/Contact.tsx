import { profile } from '../data.ts'
import { Reveal } from './Reveal.tsx'
import { SectionHeading } from './SectionHeading.tsx'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons.tsx'

/** Closing section with email and social links. */
export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading index="05" title="Contact" />
        <div className="mx-auto max-w-xl text-center">
          <p className="text-lg leading-relaxed text-slate-300">
            I am always happy to talk about engineering, AI/ML, or quantitative
            finance. The fastest way to reach me is email.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-base)] transition-opacity hover:opacity-90"
          >
            <MailIcon className="h-4 w-4" />
            {profile.email}
          </a>

          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              <GitHubIcon className="h-6 w-6" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              <LinkedInIcon className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              <MailIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
