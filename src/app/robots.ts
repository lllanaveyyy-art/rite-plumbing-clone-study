import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(process.env.VERCEL_ENV === "preview"
        ? { disallow: "/" }
        : { allow: "/" }),
    },
    sitemap: new URL("/sitemap.xml", siteUrl).href,
  };
}
