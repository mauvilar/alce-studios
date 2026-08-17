import Reveal from "./Reveal";
import { brand } from "../content";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t border-paper/10 py-28 sm:py-40"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gold/10 blur-[120px]" />

      <div className="container-edge relative flex flex-col items-center text-center">
        <img
          src="/media/alce-icon-transparent.png"
          alt=""
          className="mb-8 h-14 w-auto opacity-90"
        />
        <Reveal
          as="h2"
          className="text-balance font-display text-[10vw] leading-[1.05] text-paper sm:text-6xl lg:text-7xl"
        >
          ¿Tu próxima producción?
        </Reveal>
        <Reveal
          delay={0.1}
          className="mt-6 max-w-md text-base text-muted sm:text-lg"
        >
          Videos musicales, comerciales, bodas o contenido de marca:
          hablemos de tu proyecto.
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-gold py-2 pl-6 pr-2 text-sm font-semibold text-void transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-gold-soft active:scale-[0.98]"
          >
            Escribir por WhatsApp
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-void/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-[1px] group-hover:translate-x-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H9M17 7V15"
                  stroke="#08090A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>

          <a
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="tracked-caps rounded-full border border-paper/20 px-6 py-3 text-[11px] text-paper transition-colors duration-500 hover:border-gold hover:text-gold"
          >
            {brand.instagramHandle}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
