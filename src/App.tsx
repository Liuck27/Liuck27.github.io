import { Nav } from './components/Nav.tsx'
import { Hero } from './components/Hero.tsx'
import { About } from './components/About.tsx'
import { Skills } from './components/Skills.tsx'
import { Projects } from './components/Projects.tsx'
import { Background } from './components/Background.tsx'
import { Contact } from './components/Contact.tsx'
import { Footer } from './components/Footer.tsx'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Background />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
