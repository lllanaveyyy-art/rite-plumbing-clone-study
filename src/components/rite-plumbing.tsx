"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarLineIcon, CreditCardIcon, DocumentStackIcon, PlayCircleIcon, RoutePinIcon } from "@/components/icons";
import { documents, features, navItems, news, serviceMenuItems, servicePages, type ServicePageContent } from "@/lib/rite-content";
import type { ServiceFeature } from "@/types/rite-plumbing";

const phoneHref = "tel:3475026441";
const phoneDisplay = "(347) 502-6441";

function PhoneLink({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <a href={phoneHref} className={className}>
      {children}
    </a>
  );
}

function TextWithPhoneLinks({ text }: { text: string }) {
  const phonePattern = /(347[-\s]502[-\s]6441|3475026441)/g;
  const parts = text.split(phonePattern);

  return (
    <>
      {parts.map((part, index) =>
        /^(347[-\s]502[-\s]6441|3475026441)$/.test(part) ? (
          <PhoneLink key={`${part}-${index}`} className="font-bold text-[#09a9d6] underline-offset-2 hover:underline">
            {part}
          </PhoneLink>
        ) : (
          part
        ),
      )}
    </>
  );
}

function ThemeControls({ compact = false }: { compact?: boolean }) {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    return window.localStorage.getItem("rite-theme") === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  function changeTheme(nextTheme: "light" | "dark") {
    setTheme(nextTheme);
    window.localStorage.setItem("rite-theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }

  return (
    <div className={`${compact ? "flex items-center gap-2" : "flex flex-col"} text-[11px] font-bold uppercase tracking-[0.08em]`}>
      <button
        type="button"
        onClick={() => changeTheme("light")}
        className={`${theme === "light" ? "text-[#111013]" : "text-neutral-400"} text-left transition hover:text-[#09a9d6] dark:text-white`}
      >
        Light
      </button>
      <button
        type="button"
        onClick={() => changeTheme("dark")}
        className={`${theme === "dark" ? "text-[#09a9d6]" : "text-neutral-400"} text-left transition hover:text-[#09a9d6]`}
      >
        Dark
      </button>
    </div>
  );
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"} fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#111013] text-lg font-bold text-white shadow-xl transition md:bottom-8 md:right-8`}
    >
      ↑
    </button>
  );
}

function CtaButton({ children, dark = false, href = "/contact/" }: { children: React.ReactNode; dark?: boolean; href?: string }) {
  return (
    <Link href={href} className={`${dark ? "bg-[#111013] text-white" : "bg-[#f22b2b] text-white"} inline-flex items-center justify-center px-5 py-3 text-[11px] font-bold uppercase tracking-[-0.01em] transition hover:brightness-110`}>
      {children} <span className="ml-2">→</span>
    </Link>
  );
}

function FeatureIcon({ icon }: { icon: ServiceFeature["icon"] }) {
  const className = "h-8 w-8 text-white/80";
  if (icon === "calendar") return <CalendarLineIcon className={className} />;
  if (icon === "route") return <RoutePinIcon className={className} />;
  if (icon === "document") return <DocumentStackIcon className={className} />;
  return <CreditCardIcon className={className} />;
}

export function RiteHeader({ active }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
    setServicesOpen(false);
  }

  return (
    <>
      <button
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
        className="fixed left-4 top-5 z-[70] flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f7f7] shadow-sm transition hover:bg-white md:left-5 md:top-12 md:h-14 md:w-14"
      >
        <span className="sr-only">Menu</span>
        <span className={`${menuOpen ? "rotate-45 shadow-none before:rotate-90" : "shadow-[0_7px_0_#1f2937,0_-7px_0_#1f2937] before:rotate-0"} relative h-0.5 w-5 bg-neutral-800 transition before:absolute before:left-0 before:top-0 before:h-0.5 before:w-5 before:bg-neutral-800 before:transition`} />
      </button>

      {menuOpen ? (
        <>
          <button
            type="button"
            aria-label="Close navigation overlay"
            className="fixed inset-0 z-[55] bg-[#111013]/55 backdrop-blur-[2px] md:hidden"
            onClick={closeMenu}
          />
          <aside
            className="fixed inset-y-0 left-0 z-[60] flex w-[min(88vw,360px)] flex-col overflow-y-auto bg-white px-7 pb-8 pt-24 text-[#111013] shadow-2xl md:hidden dark:bg-[#111013] dark:text-white"
          >
            <div className="mb-8 flex items-center justify-between border-b border-neutral-200 pb-6 dark:border-white/15">
              <Image src="/images/riteplumbing/logo.webp" alt="Professional Plumbing Services" width={253} height={75} className="h-auto w-[170px] dark:brightness-125" priority />
              <button type="button" onClick={closeMenu} className="text-3xl font-light leading-none" aria-label="Close menu">×</button>
            </div>

            <nav className="flex flex-col text-[20px] font-bold leading-none tracking-[-0.04em]">
              <Link href="/" onClick={closeMenu} className={`${active === "Home" ? "text-[#09a9d6]" : ""} border-b border-neutral-200 py-4 dark:border-white/15`}>Home</Link>
              <div className="border-b border-neutral-200 py-4 dark:border-white/15">
                <button
                  type="button"
                  onClick={() => setServicesOpen((open) => !open)}
                  aria-expanded={servicesOpen}
                  className={`${active === "Services" ? "text-[#09a9d6]" : ""} flex w-full items-center justify-between text-left`}
                >
                  Services
                  <span className="text-[20px] text-[#09a9d6]">{servicesOpen ? "−" : "+"}</span>
                </button>
                {servicesOpen ? (
                  <div className="mt-5 space-y-3 border-l-2 border-[#09a9d6]/35 pl-4 text-[14px] leading-tight tracking-[-0.02em] text-neutral-600 dark:text-white/70">
                    <Link href="/24-7-plumbing-services/" onClick={closeMenu} className="block font-bold text-[#111013] dark:text-white">24/7 Plumbing Services</Link>
                    <div className="space-y-3 pl-3">
                      {serviceMenuItems.slice(1, 12).map((service) => (
                        <Link key={service.href} href={service.href} onClick={closeMenu} className="block hover:text-[#09a9d6]">
                          {service.label}
                        </Link>
                      ))}
                    </div>
                    {serviceMenuItems.slice(12).map((service) => (
                      <Link key={service.href} href={service.href} onClick={closeMenu} className="block font-bold text-[#111013] hover:text-[#09a9d6] dark:text-white">
                        {service.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
              {navItems.filter((item) => item.label !== "Home" && item.label !== "Services").map((item) => (
                <Link key={item.label} href={item.href} onClick={closeMenu} className={`${active === item.label ? "text-[#09a9d6]" : ""} border-b border-neutral-200 py-4 dark:border-white/15`}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8">
              <CtaButton dark>Schedule a plumber now</CtaButton>
            </div>
            <div className="mt-8 border-t border-neutral-200 pt-6 dark:border-white/15">
              <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-neutral-400">Follow Us</p>
              <p className="mt-3 text-[16px] font-bold">Fb. / Ig. / Yt.</p>
            </div>
            <div className="mt-7 border-t border-neutral-200 pt-6 dark:border-white/15">
              <ThemeControls compact />
            </div>
          </aside>
        </>
      ) : null}

      <div className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 rotate-180 text-[13px] font-bold text-[#111013] [writing-mode:vertical-rl] md:block dark:text-white">
        Follow Us — Fb. / Ig. / Yt.
      </div>
      <div className="fixed left-0 top-0 z-40 hidden bg-white/90 p-3 backdrop-blur md:block dark:bg-[#111013]/90">
        <ThemeControls />
      </div>
      <header className="relative z-30 mx-auto hidden max-w-[1320px] items-center justify-between px-20 py-6 md:flex md:py-8">
        <Link href="/" className="shrink-0">
          <Image src="/images/riteplumbing/logo.webp" alt="Professional Plumbing Services" width={253} height={75} className="h-auto w-[150px] md:w-[230px]" priority />
        </Link>
        <nav className="hidden items-center gap-8 text-[16px] font-bold md:flex">
          {navItems.map((item) => item.label === "Services" ? (
            <div key={item.label} className="group relative py-4">
              <button className={`${active === "Services" ? "text-[#09a9d6]" : "text-[#111013] dark:text-white"} hover:text-[#09a9d6]`}>Services</button>
              <div className="invisible absolute left-1/2 top-full w-[760px] -translate-x-1/2 translate-y-3 border border-black/5 bg-white/95 p-8 opacity-0 shadow-2xl backdrop-blur transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="mb-5 flex items-center justify-between border-b border-neutral-200 pb-4">
                  <p className="text-[18px] font-bold tracking-[-0.04em]">Plumbing Services</p>
                  <span className="text-[12px] text-neutral-400">+</span>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  {serviceMenuItems.map((service) => (
                    <Link key={service.href} href={service.href} className="text-[14px] leading-tight text-neutral-600 hover:text-[#09a9d6]">
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Link key={item.label} href={item.href} className={`${active === item.label ? "text-[#09a9d6]" : "text-[#111013] dark:text-white"} hover:text-[#09a9d6]`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block"><CtaButton dark>Schedule a plumber now</CtaButton></div>
      </header>
      <ScrollToTopButton />
    </>
  );
}

export function RiteFooter() {
  return (
    <footer className="bg-[#111013] px-7 py-20 text-white md:px-0 md:py-28">
      <div className="mx-auto grid max-w-[1220px] gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div className="flex items-end"><p className="text-[16px] font-bold text-white/65">Fb. / &nbsp; Ig. / &nbsp; Yt.</p></div>
        <div>
          <h4 className="text-[15px] font-bold text-white/35">Quick Links</h4>
          <p className="mt-12 text-[15px] font-bold leading-loose text-white/55">History<br />FAQ<br />Why Hired Licensed Plumber</p>
        </div>
        <div>
          <h4 className="text-[15px] font-bold text-white/35">Mission</h4>
          <p className="mt-12 text-[15px] font-bold leading-loose text-white/55">Mission Statement<br />Videos</p>
        </div>
        <div className="flex items-center"><CtaButton>Schedule Plumber Now</CtaButton></div>
      </div>
      <div className="mx-auto mt-20 flex max-w-[1220px] flex-col justify-between gap-5 border-t border-white/20 pt-8 text-[13px] font-bold text-white/45 md:flex-row">
        <p>© 2025 Rite Plumbing NYC. All rights reserved</p>
        <p>Security | Privacy & Cookie Policy | Terms of Services</p>
      </div>
    </footer>
  );
}

export function HomePage() {
  return (
    <main id="home" className="min-h-screen overflow-hidden bg-white text-[#18171c]">
      <RiteHeader active="Home" />
      <section className="relative mx-auto grid min-h-[690px] max-w-[1220px] overflow-hidden px-7 pb-10 pt-10 md:min-h-[760px] md:grid-cols-[1fr_1fr] md:items-start md:px-0 md:pb-0 md:pt-0">
        <div className="rite-bg-hero absolute inset-0 bg-cover bg-[center_top] md:relative md:inset-auto md:min-h-[690px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111013]/20 via-[#111013]/30 to-[#111013]/70 md:hidden" />
        <div className="absolute -right-24 top-20 h-[430px] w-[430px] rounded-full bg-[#18a9d4]/65 blur-[1px] md:hidden" />
        <div className="relative z-10 flex min-h-[620px] flex-col justify-end pb-10 text-white md:-ml-24 md:min-h-[690px] md:justify-center md:pb-0">
          <div className="absolute inset-y-0 -left-12 -z-0 hidden aspect-square h-[650px] rounded-full bg-[#1aa8d3]/95 md:block" />
          <div className="relative z-10 max-w-[560px] rounded-[1px] bg-[#18a9d4]/72 px-5 py-7 shadow-2xl backdrop-blur-[1px] md:bg-transparent md:p-0 md:pt-16 md:shadow-none md:backdrop-blur-0">
            <PlayCircleIcon className="mb-5 h-12 w-12 text-[#111013] md:mb-8 md:h-16 md:w-16" />
            <h1 className="max-w-[520px] text-[34px] font-bold leading-[0.94] tracking-[-0.06em] drop-shadow md:text-[47px]">Rite Plumbing NYC | Your Plumbing Solution</h1>
            <div className="my-5 h-px w-full bg-white/65 md:my-8" />
            <PhoneLink className="block text-[38px] font-bold leading-none tracking-[-0.06em] text-white drop-shadow md:text-[55px]">{phoneDisplay}</PhoneLink>
            <p className="mt-5 max-w-[470px] text-[25px] font-bold leading-[1.02] tracking-[-0.05em] drop-shadow md:text-[38px]">24/7 Plumbing services Less than 30 minutes to arrive!</p>
            <div className="my-6 h-px w-44 bg-white/65 md:my-9" />
            <p className="text-[15px] font-bold leading-tight tracking-[-0.04em] drop-shadow md:text-[16px]">Licensed and Insured<br />Plumbing License: 1608</p>
            <div className="mt-7 md:mt-10"><CtaButton dark>Schedule a plumber now</CtaButton></div>
          </div>
        </div>
        <p className="absolute bottom-3 left-7 z-10 max-w-[250px] text-[11px] font-bold text-white drop-shadow md:bottom-4 md:left-[690px]">750 Lexington Ave, New York, NY 10022</p>
      </section>
      <section id="services" className="bg-[#111013] text-white">
        <div className="mx-auto grid max-w-[1220px] gap-12 px-7 py-14 md:grid-cols-[0.85fr_1.35fr] md:px-0 md:py-24">
          <div><p className="mb-6 text-[10px] font-bold uppercase text-white/45">What we do</p><h2 className="max-w-[470px] text-[40px] font-bold leading-[0.95] tracking-[-0.06em] md:text-[56px]">Say goodbye to old-fashioned plumbing appointments - our innovative system is here.</h2><div className="mt-8"><CtaButton>Schedule Plumber Now</CtaButton></div></div>
          <div><p className="max-w-[720px] text-[15px] font-bold leading-relaxed text-white/60">You can save time by quickly and easily schedule with our online scheduling service! In just 30 seconds you can book a virtual estimate or job appointment that fits into your schedule.</p><div className="mt-10 grid gap-x-20 gap-y-10 md:mt-16 md:grid-cols-2">{features.map((feature) => <article key={feature.title}><FeatureIcon icon={feature.icon} /><h3 className="mt-5 text-[19px] font-bold leading-tight tracking-[-0.04em]">{feature.title}</h3><p className="mt-3 max-w-[300px] text-[13px] leading-relaxed text-white/38">{feature.description}</p></article>)}</div></div>
        </div>
      </section>
      <section className="grid md:grid-cols-2">
        <article className="rite-bg-service flex min-h-[430px] items-center bg-cover bg-center px-7 text-white md:min-h-[690px] md:px-0"><div className="mx-auto w-full max-w-[610px]"><h2 className="max-w-[470px] text-[42px] font-bold leading-[0.95] tracking-[-0.06em] md:text-[56px]">Specialised in plumbing repair, service and installation.</h2><Link className="mt-9 inline-block bg-[#111013] px-5 py-3 text-[11px] font-bold" href="/services/residential-plumbing-services-repairs/">Read More ▸</Link></div></article>
        <article className="rite-bg-licensed relative flex min-h-[430px] items-center bg-cover bg-center px-7 text-white md:min-h-[690px] md:px-16"><div className="absolute inset-0 bg-[#12aada]/70" /><div className="relative mx-auto max-w-[560px]"><h2 className="text-[42px] font-bold leading-[0.95] tracking-[-0.06em] md:text-[56px]">Why you should hire a licensed plumber in NYC.</h2><Link className="mt-9 inline-block bg-[#111013] px-5 py-3 text-[11px] font-bold" href="/about-us/">Read More ▸</Link></div></article>
      </section>
      <DocumentAndTeam />
      <section id="video" className="h-[220px] bg-[#f7f6f7] md:h-[850px]" />
      <section className="bg-white py-14 md:py-36"><div className="rite-bg-team mx-auto h-[220px] max-w-[1220px] bg-cover bg-center md:h-[660px]" /></section>
      <NewsSection />
      <ContactStrip />
      <RiteFooter />
    </main>
  );
}

function DocumentAndTeam() {
  return (
    <section className="mx-auto max-w-[1220px] px-7 py-16 md:px-0 md:py-32">
      <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr]"><div><h2 className="max-w-[650px] text-[32px] font-bold leading-[1.05] tracking-[-0.055em] md:text-[43px]">Building Management Document Requirements done within 24 Hours</h2><p className="mt-11 max-w-[590px] text-[32px] font-bold leading-[1.05] tracking-[-0.055em] md:text-[42px]">Secure your plumbing work with nessesary documents.</p><div className="mt-11"><CtaButton dark>Upload Documents</CtaButton></div></div><div className="grid gap-5 text-[14px] font-bold leading-none">{documents.map((doc) => <details key={doc.title} className="group border-b border-transparent"><summary className="cursor-pointer list-none">+ <span className="ml-4">{doc.title}</span></summary><p className="mt-4 pl-7 text-[13px] font-medium leading-relaxed text-neutral-500 group-open:pb-4">{doc.description}</p></details>)}</div></div>
      <div id="about" className="mt-12 grid gap-12 md:grid-cols-[0.63fr_0.37fr] md:items-start"><article className="rite-bg-history flex min-h-[460px] md:min-h-[980px] items-end bg-cover bg-center p-10 text-white md:p-20"><div><h2 className="text-[42px] font-bold tracking-[-0.06em] md:text-[56px]">Our History</h2><Link className="mt-6 inline-block bg-[#111013] px-5 py-3 text-[11px] font-bold" href="/about-us/">Read More ▸</Link></div></article><div className="rite-bg-document hidden min-h-[980px] bg-cover bg-center md:block" /></div>
    </section>
  );
}

function NewsSection() {
  return <section id="news" className="bg-[#f7f7f7] px-7 py-16 md:py-36"><div className="mx-auto max-w-[1220px]"><h2 className="text-[26px] font-bold tracking-[-0.055em] md:text-[34px]">Recent news.</h2><div className="mt-16 grid gap-8 md:grid-cols-3">{news.slice(0, 3).map((article) => <article key={article.title} className="flex min-h-[285px] flex-col justify-end bg-gradient-to-t from-[#565656] to-[#c8c8c8] p-6 text-white md:min-h-[330px]"><p className="text-[10px] font-bold text-white/45">Posted by SEO RankZenith</p><p className="mt-1 text-[10px] font-bold text-white/45">August 25, 2023 · {article.readTime}</p><h3 className="mt-3 text-[20px] font-bold leading-tight tracking-[-0.05em]">{article.title}</h3><p className="mt-3 text-[11px] font-bold text-white/70">{article.category}</p></article>)}</div></div></section>;
}

function ContactStrip() {
  return (
    <section id="contact" className="bg-white px-7 py-16 md:px-0">
      <div className="mx-auto grid max-w-[980px] gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-2xl">☏</p>
          <h3 className="mt-4 text-[16px] font-bold tracking-[-0.03em]">Get in touch</h3>
          <p className="mt-8 text-[13px] leading-loose text-neutral-500">
            info@riteplumbingnyc.com<br />
            <PhoneLink className="font-bold text-neutral-900 hover:text-[#09a9d6]">347 502 6441</PhoneLink><br /><br />
            Assistance hours:<br />
            <strong className="text-neutral-900">24/7 Services</strong>
          </p>
        </div>
        <div>
          <p className="text-2xl">▣</p>
          <h3 className="mt-4 text-[16px] font-bold tracking-[-0.03em]">Rite Plumbing & Heating Inc</h3>
          <p className="mt-8 max-w-[260px] text-[13px] font-bold leading-relaxed text-neutral-700">750 Lexington Ave, 9th Floor New York, NY 10022 United States</p>
        </div>
      </div>
    </section>
  );
}


export function ServicePage({ page }: { page: ServicePageContent }) {
  return (
    <main className="min-h-screen bg-white text-[#111013]">
      <RiteHeader active="Services" />
      <section className="mx-auto grid max-w-[1320px] md:grid-cols-[0.92fr_1fr]">
        <div className="grid grid-cols-2 gap-2 px-4 pb-2 md:grid-cols-1 md:px-0 md:pb-0">
          {page.images.map((src, index) => (
            <div key={src} className={`${index === 0 ? "col-span-2 h-[260px] md:h-[510px]" : "h-[170px] md:h-[430px]"} relative bg-neutral-100`}>
              <Image src={src} alt="Rite Plumbing service" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" priority={index === 0} />
            </div>
          ))}
        </div>
        <article className="px-7 py-10 md:px-24 md:py-48">
          <Link href="/" className="mb-8 block text-3xl md:mb-20">←</Link>
          <h1 className="max-w-[650px] text-[42px] font-bold leading-[0.95] tracking-[-0.065em] md:text-[76px]">{page.title}</h1>
          <h2 className="mt-7 text-[24px] font-bold tracking-[-0.04em] md:text-[26px]">{page.eyebrow}</h2>
          {page.intro.map((paragraph) => (
            <p key={paragraph} className="mt-4 max-w-[650px] text-[17px] font-medium leading-relaxed text-neutral-700">
              <TextWithPhoneLinks text={paragraph} />
            </p>
          ))}
          <h2 className="mt-9 max-w-[680px] text-[31px] font-bold leading-tight tracking-[-0.055em] md:mt-10 md:text-[44px]">{page.sectionTitle}</h2>
          {page.body.map((paragraph) => (
            <p key={paragraph} className="mt-5 max-w-[680px] text-[17px] leading-relaxed text-neutral-700">
              <TextWithPhoneLinks text={paragraph} />
            </p>
          ))}
          {page.listTitle ? <h3 className="mt-8 text-[17px] font-bold">{page.listTitle}</h3> : null}
          <ul className="mt-5 list-disc space-y-3 pl-7 text-[16px] leading-relaxed text-neutral-700">{page.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          <h2 className="mt-10 max-w-[620px] text-[31px] font-bold leading-tight tracking-[-0.055em] md:mt-12 md:text-[42px]">{page.closingTitle}</h2>
          <p className="mt-5 max-w-[680px] text-[17px] leading-relaxed text-neutral-700"><TextWithPhoneLinks text={page.closing} /></p>
        </article>
      </section>
      <section className="bg-white px-7 py-16 md:py-36">
        <div className="mx-auto max-w-[780px]">
          <h2 className="text-[28px] font-bold tracking-[-0.05em]">We Will Arrive In Less Than 30-minutes.</h2>
          <p className="mt-7 text-[16px] leading-relaxed text-neutral-400 md:mt-12">24/7 Emergency Plumbing Service in QUEENS, BROOKLYN, AND MANHATTAN. Schedule an emergency commercial plumber through our online calendar.</p>
          <div className="mt-8 md:mt-10"><CtaButton dark>Schedule a plumber now</CtaButton></div>
        </div>
      </section>
      <RiteFooter />
    </main>
  );
}


export function BlogPage() {
  return <main className="min-h-screen bg-white text-[#111013]"><RiteHeader active="Blog" /><SimpleHero title="Blog" crumb="Home / Blog" /><section className="mx-auto grid max-w-[1220px] gap-12 px-7 py-20 md:grid-cols-[0.75fr_0.25fr] md:px-0"><div className="grid gap-8 md:grid-cols-2">{news.map((article) => <article key={article.title} className="border-b border-neutral-200 pb-10"><p className="text-[12px] font-bold text-neutral-400">Posted by SEO RankZenith</p><p className="mt-2 text-[12px] font-bold text-neutral-400">August 25, 2023 · {article.readTime}</p><h2 className="mt-5 text-[32px] font-bold leading-tight tracking-[-0.055em]">{article.title}</h2><p className="mt-5 text-neutral-500">Oftentimes, you find people making mistakes when they try to fix plumbing...</p><p className="mt-5 text-[13px] font-bold text-neutral-500">{article.category}</p><Link href="/blog/" className="mt-5 inline-block text-[13px] font-bold">Read More</Link></article>)}</div><aside><h3 className="text-[16px] font-bold">Categories</h3><p className="mt-8 leading-loose text-neutral-500">Gas<br />NYC Plumber Council<br />Plumbing<br />Tanless Water Heaters<br />Uncategorized<br />Water Heater<br />Winter</p></aside></section><RiteFooter /></main>;
}

export function VideoPage() {
  return <main className="min-h-screen bg-white text-[#111013]"><RiteHeader active="Video" /><SimpleHero title="Video" crumb="Home / Video" /><section className="mx-auto max-w-[1220px] px-7 py-24 md:px-0"><div className="grid gap-8 md:grid-cols-3"><VideoCard title="Rite Plumbing NYC" /><VideoCard title="Emergency Plumber" /><VideoCard title="Residential Plumbing" /></div></section><RiteFooter /></main>;
}

function VideoCard({ title }: { title: string }) {
  return <div className="flex h-[260px] items-center justify-center bg-[#111013] text-white"><div className="text-center"><PlayCircleIcon className="mx-auto h-16 w-16 text-[#18a9d4]" /><h2 className="mt-5 text-2xl font-bold">{title}</h2></div></div>;
}

export function AboutPage() {
  return <main className="min-h-screen bg-white text-[#111013]"><RiteHeader active="About Us" /><SimpleHero title="About Us" crumb="Home / About Us" /><section className="mx-auto max-w-[1220px] px-7 py-20 md:px-0"><Image src="/images/riteplumbing/services/RitePlumbingTeam-3-1-1-1536x570.jpg.webp" alt="Rite Plumbing team" width={1536} height={570} className="w-full" /><div className="mt-20 grid gap-14 md:grid-cols-2"><div><p className="text-[12px] font-bold uppercase">What we do</p><h2 className="mt-6 text-[48px] font-bold leading-none tracking-[-0.06em]">Results and answers form driven master plumbers</h2></div><div className="space-y-6 text-[17px] leading-relaxed text-neutral-600"><p>Big or small we are there and ready and waiting to solve multiple plumbing and heating issues: 24/7 Emergency Services, Free Estimates, Under 30-minute Arrival Time, State of the Art Scheduling Software.</p><p>We are exceeding customer expectations every day. Every one of our highly-trained techs are experienced, ready, and waiting to handle any task, regardless of the extent.</p><p>Our peace of mind commitment | We get the picture. Residential Plumbing And Heating. Commercial Plumbing And Heating.</p></div></div></section><RiteFooter /></main>;
}

export function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#111013]">
      <RiteHeader active="Contact" />
      <SimpleHero title="Contact" subtitle="Leave us a little info, and we’ll be in touch.
Send Us an Email" />
      <section className="grid md:grid-cols-2">
        <div className="h-[300px] bg-[url('/images/riteplumbing/services/residential-plumbing-services-repairs-1.jpg.webp')] bg-cover bg-center md:h-[520px]" />
        <div className="grid md:grid-cols-2">
          <div className="bg-[#111013] p-10 text-white md:p-24">
            <p className="text-3xl">▰</p>
            <h2 className="mt-8 text-[28px] font-bold md:mt-12">Get in touch</h2>
            <p className="mt-8 text-[18px] leading-loose md:mt-10">
              info@riteplumbingnyc.com<br />
              <PhoneLink className="font-bold text-white hover:text-[#09a9d6]">347 502 6441</PhoneLink><br /><br />
              Assistance hours:<br />24/7 Services
            </p>
          </div>
          <div className="bg-[#17161a] p-10 text-white md:p-24">
            <p className="text-3xl">✉</p>
            <h2 className="mt-8 text-[28px] font-bold md:mt-12">Rite Plumbing & Heating Inc</h2>
            <p className="mt-8 text-[18px] font-bold leading-relaxed md:mt-10">750 Lexington Ave, 9th Floor New York, NY 10022 United States</p>
          </div>
        </div>
      </section>
      <section className="bg-[#f7f6f7] px-7 py-16 md:px-0 md:py-24">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[16px] font-bold uppercase">Careers</p>
          <div className="mt-6 flex flex-col gap-6 border-b border-neutral-400 pb-10 md:flex-row md:items-center md:justify-between md:pb-14">
            <h2 className="text-[42px] font-bold tracking-[-0.06em] md:text-[58px]">Join our team.</h2>
            <CtaButton dark>Upload Resume</CtaButton>
          </div>
          <p className="mt-10 max-w-[760px] text-[18px] leading-relaxed">Join our plumbing team that values trust, quality, and innovation. We offer growth opportunities and a supportive work environment.</p>
        </div>
      </section>
      <RiteFooter />
    </main>
  );
}


function SimpleHero({ title, subtitle, crumb }: { title: string; subtitle?: string; crumb?: string }) {
  return <section className="mx-auto max-w-[1220px] px-7 pb-12 pt-12 md:px-0 md:pb-28 md:pt-28"><Link href="/" className="mb-10 block text-3xl md:mb-16">←</Link>{crumb ? <p className="mb-7 text-[14px] font-bold text-neutral-400">{crumb}</p> : null}<h1 className="text-[52px] font-bold leading-none tracking-[-0.065em] md:text-[88px]">{title}</h1>{subtitle ? <p className="mt-8 whitespace-pre-line text-[20px] leading-relaxed md:text-[22px]">{subtitle}</p> : null}</section>;
}

export const routeSlugs = servicePages.map((page) => page.slug).concat(["blog", "video", "about-us", "contact"]);
