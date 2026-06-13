import { profile } from '../data.ts'

/** Simple footer with attribution. */
export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-8">
      <div className="mx-auto max-w-5xl text-center font-mono text-xs text-[var(--color-muted)]">
        <p>
          Designed and built by {profile.name}. Built with React, TypeScript,
          and Tailwind CSS.
        </p>
        <p className="mt-1">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  )
}
