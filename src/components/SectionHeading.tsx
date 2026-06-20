interface SectionHeadingProps {
  /** Main section title. */
  title: string
}

/**
 * Section heading in the Neural Vision style: a single line combining the
 * monospace "//" accent with a bold title, over a hairline rule.
 */
export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="mb-12 border-b border-[var(--color-border)] pb-4">
      <h2 className="flex items-baseline gap-3 text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
        <span className="font-mono text-[var(--color-accent)]">{'//'}</span>
        {title}
      </h2>
    </div>
  )
}
