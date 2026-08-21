import Link from "next/link";

/** Every subpage is reachable from a figure on the home page, so every subpage
 *  needs a way back to it. The first reviewer to use the site as a visitor
 *  rather than a colleague asked for this twice in one message. */
export default function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="lift group inline-flex items-center gap-2 text-[14px] font-medium text-cold hover:underline"
    >
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-200 group-hover:-translate-x-0.5"
      >
        ←
      </span>
      {label}
    </Link>
  );
}
