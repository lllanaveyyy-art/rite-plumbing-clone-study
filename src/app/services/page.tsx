import {
  FinalCTA,
  PageIntro,
  ServiceCard,
  SiteShell,
} from "@/components/rite-plumbing";
import { servicePages } from "@/lib/rite-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Plumbing & Heating Services in NYC",
  "Plumbing repairs, drain cleaning, water heater service, and fixture installation in Manhattan, Brooklyn, and Queens. Residential, commercial, and 24/7 emergency service.",
  "/services",
);

export default function ServicesIndexPage() {
  return (
    <SiteShell active="Services">
      <PageIntro
        eyebrow="Our services"
        title="Plumbing & heating services in NYC"
        description="Repairs and installations for homes and businesses in Manhattan, Brooklyn, and Queens. Select a service below for details or call us for emergency help."
      />
      <section className="site-container grid gap-5 pb-16 sm:grid-cols-2 lg:grid-cols-3 lg:pb-24">
        {servicePages.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </section>
      <FinalCTA />
    </SiteShell>
  );
}
