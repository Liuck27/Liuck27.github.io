import { useSyncExternalStore } from 'react'

/**
 * Minimal hash-based routing so the site works as a static GitHub Pages
 * deploy with no server rewrites. The Projects view lives at `#/projects`;
 * everything else is the home view, where bare `#section` hashes are used
 * for in-page anchor scrolling.
 */

function subscribe(callback: () => void) {
  window.addEventListener('hashchange', callback)
  return () => window.removeEventListener('hashchange', callback)
}

function getSnapshot() {
  return window.location.hash
}

/** Reactive access to the current location hash. */
export function useHash(): string {
  return useSyncExternalStore(subscribe, getSnapshot, () => '')
}

export const PROJECTS_HASH = '#/projects'

/** Whether the given hash resolves to the standalone Projects view. */
export function isProjectsRoute(hash: string): boolean {
  return hash === PROJECTS_HASH || hash.startsWith('#/projects')
}
