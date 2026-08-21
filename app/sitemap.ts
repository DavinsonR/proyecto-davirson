import type { MetadataRoute } from "next";
import { locales } from "@/lib/dictionaries";

const SITE = "https://proyecto-davirson-git.vercel.app";
const ROUTES = ["", "/cv", "/projects/trading-sim"];

/** Un sitio de tres rutas por idioma no necesita un sitemap para existir, pero
 *  sí para que el buscador sepa que /es y /en son la misma página en dos idiomas. */
export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((lang) =>
    ROUTES.map((route) => ({
      url: `${SITE}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${SITE}/${l}${route}`])),
      },
    })),
  );
}
