"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;

    const show = (element: Element) => element.removeAttribute("data-reveal-pending");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          show(entry.target);
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0, rootMargin: "0px 0px -36px 0px" });

    if (!preference.matches) {
      for (const element of elements) {
        const bounds = element.getBoundingClientRect();
        // The initial screen stays visible; only upcoming content is animated.
        if (element.getClientRects().length === 0 || bounds.top >= window.innerHeight) {
          element.setAttribute("data-reveal-pending", "");
          observer.observe(element);
        }
      }
    }

    const stopMotion = () => {
      if (preference.matches) {
        observer.disconnect();
        elements.forEach(show);
      }
    };
    const revealFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const element = event.target.closest("[data-reveal-pending]");
      if (element) {
        show(element);
        observer.unobserve(element);
      }
    };
    preference.addEventListener("change", stopMotion);
    document.addEventListener("focusin", revealFocus);

    return () => {
      observer.disconnect();
      elements.forEach(show);
      preference.removeEventListener("change", stopMotion);
      document.removeEventListener("focusin", revealFocus);
    };
  }, [pathname]);

  return null;
}
