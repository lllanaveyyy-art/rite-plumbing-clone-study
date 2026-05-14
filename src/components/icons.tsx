import type { SVGProps } from "react";

export function PlayCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" fill="none" {...props}>
      <circle cx="32" cy="32" r="31" fill="currentColor" />
      <path d="M26 20v24l20-12-20-12Z" fill="white" />
    </svg>
  );
}

export function CalendarLineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" aria-hidden="true" fill="none" {...props}>
      <path d="M7 4v4M21 4v4M4.5 11h19M7 7h14a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 15h3M16 15h3M9 20h3M16 20h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function RoutePinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" aria-hidden="true" fill="none" {...props}>
      <path d="M9 24c3-4.1 5-7.2 5-10a5 5 0 1 0-10 0c0 2.8 2 5.9 5 10Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 14.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM15.5 22H20a4 4 0 1 0 0-8h-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function DocumentStackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" aria-hidden="true" fill="none" {...props}>
      <path d="M8 5h9l4 4v14H8V5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M17 5v5h4M11 14h7M11 18h7M5 9v14h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CreditCardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" aria-hidden="true" fill="none" {...props}>
      <rect x="4" y="7" width="20" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 12h20M8 17h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
