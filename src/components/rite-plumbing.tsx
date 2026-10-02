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
            24/7 emergency plumbing service
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
          Service details{" "}
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
              Rite Plumbing & Heating
            </p>
            <h1 className="mt-6 text-[46px] font-bold leading-[1.04] tracking-[-0.055em] sm:text-[64px] lg:text-[72px]">
              Plumbing & heating
              <br />
              in{" "}
              <span className="text-accent">New York City</span>
            </h1>
            <p className="mt-6 max-w-[455px] text-base leading-7 text-muted-foreground sm:text-[17px]">
              Licensed plumbing and heating service in Manhattan, Brooklyn,
              and Queens. We repair leaks, clear drains, and install fixtures
              and water heaters. Available 24/7 for emergencies.
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
                Serving Manhattan, Brooklyn & Queens
              </span>
            </div>
            <div className="absolute -right-3 -top-5 flex h-[95px] w-[95px] rotate-[8deg] flex-col items-center justify-center rounded-full border-[5px] border-cream bg-accent text-white sm:-right-5 sm:-top-6 sm:h-[116px] sm:w-[116px]">
              <span className="text-[30px] font-extrabold leading-none sm:text-[35px]">
                24/7
              </span>
              <span className="mt-1.5 text-[8px] font-bold uppercase tracking-[0.13em] sm:text-[9px]">
                Emergency service
              </span>
            </div>
            <div className="absolute -bottom-7 left-5 right-5 flex items-center gap-4 rounded-xl border border-border bg-white px-5 py-4 shadow-[0_10px_35px_rgba(16,46,60,0.08)] sm:left-7 sm:right-auto sm:min-w-[335px]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <ShieldCheck size={23} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold">
                  Licensed & insured
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
              <p className="eyebrow text-accent">Our services</p>
              <h2 className="section-title mt-4">
                Plumbing repairs
                <br />
                & installations
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
                  Need an emergency plumber?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Call for an active leak, burst pipe, or drain backup.
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
      title: "24/7 emergency service",
      text: "Day, night, and weekends",
    },
    {
      Icon: House,
      title: "Homes & businesses",
      text: "Repairs & installations",
    },
    {
      Icon: FileCheck2,
      title: "Free estimates",
      text: "Call or book online",
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
              <p className="text-sm font-bold">Rite Plumbing & Heating</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Residential & commercial plumbing in NYC
              </p>
            </div>
          </div>
        </div>
        <div className="pt-3 lg:pt-0">
          <p className="eyebrow text-[#ffad80]">About our company</p>
          <h2 className="section-title mt-4">
            Licensed plumbers
            <br />
            serving New York
          </h2>
          <p className="mt-5 text-base leading-7 text-white/75">
            Rite Plumbing & Heating provides plumbing repairs and
            installations for homes, businesses, and managed buildings in
            Manhattan, Brooklyn, and Queens.
          </p>
          <div className="mt-8 space-y-6">
            {[
              {
                title: "Free estimates",
                text: "Contact us about your repair or installation. We explain the proposed work and provide an estimate.",
              },
              {
                title: "Licensed and insured",
                text: "NYC plumbing license #1608. License and insurance documents are available for building management.",
              },
              {
                title: "Building paperwork",
                text: "We provide COIs, indemnification letters, and a scope of work for buildings that require them.",
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
            About Rite Plumbing <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    {
      title: "Book an appointment",
      text: "Choose a time in our online calendar, or call (347) 502-6441. Call directly for emergencies.",
      Icon: CalendarDays,
    },
    {
      title: "Discuss the repair",
      text: "Your plumber checks the problem and explains the proposed work and estimate.",
      Icon: Wrench,
    },
    {
      title: "Complete the visit",
      text: "After the work, you receive an invoice with payment options for credit card, check, or ACH.",
      Icon: CheckCircle2,
    },
  ];
  return (
    <section className="section-space bg-cream">
      <div className="site-container">
        <div className="text-center">
          <p className="eyebrow text-accent">Appointments</p>
          <h2 className="section-title mt-4">How to schedule a plumber</h2>
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
          <p className="eyebrow text-accent">Service areas</p>
          <h2 className="section-title mt-4">
            Manhattan, Brooklyn
            <br />
            & Queens
          </h2>
          <p className="mt-5 max-w-[420px] text-base leading-7 text-muted-foreground">
            We provide residential and commercial plumbing across these three
            boroughs. Contact us for repairs, installations, or emergency
            service at your property.
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
            Contact our team{" "}
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
          <p className="eyebrow text-accent">For building management</p>
          <h2 className="mt-4 text-[30px] font-bold leading-tight tracking-[-0.035em] sm:text-[36px]">
            Documents for your
            <br />
            plumbing work
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Need a COI or other documents before work can begin? Send us the
            requirements from your building manager so we can prepare the
            paperwork before your appointment.
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
            FAQs
          </p>
          <h2 className="section-title mt-4">
            Common plumbing
            <br />
            questions
          </h2>
          <p className="mt-5 max-w-[300px] text-sm leading-6 text-muted-foreground">
            Call us for questions about a repair, booking, or your building’s
            requirements.
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
                Homeowner resources
              </p>
              <h2 className="section-title mt-4">Plumbing tips & maintenance</h2>
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
                Read article{" "}
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
          <p className="eyebrow text-[#ffad80]">Schedule a service</p>
          <h2 className="mt-4 text-[36px] font-bold leading-[1.1] tracking-[-0.04em] sm:text-[46px]">
            Need a plumber
            <br />
            in New York?
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/75">
            Call for 24/7 emergency service or book your appointment online.
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
              Plumbing and heating repairs in Manhattan, Brooklyn, and Queens.
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
            <p className="eyebrow text-white/70">Services</p>
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
            <p className="eyebrow text-white/70">Company</p>
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
                  Team video
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
              Service information
            </p>
            <h2 className="mt-4 text-[32px] font-bold leading-tight tracking-[-0.035em]">
              {page.shortTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              {page.body}
            </p>
            <h3 className="mt-8 text-xl font-bold">Services include</h3>
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
              Schedule this service
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Call (347) 502-6441 or choose an appointment online. Have your
              address and a description of the problem ready.
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
            <p className="eyebrow text-accent">Other services</p>
            <h2 className="section-title mt-4">Related plumbing services</h2>
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
      <h2 className="text-lg font-bold">If you smell gas</h2>
      <p className="mt-2 text-sm leading-6">
        Leave the area immediately. Once you are safely away, call 911. Do not
        use light switches, appliances, flames, or a phone in the affected area.
      </p>
      <a
        href="https://www.coned.com/en/safety/energy-safety/gas-safety/gas-leak-faq"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-2 text-xs font-bold underline underline-offset-4"
      >
        Con Edison gas safety guidance <ArrowUpRight size={14} aria-hidden="true" />
      </a>
    </div>
  );
}

export function BlogPage() {
  return (
    <SiteShell active="Tips & advice">
      <PageIntro
        eyebrow="Tips & advice"
        title="Plumbing tips for NYC homeowners"
        description="Information about common plumbing problems, routine maintenance, and repairs in houses and apartment buildings."
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
        eyebrow="Team video"
        title="The Rite Plumbing team"
        description="Watch our company video to see our team and plumbing work in New York City."
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
    <SiteShell active="About us">
      <PageIntro
        eyebrow="About us"
        title="About Rite Plumbing & Heating"
        description="A licensed and insured plumbing company serving Manhattan, Brooklyn, and Queens."
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
              Our company
            </p>
            <h2 className="section-title mt-4">
              Plumbing & heating
              <br />
              for NYC properties
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              Rite Plumbing & Heating has served New York homes and businesses
              for more than 20 years. Our work includes leak repairs, drain
              cleaning, bathroom and kitchen fixtures, water heaters, and
              radiator valves.
            </p>
            <p>
              We work in apartments, co-ops, condos, and commercial properties
              across Manhattan, Brooklyn, and Queens. If your building requires
              a COI, license documents, or a scope of work, send us the
              requirements before your appointment.
            </p>
            <p id="mission">
              Our NYC plumbing license number is 1608. Estimates are free, and
              emergency service is available 24 hours a day. Call our team or
              use the online calendar to schedule a visit.
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
        title="Contact Rite Plumbing"
        description="Call (347) 502-6441 for emergency service, book an appointment online, or email us about a repair or installation."
      />
      <section className="site-container grid items-start gap-9 pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:pb-24">
        <div>
          <div className="rounded-2xl bg-ink p-7 text-white sm:p-9">
            <span className="eyebrow text-[#ffad80]">
              Phone & appointments
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Call or book
              <br />
              a service
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
