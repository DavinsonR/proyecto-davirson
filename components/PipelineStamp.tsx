"use client";

import { useEffect, useState } from "react";
import { INDEX_URL } from "@/lib/trading-sim";

/** Proof, not prose: reads the pipeline's own published timestamp so the claim
 *  "it refreshes daily" is verifiable on the page that makes it. Falls back to
 *  the static wording when the fetch fails — never to a fabricated date. */
export default function PipelineStamp({
  label,
  fallback,
  lang,
}: {
  label: string;
  fallback: string;
  lang: string;
}) {
  const [stamp, setStamp] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    fetch(INDEX_URL)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d: { generated_at?: string }) => {
        if (!alive || !d.generated_at) return;
        const dt = new Date(d.generated_at);
        setStamp(
          new Intl.DateTimeFormat(lang === "es" ? "es-CO" : "en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }).format(dt)
        );
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [lang]);

  return (
    <span className="inline-flex items-center gap-2 text-[13px] text-muted">
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full rounded-full bg-live opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
      </span>
      {stamp ? `${label} ${stamp}` : fallback}
    </span>
  );
}
