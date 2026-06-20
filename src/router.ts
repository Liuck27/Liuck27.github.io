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
const ARTICLE_PREFIX = '#/articles/'

/** Whether the given hash resolves to the standalone Projects view. */
export function isProjectsRoute(hash: string): boolean {
  return hash === PROJECTS_HASH || hash.startsWith('#/projects')
}

/** Builds the hash route for a given article slug. */
export function articleHash(slug: string): string {
  return `${ARTICLE_PREFIX}${slug}`
}

/** Whether the given hash resolves to a standalone article view. */
export function isArticleRoute(hash: string): boolean {
  return hash.startsWith(ARTICLE_PREFIX)
}

/** Extracts the article slug from an article-route hash, if present. */
export function getArticleSlug(hash: string): string | null {
  return isArticleRoute(hash) ? hash.slice(ARTICLE_PREFIX.length) : null
}
