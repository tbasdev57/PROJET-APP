import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { EMAIL, LINKEDIN_URL } from '../data/portfolio';

const contactItems = [
  { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: 'Téléphone', value: '+33 7 83 07 25 40', href: 'tel:+33783072540' },
  { icon: MapPin, label: 'Localisation', value: 'Paris, France', href: 'https://maps.google.com/?q=Paris,France' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Tayyib BASBUNAR', href: LINKEDIN_URL },
];

type SubmissionState = 'idle' | 'sending' | 'success' | 'error';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<SubmissionState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const clearFields = () => {
      formRef.current?.reset();
      setStatus('idle');
      setErrorMessage('');
    };
    clearFields();
    window.addEventListener('pageshow', clearFields);
    window.addEventListener('pagehide', clearFields);
    return () => {
      window.removeEventListener('pageshow', clearFields);
      window.removeEventListener('pagehide', clearFields);
    };
  }, []);

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get('_honey') ?? '').trim()) return;

    setStatus('sending');
    setErrorMessage('');
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      const result: { success?: boolean | string; message?: string } = await response.json();
      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        if (/activat|confirm/i.test(result.message ?? '')) throw new Error('activation');
        throw new Error('submission');
      }
      form.reset();
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error && error.message === 'activation'
        ? 'L’adresse de réception doit être activée. Vérifiez votre boîte Gmail et les spams pour confirmer FormSubmit.'
        : 'L’envoi a échoué. Réessayez ou contactez-moi directement par email.');
    }
  }

  const inputStyle = 'w-full min-w-0 rounded-xl border border-line/15 bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20';

  return (
    <section id="contact" className="relative overflow-hidden bg-surface py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[150px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Contact</p>
          <h2 className="mb-6 text-3xl font-bold text-ink md:text-5xl">Travaillons ensemble</h2>
          <p className="mb-10 text-base text-ink-soft md:text-lg">
            Une opportunité professionnelle ou un projet à proposer ? Contactez-moi directement en quelques clics.
          </p>

          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex min-w-0 flex-col items-center justify-center rounded-2xl border border-line/10 bg-surface-card/60 px-3 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 sm:px-4">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="text-sm text-ink-faint">{label}</span>
                <span className="mt-1 max-w-full whitespace-nowrap text-center text-[11px] font-semibold leading-6 tracking-tight text-ink sm:text-xs 2xl:text-sm">{value}</span>
              </a>
            ))}
          </div>

          <div id="contact-form" className="mx-auto max-w-2xl scroll-mt-28 rounded-2xl border border-line/10 bg-surface-card/70 p-5 text-left shadow-xl shadow-accent/5 sm:p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-ink sm:text-2xl">Envoyer un message</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">Décrivez votre besoin ou votre opportunité. Je pourrai vous répondre directement par email.</p>
            </div>
            <form ref={formRef} onSubmit={sendMessage} autoComplete="off" className="space-y-5">
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <input type="hidden" name="_subject" value="Nouveau contact — Portfolio Tayyib Basbunar" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_url" value="https://tayyib-portfolio.vercel.app/#contact" />
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-ink">Nom *</span>
                  <input className={inputStyle} type="text" name="name" autoComplete="off" maxLength={100} placeholder="Votre nom" required />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-ink">Adresse email *</span>
                  <input className={inputStyle} type="email" name="email" autoComplete="off" maxLength={254} placeholder="vous@exemple.fr" required />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink">Sujet *</span>
                <input className={inputStyle} type="text" name="subject" autoComplete="off" maxLength={150} placeholder="Votre demande" required />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink">Message *</span>
                <textarea className={inputStyle + ' min-h-[160px] resize-y'} name="message" autoComplete="off" rows={6} minLength={10} maxLength={4000} placeholder="Bonjour, je vous contacte au sujet de…" required />
              </label>
              <button type="submit" disabled={status === 'sending'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-on-accent transition-all hover:opacity-90 disabled:cursor-wait disabled:opacity-60 sm:w-auto">
                <Send className="h-4 w-4" aria-hidden="true" />
                {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
              </button>
              {status === 'success' && <p role="status" className="rounded-xl border border-accent/25 bg-accent/10 p-3 text-sm text-ink">
                Votre demande a été transmise au service d’envoi. La réception par email dépend de l’activation de cette adresse et des contrôles du service.
              </p>}
              {status === 'error' && <p role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-ink">
                {errorMessage} <a className="font-semibold text-accent underline" href={`mailto:${EMAIL}`}>Envoyer un email</a>
              </p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
