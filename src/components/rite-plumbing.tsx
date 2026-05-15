import Image from "next/image";
import Link from "next/link";
import { CalendarLineIcon, CreditCardIcon, DocumentStackIcon, RoutePinIcon } from "@/components/icons";
import { HeroVideoButton, MobileRiteMenu, RiteThemeControls } from "@/components/rite-interactions";
import { documents, features, heroVideoUrl, navItems, news, scheduleUrl, serviceMenuItems, serviceRouteSlugs, socialLinks, uploadDocumentsUrl, type ServicePageContent } from "@/lib/rite-content";
import type { ServiceFeature } from "@/types/rite-plumbing";

function CtaButton({ children, dark = false, href = scheduleUrl }: { children: React.ReactNode; dark?: boolean; href?: string }) {
  const className = `${dark ? "bg-[#111013] text-white dark:bg-white dark:text-[#111013]" : "bg-[#f22b2b] text-white"} inline-flex items-center justify-center px-5 py-3 text-[11px] font-bold uppercase tracking-[-0.01em] transition hover:brightness-110`;

  if (href.startsWith("http")) {
    return <a href={href} target="_blank" rel="noreferrer" className={className}>{children} <span className="ml-2">→</span></a>;
  }

  return (
    <Link href={href} className={className}>
      {children} <span className="ml-2">→</span>
    </Link>
  );
}

function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <span className={className}>
      {socialLinks.map((social, index) => (
        <span key={social.label}>
          <a href={social.href} target="_blank" rel="noreferrer" className="hover:text-[#18a9d4]">{social.label}</a>{index < socialLinks.length - 1 ? " / " : ""}
        </span>
      ))}
    </span>
  );
}


function PhoneLink({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <a href="tel:3475026441" className={`hover:text-[#18a9d4] ${className}`}>{children}</a>;
}

function TextWithPhone({ text, className = "" }: { text: string; className?: string }) {
  const phonePattern = /(\(347\)\s*502-6441|347[-\s]502[-\s]6441)/g;
  const exactPhonePattern = /^(\(347\)\s*502-6441|347[-\s]502[-\s]6441)$/;
  const parts = text.split(phonePattern);

  return (
    <>
      {parts.map((part, index) => exactPhonePattern.test(part) ? (
        <PhoneLink key={`${part}-${index}`} className={className}>{part}</PhoneLink>
      ) : part)}
    </>
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
  return (
    <>
      <MobileRiteMenu active={active} />
      <div className="fixed left-4 top-8 z-50 hidden h-12 w-12 items-center justify-center rounded-full bg-[#f7f7f7] shadow-sm md:left-5 md:top-12 md:flex md:h-14 md:w-14">
        <span className="h-0.5 w-5 bg-neutral-800 shadow-[0_7px_0_#1f2937,0_-7px_0_#1f2937]" />
      </div>
      <div className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 rotate-180 text-[13px] font-bold text-[#111013] [writing-mode:vertical-rl] dark:text-white md:block">
        Follow Us — <SocialLinks />
      </div>
      <RiteThemeControls />
      <header className="relative z-30 mx-auto flex max-w-[1320px] items-center justify-between px-7 py-5 pl-20 md:px-20 md:py-8">
        <Link href="/" className="shrink-0">
          <Image src="/images/riteplumbing/logo.webp" alt="Professional Plumbing Services" width={253} height={75} className="h-auto w-[150px] md:w-[230px]" priority />
        </Link>
        <nav className="hidden items-center gap-8 text-[16px] font-bold md:flex">
          {navItems.map((item) => item.label === "Services" ? (
            <div key={item.label} className="group relative py-4">
              <button className={`${active === "Services" ? "text-[#09a9d6]" : "text-[#111013] dark:text-white"} hover:text-[#09a9d6]`}>Services</button>
              <div className="invisible absolute left-0 top-full w-[355px] translate-y-2 border border-black/10 bg-white px-0 py-3 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-white/15 dark:bg-[#111013]">
                <Link href="/services/" className="block border-b border-neutral-200 px-5 pb-3 text-[14px] font-bold text-[#111013] hover:text-[#09a9d6] dark:border-white/15 dark:text-white">Services</Link>
                <div className="py-2">
                  {serviceMenuItems.map((service) => (
                    <div key={service.href}>
                      <Link href={service.href} className="block px-5 py-2 text-[13px] font-bold leading-tight text-[#111013] hover:text-[#09a9d6] dark:text-white">
                        {service.label}
                      </Link>
                      {service.children ? (
                        <div className="pb-1 pl-5">
                          {service.children.map((child) => (
                            <Link key={child.href} href={child.href} className="block px-5 py-1.5 text-[12px] font-bold leading-tight text-neutral-500 hover:text-[#09a9d6] dark:text-white/60">
                              → {child.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
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
    </>
  );
}

export function RiteFooter() {
  return (
    <footer className="bg-[#111013] px-7 py-20 text-white md:px-0 md:py-28">
      <div className="mx-auto grid max-w-[1220px] gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div className="flex items-end"><p className="text-[16px] font-bold text-white/65"><SocialLinks /></p></div>
        <div>
          <h4 className="text-[15px] font-bold text-white/35">Quick Links</h4>
          <div className="mt-12 grid gap-3 text-[15px] font-bold text-white/55"><Link href="/about-us/#history" className="hover:text-white">History</Link><Link href="/about-us/#faq" className="hover:text-white">FAQ</Link><Link href="/about-us/#licensed-plumber" className="hover:text-white">Why Hired Licensed Plumber</Link></div>
        </div>
        <div>
          <h4 className="text-[15px] font-bold text-white/35">Mission</h4>
          <div className="mt-12 grid gap-3 text-[15px] font-bold text-white/55"><Link href="/about-us/#mission" className="hover:text-white">Mission Statement</Link><Link href="/video/" className="hover:text-white">Videos</Link></div>
        </div>
        <div className="flex items-center"><CtaButton>Schedule Plumber Now</CtaButton></div>
      </div>
      <div className="mx-auto mt-20 flex max-w-[1220px] flex-col justify-between gap-5 border-t border-white/20 pt-8 text-[13px] font-bold text-white/45 md:flex-row">
        <p>© 2025 Rite Plumbing NYC. All rights reserved</p>
        <p><Link href="/contact/" className="hover:text-white">Security</Link> | <a href="https://riteplumbingnyc.com/privacy-policy/" target="_blank" rel="noreferrer" className="hover:text-white">Privacy & Cookie Policy</a> | <a href="https://riteplumbingnyc.com/terms-of-service/" target="_blank" rel="noreferrer" className="hover:text-white">Terms of Services</a></p>
      </div>
    </footer>
  );
}

export function HomePage() {
  return (
    <main id="home" className="rite-page min-h-screen overflow-hidden bg-white text-[#18171c] dark:bg-[#111013] dark:text-white">
      <RiteHeader active="Home" />
      <section className="relative mx-auto grid max-w-[1320px] pb-8 md:min-h-[720px] md:grid-cols-[0.96fr_1fr] md:items-start md:pb-0">
        <div className="rite-bg-hero min-h-[590px] bg-cover bg-center md:min-h-[720px]" />
        <div className="relative -mt-[590px] flex min-h-[590px] flex-col justify-center overflow-hidden px-7 py-10 text-white md:-ml-28 md:mt-0 md:min-h-[720px] md:overflow-visible md:px-0 md:py-0">
          <div className="absolute top-4 -left-24 -z-0 hidden aspect-square h-[720px] rounded-full bg-[#19a9d4]/78 md:block" />
          <div className="absolute -left-28 top-6 -z-0 aspect-square h-[680px] rounded-full bg-[#18a9d4]/64 md:hidden" />
          <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#18a9d4]/68 via-[#18a9d4]/54 to-[#111013]/18 md:hidden" />
          <div className="relative z-10 max-w-[540px] text-shadow-sm md:pt-10">
            <HeroVideoButton src={heroVideoUrl} />
            <h1 className="max-w-[520px] text-[31px] font-bold leading-[0.98] tracking-[-0.06em] md:text-[47px]">Rite Plumbing NYC | Your Plumbing Solution</h1>
            <div className="my-5 h-px w-full bg-white/65 md:my-7" />
            <PhoneLink className="block text-[34px] font-bold leading-none tracking-[-0.06em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] md:text-[55px]">(347) 502-6441</PhoneLink>
            <p className="mt-4 max-w-[470px] text-[22px] font-bold leading-[1.08] tracking-[-0.05em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] md:mt-5 md:text-[37px]">24/7 Plumbing services Less than 30 minutes to arrive!</p>
            <div className="my-6 h-px w-44 bg-white/65 md:my-8" />
            <p className="text-[15px] font-bold leading-tight tracking-[-0.04em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] md:text-[16px]">Licensed and Insured<br />Plumbing License: 1608</p>
            <div className="mt-6 md:mt-8"><CtaButton dark>Schedule a plumber now</CtaButton></div>
          </div>
        </div>
        <p className="absolute bottom-5 left-7 rounded-full bg-black/45 px-3 py-1 text-[11px] font-bold text-white shadow-sm md:bottom-4 md:left-[720px]">750 Lexington Ave, New York, NY 10022</p>
      </section>
      <section id="services" className="bg-[#111013] text-white">
        <div className="mx-auto grid max-w-[1220px] gap-12 px-7 py-20 md:grid-cols-[0.85fr_1.35fr] md:px-0 md:py-24">
          <div><p className="mb-6 text-[10px] font-bold uppercase text-white/45">What we do</p><h2 className="max-w-[470px] text-[40px] font-bold leading-[0.95] tracking-[-0.06em] md:text-[56px]">Say goodbye to old-fashioned plumbing appointments - our innovative system is here.</h2><div className="mt-8"><CtaButton>Schedule Plumber Now</CtaButton></div></div>
          <div><p className="max-w-[720px] text-[15px] font-bold leading-relaxed text-white/60">You can save time by quickly and easily schedule with our online scheduling service! In just 30 seconds you can book a virtual estimate or job appointment that fits into your schedule.</p><div className="mt-16 grid gap-x-20 gap-y-14 md:grid-cols-2">{features.map((feature) => <article key={feature.title}><FeatureIcon icon={feature.icon} /><h3 className="mt-5 text-[19px] font-bold leading-tight tracking-[-0.04em]">{feature.title}</h3><p className="mt-3 max-w-[300px] text-[13px] leading-relaxed text-white/38">{feature.description}</p></article>)}</div></div>
        </div>
      </section>
      <section className="grid md:grid-cols-2">
        <article className="rite-bg-service flex min-h-[430px] items-center bg-cover bg-center px-7 text-white md:min-h-[690px] md:px-0"><div className="mx-auto w-full max-w-[610px]"><h2 className="max-w-[470px] text-[42px] font-bold leading-[0.95] drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] tracking-[-0.06em] md:text-[56px]">Specialised in plumbing repair, service and installation.</h2><Link className="mt-9 inline-block bg-[#111013] px-5 py-3 text-[11px] font-bold" href="/services/residential-plumbing-services-repairs-nyc/">Read More ▸</Link></div></article>
        <article className="rite-bg-licensed relative flex min-h-[430px] items-center bg-cover bg-center px-7 text-white md:min-h-[690px] md:px-16"><div className="absolute inset-0 bg-[#12aada]/70" /><div className="relative mx-auto max-w-[560px]"><h2 className="text-[42px] font-bold leading-[0.95] drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] tracking-[-0.06em] md:text-[56px]">Why you should hire a licensed plumber in NYC.</h2><Link className="mt-9 inline-block bg-[#111013] px-5 py-3 text-[11px] font-bold" href="/about-us/">Read More ▸</Link></div></article>
      </section>
      <DocumentAndTeam />
      <section className="bg-white py-10 dark:bg-[#111013] md:py-14"><div className="rite-bg-team mx-auto h-[240px] max-w-[1220px] bg-cover bg-center md:h-[660px]" /></section>
      <NewsSection />
      <ContactStrip />
      <RiteFooter />
    </main>
  );
}

function DocumentAndTeam() {
  return (
    <section className="mx-auto max-w-[1220px] px-7 py-16 md:px-0 md:py-24">
      <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr]"><div><h2 className="max-w-[650px] text-[32px] font-bold leading-[1.05] tracking-[-0.055em] md:text-[43px]">Building Management Document Requirements done within 24 Hours</h2><p className="mt-11 max-w-[590px] text-[32px] font-bold leading-[1.05] tracking-[-0.055em] md:text-[42px]">Secure your plumbing work with nessesary documents.</p><div className="mt-11"><CtaButton dark href={uploadDocumentsUrl}>Upload Documents</CtaButton></div></div><div className="grid gap-5 text-[14px] font-bold leading-none">{documents.map((doc) => <details key={doc.title} className="group border-b border-transparent"><summary className="cursor-pointer list-none">+ <span className="ml-4">{doc.title}</span></summary><p className="mt-4 pl-7 text-[13px] font-medium leading-relaxed text-neutral-500 group-open:pb-4">{doc.description}</p></details>)}</div></div>
      <div id="history" className="mt-12 grid gap-8 md:grid-cols-[0.63fr_0.37fr] md:items-start"><article className="rite-bg-history flex min-h-[520px] items-end bg-cover bg-center p-10 text-white md:min-h-[520px] md:p-20"><div><h2 className="text-[42px] font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] tracking-[-0.06em] md:text-[56px]">Our History</h2><Link className="mt-6 inline-block bg-[#111013] px-5 py-3 text-[11px] font-bold" href="/about-us/">Read More ▸</Link></div></article><div className="rite-bg-document hidden min-h-[520px] bg-cover bg-center md:block" /></div>
    </section>
  );
}

function NewsSection() {
  return (
    <section id="news" className="bg-[#f7f7f7] px-7 py-14 dark:bg-[#17161a] md:py-20">
      <div className="mx-auto max-w-[1220px]">
        <h2 className="text-[26px] font-bold tracking-[-0.055em] md:text-[34px]">Recent news.</h2>
        <div className="mt-10 grid gap-7 md:grid-cols-3">
          {news.slice(0, 3).map((article) => (
            <Link key={article.title} href={`/blog/${article.slug}/`} className="group relative flex min-h-[305px] overflow-hidden bg-[#777] p-6 text-white transition hover:brightness-95 md:min-h-[345px]">
              <Image src={article.image} alt={article.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 768px) 33vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/30 to-black/10" />
              <div className="relative z-10 mt-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
                <p className="text-[10px] font-bold text-white/65">Posted by</p>
                <p className="mt-1 text-[10px] font-bold text-white/65">SEO RankZenith</p>
                <p className="mt-3 text-[10px] font-bold text-white/65">{article.date}</p>
                <p className="mt-1 text-[10px] font-bold text-white/65">{article.readTime}</p>
                <h3 className="mt-3 text-[20px] font-bold leading-tight tracking-[-0.05em] group-hover:text-white/85">{article.title}</h3>
                <p className="mt-3 text-[11px] font-bold text-white/80">{article.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactStrip() {
  return <section id="contact" className="bg-white px-7 py-16 md:px-0"><div className="mx-auto grid max-w-[980px] gap-16 md:grid-cols-2"><div><p className="text-2xl">☏</p><h3 className="mt-4 text-[16px] font-bold tracking-[-0.03em]">Get in touch</h3><p className="mt-8 text-[13px] leading-loose text-neutral-500"><a href="mailto:info@riteplumbingnyc.com" className="hover:text-[#18a9d4]">info@riteplumbingnyc.com</a><br /><PhoneLink className="font-bold text-neutral-900 dark:text-white">347 502 6441</PhoneLink><br /><br />Assistance hours:<br /><strong className="text-neutral-900">24/7 Services</strong></p></div><div><p className="text-2xl">▣</p><h3 className="mt-4 text-[16px] font-bold tracking-[-0.03em]">Rite Plumbing & Heating Inc</h3><p className="mt-8 max-w-[260px] text-[13px] font-bold leading-relaxed text-neutral-700">750 Lexington Ave, 9th Floor New York, NY 10022 United States</p></div></div></section>;
}

export function ServicePage({ page }: { page: ServicePageContent }) {
  return (
    <main className="rite-page min-h-screen bg-white text-[#111013] dark:bg-[#111013] dark:text-white">
      <RiteHeader active="Services" />
      <section className="mx-auto grid max-w-[1320px] md:grid-cols-[0.9fr_1fr]">
        <div className="grid content-start gap-0">
          {page.images.map((src, index) => (
            <div key={src} className={`${index === 0 ? "h-[310px] md:h-[470px]" : "hidden h-[230px] md:relative md:block md:h-[350px]"} relative bg-neutral-100 dark:bg-[#17161a]`}>
              <Image src={src} alt={`${page.title} service photo ${index + 1}`} fill className="object-cover" sizes="(min-width: 768px) 48vw, 100vw" priority={index === 0} />
            </div>
          ))}
        </div>
        <article className="px-7 py-10 md:px-20 md:py-20">
          <Link href="/services/" className="mb-8 block text-3xl md:mb-10">←</Link>
          <h1 className="max-w-[650px] text-[36px] font-bold leading-[0.97] tracking-[-0.065em] md:text-[64px]">{page.title}</h1>
          <h2 className="mt-7 text-[24px] font-bold tracking-[-0.04em]">{page.eyebrow}</h2>
          {page.intro.map((paragraph) => <p key={paragraph} className="mt-4 max-w-[650px] text-[16px] font-medium leading-relaxed text-neutral-700 dark:text-white/70"><TextWithPhone text={paragraph} className="font-bold" /></p>)}
          <h2 className="mt-9 max-w-[680px] text-[30px] font-bold leading-tight tracking-[-0.055em] md:text-[40px]">{page.sectionTitle}</h2>
          {page.body.map((paragraph) => <p key={paragraph} className="mt-5 max-w-[680px] text-[16px] leading-relaxed text-neutral-700 dark:text-white/70"><TextWithPhone text={paragraph} className="font-bold" /></p>)}
          {page.listTitle ? <h3 className="mt-7 text-[17px] font-bold">{page.listTitle}</h3> : null}
          <ul className="mt-4 list-disc space-y-2 pl-7 text-[16px] leading-relaxed text-neutral-700 dark:text-white/70">{page.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          <h2 className="mt-9 max-w-[620px] text-[30px] font-bold leading-tight tracking-[-0.055em] md:text-[38px]">{page.closingTitle}</h2>
          <p className="mt-5 max-w-[680px] text-[16px] leading-relaxed text-neutral-700 dark:text-white/70"><TextWithPhone text={page.closing} className="font-bold" /></p>
          <div className="mt-9 grid gap-4 md:hidden">
            {page.images.slice(1).map((src, index) => (
              <div key={src} className="relative h-[220px] bg-neutral-100 dark:bg-[#17161a]">
                <Image src={src} alt={`${page.title} service photo ${index + 2}`} fill className="object-cover" sizes="100vw" />
              </div>
            ))}
          </div>
        </article>
      </section>
      <section className="bg-white px-7 py-12 dark:bg-[#111013] md:py-20">
        <div className="mx-auto max-w-[780px]">
          <h2 className="text-[28px] font-bold tracking-[-0.05em]">We Will Arrive In Less Than 30-minutes.</h2>
          <p className="mt-8 text-[16px] leading-relaxed text-neutral-500 dark:text-white/55">24/7 Emergency Plumbing Service in QUEENS, BROOKLYN, AND MANHATTAN. Schedule an emergency commercial plumber through our online calendar.</p>
          <div className="mt-8"><CtaButton dark>Schedule a plumber now</CtaButton></div>
        </div>
      </section>
      <RiteFooter />
    </main>
  );
}

export function BlogPage() {
  return (
    <main className="rite-page min-h-screen bg-white text-[#111013] dark:bg-[#111013] dark:text-white">
      <RiteHeader active="Blog" />
      <SimpleHero title="Blog" crumb="Home / Blog" />
      <section className="mx-auto grid max-w-[1220px] gap-12 px-7 py-14 md:grid-cols-[0.75fr_0.25fr] md:px-0">
        <div className="grid gap-8 md:grid-cols-2">
          {news.map((article) => (
            <article key={article.title} className="border-b border-neutral-200 pb-10 dark:border-white/15">
              <Link href={`/blog/${article.slug}/`} className="relative block h-[210px] overflow-hidden bg-neutral-200 dark:bg-[#17161a]">
                <Image src={article.image} alt={article.title} fill className="object-cover transition duration-500 hover:scale-105" sizes="(min-width: 768px) 38vw, 100vw" />
              </Link>
              <p className="mt-5 text-[12px] font-bold text-neutral-400">Posted by SEO RankZenith</p>
              <p className="mt-2 text-[12px] font-bold text-neutral-400">{article.date} · {article.readTime}</p>
              <h2 className="mt-5 text-[32px] font-bold leading-tight tracking-[-0.055em]">{article.title}</h2>
              <p className="mt-5 text-neutral-500">{article.excerpt}</p>
              <p className="mt-5 text-[13px] font-bold text-neutral-500">{article.category}</p>
              <Link href={`/blog/${article.slug}/`} className="mt-5 inline-block text-[13px] font-bold">Read More</Link>
            </article>
          ))}
        </div>
        <aside>
          <h3 className="text-[16px] font-bold">Categories</h3>
          <p className="mt-8 leading-loose text-neutral-500">Gas<br />NYC Plumber Council<br />Plumbing<br />Tanless Water Heaters<br />Uncategorized<br />Water Heater<br />Winter</p>
        </aside>
      </section>
      <RiteFooter />
    </main>
  );
}

export function VideoPage() {
  return (
    <main className="rite-page min-h-screen bg-white text-[#111013] dark:bg-[#111013] dark:text-white">
      <RiteHeader active="Video" />
      <SimpleHero title="Video" crumb="Home / Video" />
      <section className="mx-auto max-w-[980px] px-7 pb-16 md:px-0 md:pb-20" aria-label="Video content">
        <div className="bg-black shadow-xl">
          <video src={heroVideoUrl} controls preload="metadata" className="h-auto w-full" />
        </div>
      </section>
      <RiteFooter />
    </main>
  );
}

export function AboutPage() {
  return <main className="rite-page min-h-screen bg-white text-[#111013] dark:bg-[#111013] dark:text-white"><RiteHeader active="About Us" /><SimpleHero title="About Us" crumb="Home / About Us" /><section className="mx-auto max-w-[1220px] px-7 py-14 md:px-0"><Image src="/images/riteplumbing/services/RitePlumbingTeam-3-1-1-1536x570.jpg.webp" alt="Rite Plumbing team" width={1536} height={570} className="w-full" /><div className="mt-12 grid gap-12 md:grid-cols-2"><div><p className="text-[12px] font-bold uppercase">What we do</p><h2 className="mt-6 text-[48px] font-bold leading-none tracking-[-0.06em]">Results and answers form driven master plumbers</h2></div><div className="space-y-6 text-[17px] leading-relaxed text-neutral-600"><p>Big or small we are there and ready and waiting to solve multiple plumbing and heating issues: 24/7 Emergency Services, Free Estimates, Under 30-minute Arrival Time, State of the Art Scheduling Software.</p><p>We are exceeding customer expectations every day. Every one of our highly-trained techs are experienced, ready, and waiting to handle any task, regardless of the extent.</p><p>Our peace of mind commitment | We get the picture. Residential Plumbing And Heating. Commercial Plumbing And Heating.</p></div></div></section><RiteFooter /></main>;
}

export function ContactPage() {
  return <main className="rite-page min-h-screen bg-white text-[#111013] dark:bg-[#111013] dark:text-white"><RiteHeader active="Contact" /><SimpleHero title="Contact" subtitle="Leave us a little info, and we’ll be in touch.\nSend Us an Email" /><section className="grid md:grid-cols-2"><div className="h-[420px] bg-[url('/images/riteplumbing/services/residential-plumbing-services-repairs-1.jpg.webp')] bg-cover bg-center md:h-[520px]" /><div className="grid md:grid-cols-2"><div className="bg-[#111013] p-8 text-white md:p-24"><p className="text-3xl">▰</p><h2 className="mt-12 text-[28px] font-bold">Get in touch</h2><p className="mt-10 text-[18px] leading-loose"><a href="mailto:info@riteplumbingnyc.com">info@riteplumbingnyc.com</a><br /><PhoneLink><strong>347 502 6441</strong></PhoneLink><br /><br />Assistance hours:<br />24/7 Services</p></div><div className="bg-[#17161a] p-8 text-white md:p-24"><p className="text-3xl">✉</p><h2 className="mt-12 text-[28px] font-bold">Rite Plumbing & Heating Inc</h2><p className="mt-10 text-[18px] font-bold leading-relaxed">750 Lexington Ave, 9th Floor New York, NY 10022 United States</p></div></div></section><section className="bg-[#f7f6f7] px-7 py-16 md:px-0"><div className="mx-auto max-w-[1220px]"><p className="text-[16px] font-bold uppercase">Careers</p><div className="mt-6 flex flex-col items-start justify-between gap-6 border-b border-neutral-400 pb-10 md:flex-row md:items-center md:pb-14"><h2 className="text-[42px] font-bold tracking-[-0.06em] md:text-[58px]">Join our team.</h2><CtaButton dark>Upload Resume</CtaButton></div><p className="mt-10 max-w-[760px] text-[18px] leading-relaxed">Join our plumbing team that values trust, quality, and innovation. We offer growth opportunities and a supportive work environment.</p></div></section><RiteFooter /></main>;
}

function SimpleHero({ title, subtitle, crumb }: { title: string; subtitle?: string; crumb?: string }) {
  return <section className="mx-auto max-w-[1220px] px-7 pb-12 pt-16 md:px-0 md:pb-28 md:pt-28"><Link href="/" className="mb-10 block text-3xl md:mb-16">←</Link>{crumb ? <p className="mb-7 text-[14px] font-bold text-neutral-400">{crumb}</p> : null}<h1 className="text-[54px] font-bold leading-none tracking-[-0.065em] md:text-[88px]">{title}</h1>{subtitle ? <p className="mt-8 whitespace-pre-line text-[22px] leading-relaxed">{subtitle}</p> : null}</section>;
}

export const routeSlugs = serviceRouteSlugs.concat(["blog", "video", "about-us", "contact"]);
