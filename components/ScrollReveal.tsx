"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (els.length === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("revealed"));
      return;
    }

    const pending = new Set(els);

    const check = () => {
      const limit = window.innerHeight - 40;
      pending.forEach((el) => {
        if (el.getBoundingClientRect().top < limit) {
          el.classList.add("revealed");
          pending.delete(el);
        }
      });
      if (pending.size === 0) cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check, { passive: true });
    return cleanup;
  }, []);

  return null;
}
