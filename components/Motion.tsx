"use client";

import { useEffect } from "react";

/* ============================================================
   One observer for the whole document.
   Server components stay server components: they just mark an
   element with `data-reveal` and one of the motion classes
   (`reveal`, `rule-in`, `bar-in`). This root mounts
   once, watches them all, and adds `is-in` when they arrive.

   A MutationObserver picks up nodes the client pages render
   later (the lab's charts and tables), so interactive surfaces
   animate on the same terms as the static ones.
   ============================================================ */

const SEL = "[data-reveal]";

export default function MotionRoot() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");
    root.setAttribute("data-motion", "on"); // stands down the boot failsafe

    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (still.matches) {
      document.querySelectorAll(SEL).forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target); // a printed line is not un-printed
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    const watch = (scope: ParentNode) =>
      scope.querySelectorAll?.(SEL).forEach((el) => {
        if (!el.classList.contains("is-in")) io.observe(el);
      });

    watch(document);

    const mo = new MutationObserver((records) => {
      for (const r of records) {
        for (const n of r.addedNodes) {
          if (!(n instanceof Element)) continue;
          if (n.matches(SEL)) io.observe(n);
          watch(n);
        }
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}

/* --- reading progress: a hairline that fills as the sheet is read --- */
export function ReadingProgress() {
  useEffect(() => {
    const bar = document.getElementById("read-progress");
    if (!bar) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${h > 0 ? Math.min(window.scrollY / h, 1) : 0})`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      id="read-progress"
      aria-hidden="true"
      className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-cold"
      style={{ transition: "transform 120ms linear" }}
    />
  );
}
