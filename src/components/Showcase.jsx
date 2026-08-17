import Reveal from "./Reveal";
import MediaCard from "./MediaCard";
import { showcase } from "../content";

export default function Showcase() {
  return (
    <section id="trabajo" className="container-edge py-24 sm:py-32">
      <div className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Reveal as="span" className="tracked-caps mb-4 inline-block text-[10px] text-gold">
            Trabajo seleccionado
          </Reveal>
          <Reveal as="h2" delay={0.06} className="font-display text-4xl text-paper sm:text-5xl">
            Lo que hemos filmado
          </Reveal>
        </div>
        <Reveal delay={0.1} className="max-w-xs text-sm text-muted">
          Directo del feed: pasa el cursor (o toca en móvil) para reproducir.
        </Reveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:auto-rows-[16rem]">
        {showcase.map((item, i) => (
          <Reveal
            key={item.id}
            delay={0.04 * (i % 4)}
            y={28}
            className={
              item.size === "lg"
                ? "col-span-1 row-span-1 lg:col-span-2 lg:row-span-2"
                : item.size === "md"
                ? "col-span-1 row-span-1 lg:col-span-2 lg:row-span-1"
                : "col-span-1 row-span-1"
            }
          >
            <MediaCard item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
