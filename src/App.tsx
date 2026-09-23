import StarField from './components/ui/StarField'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Toolkit from './components/sections/Toolkit'
import Journey from './components/sections/Journey'
import Exploring from './components/sections/Exploring'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen bg-deep">
      {/* Ambient background — radial gradient behind stars */}
      <div
        className="fixed inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          zIndex: 0,
          background:
            'radial-gradient(ellipse 80% 60% at 20% 20%, rgba(192,132,252,0.04) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(244,167,187,0.03) 0%, transparent 60%)',
        }}
      />

      {/* Star field */}
      <StarField />

      {/* Content */}
      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Toolkit />
          <Journey />
          <Exploring />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
