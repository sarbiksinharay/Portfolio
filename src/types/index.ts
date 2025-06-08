// Core type definitions for the portfolio application

export interface BaseEntity {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Project extends BaseEntity {
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: ProjectCategory;
  status: ProjectStatus;
  completedAt?: Date;
}

export type ProjectCategory = 'web' | 'mobile' | 'desktop' | 'api' | 'fullstack' | 'blockchain' | 'ai' | 'iot';
export type ProjectStatus = 'completed' | 'in-progress' | 'planned';

export interface Skill extends BaseEntity {
  name: string;
  category: SkillCategory;
  proficiency: SkillProficiency;
  icon: string;
  description?: string;
  yearsOfExperience?: number;
}

export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'design' | 'database' | 'cloud';
export type SkillProficiency = 1 | 2 | 3 | 4 | 5;

export interface Experience extends BaseEntity {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  technologies: string[];
  achievements: string[];
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
}

export interface Education extends BaseEntity {
  institution: string;
  degree: string;
  field: string;
  startDate: Date;
  endDate?: Date;
  gpa?: number;
  achievements?: string[];
  location: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  website?: string;
  avatar: string;
  resume?: string;
  socialLinks: SocialLink[];
}

// Utility types
export type ProjectPreview = Pick<Project, 'id' | 'title' | 'description' | 'technologies' | 'images' | 'category'>;
export type SkillsByCategory = Record<SkillCategory, Skill[]>;

// Component prop types
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SectionProps extends ComponentProps {
  id?: string;
  title?: string;
  subtitle?: string;
}

// Theme types
export type Theme = 'light' | 'dark' | 'system';

// Animation types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
}

// API types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  code?: string;
  details?: unknown;
}
