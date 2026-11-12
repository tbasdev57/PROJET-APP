import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../data/portfolio';

const socialLinks = [
  { icon: Github, href: GITHUB_URL, label: 'GitHub' },
  { icon: Linkedin, href: LINKEDIN_URL, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${EMAIL}`, label: 'Email' },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-surface px-5 pb-20 pt-28 sm:px-6"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[120px] md:h-96 md:w-96" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[120px] md:h-96 md:w-96" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="reveal mb-8 inline-flex max-w-full items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm text-accent">
          <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span>Disponible — ouvert aux opportunités en CDI et freelance</span>
        </div>

        <h1 className="reveal text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl">
          Tayyib
          <span className="block bg-gradient-to-r from-accent via-sky-400 to-cyan-500 bg-clip-text text-transparent">
            BASBUNAR
          </span>
        </h1>

        <p className="reveal mt-6 text-base font-semibold text-accent sm:text-lg md:text-xl">
          Développeur Front-End — React.js, Next.js, React Native
        </p>

        <p className="reveal mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Je crée des sites web modernes, rapides et faciles à utiliser avec React et Next.js.
        </p>

        <div className="reveal mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-on-accent transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
          >
            Voir mes projets
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-line/15 px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-200 hover:border-accent/40 hover:bg-line/5 hover:text-accent"
          >
            Me contacter
          </a>
        </div>

        <div className="reveal mt-12 flex items-center justify-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="rounded-xl border border-line/10 bg-surface-card/60 p-3 text-ink-soft transition-all duration-200 hover:border-accent/40 hover:bg-accent/5 hover:text-accent"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block" aria-hidden="true">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-line/20 pt-2">
          <div className="h-2 w-1 animate-scroll-dot rounded-full bg-ink-faint" />
        </div>
      </div>
    </section>
  );
}
