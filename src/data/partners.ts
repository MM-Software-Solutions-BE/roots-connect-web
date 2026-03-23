/**
 * Partners and sponsors.
 * Logos can be added under `public/images/partners/` and linked via `logoSrc`.
 */
export type PartnerEntry = {
  id: string;
  name: string;
  /** Optional one-line description */
  tagline?: string;
  /** `/images/partners/...` or null for placeholder tile */
  logoSrc: string | null;
};

export const PARTNERS: PartnerEntry[] = [
  {
    id: "levl",
    name: "Levl",
    tagline: "Sponsor",
    logoSrc: "/images/partners/levl-logo.jpeg",
  },
];
