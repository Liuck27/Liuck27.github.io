import { projects } from '../data.ts'
import { Reveal } from './Reveal.tsx'
import { SectionHeading } from './SectionHeading.tsx'
import { NeuralCanvas } from './NeuralCanvas.tsx'
import { ArrowUpRightIcon, GitHubIcon } from './icons.tsx'
import { articleHash } from '../router.ts'

const [featured, ...rest] = projects

/** Project showcase: a featured highlight followed by a glass-card grid. */
export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          index={String(projects.length).padStart(2, '0')}
          total={String(projects.length).padStart(2, '0')}
          title="Selected Work"
          kicker="// Projects"
        />
      </Reveal>

      {featured && (
        <Reveal>
          <article className="glass-panel glow-hover mb-6 grid overflow-hidden lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Featured Project
              </span>
              <h3 className="text-2xl font-bold leading-snug text-[var(--color-text)] sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-lg leading-relaxed text-[var(--color-muted)]">
                {featured.description}
              </p>
              <ul className="mt-5 space-y-2">
                {featured.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                    />
                    <span className="text-sm leading-relaxed text-[var(--color-muted)]">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2">
                {featured.tech.map((tag) => (
                  <li
                    key={tag}
                    className="border border-[var(--color-accent)]/20 bg-[var(--color-base)] px-2.5 py-1 font-mono text-xs text-[var(--color-accent)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                {featured.articleSlug && (
                  <a
                    href={articleHash(featured.articleSlug)}
                    className="group inline-flex w-fit items-center gap-2 bg-[var(--color-accent)] px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-base)] transition-all hover:bg-[var(--color-accent-soft)]"
                  >
                    Read the Article
                    <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-fit items-center gap-2 border border-[var(--color-accent)]/60 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-accent)] transition-all hover:bg-[var(--color-accent)] hover:text-[var(--color-base)]"
                >
                  <GitHubIcon className="h-4 w-4" />
                  View Source
                  <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
            <div className="relative min-h-[16rem] border-t border-[var(--color-border)] bg-[var(--color-base)] lg:border-l lg:border-t-0">
              <div aria-hidden="true" className="grid-bg absolute inset-0" />
              <NeuralCanvas className="absolute inset-0" />
              <span className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                neural_net.viz
              </span>
            </div>
          </article>
        </Reveal>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {rest.map((project, index) => (
          <Reveal key={project.title} delay={index * 70}>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="glass-panel glow-hover group flex h-full flex-col p-6"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="font-mono text-xs text-[var(--color-accent)]">
                  {String(index + 2).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </span>
                <ArrowUpRightIcon className="h-5 w-5 text-[var(--color-muted)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]" />
              </div>

              <h3 className="text-lg font-semibold leading-snug text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <li
                    key={tag}
                    className="border border-[var(--color-border)] bg-[var(--color-base)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-muted)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <span className="mt-5 inline-flex items-center gap-2 border-t border-[var(--color-border)] pt-4 font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
                <GitHubIcon className="h-4 w-4" />
                Source
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
