import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data.ts'
import { PROJECTS_HASH } from '../router.ts'

/**
 * Sticky top navigation in the Neural Vision style: a monospace brand mark,
 * uppercase home-section links, a standalone Projects tab, and an outlined
 * Contact action. Gains a glass background and hairline border on scroll.
 */
export function Nav({ onProjects }: { onProjects: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  // Home-section anchors (all but the trailing Contact, rendered as a button).
  const sectionLinks = navLinks.slice(0, -1)
  const contactLink = navLinks[navLinks.length - 1]

  const linkClass =
    'font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || onProjects
          ? 'border-b border-[var(--color-border)] bg-[var(--color-surface)]/85 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-bold tracking-tight text-[var(--color-accent)]"
        >
          {initials}
          <span className="text-[var(--color-text)]">_</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {sectionLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={linkClass}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={PROJECTS_HASH}
              className={`font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:text-[var(--color-accent)] ${
                onProjects
                  ? 'border-b border-[var(--color-accent)] pb-1 text-[var(--color-accent)]'
                  : 'text-[var(--color-muted)]'
              }`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href={contactLink.href}
              className="border border-[var(--color-accent)]/60 px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-accent)] transition-all hover:bg-[var(--color-accent)] hover:text-[var(--color-base)]"
            >
              {contactLink.label}
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-9 w-9 items-center justify-center border border-[var(--color-border)] text-[var(--color-accent)] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="flex flex-col gap-1">
            <span className="block h-px w-4 bg-current" />
            <span className="block h-px w-4 bg-current" />
            <span className="block h-px w-4 bg-current" />
          </span>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-[var(--color-border)] bg-[var(--color-surface)]/95 px-6 py-4 backdrop-blur-xl md:hidden">
          {sectionLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={PROJECTS_HASH}
              onClick={() => setOpen(false)}
              className="block py-2 font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href={contactLink.href}
              onClick={() => setOpen(false)}
              className="block py-2 font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              {contactLink.label}
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
