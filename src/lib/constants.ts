// Application constants and configuration

export const APP_CONFIG = {
  name: 'Sarbik Sinha Ray Portfolio',
  description: 'Full Stack Developer & UI/UX Enthusiast',
  url: 'https://sarbiksinharay.dev',
  author: 'Sarbik Sinha Ray',
  email: 'sinhar1704@gmail.com',
  social: {
    github: 'https://github.com/sarbiksinharay',
    linkedin: 'https://linkedin.com/in/sarbik',
    twitter: 'https://twitter.com/sarbiksinharay'
  }
} as const;

export const DESIGN_TOKENS = {
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554'
    },
    secondary: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7c3aed',
      800: '#6b21a8',
      900: '#581c87',
      950: '#3b0764'
    },
    accent: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
      950: '#022c22'
    }
  },
  spacing: {
    section: '5rem',
    container: '1.5rem',
    component: '2rem'
  },
  typography: {
    fontFamily: {
      sans: ['var(--font-md-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
      mono: ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'monospace']
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem'
    }
  },
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms'
    },
    easing: {
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  }
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;

export const NAVIGATION_ITEMS = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
] as const;

export const SKILL_CATEGORIES = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  cloud: 'Cloud & Infrastructure',
  tools: 'Tools & DevOps',
  iot: 'IoT & Hardware',
  ai: 'AI & Machine Learning',
  blockchain: 'Blockchain & Cryptography',
  design: 'Design'
} as const;

export const PROJECT_CATEGORIES = {
  web: 'Web Application',
  mobile: 'Mobile App',
  desktop: 'Desktop Application',
  api: 'API & Backend',
  fullstack: 'Full Stack',
  blockchain: 'Blockchain',
  ai: 'AI & Machine Learning',
  iot: 'IoT & Hardware'
} as const;

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  },
  slideIn: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
} as const;

export const SEO_CONFIG = {
  defaultTitle: 'Sarbik Sinha Ray - BCA Student & Developer',
  titleTemplate: '%s | Sarbik Sinha Ray',
  defaultDescription: 'BCA Student with 2.5+ years experience in web development, MERN stack, data science, AI prompting, IoT, and emerging blockchain technologies.',
  siteUrl: 'https://sarbiksinharay.dev',
  defaultImage: '/og-image.jpg',
  twitterHandle: '@sarbiksinharay'
} as const;
