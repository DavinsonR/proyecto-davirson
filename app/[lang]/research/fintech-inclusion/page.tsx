import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, THESIS_REPO } from "@/lib/dictionaries";
import StatusPill from "@/components/StatusPill";
import BackLink from "@/components/BackLink";
import SectionNav from "@/components/SectionNav";
import Atlas from "@/components/atlas/Atlas";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang);
  return {
    title: dict.thesis.metaTitle,
    description: dict.thesis.metaDesc,
    alternates: { languages: { es: "/es/research/fintech-inclusion", en: "/en/research/fintech-inclusion" } },
  };
}

/* The whole project lives on this page: there is no separate site to click through to.
   Technical content end to end, so the only accent here is the cold one — amber stays
   reserved for human content. Figures are set as written (no CountUp): "2018–2025" is a
   range, not a count. */
const wrap = "mx-auto max-w-[1180px] px-6";
const prose = "max-w-[74ch]";
const label = "text-[12.5px] font-semibold tracking-[0.09em] text-cold uppercase";
const heading =
  "mt-3 max-w-[28ch] font-display text-[clamp(23px,2.9vw,31px)] leading-[1.15] font-bold tracking-[-0.02em] text-ink";
const section = "scroll-mt-[118px] border-b border-rule py-16";
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const delay = (i: number) => ({ "--d": `${i * 60}ms` }) as React.CSSProperties;

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

        {/* figures band — each figure lands on the section that states it */}
        <div className="border-t-2 border-cold bg-coldsoft">
          <div className={wrap}>
            <dl className="grid grid-cols-2 py-6 lg:grid-cols-4">
              {t.figures.map((f, i) => (
                <div
                  key={f.label}
                  data-reveal
                  className="reveal border-coldline py-2 lg:border-l lg:pl-5 lg:first:border-l-0 lg:first:pl-0"
                  style={delay(i + 1)}
                >
                  <a href={f.href} className="lift group block">
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

      <SectionNav items={t.nav} label={t.metaTitle} />

      {/* ================= ABSTRACT ================= */}
      <section id="resumen" className={section}>
        <div className={wrap}>
          <p data-reveal className={`reveal ${label}`}>{t.abstract.label}</p>
          <p data-reveal className={`reveal mt-5 ${prose} text-[16px] leading-[1.8] text-body`} style={delay(1)}>
            {t.abstract.body}
          </p>
        </div>
      </section>

      {/* ================= DATA ================= */}
      <section id="datos" className={section}>
        <div className={wrap}>
          <p data-reveal className={`reveal ${label}`}>{t.data.label}</p>
          <h2 data-reveal className={`reveal ${heading}`} style={delay(1)}>{t.data.title}</h2>
          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
            {t.data.items.map((m, i) => (
              <div key={m.title} data-reveal className="reveal border-t border-rule pt-5" style={delay(i)}>
                <p className="text-[14.5px] font-semibold text-ink">{m.title}</p>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-body">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDEX ================= */}
      <section id="metodo" className={section}>
        <div className={wrap}>
          <p data-reveal className={`reveal ${label}`}>{t.method.label}</p>
          <h2 data-reveal className={`reveal ${heading}`} style={delay(1)}>{t.method.title}</h2>
          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
            {t.method.items.map((m, i) => (
              <div key={m.title} data-reveal className="reveal border-t border-rule pt-5" style={delay(i)}>
                <p className="text-[14.5px] font-semibold text-ink">{m.title}</p>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-body">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ATLAS — the map is the figure this page is built around ====== */}
      <section id="atlas" className={section}>
        <div className={wrap}>
          <p data-reveal className={`reveal ${label}`}>{t.atlas.label}</p>
          <h2 data-reveal className={`reveal ${heading}`} style={delay(1)}>{t.atlas.title}</h2>
          <p data-reveal className={`reveal mt-4 ${prose} text-[15px] leading-[1.75] text-body`} style={delay(2)}>
            {t.atlas.body}
          </p>

          <div className="mt-9">
            <Atlas copy={t.atlasCopy} locale={lang === "en" ? "en-US" : "es-CO"} />
          </div>

          <ul className="mt-9 grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
            {t.atlas.notes.map((n, i) => (
              <li key={i} className="border-t border-rulesoft pt-4 text-[14px] leading-[1.65] text-body">
                {n}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= DIAGNOSTICS — the honest part, in the cold band ============== */}
      <section id="diagnosticos" className={section}>
        <div className={wrap}>
          <p data-reveal className={`reveal ${label}`}>{t.diagnostics.label}</p>
          <h2 data-reveal className={`reveal ${heading}`} style={delay(1)}>{t.diagnostics.title}</h2>
          <p data-reveal className={`reveal mt-4 ${prose} text-[15px] leading-[1.75] text-body`} style={delay(2)}>
            {t.diagnostics.intro}
          </p>
          <ol className="mt-8 max-w-[92ch]">
            {t.diagnostics.rows.map((r, i) => (
              <li
                key={r.finding}
                data-reveal
                className="reveal grid grid-cols-1 gap-x-8 border-t border-rule py-5 md:grid-cols-[minmax(0,26ch)_1fr]"
                style={delay(i)}
              >
                <p className="text-[15px] font-semibold leading-[1.4] text-ink">{r.finding}</p>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-body md:mt-0">{r.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= LOGBOOK ================= */}
      <section id="bitacora" className={section}>
        <div className={wrap}>
          <p data-reveal className={`reveal ${label}`}>{t.log.label}</p>
          <h2 data-reveal className={`reveal ${heading}`} style={delay(1)}>{t.log.title}</h2>
          <p data-reveal className={`reveal mt-4 ${prose} text-[15px] leading-[1.75] text-body`} style={delay(2)}>
            {t.log.body}
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-3">
            {t.log.examples.map((e, i) => (
              <li key={i} data-reveal className="reveal border-t border-rule pt-5 text-[14.5px] leading-[1.7] text-body" style={delay(i)}>
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= REPRODUCE ================= */}
      <section id="reproducir" className={section}>
        <div className={wrap}>
          <p data-reveal className={`reveal ${label}`}>{t.reproduce.label}</p>
          <h2 data-reveal className={`reveal ${heading}`} style={delay(1)}>{t.reproduce.title}</h2>
          <ol className="mt-8 max-w-[92ch]">
            {t.reproduce.steps.map((s, i) => (
              <li
                key={s.cmd}
                data-reveal
                className="reveal grid grid-cols-1 items-baseline gap-x-8 border-t border-rulesoft py-4 md:grid-cols-[minmax(0,24ch)_1fr]"
                style={delay(i)}
              >
                <code className="text-[14px] font-semibold text-cold">{s.cmd}</code>
                <p className="mt-1.5 text-[14.5px] leading-[1.7] text-body md:mt-0">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-[80ch] text-[14px] leading-[1.7] text-muted">{t.reproduce.note}</p>
        </div>
      </section>

      {/* ================= STATUS + REPO ================= */}
      <section className="py-16">
        <div className={wrap}>
          <p data-reveal className={`reveal ${label}`}>{t.status.label}</p>
          <h2 data-reveal className={`reveal ${heading}`} style={delay(1)}>{t.status.title}</h2>
          <ol className="mt-6 max-w-[80ch]">
            {t.status.items.map((s, i) => (
              <li
                key={i}
                className="grid grid-cols-[32px_1fr] items-baseline gap-x-3 border-t border-rulesoft py-3 text-[14.5px] leading-[1.65] first:border-t-2 first:border-ink"
              >
                <span className="font-figure text-[20px] leading-none text-cold">{i + 1}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href={THESIS_REPO}
              {...ext}
              className="lift rounded-[3px] bg-cold px-5 py-3 text-[14px] font-semibold text-paper transition-opacity hover:opacity-90"
            >
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
