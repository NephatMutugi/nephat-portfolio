export interface Stat {
  num: string;
  label: string;
}

export interface Skill {
  icon: string;
  title: string;
  color: string;
  bg: string;
  border: string;
  tags: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  award: string | null;
  bullets: string[];
  tags: string[];
}

export interface Project {
  icon: string;
  title: string;
  metric: string;
  desc: string;
  tags: string[];
  badges: string[];
}

export interface ContactLink {
  icon: string;
  label: string;
  href: string | null;
}

export interface TagStyle {
  color: string;
  bg: string;
  border: string;
}
