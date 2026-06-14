import { profile } from '../data.ts'
import { Reveal } from './Reveal.tsx'
import { SectionHeading } from './SectionHeading.tsx'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons.tsx'

const channels = [
  { label: 'GitHub', href: profile.github, Icon: GitHubIcon, external: true },
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: 'Mail',
    href: `mailto:${profile.email}`,
    Icon: MailIcon,
    external: false,
  },
]

/** Closing section: a call to connect with channel tiles. */
export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading index="05" title="Initialize Connection" kicker="// Contact" />
      </Reveal>

      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-[var(--color-muted)]">
            Always happy to talk about engineering, AI/ML, or quantitative
            finance. The fastest way to reach me is email.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 bg-[var(--color-accent)] px-6 py-3 font-mono text-sm font-bold tracking-tight text-[var(--color-base)] transition-all hover:bg-[var(--color-accent-soft)]"
          >
            <MailIcon className="h-4 w-4" />
            {profile.email}
          </a>

          <div className="mt-12 flex justify-center gap-6">
            {channels.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: '_blank', rel: 'noreferrer' }
                  : {})}
                className="group flex flex-col items-center gap-3"
              >
                <span className="flex h-16 w-16 items-center justify-center border border-[var(--color-border)] text-[var(--color-muted)] transition-colors group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)]">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-accent)]">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
