// All copy and data below is sourced from the real @alce_studios Instagram profile
// (public posts, bio, captions) — nothing here is invented.

export const brand = {
  name: "ALCE STUDIOS",
  tagline: "Productora Audiovisual",
  location: "Cancún · Caribe Mexicano",
  bio: "Compañía de producción cinematográfica especializada en videos musicales y comerciales, con base en el Caribe Mexicano.",
  since: 2020,
  instagram: "https://www.instagram.com/alce_studios/",
  instagramHandle: "@alce_studios",
  whatsapp: "https://wa.me/529987358890",
  whatsappLabel: "+52 998 735 8890",
};

export const stats = [
  { value: "2020", label: "Año de fundación" },
  { value: "80+", label: "Producciones publicadas" },
  { value: "12+", label: "Marcas y artistas" },
  { value: "MX", label: "Caribe Mexicano" },
];

export const services = [
  {
    n: "01",
    title: "Videos Musicales",
    desc: "Producción integral para lanzamientos — de la idea al video oficial, con dirección de arte propia.",
  },
  {
    n: "02",
    title: "Comerciales & Marca",
    desc: "Campañas para marcas y eventos, desde brand films hasta cobertura BTS lista para redes.",
  },
  {
    n: "03",
    title: "Bodas de Cine",
    desc: "Cobertura cinematográfica de bodas — el mismo lenguaje visual de nuestros videoclips, para el día más importante.",
  },
  {
    n: "04",
    title: "Contenido & BTS",
    desc: "Detrás de cámaras, contenido de marca y fotografía para campañas y prensa.",
  },
];

// Showcase grid — mixed video/photo, sizes drive the bento layout
export const showcase = [
  {
    id: "holbox-oficial",
    kind: "video",
    src: "/media/grid-holbox-oficial.mp4",
    poster: "/media/grid-holbox-oficial-poster.jpg",
    title: "HOLBOX",
    subtitle: "Video oficial · @itskidi_",
    size: "lg",
  },
  {
    id: "yacht",
    kind: "video",
    src: "/media/grid-yacht.mp4",
    poster: "/media/grid-yacht-poster.jpg",
    title: "Yacht Ride Cancún",
    subtitle: "Cobertura de evento",
    size: "sm",
  },
  {
    id: "caprimoderna",
    kind: "video",
    src: "/media/grid-caprimoderna.mp4",
    poster: "/media/grid-caprimoderna-poster.jpg",
    title: "Capri Moderna",
    subtitle: "Producción de marca",
    size: "sm",
  },
  {
    id: "duckzy",
    kind: "photo",
    src: "/media/photo-duckzy-release.jpg",
    title: "Duckzy — “Mi otro yo”",
    subtitle: "Arte de lanzamiento",
    size: "sm",
  },
  {
    id: "boxing",
    kind: "video",
    src: "/media/grid-boxing.mp4",
    poster: "/media/grid-boxing-poster.jpg",
    title: "Kenneth Aylett",
    subtitle: "Velada de box",
    size: "md",
  },
  {
    id: "boda-2",
    kind: "video",
    src: "/media/grid-boda-2.mp4",
    poster: "/media/grid-boda-2-poster.jpg",
    title: "Bodas ALCE",
    subtitle: "Primera boda del año",
    size: "md",
  },
  {
    id: "holbox-teaser",
    kind: "video",
    src: "/media/grid-holbox-teaser.mp4",
    poster: "/media/grid-holbox-teaser-poster.jpg",
    title: "Holbox Rolita",
    subtitle: "Teaser · @itskidi_",
    size: "sm",
  },
  {
    id: "boda-3",
    kind: "video",
    src: "/media/grid-boda-3.mp4",
    poster: "/media/grid-boda-3-poster.jpg",
    title: "Bodas ALCE",
    subtitle: "Detrás de cámaras",
    size: "sm",
  },
  {
    id: "posada",
    kind: "photo",
    src: "/media/photo-posada-team.jpg",
    title: "Posada ALCE 2025",
    subtitle: "El equipo",
    size: "sm",
  },
];

// Larger featured case studies with real captions (translated/adapted from the original posts)
export const featured = [
  {
    id: "dg",
    eyebrow: "Detrás de cámaras",
    title: "ALCE STUDIOS × Dolce & Gabbana",
    copy: "Un backstage con Dolce & Gabbana. Momentos que no se olvidan: conocimos a los directivos y, como siempre, trabajamos con gente que ama lo que hace.",
    credit: "Producción BTS · Alta costura",
    video: "/media/feature-dg.mp4",
    poster: "/media/feature-dg-poster.jpg",
    align: "right",
  },
  {
    id: "amanecimos",
    eyebrow: "Videoclip",
    title: "Kiddye & KAPAC — “Amanecimos”",
    copy: "Un visualizer oficial filmado y dirigido por el equipo ALCE. Dirección, cámara y edición propias, de guion a estreno.",
    credit: "Dirección KingCastrou · Cámara Flaco · A Film By Alce",
    video: "/media/feature-amanecimos.mp4",
    poster: "/media/feature-amanecimos-poster.jpg",
    align: "left",
  },
  {
    id: "jarulay",
    eyebrow: "Videoclip",
    title: "ja_rulay × Planet Records",
    copy: "“Siempre pa’ delante” — Cuba y México en la misma producción. Gracias a Planet Records por confiar en nosotros para este proyecto.",
    credit: "Producción musical · Planet Records",
    video: "/media/feature-jarulay.mp4",
    poster: "/media/feature-jarulay-poster.jpg",
    align: "right",
  },
];

// Verified collaborators, pulled directly from real post captions/tags on @alce_studios
export const clients = [
  "Dolce & Gabbana",
  "itskidi_",
  "Kiddye",
  "KAPAC",
  "alexmarfilmx",
  "ja rulay",
  "Planet Records",
  "Capri Moderna",
  "Yacht Ride Cancún",
  "Kenneth Aylett",
  "Duckzy",
  "JAVO Films",
];
