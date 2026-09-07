import type { Metadata } from "next";
import { getDictionary, locales, type Locale } from "@/lib/dictionaries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionRoot from "@/components/Motion";
import { SITE } from "@/lib/site";
import { alternates } from "@/lib/alternates";
import { mailtoHref } from "@/lib/contact";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

/** Sin esto, `[lang]` acepta cualquier primer segmento: `/pricing` devolvía 200
 *  con la portada en español dentro de un `<html lang="pricing">` y con
 *  `robots: index, follow`. Una granja de soft-404 indexable, y el `canonical`
 *  por ruta la empeoraba (cada URL basura se declaraba canónica de sí misma).
 *  Ahora todo lo que no sea `es` o `en` es 404. */
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const path = `/${lang}`;
  return {
    metadataBase: new URL(SITE),
    // Sin plantilla, `/en/projects/trading-sim` se titulaba "Trading Sim — 1,300+
    // strategies vs. reality": el nombre de la persona no aparecía en ninguna
    // parte de la ranura que Google enseña para una búsqueda por nombre.
    title: { default: dict.meta.title, template: `%s — ${dict.profile.name}` },
    description: dict.meta.description,
    alternates: alternates(lang),
    // Sin esto, pegar el enlace en LinkedIn o WhatsApp muestra una tarjeta vacía.
    openGraph: {
      type: "profile",
      url: path,
      siteName: dict.profile.name,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: lang === "es" ? "es_CO" : "en_US",
      images: [{ url: `/og-${lang}.png`, width: 1200, height: 630, alt: `${dict.profile.name} — ${dict.sheet.verdict}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [`/og-${lang}.png`],
    },
    robots: { index: true, follow: true },
  };
}

/* Applied before paint so a reload never flashes the wrong ground, and so the
   reveal states exist from the first frame instead of snapping in at hydration.
   The timer is the failsafe: if the bundle never runs, nothing stays hidden. */
const BOOT = `(function(){var r=document.documentElement;try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')r.setAttribute('data-theme',t);}catch(e){}r.classList.add('js');setTimeout(function(){if(!r.hasAttribute('data-motion'))document.querySelectorAll('[data-reveal]').forEach(function(e){e.classList.add('is-in')})},3000);})();`;

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        {/* Antes de los <link>: un script clásico en línea no se ejecuta mientras
            una hoja de estilo bloquea scripts, así que el tema pre-pintado
            quedaba detrás de una petición a fonts.googleapis.com — y detrás de
            su tiempo de espera cuando un proxy corporativo la bloquea. */}
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Deliberado: next/font/google descarga en el build y ese build ha corrido
            sin red (FALLO-01). Un <link> degrada a la fuente del sistema; un build
            roto no degrada a nada. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {/* El primer tabulador de un lector de teclado caía en el conmutador de
            idioma y luego en cada enlace de la barra, en las cinco rutas. */}
        <a
          href="#main"
          className="no-print sr-only rounded-[3px] bg-cold px-4 py-2 text-[14.5px] font-semibold text-paper focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60]"
        >
          {dict.nav.skip}
        </a>
        <MotionRoot />
        <Navbar nav={dict.nav} mailHref={mailtoHref(dict)} lang={lang as Locale} />
        {children}
        <Footer dict={dict} lang={lang as Locale} />
      </body>
    </html>
  );
}
