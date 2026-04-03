import type { MetadataRoute } from "next";

import { SITE_URL } from "@/config/site";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${base}/${locale}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    });
    entries.push({
      url: `${base}/${locale}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    });
    entries.push({
      url: `${base}/${locale}/peers`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return entries;
}
