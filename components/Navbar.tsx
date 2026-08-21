"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import ThemeToggle from "@/components/ThemeToggle";
import { ReadingProgress } from "@/components/Motion";

export default function Navbar({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const pathname = usePathname();
  const otherLang = lang === "es" ? "en" : "es";
  const switchHref = pathname.replace(`/${lang}`, `/${otherLang}`) || `/${otherLang}`;
  const resolve = (href: string) => `/${lang}${href}`;

  return (
    <nav className="no-print sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1080px] items-center justify-between gap-4 px-6 py-3.5">
        <Link
          href={`/${lang}`}
          className="font-display text-[15px] font-semibold tracking-tight text-ink"
        >
          Davirson Novoa
        </Link>

        <div className="hidden items-center gap-7 text-[14px] font-medium text-body md:flex">
          {dict.nav.links.map((l) => (
            <Link
              key={l.label}
              href={resolve(l.href)}
              /* the rule under a link is drawn on approach, the way a reader
                 underlines a line in a printed sheet — no colour wash, no glow */
              className="relative py-1 transition-colors hover:text-cold after:absolute after:inset-x-0 after:-bottom-px after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-cold after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Language is a labelled control, not a dim glyph: the previous build
              hid it against the dark ground and reviewers never found it. */}
          <Link
            href={switchHref}
            title={dict.nav.switchTitle}
            aria-label={dict.nav.switchTitle}
            className="lift inline-flex h-9 items-center rounded-[3px] border border-coldline bg-coldsoft px-3 font-display text-[14px] font-semibold tracking-[0.06em] text-cold transition-colors hover:border-cold"
          >
            {dict.nav.switchLabel}
          </Link>

          <ThemeToggle labels={{ light: dict.nav.themeLight, dark: dict.nav.themeDark }} />

          <a
            href={`mailto:${dict.profile.email}`}
            className="lift hidden h-9 items-center rounded-[3px] bg-cold px-4 text-[14px] font-semibold text-paper transition-opacity hover:opacity-90 sm:inline-flex"
          >
            {dict.nav.contact}
          </a>
        </div>
      </div>

      <ReadingProgress />
    </nav>
  );
}
