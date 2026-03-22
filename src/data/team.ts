export type TeamMember = {
  name: string;
  role: string;
  practice: string;
  /** Path under `public/`, e.g. `/images/team/redouan-lakhal.png` */
  imageSrc: string | null;
};

export const TEAM_MEMBERS: TeamMember[] = [
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
    imageSrc: null,
  },
  {
    name: "Mina Boel",
    role: "Public Relations Manager",
    practice: "Environmental Law",
    imageSrc: null,
  },
  {
    name: "Yuan Sun",
    role: "Marketing Manager",
    practice: "Commercial Law",
    imageSrc: null,
  },
];
