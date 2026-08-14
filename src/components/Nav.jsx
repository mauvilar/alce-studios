import { useEffect, useState } from "react";
import { brand } from "../content";

const LINKS = [
  { href: "#trabajo", label: "Trabajo" },
  { href: "#servicios", label: "Servicios" },
  { href: "#clientes", label: "Clientes" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4">
        <nav
          className={`mt-4 sm:mt-6 flex w-full max-w-2xl items-center justify-between rounded-full border border-paper/10 px-3 py-2 sm:px-4 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            scrolled
              ? "bg-void/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
              : "bg-void/40 backdrop-blur-md"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 pl-1">
            <img
              src="/media/alce-icon.png"
              alt=""
              className="h-7 w-7 object-contain"
            />
            <span className="font-display text-[13px] tracking-wide text-paper">
              ALCE
            </span>
          </a>

          <div className="hidden sm:flex items-center gap-7">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="tracked-caps text-[10px] text-muted transition-colors duration-500 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-[11px] font-semibold text-void transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-gold active:scale-[0.98]"
          >
            Cotizar
          </a>

          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-8 w-8 items-center justify-center sm:hidden"
          >
            <span
              className={`absolute h-[1.5px] w-4 bg-paper transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "rotate-45" : "-translate-y-[5px]"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-4 bg-paper transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "-rotate-45" : "translate-y-[5px]"
              }`}
            />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-void/95 backdrop-blur-2xl transition-opacity duration-500 sm:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className={`font-display text-2xl text-paper transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${100 + i * 80}ms` : "0ms" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className={`mt-4 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-void transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              open ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: open ? "420ms" : "0ms" }}
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
