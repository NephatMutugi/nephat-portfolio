import type { Stat, Skill, ExperienceItem, Project, ContactLink, TagStyle } from "../types";

export const COLORS = {
  bg: "#0F172A",
  surface: "#1E293B",
  surface2: "#334155",
  border: "#334155",
  text: "#F1F5F9",
  muted: "#94A3B8",
  accent: "#60A5FA",
  accent2: "#A78BFA",
  green: "#4ADE80",
  greenBg: "rgba(74,222,128,.1)",
  greenBorder: "rgba(74,222,128,.25)",
};

export const STATS: Stat[] = [
  { num: "7+", label: "Years Experience" },
  { num: "5M+", label: "Users Served" },
  { num: "5+", label: "Countries" },
  { num: "$5B+", label: "Transactions Enabled" },
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
    title: "Languages & Frameworks",
    color: "#2563EB",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    tags: ["Python", "FastAPI", "Java", "Go", "Kotlin", "TypeScript", "Spring Boot", "NumPy", "pandas", "Microservices", "Apache Camel"],
  },
  {
    icon: "🎨",
    title: "Frontend & UI",
    color: "#0891B2",
    bg: "#ECFEFF",
    border: "#A5F3FC",
    tags: ["React", "Angular", "TypeScript", "HTML/CSS", "Responsive Design"],
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
    title: "Data & Observability",
    color: "#B45309",
    bg: "#FFFBEB",
    border: "#FDE68A",
    tags: ["PostgreSQL", "DynamoDB", "Redis", "Oracle", "MySQL", "MongoDB", "Grafana", "Prometheus", "ELK Stack"],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "AI Innovation Specialist",
    company: "IgniteTech",
    location: "Remote",
    period: "Apr 2026 – Present",
    award: null,
    bullets: [
      "Architecting and deploying AI-driven systems that cut development timelines, reduce errors, and deliver solutions with scalability across IgniteTech's product portfolio",
      "Fine-tuning LLMs to build new AI-powered products and modules integrated into existing solutions or forming the foundation of new offerings",
      "Building full-stack features with React frontends and Python/Node.js backends, automating internal workflows using advanced AI techniques",
      "Leveraging multiple LLMs (GPT, Claude, Mistral) and GenAI code assistants to accelerate full-stack development and continuous delivery",
    ],
    tags: ["Python", "TypeScript", "React", "Node.js", "LLM", "AI Agents", "FastAPI"],
  },
  {
    role: "AI-First Java Developer",
    company: "Skyvera",
    location: "Remote",
    period: "2024 – Mar 2026",
    award: null,
    bullets: [
      "Built and managed large-scale BSS/OSS platforms for Tier-1 telecom operators, serving millions of subscribers across multiple markets",
      "Led a team owning the full lifecycle of a cloud-native BSS/OSS suite spanning billing & revenue management, work order management, policy & charging control, service order provisioning, mediation, CRM, and campaign management",
      "Engineered high-throughput billing and mediation pipelines processing hundreds of millions of charging events daily with sub-second latency using Java, Kafka, and OpenShift",
      "Designed and delivered microservices for service order provisioning and policy & charging control (PCRF/PCF), integrating with 3GPP-compliant network elements across Tier-1 operator environments",
      "Applied AI-first development practices — using LLM-powered tooling and autonomous agents to accelerate delivery, detect billing defects, and auto-generate regression test suites across the BSS/OSS stack",
    ],
    tags: ["Java", "Spring Boot", "Kafka", "Kubernetes", "OpenShift", "PostgreSQL", "LLM", "Microservices"],
  },
  {
    role: "Senior Software Engineer (IC)",
    company: "Safaricom",
    location: "Nairobi, Hybrid",
    period: "2023 – 2025",
    award: null,
    bullets: [
      "Built the platform for DigiFarm — serving 2M+ farmers across 700+ cooperatives",
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
    period: "Apr – Dec 2023",
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
    period: "Sep 2021 – 2023",
    award: "🏆 Unsung Hero Award",
    bullets: [
      "Maintained uninterrupted services for 1M+ customers during KCB–BPR merger",
      "Built Angular-based internal dashboards and cross-institutional APIs integrating banking systems across two countries",
      "Implemented API management infrastructure using WSO2 API Manager",
    ],
    tags: ["Java", "Angular", "Go", "WSO2", "Azure", "ActiveMQ"],
  },
  {
    role: "Software Development Intern",
    company: "Microsoft Africa Development Center",
    location: "Nairobi",
    period: "Apr 2021 – Aug 2021",
    award: null,
    bullets: [
      "Contributed to software development projects within Microsoft's Africa Development Center",
      "Built React-based frontend features and backend services using Python, Node.js, and TypeScript in Azure-hosted environments",
      "Collaborated with cross-functional engineering teams on cloud-native application development",
    ],
    tags: ["Python", "TypeScript", "React", "Node.js", "Azure"],
  },
];

export const PROJECTS: Project[] = [
  {
    icon: "🔮",
    title: "IRIS AI – Social Media Intelligence",
    metric: "Billions of signals · 187 languages · Real-time AI",
    desc: "AI-native social media platform for enterprise brands — real-time pipelines processing billions of signals across 187 languages for sentiment analysis and intelligent routing.",
    tags: ["Python", "TypeScript", "React", "LLM", "AI Agents"],
    badges: ["AI", "social-tech"],
  },
  {
    icon: "🌾",
    title: "DigiFarm Credit Platform",
    metric: "KES 1B+ loans · 2M+ farmers",
    desc: "Credit scoring engine using produce delivery and transaction history, disbursing agricultural loans to 2M+ farmers via Access Bank.",
    tags: ["Java", "Spring Boot", "AWS", "PostgreSQL"],
    badges: ["fintech", "agri-tech"],
  },
  {
    icon: "🤖",
    title: "AI Defect Detection Pipeline",
    metric: "RAG + vector search · CI/CD integrated",
    desc: "RAG-powered pipeline that autonomously detects and resolves defects in live telecom billing infrastructure.",
    tags: ["RAG", "Vector DB", "Java", "GitLab CI"],
    badges: ["AI", "telecom"],
  },
  {
    icon: "🏦",
    title: "KCB–BPR Merger Integration",
    metric: "1M+ customers · Zero downtime",
    desc: "Cross-border API integration enabling zero-downtime banking continuity during the KCB–BPR Rwanda merger.",
    tags: ["Go", "WSO2", "Azure", "Kafka"],
    badges: ["banking", "integration"],
  },
  {
    icon: "📡",
    title: "NBC Core Banking API Layer",
    metric: "30% faster incident response",
    desc: "Middleware exposing Oracle Flexcube as REST APIs, enabling digital and agency banking channels across Tanzania.",
    tags: ["Java", "WSO2", "OpenShift", "ELK"],
    badges: ["banking", "APIs"],
  },
  {
    icon: "🚀",
    title: "Autonomous Dev Agents",
    metric: "Self-healing pipelines · Accelerated delivery",
    desc: "Self-healing AI agents that identify bugs and generate fixes within CI/CD pipelines for telecom billing systems.",
    tags: ["AI Agents", "LLM", "Java", "Jenkins"],
    badges: ["AI", "automation"],
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
  TypeScript: { color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE" },
  "Node.js": { color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE" },
  React: { color: "#0891B2", bg: "#ECFEFF", border: "#A5F3FC" },
  Angular: { color: "#0891B2", bg: "#ECFEFF", border: "#A5F3FC" },
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
  Prometheus: { color: "#0E7490", bg: "#ECFEFF", border: "#A5F3FC" },
  // Integration
  "Apache Camel": { color: "#15803D", bg: "#F0FDF4", border: "#BBF7D0" },
  ActiveMQ: { color: "#15803D", bg: "#F0FDF4", border: "#BBF7D0" },
  Microservices: { color: "#15803D", bg: "#F0FDF4", border: "#BBF7D0" },
};

export const DEFAULT_TAG: TagStyle = { color: "#374151", bg: "#F3F4F6", border: "#E5E7EB" };
