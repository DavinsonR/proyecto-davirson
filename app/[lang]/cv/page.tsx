import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import StatusPill from "@/components/StatusPill";
import ProgressBar from "@/components/ProgressBar";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang);
  return { title: `${dict.cv.title} — CV`, description: dict.cv.profileText.slice(0, 150) };
}

export default async function CvPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const cv = dict.cv;
  const wrap = "max-w-[980px] mx-auto px-6";
  const label = "mb-6 text-[12.5px] font-semibold tracking-[0.09em] uppercase text-muted";

  return (
    <main>
      {/* ===== HEADER — los 30 segundos ===== */}
      <header className="pt-20 pb-12">
        <div className={wrap}>
          <h1 className="font-display text-[clamp(30px,4.6vw,46px)] font-medium tracking-[-0.02em] text-ink">{cv.title}</h1>
          <p className="font-display text-[17px] text-cold mt-2">{cv.subtitle}</p>
          <p className="text-[14px] text-body mt-3">{cv.metaLine}</p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <a href={cv.downloadHref} className="text-[14px] px-5 py-3 rounded-[3px] bg-cold text-paper font-semibold hover:opacity-90 transition-opacity">
              {cv.download}
            </a>
            <a href={`mailto:${dict.profile.email}`} className="text-[14px] px-5 py-3 rounded-[3px] border border-rule text-ink hover:border-cold transition-colors">
              {cv.contactBtn}
            </a>
          </div>
          {/* quick facts */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {cv.facts.map((f) => (
              <div key={f.label} className="border-t border-rule pt-5">
                <p className="font-display text-[24px] font-semibold text-ink">{f.value}</p>
                <p className="text-[14px] mt-1 leading-[1.5]">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ===== PERFIL ===== */}
      <section className="py-14 border-t border-rulesoft">
        <div className={wrap}>
          <h2 className={label}>{cv.profileLabel}</h2>
          <p className="text-[16px] leading-[1.85] max-w-[720px] text-body">{cv.profileText}</p>
        </div>
      </section>

      {/* ===== HABILIDADES ===== */}
      <section className="py-14 border-t border-rulesoft">
        <div className={wrap}>
          <h2 className={label}>{cv.skillsLabel}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="border-t border-rule pt-5">
              <h3 className="font-display text-[18px] font-medium text-ink mb-1.5">{cv.skillsFinTitle}</h3>
              <p className="text-[14px] mb-5">{cv.skillsFinDesc}</p>
              <div className="flex flex-wrap gap-2">
                {cv.skillsFin.map((s) => (
                  <span key={s} className="rounded-[3px] border border-rule bg-band px-3 py-1.5 text-[14px] text-body">{s}</span>
                ))}
              </div>
            </div>
            <div className="border-t border-rule pt-5">
              <h3 className="font-display text-[18px] font-medium text-ink mb-1.5">{cv.skillsTechTitle}</h3>
              <p className="text-[14px] mb-5">{cv.skillsTechDesc}</p>
              <div className="flex flex-col gap-4">
                {cv.skillsTech.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between items-baseline gap-3">
                      <span className="text-[14px] text-ink">{s.name}</span>
                      <span className="text-[14px] text-muted whitespace-nowrap">{s.note}</span>
                    </div>
                    <div className="mt-1.5 h-[3px] rounded-sm bg-rule overflow-hidden">
                      <i className="block h-full rounded-sm bg-cold" style={{ width: `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCIA ===== */}
      <section className="py-14 border-t border-rulesoft">
        <div className={wrap}>
          <h2 className={label}>{cv.expLabel}</h2>
          <div className="flex flex-col gap-5">
            {cv.experience.map((company) => (
              <div key={company.company} className="border-t border-rule pt-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display text-[19px] font-medium text-ink">{company.company}</h3>
                  <span className="text-[14px] text-muted">
                    {company.location} ·{" "}
                    <span className={company.mode === "remote" ? "text-live" : "text-building"}>
                      {company.mode === "remote" ? cv.remoteTag : cv.hybridTag}
                    </span>
                  </span>
                </div>
                {"note" in company && company.note ? (
                  <p className="text-[14px] text-cold mb-4">{company.note}</p>
                ) : (
                  <div className="mb-4" />
                )}
                <div className="flex flex-col gap-6">
                  {company.roles.map((role) => (
                    <div key={role.title} className="border-l border-rule pl-5">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="text-[15.5px] font-medium text-ink">{role.title}</h4>
                        <span className="text-[14px] text-muted">{role.period}</span>
                      </div>
                      <ul className="mt-2.5 flex flex-col gap-1.5">
                        {role.bullets.map((b, i) => (
                          <li key={i} className="text-[14px] leading-[1.7] pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-muted">
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EL PIVOTE — bloque cálido ===== */}
      <section className="py-14 border-t border-rulesoft">
        <div className={wrap}>
          <div className="border-t-2 border-warm pt-6">
            <p className="text-[12.5px] tracking-[0.14em] uppercase text-warm mb-4">{cv.pivot.label}</p>
            <p className="text-[15px] leading-[1.9] max-w-[760px]">{cv.pivot.body}</p>
          </div>
        </div>
      </section>

      {/* ===== RECONOCIMIENTOS ===== */}
      <section className="py-14 border-t border-rulesoft">
        <div className={wrap}>
          <h2 className={label}>{cv.awardsLabel}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cv.awards.map((a) => (
              <div key={a.title} className="border-t border-rule pt-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-[15.5px] font-medium text-ink">{a.title}</h3>
                  <span className="text-[14px] text-muted">{a.year}</span>
                </div>
                <p className="text-[14px] leading-[1.6] mt-2">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EDUCACIÓN + CERTIFICACIONES ===== */}
      <section className="py-14 border-t border-rulesoft">
        <div className={wrap}>
          <h2 className={label}>{cv.eduLabel}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-4">
              {cv.education.map((e) => (
                <div key={e.title} className="border-t border-rule pt-5">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <h3 className="font-display text-[15.5px] font-medium text-ink">{e.title}</h3>
                    <StatusPill status={e.status} text={e.statusText} />
                  </div>
                  <p className="text-[14px]">{e.inst}</p>
                  <p className="text-[14px] text-muted mt-1">{e.period}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-rule pt-5 h-fit">
              {cv.certs.map((c, i) => (
                <div key={c.title} className={`py-3.5 ${i !== 0 ? "border-t border-rulesoft" : ""}`}>
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-[14px] text-ink font-medium">{c.title}</p>
                    <span className="text-[14px] text-muted">{c.year}</span>
                  </div>
                  <p className="text-[14px] mt-0.5">{c.inst}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== REMOTE-READY ===== */}
      <section className="py-14 border-t border-rulesoft">
        <div className={wrap}>
          <p className={label}>{cv.remote.label}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 max-w-[800px]">
            {cv.remote.points.map((p, i) => (
              <p key={i} className="text-[14px] leading-[1.7] pl-5 relative before:content-['●'] before:absolute before:left-0 before:text-[9px] before:top-[6px] before:text-live">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-10">
            <a href={`mailto:${dict.profile.email}`} className="text-[14px] px-5 py-3 rounded-[3px] bg-cold text-paper font-semibold hover:opacity-90 transition-opacity inline-block">
              {cv.contactBtn} →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
