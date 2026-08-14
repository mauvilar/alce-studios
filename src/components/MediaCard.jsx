import { useRef, useState } from "react";

export default function MediaCard({ item }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    if (item.kind !== "video") return;
    videoRef.current?.play().catch(() => {});
    setPlaying(true);
  };
  const stop = () => {
    if (item.kind !== "video") return;
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
    setPlaying(false);
  };

  return (
    <div
      className="group relative h-full min-h-56 w-full overflow-hidden rounded-[1.5rem] bg-void-soft ring-1 ring-paper/10 p-1.5"
      onMouseEnter={start}
      onMouseLeave={stop}
      onTouchStart={start}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[calc(1.5rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
        {item.kind === "video" ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
            src={item.src}
            poster={item.poster}
            muted
            loop
            playsInline
            preload="none"
          />
        ) : (
          <img
            src={item.src}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/90 via-void/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <p className="tracked-caps text-[9px] text-gold">{item.subtitle}</p>
          <p className="mt-1 font-display text-base text-paper sm:text-lg">
            {item.title}
          </p>
        </div>

        {item.kind === "video" && (
          <div
            className={`absolute right-4 top-4 h-2 w-2 rounded-full bg-gold transition-opacity duration-500 ${
              playing ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>
    </div>
  );
}
