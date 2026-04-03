export const locales = ["nl", "en"] as const;
export type Locale = (typeof locales)[number];

/** Default for `/` redirect and fallbacks */
export const defaultLocale: Locale = "nl";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
