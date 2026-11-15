

export const site = {
  // TODO: replace with your real domain once the site is deployed
  // (for example the URL Vercel gives you). It is used for the sitemap,
  // robots.txt and the Open Graph tags.
  url: "https://adityakapoor.vercel.app/",
  title: "Aditya Kapoor | Cyber Security Student",
  description:
    "Portfolio of Aditya Kapoor, a second-year Bachelor of Cyber Security student at Deakin University and Vice President of the Deakin University Cybersecurity Association (DUCA).",
};

export const profile = {
  name: "Aditya Kapoor",
  // Shown in the hero with a typing effect.
  title: "Cyber Security Student · DUCA Vice President",
  location: "Burwood, VIC",
  intro:
    "I'm a second-year Cyber Security student at Deakin University with a WAM of 81.5. As Vice President of the Deakin University Cybersecurity Association, I manage a team of 40+ and run our events and Capture The Flag competitions.",
  lookingFor:
    "Looking for a cyber security internship or an entry-level SOC or IT support role.",
  // The file itself goes in /public. See the README.
  cvPath: "/Aditya-Kapoor-CV.pdf",


  photo: {
    src: "/profile.png",
    width: 480,
    height: 560,
    isPlaceholder: false,
  },

  stats: [
    { value: "81.5", label: "WAM, High Distinction average" },
    { value: "40+", label: "people on the DUCA team I manage" },
    { value: "10+", label: "DUCA events each trimester" },
    { value: "7", label: "industry sponsors I work with" },
  ],
};

export const about = {
  heading: "From cryptic hunts to running CTFs",
  paragraphs: [
    "I'm in my second year of a Bachelor of Cyber Security at Deakin University in Burwood, where I hold a WAM of 81.5. My units so far cover network security, security analytics and computer forensics.",
    "I got into security through puzzles. At school I was part of the CODE Club, where I competed in cryptic hunts at tech fests and later led the planning of Dcrypt, our own hunt for 450+ participants from 12 schools. Capture The Flag competitions were the natural next step, and these days I help run them at DUCA.",
    "I work best in collaborative teams. As DUCA Vice President I manage a team of 40+, follow up with each executive so events run on time, and handle communication between members, university staff and our 7 industry sponsors. Outside of uni I work at McDonald's, and I taught myself Figma, Framer and Notion along the way.",
  ],
};

export const education = [
  {
    qualification: "Bachelor of Cyber Security",
    institution: "Deakin University",
    location: "Burwood, VIC",
    dates: "Mar 2025 - Sep 2027 (expected)",
    result: { label: "WAM", value: "81.5", note: "High Distinction average" },
    units: [
      { code: "SIT325", name: "Advanced Network Security" },
      { code: "SIT384", name: "Cyber Security Analytics" },
      { code: "SIT282", name: "Computer Forensics and Investigations" },
      { code: "SIT223", name: "Professional Practices in IT" },
    ],
  },
  {
    qualification: "Year 12 (Senior Secondary)",
    institution: "Apeejay School",
    location: "Noida, India",
    dates: "2024",
    result: { label: "Result", value: "85%", note: "" },
    units: [],
  },
];



// Timeline entries, shown in this order (newest first).
export const experience = [
  {
    role: "Vice President",
    organisation: "Deakin University Cybersecurity Association (DUCA)",
    location: "Burwood",
    dates: "Sep 2025 - Present",
    type: "Leadership",
    points: [
      "Manage a team of 40+ people and follow up with each executive on their tasks so events run on time.",
      "Run 10+ events each trimester, mostly technical talks, guest lectures and CTFs, with around 80-100 people attending.",
      "Handle communication between members, university staff and our 7 industry sponsors.",
    ],
  },
  {
    role: "Open Day Ambassador",
    organisation: "Deakin University",
    location: "Burwood",
    dates: "Aug 2026",
    type: "Leadership",
    points: [
      "Showed prospective students and their families around campus and answered their questions about courses.",
    ],
  },
  {
    role: "Committee Member",
    organisation: "Deakin University Cybersecurity Association (DUCA)",
    location: "Burwood",
    dates: "Mar 2025 - Sep 2025",
    type: "Leadership",
    points: [
      "Helped organise CTF competitions, technical talks and guest lectures for members.",
    ],
  },
  {
    role: "Volunteer",
    organisation: "CodeDay",
    location: "Delhi, India",
    dates: "Sep 2024",
    type: "Volunteering",
    points: [
      "Ran technical workshops and mentored 500+ participants in 2 days.",
      "Helped teams work through technical problems during the event.",
    ],
  },
  {
    role: "Vice President (2023) and Senior Executive (2022)",
    organisation: "CODE Club, Apeejay School",
    location: "Noida, India",
    dates: "Apr 2022 - Apr 2024",
    type: "Leadership",
    points: [
      "Led the planning of Dcrypt, the club's main cryptic hunt event, for 450+ participants from 12 schools.",
      "Ran the club's social media (500+ followers) and was the link between members, teachers and school administration.",
    ],
  },
];

export const skills = [
  {
    group: "Security",
    items: ["Wireshark", "Nmap", "Kali Linux", "CTF problem solving"],
  },
  {
    group: "Programming & Web",
    items: [
      "Python",
      "C++",
      "C#",
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Next.js",
      "MySQL",
      "MongoDB",
      "Git/GitHub",
    ],
  },
  {
    group: "Tools",
    items: [
      "Figma",
      "Framer",
      "Notion",
      "WordPress",
      "DaVinci Resolve",
      "Microsoft Office",
    ],
  },
];

export const awards = [
  {
    title: "Crash Course on Python",
    issuer: "Google (Coursera)",
    date: "Aug 2024",
    kind: "Certificate",
    link: "https://www.coursera.org/account/accomplishments/records/6CCY1SHIGKI2",
    linkLabel: "View credential",
  },
    {
    title: "Using Python to Interact with the Operating System",
    issuer: "Google (Coursera)",
    date: "Nov 2024",
    kind: "Certificate",
    link: "https://www.coursera.org/account/accomplishments/verify/S92Z9U8E4DXH",
    linkLabel: "View credential",
  },
  {
    title: "2nd Place, Cryptic Hunt",
    issuer:
      "Silico Battles Tech Fest, Delhi. 25 teams competed and our school also won the overall trophy.",
    date: "Oct 2023",
    kind: "Award",
    link: "",
    linkLabel: "",
  },
  {
    title: "3rd Place, Cryptic Hunt",
    issuer: "Elithon Tech Fest, K.R. Mangalam World School, Greater Noida",
    date: "Sep 2022",
    kind: "Award",
    link: "",
    linkLabel: "",
  },
  {
    title: "3rd Place, Movie Making (video editing)",
    issuer: "Incognito Tech Fest, Somerville School, Noida",
    date: "Jun 2022",
    kind: "Award",
    link: "",
    linkLabel: "",
  },
];

export const contact = {
  heading: "Let's talk",
  text: "I'm looking for a cyber security internship or an entry-level SOC or IT support role. If you think I could be a good fit for your team, or you just want to chat about CTFs, send me an email.",
  email: "kapooraditya231@gmail.com",
  links: [
    {
      label: "LinkedIn",
      handle: "linkedin.com/in/adityakapoor23",
      href: "https://www.linkedin.com/in/adityakapoor23",
    },
    {
      label: "GitHub",
      handle: "github.com/Darkshadow023",
      href: "https://github.com/Darkshadow023",
    },
  ],
};

// Links in the top navigation. `id` must match a section id on the page.
export const navigation = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];
