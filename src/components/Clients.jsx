import Reveal from "./Reveal";
import { clients } from "../content";

export default function Clients() {
  const row = [...clients, ...clients];

  return (
    <section id="clientes" className="py-24 sm:py-32">
      <div className="container-edge">
        <Reveal as="span" className="tracked-caps mb-4 inline-block text-[10px] text-gold">
          Créditos
        </Reveal>
        <Reveal as="h2" delay={0.06} className="max-w-xl font-display text-4xl text-paper sm:text-5xl">
          Marcas y artistas con quienes hemos rodado
        </Reveal>
      </div>

      <Reveal delay={0.12} className="mt-14 overflow-hidden">
        <div className="group flex w-max [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee-track flex w-max items-center gap-10 group-hover:[animation-play-state:paused] sm:gap-16">
            {row.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-display text-3xl text-muted transition-colors duration-500 hover:text-paper sm:text-4xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
