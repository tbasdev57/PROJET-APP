import { useEffect, useRef } from 'react';
import { XCircle, ArrowLeft } from 'lucide-react';
import type { Project } from '../data/portfolio';
import { projects } from '../data/portfolio';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { ProjectDemo } from './ProjectDemos';

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  useBodyScrollLock(true);
  useEffect(() => {
    closeButtonRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6" onClick={onClose}>
      <div className="absolute inset-0 animate-fade-in bg-surface-alt/80 backdrop-blur-sm" aria-hidden="true"/>
      <div role="dialog" aria-modal="true" aria-labelledby="project-modal-title" className="relative flex max-h-[96dvh] w-full max-w-5xl animate-modal-in flex-col overflow-hidden rounded-2xl border border-line/10 bg-surface-card shadow-2xl sm:max-h-[92dvh] sm:rounded-3xl" onClick={e=>e.stopPropagation()}>
        <header className="flex shrink-0 items-center justify-between gap-3 border-b border-line/10 px-4 py-4 sm:px-6">
          <div className="min-w-0"><p className="text-xs font-semibold uppercase tracking-widest text-accent">Projet · Démonstration interactive</p><h3 id="project-modal-title" className="mt-1 truncate text-base font-bold text-ink sm:text-xl">{project.title}</h3></div>
          <button ref={closeButtonRef} type="button" onClick={onClose} className="shrink-0 rounded-full p-2 text-ink-soft hover:bg-line/5 hover:text-ink" aria-label="Fermer le projet"><XCircle className="h-6 w-6" aria-hidden="true"/></button>
        </header>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6"><ProjectDemo index={projects.indexOf(project)}/></div>
        <footer className="shrink-0 border-t border-line/10 bg-surface-card px-4 py-3 sm:px-6"><button onClick={onClose} className="inline-flex items-center gap-2 rounded-xl border border-line/20 px-4 py-2 text-sm font-semibold text-ink hover:border-accent/40"><ArrowLeft className="h-4 w-4" aria-hidden="true"/>Retour aux projets</button></footer>
      </div>
    </div>
  );
}