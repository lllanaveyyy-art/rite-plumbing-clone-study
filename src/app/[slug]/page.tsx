import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  AboutPage,
  BlogPage,
  ContactPage,
  routeSlugs,
  ServicePage,
  VideoPage,
} from "@/components/rite-plumbing";
import { getServicePage } from "@/lib/rite-content";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };
const routeMeta: Record<string, [string, string]> = {
  "about-us": [
    "Meet Your Local NYC Plumbing Team",
    "Meet Rite Plumbing & Heating, the licensed and insured team serving Manhattan, Brooklyn, and Queens. Practical expertise and clear communication for your property.",
  ],
  contact: [
    "Contact & Book a Plumber in NYC",
    "Call Rite Plumbing 24/7 at (347) 502-6441, book a service online, or prepare an email request for your plumbing and heating project in New York City.",
  ],
  blog: [
    "Plumbing Tips & Advice",
    "Useful plumbing tips for NYC homeowners: caring for fixtures, understanding drains, planning repairs, and knowing when to call a professional.",
  ],
  video: [
    "Rite Plumbing in Action",
    "Meet the people behind Rite Plumbing & Heating and see our New York City plumbing team in action.",
  ],
};
export function generateStaticParams() {
  return routeSlugs.map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (routeMeta[slug]) return pageMetadata(...routeMeta[slug], `/${slug}`);
  const page = getServicePage(slug);
  return page
    ? pageMetadata(
        `${page.shortTitle} in NYC`,
        page.description,
        `/services/${page.slug}`,
        page.images[0],
      )
    : {};
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (slug === "blog") return <BlogPage />;
  if (slug === "video") return <VideoPage />;
  if (slug === "about-us") return <AboutPage />;
  if (slug === "contact") return <ContactPage />;
  const page = getServicePage(slug);
  if (!page) notFound();
  return <ServicePage page={page} />;
}
