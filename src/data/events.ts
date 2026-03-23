/**
 * Upcoming / recent highlights.
 */
export type EventHighlight = {
  id: string;
  title: string;
  /** Free text, e.g. "March 2026 · Brussels" */
  whenWhere: string;
  /** `/images/...` path under `public/` */
  imageSrc: string;
  blurb: string;
};

export const EVENT_HIGHLIGHTS: EventHighlight[] = [
  {
    id: "evt-1",
    title: "From Roots to Succes x BLS Consultancy",
    whenWhere: "Upcoming · Date & location TBC",
    imageSrc: "/images/home/diversity-events.jpeg",
    blurb:
      "Event focused on practical career insights, networking, and open dialogue with legal professionals.",
  },
  {
    id: "evt-2",
    title: "Roots Connect x Hidaya Hasselt",
    whenWhere: "Upcoming · Date & location TBC",
    imageSrc: "/images/home/diversity-events.jpeg",
    blurb:
      "Community collaboration event connecting students with role models and legal sector perspectives.",
  },
  {
    id: "evt-3",
    title: "Roots Connect x Diversity For Law Students",
    whenWhere: "Upcoming · Date & location TBC",
    imageSrc: "/images/home/diversity-events.jpeg",
    blurb:
      "Conversation-driven event around inclusion, representation, and sustainable access to legal careers.",
  },
];
