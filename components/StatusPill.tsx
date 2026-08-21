import type { Status } from "@/lib/dictionaries";

/* Status wears the sheet's own signal colors, tinted from each hue rather than
   the old dark-only blocks, so the pill stays legible on paper and in dark. */
const styles: Record<Status, string> = {
  live: "text-live border-live/35 bg-live/10",
  building: "text-building border-building/35 bg-building/10",
  research: "text-research border-research/35 bg-research/10",
  idea: "text-idea border-idea/35 bg-idea/10",
};

const labels: Record<Status, string> = {
  live: "LIVE",
  building: "BUILDING",
  research: "RESEARCH",
  idea: "IDEA",
};

export default function StatusPill({ status, text }: { status: Status; text?: string }) {
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-1 text-[12.5px] font-semibold tracking-[0.09em] whitespace-nowrap ${styles[status]}`}
    >
      {text ?? labels[status]}
    </span>
  );
}
