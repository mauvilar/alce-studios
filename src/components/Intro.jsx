import Reveal from "./Reveal";
import LottieIcon from "./LottieIcon";
import { stats } from "../content";

export default function Intro() {
  return (
    <section className="container-edge relative py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center gap-3">
          <LottieIcon src="/lottie/camera.json" className="h-7 w-7 shrink-0" />
          <Reveal as="span" className="tracked-caps inline-block rounded-full border border-paper/15 px-3 py-1 text-[10px] text-gold">
            Quiénes somos
          </Reveal>
        </div>

        <Reveal
          as="p"
          delay={0.08}
          className="text-balance font-display text-[7vw] leading-[1.05] text-paper sm:text-5xl lg:text-6xl"
        >
          Contamos historias en el Caribe Mexicano desde{" "}
          <span className="text-chrome">2020</span>: videoclips, comerciales
          y las bodas que se sienten como cine.
        </Reveal>

        <Reveal delay={0.16} className="mt-10 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Cada producción sale del mismo lugar: pasión por la imagen y respeto
          por quien confía en nosotros. De un video musical en Holbox a un
          backstage con una casa de moda internacional, filmamos como si cada
          proyecto fuera el más importante. Porque lo es.
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-paper/10 pt-10 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.05 * i}>
              <div className="font-display text-3xl text-paper sm:text-4xl">
                {s.value}
              </div>
              <div className="tracked-caps mt-2 text-[9px] text-muted">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
