"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { PlayCircleIcon } from "@/components/icons";
import { navItems, scheduleUrl, serviceMenuItems, socialLinks } from "@/lib/rite-content";

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" fill="currentColor">
      <path d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM9 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0-5a.75.75 0 0 0-.75.75v1.1a.75.75 0 0 0 1.5 0V.75A.75.75 0 0 0 9 0Zm0 15.4a.75.75 0 0 0-.75.75v1.1a.75.75 0 0 0 1.5 0v-1.1A.75.75 0 0 0 9 15.4ZM.75 8.25a.75.75 0 0 0 0 1.5h1.1a.75.75 0 0 0 0-1.5H.75Zm15.4 0a.75.75 0 0 0 0 1.5h1.1a.75.75 0 0 0 0-1.5h-1.1ZM3.44 3.44a.75.75 0 0 0 0 1.05l.79.8a.75.75 0 0 0 1.06-1.06l-.8-.79a.75.75 0 0 0-1.05 0Zm9.27 9.27a.75.75 0 0 0 0 1.06l.8.79a.75.75 0 0 0 1.05-1.05l-.79-.8a.75.75 0 0 0-1.06 0Zm1.85-9.27a.75.75 0 0 0-1.05 0l-.8.79a.75.75 0 0 0 1.06 1.06l.79-.8a.75.75 0 0 0 0-1.05ZM5.29 12.71a.75.75 0 0 0-1.06 0l-.79.8a.75.75 0 0 0 1.05 1.05l.8-.79a.75.75 0 0 0 0-1.06Z" />
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

function useRiteTheme() {
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

  return { theme, applyTheme };
}

function ThemeButtons({ compact = false }: { compact?: boolean }) {
  const { theme, applyTheme } = useRiteTheme();
  const buttonClass = (value: "light" | "dark") => `${compact ? "h-10 flex-1 flex-row gap-2" : "h-12 w-12 flex-col gap-0.5"} group flex items-center justify-center text-[9px] font-bold uppercase tracking-[0.06em] transition ${theme === value ? "bg-[#111013] text-white dark:bg-white dark:text-[#111013]" : "text-neutral-400 hover:text-[#111013] dark:hover:text-white"}`;

  return (
    <div className={`${compact ? "flex w-full" : "overflow-hidden rounded-full"} border border-black/10 bg-white/95 text-[#111013] shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur dark:border-white/15 dark:bg-[#111013]/95 dark:text-white`}>
      <button type="button" aria-label="Light theme" onClick={() => applyTheme("light")} className={buttonClass("light")}>
        <SunIcon />
        <span>Light</span>
      </button>
      <button type="button" aria-label="Dark theme" onClick={() => applyTheme("dark")} className={`${buttonClass("dark")} ${compact ? "border-l" : "border-t"} border-black/10 dark:border-white/15`}>
        <MoonIcon />
        <span>Dark</span>
      </button>
    </div>
  );
}

export function RiteThemeControls() {
  return (
    <div className="fixed left-3 top-[104px] z-40 hidden md:left-5 md:top-[148px] md:block">
      <ThemeButtons />
    </div>
  );
}

export function MobileRiteMenu({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
    setServicesOpen(false);
  }

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="fixed left-4 top-6 z-[70] flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f7f7] shadow-sm transition hover:bg-white md:hidden dark:bg-[#17161a]"
      >
        <span className="sr-only">Menu</span>
        <span className={`${open ? "rotate-45 shadow-none before:rotate-90" : "shadow-[0_7px_0_#1f2937,0_-7px_0_#1f2937] before:rotate-0 dark:shadow-[0_7px_0_#fff,0_-7px_0_#fff]"} relative h-0.5 w-5 bg-neutral-800 transition before:absolute before:left-0 before:top-0 before:h-0.5 before:w-5 before:bg-neutral-800 before:transition dark:bg-white dark:before:bg-white`} />
      </button>

      {open ? (
        <>
          <button type="button" aria-label="Close navigation overlay" className="fixed inset-0 z-[55] bg-[#111013]/55 backdrop-blur-[2px] md:hidden" onClick={closeMenu} />
          <aside className="fixed inset-y-0 left-0 z-[60] flex w-[min(90vw,370px)] flex-col overflow-y-auto bg-white px-7 pb-8 pt-24 text-[#111013] shadow-2xl md:hidden dark:bg-[#111013] dark:text-white">
            <button type="button" onClick={closeMenu} className="absolute right-6 top-6 text-4xl font-light leading-none" aria-label="Close menu">×</button>
            <nav className="flex flex-col text-[20px] font-bold leading-none tracking-[-0.04em]">
              {navItems.map((item) => item.label === "Services" ? (
                <div key={item.label} className="border-b border-neutral-200 py-4 dark:border-white/15">
                  <button
                    type="button"
                    onClick={() => setServicesOpen((current) => !current)}
                    aria-expanded={servicesOpen}
                    className={`${active === "Services" ? "text-[#09a9d6]" : ""} flex w-full items-center justify-between text-left`}
                  >
                    Services
                    <span className="text-[22px] text-[#09a9d6]">{servicesOpen ? "−" : "+"}</span>
                  </button>
                  {servicesOpen ? (
                    <div className="mt-5 space-y-3 border-l-2 border-[#09a9d6]/35 pl-4 text-[14px] leading-tight tracking-[-0.02em] text-neutral-600 dark:text-white/70">
                      <Link href="/services/" onClick={closeMenu} className="block font-bold text-[#111013] hover:text-[#09a9d6] dark:text-white">Services</Link>
                      {serviceMenuItems.map((service) => (
                        <div key={service.href}>
                          <Link href={service.href} onClick={closeMenu} className="block font-bold text-[#111013] hover:text-[#09a9d6] dark:text-white">
                            {service.label}
                          </Link>
                          {service.children ? (
                            <div className="mt-3 space-y-3 pl-3">
                              {service.children.map((child) => (
                                <Link key={child.href} href={child.href} onClick={closeMenu} className="block hover:text-[#09a9d6]">
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link key={item.label} href={item.href} onClick={closeMenu} className={`${active === item.label ? "text-[#09a9d6]" : ""} border-b border-neutral-200 py-4 dark:border-white/15`}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <a href={scheduleUrl} target="_blank" rel="noreferrer" onClick={closeMenu} className="mt-8 inline-flex items-center justify-center bg-[#111013] px-5 py-3 text-[11px] font-bold uppercase tracking-[-0.01em] text-white transition hover:brightness-110 dark:bg-white dark:text-[#111013]">
              Schedule a plumber now <span className="ml-2">→</span>
            </a>
            <div className="mt-8 border-t border-neutral-200 pt-6 dark:border-white/15">
              <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-neutral-400">Follow Us</p>
              <p className="mt-3 text-[16px] font-bold">
                {socialLinks.map((social, index) => (
                  <span key={social.label}>
                    <a href={social.href} target="_blank" rel="noreferrer" className="hover:text-[#18a9d4]">{social.label}</a>{index < socialLinks.length - 1 ? " / " : ""}
                  </span>
                ))}
              </p>
            </div>
            <div className="mt-7 border-t border-neutral-200 pt-6 dark:border-white/15">
              <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.1em] text-neutral-400">Theme</p>
              <ThemeButtons compact />
            </div>
          </aside>
        </>
      ) : null}
    </>
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
      className={`fixed bottom-6 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-[#f22b2b] text-[20px] font-bold leading-none text-white shadow-lg transition md:bottom-auto md:right-auto md:left-5 md:top-[295px] md:h-auto md:w-auto md:rounded-none md:border-0 md:bg-transparent md:text-[#111013] md:shadow-none md:dark:text-white ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      <span className="hidden items-center gap-3 text-[11px] font-bold uppercase tracking-[0.08em] md:flex md:[writing-mode:vertical-rl]">
        <span className="h-16 w-px bg-[#f22b2b]" />
        Scroll to top
      </span>
      <span className="md:hidden">↑</span>
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
      <button type="button" aria-label="Play Rite Plumbing video" onClick={() => setOpen(true)} className="mb-5 block rounded-full text-white transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#18a9d4] md:mb-8 md:text-[#111013] dark:text-white">
        <PlayCircleIcon className="h-14 w-14 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] md:h-16 md:w-16" />
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
