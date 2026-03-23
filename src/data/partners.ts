/**
 * Partners and sponsors.
 * Logos can be added under `public/images/partners/` and linked via `logoSrc`.
 */
export type PartnerEntry = {
  id: string;
  name: string;
  /** Optional one-line description */
  tagline?: string;
  /** Short uitleg over de sponsor */
  description?: string;
  /** `/images/partners/...` or null for placeholder tile */
  logoSrc: string | null;
  /** Website URL */
  websiteUrl?: string;
  /** LinkedIn company URL */
  linkedInUrl?: string;
};

export const PARTNERS: PartnerEntry[] = [
  {
    id: "levl",
    name: "LEVL",
    tagline: "Sponsor",
    description:
      "LEVL streeft naar de volwaardige participatie van mensen met een migratieachtergrond op weg naar een inclusieve samenleving.",
    logoSrc: "/images/partners/levl-logo.jpeg",
    websiteUrl: "https://www.levl.be/",
    linkedInUrl: "https://www.linkedin.com/company/levl-be/",
  },
  {
    id: "join",
    name: "",
    logoSrc: null,
    description: "",
  },
];
