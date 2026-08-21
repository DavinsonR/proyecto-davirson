"use client";

import { useEffect, useState } from "react";

type Mode = "light" | "dark";

/** Sun / moon drawn at one stroke weight — no emoji, no icon font. */
function Glyph({ mode }: { mode: Mode }) {
  return mode === "dark" ? (
    <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" fill="none">
      <path
        d="M13.2 9.6A5.6 5.6 0 0 1 6.4 2.8a5.6 5.6 0 1 0 6.8 6.8Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" fill="none">
      <circle cx="8" cy="8" r="3.1" stroke="currentColor" strokeWidth="1.3" />
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
        <path d="M8 1.4v1.5M8 13.1v1.5M1.4 8h1.5M13.1 8h1.5M3.3 3.3l1.1 1.1M11.6 11.6l1.1 1.1M12.7 3.3l-1.1 1.1M4.4 11.6l-1.1 1.1" />
      </g>
    </svg>
  );
}

export default function ThemeToggle({ labels }: { labels: { light: string; dark: string } }) {
  const [mode, setMode] = useState<Mode | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setMode(stored);
      return;
    }
    setMode(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next: Mode = mode === "dark" ? "light" : "dark";
    setMode(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  // Renders inert until the real mode is known, so the icon never flips on load.
  const next: Mode = mode === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={next === "dark" ? labels.dark : labels.light}
      title={next === "dark" ? labels.dark : labels.light}
      className="no-print inline-flex h-9 w-9 items-center justify-center rounded-[3px] border border-rule text-body transition-colors hover:border-cold hover:text-cold"
    >
      {mode ? <Glyph mode={next} /> : <span className="h-[15px] w-[15px]" />}
    </button>
  );
}
