import type { Metadata } from "next";

import { SITE, SITE_DESCRIPTION, SITE_URL } from "./site";

/**
 * Brand image under `public/` — used for Open Graph + Twitter (WhatsApp, Facebook, LinkedIn, etc.).
 * Replace with a dedicated 1200×630 asset later if you want richer link previews.
 */
export const OG_IMAGE_PATH = "/images/brand/roots-connect-logo.jpeg" as const;

export const OG_IMAGE_ABSOLUTE_URL = `${SITE_URL}${OG_IMAGE_PATH}` as const;

/** Next.js `openGraph.images` — single logo for all default shares */
export const defaultOgImages: NonNullable<NonNullable<Metadata["openGraph"]>["images"]> = [
  {
    url: OG_IMAGE_PATH,
    secureUrl: OG_IMAGE_ABSOLUTE_URL,
    alt: `${SITE.name} logo`,
    type: "image/jpeg",
  },
];

export function defaultTwitterMetadata(): Metadata["twitter"] {
  return {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE_ABSOLUTE_URL],
  };
}
