import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { siteUrl } from "@/lib/metadata";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "NYC Plumbing & Heating | Rite Plumbing",
    template: "%s | Rite Plumbing & Heating",
  },
  description:
    "Local, licensed plumbing and heating for Manhattan, Brooklyn, and Queens. 24/7 emergency help, repairs, installations, and free estimates. Book Rite Plumbing online.",
  applicationName: "Rite Plumbing & Heating",
  icons: {
    icon: { url: "/icon.svg", type: "image/svg+xml" },
    apple: "/seo/riteplumbing/apple-touch-icon.png",
  },
  robots:
    process.env.VERCEL_ENV === "preview"
      ? { index: false, follow: false }
      : { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full`}>
      <body className="min-h-full">
        <a
          href="#main-content"
          className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-lg bg-ink px-5 py-3 text-sm font-bold text-white focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
