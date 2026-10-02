import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/rite-plumbing";
import { getServicePage, serviceRouteSlugs } from "@/lib/rite-content";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return serviceRouteSlugs.map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getServicePage((await params).slug);
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
  const page = getServicePage((await params).slug);
  if (!page) notFound();
  return <ServicePage page={page} />;
}
