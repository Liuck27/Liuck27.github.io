interface SectionHeadingProps {
  /** Two-digit section index, e.g. "01". */
  index: string
  /** Main section title. */
  title: string
  /** Short uppercase mono label rendered above the title. */
  kicker: string
  /** Total section count shown in the counter. Defaults to "05". */
  total?: string
}

/**
 * Numbered section heading in the Neural Vision style: an emerald mono
 * kicker, a bold title, and a monospace index counter over a hairline rule.
 */
export function SectionHeading({
  index,
  title,
  kicker,
  total = '05',
}: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-[var(--color-accent)]" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-accent)]">
          {kicker}
        </span>
      </div>
      <div className="mt-4 flex items-end justify-between gap-4 border-b border-[var(--color-border)] pb-4">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
          {title}
        </h2>
        <span className="hidden font-mono text-xs text-[var(--color-muted)] sm:block">
          {index} / {total}
        </span>
      </div>
    </div>
  )
}
