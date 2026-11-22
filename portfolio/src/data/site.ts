export const site = {
  name: "Chinmoy Sarkar",
  shortName: "Chinmoy",
  domain: "chinmaysarkar.com",
  url: "https://chinmaysarkar.com",
  title: "Backend & Cloud Engineer",
  headline: "Building scalable, maintainable, AI-integrated systems.",
  intro:
    "I'm a Backend & Cloud Engineer based in Cumilla, Bangladesh. I design APIs, ship full-stack web apps and wire AI into real products, with a focus on code that stays easy to run and easy to change.",
  location: "Cumilla, Bangladesh",
  email: "chinmoy6667@gmail.com",
  // International format, digits only (Bangladesh +880).
  whatsapp: "8801330398782",
  links: {
    github: "https://github.com/chinmoy567",
    linkedin: "https://www.linkedin.com/in/chinmoy6667/",
    facebook: "https://www.facebook.com/chinmoy.sarkar.127818",
    x: "https://x.com/sarkar33581",
  },
};

export const mailHref = `mailto:${site.email}?subject=${encodeURIComponent(
  "Hello Chinmoy, I found you via your portfolio",
)}`;

export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hi Chinmoy, I found your portfolio and would like to talk.",
)}`;

export const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: "34+", label: "Public repositories" },
  { value: "6", label: "Featured projects" },
  { value: "2026", label: "BSc CSE graduate" },
];

export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    name: "AI Medical Chatbot",
    blurb: "A conversational assistant that answers health-related questions using AI.",
    tags: ["Python", "AI"],
    href: "https://github.com/chinmoy567/AI-Medical-Chatbot",
  },
  {
    name: "Markdown Diagram Extraction & Editor",
    blurb:
      "Extracts every Mermaid and ASCII diagram from Markdown files and makes them editable, draw.io style.",
    tags: ["JavaScript", "Mermaid", "Web App"],
    href: "https://github.com/chinmoy567/Markdown-Diagram-Extraction-and-Editable-Diagram-Web-App",
  },
  {
    name: "ShasthoSheba",
    blurb: "Healthcare web app built for the BAIUST CSE Fall Fest 2025 Hackathon.",
    tags: ["EJS", "Node.js", "Hackathon"],
    href: "https://github.com/chinmoy567/ShasthoSheba-WebApp-BAIUST-CSE-FallFest-Hackathon2025",
  },
  {
    name: "Anti-Kuddus Protocol",
    blurb: "Hackathon 2026 project built end to end under time pressure.",
    tags: ["JavaScript", "Hackathon"],
    href: "https://github.com/chinmoy567/Hackathon-2026-Anti-Kuddus-Protocol",
  },
  {
    name: "Teleoperation Review Paper",
    blurb:
      "A systematic review of teleoperation, human-robot collaboration and autonomous approaches.",
    tags: ["Research", "Robotics", "HTML"],
    href: "https://github.com/chinmoy567/ReviewPaper_A-Systematic-Review-of-Teleoperation-Human-Robot-Collaboration-and-Autonomous-Approaches",
  },
  {
    name: "ROBORT Codebase",
    blurb: "Code and write-up supporting the robotics research work.",
    tags: ["Robotics", "TeX"],
    href: "https://github.com/chinmoy567/ROBORT-CODEBASE",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "Authentication", "Socket.IO"] },
  { group: "Cloud & Tools", items: ["AWS", "Cloudflare", "Git & GitHub", "Docker basics"] },
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { group: "AI", items: ["AI integration", "Chatbots", "LLM APIs"] },
];

export const education = [
  {
    school: "Bangladesh Army International University of Science and Technology (BAIUST)",
    degree: "BSc, Computer Science and Engineering",
    period: "Oct 2022 – Sep 2026",
  },
  {
    school: "Meah Bazar College, Cumilla",
    degree: "Higher Secondary Certificate (HSC), Science",
    period: "2018 – 2020",
  },
  {
    school: "Cumilla Modern High School",
    degree: "Secondary School Certificate (SSC), Science",
    period: "2014 – 2018",
  },
];
