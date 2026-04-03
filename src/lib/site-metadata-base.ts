import { SITE_URL } from "@/config/site";

export function metadataBaseFromSiteUrl(): URL {
  const base = SITE_URL.endsWith("/") ? SITE_URL.slice(0, -1) : SITE_URL;
  return new URL(`${base}/`);
}
