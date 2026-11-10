import { Github, Linkedin, Mail } from 'lucide-react';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../data/portfolio';

const socialLinks = [
  { icon: Github, href: GITHUB_URL, label: 'GitHub' },
  { icon: Linkedin, href: LINKEDIN_URL, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${EMAIL}`, label: 'Email' },
];

export function Footer() {
  return (
    <footer className="border-t border-line/5 bg-surface-alt py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 text-center sm:px-6 md:flex-row lg:px-8">
        <p className="text-sm text-ink-faint">Tayyib BASBUNAR — Développeur Front-End Junior</p>
        <div className="flex items-center gap-2">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="rounded-lg p-2 text-ink-faint transition-colors hover:text-accent"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="text-sm text-ink-faint">© {new Date().getFullYear()} Tous droits réservés.</p>
      </div>
    </footer>
  );
}
