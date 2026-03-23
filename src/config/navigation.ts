/** Anchor ids must match `id` on section roots in `src/components/sections/`. */

export const PRIMARY_NAV = [
  { id: "home", label: "Home" },
  { id: "about-us", label: "About Us" },
  { id: "our-approach", label: "Our Approach" },
  { id: "our-impact", label: "Our Impact" },
  { id: "contact", label: "Contact" },
] as const;

export type SecondaryNavItem =
  | { id: string; label: string; href?: never }
  | { id?: never; href: string; label: string };

export const SECONDARY_NAV: SecondaryNavItem[] = [
  { id: "our-team", label: "Our Team" },
  { id: "our-partners", label: "Our Partners" },
  { id: "events", label: "Events" },
  { href: "/peers", label: "Peer Network" },
];

export function sectionHref(id: string) {
  return `#${id}`;
}
