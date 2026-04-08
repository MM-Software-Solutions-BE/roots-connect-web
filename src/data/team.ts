export type TeamMember = {
  name: string;
  role: string;
  practice: string;
  /** Path under `public/`, e.g. `/images/team/redouan-lakhal.png` */
  imageSrc: string | null;
  /** Personal email — when null, mailto goes to general SITE.email with subject */
  email?: string | null;
  /** Personal LinkedIn profile URL — when null, no LinkedIn button is shown */
  linkedIn?: string | null;
  /** Longer peer bio (Peer Network); optional on team cards */
  bio?: string | null;
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

/**
 * Peer Network — data uit `Fotosv3/Members on website (Antwoorden).xlsx`.
 * Volgorde: eerst volledige profielen (LinkedIn-URL + e-mail + beschrijving), onderaan ontbrekende velden.
 * Foto’s: `imageSrc: null` tot assets binnen zijn.
 *
 * Laatste groep (handmatig aan te vullen): ontbrekende LinkedIn en/of beschrijving:
 * Ummugulsum Yasarlar, Azeddine El Bastani, Yüksel Samet Gündogan, Waël Tasakenti, Bahar Kemali,
 * Cheyenne Byrne, Anna Wasinee De Wandeler, Paulina Boamah, Merve Özdemir, Charles Dianzenza.
 */
export const PEERS: TeamMember[] = [
  {
    name: "Houda Berrada",
    role: "Lawyer",
    practice: "Environmental Law",
    imageSrc: null,
    email: "Hb@vectilex.eu",
    linkedIn: "https://www.linkedin.com/in/houda-berrada-216507192/?trk=blended-typeahead",
    // TODO(peers): add Houda description/bio
    bio: null,
  },
  {
    name: "Mohamed Bouzeya",
    role: "Lawyer",
    practice: "Corporate M&A",
    imageSrc: null,
    email: "mohamed.bouzeya@be.ey.com",
    linkedIn: "https://www.linkedin.com/in/mohamedbouzeya/?skipRedirect=true",
    bio: "Mohamed Bouzeya specialises in Corporate law, and in particular in cross-border corporate restructurings, as well as M&A and ESG.",
  },
  {
    name: "Hasnein Ali",
    role: "Lawyer",
    practice: "Litigation and dispute resolution",
    imageSrc: null,
    email: "hasnein.ali@cambrian.be",
    linkedIn: "https://www.linkedin.com/in/hasnein-ali-494462132/?skipRedirect=true",
    bio: "Hasnein is a senior associate at Cambrian, with a practice focused on corporate, commercial and contract law, as well as litigation. He advises companies, shareholders and entrepreneurs on a broad range of corporate and commercial matters and represents them in legal proceedings.\n\nHasnein has particular experience in corporate disputes and contractual conflicts, assisting clients at every stage of the litigation process, from strategic assessment to court proceedings. He also advises on the drafting, negotiation and enforcement of commercial agreements.",
  },
  {
    name: "Camellia Lamkaraf",
    role: "Lawyer",
    practice: "Tax law",
    imageSrc: null,
    email: "camellia.lamkaraf@avocat.be",
    linkedIn: "https://www.linkedin.com/in/camellia-lamkaraf?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    bio: "Camellia LAMKARAF specialises in tax law, and in particular in corporate tax, income tax and cryptocurrenties.",
  },
  {
    name: "Norbert Malanowicz",
    role: "Lawyer",
    practice: "Legal Technology",
    imageSrc: null,
    email: "n.malanowicz@gmail.com",
    linkedIn: "https://www.linkedin.com/in/norbert-malanowicz",
    bio: "Norbert specialises in legal technology, and in particular in digital transformation, as well as artificial intelligence and data-driven legal solutions.",
  },
  {
    name: "Anass Arbage",
    role: "Lawyer",
    practice: "Corporate, M&A and Commercial",
    imageSrc: null,
    email: "aarbage@crowell.com",
    linkedIn: "https://www.linkedin.com/in/anass-arbage",
    bio: "Anass is a corporate M&A and commercial lawyer who advises companies, founders, and investors on transactions, strategic partnerships, and complex commercial matters. As co-founder of Roots Connect, he is passionate about building meaningful connections and creating spaces where (young) professionals and students can collaborate, exchange ideas, and grow.",
  },
  {
    name: "Mina Boel",
    role: "Lawyer",
    practice: "Environment and urban planning",
    imageSrc: null,
    email: "mina2.boel@gmail.com",
    linkedIn: "https://www.linkedin.com/in/mina-boel-0961a4196/",
    bio: "Mina Boel specializes in environmental law. Among other things, she deals with issues involving environmental law, spatial planning and urban development.",
  },
  {
    name: "Yuan Sun",
    role: "Lawyer",
    practice: "Commercial law (incl. dispute resolution)",
    imageSrc: null,
    email: "ysuuan@hotmail.com",
    linkedIn: "https://www.linkedin.com/in/yuansun888?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    bio: "Yuan Sun specialises in commercial litigation, and in particular in banking and finance litigation and real estate litigation",
  },
  {
    name: "Tayfun Anil",
    role: "Lawyer",
    practice: "Tax law",
    imageSrc: null,
    email: "tayfun.anil@tiberghien.com",
    linkedIn: "https://www.linkedin.com/in/tayfun-anil-tax/",
    bio: "Tayfun Anil has broad experience in (inter)national tax law, in which he assists a diverse range of clients in advisory and procedural matters. He represents his clients' interests in the administrative dispute phase as well as before the judicial authorities. In addition, he advises entrepreneurs and companies in the field of direct taxation. He has also developed a particular interest and experience in crypto taxation.",
  },
  {
    name: "Zakariya Maroukisse",
    role: "Lawyer",
    practice: "Public Law",
    imageSrc: null,
    email: "zakariya.maroukisse@uniqum.be",
    linkedIn: "https://www.linkedin.com/in/zakariya-maroukisse-5a94a0281/",
    bio: "Zakariya specialises in public law, particularly environmental law. He also serves as a point of contact for all Bar-related matters in West-Flanders (Kortrijk).",
  },
  {
    name: "Adnan Sariyer",
    role: "Lawyer",
    practice: "Public / procurement",
    imageSrc: null,
    email: "adnan.sariyer@hotmail.com",
    linkedIn: "https://www.linkedin.com/in/adnan-sariyer-632b01153?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    bio: "Adnan specializes in public law and represents government authorities in legal proceedings. In addition, he advises on and handles public procurement matters.",
  },
  {
    name: "Redouan Lakhal",
    role: "Lawyer",
    practice: "Employment and Social Security Law / Privacy",
    imageSrc: null,
    email: "r.lakhal@outlook.com",
    linkedIn: "https://www.linkedin.com/in/redouan-lakhal-936aa3177/",
    bio: "Redouan Lakhal is an employment lawyer with experience in both individual and collective employment law, with a particular interest in discrimination at work. As a co-founder of Roots Connect vzw, Redouan attaches great importance to maintaining your identity, and he gets a lot of energy from providing networking opportunities for first-generation law students and lawyers with diverse backgrounds.",
  },
  {
    name: "Lina Bashir",
    role: "Lawyer",
    practice: "Real Estate, Construction, Litigation",
    imageSrc: null,
    email: "linabashir@live.com",
    linkedIn: "https://www.linkedin.com/in/lina-bashir-62ba07246",
    bio: "Lina Bashir specialises in real estate law, and in particular in lease agreements and real estate transactions, as well as in construction disputes.",
  },
  {
    name: "Anissa El Kourdi",
    role: "Lawyer",
    practice: "Privaatrecht, Ondernemingsrecht, Familierecht",
    imageSrc: null,
    email: "anissa.elkourdi@lijnrecht.be",
    linkedIn: "https://www.linkedin.com/in/anissa-el-kourdi-281638197?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    bio: "Anissa specialises in private law, and in particular family law, corporate law and tenancy law.",
  },
  {
    name: "Mahira El Hireche",
    role: "Lawyer",
    practice: "Tax law",
    imageSrc: null,
    email: "mahira.el.hireche@hotmail.be",
    linkedIn: "https://www.linkedin.com/in/mahira-el-hireche?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    bio: "Mahira specialises in tax law, and in particular in corporate taxation, as well as corporate wealth, financial services taxation and tax dispute resolution.",
  },
  {
    name: "Ummugulsum Yasarlar",
    role: "Lawyer",
    practice: "Corporate and business law",
    imageSrc: null,
    email: "ummugulsum.yasarlar@belisius.be",
    linkedIn: "https://www.linkedin.com/in/ummugulsum-y-ab6623246/",
    bio: "Ummugulsum specialises in corporate and business law, and in particular in construction law, as well as contract law and administrative law.",
  },
  {
    name: "Azeddine El Bastani",
    role: "Lawyer",
    practice: "Corporate M&A",
    imageSrc: null,
    email: "azeddine.elbastani@advocaat.be",
    linkedIn: "https://www.linkedin.com/in/azeddine-el-bastani-86200112a/",
    bio: "Azeddine El Bastani specialises in corporate law, and in particular in mergers & acquisitions, the drafting of shareholders' agreements and share transfers, as well as company restructurings and non-profit matters.",
  },
  {
    name: "Yüksel Samet Gündogan",
    role: "Lawyer",
    practice: "Public - environmental law",
    imageSrc: null,
    email: "yuksel.samet.gundogan@boullart.be",
    linkedIn: "https://www.linkedin.com/in/yukselsametgundogan/",
    bio: "Yüksel Samet Gündogan specializes in public law in general, and in particular in urban planning law, environmental law, public procurement and administrative law",
  },
  {
    name: "Waël Tasakenti",
    role: "Lawyer",
    practice: "Banking & Finance Law",
    imageSrc: null,
    email: "wael.tasa@hotmail.com",
    linkedIn: "https://www.linkedin.com/in/wa%C3%ABl-tasakenti-4700a524b/",
    bio: "Waël specialises in banking and finance law, particularly in leveraged finance, real estate finance and corporate lending.",
  },
  {
    name: "Bahar Kemali",
    role: "Lawyer",
    practice: "Public law",
    imageSrc: null,
    email: "B.aharr@hotmail.com",
    linkedIn: "https://www.linkedin.com/in/bahar-k-1a3163213/",
    bio: "Bahar specialises in public law, and in particular in public procurement, as well as real estate law and PPP projects.",
  },
  {
    name: "Cheyenne Byrne",
    role: "Lawyer",
    practice: "Contract and commercial law",
    imageSrc: null,
    email: "cheyenne.byrne@hotmail.com",
    linkedIn: "https://www.linkedin.com/in/cheyenne-byrne-1b8334185/",
    bio: "Cheyenne Byrne. I focus on commercial and labor law contracts, as well as dispute resolution.",
  },
  {
    name: "Anna Wasinee De Wandeler",
    role: "Lawyer",
    practice: "IP / IT Lawyer",
    imageSrc: null,
    email: "Anna.DeWandeler@aoshearman.com",
    linkedIn: "https://www.linkedin.com/in/anna-d-4492b3221/",
    bio: "Anna De Wandeler specialises in information technology and intellectual property law, focusing on complex transactional and advisory matters across sectors. Anna has joined the Brussels bar in 2023 and currently works at A&O Shearman Belgium.",
  },
  {
    name: "Paulina Boamah",
    role: "Lawyer",
    practice: "Penal law / civil law / migration law",
    imageSrc: null,
    email: "p.boamah@myadv.online",
    // TODO(peers): add LinkedIn URL (missing)
    linkedIn: null,
    // TODO(peers): add description/bio
    bio: null,
  },
  {
    name: "Merve Özdemir",
    role: "Lawyer",
    practice: "Corporate law",
    imageSrc: null,
    email: "ozdemir.merve1@outlook.com",
    linkedIn: "https://www.linkedin.com/in/merve%C3%B6zdemir1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    // TODO(peers): add description/bio
    bio: null,
  },
  {
    name: "Charles Dianzenza",
    role: "Lawyer",
    practice: "Criminal law",
    imageSrc: null,
    email: "cdianzenza-law@outlook.com",
    linkedIn: "https://www.linkedin.com/in/charles-dianzenza-50a872183?trk=contact-info",
    // TODO(peers): add description/bio
    bio: null,
  },
];
