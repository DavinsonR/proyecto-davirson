import type { Status } from "@/lib/dictionaries";

const fill: Record<Status, string> = {
  live: "bg-live",
  building: "bg-building",
  research: "bg-research",
  idea: "bg-muted",
};

export default function ProgressBar({ status, value }: { status: Status; value: number }) {
  return (
    <div className="mt-5 h-[3px] rounded-sm bg-rule overflow-hidden">
      <i className={`block h-full rounded-sm ${fill[status]}`} style={{ width: `${value}%` }} />
    </div>
  );
}
