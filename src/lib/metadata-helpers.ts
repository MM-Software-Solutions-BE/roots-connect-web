import type { Metadata } from "next";

import type { Locale } from "@/i18n/config";

/**
 * Canonical + hreflang (`nl`, `en`, `x-default` → NL) voor routes onder `[locale]`.
 * @param pathAfterLocale — bv. `""`, `"peers"`, `"privacy"`
 */
export function buildLocaleAlternates(
  locale: Locale,
  pathAfterLocale: string
): Pick<Metadata, "alternates"> {
  const suffix = pathAfterLocale ? `/${pathAfterLocale}` : "";
  return {
    alternates: {
      canonical: `/${locale}${suffix}`,
      languages: {
        nl: `/nl${suffix}`,
        en: `/en${suffix}`,
        "x-default": `/nl${suffix}`,
      },
    },
  };
}
