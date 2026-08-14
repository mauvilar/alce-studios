import { useRef } from "react";
import { useGSAP, gsap } from "../lib/gsapSetup";
import { brand } from "../content";

export default function Hero() {
  const root = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "expo.out" },
      });
      tl.fromTo(
        ".hero-icon",
        { opacity: 0, y: 24, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1 },
        0.2
      )
        .fromTo(
          ".hero-word",
          { opacity: 0, y: 40, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2 },
          0.4
        )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1 },
          0.75
        )
        .fromTo(
          ".hero-scroll",
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          1.1
        );

      gsap.to(".hero-bg", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: root }
  );

  return (
    <section
      id="top"
      ref={root}
      className="letterbox relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-void"
    >
      <div className="hero-bg absolute inset-0 scale-110">
        <video
          className="h-full w-full object-cover opacity-60"
          src="/media/hero-boda.mp4"
          poster="/media/hero-boda-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/70 via-void/40 to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/60 via-transparent to-void/60" />
      </div>

      <div className="container-edge relative z-20 flex flex-col items-center text-center">
        <img
          src="/media/alce-icon.png"
          alt="ALCE STUDIOS"
          className="hero-icon mb-6 h-16 w-auto sm:h-20"
        />
        <h1 className="hero-word font-display text-[15vw] leading-[0.9] tracking-tight text-paper sm:text-[9vw] lg:text-[7.5rem]">
          ALCE STUDIOS
        </h1>
        <p className="hero-sub tracked-caps mt-6 text-[10px] text-chrome-500 sm:text-xs">
          {brand.tagline} · {brand.location}
        </p>
        <p className="hero-sub mt-4 max-w-md text-balance text-sm text-muted sm:text-base">
          {brand.bio}
        </p>
      </div>

      <div className="hero-scroll absolute bottom-10 left-1/2 z-20 -translate-x-1/2 sm:bottom-14">
        <div className="flex flex-col items-center gap-2">
          <span className="tracked-caps text-[9px] text-muted">Scroll</span>
          <span className="h-10 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
        </div>
      </div>
    </section>
  );
}
