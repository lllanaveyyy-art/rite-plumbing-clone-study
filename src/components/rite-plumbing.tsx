import Image from "next/image";
import Link from "next/link";
import { CalendarLineIcon, CreditCardIcon, DocumentStackIcon, PlayCircleIcon, RoutePinIcon } from "@/components/icons";
import { documents, features, navItems, news, serviceMenuItems, servicePages, type ServicePageContent } from "@/lib/rite-content";
import type { ServiceFeature } from "@/types/rite-plumbing";

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
  return (
    <>
      <div className="fixed left-4 top-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f7f7] shadow-sm md:left-5 md:top-12 md:h-14 md:w-14">
        <span className="h-0.5 w-5 bg-neutral-800 shadow-[0_7px_0_#1f2937,0_-7px_0_#1f2937]" />
      </div>
      <div className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 rotate-180 text-[13px] font-bold text-[#111013] [writing-mode:vertical-rl] md:block">
        Follow Us — Fb. / Ig. / Yt.
      </div>
      <div className="fixed left-0 top-0 z-40 hidden flex-col bg-white/90 p-3 text-[11px] font-bold text-neutral-400 backdrop-blur md:flex">
        <span>Light</span><span>Dark</span>
      </div>
      <header className="relative z-30 mx-auto flex max-w-[1320px] items-center justify-between px-20 py-6 md:py-8">
        <Link href="/" className="shrink-0">
          <Image src="/images/riteplumbing/logo.webp" alt="Professional Plumbing Services" width={253} height={75} className="h-auto w-[150px] md:w-[230px]" priority />
        </Link>
        <nav className="hidden items-center gap-8 text-[16px] font-bold md:flex">
          {navItems.map((item) => item.label === "Services" ? (
            <div key={item.label} className="group relative py-4">
              <button className={`${active === "Services" ? "text-[#09a9d6]" : "text-[#111013]"} hover:text-[#09a9d6]`}>Services</button>
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
            <Link key={item.label} href={item.href} className={`${active === item.label ? "text-[#09a9d6]" : "text-[#111013]"} hover:text-[#09a9d6]`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <CtaButton dark>Schedule a plumber now</CtaButton>
      </header>
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
      <section className="relative mx-auto grid max-w-[1220px] px-7 pb-8 md:min-h-[760px] md:grid-cols-[1fr_1fr] md:items-start md:px-0 md:pb-0">
        <div className="rite-bg-hero min-h-[520px] bg-cover bg-center md:min-h-[690px]" />
        <div className="relative -mt-[470px] flex min-h-[520px] flex-col justify-center px-5 text-white md:-ml-24 md:mt-0 md:min-h-[690px] md:px-0">
          <div className="absolute inset-y-0 -left-12 -z-0 hidden aspect-square h-[650px] rounded-full bg-[#1aa8d3]/95 md:block" />
          <div className="absolute inset-0 -z-0 bg-[#18a9d4]/75 md:hidden" />
          <div className="relative z-10 max-w-[560px] md:pt-16">
            <PlayCircleIcon className="mb-8 h-16 w-16 text-[#111013]" />
            <h1 className="max-w-[520px] text-[32px] font-bold leading-[0.95] tracking-[-0.06em] md:text-[47px]">Rite Plumbing NYC | Your Plumbing Solution</h1>
            <div className="my-8 h-px w-full bg-white/65" />
            <p className="text-[37px] font-bold leading-none tracking-[-0.06em] md:text-[55px]">(347) 502-6441</p>
            <p className="mt-5 max-w-[470px] text-[24px] font-bold leading-[1.05] tracking-[-0.05em] md:text-[38px]">24/7 Plumbing services Less than 30 minutes to arrive!</p>
            <div className="my-9 h-px w-44 bg-white/65" />
            <p className="text-[16px] font-bold leading-tight tracking-[-0.04em]">Licensed and Insured<br />Plumbing License: 1608</p>
            <div className="mt-10"><CtaButton dark>Schedule a plumber now</CtaButton></div>
          </div>
        </div>
        <p className="absolute bottom-2 left-7 text-[11px] font-bold text-white md:bottom-4 md:left-[690px]">750 Lexington Ave, New York, NY 10022</p>
      </section>
      <section id="services" className="bg-[#111013] text-white">
        <div className="mx-auto grid max-w-[1220px] gap-12 px-7 py-20 md:grid-cols-[0.85fr_1.35fr] md:px-0 md:py-24">
          <div><p className="mb-6 text-[10px] font-bold uppercase text-white/45">What we do</p><h2 className="max-w-[470px] text-[40px] font-bold leading-[0.95] tracking-[-0.06em] md:text-[56px]">Say goodbye to old-fashioned plumbing appointments - our innovative system is here.</h2><div className="mt-8"><CtaButton>Schedule Plumber Now</CtaButton></div></div>
          <div><p className="max-w-[720px] text-[15px] font-bold leading-relaxed text-white/60">You can save time by quickly and easily schedule with our online scheduling service! In just 30 seconds you can book a virtual estimate or job appointment that fits into your schedule.</p><div className="mt-16 grid gap-x-20 gap-y-14 md:grid-cols-2">{features.map((feature) => <article key={feature.title}><FeatureIcon icon={feature.icon} /><h3 className="mt-5 text-[19px] font-bold leading-tight tracking-[-0.04em]">{feature.title}</h3><p className="mt-3 max-w-[300px] text-[13px] leading-relaxed text-white/38">{feature.description}</p></article>)}</div></div>
        </div>
      </section>
      <section className="grid md:grid-cols-2">
        <article className="rite-bg-service flex min-h-[430px] items-center bg-cover bg-center px-7 text-white md:min-h-[690px] md:px-0"><div className="mx-auto w-full max-w-[610px]"><h2 className="max-w-[470px] text-[42px] font-bold leading-[0.95] tracking-[-0.06em] md:text-[56px]">Specialised in plumbing repair, service and installation.</h2><Link className="mt-9 inline-block bg-[#111013] px-5 py-3 text-[11px] font-bold" href="/residential-plumbing-services-repairs/">Read More ▸</Link></div></article>
        <article className="rite-bg-licensed relative flex min-h-[430px] items-center bg-cover bg-center px-7 text-white md:min-h-[690px] md:px-16"><div className="absolute inset-0 bg-[#12aada]/70" /><div className="relative mx-auto max-w-[560px]"><h2 className="text-[42px] font-bold leading-[0.95] tracking-[-0.06em] md:text-[56px]">Why you should hire a licensed plumber in NYC.</h2><Link className="mt-9 inline-block bg-[#111013] px-5 py-3 text-[11px] font-bold" href="/about-us/">Read More ▸</Link></div></article>
      </section>
      <DocumentAndTeam />
      <section id="video" className="h-[520px] bg-[#f7f6f7] md:h-[850px]" />
      <section className="bg-white py-24 md:py-36"><div className="rite-bg-team mx-auto h-[240px] max-w-[1220px] bg-cover bg-center md:h-[660px]" /></section>
      <NewsSection />
      <ContactStrip />
      <RiteFooter />
    </main>
  );
}

function DocumentAndTeam() {
  return (
    <section className="mx-auto max-w-[1220px] px-7 py-24 md:px-0 md:py-32">
      <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr]"><div><h2 className="max-w-[650px] text-[32px] font-bold leading-[1.05] tracking-[-0.055em] md:text-[43px]">Building Management Document Requirements done within 24 Hours</h2><p className="mt-11 max-w-[590px] text-[32px] font-bold leading-[1.05] tracking-[-0.055em] md:text-[42px]">Secure your plumbing work with nessesary documents.</p><div className="mt-11"><CtaButton dark>Upload Documents</CtaButton></div></div><div className="grid gap-5 text-[14px] font-bold leading-none">{documents.map((doc) => <details key={doc.title} className="group border-b border-transparent"><summary className="cursor-pointer list-none">+ <span className="ml-4">{doc.title}</span></summary><p className="mt-4 pl-7 text-[13px] font-medium leading-relaxed text-neutral-500 group-open:pb-4">{doc.description}</p></details>)}</div></div>
      <div id="about" className="mt-16 grid gap-24 md:grid-cols-[0.63fr_0.37fr] md:items-start"><article className="rite-bg-history flex min-h-[760px] items-end bg-cover bg-center p-10 text-white md:min-h-[980px] md:p-20"><div><h2 className="text-[42px] font-bold tracking-[-0.06em] md:text-[56px]">Our History</h2><Link className="mt-6 inline-block bg-[#111013] px-5 py-3 text-[11px] font-bold" href="/about-us/">Read More ▸</Link></div></article><div className="rite-bg-document hidden min-h-[980px] bg-cover bg-center md:block" /></div>
    </section>
  );
}

function NewsSection() {
  return <section id="news" className="bg-[#f7f7f7] px-7 py-24 md:py-36"><div className="mx-auto max-w-[1220px]"><h2 className="text-[26px] font-bold tracking-[-0.055em] md:text-[34px]">Recent news.</h2><div className="mt-16 grid gap-8 md:grid-cols-3">{news.slice(0, 3).map((article) => <article key={article.title} className="flex min-h-[285px] flex-col justify-end bg-gradient-to-t from-[#565656] to-[#c8c8c8] p-6 text-white md:min-h-[330px]"><p className="text-[10px] font-bold text-white/45">Posted by SEO RankZenith</p><p className="mt-1 text-[10px] font-bold text-white/45">August 25, 2023 · {article.readTime}</p><h3 className="mt-3 text-[20px] font-bold leading-tight tracking-[-0.05em]">{article.title}</h3><p className="mt-3 text-[11px] font-bold text-white/70">{article.category}</p></article>)}</div></div></section>;
}

function ContactStrip() {
  return <section id="contact" className="bg-white px-7 py-24 md:px-0"><div className="mx-auto grid max-w-[980px] gap-16 md:grid-cols-2"><div><p className="text-2xl">☏</p><h3 className="mt-4 text-[16px] font-bold tracking-[-0.03em]">Get in touch</h3><p className="mt-8 text-[13px] leading-loose text-neutral-500">info@riteplumbingnyc.com<br /><strong className="text-neutral-900">347 502 6441</strong><br /><br />Assistance hours:<br /><strong className="text-neutral-900">24/7 Services</strong></p></div><div><p className="text-2xl">▣</p><h3 className="mt-4 text-[16px] font-bold tracking-[-0.03em]">Rite Plumbing & Heating Inc</h3><p className="mt-8 max-w-[260px] text-[13px] font-bold leading-relaxed text-neutral-700">750 Lexington Ave, 9th Floor New York, NY 10022 United States</p></div></div></section>;
}

export function ServicePage({ page }: { page: ServicePageContent }) {
  return (
    <main className="min-h-screen bg-white text-[#111013]"><RiteHeader active="Services" /><section className="mx-auto grid max-w-[1320px] md:grid-cols-[0.92fr_1fr]"><div className="grid gap-2">{page.images.map((src, index) => <div key={src} className={`${index === 0 ? "h-[510px]" : "h-[430px]"} relative bg-neutral-100`}><Image src={src} alt="Rite Plumbing service" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" priority={index === 0} /></div>)}</div><article className="px-8 py-16 md:px-24 md:py-48"><Link href="/" className="mb-20 block text-3xl">←</Link><h1 className="max-w-[650px] text-[48px] font-bold leading-[0.95] tracking-[-0.065em] md:text-[76px]">{page.title}</h1><h2 className="mt-8 text-[26px] font-bold tracking-[-0.04em]">{page.eyebrow}</h2>{page.intro.map((paragraph) => <p key={paragraph} className="mt-4 max-w-[650px] text-[17px] font-medium leading-relaxed text-neutral-700">{paragraph}</p>)}<h2 className="mt-10 max-w-[680px] text-[34px] font-bold leading-tight tracking-[-0.055em] md:text-[44px]">{page.sectionTitle}</h2>{page.body.map((paragraph) => <p key={paragraph} className="mt-6 max-w-[680px] text-[17px] leading-relaxed text-neutral-700">{paragraph}</p>)}{page.listTitle ? <h3 className="mt-8 text-[17px] font-bold">{page.listTitle}</h3> : null}<ul className="mt-5 list-disc space-y-3 pl-7 text-[16px] leading-relaxed text-neutral-700">{page.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><h2 className="mt-12 max-w-[620px] text-[34px] font-bold leading-tight tracking-[-0.055em] md:text-[42px]">{page.closingTitle}</h2><p className="mt-6 max-w-[680px] text-[17px] leading-relaxed text-neutral-700">{page.closing}</p></article></section><section className="bg-white px-7 py-28 md:py-36"><div className="mx-auto max-w-[780px]"><h2 className="text-[28px] font-bold tracking-[-0.05em]">We Will Arrive In Less Than 30-minutes.</h2><p className="mt-12 text-[16px] leading-relaxed text-neutral-400">24/7 Emergency Plumbing Service in QUEENS, BROOKLYN, AND MANHATTAN. Schedule an emergency commercial plumber through our online calendar.</p><div className="mt-10"><CtaButton dark>Schedule a plumber now</CtaButton></div></div></section><RiteFooter /></main>
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
  return <main className="min-h-screen bg-white text-[#111013]"><RiteHeader active="Contact" /><SimpleHero title="Contact" subtitle="Leave us a little info, and we’ll be in touch.\nSend Us an Email" /><section className="grid md:grid-cols-2"><div className="h-[420px] bg-[url('/images/riteplumbing/services/residential-plumbing-services-repairs-1.jpg.webp')] bg-cover bg-center md:h-[520px]" /><div className="grid md:grid-cols-2"><div className="bg-[#111013] p-16 text-white md:p-24"><p className="text-3xl">▰</p><h2 className="mt-12 text-[28px] font-bold">Get in touch</h2><p className="mt-10 text-[18px] leading-loose">info@riteplumbingnyc.com<br /><strong>347 502 6441</strong><br /><br />Assistance hours:<br />24/7 Services</p></div><div className="bg-[#17161a] p-16 text-white md:p-24"><p className="text-3xl">✉</p><h2 className="mt-12 text-[28px] font-bold">Rite Plumbing & Heating Inc</h2><p className="mt-10 text-[18px] font-bold leading-relaxed">750 Lexington Ave, 9th Floor New York, NY 10022 United States</p></div></div></section><section className="bg-[#f7f6f7] px-7 py-24 md:px-0"><div className="mx-auto max-w-[1220px]"><p className="text-[16px] font-bold uppercase">Careers</p><div className="mt-6 flex items-center justify-between border-b border-neutral-400 pb-14"><h2 className="text-[58px] font-bold tracking-[-0.06em]">Join our team.</h2><CtaButton dark>Upload Resume</CtaButton></div><p className="mt-10 max-w-[760px] text-[18px] leading-relaxed">Join our plumbing team that values trust, quality, and innovation. We offer growth opportunities and a supportive work environment.</p></div></section><RiteFooter /></main>;
}

function SimpleHero({ title, subtitle, crumb }: { title: string; subtitle?: string; crumb?: string }) {
  return <section className="mx-auto max-w-[1220px] px-7 pb-16 pt-20 md:px-0 md:pb-28 md:pt-28"><Link href="/" className="mb-16 block text-3xl">←</Link>{crumb ? <p className="mb-7 text-[14px] font-bold text-neutral-400">{crumb}</p> : null}<h1 className="text-[64px] font-bold leading-none tracking-[-0.065em] md:text-[88px]">{title}</h1>{subtitle ? <p className="mt-8 whitespace-pre-line text-[22px] leading-relaxed">{subtitle}</p> : null}</section>;
}

export const routeSlugs = servicePages.map((page) => page.slug).concat(["blog", "video", "about-us", "contact"]);
