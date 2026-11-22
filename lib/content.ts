export type Experience = {
  num: string;
  title: string;
  org: string;
  bullets: string[];
  date: string;
  sub?: { title: string; date: string; text: string };
};

export const experience: Experience[] = [
  {
    num: "01",
    title: "Vice President",
    org: "Deakin University Cybersecurity Association (DUCA), Burwood",
    bullets: [
      "Manage a team of 40+ and follow up with each executive on their tasks so events run on time.",
      "Run 10+ events each trimester, mostly technical talks, guest lectures and CTFs, with around 80–100 people attending.",
      "Handle communication between members, university staff and our 7 industry sponsors.",
    ],
    date: "Sep 2025 – Present",
    sub: {
      title: "Committee Member, DUCA",
      date: "Mar 2025 – Sep 2025",
      text: "Helped organise CTF competitions, technical talks and guest lectures for members.",
    },
  },
  {
    num: "02",
    title: "Crew Member",
    org: "McDonald’s Burwood Highway, Burwood",
    bullets: [
      "Take 200+ customer orders per shift, including during peak hours.",
      "Follow food safety, hygiene and cash handling procedures on every shift.",
    ],
    date: "Apr 2025 – Present",
  },
  {
    num: "03",
    title: "Volunteer",
    org: "CodeDay, Delhi, India",
    bullets: [
      "Ran technical workshops and mentored 500+ participants in 2 days.",
      "Helped teams work through technical problems and refine their project ideas during the event.",
    ],
    date: "Sep 2024",
  },
  {
    num: "04",
    title: "Vice President & Senior Executive",
    org: "CODE Club, Apeejay School, Noida",
    bullets: [
      "Vice President in 2023, Senior Executive in 2022.",
      "Led the planning of Dcrypt, the club’s main cryptic hunt event, for 450+ participants from 12 schools.",
      "Ran the club’s social media (500+ followers) and was the link between members, teachers and school administration.",
    ],
    date: "Apr 2022 – Apr 2024",
  },
];

export const also = [
  {
    title: "Open Day Ambassador",
    org: "Deakin University, Burwood",
    date: "Aug 2026",
    text: "Showed prospective students and their families around campus and answered their questions about courses.",
  },
  {
    title: "Member, Interact Club",
    org: "Apeejay School, Noida",
    date: "Apr 2020 – Apr 2024",
    text: "Organised blood donation camps and worked with the Rotary Club to donate used items to a special needs school.",
  },
];

export const skillGroups = [
  { title: "Security", items: ["Wireshark", "Nmap", "Kali Linux", "CTF problem solving"] },
  {
    title: "Programming & web",
    items: ["Python", "C++", "C#", "JavaScript", "HTML", "CSS", "React", "Next.js", "MySQL", "MongoDB", "Git", "GitHub"],
  },
  {
    title: "Tools",
    items: ["Figma", "Framer", "Notion", "WordPress", "DaVinci Resolve", "Excel", "Word", "PowerPoint", "Outlook"],
  },
  { title: "Professional", items: ["Team leadership", "Event planning", "Customer service"] },
];

export const tickerItems = [
  "Wireshark",
  "Nmap",
  "Kali Linux",
  "Python",
  "C++",
  "C#",
  "JavaScript",
  "React",
  "Next.js",
  "MySQL",
  "MongoDB",
  "Git",
];

export const awards: { text: string; date: string; href?: string }[] = [
  {
    text: "Using Python to Interact with the Operating System, Google (Coursera)",
    date: "Nov 2024",
    href: "https://www.coursera.org/account/accomplishments/verify/S92Z9U8E4DXH",
  },
  {
    text: "Crash Course on Python, Google (Coursera)",
    date: "Aug 2024",
    href: "https://www.coursera.org/account/accomplishments/records/6CCY1SHIGKI2",
  },
  {
    text: "2nd Place, Cryptic Hunt, Silico Battles Tech Fest, Delhi (25 teams). Our school also won the overall trophy.",
    date: "Oct 2023",
  },
  { text: "3rd Place, Cryptic Hunt, Elithon Tech Fest, K.R. Mangalam World School, Greater Noida", date: "Sep 2022" },
  { text: "3rd Place, Movie Making (video editing), Incognito Tech Fest, Somerville School, Noida", date: "Jun 2022" },
];
