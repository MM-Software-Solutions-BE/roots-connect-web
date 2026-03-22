export const LOCALE_STORAGE_KEY = "roots-connect-locale" as const;

export type LocaleCode = "nl" | "fr" | "en";

export const LOCALES: readonly {
  code: LocaleCode;
  short: string;
  name: string;
}[] = [
  { code: "nl", short: "NL", name: "Nederlands" },
  { code: "fr", short: "FR", name: "Français" },
  { code: "en", short: "EN", name: "English" },
] as const;

export function isLocaleCode(value: string): value is LocaleCode {
  return value === "nl" || value === "fr" || value === "en";
}
