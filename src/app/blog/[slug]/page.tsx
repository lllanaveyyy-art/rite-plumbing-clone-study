import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  FinalCTA,
  GasSafetyNotice,
  SiteShell,
} from "@/components/rite-plumbing";
import { news } from "@/lib/rite-content";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = news.find((item) => item.slug === slug);
  return article
    ? {
        ...pageMetadata(
          article.title,
          article.excerpt,
          `/blog/${article.slug}`,
          article.image,
        ),
        openGraph: {
          type: "article",
          title: article.title,
          description: article.excerpt,
          images: [article.image],
        },
      }
    : {};
}
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = news.find((item) => item.slug === slug);
  if (!article) notFound();
  return (
    <SiteShell active="Tips & advice">
      <article className="mx-auto max-w-[900px] px-5 py-12 sm:px-8 sm:py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground"
        >
          <ArrowLeft size={15} aria-hidden="true" />
          All tips & advice
        </Link>
        <div className="mt-9 flex items-center gap-3 text-xs font-semibold">
          <span className="text-accent">{article.category}</span>
          <span className="text-muted-foreground">{article.readTime}</span>
        </div>
        <h1 className="mt-4 text-[38px] font-bold leading-[1.12] tracking-[-0.045em] sm:text-[54px]">
          {article.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          {article.excerpt}
        </p>
        <div className="relative my-9 h-[270px] overflow-hidden rounded-xl bg-sand sm:h-[430px]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            preload
            sizes="(min-width: 900px) 836px, 92vw"
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-[700px]">
          {article.category === "Safety" ? <GasSafetyNotice /> : null}
          <p className="mb-7 text-xs text-muted-foreground">
            Advice from Rite Plumbing & Heating · Updated October 2026
          </p>
          {article.sections.map((section) => (
            <section key={section.title} className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight">
                {section.title}
              </h2>
              <p className="mt-3 text-base leading-8 text-muted-foreground">
                {section.text}
              </p>
            </section>
          ))}
          <Link
            href="/services"
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold"
          >
            Find the right plumbing service{" "}
            <ArrowUpRight
              size={16}
              className="text-accent"
              aria-hidden="true"
            />
          </Link>
        </div>
      </article>
      <FinalCTA />
    </SiteShell>
  );
}
