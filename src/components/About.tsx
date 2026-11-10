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
              J'ai commencé à coder par curiosité, et c'est resté. Aujourd'hui je travaille principalement avec React et Next.js, en TypeScript, pour construire des interfaces qui chargent vite et qui sont agréables à utiliser. Je tiens à écrire du code lisible, testé, et facile à reprendre pour les personnes qui passent derrière.
            </p>
            <p>
              Avant d'écrire la moindre ligne, je prends le temps de comprendre le besoin. Je collabore avec les designers et les équipes produit pour trouver le bon compromis entre ce qui est souhaitable et ce qui est réalisable dans les délais. Et je reste à jour sur les évolutions de l'écosystème front-end, pas par obligation mais par vrai intérêt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
