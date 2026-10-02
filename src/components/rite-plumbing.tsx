import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  Droplet,
  FileCheck2,
  Flame,
  House,
  Mail,
  MapPin,
  Phone,
  Plus,
  ShieldCheck,
  Waves,
  Wrench,
} from "lucide-react";
import {
  MobileActionBar,
  RequestForm,
  SiteNavigation,
} from "@/components/rite-interactions";
import {
  company,
  documents,
  faqs,
  heroVideoUrl,
  news,
  scheduleUrl,
  servicePages,
  serviceRouteSlugs,
  socialLinks,
  uploadDocumentsUrl,
  type ServiceIcon,
  type ServicePageContent,
} from "@/lib/rite-content";

export function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Rite Plumbing & Heating home"
      className={`inline-flex shrink-0 items-center gap-3 ${light ? "text-white" : "text-ink"}`}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-[11px] bg-accent text-white">
        <Droplet size={25} strokeWidth={2.1} aria-hidden="true" />
      </span>
      <span>
        <span className="block text-[29px] font-extrabold leading-none tracking-[-0.06em]">
          RITE<span className="text-accent">.</span>
        </span>
        <span
          className={`mt-1 block text-[9px] font-semibold uppercase tracking-[0.12em] ${light ? "text-white/75" : "text-muted-foreground"}`}
        >
          Plumbing & Heating
        </span>
      </span>
    </Link>
  );
}

export function RiteHeader({ active }: { active?: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/97 backdrop-blur-lg">
      <div className="bg-ink text-white">
        <div className="site-container flex min-h-8 items-center justify-between gap-4 text-[11px] font-medium">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ffad80]" />
            24/7 emergency plumbing. We’re here to help.
          </span>
          <span className="hidden items-center gap-1.5 text-white/75 sm:flex">
            <MapPin size={12} aria-hidden="true" />
            Manhattan · Brooklyn · Queens
          </span>
          <a href={company.phoneHref} className="font-bold sm:hidden">
            Call now <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="site-container flex h-[78px] items-center justify-between gap-6 lg:h-[88px]">
        <BrandLogo />
        <SiteNavigation active={active} />
      </div>
    </header>
  );
}

export function SiteShell({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: string;
}) {
  return (
    <>
      <RiteHeader active={active} />
      <main id="main-content">{children}</main>
      <RiteFooter />
      <MobileActionBar />
    </>
  );
}

export function BookButton({
  dark = false,
  label = "Book a service",
}: {
  dark?: boolean;
  label?: string;
}) {
  return (
    <a
      href={scheduleUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${dark ? "btn-dark" : "btn-primary"}`}
    >
      {label}
      <ArrowRight size={17} aria-hidden="true" />
    </a>
  );
}

export function ServiceGlyph({
  icon,
  className = "",
}: {
  icon: ServiceIcon;
  className?: string;
}) {
  const Icon = {
    emergency: Clock3,
    drain: Waves,
    water: Droplet,
    faucet: Wrench,
    home: House,
    building: Building2,
    heat: Flame,
    gas: ShieldCheck,
  }[icon];
  return (
    <Icon
      size={23}
      strokeWidth={1.7}
      className={className}
      aria-hidden="true"
    />
  );
}

export function ServiceCard({ service }: { service: ServicePageContent }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white transition duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-lg"
    >
      <div className="relative h-44 overflow-hidden bg-sand sm:h-48">
        <Image
          src={service.images[0]}
          alt={`${service.shortTitle} by the Rite Plumbing team`}
          fill
          sizes="(min-width: 1024px) 370px, (min-width: 640px) 46vw, 92vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-ink shadow-sm">
          <ServiceGlyph icon={service.icon} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-xl font-bold tracking-[-0.025em]">
            {service.shortTitle}
          </h3>
          <ArrowUpRight
            size={20}
            className="shrink-0 text-accent transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </div>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {service.description}
        </p>
        <span className="mt-auto block pt-5 text-xs font-bold">
          Explore service{" "}
          <span className="ml-1 text-accent" aria-hidden="true">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

export function HomePage() {
  return (
    <SiteShell active="Home">
      <section className="relative bg-cream">
        <div className="site-container grid items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.03fr_1fr] lg:gap-16 lg:pb-20 lg:pt-16">
          <div className="hero-enter">
            <p className="eyebrow flex items-center gap-2.5 text-muted-foreground">
              <span className="h-0.5 w-6 bg-accent" />
              New York’s neighborhood plumbers
            </p>
            <h1 className="mt-6 text-[46px] font-bold leading-[1.04] tracking-[-0.055em] sm:text-[64px] lg:text-[72px]">
              Good plumbing.
              <br />
              Great{" "}
              <span className="text-accent">
                peace
                <br className="hidden lg:block" /> of mind.
              </span>
            </h1>
            <p className="mt-6 max-w-[455px] text-base leading-7 text-muted-foreground sm:text-[17px]">
              From a leaky faucet to a late-night emergency, we’ll help get your
              day flowing again. Local people. Expert work. No runaround.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton />
              <a href={company.phoneHref} className="btn btn-outline">
                <Phone size={17} aria-hidden="true" />
                {company.phone}
              </a>
            </div>
            <div className="mt-7 flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <CheckCircle2 size={16} className="text-ink" aria-hidden="true" />
              Licensed & insured <span className="mx-1 text-border">
                /
              </span>{" "}
              Free estimates
            </div>
          </div>
          <div className="hero-enter relative mb-6 lg:mb-0">
            <div className="relative h-[340px] overflow-hidden rounded-[22px] bg-sand sm:h-[470px] lg:h-[520px]">
              <Image
                src="/images/riteplumbing/history.jpg"
                alt="Two Rite Plumbing professionals outside 750 Lexington Avenue in New York"
                fill
                preload
                sizes="(min-width: 1024px) 550px, 92vw"
                className="object-cover object-[center_42%]"
              />
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink/60 to-transparent" />
              <span className="absolute bottom-7 left-6 flex items-center gap-2 text-xs font-semibold text-white">
                <MapPin size={16} aria-hidden="true" />
                Your city. Your plumbers.
              </span>
            </div>
            <div className="absolute -right-3 -top-5 flex h-[95px] w-[95px] rotate-[8deg] flex-col items-center justify-center rounded-full border-[5px] border-cream bg-accent text-white sm:-right-5 sm:-top-6 sm:h-[116px] sm:w-[116px]">
              <span className="text-[30px] font-extrabold leading-none sm:text-[35px]">
                24/7
              </span>
              <span className="mt-1.5 text-[8px] font-bold uppercase tracking-[0.13em] sm:text-[9px]">
                Here for you
              </span>
            </div>
            <div className="absolute -bottom-7 left-5 right-5 flex items-center gap-4 rounded-xl border border-border bg-white px-5 py-4 shadow-[0_10px_35px_rgba(16,46,60,0.08)] sm:left-7 sm:right-auto sm:min-w-[335px]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <ShieldCheck size={23} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold">
                  Good hands. Proper credentials.
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  NYC plumbing license #{company.license}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TrustStrip />
      <section id="services" className="section-space bg-white">
        <div className="site-container">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-accent">A fix for whatever comes up</p>
              <h2 className="section-title mt-4">
                Big problems. Small fixes.
                <br />
                We handle both.
              </h2>
            </div>
            <Link
              href="/services"
              className="btn btn-outline self-start sm:self-auto"
            >
              View all services <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicePages.slice(0, 6).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-xl bg-accent-soft px-6 py-6 sm:flex-row sm:items-center sm:px-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-accent">
                <Clock3 size={24} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-bold tracking-tight">
                  Can’t wait until tomorrow?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Call us for 24/7 emergency plumbing.
                </p>
              </div>
            </div>
            <a
              href={company.phoneHref}
              className="btn btn-dark w-full sm:w-auto"
            >
              <Phone size={17} aria-hidden="true" />
              {company.phone}
            </a>
          </div>
        </div>
      </section>
      <WhyRite />
      <HowItWorks />
      <ServiceAreas />
      <BuildingDocuments />
      <FAQSection />
      <NewsSection />
      <FinalCTA />
    </SiteShell>
  );
}

export function TrustStrip() {
  const items = [
    {
      Icon: ShieldCheck,
      title: "Licensed & insured",
      text: `NYC license #${company.license}`,
    },
    {
      Icon: Clock3,
      title: "Here for you 24/7",
      text: "Day, night, and weekends",
    },
    {
      Icon: House,
      title: "Homes & businesses",
      text: "Repairs to installations",
    },
    {
      Icon: FileCheck2,
      title: "Free estimates",
      text: "Let’s talk about your project",
    },
  ];
  return (
    <section
      aria-label="Our service commitments"
      className="border-y border-border bg-sand/60"
    >
      <div className="site-container grid grid-cols-2 gap-x-5 gap-y-7 py-7 lg:grid-cols-4">
        {items.map(({ Icon, title, text }) => (
          <div key={title} className="flex items-start gap-3 lg:items-center">
            <Icon
              size={25}
              strokeWidth={1.6}
              className="shrink-0 text-ink"
              aria-hidden="true"
            />
            <div>
              <p className="text-[13px] font-bold sm:text-sm">{title}</p>
              <p className="mt-1 text-[11px] leading-4 text-muted-foreground sm:text-xs">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyRite() {
  return (
    <section className="section-space bg-ink text-white">
      <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="relative h-[390px] overflow-hidden rounded-2xl bg-ink-soft sm:h-[520px]">
            <Image
              src="/images/riteplumbing/service-plumber.jpg"
              alt="Rite Plumbing technicians bringing drain equipment to a New York building"
              fill
              sizes="(min-width: 1024px) 550px, 92vw"
              className="object-cover object-[42%_center]"
            />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 flex items-center gap-3 rounded-xl bg-white px-5 py-4 text-ink sm:left-7 sm:right-auto">
            <BadgeCheck size={29} className="text-accent" aria-hidden="true" />
            <div>
              <p className="text-sm font-bold">Real people. Reliable work.</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Proud to work in the city we call home.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-3 lg:pt-0">
          <p className="eyebrow text-[#ffad80]">The Rite way to do it</p>
          <h2 className="section-title mt-4">
            New York moves fast.
            <br />
            So do we.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/75">
            You have enough on your plate. Getting a plumber shouldn’t add to
            it. We bring clear communication, capable hands, and care for your
            space.
          </p>
          <div className="mt-8 space-y-6">
            {[
              {
                title: "Clear answers, from the start",
                text: "We explain the issue and talk through the work so you know what comes next.",
              },
              {
                title: "Your home gets our respect",
                text: "Careful repairs, thoughtful installations, and a team that cares about the details.",
              },
              {
                title: "We know NYC buildings",
                text: "Co-ops, condos, and commercial spaces. We help coordinate access and required paperwork.",
              },
            ].map((item, i) => (
              <div key={item.title} className="flex gap-4">
                <span className="mt-0.5 text-xs font-semibold text-[#ffad80]">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-[17px] font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-white/65">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/about-us"
            className="mt-8 inline-flex items-center gap-3 border-b border-white/40 pb-2 text-sm font-bold"
          >
            Get to know Rite <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    {
      title: "Tell us what you need",
      text: "Call our team or choose a time in our online booking calendar.",
      Icon: CalendarDays,
    },
    {
      title: "We make a plan",
      text: "We assess the issue and explain the work and estimate before starting.",
      Icon: Wrench,
    },
    {
      title: "Get back to your day",
      text: "We finish the work, check the result, and walk you through what’s been done.",
      Icon: CheckCircle2,
    },
  ];
  return (
    <section className="section-space bg-cream">
      <div className="site-container">
        <div className="text-center">
          <p className="eyebrow text-accent">Less hassle. More flow.</p>
          <h2 className="section-title mt-4">Good service should be simple.</h2>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {steps.map(({ title, text, Icon }, i) => (
            <div key={title} className="relative">
              <div className="mb-5 flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-white">
                  <Icon size={23} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <span className="eyebrow text-muted-foreground">
                  Step 0{i + 1}
                </span>
                {i < 2 ? (
                  <span className="hidden h-px flex-1 bg-border sm:block" />
                ) : null}
              </div>
              <h3 className="text-xl font-bold tracking-tight">{title}</h3>
              <p className="mt-3 max-w-[330px] text-sm leading-6 text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-white">
      <div className="site-container grid items-center gap-10 border-t border-border py-16 lg:grid-cols-[1fr_1.04fr] lg:gap-16 lg:py-20">
        <div>
          <p className="eyebrow text-accent">Local roots. Citywide know-how.</p>
          <h2 className="section-title mt-4">
            From downtown
            <br />
            to your doorstep.
          </h2>
          <p className="mt-5 max-w-[420px] text-base leading-7 text-muted-foreground">
            New York plumbing is its own world. We help homeowners, businesses,
            and building managers across three boroughs.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {["Manhattan", "Brooklyn", "Queens"].map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-cream px-4 py-2.5 text-sm font-semibold"
              >
                <MapPin size={14} className="text-accent" aria-hidden="true" />
                {area}
              </span>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-muted-foreground">
            Call with your address to confirm service availability.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold"
          >
            Let’s talk about your property{" "}
            <ArrowUpRight
              size={17}
              className="text-accent"
              aria-hidden="true"
            />
          </Link>
        </div>
        <div className="relative h-[360px] overflow-hidden rounded-2xl bg-sand sm:h-[430px]">
          <Image
            src="/images/riteplumbing/services/Rite-Plumbing-20230204-026-1920x1280.jpg.webp"
            alt="Rite Plumbing service truck on a Manhattan street"
            fill
            sizes="(min-width: 1024px) 550px, 92vw"
            className="object-cover"
          />
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 rounded-lg bg-white px-5 py-4">
            <div>
              <p className="eyebrow text-muted-foreground">Based in New York</p>
              <p className="mt-1.5 text-sm font-bold">750 Lexington Avenue</p>
            </div>
            <MapPin
              size={24}
              className="shrink-0 text-accent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function BuildingDocuments() {
  return (
    <section className="bg-sand/70">
      <div className="site-container grid items-center gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow text-accent">Built for building requirements</p>
          <h2 className="mt-4 text-[30px] font-bold leading-tight tracking-[-0.035em] sm:text-[36px]">
            Your building’s paperwork?
            <br />
            We can help with that.
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Send your building’s requirements before your visit. We’ll help
            coordinate the documents and scope of work.
          </p>
          <a
            href={uploadDocumentsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold"
          >
            Send building requirements{" "}
            <ArrowUpRight
              size={17}
              className="text-accent"
              aria-hidden="true"
            />
          </a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {documents.map((doc) => (
            <div key={doc.title} className="flex items-start gap-3">
              <FileCheck2
                size={21}
                className="mt-0.5 shrink-0 text-accent"
                strokeWidth={1.6}
                aria-hidden="true"
              />
              <div>
                <h3 className="text-sm font-bold">{doc.title}</h3>
                <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                  {doc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="section-space bg-white">
      <div className="site-container grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <p className="eyebrow text-accent">
            A few things you might be wondering
          </p>
          <h2 className="section-title mt-4">
            Good questions.
            <br />
            Straight answers.
          </h2>
          <p className="mt-5 max-w-[300px] text-sm leading-6 text-muted-foreground">
            Still have something on your mind? We’re happy to talk it through.
          </p>
          <a
            href={company.phoneHref}
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold"
          >
            <Phone size={16} className="text-accent" aria-hidden="true" />
            {company.phone}
          </a>
        </div>
        <div>
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="faq-row group border-b border-border"
            >
              <summary className="flex min-h-[76px] cursor-pointer list-none items-center justify-between gap-5 py-5 text-[15px] font-semibold">
                <span>{faq.question}</span>
                <Plus
                  size={19}
                  className="faq-plus shrink-0 text-accent transition"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-[590px] pb-6 pr-8 text-sm leading-7 text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewsSection({ all = false }: { all?: boolean }) {
  return (
    <section className="section-space bg-cream">
      <div className="site-container">
        {!all ? (
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-accent">
                A little know-how goes a long way
              </p>
              <h2 className="section-title mt-4">Good advice. On the house.</h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold"
            >
              All tips & advice{" "}
              <ArrowUpRight
                size={17}
                className="text-accent"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
        <div
          className={`grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 ${all ? "" : "mt-10"}`}
        >
          {(all ? news : news.slice(0, 3)).map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group"
            >
              <div className="relative h-56 overflow-hidden rounded-xl bg-sand">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(min-width: 1024px) 370px, (min-width: 640px) 46vw, 92vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 flex items-center gap-2 text-[11px] font-semibold text-muted-foreground">
                <span className="text-accent">{article.category}</span>
                <span aria-hidden="true">·</span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight transition group-hover:text-accent">
                {article.title}
              </h3>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold">
                Read the advice{" "}
                <ArrowUpRight
                  size={15}
                  className="text-accent"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="bg-ink text-white">
      <div className="site-container flex flex-col justify-between gap-8 py-14 lg:flex-row lg:items-center lg:py-16">
        <div>
          <p className="eyebrow text-[#ffad80]">Let’s take it from here</p>
          <h2 className="mt-4 text-[36px] font-bold leading-[1.1] tracking-[-0.04em] sm:text-[46px]">
            Get your day
            <br />
            flowing again.
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/75">
            Expert plumbing. A friendly local team. Here when you need us.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <a href={company.phoneHref} className="btn btn-primary">
            <Phone size={17} aria-hidden="true" />
            {company.phone}
          </a>
          <a
            href={scheduleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn border border-white/30 text-white hover:border-white hover:bg-white/10"
          >
            Book a service <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function RiteFooter() {
  return (
    <footer className="bg-ink pb-24 text-white sm:pb-0">
      <div className="site-container">
        <div className="grid gap-10 border-t border-white/15 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.9fr_1fr] lg:gap-14">
          <div>
            <BrandLogo light />
            <p className="mt-5 max-w-[230px] text-sm leading-6 text-white/65">
              Plumbing & heating for the city that never stops.
            </p>
            <div className="mt-5 flex gap-4 text-xs text-white/75">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#ffad80]"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow text-white/70">How we help</p>
            <ul className="mt-5 space-y-3 text-[13px] text-white/75">
              {servicePages.slice(0, 4).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-[#ffad80]"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="hover:text-[#ffad80]">
                  All services <span aria-hidden="true">↗</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-white/70">Meet Rite</p>
            <ul className="mt-5 space-y-3 text-[13px] text-white/75">
              <li>
                <Link href="/about-us" className="hover:text-[#ffad80]">
                  About our team
                </Link>
              </li>
              <li>
                <Link href="/#service-areas" className="hover:text-[#ffad80]">
                  Service areas
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#ffad80]">
                  Tips & advice
                </Link>
              </li>
              <li>
                <Link href="/video" className="hover:text-[#ffad80]">
                  Rite in action
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#ffad80]">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-white/70">Get in touch</p>
            <a
              href={company.phoneHref}
              className="mt-5 block text-lg font-bold"
            >
              {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="mt-2 block text-xs text-white/75 hover:text-[#ffad80]"
            >
              {company.email}
            </a>
            <address className="mt-5 text-xs not-italic leading-6 text-white/65">
              {company.address}
              <br />
              {company.city}
            </address>
            <p className="mt-3 text-xs text-white/65">
              Available 24 hours, 7 days a week
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-white/15 py-6 text-[11px] leading-5 text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Rite Plumbing & Heating Inc. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-5">
            <span>NYC license #{company.license}</span>
            <a
              href="https://riteplumbingnyc.com/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Privacy policy{" "}
              <span className="sr-only">on the company website</span>
            </a>
            <a
              href="https://riteplumbingnyc.com/terms-of-service/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Terms <span className="sr-only">on the company website</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description?: string;
}) {
  return (
    <section className="bg-cream">
      <div className="site-container py-12 sm:py-16">
        <Link
          href="/"
          className="mb-7 inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground"
        >
          Home <span aria-hidden="true">/</span>{" "}
          <span className="text-ink">{eyebrow}</span>
        </Link>
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h1 className="mt-4 max-w-[820px] text-[40px] font-bold leading-[1.08] tracking-[-0.05em] sm:text-[60px]">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-[640px] text-base leading-7 text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export function ServicePage({ page }: { page: ServicePageContent }) {
  const related = servicePages
    .filter((service) => service.slug !== page.slug)
    .sort(
      (a, b) =>
        Number(b.category === page.category) -
        Number(a.category === page.category),
    )
    .slice(0, 3);
  return (
    <SiteShell active="Services">
      <section className="bg-cream">
        <div className="site-container grid items-center gap-10 py-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-14">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="mb-7 flex flex-wrap items-center gap-2 text-xs text-muted-foreground"
            >
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/services">Services</Link>
              <span aria-hidden="true">/</span>
              <span className="text-ink">{page.shortTitle}</span>
            </nav>
            <p className="eyebrow text-accent">
              {page.category} services in NYC
            </p>
            <h1 className="mt-4 text-[42px] font-bold leading-[1.08] tracking-[-0.05em] sm:text-[58px]">
              {page.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              {page.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <BookButton />
              <a href={company.phoneHref} className="btn btn-outline">
                <Phone size={16} aria-hidden="true" />
                Call 24/7
              </a>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              Licensed & insured · Manhattan, Brooklyn & Queens
            </p>
          </div>
          <div className="relative h-[350px] overflow-hidden rounded-2xl bg-sand sm:h-[450px]">
            <Image
              src={page.images[0]}
              alt={page.shortTitle}
              fill
              preload
              sizes="(min-width: 1024px) 550px, 92vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="section-space bg-white">
        <div className="site-container grid items-start gap-12 lg:grid-cols-[1fr_350px] lg:gap-16">
          <div>
            {page.icon === "gas" ? <GasSafetyNotice /> : null}
            <p className="eyebrow text-accent">
              Careful work. Clear communication.
            </p>
            <h2 className="mt-4 text-[32px] font-bold leading-tight tracking-[-0.035em]">
              The right help for your property.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              {page.body}
            </p>
            <h3 className="mt-8 text-xl font-bold">How we can help</h3>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {page.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-2.5 text-sm leading-6"
                >
                  <Check
                    size={17}
                    className="mt-0.5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="relative mt-9 h-[300px] overflow-hidden rounded-xl bg-sand sm:h-[360px]">
              <Image
                src={page.images[1]}
                alt={`Rite Plumbing ${page.shortTitle.toLowerCase()} work`}
                fill
                sizes="(min-width: 1024px) 700px, 92vw"
                className="object-cover"
              />
            </div>
          </div>
          <aside className="rounded-2xl bg-cream p-7 lg:sticky lg:top-36">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
              <ServiceGlyph icon={page.icon} />
            </span>
            <h2 className="mt-5 text-2xl font-bold tracking-tight">
              Let’s get it sorted.
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Call for urgent help or book a planned visit online. We’ll discuss
              your issue and confirm the next steps.
            </p>
            <a href={company.phoneHref} className="btn btn-dark mt-6 w-full">
              <Phone size={16} aria-hidden="true" />
              {company.phone}
            </a>
            <a
              href={scheduleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-3 w-full"
            >
              Book a service <ArrowRight size={16} aria-hidden="true" />
            </a>
            <div className="mt-6 space-y-3 border-t border-border pt-5 text-xs text-muted-foreground">
              <p className="flex items-center gap-2">
                <ShieldCheck size={15} aria-hidden="true" />
                Licensed & insured · #{company.license}
              </p>
              <p className="flex items-center gap-2">
                <Clock3 size={15} aria-hidden="true" />
                24/7 emergency availability
              </p>
              <p className="flex items-center gap-2">
                <FileCheck2 size={15} aria-hidden="true" />
                Building documentation available
              </p>
            </div>
          </aside>
        </div>
      </section>
      {related.length ? (
        <section className="section-space bg-cream">
          <div className="site-container">
            <p className="eyebrow text-accent">While we’re here</p>
            <h2 className="section-title mt-4">More ways we can help.</h2>
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <FinalCTA />
    </SiteShell>
  );
}

export function GasSafetyNotice() {
  return (
    <div className="mb-8 rounded-xl border border-accent/30 bg-accent-soft p-5">
      <h2 className="text-lg font-bold">Smell gas? Leave first. Call 911.</h2>
      <p className="mt-2 text-sm leading-6">
        Leave the area immediately and call 911 from a safe location. Don’t use
        switches, appliances, flames, or a phone in the affected area.
      </p>
      <a
        href="https://www.nyc.gov/site/em/ready/gas-disruptions.page"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-2 text-xs font-bold underline underline-offset-4"
      >
        NYC emergency guidance <ArrowUpRight size={14} aria-hidden="true" />
      </a>
    </div>
  );
}

export function BlogPage() {
  return (
    <SiteShell active="Tips & advice">
      <PageIntro
        eyebrow="Tips & advice"
        title="A little plumbing know-how. A lot less hassle."
        description="Simple, useful advice for looking after your home and knowing when to call a professional."
      />
      <NewsSection all />
      <FinalCTA />
    </SiteShell>
  );
}

export function VideoPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Rite in action"
        title="Meet the people behind the plumbing."
        description="A closer look at our team and the work we do in New York."
      />
      <section className="site-container pb-16">
        <video
          controls
          playsInline
          preload="none"
          poster="/images/riteplumbing/team.jpg"
          className="aspect-video w-full rounded-2xl bg-ink"
          aria-label="Rite Plumbing team video"
        >
          <source src={heroVideoUrl} type="video/mp4" />
          <p>
            Your browser does not support this video.{" "}
            <a href={heroVideoUrl}>Open the video</a>.
          </p>
        </video>
        <p className="mt-5 text-sm text-muted-foreground">
          Having trouble playing?{" "}
          <a
            href={heroVideoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-ink underline underline-offset-4"
          >
            Open the video directly.
          </a>
        </p>
      </section>
      <FinalCTA />
    </SiteShell>
  );
}

export function AboutPage() {
  return (
    <SiteShell active="Why Rite">
      <PageIntro
        eyebrow="Why Rite"
        title="Your city. Your plumbers. Your peace of mind."
        description="We’re Rite Plumbing & Heating: a local team helping New York homes and businesses keep moving."
      />
      <section className="site-container pb-16">
        <div className="relative h-[270px] overflow-hidden rounded-2xl bg-sand sm:h-[440px]">
          <Image
            src="/images/riteplumbing/team.jpg"
            alt="The Rite Plumbing and Heating team together in New York City"
            fill
            preload
            sizes="(min-width: 1280px) 1168px, 92vw"
            className="object-cover"
          />
        </div>
        <div id="history" className="grid gap-8 pt-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow text-accent">
              A local team. A personal approach.
            </p>
            <h2 className="section-title mt-4">
              Good plumbing starts
              <br />
              with good people.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              New York’s buildings are as individual as the people who live in
              them. From apartment fixtures to commercial plumbing, we bring
              practical expertise and clear communication to each job.
            </p>
            <p>
              Our licensed, insured team serves Manhattan, Brooklyn, and Queens.
              We help with everyday repairs, installations, heating connections,
              and the urgent problems that can’t wait.
            </p>
            <p id="mission">
              Our approach is simple: understand the problem, explain the work,
              and treat your property with care.
            </p>
          </div>
        </div>
      </section>
      <TrustStrip />
      <div id="licensed-plumber">
        <WhyRite />
      </div>
      <BuildingDocuments />
      <FAQSection />
      <FinalCTA />
    </SiteShell>
  );
}

export function ContactPage({
  initialService = "",
  initialZip = "",
}: {
  initialService?: string;
  initialZip?: string;
}) {
  return (
    <SiteShell active="Contact">
      <PageIntro
        eyebrow="Contact"
        title="Let’s get your day back on track."
        description="Call for urgent help, book an appointment online, or tell us about your project by email."
      />
      <section className="site-container grid items-start gap-9 pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:pb-24">
        <div>
          <div className="rounded-2xl bg-ink p-7 text-white sm:p-9">
            <span className="eyebrow text-[#ffad80]">
              A real team, ready to help
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Plumbing problem?
              <br />
              Start here.
            </h2>
            <a
              href={company.phoneHref}
              className="mt-7 flex items-center gap-3 text-[27px] font-bold tracking-tight"
            >
              <Phone size={22} className="text-[#ffad80]" aria-hidden="true" />
              {company.phone}
            </a>
            <p className="mt-2 text-sm text-white/70">
              Emergency help available 24/7
            </p>
            <a
              href={scheduleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-7 w-full"
            >
              Book an appointment online{" "}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${company.email}`}
              className="mt-6 flex items-center gap-2.5 text-sm text-white/80"
            >
              <Mail size={17} aria-hidden="true" />
              {company.email}
            </a>
          </div>
          <div className="mt-8 space-y-6 px-1">
            <div className="flex gap-3">
              <MapPin
                size={22}
                className="mt-0.5 shrink-0 text-accent"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-bold">Based in New York</h3>
                <address className="mt-2 text-sm not-italic leading-6 text-muted-foreground">
                  {company.address}
                  <br />
                  {company.city}
                </address>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=750+Lexington+Avenue+New+York+NY+10022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold"
                >
                  View on Google Maps{" "}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <Building2
                size={22}
                className="mt-0.5 shrink-0 text-accent"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-bold">Manhattan, Brooklyn & Queens</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Residential and commercial service. Call with your address to
                  confirm availability.
                </p>
              </div>
            </div>
          </div>
        </div>
        <RequestForm initialService={initialService} initialZip={initialZip} />
      </section>
      <BuildingDocuments />
    </SiteShell>
  );
}

export const routeSlugs = serviceRouteSlugs.concat([
  "blog",
  "video",
  "about-us",
  "contact",
]);
