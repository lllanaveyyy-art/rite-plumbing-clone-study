import { notFound } from "next/navigation";
import { AboutPage, BlogPage, ContactPage, routeSlugs, ServicePage, VideoPage } from "@/components/rite-plumbing";
import { getServicePage } from "@/lib/rite-content";

export function generateStaticParams() {
  return routeSlugs.map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "blog") return <BlogPage />;
  if (slug === "video") return <VideoPage />;
  if (slug === "about-us") return <AboutPage />;
  if (slug === "contact") return <ContactPage />;

  const page = getServicePage(slug);
  if (!page) notFound();

  return <ServicePage page={page} />;
}
