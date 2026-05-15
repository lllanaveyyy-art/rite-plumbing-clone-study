import { notFound } from "next/navigation";
import { ServicePage } from "@/components/rite-plumbing";
import { getServicePage, serviceRouteSlugs } from "@/lib/rite-content";

export function generateStaticParams() {
  return serviceRouteSlugs.map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  return <ServicePage page={page} />;
}
