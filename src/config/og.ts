import type { Metadata } from "next";

import { SITE, SITE_DESCRIPTION, SITE_URL } from "./site";

export const OG_IMAGE_PATH = "/images/brand/roots-connect-logo.jpeg" as const;

export const OG_IMAGE_ABSOLUTE_URL = `${SITE_URL}${OG_IMAGE_PATH}` as const;

/** Matches `app/[locale]/opengraph-image.tsx` — use in metadata for OG + Twitter cards. */
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

/**
 * Dynamic OG image per locale (`/{locale}/opengraph-image`), with explicit dimensions for crawlers.
 */
export function openGraphImagesForLocale(locale: string) {
  return [
    {
      url: `/${locale}/opengraph-image`,
      width: OG_IMAGE_WIDTH,
      height: OG_IMAGE_HEIGHT,
      alt: SITE.name,
    },
  ] satisfies NonNullable<NonNullable<Metadata["openGraph"]>["images"]>;
}

/** Absolute URL for `twitter.images` (some consumers expect a full URL). */
export function twitterImageAbsoluteForLocale(locale: string): string {
  return `${SITE_URL}/${locale}/opengraph-image`;
}

/** Fallback when geen `[locale]` (bijv. root metadata): default NL-card. */
export const defaultOgImages: NonNullable<
  NonNullable<Metadata["openGraph"]>["images"]
> = [
  {
    url: "/nl/opengraph-image",
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
    alt: SITE.name,
  },
];

export function defaultTwitterMetadata(): Metadata["twitter"] {
  return {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/nl/opengraph-image`],
  };
}
