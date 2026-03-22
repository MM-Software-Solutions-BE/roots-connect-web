import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { CookieBanner } from "@/components/cookie-banner";
import { JsonLd } from "@/components/json-ld";
import { SkipLink } from "@/components/skip-link";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultDescription =
  "Connecting roots through law — Empowering the next generation of legal talent. Belgian network of lawyers supporting students from underrepresented backgrounds.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Roots Connect",
    template: "%s | Roots Connect",
  },
  description: defaultDescription,
  openGraph: {
    type: "website",
    locale: "en_BE",
    url: "/",
    siteName: "Roots Connect",
    title: "Roots Connect",
    description: defaultDescription,
    /** Placeholder — replace with a 1200×630 branded image when available */
    images: [
      {
        url: "/images/brand/roots-connect-logo.jpeg",
        alt: "Roots Connect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roots Connect",
    description: defaultDescription,
    images: ["/images/brand/roots-connect-logo.jpeg"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd />
        <SkipLink />
        <SiteHeader />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
