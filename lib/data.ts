export interface Profile {
  name: string;
  role: string;
  roleSubtitle: string;
  availabilityStatus: string;
  bio: string;
  location: string;
  focusAreas: string[];
  statusMessage: string;
  resumeUrl: string;
  trustedBy: string[];
  systemHealth: string;
  email: string;
  linkedinMessageUrl: string;
}

export interface TerminalMetrics {
  uptime: string;
  latency: string;
  nodes: string;
  errors: number | string;
  cursorCommand: string;
  sshTarget: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface SkillBox {
  title: string;
  description: string;
  icon?: string;
  skills?: string[];
  badgeColor?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
  icon?: string;
}

export interface Project {
  title: string;
  tag: string;
  description: string;
  tech: string[];
  image: string;
  imageAlt: string;
  isFeatured?: boolean;
  featuredLabel?: string;
  links: ProjectLink[];
}

export interface BlogPost {
  title: string;
  category: string;
  date?: string;
  description: string;
  readTime: string;
  image: string;
  imageAlt: string;
  link: string;
  isFeatured?: boolean;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

// ----------------------------------------------------
// Actual Portfolio Data
// ----------------------------------------------------

export const profile: Profile = {
  name: "Dhanush Kumar",
  role: "Backend Engineer",
  roleSubtitle: "Scalable Infrastructure. High Precision.",
  availabilityStatus: "Available for Hire",
  bio: "I build reliable web applications and backend services with a focus on performance and developer experience. Experienced with building scalable systems, APIs, and databases; familiar with distributed systems patterns.",
  location: "Kochi, Kerala",
  focusAreas: ["Cloud", "Microservices", "UI/UX"],
  statusMessage: "Available for Hire",
  resumeUrl: "https://drive.google.com/file/d/1eeC5DV_IQbpxsx9JkNMGNqPVs1JkAQte/view",
  trustedBy: ["Itinges", "MMMR"],
  systemHealth: "System_Health: 99.9%_UPTIME",
  email: "dhanush64b@gmail.com",
  linkedinMessageUrl: "https://www.linkedin.com/in/dhanush-kuma/message",
};

export const terminalMetrics: TerminalMetrics = {
  sshTarget: "ssh developer@arch-v4.remote",
  uptime: "99.998%",
  latency: "12ms",
  nodes: "124 Active",
  errors: "0",
  cursorCommand: "initializing_architecture",
};

export const coreExpertise: SkillBox = {
  title: "Full Stack Development",
  description:
    "Building scalable web applications with Next.js, backend systems in PHP, Python, and Go, along with cloud storage and deployment using AWS S3.",
  skills: ["Next.js", "PHP", "Python", "Go", "AWS S3"],
};

export const otherExpertise: SkillBox[] = [
  {
    title: "Backend Engineering",
    description:
      "Designing REST APIs, authentication systems, and scalable server-side architectures.",
    icon: "database",
  },
  {
    title: "Cloud & Deployment",
    description:
      "Managing cloud storage, deployments, and application infrastructure with AWS services.",
    icon: "cloud",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend_Infrastructure",
    icon: "dns",
    skills: ["PHP", "Python", "GoLang", "SQL", "NoSQL"],
  },
  {
    title: "Frontend_Architecture",
    icon: "layers",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "TailwindCSS", "Next.js", "Bootstrap"],
  },
  {
    title: "DevOps_Cloud",
    icon: "terminal",
    skills: ["AWS", "Docker", "Kubernetes"],
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Software Developer",
    company: "Itinges Technologies Pvt Ltd",
    duration: "FEB 2025 — PRESENT",
    description: "Led the migration of critical application storage to Amazon S3, significantly enhancing durability and cost efficiency. Drove core development for a high-impact B2B2C module, designed a suite of robust RESTful APIs, implemented an auditable double-entry accounts module, and built a microservice for output generation while utilizing AI-assisted workflows to accelerate feature delivery.",
    skills: ["Next.js", "PHP", "AWS S3", "REST APIs", "Microservices", "System Design"],
  },
  {
    role: "Freelance",
    company: "MMMR",
    duration: "NOV 2024 — JAN 2025",
    description: "Designed, developed, and deployed the complete public-facing web platform for MMMR, a premier medical research writing enterprise, establishing their primary digital presence. Engineered a high-performance, responsive user interface with optimized SEO and accessibility, resulting in superior lighthouse scores and user retention. Managed end-to-end cloud hosting, DNS configuration, and deployment pipelines to guarantee 100% system availability.",
    skills: ["HTML", "CSS", "JavaScript", "SEO", "Cloud Hosting"],
  },
  {
    role: "AI Engineer",
    company: "HeadStarter",
    duration: "JUL 2024 — AUG 2024",
    description: "Participated in a fast-paced Software Engineering Fellowship, collaborating with international developers to architect and build innovative full-stack and AI-driven projects. Engineered multiple scalable web applications using modern web technologies, implemented advanced AI integrations, and practiced agile methodologies with global engineering teams.",
    skills: ["Next.js", "AI Integration", "Git", "Teamwork"],
  },
];

export const projects: Project[] = [
  {
    title: "Internal Wallet Service",
    tag: "backend / fintech",
    description: "A highly-concurrent, double-entry wallet service demonstrating idempotent transactions and deadlock-safe account transfers under heavy load. Engineered for strict ACID compliance and high throughput.",
    tech: ["Go", "PostgreSQL", "Docker", "Railway"],
    image: "",
    imageAlt: "A sleek developer dashboard visualizing network traffic and transaction throughput for high-concurrency systems, displaying metrics in shades of neon cyan and deep slate.",
    isFeatured: true,
    featuredLabel: "Featured_Backend",
    links: [
      { label: "Github", url: "https://github.com/dhanush-kuma/wallet-service" },
    ],
  },
  {
    title: "EEG Schizophrenia Detector",
    tag: "ml / healthcare",
    description: "A specialized Machine Learning pipeline and Convolutional Neural Network (CNN) model designed to identify and classify Schizophrenia using EEG brain activity signals, featuring a clean Tkinter control dashboard.",
    tech: ["Python", "CNN", "Kaggle", "Tkinter"],
    image: "",
    imageAlt: "Close up of a sleek brain neural connectivity interface and glowing signal paths in deep charcoal and neon blue lighting.",
    links: [],
  },
  {
    title: "Intellect",
    tag: "web / management-system",
    description: "A comprehensive institutional management system with automated workflows, administrative dashboards, and secure record tracking built over a scalable cloud-hosted MongoDB database.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "NoSQL"],
    image: "",
    imageAlt: "",
    links: [],
  },
  {
    title: "LedEx Delivery Engine",
    tag: "desktop-app / logistics",
    description: "A delivery management and dispatch platform featuring distinct client, delivery partner, and end-customer apps. Integrated with real-time package tracking and multi-tier database coordination.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL", "Electron.js"],
    image: "",
    imageAlt: "",
    links: [],
  },
  {
    title: "Bookmark OAuth Service",
    tag: "web / productivity",
    description: "A clean, production-ready bookmark manager featuring secure authentication, user-specific data isolation, real-time client state listeners, and component-based routing.",
    tech: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
    image: "",
    imageAlt: "",
    links: [
      { label: "Github", url: "https://github.com/dhanush-kuma/bookmark-oauth" },
    ],
  },
  {
    title: "GitHub Webhook Tracker",
    tag: "api / devtools",
    description: "A lightweight Flask-based tracker that listens for GitHub webhook payloads (Push, Pull, and Merge Requests), parses and stores event data in MongoDB, and presents real-time updates via a clean web UI.",
    tech: ["Flask", "Python", "MongoDB", "ngrok"],
    image: "",
    imageAlt: "",
    links: [
      { label: "Github", url: "https://github.com/dhanush-kuma/webhook-repo" },
    ],
  },
];

export const blogs: BlogPost[] = [
  {
    title: "Implementing Event-Driven Architectures in High-Scale FinTech Systems",
    category: "SYSTEM_DESIGN",
    date: "MARCH 14, 2024",
    description: "A deep dive into the challenges of maintaining data consistency and low latency in distributed transaction systems using Apache Kafka and Event Sourcing patterns.",
    readTime: "12 MIN_READ",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1riyEoyj0kCvJXnXCYRYUvP4znF7UzpsKfjwnhW90N9ffHBVIgc6KS3jTEvFbKz70nxOfR-O0IlMFUPfmH-qG6QyFQONzCYcI50gVs5WRr7C8HNMuK2V4iMe7VdRvhx469LeCMEpaFGz8VYwhMh2rg_pg9N1P22IhWo5fSxco5aNc2-2Ps4Z8pjyrGhv7xKb1zhI4CwIHDv35o2PrgaRHDYZe2fME_JwQE9rAiH2_JXaz4LdWu8pGi-l08FsMcPF5fbxrG-BM7Q",
    imageAlt: "Featured Article Header",
    link: "#",
    isFeatured: true,
  },
  {
    title: "Micro-Frontends: Scaling Large React Applications",
    category: "FRONTEND_ARCHITECTURE",
    description: "Evaluating Module Federation as a solution for decoupling monolithic frontend architectures without sacrificing user experience or developer productivity.",
    readTime: "8 MIN_READ",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKDiPvy3aIYjoCU_jTGFbK5jJei8cU5JejFAoPPStxB-AzuNTk8uSpu-NjUzHwrvSAYiIh7pijQCT-Mi0H0qVzhs7SNRIxSQ8MHtw-tHOi9zwQBC7QPJdptkqvWe2_2Btwg6zqASBho8JyQaaZcsqq3eROn8Tzoyv-P_Bm8YIG7lA-6fhDBc_afbGZ6lu_5H7tGUIPD4bmjpUgbhM5f-b1VFY-5XX2waycC8-563YGXdEiKocyZd9UA0RfwtI4sdvPN7n2nqyZTw",
    imageAlt: "Frontend Architecture",
    link: "#",
  },
  {
    title: "Zero-Downtime Deployments with Kubernetes Operators",
    category: "DEVOPS",
    description: "How to leverage custom controllers to automate complex stateful application updates while maintaining 99.99% availability.",
    readTime: "10 MIN_READ",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcMCjBMcknk6cih72k2D_v9TknPLNGaGuxvPZKmc9EeILHo_mWmDsF96DyryftN0uMPY0zTp3ueOiGOGrCisZhve9gtvJs0UvWKwSPxG19wMKI8xDb4rpGO22MqM-ziEwfq7TUjR9ObLTMA5q51hIcd7mw2wultuW5foc2LrIThQ_O5Yp_-lA19CacFo7l3CLhoNYacja15hFgN5GKmW3e9kguKJwr0d7Jo-SKxf5-lb1EEvHIl3PENRJMD8rxTyYq3dKS9c8u7g",
    imageAlt: "DevOps Automation",
    link: "#",
  },
  {
    title: "Rust vs. Node.js: Comparing CPU-Bound Performance",
    category: "PERFORMANCE",
    description: "Benchmarking data processing speeds across different runtimes and understanding when the overhead of Rust pays for itself.",
    readTime: "15 MIN_READ",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtFEM1fcLISLD-I1Cb7ToTpzp2gMVrR9DymCsCVzdQC4TR8-TTszNJQmC4nlC6shzUw3A3lseMVwg-X30EcDeqjb4Y7jExVa3Hg7oZSmepohYApb-6FGc-I8nEbfLP-E6Ve1GPVD_Wl5u2nZ9CNjPON25DwLnmt4Yrqf6Y9DYmZQebFQPfy-g0TgJd0I19zQYUSqhLbZV08Nrv4y5-U8KypBRVGJPFtnqyMkWLrlgvqTzuiIPtAncpUEmKW9rmF8vfNnOyPK0sIQ",
    imageAlt: "Rust Web Development",
    link: "#",
  },
];

export const socials: SocialLink[] = [
  { name: "Github", icon: "terminal", url: "https://github.com/dhanush-kuma" },
  { name: "LinkedIn", icon: "groups", url: "https://www.linkedin.com/in/dhanush-kuma/" },
  { name: "Leetcode", icon: "code", url: "https://leetcode.com/u/dkf566/" },
];
