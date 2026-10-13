export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  sector?: string;
  location: string;
  period?: string;
  keyBadge?: string;
  highlights: string[];
  skillsUsed: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  status: string;
  academicYear: string;
  expectedGraduation: string;
  gpa: string;
  coursework: string[];
  description: string;
}

export interface TrainingItem {
  id: string;
  organization: string;
  title: string;
  period?: string;
  description: string;
  skillsGained: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  partner?: string;
  date: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  notes?: string;
}
