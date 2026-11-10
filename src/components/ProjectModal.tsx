import { useEffect, useRef } from 'react';
import { Check, ExternalLink, Github, XCircle } from 'lucide-react';
import type { Project } from '../data/portfolio';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  useBodyScrollLock(true);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 animate-fade-in bg-surface-alt/80 backdrop-blur-sm" aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative flex max-h-[90vh] w-full max-w-2xl animate-modal-in flex-col overflow-hidden rounded-3xl border border-line/10 bg-surface-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-line/10 px-5 py-4 md:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <span className="hidden shrink-0 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent sm:inline-block">
              {project.category}
            </span>
            <h3 id="project-modal-title" className="truncate text-lg font-bold text-ink">
              {project.title}
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full p-2 text-ink-soft transition-colors hover:bg-line/5 hover:text-ink"
            aria-label="Fermer"
          >
            <XCircle className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="overflow-y-auto">
          <div className="relative h-48 overflow-hidden md:h-64">
            <img
              src={project.image}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/20 to-transparent" aria-hidden="true" />
          </div>

          <div className="space-y-6 p-5 md:p-8">
            <p className="leading-relaxed text-ink-soft">{project.longDescription}</p>

            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-ink">
                Technologies
              </h4>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="flex items-center gap-1.5 rounded-lg border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent"
                  >
                    <Check className="h-3 w-3" aria-hidden="true" />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-line/15 px-5 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:border-accent/40 hover:text-accent"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                Voir le code sur GitHub
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-on-accent transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/25"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Voir le projet
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
