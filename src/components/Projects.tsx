import { projects } from '../data.ts'
import { Reveal } from './Reveal.tsx'
import { SectionHeading } from './SectionHeading.tsx'
import { ArrowUpRightIcon, GitHubIcon } from './icons.tsx'

/** Project cards: title, description, tech tags, and a GitHub link. */
export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading index="03" title="Projects" />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 70}>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <GitHubIcon className="h-7 w-7 text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-accent)]" />
                <ArrowUpRightIcon className="h-5 w-5 text-[var(--color-muted)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]" />
              </div>

              <h3 className="text-base font-semibold leading-snug text-white transition-colors group-hover:text-[var(--color-accent)]">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <li
                    key={tag}
                    className="font-mono text-xs text-[var(--color-accent-soft)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
