import type { Metadata } from "next";

const configuredOrigin =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL;
export const siteUrl = configuredOrigin
  ? new URL(
      configuredOrigin.startsWith("http")
        ? configuredOrigin
        : `https://${configuredOrigin}`,
    )
  : new URL("http://localhost:3000");

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image = "/images/riteplumbing/history.jpg",
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Rite Plumbing & Heating`,
      description,
      url: path,
      siteName: "Rite Plumbing & Heating",
      type: "website",
      locale: "en_US",
      images: [{ url: image, alt: "Rite Plumbing & Heating in New York City" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
