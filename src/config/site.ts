/**
 * Central place for contact, legal, and social URLs.
 * Social links (LinkedIn company page, Instagram).
 */
export const SITE_URL = "https://rootsconnect.be" as const;

export const SITE = {
  name: "Roots Connect",
  email: "info@rootsconnect.be",
  /** Belgian company number (KBO) */
  companyNumber: "BE1026.631.469",
  /** Shown after © in the footer — update to your name or studio */
  webCredit: "MM Software Solutions",
  social: {
    linkedin: "https://be.linkedin.com/company/roots-connectnetwork",
    instagram: "https://www.instagram.com/rootsconnectnetwork/",
  },
} as const;
