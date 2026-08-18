import { useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "../lib/gsapSetup";
import lottie from "lottie-web";

export default function LottieIcon({ src, className = "" }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const anim = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: false,
        path: src,
      });

      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 12, filter: "blur(4px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      if (reduce) {
        anim.goToAndStop(0, true);
        return () => anim.destroy();
      }

      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 90%",
        end: "bottom 10%",
        onEnter: () => anim.play(),
        onEnterBack: () => anim.play(),
        onLeave: () => anim.pause(),
        onLeaveBack: () => anim.pause(),
      });

      return () => anim.destroy();
    },
    { scope: ref }
  );

  return <div ref={ref} className={className} aria-hidden="true" />;
}
