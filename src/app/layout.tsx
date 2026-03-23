import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { CookieBanner } from "@/components/cookie-banner";
import { JsonLd } from "@/components/json-ld";
import { SkipLink } from "@/components/skip-link";
import { SiteHeader } from "@/components/site-header";
import { TranslationsProvider } from "@/lib/translations";
import { defaultOgImages, defaultTwitterMetadata } from "@/config/og";
import { SITE_DESCRIPTION, SITE_URL } from "@/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0e293e",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Roots Connect",
    template: "%s | Roots Connect",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_BE",
    url: "/",
    siteName: "Roots Connect",
    title: "Roots Connect",
    description: SITE_DESCRIPTION,
    images: defaultOgImages,
  },
  twitter: defaultTwitterMetadata(),
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
        <TranslationsProvider>
          <JsonLd />
          <SkipLink />
          <SiteHeader />
          {children}
          <CookieBanner />
        </TranslationsProvider>
      </body>
    </html>
  );
}
