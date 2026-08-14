import Reveal from "./Reveal";
import { services } from "../content";

export default function Services() {
  return (
    <section id="servicios" className="container-edge py-24 sm:py-32">
      <Reveal as="span" className="tracked-caps mb-4 inline-block text-[10px] text-gold">
        Servicios
      </Reveal>
      <Reveal as="h2" delay={0.06} className="max-w-lg font-display text-4xl text-paper sm:text-5xl">
        De la idea al estreno
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[1.5rem] bg-paper/10 sm:grid-cols-2">
        {services.map((s, i) => (
          <Reveal
            key={s.n}
            delay={0.06 * i}
            className="group relative bg-void px-8 py-10 transition-colors duration-500 hover:bg-void-soft sm:px-10 sm:py-12"
          >
            <span className="font-mono text-xs text-chrome-700">{s.n}</span>
            <h3 className="mt-4 font-display text-xl text-paper sm:text-2xl">
              {s.title}
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {s.desc}
            </p>
            <span className="pointer-events-none absolute bottom-0 left-8 right-8 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-x-100 sm:left-10 sm:right-10" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
