export type TeamMember = {
  name: string;
  role: string;
  practice: string;
  /** Path under `public/`, e.g. `/images/team/redouan-lakhal.png` */
  imageSrc: string | null;
  /** Personal email — when null, mailto goes to general SITE.email with subject */
  email?: string | null;
  /** Personal LinkedIn profile URL — when null, button is hidden */
  linkedIn?: string | null;
};

/** Shared: team leads appear in both TEAM_MEMBERS (Our Team) and PEERS (Peer Network). */
const TEAM_LEADS: TeamMember[] = [
  {
    name: "Redouan Lakhal",
    role: "President-Director",
    practice: "Employment Law",
    imageSrc: "/images/team/redouan-lakhal.png",
  },
  {
    name: "Anass Arbage",
    role: "VP Director",
    practice: "Corporate & Commercial Law",
    imageSrc: "/images/team/anass-arbage.png",
  },
  {
    name: "Houda Berrada",
    role: "VP Director",
    practice: "Environmental Law",
    imageSrc: "/images/team/houda-berrada.png",
  },
  {
    name: "Mina Boel",
    role: "Public Relations Manager",
    practice: "Environmental Law",
    imageSrc: "/images/team/mina-boel.png",
  },
  {
    name: "Yuan Sun",
    role: "Marketing Manager",
    practice: "Commercial Law",
    imageSrc: "/images/team/yuan-sun.png",
  },
];

/** Voor de "Our Team" sectie op de homepage. */
export const TEAM_MEMBERS: TeamMember[] = TEAM_LEADS;

/** Voor de Peer Network pagina — zelfde personen als team leads. */
export const PEERS: TeamMember[] = TEAM_LEADS;
