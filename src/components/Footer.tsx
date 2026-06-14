import { profile } from '../data.ts'

/** Technical footer: brand mark, stack note, and a status indicator. */
export function Footer() {
  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-base)] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-muted)]">
          {initials}_ / {profile.name}
        </div>

        <p className="font-mono text-xs text-[var(--color-muted)]">
          Built with React · TypeScript · Tailwind CSS
        </p>

        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-[var(--color-muted)]">
            &copy; {new Date().getFullYear()}
          </span>
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted)]">
            Status:
            <span className="text-[var(--color-accent)]">Operational</span>
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          </span>
        </div>
      </div>
    </footer>
  )
}
