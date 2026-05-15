"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { PlayCircleIcon } from "@/components/icons";

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" fill="currentColor">
      <path d="M9 6.75A2.25 2.25 0 1 1 9 11.25A2.25 2.25 0 0 1 9 6.75Zm0-1.5A3.75 3.75 0 1 0 9 12.75A3.75 3.75 0 0 0 9 5.25Zm-.75-3.75v1.5a.75.75 0 0 0 1.5 0V1.5a.75.75 0 0 0-1.5 0ZM8.25 15v1.5a.75.75 0 0 0 1.5 0V15a.75.75 0 0 0-1.5 0ZM1.5 8.25a.75.75 0 0 0 0 1.5H3a.75.75 0 0 0 0-1.5H1.5Zm13.5 0a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H15ZM3.44 3.44a.75.75 0 0 0 0 1.05l.8.8a.75.75 0 0 0 1.05-1.06l-.8-.79a.75.75 0 0 0-1.05 0Zm9.27 9.27a.75.75 0 0 0 0 1.06l.8.79a.75.75 0 0 0 1.05-1.05l-.79-.8a.75.75 0 0 0-1.06 0Zm1.85-9.27a.75.75 0 0 0-1.05 0l-.8.79a.75.75 0 0 0 1.06 1.06l.79-.8a.75.75 0 0 0 0-1.05ZM5.29 12.71a.75.75 0 0 0-1.06 0l-.79.8a.75.75 0 0 0 1.05 1.05l.8-.79a.75.75 0 0 0 0-1.06Z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" fill="currentColor">
      <path d="M6.66 3.23A6.6 6.6 0 0 0 6.42 5A6.58 6.58 0 0 0 13 11.58c.6 0 1.2-.08 1.77-.24A6.22 6.22 0 1 1 6.66 3.23ZM9 1a8 8 0 1 0 8 8c0-.41-.04-.82-.09-1.21A4.8 4.8 0 0 1 8.2 5c0-1.61.79-3.04 2.01-3.91A8.1 8.1 0 0 0 9 1Z" />
    </svg>
  );
}

export function RiteThemeControls() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    return window.localStorage.getItem("rite-theme") === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  function applyTheme(nextTheme: "light" | "dark") {
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("rite-theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <div className="fixed left-3 top-[104px] z-40 md:left-5 md:top-[148px]">
      <div className="overflow-hidden rounded-full border border-black/10 bg-white/95 text-[#111013] shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur dark:border-white/15 dark:bg-[#111013]/95 dark:text-white">
        <button type="button" aria-label="Light theme" onClick={() => applyTheme("light")} className={`group flex h-12 w-12 flex-col items-center justify-center gap-0.5 text-[9px] font-bold uppercase tracking-[0.06em] transition ${theme === "light" ? "bg-[#111013] text-white dark:bg-white dark:text-[#111013]" : "text-neutral-400 hover:text-[#111013] dark:hover:text-white"}`}>
          <SunIcon />
          <span>Light</span>
        </button>
        <button type="button" aria-label="Dark theme" onClick={() => applyTheme("dark")} className={`group flex h-12 w-12 flex-col items-center justify-center gap-0.5 border-t border-black/10 text-[9px] font-bold uppercase tracking-[0.06em] transition dark:border-white/15 ${theme === "dark" ? "bg-[#111013] text-white dark:bg-white dark:text-[#111013]" : "text-neutral-400 hover:text-[#111013] dark:hover:text-white"}`}>
          <MoonIcon />
          <span>Dark</span>
        </button>
      </div>
    </div>
  );
}

export function RiteScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed z-50 transition ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      <span className="hidden items-center gap-3 text-[11px] font-bold uppercase tracking-[0.08em] text-[#111013] dark:text-white md:fixed md:left-5 md:top-[295px] md:flex md:[writing-mode:vertical-rl]">
        <span className="h-16 w-px bg-[#f22b2b]" />
        Scroll to top
      </span>
      <span className="fixed bottom-7 right-7 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-[#f22b2b] text-[20px] font-bold leading-none text-white shadow-lg md:hidden">↑</span>
    </button>
  );
}

export function HeroVideoButton({ src }: { src: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button type="button" aria-label="Play Rite Plumbing video" onClick={() => setOpen(true)} className="mb-8 block rounded-full text-[#111013] transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#18a9d4] dark:text-white">
        <PlayCircleIcon className="h-16 w-16 drop-shadow-[0_2px_8px_rgba(0,0,0,0.28)]" />
      </button>
      {open ? createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/82 px-4 py-8" role="dialog" aria-modal="true" aria-label="Rite Plumbing video player">
          <button type="button" aria-label="Close video" onClick={() => setOpen(false)} className="absolute right-4 top-4 z-50 h-11 w-11 rounded-full bg-white text-[26px] font-bold leading-none text-[#111013] md:right-8 md:top-8">×</button>
          <div className="w-full max-w-[960px] bg-black shadow-2xl">
            <video src={src} controls autoPlay playsInline className="h-auto max-h-[78vh] w-full" />
          </div>
        </div>,
        document.body,
      ) : null}
    </>
  );
}
