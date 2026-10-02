import { HomePage } from "@/components/rite-plumbing";
import { company, socialLinks } from "@/lib/rite-content";
import { pageMetadata, siteUrl } from "@/lib/metadata";

export const metadata = pageMetadata(
  "NYC Plumbing & Heating",
  "Licensed plumbing and heating in Manhattan, Brooklyn, and Queens. Leak repairs, drain cleaning, water heaters, and 24/7 emergency service. Free estimates.",
  "/",
);

export default function Home() {
  const business = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: company.name,
    url: siteUrl.origin,
    telephone: "+13475026441",
    email: company.email,
    image: new URL("/images/riteplumbing/history.jpg", siteUrl).href,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10022",
      addressCountry: "US",
    },
    areaServed: ["Manhattan", "Brooklyn", "Queens"],
    openingHours: "Mo-Su 00:00-23:59",
    sameAs: socialLinks.map((social) => social.href),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(business).replace(/</g, "\\u003c"),
        }}
      />
      <HomePage />
    </>
  );
}
