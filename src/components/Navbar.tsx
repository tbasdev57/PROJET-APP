import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, sectionIds } from '../data/portfolio';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy(sectionIds);
  useBodyScrollLock(menuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <nav
      aria-label="Navigation principale"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-line/10 bg-surface/85 py-3 backdrop-blur-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-ink transition-colors hover:text-accent"
        >
          Tayyib BASBUNAR<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeSection === link.href.slice(1) ? 'true' : undefined}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                activeSection === link.href.slice(1)
                  ? 'text-accent'
                  : 'text-ink-soft hover:text-ink'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact-form"
            className="hidden items-center rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/25 md:inline-flex"
          >
            Me contacter
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-line/10 bg-surface-card/60 text-ink md:hidden"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="mx-4 mt-3 flex flex-col gap-1 rounded-2xl border border-line/10 bg-surface-card p-3 shadow-xl animate-fade-in md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-ink-soft transition-colors hover:bg-line/5 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
