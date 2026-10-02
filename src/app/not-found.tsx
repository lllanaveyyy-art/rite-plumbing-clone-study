import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/rite-plumbing";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="site-container py-24 text-center">
        <p className="eyebrow text-accent">404 · Page not found</p>
        <h1 className="section-title mt-5">
          Page not found
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-muted-foreground">
          The page you requested is unavailable. Visit our homepage or browse
          the plumbing services below.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-dark">
            Back to home <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link href="/services" className="btn btn-outline">
            View services
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
