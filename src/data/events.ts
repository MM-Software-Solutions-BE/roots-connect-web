/**
 * Upcoming / recent highlights.
 */
export type EventHighlight = {
  id: string;
  /** Translation key for title, e.g. "events.evt1.title" */
  titleKey: string;
  /** Translation key for blurb, e.g. "events.evt1.blurb" */
  blurbKey: string;
  /** Free text or translation key for when/where, e.g. "Upcoming · Date & location TBC" */
  whenWhere: string;
  /** `/images/...` path under `public/` */
  imageSrc: string;
};

export const EVENT_HIGHLIGHTS: EventHighlight[] = [
  {
    id: "evt-1",
    titleKey: "events.evt1.title",
    blurbKey: "events.evt1.blurb",
    whenWhere: "events.whenWhere.tbc",
    imageSrc: "/images/home/diversity-events.jpeg",
  },
  {
    id: "evt-2",
    titleKey: "events.evt2.title",
    blurbKey: "events.evt2.blurb",
    whenWhere: "events.whenWhere.tbc",
    imageSrc: "/images/home/diversity-events.jpeg",
  },
  {
    id: "evt-3",
    titleKey: "events.evt3.title",
    blurbKey: "events.evt3.blurb",
    whenWhere: "events.whenWhere.tbc",
    imageSrc: "/images/home/diversity-events.jpeg",
  },
];
