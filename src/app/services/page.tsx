import Image from "next/image";
import Link from "next/link";
import { RiteFooter, RiteHeader } from "@/components/rite-plumbing";
import { serviceArchiveItems } from "@/lib/rite-content";

export default function ServicesIndexPage() {
  return (
    <main className="rite-page min-h-screen bg-white text-[#111013] dark:bg-[#111013] dark:text-white">
      <RiteHeader active="Services" />
      <section className="mx-auto max-w-[1220px] px-7 pb-14 pt-20 md:px-0 md:pb-20 md:pt-28">
        <Link href="/" className="mb-12 block text-3xl leading-none hover:text-[#18a9d4] md:mb-16">←</Link>
        <h1 className="text-[64px] font-bold leading-none tracking-[-0.065em] md:text-[88px]">Services</h1>
        <p className="mt-16 text-[14px] font-bold text-neutral-500 dark:text-white/50"><Link href="/" className="hover:text-[#18a9d4]">Home</Link> <span className="mx-2 text-neutral-300">›</span> Services</p>
        <div className="mt-9 grid gap-x-10 gap-y-11 md:grid-cols-3">
          {serviceArchiveItems.map((service) => (
            <article key={service.href} className="group">
              <Link href={service.href} className="relative block h-[390px] overflow-hidden rounded-[3px] bg-neutral-200 dark:bg-[#17161a] md:h-[390px]">
                <Image src={service.image} alt={service.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width: 768px) 31vw, 100vw" />
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/12 to-transparent" />
                <span className="absolute bottom-7 left-5 right-5 text-[24px] font-bold leading-[0.98] tracking-[-0.055em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">{service.title}</span>
              </Link>
              <Link href={service.href} className="mt-4 inline-flex items-center text-[13px] font-bold text-neutral-500 hover:text-[#18a9d4] dark:text-white/55 dark:hover:text-[#18a9d4]">
                Show project <span className="ml-2">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <RiteFooter />
    </main>
  );
}
