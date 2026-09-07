import type { Metadata } from "next";
import { getDictionary, locales, type Locale } from "@/lib/dictionaries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionRoot from "@/components/Motion";
import { SITE } from "@/lib/site";
import "../globals.css";

/** Sin esto, `generateStaticParams` no cierra la ruta: el valor por defecto de
 *  App Router es `true` y cualquier segmento se renderiza bajo demanda. `/admin`,
 *  `/.env` y `/Verificacion-De-Pago-Requerida` devolvían 200 con la home entera,
 *  cacheados un año, y cada segmento inventado acuñaba cinco páginas nuevas. */
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const path = `/${lang}`;
  return {
    metadataBase: new URL(SITE),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: { languages: { es: "/es", en: "/en", "x-default": "/en" } },
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
        {/* Las fuentes se sirven desde el propio origen (public/fonts, @font-face
            en globals.css). El <link> a Google entregaba la IP del visitante a un
            tercero en cada carga y metía una hoja mutable en la ruta crítica.
            Versionadas en el repo, el build tampoco necesita red: FALLO-01 queda
            resuelto, no esquivado. */}
        <link rel="preload" href="/fonts/archivo-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/source-serif-4-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
      </head>
      <body className="font-sans antialiased">
        {/* Debe ser el primer elemento enfocable del documento: la navegación es
            fija y /research añade una segunda barra, así que sin esto el usuario
            de teclado las recorre enteras en cada página. */}
        <a href="#contenido" className="skip-link">
          {dict.nav.skip}
        </a>
        <MotionRoot />
        <Navbar dict={dict} lang={lang as Locale} />
        {children}
        <Footer dict={dict} lang={lang as Locale} />
      </body>
    </html>
  );
}
