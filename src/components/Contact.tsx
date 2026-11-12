import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { EMAIL, LINKEDIN_URL } from '../data/portfolio';

const contactItems = [
  { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: 'Téléphone', value: '+33 7 83 07 25 40', href: 'tel:+33783072540' },
  { icon: MapPin, label: 'Localisation', value: 'Paris, France', href: 'https://maps.google.com/?q=Paris,France' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Tayyib BASBUNAR', href: LINKEDIN_URL },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-surface py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[150px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="mb-6 text-3xl font-bold text-ink md:text-5xl">Travaillons ensemble</h2>
          <p className="mb-12 text-base text-ink-soft md:text-lg">
            Une opportunité à discuter, un projet à explorer, ou juste envie d'échanger ? Écrivez-moi, je réponds généralement dans la journée.
          </p>

          <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex min-w-0 flex-col items-center justify-center rounded-2xl border border-line/10 bg-surface-card/60 px-3 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 sm:px-4"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="text-sm text-ink-faint">{label}</span>
                <span className="mt-1 max-w-full whitespace-nowrap text-center text-[11px] font-semibold leading-6 tracking-tight text-ink sm:text-xs 2xl:text-sm">{value}</span>
              </a>
            ))}
          </div>

          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-on-accent transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Envoyer un message
          </a>
        </div>
      </div>
    </section>
  );
}
