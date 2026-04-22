// ─────────────────────────────────────────────────────────────
// src/data/index.ts
//
// THIS IS THE ONLY FILE YOU NEED TO EDIT to update your content.
// Add projects, change skills, update experience here.
// ─────────────────────────────────────────────────────────────

export type SkillGroup = "backend" | "frontend" | "data" | "devops" | "db";

export interface Skill {
  name: string;
  icon: string;
  level: "Familiar" | "Proficient" | "Advanced";
  pct: number; // 0–100
  group: SkillGroup;
}

export type ProjectFilter = "data" | "fullstack" | "dotnet";
export type ProjectStatus = "ongoing" | "complete" | "academic";

export interface Project {
  num: string;
  title: string;
  status: ProjectStatus;
  statusLabel: string;
  desc: string;
  tags: string[];
  filter: ProjectFilter;
  links: { label: string; href: string }[];
  images: { src: string; alt: string }[];
}

export interface Experience {
  date: string;
  type: string;
  role: string;
  company: string;
  bullets: string[];
  stack?: string[];
}

// ─── Skills ──────────────────────────────────────────────────
export const skills: Skill[] = [
  { name: "Python",       icon: "🐍", level: "Advanced",   pct: 88, group: "backend"  },
  { name: "C# / .NET",   icon: "⚙️",  level: "Advanced",   pct: 85, group: "backend"  },
  { name: "Java",         icon: "☕", level: "Advanced",   pct: 82, group: "backend"  },
  { name: "ASP.NET Core", icon: "🔷", level: "Advanced",   pct: 83, group: "backend"  },
  { name: "Spring Boot",  icon: "🍃", level: "Proficient", pct: 75, group: "backend"  },
  { name: "REST APIs",    icon: "🔌", level: "Advanced",   pct: 87, group: "backend"  },
  { name: "React.js",     icon: "⚛️",  level: "Proficient", pct: 70, group: "frontend" },
  { name: "Vue.js",       icon: "💚", level: "Proficient", pct: 72, group: "frontend" },
  { name: "PySpark",      icon: "⚡", level: "Proficient", pct: 74, group: "data"     },
  { name: "Databricks",   icon: "🧱", level: "Proficient", pct: 71, group: "data"     },
  { name: "Power BI",     icon: "📊", level: "Proficient", pct: 68, group: "data"     },
  { name: "Delta Lake",   icon: "🏔️", level: "Familiar",   pct: 65, group: "data"     },
  { name: "Pandas",       icon: "🐼", level: "Advanced",   pct: 82, group: "data"     },
  { name: "Docker",       icon: "🐳", level: "Proficient", pct: 73, group: "devops"   },
  { name: "GitLab CI/CD", icon: "🔄", level: "Proficient", pct: 72, group: "devops"   },
  { name: "Jira",         icon: "📋", level: "Advanced",   pct: 80, group: "devops"   },
  { name: "PostgreSQL",   icon: "🐘", level: "Advanced",   pct: 84, group: "db"       },
  { name: "SQL Server",   icon: "🗄️",  level: "Proficient", pct: 75, group: "db"       },
  { name: "Oracle DB",    icon: "🔴", level: "Familiar",   pct: 62, group: "db"       },
];

// ─── Projects ────────────────────────────────────────────────
export const projects: Project[] = [
  {
    num: "01",
    title: "SA Schools Analytics Pipeline",
    status: "complete",
    statusLabel: "Complete",
    desc: "End-to-end ETL pipeline using medallion architecture (bronze/silver/gold) on Databricks Community Edition. Power BI dashboards visualising SA school attendance and enrolment trends from 2009–2024.",
    tags: ["Python", "PySpark", "Databricks", "Delta Lake", "Power BI", "Star Schema"],
    filter: "data",
    links: [{ label: "GitHub ↗", href: "https://github.com/BCworkin/SA-Department-for-Education-Data-Project" }],
    images: [],
  },
  {
    num: "02",
    title: "LifeLedger — Gamify Your Life",
    status: "ongoing",
    statusLabel: "Ongoing",
    desc: "A gamification app turning daily goals into a simulation progression 'game'. Spring Boot backend, React frontend, PostgreSQL for persistent state — integrated with Claude AI.",
    tags: ["Java", "Spring Boot", "React", "Next.js", "PostgreSQL", "Claude AI"],
    filter: "fullstack",
    links: [{ label: "GitHub ↗", href: "https://github.com/BCworkin/lifeTracker" }],
    images: [],
  },
  {
    num: "03",
    title: "TERN Analytics Dashboard",
    status: "complete",
    statusLabel: "Complete",
    desc: "Led full product development of a data analytics dashboard for the Terrestrial Ecosystem Research Network. RESTful API design, Figma UX wireframing, Jira backlog management.",
    tags: ["Python", "Vue.js", "PostgreSQL", "Docker", "REST API", "Figma"],
    filter: "fullstack",
    links: [],
    images: [],
  },
  {
    num: "04",
    title: "SAPOL Traffic Expiations Dashboard",
    status: "academic",
    statusLabel: "Academic",
    desc: "ASP.NET Core dashboard for SAPOL mobile traffic detection data. Razor Pages with Entity Framework, WebAPI for graph data, SQL Server with LINQ — tested via SwaggerUI.",
    tags: ["ASP.NET Core", "C#", "Razor Pages", "Entity Framework", "SQL Server", "LINQ"],
    filter: "dotnet",
    links: [{ label: "GitHub ↗", href: "https://github.com/BCworkin/SAPOL-Traffic-Expiations-.NET" }],
    images: []
  },
];

// ─── Experience ──────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    date: "Mar – Jul 2025",
    type: "Internship",
    role: "Product Owner & Lead Developer",
    company: "TERN — Terrestrial Ecosystem Research Network",
    bullets: [
      "Led stakeholder consultation and translated outcomes into sprint goals with a structured Jira backlog.",
      "Implemented RESTful API endpoints for analytics visualisation based on client-defined metrics.",
      "Wireframed dashboard UX in Figma and coordinated code reviews before committing on GitLab.",
    ],
    stack: ["Python", "Vue.js", "PostgreSQL", "Docker", "REST API", "Figma", "Scrum"],
  },
  {
    date: "Feb 2023 – Nov 2024",
    type: "Volunteering",
    role: "UniMentor & Student Representative",
    company: "University of South Australia",
    bullets: [
      "Guided commencing students through IT program requirements and university services.",
      "Translated technical IT concepts for students and staff across other faculties.",
      "Liaised with Course Coordinators to ensure program alignment.",
    ],
  },
  {
    date: "2022 – 2025",
    type: "Education",
    role: "Bachelor of Information Technology",
    company: "University of South Australia",
    bullets: [
      "Software engineering, databases, algorithms, and systems architecture.",
      "Hands-on academic projects across Oracle SQL, .NET, and full-stack web development.",
      "Taught SOLID principles for System Design, CRUD principles for Data."
    ],
  },
];

// ─── Ticker ───────────────────────────────────────────────────
export const tickerItems: string[] = [
  "Full Stack Engineer",
  "Data Engineer",
  "Product Thinker",
  "Python · C# · Java",
  "PySpark · Databricks",
  "Vue.js · React",
  "PostgreSQL · Docker",
  "AWS SAA In Progress",
  "Adelaide · South Australia",
];
