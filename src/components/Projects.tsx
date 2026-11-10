import { useCallback, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolio';
import type { Project } from '../data/portfolio';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeProject = useCallback(() => setSelectedProject(null), []);

  return (
    <section id="projects" className="relative overflow-hidden bg-surface-alt py-20 md:py-28">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="reveal mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Projets
          </p>
          <h2 className="text-3xl font-bold text-ink md:text-5xl">Réalisations sélectionnées</h2>
          <p className="mt-4 text-base text-ink-soft md:text-lg">
            Quelques projets sur lesquels j'ai travaillé. Cliquez sur une carte pour en savoir plus.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="reveal h-full"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line/10 bg-surface-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
              <div className="relative h-48 overflow-hidden sm:h-52">
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card/80 via-transparent to-transparent" aria-hidden="true" />
                <span className="absolute left-4 top-4 rounded-full border border-accent/20 bg-surface-alt/70 px-2.5 py-1 text-xs font-semibold text-accent backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="text-left after:absolute after:inset-0 after:content-['']"
                >
                  <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                </button>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {project.description}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <ul className="flex min-w-0 flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-accent/20 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="relative z-10 flex shrink-0 items-center gap-1">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Code source de ${project.title} sur GitHub`}
                      className="rounded-lg p-2 text-ink-soft transition-colors hover:bg-line/5 hover:text-accent"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Voir le projet ${project.title}`}
                        className="rounded-lg p-2 text-ink-soft transition-colors hover:bg-line/5 hover:text-accent"
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={closeProject} />}
    </section>
  );
}
