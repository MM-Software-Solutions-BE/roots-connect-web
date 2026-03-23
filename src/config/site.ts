/**
 * Central place for contact, legal, and social URLs.
 * Social links (LinkedIn company page, Instagram).
 */
export const SITE_URL = "https://rootsconnect.be" as const;

/** Shared for metadata, JSON-LD, manifest. */
export const SITE_DESCRIPTION =
  "Connecting roots through law — Empowering the next generation of legal talent. Belgian network of lawyers supporting students from underrepresented backgrounds." as const;

export const SITE = {
  name: "Roots Connect",
  legalName: "Roots Connect vzw",
  email: "info@rootsconnect.be",
  /** Belgian company number (KBO) */
  companyNumber: "BE1026.631.469",
  address: ["Koningslaan 107", "1190 Vorst"] as const,
  bankAccount: "BE82 7380 5030 8868",
  /** Shown after © in the footer — update to your name or studio */
  webCredit: "MM Software Solutions",
  social: {
    linkedin: "https://be.linkedin.com/company/roots-connectnetwork",
    instagram: "https://www.instagram.com/rootsconnectnetwork/",
  },
  /** CTA 1: Google Form voor event-updates. Vul in zodra klant link levert. */
  googleFormEventUpdates: null as string | null,
  /**
   * CTA 2: Contactformulier → emails naar info@rootsconnect.be.
   * Maak een form op https://formspree.io, stel ontvanger in op info@rootsconnect.be,
   * en plak hier het form-ID (bv. "mabcxyzw" uit https://formspree.io/f/mabcxyzw).
   */
  formspreeFormId: "maqprqwj" as string | null,
} as const;
