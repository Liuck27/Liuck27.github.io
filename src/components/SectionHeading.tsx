interface SectionHeadingProps {
  index: string
  title: string
}

/** Consistent numbered section heading used across the page. */
export function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-sm text-[var(--color-accent)]">
        {index}
      </span>
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      <span className="h-px flex-1 bg-[var(--color-border)]" />
    </div>
  )
}
