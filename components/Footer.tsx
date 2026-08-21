import type { Dictionary, Locale } from "@/lib/dictionaries";

export default function Footer({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rule py-9">
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 text-[14px] text-body">
        <span>
          © {year} · {dict.footer.left}
        </span>
        <span lang={lang}>{dict.footer.right}</span>
      </div>
    </footer>
  );
}
