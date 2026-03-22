/**
 * Stored in `localStorage`. When you add Google Analytics (or similar), only
 * initialise the script if `getStoredConsent() === "all"` (client-side).
 */
export const COOKIE_CONSENT_STORAGE_KEY = "roots-connect-cookie-consent";

export type CookieConsentValue = "essential" | "all";

export function getStoredConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  if (raw === "essential" || raw === "all") return raw;
  return null;
}

export function setStoredConsent(value: CookieConsentValue) {
  localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
}

/** Returns true only after user chose “Accept all” — use before loading GA / marketing scripts. */
export function consentAllowsAnalytics(): boolean {
  return getStoredConsent() === "all";
}
