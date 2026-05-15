import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { RiteScrollTop } from "@/components/rite-interactions";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Plumber NYC | Best Plumbing New York | Rite Plumbing NYC",
  description: "Rite Plumbing NYC study clone for a plumbing service homepage.",
  icons: {
    icon: "/seo/riteplumbing/favicon-32.png",
    apple: "/seo/riteplumbing/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}<RiteScrollTop /></body>
    </html>
  );
}
