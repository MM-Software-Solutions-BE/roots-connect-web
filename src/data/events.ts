/**
 * Example upcoming / past highlights — replace with real events or CMS later.
 */
export type EventHighlight = {
  id: string;
  title: string;
  /** Free text, e.g. "March 2026 · Brussels" */
  whenWhere: string;
  blurb: string;
};

export const EVENT_HIGHLIGHTS: EventHighlight[] = [
  {
    id: "ex-1",
    title: "Networking evening with legal professionals (example)",
    whenWhere: "Date & location TBC",
    blurb:
      "Placeholder copy: interactive evening where students meet lawyers and discuss career paths. Replace with your next confirmed event.",
  },
  {
    id: "ex-2",
    title: "Workshop: first steps toward the Bar (example)",
    whenWhere: "Academic year 2025–26",
    blurb:
      "Placeholder: practical session on applications, traineeships, and expectations. Update when an event is published.",
  },
];
