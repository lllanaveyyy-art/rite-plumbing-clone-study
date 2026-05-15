import { notFound } from "next/navigation";
import { ServicePage } from "@/components/rite-plumbing";
import { getServicePage, servicePages } from "@/lib/rite-content";

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug })).concat([{ slug: "drain-clogged-services" }]);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getServicePage(slug === "drain-clogged-services" ? "professional-drain-clogged-services" : slug);
  if (!page) notFound();

  return <ServicePage page={page} />;
}
