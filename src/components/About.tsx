export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-surface-alt py-20 md:py-28">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-accent/10 blur-[100px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="reveal max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            À propos
          </p>
          <h2 className="mb-8 text-3xl font-bold leading-tight text-ink md:text-5xl">
            J'aime résoudre des problèmes concrets avec du code propre et bien pensé.
          </h2>
          <div className="space-y-6 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              Passionné par le développement web, je travaille principalement avec React, Next.js et TypeScript pour créer des interfaces modernes, fluides et adaptées à tous les écrans.
            </p>
            <p>
              J'aime développer des applications, résoudre des problèmes techniques et améliorer l'expérience utilisateur. Je suis curieux, motivé et toujours prêt à apprendre de nouvelles choses. Aujourd'hui, je souhaite mettre mes compétences en pratique au sein d'une équipe, participer à des projets concrets et continuer à évoluer en tant que développeur Front-End.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
