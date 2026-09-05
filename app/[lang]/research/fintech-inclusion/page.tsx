import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, THESIS_REPO } from "@/lib/dictionaries";
import StatusPill from "@/components/StatusPill";
import BackLink from "@/components/BackLink";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang);
  return {
    title: dict.thesis.metaTitle,
    description: dict.thesis.metaDesc,
    alternates: { languages: { es: "/es/research/fintech-inclusion", en: "/en/research/fintech-inclusion" } },
  };
}

const wrap = "mx-auto max-w-[980px] px-6";
const label = "text-[12.5px] font-semibold tracking-[0.09em] text-cold uppercase";
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

/* Technical content end to end: the only accent on this page is the cold one.
   Figures are set as written (no CountUp): "0,984" is a p-value, not a count. */
export default async function ThesisPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const t = dict.thesis;

  return (
    <main>
      {/* ================= HERO ================= */}
      <header className="border-b border-rule">
        <div className={wrap}>
          <div className="pt-20 pb-12">
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <BackLink href={`/${lang}`} label={dict.nav.backHome} />
              <StatusPill status="research" text={t.pill} />
            </div>
            <p className={label}>{t.kicker}</p>
            <h1 className="mt-3 max-w-[30ch] text-balance font-display text-[clamp(26px,3.8vw,42px)] leading-[1.16] font-medium tracking-[-0.02em] text-ink">
              {t.title}
            </h1>
            <p className="mt-4 max-w-[70ch] text-[15.5px] leading-[1.7] text-ink">{t.subtitle}</p>
            <p className="mt-3 text-[14px] text-body">{t.degree}</p>
            <p className="mt-1 text-[14px] text-muted">{t.timeline}</p>
          </div>
        </div>

        {/* figures band — each figure lands on the README anchor that states it */}
        <div className="border-t-2 border-cold bg-coldsoft">
          <div className={wrap}>
            <dl className="grid grid-cols-2 py-6 lg:grid-cols-4">
              {t.figures.map((f, i) => (
                <div
                  key={f.label}
                  data-reveal
                  className="reveal border-coldline py-2 lg:border-l lg:pl-5 lg:first:border-l-0 lg:first:pl-0"
                  style={{ "--d": `${i * 70}ms` } as React.CSSProperties}
                >
                  <a href={f.href} {...ext} className="lift group block">
                    <dd className="font-figure text-[clamp(28px,3.8vw,40px)] leading-none text-ink group-hover:text-cold">
                      {f.value}
                    </dd>
                    <dt className="mt-2 max-w-[26ch] text-[14px] leading-[1.4] font-medium text-ink underline decoration-cold decoration-[1.5px] underline-offset-4 group-hover:decoration-[2.5px]">
                      {f.label}
                    </dt>
                  </a>
                  <p className="mt-1 text-[14px] text-body">{f.note}</p>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </header>

      {/* ================= ABSTRACT ================= */}
      <section className="border-b border-rule py-14">
        <div className={wrap}>
          <p data-reveal className={`reveal ${label}`}>{t.abstract.label}</p>
          <p data-reveal className="reveal mt-5 max-w-[74ch] text-[16px] leading-[1.8] text-body" style={{ "--d": "70ms" } as React.CSSProperties}>
            {t.abstract.body}
          </p>
        </div>
      </section>

      {/* ================= METHOD ================= */}
      <section id="metodo" className="scroll-mt-16 border-b border-rule py-16">
        <div className={wrap}>
          <p data-reveal className={`reveal ${label}`}>{t.method.label}</p>
          <h2 data-reveal className="reveal mt-3 max-w-[26ch] font-display text-[clamp(23px,2.9vw,31px)] leading-[1.15] font-bold tracking-[-0.02em] text-ink" style={{ "--d": "60ms" } as React.CSSProperties}>
            {t.method.title}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
            {t.method.items.map((m, i) => (
              <div key={m.title} data-reveal className="reveal border-t border-rule pt-5" style={{ "--d": `${i * 60}ms` } as React.CSSProperties}>
                <p className="text-[14.5px] font-semibold text-ink">{m.title}</p>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-body">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RESULT — the honest finding, in the cold band ================= */}
      <section id="resultado" className="scroll-mt-16 border-b border-rule py-16">
        <div className={wrap}>
          <div data-reveal className="reveal border-y border-cold bg-coldsoft px-6 py-7">
            <p className={label}>{t.result.label}</p>
            <p className="mt-3 max-w-[30ch] text-balance font-display text-[clamp(20px,2.6vw,27px)] leading-[1.25] font-bold tracking-[-0.015em] text-ink">
              {t.result.headline}
            </p>
            <p className="mt-4 font-figure text-[clamp(22px,3vw,30px)] leading-none text-cold [font-variant-numeric:tabular-nums]">
              {t.result.stat}
            </p>
            <p className="mt-5 max-w-[72ch] text-[15px] leading-[1.7] text-ink">{t.result.body}</p>
          </div>
        </div>
      </section>

      {/* ================= STATUS + REPO ================= */}
      <section id="repositorio" className="scroll-mt-16 py-16">
        <div className={wrap}>
          <p data-reveal className={`reveal ${label}`}>{t.status.label}</p>
          <h2 data-reveal className="reveal mt-3 max-w-[26ch] font-display text-[clamp(23px,2.9vw,31px)] leading-[1.15] font-bold tracking-[-0.02em] text-ink" style={{ "--d": "60ms" } as React.CSSProperties}>
            {t.status.title}
          </h2>
          <ol className="mt-6 max-w-[74ch]">
            {t.status.items.map((s, i) => (
              <li key={i} className="grid grid-cols-[32px_1fr] items-baseline gap-x-3 border-t border-rulesoft py-3 text-[14.5px] leading-[1.65] first:border-t-2 first:border-ink">
                <span className="font-figure text-[20px] leading-none text-cold">{i + 1}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <a href={THESIS_REPO} {...ext} className="lift rounded-[3px] bg-cold px-5 py-3 text-[14px] font-semibold text-paper transition-opacity hover:opacity-90">
              {t.repoCta}
            </a>
            <Link href={`/${lang}`} className="rounded-[3px] border border-rule px-5 py-3 text-[14px] text-ink transition-colors hover:border-cold">
              {t.backCta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
