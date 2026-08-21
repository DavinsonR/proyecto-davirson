import type { Metadata } from "next";
import { getDictionary, locales, type Locale } from "@/lib/dictionaries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionRoot from "@/components/Motion";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: { languages: { es: "/es", en: "/en" } },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
      </head>
      <body className="font-sans antialiased">
        <div
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `<!--
  THESIS: A candidate read the way this audience reads an asset - verdict first,
  figures in a band, evidence below, disclosures at the foot. It refuses the dark
  developer-portfolio arrangement (mono, neon, terminal chrome) that the previous
  build shipped and that four reviewers independently rejected.
  OWN-WORLD: Research tear sheet. White paper ground, near-black ink, institutional
  blue #0F4C81 owning whole bands, amber #96551A reserved for human/purpose content
  only. Archivo throughout with tabular figures; Source Serif 4 for figures set
  large. Hairline rules and banded rows carry structure - no cards, no shadows.
  STORY: The visitor sees the crossover (finance + data) stated as a verdict,
  verifies it against figures and a live pipeline that refreshes daily, then
  downloads the CV or writes.
  FIRST VIEWPORT: Classification line with as-of date; the name; the verdict
  "Finance Data Analyst" set large in the serif; one thesis line; an availability
  block with direct contact rows; a full-width band of four tabular figures.
  FORM: Research tear sheet - candidate 1 of the ordered grounded list, chosen by
  the user over the assigned roll. Seed key 6ba48d98.
  FINISH: unreviewed and undocumented is unfinished; this build ends with the
  finish review, the verdict, DESIGN.md, and every shipping raster carrying its
  provenance.
-->`,
          }}
        />
        <MotionRoot />
        <Navbar dict={dict} lang={lang as Locale} />
        {children}
        <Footer dict={dict} lang={lang as Locale} />
      </body>
    </html>
  );
}
