import type { Status } from "@/lib/dictionaries";

const styles: Record<Status, string> = {
  live: "text-live border-[#2A4A3A] bg-[#14231C]",
  building: "text-building border-[#4A4322] bg-[#232012]",
  research: "text-research border-[#2A3A4E] bg-[#131B26]",
  idea: "text-idea border-[#2A313B] bg-[#171C23]",
};

const labels: Record<Status, string> = {
  live: "LIVE",
  building: "BUILDING",
  research: "RESEARCH",
  idea: "IDEA",
};

export default function StatusPill({ status, text }: { status: Status; text?: string }) {
  return (
    <span className={`font-mono text-[10px] tracking-[0.1em] px-2.5 py-1 rounded-full border whitespace-nowrap ${styles[status]}`}>
      {text ?? labels[status]}
    </span>
  );
}
