/**
 * Replace with real partner names + logo paths when available.
 * Logos: add files under `public/images/partners/` and set `logoSrc`.
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
    id: "placeholder-1",
    name: "University law society (example)",
    tagline: "Placeholder — student association collaboration",
    logoSrc: null,
  },
  {
    id: "placeholder-2",
    name: "Law firm partner (example)",
    tagline: "Placeholder — strategic partnership",
    logoSrc: null,
  },
  {
    id: "placeholder-3",
    name: "NGO / network (example)",
    tagline: "Placeholder — diversity & inclusion",
    logoSrc: null,
  },
];
