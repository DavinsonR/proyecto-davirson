import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import StatusPill from "@/components/StatusPill";
import ProgressBar from "@/components/ProgressBar";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const wrap = "max-w-[980px] mx-auto px-6";

  return (
    <main>
      {/* ================= HERO ================= */}
      <header className="pt-24 pb-20">
        <div className={wrap}>
          <p className="font-mono text-[12px] tracking-[0.16em] uppercase text-cold mb-6">{dict.hero.kicker}</p>
          <h1 className="font-display text-[clamp(32px,5.4vw,58px)] font-medium leading-[1.12] tracking-[-0.025em] text-fg max-w-[740px]">
            {dict.hero.lines.map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
            <span className="block text-warm">{dict.hero.warmLine}</span>
          </h1>
          <p className="mt-6 text-[16px] leading-[1.75] max-w-[590px]">
            {dict.hero.sub} <span className="text-warm">{dict.hero.subWarm}</span>
          </p>
          <div className="mt-10 flex flex-wrap gap-3.5">
            <a href="#sistema" className="font-mono text-[13px] px-5 py-3 rounded-[3px] bg-cold text-ink font-semibold border border-cold hover:opacity-90 transition-opacity">
              {dict.hero.ctaPrimary}
            </a>
            <Link href={`/${lang}/cv`} className="font-mono text-[13px] px-5 py-3 rounded-[3px] border border-line text-fg hover:border-cold transition-colors">
              {dict.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </header>

      {/* ================= SISTEMA ================= */}
      <section id="sistema" className="py-16 border-t border-linesoft scroll-mt-20">
        <div className={wrap}>
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-dim mb-2">{dict.sistema.label}</p>
          <h2 className="font-display text-[26px] font-medium text-fg mb-2.5">{dict.sistema.title}</h2>
          <p className="text-[14.5px] leading-[1.7] max-w-[560px] mb-10">{dict.sistema.desc}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dict.sistema.modules.map((m) => (
              <div key={m.name} className="border border-line bg-surface rounded p-6 hover:border-[#2E333C] hover:-translate-y-0.5 transition-all">
                <div className="flex items-center justify-between gap-2.5 mb-3.5">
                  <span className="font-mono text-[13px] font-semibold text-fg">{m.name}</span>
                  <StatusPill status={m.status} />
                </div>
                <p className="text-[13px] leading-[1.7]">{m.desc}</p>
                <ProgressBar status={m.status} value={m.progress} />
                <div className="mt-2.5 font-mono text-[10.5px] text-dim flex justify-between">
                  <span>{dict.sistema.progressLabel}</span>
                  <span>{m.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROYECTO DESTACADO ================= */}
      <section id="proyectos" className="py-16 border-t border-linesoft scroll-mt-20">
        <div className={wrap}>
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-dim mb-2">{dict.featured.label}</p>
          <h2 className="font-display text-[26px] font-medium text-fg mb-2.5">{dict.featured.title}</h2>
          <p className="text-[14.5px] leading-[1.7] max-w-[560px] mb-10">{dict.featured.desc}</p>

          <div className="border border-line rounded-md bg-surface overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-surface2 border-b border-linesoft">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2E333C]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#2E333C]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#2E333C]" />
              <span className="ml-2.5 font-mono text-[11.5px] text-dim">{dict.featured.windowTitle}</span>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-9">
              <div>
                <h3 className="font-display text-[21px] font-medium text-fg mb-1.5">{dict.featured.projectTitle}</h3>
                <p className="font-mono text-[11.5px] text-cold mb-4">{dict.featured.stack}</p>
                <p className="text-[14px] leading-[1.75]">{dict.featured.body}</p>
                <Link
                  href={`/${lang}/projects/trading-sim`}
                  className="inline-block mt-5 font-mono text-[12px] text-fg border-b border-[#3A3F47] pb-0.5 hover:text-cold hover:border-cold transition-colors"
                >
                  {dict.featured.link}
                </Link>
              </div>
              <div className="bg-ink border border-linesoft rounded p-4.5">
                <p className="font-mono text-[10px] text-dim mb-3 flex justify-between">
                  <span>{dict.featured.chartLabel}</span>
                  <span>{dict.featured.chartRange}</span>
                </p>
                <svg viewBox="0 0 300 140" className="w-full" aria-label="Equity curve demo">
                  <line x1="0" y1="35" x2="300" y2="35" stroke="#1B1D23" strokeWidth="1" />
                  <line x1="0" y1="70" x2="300" y2="70" stroke="#1B1D23" strokeWidth="1" />
                  <line x1="0" y1="105" x2="300" y2="105" stroke="#1B1D23" strokeWidth="1" />
                  <path d="M0,120 L25,112 L50,116 L75,100 L100,104 L125,88 L150,95 L175,72 L200,80 L225,58 L250,64 L275,42 L300,34" fill="none" stroke="#8AB8D0" strokeWidth="2" />
                  <path d="M0,120 L25,118 L50,121 L75,114 L100,119 L125,110 L150,116 L175,105 L200,112 L225,101 L250,108 L275,98 L300,95" fill="none" stroke="#3A424D" strokeWidth="1.5" strokeDasharray="4 4" />
                </svg>
                <p className="font-mono text-[10px] mt-2.5 flex justify-between">
                  <span className="text-cold">{dict.featured.legendStrategy}</span>
                  <span className="text-[#4A5462]">{dict.featured.legendBenchmark}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LA HISTORIA (zona cálida) ================= */}
      <section id="historia" className="py-16 border-t border-linesoft scroll-mt-20">
        <div className={wrap}>
          <div className="border border-line border-t-2 border-t-warm rounded p-9 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 bg-[linear-gradient(180deg,rgba(217,160,91,0.05),transparent_45%)]">
            <div>
              <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-warm mb-4">{dict.human.label}</p>
              <h3 className="font-display text-[22px] font-medium leading-[1.35] text-fg whitespace-pre-line">{dict.human.title}</h3>
            </div>
            <div>
              <p className="text-[14.5px] leading-[1.8]">{dict.human.body}</p>
              <span className="inline-flex items-center gap-2 mt-5 font-mono text-[12px] text-warm/80">
                <StatusPill status="research" />
                {dict.human.cta}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CV EN 30 SEGUNDOS ================= */}
      <section className="py-16 border-t border-linesoft">
        <div className={wrap}>
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-dim mb-2">{dict.cvStrip.label}</p>
          <h2 className="font-display text-[26px] font-medium text-fg mb-2.5">{dict.cvStrip.title}</h2>
          <p className="text-[14.5px] leading-[1.7] max-w-[560px] mb-10">{dict.cvStrip.desc}</p>
          <div className="border border-line rounded overflow-hidden">
            {dict.cvStrip.rows.map((r, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[130px_1fr_auto] gap-2 md:gap-5 px-6 py-5 bg-surface border-b border-linesoft last:border-b-0 md:items-baseline">
                <span className="font-mono text-[12px] text-dim">{r.period}</span>
                <div>
                  <p className="font-display text-[15.5px] font-medium text-fg">{r.title}</p>
                  <p className="text-[13px] leading-[1.6] mt-1">{r.desc}</p>
                </div>
                <span className="font-mono text-[11px] text-cold border border-[#24313E] px-2.5 py-1 rounded-[3px] w-fit">{r.tag}</span>
              </div>
            ))}
          </div>
          <Link href={`/${lang}/cv`} className="inline-block mt-6 font-mono text-[13px] text-fg border-b border-[#3A3F47] pb-1 hover:border-cold hover:text-cold transition-colors">
            {dict.cvStrip.fullCv}
          </Link>
        </div>
      </section>

      {/* ================= CONTACTO ================= */}
      <section id="contacto" className="py-16 border-t border-linesoft scroll-mt-20">
        <div className={wrap}>
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-dim mb-2">{dict.contact.label}</p>
          <h2 className="font-display text-[26px] font-medium text-fg mb-2.5 max-w-[560px]">{dict.contact.title}</h2>
          <p className="text-[14.5px] leading-[1.7] max-w-[560px] mb-8">{dict.contact.body}</p>
          <div className="flex flex-wrap gap-3.5">
            <a href={`mailto:${dict.profile.email}`} className="font-mono text-[13px] px-5 py-3 rounded-[3px] bg-cold text-ink font-semibold hover:opacity-90 transition-opacity">
              {dict.contact.email}
            </a>
            <a href={dict.profile.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-[13px] px-5 py-3 rounded-[3px] border border-line text-fg hover:border-cold transition-colors">
              {dict.contact.linkedin}
            </a>
            <a href={dict.profile.github} target="_blank" rel="noopener noreferrer" className="font-mono text-[13px] px-5 py-3 rounded-[3px] border border-line text-fg hover:border-cold transition-colors">
              {dict.contact.github}
            </a>
            <a href={dict.profile.kaggle} target="_blank" rel="noopener noreferrer" className="font-mono text-[13px] px-5 py-3 rounded-[3px] border border-line text-fg hover:border-cold transition-colors">
              {dict.contact.kaggle}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
