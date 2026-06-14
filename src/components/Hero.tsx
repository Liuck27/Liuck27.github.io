import { profile } from '../data.ts'
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  ArrowUpRightIcon,
  DownloadIcon,
} from './icons.tsx'
import { NeuralCanvas } from './NeuralCanvas.tsx'

/** Landing section: status, name, headline statement, and contact actions. */
export function Hero() {
  // Highlight the closing keyword of the tagline in the accent colour.
  const [headlineLead, headlineTail = ''] = profile.tagline.split('pressure')

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16"
    >
      {/* Layered backdrop: blueprint grid + drifting neural network + glow. */}
      <div aria-hidden="true" className="grid-bg absolute inset-0 -z-20" />
      <NeuralCanvas className="absolute inset-0 -z-10 opacity-60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[32rem] w-[32rem] rounded-full bg-[var(--color-accent)]/10 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="mb-6 inline-flex items-center gap-3 border border-[var(--color-border)] bg-[var(--color-surface)]/60 px-4 py-2 backdrop-blur">
          <span className="pulse-dot h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Software Engineer · AI/ML &amp; Avionics
          </span>
        </div>

        <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">
          {profile.name}
        </p>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[var(--color-text)] sm:text-6xl lg:text-7xl">
          {headlineLead}
          {headlineTail !== '' || profile.tagline.includes('pressure') ? (
            <>
              <span className="text-[var(--color-accent)]">pressure</span>
              {headlineTail}
            </>
          ) : null}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
          {profile.role}. I work on AI/ML pipelines, CI/CD infrastructure, and
          safety-critical avionics software — and bring that same rigor to
          everything I build.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#/projects"
            className="group inline-flex items-center gap-2 bg-[var(--color-accent)] px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-base)] transition-all hover:bg-[var(--color-accent-soft)]"
          >
            Explore Projects
            <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={profile.resume}
            download
            className="inline-flex items-center gap-2 border border-[var(--color-border)] px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <DownloadIcon className="h-4 w-4" />
            Résumé
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-11 w-11 items-center justify-center border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-11 w-11 items-center justify-center border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="inline-flex h-11 w-11 items-center justify-center border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <MailIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
