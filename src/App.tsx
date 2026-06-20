import { useEffect } from 'react'
import { Nav } from './components/Nav.tsx'
import { Hero } from './components/Hero.tsx'
import { About } from './components/About.tsx'
import { Skills } from './components/Skills.tsx'
import { Experience } from './components/Experience.tsx'
import { ProjectsPage } from './components/ProjectsPage.tsx'
import { ArticlePage } from './components/ArticlePage.tsx'
import { Background } from './components/Background.tsx'
import { Contact } from './components/Contact.tsx'
import { Footer } from './components/Footer.tsx'
import { useHash, isProjectsRoute, isArticleRoute, getArticleSlug } from './router.ts'

function App() {
  const hash = useHash()
  const onProjects = isProjectsRoute(hash)
  const onArticle = isArticleRoute(hash)
  const articleSlug = getArticleSlug(hash)

  // Sync scroll position with the route: jump to top on the Projects/Article
  // views, and resolve in-page anchors on the home view (including when
  // arriving from another view, where the target only exists after render).
  useEffect(() => {
    if (onProjects || onArticle) {
      window.scrollTo(0, 0)
      return
    }
    const id = hash.replace(/^#\/?/, '')
    if (id) {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView()
      })
    }
  }, [hash, onProjects, onArticle])

  return (
    <>
      <Nav onProjects={onProjects} />
      {onArticle && articleSlug ? (
        <main>
          <ArticlePage slug={articleSlug} />
        </main>
      ) : onProjects ? (
        <main>
          <ProjectsPage />
        </main>
      ) : (
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Background />
          <Contact />
        </main>
      )}
      <Footer />
    </>
  )
}

export default App
