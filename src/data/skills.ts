import { Skill, SkillsByCategory } from '@/types';

export const skills: Skill[] = [
  // Frontend Skills
  {
    id: 'html',
    name: 'HTML',
    category: 'frontend',
    proficiency: 5,
    icon: '🌐',
    description: 'Semantic HTML5 markup and web standards',
    yearsOfExperience: 3
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'frontend',
    proficiency: 5,
    icon: '🎨',
    description: 'Modern CSS with Flexbox, Grid, and responsive design',
    yearsOfExperience: 3
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    proficiency: 4,
    icon: '💛',
    description: 'ES6+ JavaScript with modern features and best practices',
    yearsOfExperience: 2
  },
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    proficiency: 4,
    icon: '⚛️',
    description: 'Modern React development with hooks and component patterns',
    yearsOfExperience: 2
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    proficiency: 4,
    icon: '▲',
    description: 'Full-stack React framework with SSR, SSG, and API routes',
    yearsOfExperience: 1
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    proficiency: 4,
    icon: '📘',
    description: 'Type-safe JavaScript development with strong typing',
    yearsOfExperience: 1
  },

  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    proficiency: 4,
    icon: '🎨',
    description: 'Utility-first CSS framework for rapid UI development',
    yearsOfExperience: 1
  },
  {
    id: 'sass',
    name: 'Sass/SCSS',
    category: 'frontend',
    proficiency: 4,
    icon: '💄',
    description: 'CSS preprocessor with advanced features and mixins',
    yearsOfExperience: 4
  },

  // Backend Skills
  {
    id: 'c',
    name: 'C',
    category: 'backend',
    proficiency: 4,
    icon: '🔧',
    description: 'System programming and foundational computer science concepts',
    yearsOfExperience: 2
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'backend',
    proficiency: 4,
    icon: '⚡',
    description: 'Object-oriented programming and system development',
    yearsOfExperience: 2
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    proficiency: 4,
    icon: '🐍',
    description: 'Backend development, data science, and machine learning',
    yearsOfExperience: 2
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    proficiency: 4,
    icon: '🟢',
    description: 'Server-side JavaScript runtime for web applications',
    yearsOfExperience: 2
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    proficiency: 4,
    icon: '🚂',
    description: 'Fast, unopinionated web framework for Node.js',
    yearsOfExperience: 2
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'backend',
    proficiency: 3,
    icon: '🐘',
    description: 'Server-side scripting for web development',
    yearsOfExperience: 1
  },
  {
    id: 'shell',
    name: 'Shell Programming',
    category: 'backend',
    proficiency: 3,
    icon: '💻',
    description: 'Bash scripting and command-line automation',
    yearsOfExperience: 1
  },
  {
    id: 'mern',
    name: 'MERN Stack',
    category: 'backend',
    proficiency: 4,
    icon: '🔥',
    description: 'Full-stack development with MongoDB, Express, React, Node.js',
    yearsOfExperience: 2
  },

  {
    id: 'rest',
    name: 'REST APIs',
    category: 'backend',
    proficiency: 5,
    icon: '🌐',
    description: 'RESTful API design and implementation best practices',
    yearsOfExperience: 4
  },

  // Database Skills
  {
    id: 'sql',
    name: 'SQL',
    category: 'database',
    proficiency: 4,
    icon: '🗃️',
    description: 'Relational database design and complex queries',
    yearsOfExperience: 2
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    proficiency: 4,
    icon: '🍃',
    description: 'NoSQL database design and document-based storage',
    yearsOfExperience: 2
  },


  // Cloud & DevOps
  {
    id: 'docker',
    name: 'Docker',
    category: 'cloud',
    proficiency: 3,
    icon: '🐳',
    description: 'Containerization and application deployment',
    yearsOfExperience: 1
  },


  // Tools & DevOps
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    proficiency: 5,
    icon: '📝',
    description: 'Version control with advanced branching strategies',
    yearsOfExperience: 5
  },
  {
    id: 'webpack',
    name: 'Webpack',
    category: 'tools',
    proficiency: 4,
    icon: '📦',
    description: 'Module bundling and build optimization',
    yearsOfExperience: 3
  },
  {
    id: 'vite',
    name: 'Vite',
    category: 'tools',
    proficiency: 4,
    icon: '⚡',
    description: 'Fast build tool and development server',
    yearsOfExperience: 2
  },
  {
    id: 'excel',
    name: 'Microsoft Excel',
    category: 'tools',
    proficiency: 4,
    icon: '📊',
    description: 'Advanced spreadsheet analysis and data visualization',
    yearsOfExperience: 2
  },


  // IoT & Hardware
  {
    id: 'arduino',
    name: 'Arduino',
    category: 'iot',
    proficiency: 4,
    icon: '🔌',
    description: 'Microcontroller programming and sensor integration',
    yearsOfExperience: 2
  },
  {
    id: 'esp32',
    name: 'ESP32',
    category: 'iot',
    proficiency: 4,
    icon: '📡',
    description: 'WiFi-enabled microcontroller for IoT projects',
    yearsOfExperience: 2
  },
  {
    id: 'raspberrypi',
    name: 'Raspberry Pi',
    category: 'iot',
    proficiency: 4,
    icon: '🍓',
    description: 'Single-board computer for IoT and embedded systems',
    yearsOfExperience: 2
  },

  // AI & Machine Learning
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    category: 'ai',
    proficiency: 4,
    icon: '🤖',
    description: 'ML algorithms and model development',
    yearsOfExperience: 2
  },
  {
    id: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    category: 'ai',
    proficiency: 3,
    icon: '🧠',
    description: 'AI concepts and intelligent system design',
    yearsOfExperience: 1
  },
  {
    id: 'data-science',
    name: 'Data Science',
    category: 'ai',
    proficiency: 4,
    icon: '📈',
    description: 'Statistical analysis, data modeling, and insights extraction',
    yearsOfExperience: 2
  },
  {
    id: 'data-analysis-python',
    name: 'Data Analysis (Python)',
    category: 'ai',
    proficiency: 4,
    icon: '🐍',
    description: 'Data analysis using pandas, numpy, matplotlib, and seaborn',
    yearsOfExperience: 2
  },
  {
    id: 'ai-prompting',
    name: 'AI Prompting',
    category: 'ai',
    proficiency: 4,
    icon: '💬',
    description: 'Expert prompt engineering for AI models and LLMs',
    yearsOfExperience: 1
  },

  // Blockchain & Cryptography
  {
    id: 'blockchain',
    name: 'Blockchain',
    category: 'blockchain',
    proficiency: 3,
    icon: '⛓️',
    description: 'Distributed ledger technology and smart contracts',
    yearsOfExperience: 1
  },
  {
    id: 'cryptography',
    name: 'Cryptography',
    category: 'blockchain',
    proficiency: 3,
    icon: '🔐',
    description: 'Encryption algorithms and security protocols',
    yearsOfExperience: 1
  },

  // Design Skills
  {
    id: 'adobe-xd',
    name: 'Adobe XD',
    category: 'design',
    proficiency: 3,
    icon: '🎭',
    description: 'User experience design and wireframing',
    yearsOfExperience: 2
  }
];

export const skillsByCategory: SkillsByCategory = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as SkillsByCategory);

export const getSkillsByCategory = (category: string) => {
  return skills.filter(skill => skill.category === category);
};

export const getFeaturedSkills = () => {
  return skills.filter(skill => skill.proficiency >= 4);
};

export const getSkillById = (id: string) => {
  return skills.find(skill => skill.id === id);
};
