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
  "Explore residential and commercial plumbing, drain cleaning, water heater repairs, fixtures, heating, and 24/7 emergency services across Manhattan, Brooklyn, and Queens.",
  "/services",
);

export default function ServicesIndexPage() {
  return (
    <SiteShell active="Services">
      <PageIntro
        eyebrow="Our services"
        title="Whatever comes up, we’re here to help."
        description="From a quick repair to a planned installation. Licensed plumbing and heating for your home, your business, and your building."
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
