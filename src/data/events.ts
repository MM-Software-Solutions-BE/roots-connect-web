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
    whenWhere: "Summer 2025",
    imageSrc: "/images/events/annual-roots-connect-summer-2025.jpeg",
  },
  {
    id: "evt-2",
    titleKey: "events.evt2.title",
    blurbKey: "events.evt2.blurb",
    whenWhere: "University of Antwerp",
    imageSrc: "/images/events/from-roots-to-success-diversity-law-students-ua.jpeg",
  },
  {
    id: "evt-3",
    titleKey: "events.evt3.title",
    blurbKey: "events.evt3.blurb",
    whenWhere: "VUB",
    imageSrc: "/images/events/from-roots-to-success-blsc-vub.jpeg",
  },
];
