import { skills } from '../data/portfolio';

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-surface py-20 md:py-28">
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="reveal mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Compétences
          </p>
          <h2 className="text-3xl font-bold text-ink md:text-5xl">Ma stack technique</h2>
          <p className="mt-4 text-base text-ink-soft md:text-lg">
            Les technologies que j'utilise au quotidien pour livrer des produits.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {skills.map((skill, i) => (
            <div
              key={skill.label}
              className="reveal h-full"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
            <div className="group flex h-full flex-col rounded-2xl border border-line/10 bg-surface-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 md:p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                <skill.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mb-4 text-lg font-semibold text-ink">{skill.label}</h3>
              <ul className="space-y-2.5">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-ink-soft">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
