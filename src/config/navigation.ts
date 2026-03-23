/** Anchor ids must match `id` on section roots in `src/components/sections/`. */

export type PrimaryNavItem =
  | { id: string; label: string; href?: never }
  | { href: string; label: string; id?: never };

/** Static nav items — avoid dynamic construction to prevent server/client hydration mismatch */
export const PRIMARY_NAV: readonly PrimaryNavItem[] = [
  { id: "home", label: "Home" },
  { id: "about-us", label: "About Us" },
  { id: "our-approach", label: "Our Approach" },
  { id: "our-impact", label: "Our Impact" },
  { href: "/peers", label: "Peer Network" },
  { id: "contact", label: "Contact" },
] as const;

export type SecondaryNavItem =
  | { id: string; label: string; href?: never }
  | { id?: never; href: string; label: string };

export const SECONDARY_NAV: SecondaryNavItem[] = [
  { id: "our-team", label: "Our Team" },
  { id: "our-partners", label: "Our Partners" },
  { id: "events", label: "Events" },
];

/** Hash-only, for same-page anchors (e.g. contact form links on homepage). */
export function sectionHref(id: string) {
  return `#${id}`;
}

/** Full path to homepage section — use for nav so links work from any page (e.g. /peers → /#contact). */
export function homeSectionHref(id: string) {
  return `/${sectionHref(id)}`;
}
