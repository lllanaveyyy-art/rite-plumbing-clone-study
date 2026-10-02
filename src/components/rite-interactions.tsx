"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Copy,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";
import {
  company,
  navItems,
  scheduleUrl,
  servicePages,
} from "@/lib/rite-content";

export function SiteNavigation({ active }: { active?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const desktopMenuRef = useRef<HTMLDetailsElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    const closeDropdown = (event: Event) => {
      const menu = desktopMenuRef.current;
      if (!menu?.open) return;
      if (event instanceof KeyboardEvent && event.key === "Escape") {
        menu.open = false;
        menu.querySelector("summary")?.focus();
      } else if (event.target instanceof Node && !menu.contains(event.target)) {
        menu.open = false;
      }
    };
    document.addEventListener("pointerdown", closeDropdown);
    document.addEventListener("focusin", closeDropdown);
    document.addEventListener("keydown", closeDropdown);
    return () => {
      document.removeEventListener("pointerdown", closeDropdown);
      document.removeEventListener("focusin", closeDropdown);
      document.removeEventListener("keydown", closeDropdown);
    };
  }, []);

  function closeMenu() {
    dialogRef.current?.close();
    setOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="hidden items-center gap-6 xl:flex"
      >
        <details ref={desktopMenuRef} className="service-menu relative">
          <summary
            className={`nav-link flex cursor-pointer list-none items-center gap-1.5 ${active === "Services" ? "nav-active" : ""}`}
          >
            Services <ChevronDown size={14} aria-hidden="true" />
          </summary>
          <div className="absolute left-0 top-[calc(100%+24px)] w-[510px] rounded-xl border border-border bg-white p-5 shadow-xl">
            <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
              <span className="eyebrow">How we can help</span>
              <Link
                href="/services"
                onClick={() => {
                  if (desktopMenuRef.current)
                    desktopMenuRef.current.open = false;
                }}
                className="text-sm font-semibold text-accent"
              >
                All services <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-1">
              {servicePages.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={() => {
                    if (desktopMenuRef.current)
                      desktopMenuRef.current.open = false;
                  }}
                  className="rounded-md px-2 py-2.5 text-sm font-medium transition hover:bg-cream hover:text-accent"
                >
                  {service.shortTitle}
                </Link>
              ))}
            </div>
          </div>
        </details>
        {navItems.slice(1).map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`nav-link ${active === item.label ? "nav-active" : ""}`}
            aria-current={active === item.label ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-3 sm:gap-5">
        <a
          href={company.phoneHref}
          className="hidden items-center gap-2 text-sm font-bold md:flex"
        >
          <Phone size={16} className="text-accent" aria-hidden="true" />
          {company.phone}
        </a>
        <a
          href={scheduleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary hidden sm:inline-flex"
        >
          Book a service <ArrowRight size={16} aria-hidden="true" />
        </a>
        <button
          ref={triggerRef}
          type="button"
          onClick={() => {
            dialogRef.current?.showModal();
            setOpen(true);
          }}
          aria-label="Open navigation"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-border xl:hidden"
        >
          <Menu size={23} aria-hidden="true" />
        </button>
      </div>
      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-label="Navigation"
        onCancel={() => setOpen(false)}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
        className="mobile-dialog m-0 ml-auto h-dvh max-h-none w-[min(100%,440px)] max-w-none border-0 bg-cream p-0 text-ink"
      >
        <div className="flex h-full flex-col overflow-y-auto px-7 pb-8 pt-6">
          <div className="mb-10 flex items-center justify-between">
            <span className="text-2xl font-extrabold tracking-tight">
              RITE<span className="text-accent">.</span>
            </span>
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-border"
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                aria-current={active === item.label ? "page" : undefined}
                className="flex items-center justify-between border-b border-border py-4 text-xl font-semibold"
              >
                {item.label}
                <ArrowRight size={19} aria-hidden="true" />
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-10">
            <p className="eyebrow mb-3">Here for you, 24/7</p>
            <a href={company.phoneHref} className="block text-2xl font-bold">
              {company.phone}
            </a>
            <a
              href={scheduleUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="btn btn-primary mt-5 w-full"
            >
              Book a service <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-border bg-white/95 px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md sm:hidden">
      <a href={company.phoneHref} className="btn btn-dark flex-1">
        <Phone size={17} aria-hidden="true" />
        Call 24/7
      </a>
      <a
        href={scheduleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary flex-1"
      >
        Book online <ArrowRight size={17} aria-hidden="true" />
      </a>
    </div>
  );
}

export function RequestForm({
  initialService = "",
  initialZip = "",
}: {
  initialService?: string;
  initialZip?: string;
}) {
  const [draft, setDraft] = useState<{ text: string; href: string } | null>(
    null,
  );
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">(
    "idle",
  );
  const confirmationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (draft) confirmationRef.current?.focus();
  }, [draft]);

  async function copyRequest() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(draft.text);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }

  function prepareRequest(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const service = String(data.get("service"));
    const text = `Hello Rite Plumbing & Heating,\n\nI would like help with ${service}.\n\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nZIP code: ${data.get("zip")}\n\nDetails:\n${data.get("details")}\n\nPlease contact me to discuss availability and an estimate. Thank you.`;
    const href = `mailto:${company.email}?subject=${encodeURIComponent(`Plumbing request: ${service}`)}&body=${encodeURIComponent(text)}`;
    setDraft({ text, href });
    setCopyState("idle");
  }

  return (
    <div className="rounded-2xl border border-border bg-white p-6 sm:p-9">
      <span className="eyebrow">Prefer email?</span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight">
        Tell us what’s going on.
      </h2>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        Prepare a request below, then send it from your email app. For a
        confirmed appointment, use our online booking calendar.
      </p>
      {draft ? (
        <div
          ref={confirmationRef}
          tabIndex={-1}
          className="mt-7 rounded-xl bg-cream p-6"
          role="status"
        >
          <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white">
            <Mail size={19} aria-hidden="true" />
          </span>
          <h3 className="text-xl font-bold">Your email draft is ready.</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Open your email app to review and send it. Your request has not been
            sent yet.
          </p>
          <a href={draft.href} className="btn btn-primary mt-5 w-full">
            Open email app <ArrowRight size={16} aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={copyRequest}
            className="btn btn-outline mt-3 w-full"
          >
            {copyState === "copied" ? (
              <Check size={16} aria-hidden="true" />
            ) : (
              <Copy size={16} aria-hidden="true" />
            )}
            {copyState === "copied" ? "Request copied" : "Copy request instead"}
          </button>
          {copyState === "failed" ? (
            <p className="mt-3 text-sm">
              Copy the text below and email it to {company.email}.
            </p>
          ) : null}
          <details className="mt-4 text-sm">
            <summary className="cursor-pointer font-semibold">
              View request text
            </summary>
            <p className="mt-3 whitespace-pre-wrap leading-6">{draft.text}</p>
          </details>
          <button
            type="button"
            onClick={() => setDraft(null)}
            className="mt-5 text-sm font-semibold underline underline-offset-4"
          >
            Start a new request
          </button>
        </div>
      ) : (
        <form onSubmit={prepareRequest} className="mt-7 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field-label">
              Your name
              <input
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                placeholder="Full name"
                className="form-input"
              />
            </label>
            <label className="field-label">
              Phone number
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                maxLength={30}
                minLength={7}
                placeholder="(212) 555-0123"
                className="form-input"
              />
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field-label">
              Service needed
              <select
                name="service"
                defaultValue={initialService}
                required
                className="form-input"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {servicePages.map((service) => (
                  <option key={service.slug} value={service.shortTitle}>
                    {service.shortTitle}
                  </option>
                ))}
                <option value="Not sure — please advise">
                  Not sure — please advise
                </option>
              </select>
            </label>
            <label className="field-label">
              ZIP code
              <input
                name="zip"
                inputMode="numeric"
                autoComplete="postal-code"
                pattern="[0-9]{5}"
                maxLength={5}
                defaultValue={initialZip}
                required
                title="Enter a five-digit ZIP code"
                placeholder="10022"
                className="form-input"
              />
            </label>
          </div>
          <label className="field-label">
            How can we help?
            <textarea
              name="details"
              required
              maxLength={1500}
              rows={4}
              placeholder="Tell us about the issue and any building requirements…"
              className="form-input resize-y"
            />
          </label>
          <button type="submit" className="btn btn-dark w-full">
            Prepare email request <ArrowRight size={17} aria-hidden="true" />
          </button>
          <p className="text-xs leading-5 text-muted-foreground">
            You’ll review and send the request in your email app. Need urgent
            help?{" "}
            <a
              href={company.phoneHref}
              className="font-bold text-ink underline underline-offset-2"
            >
              Call us 24/7.
            </a>
          </p>
        </form>
      )}
    </div>
  );
}
