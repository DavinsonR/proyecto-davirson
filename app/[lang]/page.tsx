import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { TRADING_SIM_REPO } from "@/lib/trading-sim";
import PipelineStamp from "@/components/PipelineStamp";

const WRAP = "mx-auto max-w-[1080px] px-6";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const { sheet, work, track, toolkit, disclosures, contact } = dict;
  const cvHref = lang === "es" ? "/Davirson_Novoa_CV_ES.pdf" : "/Davirson_Novoa_Resume_EN.pdf";

  return (
    <main>
      {/* ===================== DOCUMENT HEADER ===================== */}
      <header className="border-b border-rule">
        <div className={WRAP}>
          {/* classification line — the masthead of a research sheet */}
          <div className="settle flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rulesoft py-3 text-[12.5px] tracking-[0.08em] text-muted uppercase">
            <span className="font-semibold text-cold">{sheet.classification}</span>
            <span>{sheet.asOf}</span>
          </div>

          <div className="grid gap-x-12 gap-y-8 pt-10 pb-11 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div>
              <h1
                className="settle font-display text-[clamp(30px,4.4vw,44px)] leading-[1.08] font-extrabold tracking-[-0.03em] text-ink"
                style={{ animationDelay: "60ms" }}
              >
                {sheet.name}
              </h1>

              {/* the verdict: what this asset is, stated once, large */}
              <p
                className="settle mt-3 font-figure text-[clamp(27px,3.8vw,38px)] leading-[1.1] text-cold"
                style={{ animationDelay: "120ms" }}
              >
                {sheet.verdict}
              </p>

              <p
                className="settle mt-6 max-w-[40ch] text-balance font-display text-[clamp(19px,2.2vw,23px)] leading-[1.35] font-semibold tracking-[-0.015em] text-ink"
                style={{ animationDelay: "180ms" }}
              >
                {sheet.thesis}
              </p>

              <p
                className="settle mt-5 max-w-[68ch] text-[15.5px] leading-[1.7]"
                style={{ animationDelay: "240ms" }}
              >
                {sheet.sub}
              </p>

              <div className="settle mt-8 flex flex-wrap gap-3" style={{ animationDelay: "300ms" }}>
                <a
                  href={cvHref}
                  download
                  className="inline-flex items-center rounded-[3px] bg-cold px-5 py-3 text-[14.5px] font-semibold text-paper transition-opacity hover:opacity-90"
                >
                  {sheet.ctaPrimary}
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center rounded-[3px] border border-rule px-5 py-3 text-[14.5px] font-semibold text-ink transition-colors hover:border-cold hover:text-cold"
                >
                  {sheet.ctaSecondary}
                </a>
              </div>
            </div>

            {/* availability block — the facts a recruiter checks before anything else */}
            <aside
              className="settle self-start border-t-2 border-warm bg-warmsoft px-5 py-5"
              style={{ animationDelay: "260ms" }}
            >
              <p className="text-[14px] leading-[1.65] text-ink">{sheet.availability}</p>
              <dl className="mt-4 space-y-2 border-t border-warm/30 pt-4 text-[14px]">
                <div>
                  <dt className="text-warm">Email</dt>
                  <dd className="mt-0.5 break-all">
                    <a href={`mailto:${dict.profile.email}`} className="text-ink underline decoration-warm/50 underline-offset-2 hover:decoration-warm">
                      {dict.profile.email}
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-warm">LinkedIn</dt>
                  <dd>
                    <a
                      href={dict.profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink underline decoration-warm/50 underline-offset-2 hover:decoration-warm">
                      davirson-novoa
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-warm">GitHub</dt>
                  <dd>
                    <a
                      href={dict.profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink underline decoration-warm/50 underline-offset-2 hover:decoration-warm">
                      DavinsonR
                    </a>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>

        {/* figures band — tabular, ruled, footnoted: a data row, not a card set */}
        <div className="border-t-2 border-cold bg-coldsoft">
          <div className={WRAP}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 pt-4">
              <p className="text-[12.5px] font-semibold tracking-[0.09em] text-cold uppercase">
                {sheet.metricsLabel}
              </p>
              <PipelineStamp
                label={sheet.pipelineLive}
                fallback={sheet.pipelineLiveFallback}
                lang={lang}
              />
            </div>
            <p className="mt-1 text-[14px] text-body">{sheet.metricsNote}</p>
            <dl className="grid grid-cols-2 pt-3 pb-6 lg:grid-cols-4">
              {sheet.metrics.map((m, i) => {
                const proof = [`/${lang}/cv`, `/${lang}/cv`, `/${lang}/projects/trading-sim`, TRADING_SIM_REPO][i];
                const external = proof.startsWith("http");
                return (
                  <div
                    key={m.label}
                    className="settle border-coldline py-2 lg:border-l lg:pl-5 lg:first:border-l-0 lg:first:pl-0"
                    style={{ animationDelay: `${340 + i * 70}ms` }}
                  >
                    <a
                      href={proof}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group block"
                    >
                      <dd className="font-figure text-[clamp(34px,4.4vw,46px)] leading-none text-ink group-hover:text-cold">
                        {m.value}
                      </dd>
                      <dt className="mt-2 text-[14px] leading-[1.35] font-medium text-ink underline decoration-cold decoration-[1.5px] underline-offset-4 group-hover:decoration-[2.5px]">
                        {m.label}
                      </dt>
                    </a>
                    <p className="mt-1 text-[14px] text-body">{m.note}</p>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </header>

      {/* ===================== WORK ===================== */}
      <section id="work" className="scroll-mt-16 border-b border-rule py-16">
        <div className={WRAP}>
          <h2 className="font-display text-[clamp(23px,2.9vw,31px)] leading-[1.15] font-bold tracking-[-0.02em] text-ink">
            {work.title}
          </h2>
          <p className="mt-2.5 max-w-[62ch] text-[15px] leading-[1.7]">{work.intro}</p>

          <article className="mt-10 border-t-2 border-ink pt-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h3 className="font-display text-[21px] font-bold tracking-[-0.015em] text-ink">
                {work.project.name}
              </h3>
              <p className="text-[13px] tracking-[0.07em] text-muted uppercase">
                {work.project.kind}
              </p>
            </div>

            <div className="mt-7 grid gap-x-12 gap-y-7 lg:grid-cols-2">
              <div>
                <h4 className="text-[12.5px] font-semibold tracking-[0.09em] text-muted uppercase">
                  {work.project.problemLabel}
                </h4>
                <p className="mt-2 max-w-[62ch] text-[15px] leading-[1.7] text-ink">
                  {work.project.problem}
                </p>
              </div>
              <div>
                <h4 className="text-[12.5px] font-semibold tracking-[0.09em] text-muted uppercase">
                  {work.project.builtLabel}
                </h4>
                <p className="mt-2 max-w-[62ch] text-[15px] leading-[1.7]">{work.project.built}</p>
              </div>
            </div>

            <div className="mt-7 border-y border-cold bg-coldsoft px-5 py-4">
              <h4 className="text-[12.5px] font-semibold tracking-[0.09em] text-cold uppercase">
                {work.project.matterLabel}
              </h4>
              <p className="mt-1.5 max-w-[70ch] text-[15px] leading-[1.7] text-ink">
                {work.project.matter}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {work.project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-[3px] border border-rule px-2.5 py-1 text-[14px] text-body"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/${lang}/projects/trading-sim`}
                className="inline-flex items-center rounded-[3px] bg-ink px-4 py-2.5 text-[14px] font-semibold text-paper transition-opacity hover:opacity-90"
              >
                {work.project.liveCta}
              </Link>
              <a
                href={TRADING_SIM_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-[3px] border border-rule px-4 py-2.5 text-[14px] font-semibold text-ink transition-colors hover:border-cold hover:text-cold"
              >
                {work.project.repoCta}
              </a>
            </div>

            {/* the honest finding wears the amber: it is a judgment claim, not a spec */}
            <div className="mt-7 border-t border-rule pt-5">
              <h4 className="text-[12.5px] font-semibold tracking-[0.09em] text-cold uppercase">
                {work.project.findingLabel}
              </h4>
              <p className="mt-1.5 max-w-[70ch] text-[15px] leading-[1.7] text-ink">
                {work.project.finding}
              </p>
            </div>
          </article>

          <div className="mt-12">
            <h3 className="text-[12.5px] font-semibold tracking-[0.09em] text-muted uppercase">
              {work.capabilitiesTitle}
            </h3>
            <dl className="mt-4 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
              {work.capabilities.map((c) => (
                <div key={c.name} className="border-t border-rule py-3">
                  <dt className="text-[14.5px] font-semibold text-ink">{c.name}</dt>
                  <dd className="mt-0.5 text-[14px] leading-[1.55] text-body">{c.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ===================== TRACK RECORD + PROFILE ===================== */}
      <section id="track" className="scroll-mt-16 border-b border-rule py-16">
        <div
          className={`${WRAP} grid gap-x-14 gap-y-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]`}
        >
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="font-display text-[clamp(23px,2.9vw,31px)] leading-[1.15] font-bold tracking-[-0.02em] text-ink">
                {track.title}
              </h2>
              <Link
                href={`/${lang}/cv`}
                className="text-[14px] font-semibold text-cold transition-opacity hover:opacity-80"
              >
                {track.fullCv} →
              </Link>
            </div>

            <ol className="mt-7">
              {track.rows.map((r) => (
                <li
                  key={r.title}
                  className="border-t border-rule py-5 first:border-t-2 first:border-ink"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="font-display text-[16.5px] font-semibold text-ink">{r.title}</h3>
                    <span className="text-[14px] text-muted">{r.period}</span>
                  </div>
                  <p className="mt-1.5 max-w-[68ch] text-[14.5px] leading-[1.65]">{r.desc}</p>
                  <p className="mt-2 text-[12.5px] tracking-[0.08em] text-cold uppercase">{r.tag}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* honest skill scale — a fact sheet's numbered indicator, not a bar chart of vibes */}
          <div>
            <h2 className="font-display text-[clamp(20px,2.4vw,25px)] leading-[1.15] font-bold tracking-[-0.02em] text-ink">
              {toolkit.title}
            </h2>
            <p className="mt-2 max-w-[46ch] text-[14px] leading-[1.6] text-body">{toolkit.note}</p>

            <dl className="mt-6">
              {toolkit.rows.map((r) => (
                <div key={r.name} className="border-t border-rule py-3">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-[14.5px] font-medium text-ink">{r.name}</dt>
                    <dd className="font-figure text-[19px] leading-none text-cold">
                      {r.level}
                      <span className="text-muted">/10</span>
                    </dd>
                  </div>
                  <div className="mt-2 flex gap-[3px]" aria-hidden="true">
                    {Array.from({ length: 10 }, (_, i) => (
                      <span
                        key={i}
                        className={`h-[6px] flex-1 rounded-[1px] ${i < r.level ? "bg-cold" : "bg-rule"}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ===================== DISCLOSURES ===================== */}
      <section className="border-b border-rule bg-band py-14">
        <div className={WRAP}>
          <h2 className="text-[12.5px] font-semibold tracking-[0.09em] text-muted uppercase">
            {disclosures.title}
          </h2>
          <dl className="mt-5 grid gap-x-12 gap-y-5 sm:grid-cols-2">
            {disclosures.items.map((d) => (
              <div key={d.term}>
                <dt className="text-[14px] font-semibold text-ink">{d.term}</dt>
                <dd className="mt-1 max-w-[58ch] text-[14px] leading-[1.65] text-body">{d.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section id="contact" className="scroll-mt-16 border-t-2 border-warm py-16">
        <div className={WRAP}>
          <h2 className="max-w-[24ch] text-balance font-display text-[clamp(24px,3.2vw,34px)] leading-[1.15] font-bold tracking-[-0.02em] text-ink">
            {contact.title}
          </h2>
          <p className="mt-3.5 max-w-[62ch] text-[15.5px] leading-[1.7]">{contact.body}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${dict.profile.email}`}
              className="inline-flex items-center rounded-[3px] bg-cold px-5 py-3 text-[14.5px] font-semibold text-paper transition-opacity hover:opacity-90"
            >
              {contact.email}
            </a>
            <a
              href={cvHref}
              download
              className="inline-flex items-center rounded-[3px] border border-rule px-5 py-3 text-[14.5px] font-semibold text-ink transition-colors hover:border-cold hover:text-cold"
            >
              {sheet.ctaPrimary}
            </a>
            {[
              { href: dict.profile.linkedin, label: contact.linkedin },
              { href: dict.profile.github, label: contact.github },
              { href: dict.profile.kaggle, label: contact.kaggle },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-1 py-3 text-[14.5px] font-medium text-cold hover:underline"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
