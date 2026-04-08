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

/** Voor de "Our Team" sectie op de homepage. */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Anass Arbage",
    role: "VP Director",
    practice: "Corporate & Commercial Law",
    imageSrc: "/images/team/anass-arbage.jpeg",
  },
  {
    name: "Houda Berrada",
    role: "VP Director",
    practice: "Environmental Law",
    imageSrc: "/images/team/houda-berrada.jpeg",
  },
  {
    name: "Redouan Lakhal",
    role: "President-Director",
    practice: "Employment Law",
    imageSrc: "/images/team/redouan-lakhal.jpeg",
  },
  {
    name: "Yuan Sun",
    role: "Marketing Manager",
    practice: "Commercial Law",
    imageSrc: "/images/team/yuan-sun.jpeg",
  },
  {
    name: "Mina Boel",
    role: "Public Relations Manager",
    practice: "Environmental Law",
    imageSrc: "/images/team/mina-boel.png",
  },
];

/** Voor de Peer Network pagina — aparte array zodat we extra peers kunnen toevoegen. */
export const PEERS: TeamMember[] = [
  {
    name: "Anass Arbage",
    role: "VP Director",
    practice: "Corporate & Commercial Law",
    imageSrc: "/images/team/anass-arbage.jpeg",
  },
  {
    name: "Houda Berrada",
    role: "VP Director",
    practice: "Environmental Law",
    imageSrc: "/images/team/houda-berrada.jpeg",
  },
  {
    name: "Redouan Lakhal",
    role: "President-Director",
    practice: "Employment Law",
    imageSrc: "/images/team/redouan-lakhal.jpeg",
  },
  {
    name: "Yuan Sun",
    role: "Marketing Manager",
    practice: "Commercial Law",
    imageSrc: "/images/team/yuan-sun.jpeg",
  },
  {
    name: "Mina Boel",
    role: "Public Relations Manager",
    practice: "Environmental Law",
    imageSrc: "/images/team/mina-boel.png",
  },
];
