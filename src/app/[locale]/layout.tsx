import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CookieBanner } from "@/components/cookie-banner";
import { JsonLd } from "@/components/json-ld";
import { SkipLink } from "@/components/skip-link";
import { SiteHeader } from "@/components/site-header";
import { defaultOgImages, OG_IMAGE_ABSOLUTE_URL } from "@/config/og";
import { GOOGLE_SITE_VERIFICATION, SITE } from "@/config/site";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { metadataBaseFromSiteUrl } from "@/lib/site-metadata-base";
import { getMessages } from "@/messages";
import { LocaleProvider } from "@/providers/locale-provider";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const m = getMessages(locale);

  return {
    metadataBase: metadataBaseFromSiteUrl(),
    title: m.meta.title,
    description: m.meta.description,
    ...(GOOGLE_SITE_VERIFICATION
      ? { verification: { google: GOOGLE_SITE_VERIFICATION } }
      : {}),
    openGraph: {
      type: "website",
      locale: locale === "nl" ? "nl_BE" : "en_BE",
      url: `/${locale}`,
      siteName: SITE.name,
      title: m.meta.title,
      description: m.meta.description,
      images: defaultOgImages,
    },
    twitter: {
      card: "summary_large_image",
      title: m.meta.title,
      description: m.meta.description,
      images: [OG_IMAGE_ABSOLUTE_URL],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        nl: "/nl",
        en: "/en",
        "x-default": "/nl",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const messages = getMessages(locale);

  return (
    <LocaleProvider locale={locale} messages={messages}>
      <JsonLd />
      <SkipLink />
      <SiteHeader />
      {children}
      <CookieBanner />
    </LocaleProvider>
  );
}
