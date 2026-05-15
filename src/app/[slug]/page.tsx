import { notFound } from "next/navigation";
import { AboutPage, BlogPage, ContactPage, ServicePage, VideoPage } from "@/components/rite-plumbing";
import { getServicePage, servicePages } from "@/lib/rite-content";

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug })).concat([{ slug: "drain-clogged-services" }], ["blog", "video", "about-us", "contact"].map((slug) => ({ slug })));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "blog") return <BlogPage />;
  if (slug === "video") return <VideoPage />;
  if (slug === "about-us") return <AboutPage />;
  if (slug === "contact") return <ContactPage />;

  const page = getServicePage(slug === "drain-clogged-services" ? "professional-drain-clogged-services" : slug);
  if (!page) notFound();

  return <ServicePage page={page} />;
}
