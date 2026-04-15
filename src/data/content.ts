import type { Stat, Skill, ExperienceItem, Project, ContactLink, TagStyle } from "../types";

export const COLORS = {
  bg: "#FFFFFF",
  surface: "#F9FAFB",
  surface2: "#F3F4F6",
  border: "#E5E7EB",
  text: "#111827",
  muted: "#6B7280",
  accent: "#2563EB",
  accent2: "#7C3AED",
  green: "#16A34A",
  greenBg: "#F0FDF4",
  greenBorder: "#BBF7D0",
};

export const STATS: Stat[] = [
  { num: "7+", label: "Years Experience" },
  { num: "2M+", label: "Users Served" },
  { num: "5+", label: "Countries" },
  { num: "$1B+", label: "Transactions Enabled" },
];

export const SKILLS: Skill[] = [
  {
    icon: "🤖",
    title: "AI Engineering",
    color: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
    tags: ["RAG Systems", "LLM Integration", "AI Agents", "MCP Servers", "Vector DBs", "Prompt Engineering"],
  },
  {
    icon: "⚙️",
    title: "Languages & Backend",
    color: "#2563EB",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    tags: ["Python", "FastAPI", "Java", "Go", "Kotlin", "TypeScript", "Spring Boot", "NumPy", "pandas", "Microservices", "Apache Camel"],
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    color: "#C2410C",
    bg: "#FFF7ED",
    border: "#FED7AA",
    tags: ["AWS", "Azure", "Kubernetes", "OpenShift", "Docker", "GitLab CI", "Jenkins"],
  },
  {
    icon: "🔌",
    title: "Integration & APIs",
    color: "#15803D",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    tags: ["WSO2 API Manager", "Amazon API Gateway", "Kafka", "ActiveMQ", "REST APIs"],
  },
  {
    icon: "🗄️",
    title: "Databases",
    color: "#B45309",
    bg: "#FFFBEB",
    border: "#FDE68A",
    tags: ["PostgreSQL", "DynamoDB", "Redis", "Oracle", "MySQL", "MongoDB"],
  },
  {
    icon: "📊",
    title: "Observability",
    color: "#0E7490",
    bg: "#ECFEFF",
    border: "#A5F3FC",
    tags: ["Grafana", "Prometheus", "ELK Stack"],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "AI Innovations Specialist – Software Engineering",
    company: "Crossover / IgniteTech (Khoros)",
    location: "Remote",
    period: "2024 – Present",
    award: null,
    bullets: [
      "Engineering Python/FastAPI backend services for IRIS AI — Khoros's AI-native omnichannel social media management platform serving enterprise brands",
      "Building real-time Kafka streaming pipelines to ingest and process billions of social signals across 187 languages for sentiment analysis and intelligent routing",
      "Designing DynamoDB data models and Redis caching layers powering high-throughput social engagement and brand care workflows",
      "Integrating LLMs for AI-driven sentiment analysis, response generation, content scheduling, and automated interaction triage across channels including Instagram, LinkedIn, TikTok, YouTube, and Facebook",
      "Developing data processing pipelines with NumPy and pandas to surface actionable analytics and community health insights for enterprise clients",
    ],
    tags: ["Python", "FastAPI", "Kafka", "DynamoDB", "Redis", "LLM", "AI Agents", "AWS"],
  },
  {
    role: "Senior Software Engineer (IC)",
    company: "Safaricom",
    location: "Nairobi, Hybrid",
    period: "2023 – 2025",
    award: null,
    bullets: [
      "Built backend for DigiFarm — serving 2M+ farmers across 700+ cooperatives",
      "Designed credit scoring models from produce delivery & transaction history",
      "Enabled KES 1B+ in agricultural loans via Access Bank infrastructure",
      "Developed integrations connecting farmer data, payments & financial partners",
    ],
    tags: ["Java", "Python", "Spring Boot", "Apache Camel", "AWS", "OpenShift", "PostgreSQL"],
  },
  {
    role: "Lead Integrations Engineer",
    company: "NBC Tanzania",
    location: "Remote",
    period: "Apr – Oct 2023",
    award: null,
    bullets: [
      "Exposed Oracle Flexcube core banking as REST APIs via WSO2 API Manager",
      "Reduced incident response time by 30% through monitoring infrastructure",
      "Enabled agency banking and merchant digital banking channels",
      "Designed CI/CD pipelines and containerized deployments on OpenShift",
    ],
    tags: ["Java", "Spring Boot", "WSO2", "OpenShift", "ELK Stack", "Grafana"],
  },
  {
    role: "Application Developer",
    company: "KCB Group",
    location: "Nairobi",
    period: "2022 – 2023",
    award: "🏆 Unsung Hero Award",
    bullets: [
      "Maintained uninterrupted services for 1M+ customers during KCB–BPR merger",
      "Built cross-institutional APIs integrating banking systems across two countries",
      "Implemented API management infrastructure using WSO2 API Manager",
    ],
    tags: ["Java", "Go", "WSO2", "Azure", "ActiveMQ"],
  },
];

export const PROJECTS: Project[] = [
  {
    icon: "🔮",
    title: "IRIS AI – Social Media Intelligence",
    metric: "Billions of signals · 187 languages · Real-time AI",
    desc: "Backend engineering for Khoros's AI-native omnichannel social media platform. Kafka pipelines ingest social signals at scale; FastAPI services power LLM-driven sentiment analysis, response generation, and intelligent agent routing across Instagram, LinkedIn, TikTok, YouTube, and Facebook.",
    tags: ["Python", "FastAPI", "Kafka", "DynamoDB", "Redis", "LLM"],
    badges: ["AI", "social-tech"],
  },
  {
    icon: "🌾",
    title: "DigiFarm Credit Platform",
    metric: "KES 1B+ loans · 2M+ farmers",
    desc: "Credit scoring engine using produce delivery & transaction history, with loan disbursement infrastructure connecting farmers to Access Bank financial services.",
    tags: ["Java", "Spring Boot", "AWS", "PostgreSQL"],
    badges: ["fintech", "agri-tech"],
  },
  {
    icon: "🤖",
    title: "AI Defect Detection Pipeline",
    metric: "RAG + vector search · CI/CD integrated",
    desc: "End-to-end pipeline using Retrieval Augmented Generation to autonomously detect and resolve defects in live telecom billing infrastructure.",
    tags: ["RAG", "Vector DB", "Java", "GitLab CI"],
    badges: ["AI", "telecom"],
  },
  {
    icon: "🏦",
    title: "KCB–BPR Merger Integration",
    metric: "1M+ customers · Zero downtime",
    desc: "Cross-institutional API integration layer enabling seamless banking continuity during the KCB and BPR Rwanda merger across two countries.",
    tags: ["Go", "WSO2", "Azure", "Kafka"],
    badges: ["banking", "integration"],
  },
  {
    icon: "📡",
    title: "NBC Core Banking API Layer",
    metric: "30% faster incident response",
    desc: "Enterprise middleware exposing Oracle Flexcube as secure REST APIs via WSO2, enabling digital and agency banking channels across Tanzania.",
    tags: ["Java", "WSO2", "OpenShift", "ELK"],
    badges: ["banking", "APIs"],
  },
  {
    icon: "🚀",
    title: "Autonomous Dev Agents",
    metric: "Self-healing pipelines · Accelerated delivery",
    desc: "AI agents that autonomously identify bugs and generate fixes within CI/CD pipelines, reducing manual intervention in telecom billing systems.",
    tags: ["AI Agents", "LLM", "Java", "Jenkins"],
    badges: ["AI", "automation"],
  },
  {
    icon: "💳",
    title: "Fintech Integration Platform",
    metric: "Multi-solution · Containerized",
    desc: "Microservices platform connecting financial institutions, fintech partners and payment providers with secure cross-platform data exchange.",
    tags: ["Go", "Java", "Kubernetes", "WSO2"],
    badges: ["fintech", "microservices"],
  },
];

export const CONTACT_LINKS: ContactLink[] = [
  { icon: "✉️", label: "muchirinephat5@gmail.com", href: "mailto:muchirinephat5@gmail.com" },
  { icon: "📞", label: "+254 741 574 821", href: "tel:+254741574821" },
  { icon: "💼", label: "linkedin.com/in/nephat-mutugi", href: "https://linkedin.com/in/nephat-mutugi/" },
  { icon: "📍", label: "Nairobi, Kenya · Remote-first", href: null },
];

export const TAG_MAP: Record<string, TagStyle> = {
  // AI / ML
  RAG: { color: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE" },
  "AI Agents": { color: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE" },
  "Vector DB": { color: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE" },
  LLM: { color: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE" },
  // Languages & frameworks
  Java: { color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE" },
  Go: { color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE" },
  Python: { color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE" },
  FastAPI: { color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE" },
  NumPy: { color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE" },
  pandas: { color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE" },
  "Spring Boot": { color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE" },
  WSO2: { color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE" },
  // Cloud & DevOps
  AWS: { color: "#C2410C", bg: "#FFF7ED", border: "#FED7AA" },
  Azure: { color: "#C2410C", bg: "#FFF7ED", border: "#FED7AA" },
  Kubernetes: { color: "#C2410C", bg: "#FFF7ED", border: "#FED7AA" },
  OpenShift: { color: "#C2410C", bg: "#FFF7ED", border: "#FED7AA" },
  "GitLab CI": { color: "#C2410C", bg: "#FFF7ED", border: "#FED7AA" },
  Jenkins: { color: "#C2410C", bg: "#FFF7ED", border: "#FED7AA" },
  // Data & Streaming
  Kafka: { color: "#B45309", bg: "#FFFBEB", border: "#FDE68A" },
  Redis: { color: "#B45309", bg: "#FFFBEB", border: "#FDE68A" },
  DynamoDB: { color: "#B45309", bg: "#FFFBEB", border: "#FDE68A" },
  PostgreSQL: { color: "#15803D", bg: "#F0FDF4", border: "#BBF7D0" },
  // Observability
  ELK: { color: "#0E7490", bg: "#ECFEFF", border: "#A5F3FC" },
  "ELK Stack": { color: "#0E7490", bg: "#ECFEFF", border: "#A5F3FC" },
  Grafana: { color: "#0E7490", bg: "#ECFEFF", border: "#A5F3FC" },
};

export const DEFAULT_TAG: TagStyle = { color: "#374151", bg: "#F3F4F6", border: "#E5E7EB" };
