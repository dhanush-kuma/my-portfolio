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
  role: "SYSTEM_ARCHITECT",
  roleSubtitle: "Scalable Infrastructure. High Precision.",
  availabilityStatus: "Available for Architecture Audits",
  bio: "I specialize in building distributed systems that handle millions of requests with sub-millisecond latency. My approach combines rigorous engineering discipline with a developer-first philosophy to create robust, maintainable backend environments.",
  location: "Berlin, DE",
  focusAreas: ["Microservices", "UI/UX"],
  statusMessage: "Available for hire",
  resumeUrl: "https://example.com/dhanush-resume.pdf",
  trustedBy: ["NEXUS_CORE", "GRID_SYSTEMS", "SYNC_LABS"],
  systemHealth: "System_Health: 99.9%_UPTIME",
  email: "dhanush64b@gmail.com",
  linkedinMessageUrl: "https://linkedin.com/in/dhanush-kumar/message",
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
  title: "Distributed Systems",
  description: "Building resilient infrastructures using Kubernetes, Terraform, and Go for global scale.",
  skills: ["Kubernetes", "Terraform", "Go"],
};

export const otherExpertise: SkillBox[] = [
  {
    title: "Data Architecture",
    description: "Optimizing PostgreSQL and Redis at PB scale.",
    icon: "database",
  },
  {
    title: "Security First",
    description: "Implementing Zero Trust and IAM best practices.",
    icon: "security",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend_Infrastructure",
    icon: "dns",
    skills: ["Node.js", "GoLang", "Python", "GraphQL", "PostgreSQL", "Redis"],
  },
  {
    title: "Frontend_Architecture",
    icon: "layers",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer_Motion"],
  },
  {
    title: "DevOps_Cloud",
    icon: "terminal",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Senior Systems Architect",
    company: "TechNexus Solutions",
    duration: "2021 — PRESENT",
    description: "Spearheaded the migration of monolithic legacy systems to a cloud-native microservices architecture. Optimized data pipeline performance by 40% using specialized Kafka implementations and Go-based micro-engines.",
    skills: ["Kubernetes", "GoLang", "AWS", "PostgreSQL"],
  },
  {
    role: "Full Stack Developer",
    company: "Quantum Dynamics",
    duration: "2018 — 2021",
    description: "Developed high-fidelity real-time dashboarding tools for financial analysis. Implemented secure OAuth2 flows and built high-performance React frontends with complex state management.",
    skills: ["React", "Node.js", "Redis", "TypeScript"],
  },
  {
    role: "Junior Software Engineer",
    company: "Binary Tree Labs",
    duration: "2016 — 2018",
    description: "Refined internal API documentation and maintained core PHP backends. Assisted in the transition of static assets to a centralized CDN, improving load times for 2M+ users.",
    skills: ["Python", "MySQL", "Docker"],
  },
];

export const projects: Project[] = [
  {
    title: "Distributed Mesh Engine",
    tag: "systems / cloud-orchestrator",
    description: "A highly-available service mesh designed for Kubernetes environments, optimizing cross-region latency by 40% through intelligent traffic routing and mTLS encryption.",
    tech: ["Go", "gRPC", "Docker", "Prometheus"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLF66iLWCQtaCKXFBB3way-JDF55MElTzEEFxbCqL6xLHC281FjgeMUPi-hCS6dzH5Q76k3sXyUa2rcTxRdVeBKvSnAY1_40ePuGjUXKx44Aux7aIgO_oSyibpOl3vaEvkNnswLfRKaivsEG2OyxGOsH90txOr3cBsOjmwjrfT8RAA7YHHq_2WN9tgnR7QMbWk02dfXmGMFpujg5JZQB1k4QjScDjW_wH6Qv5x8Xqi5w4M1HQ8a7fZUbwkSJzSsX4l38g1DtiZ6Q",
    imageAlt: "A high-resolution screenshot of a complex developer dashboard showing real-time network traffic analytics in deep blue and cyan neon tones. The interface features intricate data visualizations, lines of code, and architectural diagrams. The lighting is dark and professional, reflecting a high-fidelity software engineering environment with a minimalist tech aesthetic.",
    isFeatured: true,
    featuredLabel: "Featured_System",
    links: [
      { label: "VIEW_CODE", url: "#", icon: "terminal" },
      { label: "LIVE_DEMO", url: "#", icon: "open_in_new" },
    ],
  },
  {
    title: "Neural Kernel UI",
    tag: "web / ai-interface",
    description: "A low-latency dashboard for monitoring large language model inference costs and token usage across multiple providers.",
    tech: ["React", "Vercel"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLYG00S1ZeSYwwVLV2hplHNfmCi1SDYxash1gBpoWVIScR8SpTGvVOUgQ1B4gPAC-vTVlYJPkZMhkEYyTz7GBo8zf0nkh9OhdFeFjFm-j8N_MhFlRjNK-ccBZSyovlxZNVZ0BubuYJEyRJ1YZx5NKcyfnFMd5oZMa3fG3S5cxMRweUFySo-69f2h8ibbkSsod4eDx3IXqRI95-w48TFT9OWXnV0Bx1uPCBesivFsTDCTBJ3QnVMcfohKvUik5r6N7t52lj3JIVXA",
    imageAlt: "Close up of a sleek digital interface displaying neural network nodes and data streams in glowing cyan and white. The background is a deep charcoal texture. The visual style is strictly minimalist and focused on technical data accuracy, with soft blue lighting emanating from the interface elements.",
    links: [
      { label: "Github", url: "#" },
      { label: "Preview", url: "#" },
    ],
  },
  {
    title: "CryptoVault Mobile",
    tag: "mobile / rust-core",
    description: "A cross-platform crypto-wallet built with a custom Rust-based core for performance and hardware-level security integration.",
    tech: ["Rust", "Flutter"],
    image: "", // Placeholder or not used since the second card has no image in JSX, but we keep the structure flexible
    imageAlt: "",
    links: [
      { label: "Docs", url: "#" },
      { label: "Repo", url: "#" },
    ],
  },
  {
    title: "StreamQuant API",
    tag: "api / analytics",
    description: "Real-time stock sentiment analysis API processing 10k messages/second from social data streams with 98% accuracy.",
    tech: ["Python", "Kafka"],
    image: "",
    imageAlt: "",
    links: [
      { label: "Specs", url: "#" },
      { label: "Github", url: "#" },
    ],
  },
  {
    title: "Zero-Trust Auth",
    tag: "infrastructure / ops",
    description: "Internal identity provider implementing zero-trust principles for corporate microservices with OIDC support.",
    tech: ["Terraform", "AWS"],
    image: "",
    imageAlt: "",
    links: [
      { label: "Diagrams", url: "#" },
      { label: "Case_Study", url: "#" },
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
  { name: "LinkedIn", icon: "groups", url: "https://linkedin.com/in/dhanush-kumar" },
  { name: "Leetcode", icon: "code", url: "https://leetcode.com/u/dhanush-kuma" },
];
