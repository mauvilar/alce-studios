import { useRef, useState } from "react";
import Reveal from "./Reveal";
import { featured } from "../content";

function FeaturedItem({ item }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const mediaFirst = item.align === "left";

  return (
    <div className="grid grid-cols-1 items-center gap-8 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
      <Reveal
        y={30}
        className={mediaFirst ? "order-1" : "order-1 lg:order-2"}
      >
        <div className="relative overflow-hidden rounded-[2rem] bg-void-soft p-1.5 ring-1 ring-paper/10">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[calc(2rem-0.375rem)] sm:aspect-video lg:aspect-[4/5]">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              src={item.video}
              poster={item.poster}
              loop
              playsInline
              preload="none"
            />
            <button
              onClick={toggle}
              aria-label={playing ? "Pausar" : "Reproducir"}
              className="group absolute inset-0 flex items-center justify-center bg-void/0 transition-colors duration-500 hover:bg-void/20"
            >
              <span
                className={`flex h-16 w-16 items-center justify-center rounded-full bg-paper/90 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-active:scale-95 ${
                  playing ? "opacity-0 group-hover:opacity-100" : "opacity-90"
                }`}
              >
                {playing ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="6" y="5" width="4" height="14" rx="1" fill="#08090A" />
                    <rect x="14" y="5" width="4" height="14" rx="1" fill="#08090A" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M7 4.5v15l13-7.5-13-7.5z" fill="#08090A" />
                  </svg>
                )}
              </span>
            </button>
          </div>
        </div>
      </Reveal>

      <Reveal
        delay={0.1}
        y={30}
        className={mediaFirst ? "order-2" : "order-2 lg:order-1"}
      >
        <p className="tracked-caps flex items-center gap-2 text-[10px] text-gold">
          {item.eyebrow}
          <span className="text-chrome-700">· con audio</span>
        </p>
        <h3 className="mt-4 text-balance font-display text-3xl leading-tight text-paper sm:text-4xl">
          {item.title}
        </h3>
        <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
          {item.copy}
        </p>
        <p className="tracked-caps mt-6 text-[9px] text-chrome-500">
          {item.credit}
        </p>
      </Reveal>
    </div>
  );
}

export default function Featured() {
  return (
    <section className="container-edge divide-y divide-paper/10 border-y border-paper/10">
      {featured.map((item) => (
        <FeaturedItem key={item.id} item={item} />
      ))}
    </section>
  );
}
