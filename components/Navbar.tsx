"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary, Locale } from "@/lib/dictionaries";

export default function Navbar({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const pathname = usePathname();
  const otherLang = lang === "es" ? "en" : "es";
  const switchHref = pathname.replace(`/${lang}`, `/${otherLang}`) || `/${otherLang}`;

  const resolve = (href: string) =>
    href.startsWith("#") ? `/${lang}${href}` : `/${lang}${href}`;

  return (
    <nav className="sticky top-0 z-50 bg-ink/90 backdrop-blur-md border-b border-linesoft">
      <div className="max-w-[980px] mx-auto px-6 flex items-center justify-between py-5">
        <Link href={`/${lang}`} className="font-display text-[17px] font-semibold tracking-tight text-fg">
          Davirson<i className="not-italic text-warm">.</i>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-[13.5px] font-medium text-body">
          {dict.nav.links.map((l) => (
            <Link key={l.label} href={resolve(l.href)} className="hover:text-fg transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={switchHref}
            aria-label={`Switch language to ${dict.nav.switchLabel}`}
            className="font-mono text-[12px] text-dim hover:text-cold transition-colors px-2 py-1.5 border border-transparent hover:border-line rounded"
          >
            {dict.nav.switchLabel}
          </Link>
          <a
            href={`mailto:${dict.profile.email}`}
            className="text-[13px] font-semibold px-5 py-2 border border-line rounded hover:border-cold hover:text-cold text-fg transition-colors"
          >
            {dict.nav.contact}
          </a>
        </div>
      </div>
    </nav>
  );
}
