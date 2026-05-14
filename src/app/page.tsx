import Image from "next/image";
import { CalendarLineIcon, CreditCardIcon, DocumentStackIcon, PlayCircleIcon, RoutePinIcon } from "@/components/icons";
import type { DocumentRequirement, NavigationItem, NewsArticle, ServiceFeature } from "@/types/rite-plumbing";

const navItems: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#news" },
  { label: "Video", href: "#video" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const features: ServiceFeature[] = [
  { icon: "calendar", title: "Schedule Online", description: "Schedule a plumber online within less than a minute." },
  { icon: "route", title: "Track your plumber while on route", description: "GPS Tracking your plumber while on route." },
  { icon: "document", title: "Building Management Document Requirements", description: "Secure Your Plumbing Work with Necessary Documents In less than 24 Hours" },
  { icon: "payment", title: "Easy Online Payments", description: "Pay online through the invoice sent to you (Credit Card, check, ACH)" },
];

const documents: DocumentRequirement[] = [
  { title: "Certificate of Insurance (COI)", description: "When you choose Rite Plumbing and Heating, you can trust that your plumbing work is being done right. We provide a Certificate of Insurance as a guarantee that any damage that occurs during or after work is covered as insured by us." },
  { title: "Licensed Plumbing Company", description: "We are a fully licensed plumbing company, with license number 1608. Residential plumbing, gas leak plumbing and clogged toilet plumbing work in the city must be done by a licensed plumbing company." },
  { title: "Indemnification Letter", description: "We provide an indemnification letter to ensure that you are fully protected from legal claims, giving you peace of mind that you are not liable for damages during or after the work." },
  { title: "Scope of Work", description: "We provide a scope of work to building management so that they understand what is involved and can inform tenants when water shutoffs are required." },
];

const news: NewsArticle[] = [
  { title: "Plumbing Mistakes DIY-ers Make", category: "Uncategorized", readTime: "5 min read" },
  { title: "Spring Cleaning Plumbing Tasks", category: "Plumbing", readTime: "5 min read" },
  { title: "How Does Residential Plumbing Work", category: "Plumbing", readTime: "4 min read" },
];

function FeatureIcon({ icon }: { icon: ServiceFeature["icon"] }) {
  const className = "h-8 w-8 text-white/80";
  if (icon === "calendar") return <CalendarLineIcon className={className} />;
  if (icon === "route") return <RoutePinIcon className={className} />;
  if (icon === "document") return <DocumentStackIcon className={className} />;
  return <CreditCardIcon className={className} />;
}

function CtaButton({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <a href="#contact" className={`${dark ? "bg-neutral-950 text-white" : "bg-[#f22b2b] text-white"} inline-flex items-center justify-center px-5 py-3 text-[11px] font-bold uppercase tracking-[-0.01em] transition hover:brightness-110`}>
      {children} <span className="ml-2">▸</span>
    </a>
  );
}

export default function Home() {
  return (
    <main id="home" className="min-h-screen overflow-hidden bg-white text-[#18171c]">
      <div className="fixed left-4 top-8 z-50 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-sm md:left-5 md:top-14">
        <span className="h-0.5 w-4 bg-neutral-400 shadow-[0_5px_0_#9ca3af,0_-5px_0_#9ca3af]" />
      </div>

      <header className="relative z-30 mx-auto flex max-w-[1220px] items-center justify-between px-7 py-6 md:py-10">
        <Image src="/images/riteplumbing/logo.webp" alt="Professional Plumbing Services" width={253} height={75} className="h-auto w-[150px] md:w-[223px]" priority />
        <nav className="hidden items-center gap-8 text-[12px] font-bold md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-[#09a9d6] first:text-[#09a9d6]">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="bg-[#111013] px-4 py-3 text-[10px] font-bold uppercase text-white md:px-5">
          Schedule a plumber now
        </a>
      </header>

      <section className="relative mx-auto grid max-w-[1220px] px-7 pb-8 md:min-h-[760px] md:grid-cols-[1fr_1fr] md:items-start md:px-0 md:pb-0">
        <div className="rite-bg-hero min-h-[520px] bg-cover bg-center md:min-h-[690px]" />
        <div className="relative -mt-[470px] flex min-h-[520px] flex-col justify-center px-5 text-white md:-ml-24 md:mt-0 md:min-h-[690px] md:px-0">
          <div className="absolute inset-y-0 -left-12 -z-0 hidden aspect-square h-[650px] rounded-full bg-[#1aa8d3]/95 md:block" />
          <div className="absolute inset-0 -z-0 bg-[#18a9d4]/75 md:hidden" />
          <div className="relative z-10 max-w-[560px] md:pt-16">
            <PlayCircleIcon className="mb-8 h-16 w-16 text-[#111013]" />
            <h1 className="max-w-[520px] text-[32px] font-bold leading-[0.95] tracking-[-0.06em] md:text-[47px]">
              Rite Plumbing NYC | Your Plumbing Solution
            </h1>
            <div className="my-8 h-px w-full bg-white/65" />
            <p className="text-[37px] font-bold leading-none tracking-[-0.06em] md:text-[55px]">(347) 502-6441</p>
            <p className="mt-5 max-w-[470px] text-[24px] font-bold leading-[1.05] tracking-[-0.05em] md:text-[38px]">
              24/7 Plumbing services Less than 30 minutes to arrive!
            </p>
            <div className="my-9 h-px w-44 bg-white/65" />
            <p className="text-[16px] font-bold leading-tight tracking-[-0.04em]">
              Licensed and Insured<br />Plumbing License: 1608
            </p>
            <div className="mt-10">
              <CtaButton dark>Schedule a plumber now</CtaButton>
            </div>
          </div>
        </div>
        <p className="absolute bottom-2 left-7 text-[11px] font-bold text-white md:bottom-4 md:left-[690px]">750 Lexington Ave, New York, NY 10022</p>
        <p className="absolute right-6 top-1/2 hidden rotate-90 text-[13px] font-bold text-[#111013] md:block">Plumber NYC // NY</p>
      </section>

      <section id="services" className="bg-[#111013] text-white">
        <div className="mx-auto grid max-w-[1220px] gap-12 px-7 py-20 md:grid-cols-[0.85fr_1.35fr] md:px-0 md:py-24">
          <div>
            <p className="mb-6 text-[10px] font-bold uppercase text-white/45">What we do</p>
            <h2 className="max-w-[470px] text-[40px] font-bold leading-[0.95] tracking-[-0.06em] md:text-[56px]">
              Say goodbye to old-fashioned plumbing appointments - our innovative system is here.
            </h2>
            <div className="mt-8"><CtaButton>Schedule Plumber Now</CtaButton></div>
          </div>
          <div>
            <p className="max-w-[720px] text-[15px] font-bold leading-relaxed text-white/60">
              You can save time by quickly and easily schedule with our online scheduling service! In just 30 seconds you can book a virtual estimate or job appointment that fits into your schedule.
            </p>
            <div className="mt-16 grid gap-x-20 gap-y-14 md:grid-cols-2">
              {features.map((feature) => (
                <article key={feature.title}>
                  <FeatureIcon icon={feature.icon} />
                  <h3 className="mt-5 text-[19px] font-bold leading-tight tracking-[-0.04em]">{feature.title}</h3>
                  <p className="mt-3 max-w-[300px] text-[13px] leading-relaxed text-white/38">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <article className="rite-bg-service flex min-h-[430px] items-center bg-cover bg-center px-7 text-white md:min-h-[690px] md:px-0">
          <div className="mx-auto w-full max-w-[610px] md:pl-0">
            <h2 className="max-w-[470px] text-[42px] font-bold leading-[0.95] tracking-[-0.06em] md:text-[56px]">Specialised in plumbing repair, service and installation.</h2>
            <a className="mt-9 inline-block bg-[#111013] px-5 py-3 text-[11px] font-bold" href="#about">Read More ▸</a>
          </div>
        </article>
        <article className="rite-bg-licensed relative flex min-h-[430px] items-center bg-cover bg-center px-7 text-white md:min-h-[690px] md:px-16">
          <div className="absolute inset-0 bg-[#12aada]/70" />
          <div className="relative mx-auto max-w-[560px]">
            <h2 className="text-[42px] font-bold leading-[0.95] tracking-[-0.06em] md:text-[56px]">Why you should hire a licensed plumber in NYC.</h2>
            <a className="mt-9 inline-block bg-[#111013] px-5 py-3 text-[11px] font-bold" href="#about">Read More ▸</a>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-[1220px] px-7 py-24 md:px-0 md:py-32">
        <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="max-w-[650px] text-[32px] font-bold leading-[1.05] tracking-[-0.055em] md:text-[43px]">Building Management Document Requirements done within 24 Hours</h2>
            <p className="mt-11 max-w-[590px] text-[32px] font-bold leading-[1.05] tracking-[-0.055em] md:text-[42px]">Secure your plumbing work with nessesary documents.</p>
            <div className="mt-11"><CtaButton dark>Upload Documents</CtaButton></div>
          </div>
          <div className="grid gap-5 text-[14px] font-bold leading-none">
            {documents.map((doc) => (
              <details key={doc.title} className="group border-b border-transparent">
                <summary className="cursor-pointer list-none">+ <span className="ml-4">{doc.title}</span></summary>
                <p className="mt-4 pl-7 text-[13px] font-medium leading-relaxed text-neutral-500 group-open:pb-4">{doc.description}</p>
              </details>
            ))}
          </div>
        </div>
        <div id="about" className="mt-16 grid gap-24 md:grid-cols-[0.63fr_0.37fr] md:items-start">
          <article className="rite-bg-history flex min-h-[760px] items-end bg-cover bg-center p-10 text-white md:min-h-[980px] md:p-20">
            <div>
              <h2 className="text-[42px] font-bold tracking-[-0.06em] md:text-[56px]">Our History</h2>
              <a className="mt-6 inline-block bg-[#111013] px-5 py-3 text-[11px] font-bold" href="#contact">Read More ▸</a>
            </div>
          </article>
          <div className="rite-bg-document hidden min-h-[980px] bg-cover bg-center md:block" />
        </div>
      </section>

      <section id="video" className="h-[520px] bg-[#f7f6f7] md:h-[850px]" />

      <section className="bg-white py-24 md:py-36">
        <div className="rite-bg-team mx-auto h-[240px] max-w-[1220px] bg-cover bg-center md:h-[660px]" />
      </section>

      <section id="news" className="bg-[#f7f7f7] px-7 py-24 md:py-36">
        <div className="mx-auto max-w-[1220px]">
          <h2 className="text-[26px] font-bold tracking-[-0.055em] md:text-[34px]">Recent news.</h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {news.map((article) => (
              <article key={article.title} className="flex min-h-[285px] flex-col justify-end bg-gradient-to-t from-[#565656] to-[#c8c8c8] p-6 text-white md:min-h-[330px]">
                <p className="text-[10px] font-bold text-white/45">Posted by SEO RankZenith</p>
                <p className="mt-1 text-[10px] font-bold text-white/45">August 25, 2023 · {article.readTime}</p>
                <h3 className="mt-3 text-[20px] font-bold leading-tight tracking-[-0.05em]">{article.title}</h3>
                <p className="mt-3 text-[11px] font-bold text-white/70">{article.category}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-7 py-24 md:px-0">
        <div className="mx-auto grid max-w-[980px] gap-16 md:grid-cols-2">
          <div>
            <p className="text-2xl">☏</p>
            <h3 className="mt-4 text-[16px] font-bold tracking-[-0.03em]">Get in touch</h3>
            <p className="mt-8 text-[13px] leading-loose text-neutral-500">info@riteplumbingnyc.com<br /><strong className="text-neutral-900">347 502 6441</strong><br /><br />Assistance hours:<br /><strong className="text-neutral-900">24/7 Services</strong></p>
          </div>
          <div>
            <p className="text-2xl">▣</p>
            <h3 className="mt-4 text-[16px] font-bold tracking-[-0.03em]">Rite Plumbing & Heating Inc</h3>
            <p className="mt-8 max-w-[260px] text-[13px] font-bold leading-relaxed text-neutral-700">750 Lexington Ave, 9th Floor New York, NY 10022 United States</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#111013] px-7 py-20 text-white md:px-0">
        <div className="mx-auto grid max-w-[1220px] gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <p className="text-[12px] font-bold text-white/60">Fb. / Ig. / Yt.</p>
          </div>
          <div>
            <h4 className="text-[12px] font-bold text-white/35">Quick Links</h4>
            <p className="mt-8 text-[12px] font-bold leading-loose text-white/55">History<br />FAQ<br />Why Hired Licensed Plumber</p>
          </div>
          <div>
            <h4 className="text-[12px] font-bold text-white/35">Mission</h4>
            <p className="mt-8 text-[12px] font-bold leading-loose text-white/55">Mission Statement<br />Videos</p>
          </div>
          <div><CtaButton>Schedule Plumber Now</CtaButton></div>
        </div>
        <div className="mx-auto mt-16 flex max-w-[1220px] flex-col justify-between gap-5 border-t border-white/10 pt-8 text-[11px] font-bold text-white/35 md:flex-row">
          <p>© 2025 Rite Plumbing NYC. All rights reserved</p>
          <p>Security | Privacy & Cookie Policy | Terms of Services</p>
        </div>
      </footer>
    </main>
  );
}
