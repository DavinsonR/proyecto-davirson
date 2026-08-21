import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import TradingSimDashboard from "@/components/trading/TradingSimDashboard";
import { TRADING_SIM_REPO } from "@/lib/trading-sim";
import StatusPill from "@/components/StatusPill";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang);
  return { title: dict.tradingSim.metaTitle, description: dict.tradingSim.metaDesc };
}

export default async function TradingSimPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const t = dict.tradingSim;
  const wrap = "max-w-[980px] mx-auto px-6";

  return (
    <main>
      {/* ================= HERO ================= */}
      <header className="pt-20 pb-14">
        <div className={wrap}>
          <div className="mb-6 flex items-center gap-3">
            <StatusPill status="building" />
          </div>
          <h1 className="font-display text-[clamp(30px,4.8vw,50px)] font-medium leading-[1.14] tracking-[-0.02em] text-ink max-w-[820px]">
            {t.title}
          </h1>
          <p className="mt-5 text-[15.5px] leading-[1.75] max-w-[680px]">{t.intro}</p>
          <p className="mt-3 text-[14px] text-muted max-w-[680px]">{t.pipelineLine}</p>
        </div>
      </header>

      {/* ================= DASHBOARD ================= */}
      <section className="pb-16">
        <div className={wrap}>
          <TradingSimDashboard dict={t} lang={lang} />
        </div>
      </section>

      {/* ================= METODOLOGÍA ================= */}
      <section className="py-16 border-t border-rulesoft">
        <div className={wrap}>
          <h2 className="font-display text-[24px] font-medium text-ink mb-2.5">{t.method.title}</h2>
          <p className="text-[14px] leading-[1.7] max-w-[620px] mb-8">{t.method.desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.method.items.map((m) => (
              <div key={m.title} className="border-t border-rule pt-5">
                <p className="text-[14px] text-cold mb-2">{m.title}</p>
                <p className="text-[14px] leading-[1.7]">{m.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href={TRADING_SIM_REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] px-5 py-3 rounded-[3px] bg-cold text-paper font-semibold hover:opacity-90 transition-opacity"
            >
              {t.method.repoCta}
            </a>
            <Link
              href={`/${lang}`}
              className="text-[14px] px-5 py-3 rounded-[3px] border border-rule text-ink hover:border-cold transition-colors"
            >
              {t.method.backCta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
