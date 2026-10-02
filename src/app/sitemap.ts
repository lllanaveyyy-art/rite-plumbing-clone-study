import type { MetadataRoute } from "next";
import { news, servicePages } from "@/lib/rite-content";
import { siteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/services",
    "/about-us",
    "/contact",
    "/blog",
    "/video",
    ...servicePages.map((page) => `/services/${page.slug}`),
    ...news.map((article) => `/blog/${article.slug}`),
  ];
  return paths.map((path) => ({
    url: new URL(path, siteUrl).href,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.startsWith("/blog/") ? 0.5 : 0.8,
  }));
}
