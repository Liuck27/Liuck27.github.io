import { Fragment, type ReactNode } from 'react'
import { getArticle, type ArticleBlock } from '../articles.ts'
import { PROJECTS_HASH } from '../router.ts'
import { Reveal } from './Reveal.tsx'

/** Renders `**bold**` and `` `code` `` spans within a line of article text. */
function renderInline(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).filter(Boolean)
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-semibold text-[var(--color-text)]">
          {part.slice(2, -2)}
        </strong>
      )
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={index}
          className="rounded bg-[var(--color-surface-2)] px-1.5 py-0.5 font-mono text-[0.85em] text-[var(--color-accent-soft)]"
        >
          {part.slice(1, -1)}
        </code>
      )
    }
    return <Fragment key={index}>{part}</Fragment>
  })
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case 'heading':
      return (
        <h2 className="mt-12 mb-4 flex items-center gap-3 text-xl font-bold tracking-tight text-[var(--color-text)] sm:text-2xl">
          <span className="h-px w-6 bg-[var(--color-accent)]" aria-hidden="true" />
          {block.text}
        </h2>
      )
    case 'paragraph':
      return (
        <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
          {renderInline(block.text)}
        </p>
      )
    case 'list': {
      const ListTag = block.ordered ? 'ol' : 'ul'
      return (
        <ListTag className="mt-4 space-y-2">
          {block.items.map((item, index) => (
            <li key={index} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
              <span className="text-sm leading-relaxed text-[var(--color-muted)]">
                {renderInline(item)}
              </span>
            </li>
          ))}
        </ListTag>
      )
    }
    case 'quote':
      return (
        <blockquote className="mt-6 border-l-2 border-[var(--color-accent)] bg-[var(--color-surface)] px-5 py-4 italic leading-relaxed text-[var(--color-text)]">
          {renderInline(block.text)}
        </blockquote>
      )
    case 'code':
      return (
        <pre className="mt-4 overflow-x-auto border border-[var(--color-border)] bg-[var(--color-surface)] p-4 font-mono text-xs leading-relaxed text-[var(--color-muted)]">
          <code>{block.text}</code>
        </pre>
      )
    case 'table':
      return (
        <div className="mt-4 overflow-x-auto border border-[var(--color-border)]">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                {block.headers.map((header) => (
                  <th
                    key={header}
                    className="px-3 py-2 font-mono text-xs uppercase tracking-[0.1em] text-[var(--color-accent)]"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-[var(--color-border)] last:border-0">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-3 py-2 text-[var(--color-muted)]">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    default:
      return null
  }
}

/** A small schematic card: a vertical chain of steps, optionally forking into branches. */
function Diagram({ block }: { block: Extract<ArticleBlock, { type: 'diagram' }> }) {
  return (
    <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
        {block.title}
      </span>
      <div className="mt-3 flex flex-col gap-2">
        {block.steps.map((step, index) => (
          <Fragment key={index}>
            <div className="border border-[var(--color-border)] bg-[var(--color-base)] px-3 py-2 text-center font-mono text-[11px] leading-snug text-[var(--color-text)]">
              {step}
            </div>
            {index < block.steps.length - 1 && (
              <span aria-hidden="true" className="text-center font-mono text-[var(--color-accent)]">
                ↓
              </span>
            )}
          </Fragment>
        ))}
        {block.branches && (
          <>
            <span aria-hidden="true" className="text-center font-mono text-[var(--color-accent)]">
              ↓
            </span>
            <div className="flex flex-col gap-2">
              {block.branches.map((branch, index) => (
                <div
                  key={index}
                  className="border border-[var(--color-border)] bg-[var(--color-base)] px-3 py-2 text-center font-mono text-[11px] leading-snug text-[var(--color-text)]"
                >
                  {branch}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

interface ArticleSection {
  heading: string | null
  main: ArticleBlock[]
  diagrams: Extract<ArticleBlock, { type: 'diagram' }>[]
}

/** Splits a flat block stream into heading-delimited sections, pulling diagrams into a side rail per section. */
function groupSections(blocks: ArticleBlock[]): ArticleSection[] {
  const sections: ArticleSection[] = [{ heading: null, main: [], diagrams: [] }]
  for (const block of blocks) {
    if (block.type === 'heading') {
      sections.push({ heading: block.text, main: [], diagrams: [] })
      continue
    }
    const current = sections[sections.length - 1]
    if (block.type === 'diagram') current.diagrams.push(block)
    else current.main.push(block)
  }
  return sections.filter((section) => section.heading || section.main.length || section.diagrams.length)
}

/** Standalone long-form article view, shown at the #/articles/:slug route. */
export function ArticlePage({ slug }: { slug: string }) {
  const article = getArticle(slug)

  if (!article) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <p className="font-mono text-sm text-[var(--color-muted)]">Article not found.</p>
        <a
          href={PROJECTS_HASH}
          className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-accent)]"
        >
          <span aria-hidden="true">←</span> Back to projects
        </a>
      </div>
    )
  }

  const sections = groupSections(article.blocks)

  return (
    <article className="min-h-screen pt-24 pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <a
          href={PROJECTS_HASH}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
        >
          <span aria-hidden="true">←</span> Back to projects
        </a>

        {/* Every row below shares the same lg:grid-cols-[1fr_260px] track so the
            text column width never changes, whether or not that row has a diagram. */}
        <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-10">
          <Reveal>
            <header className="mt-8 border-b border-[var(--color-border)] pb-8">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
                {article.meta}
              </span>
              <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[var(--color-text)] sm:text-4xl">
                {article.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-[var(--color-muted)]">
                {article.dek}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-[var(--color-accent)]/20 bg-[var(--color-surface)] px-2.5 py-1 font-mono text-xs text-[var(--color-accent)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </header>
          </Reveal>
        </div>

        {sections.map((section, index) => (
          <div key={index} className="lg:relative lg:grid lg:grid-cols-[1fr_260px] lg:items-start lg:gap-10">
            <div>
              {section.heading && (
                <h2 className="mt-12 mb-4 flex items-center gap-3 text-xl font-bold tracking-tight text-[var(--color-text)] sm:text-2xl">
                  <span className="h-px w-6 bg-[var(--color-accent)]" aria-hidden="true" />
                  {section.heading}
                </h2>
              )}
              {section.main.map((block, blockIndex) => (
                <Block key={blockIndex} block={block} />
              ))}
            </div>
            {section.diagrams.length > 0 && (
              <aside className="mt-6 space-y-4 lg:absolute lg:right-0 lg:top-0 lg:mt-12 lg:w-[260px]">
                {section.diagrams.map((diagram, diagramIndex) => (
                  <Diagram key={diagramIndex} block={diagram} />
                ))}
              </aside>
            )}
          </div>
        ))}
      </div>
    </article>
  )
}
