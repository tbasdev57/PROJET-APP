import { useReveal } from './hooks/useReveal';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  useReveal();

  return (
    <div className="min-h-screen font-sans">
      <a
        href="#main"
        className="sr-only z-[200] rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-on-accent focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Aller au contenu
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
