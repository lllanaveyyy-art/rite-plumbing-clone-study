import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RiteFooter, RiteHeader } from "@/components/rite-plumbing";
import { news } from "@/lib/rite-content";

export function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = news.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <main className="rite-page min-h-screen bg-white text-[#111013] dark:bg-[#111013] dark:text-white">
      <RiteHeader active="Blog" />
      <article className="mx-auto max-w-[860px] px-7 py-16 md:px-0 md:py-20">
        <Link href="/blog/" className="mb-10 block text-3xl">←</Link>
        <p className="text-[12px] font-bold text-neutral-400">Posted by SEO RankZenith</p>
        <p className="mt-2 text-[12px] font-bold text-neutral-400">{article.date} · {article.readTime}</p>
        <h1 className="mt-6 text-[48px] font-bold leading-tight tracking-[-0.06em] md:text-[72px]">{article.title}</h1>
        <p className="mt-8 text-[13px] font-bold text-neutral-500">{article.category}</p>
        <div className="relative mt-8 h-[300px] overflow-hidden bg-neutral-200 dark:bg-[#17161a] md:h-[430px]">
          <Image src={article.image} alt={article.title} fill className="object-cover" sizes="(min-width: 768px) 860px, 100vw" priority />
        </div>
        {article.secondaryImage ? (
          <div className="relative mt-6 h-[260px] overflow-hidden bg-neutral-200 dark:bg-[#17161a] md:h-[360px]">
            <Image src={article.secondaryImage} alt={`${article.title} detail`} fill className="object-cover" sizes="(min-width: 768px) 860px, 100vw" />
          </div>
        ) : null}
        <div className="mt-8 space-y-6 text-[18px] leading-relaxed text-neutral-600 dark:text-white/70">
          <p>{article.excerpt}</p>
          <p>Rite Plumbing & Heating keeps the original local-service blog rhythm here with concise plumbing guidance and clear calls to contact a licensed NYC plumber when a problem needs professional help.</p>
        </div>
      </article>
      <RiteFooter />
    </main>
  );
}
