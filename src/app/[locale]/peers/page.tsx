import type { Metadata } from "next";

import { SiteFooter } from "@/components/sections";
import { defaultOgImages, OG_IMAGE_ABSOLUTE_URL } from "@/config/og";
import { SITE } from "@/config/site";
import { isLocale, type Locale } from "@/i18n/config";
import { buildLocaleAlternates } from "@/lib/metadata-helpers";
import { metadataBaseFromSiteUrl } from "@/lib/site-metadata-base";
import { getMessages } from "@/messages";

import { PeersContent } from "./peers-content";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const m = getMessages(locale);
  const title = m.peers.title;
  const description = m.peers.intro;

  return {
    metadataBase: metadataBaseFromSiteUrl(),
    title,
    description,
    ...buildLocaleAlternates(locale, "peers"),
    openGraph: {
      type: "website",
      locale: locale === "nl" ? "nl_BE" : "en_BE",
      url: `/${locale}/peers`,
      siteName: SITE.name,
      title,
      description,
      images: defaultOgImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE_ABSOLUTE_URL],
    },
  };
}

export default function PeersPage() {
  return (
    <>
      <PeersContent />
      <SiteFooter />
    </>
  );
}
