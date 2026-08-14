import { brand } from "../content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="container-edge flex flex-col items-center gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <img src="/media/alce-icon.png" alt="" className="h-5 w-auto opacity-80" />
        <span className="tracked-caps text-[10px] text-muted">
          © {year} ALCE STUDIOS
        </span>
      </div>
      <p className="tracked-caps text-[10px] text-chrome-700">
        {brand.location}
      </p>
      <a
        href={brand.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="tracked-caps text-[10px] text-muted transition-colors duration-500 hover:text-gold"
      >
        {brand.instagramHandle}
      </a>
    </footer>
  );
}
