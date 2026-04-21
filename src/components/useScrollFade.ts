"use client";

import { useEffect } from "react";

/**
 * Attach to any page that contains elements with className "fade-up".
 * When they enter the viewport they get the "visible" class added,
 * triggering the CSS transition defined in globals.css.
 */
export function useScrollFade() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(
              () => entry.target.classList.add("visible"),
              i * 80
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
