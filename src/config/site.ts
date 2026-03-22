/**
 * Central place for contact, legal, and social URLs.
 * Replace social URLs when official Roots Connect profiles are confirmed.
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
    linkedin: "https://www.linkedin.com/company/rootsconnect",
    instagram: "https://www.instagram.com/rootsconnect.be",
  },
} as const;
