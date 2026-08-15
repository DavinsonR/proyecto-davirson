import type { Dictionary } from "@/lib/dictionaries";

export default function Footer({ dict }: { dict: Dictionary }) {
  const words = dict.footer.right.split(" ");
  const last = words.pop();
  return (
    <footer className="border-t border-linesoft mt-5 py-10">
      <div className="max-w-[980px] mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-[12.5px] text-dim">
        <span>{dict.footer.left}</span>
        <span>
          {words.join(" ")} <span className="text-warm">{last}</span>
        </span>
      </div>
    </footer>
  );
}
