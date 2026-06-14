import { Projects } from './Projects.tsx'

/** Standalone Projects view, shown at the #/projects route. */
export function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="mx-auto max-w-6xl px-6">
        <a
          href="#/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
        >
          <span aria-hidden="true">←</span> Back to home
        </a>
      </div>
      <Projects />
    </div>
  )
}
