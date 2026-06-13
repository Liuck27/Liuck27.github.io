import { profile } from '../data.ts'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons.tsx'

/** Landing section: name, role, tagline, and primary contact buttons. */
export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center px-6 pt-24 pb-16"
    >
      {/* Soft accent glow behind the hero content. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--color-accent)]/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-5xl">
        <p className="mb-5 font-mono text-sm text-[var(--color-accent)]">
          Hi, my name is
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <h2 className="mt-3 text-xl font-medium text-[var(--color-muted)] sm:text-2xl">
          {profile.role}
        </h2>
        <p className="mt-6 max-w-xl text-lg text-slate-300 sm:text-xl">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--color-base)] transition-opacity hover:opacity-90"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <MailIcon className="h-4 w-4" />
            Email
          </a>
        </div>
      </div>
    </section>
  )
}
