"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import ThemeToggle from "@/components/ThemeToggle";

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
            <Link key={l.label} href={resolve(l.href)} className="transition-colors hover:text-cold">
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
            className="inline-flex h-9 items-center rounded-[3px] border border-coldline bg-coldsoft px-3 font-display text-[14px] font-semibold tracking-[0.06em] text-cold transition-colors hover:border-cold"
          >
            {dict.nav.switchLabel}
          </Link>

          <ThemeToggle labels={{ light: dict.nav.themeLight, dark: dict.nav.themeDark }} />

          <a
            href={`mailto:${dict.profile.email}`}
            className="hidden h-9 items-center rounded-[3px] bg-cold px-4 text-[14px] font-semibold text-paper transition-opacity hover:opacity-90 sm:inline-flex"
          >
            {dict.nav.contact}
          </a>
        </div>
      </div>
    </nav>
  );
}
