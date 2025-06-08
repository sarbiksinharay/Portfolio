import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'weather-web-app',
    title: 'Weather Web App',
    description: 'Real-time weather monitoring application with location-based forecasts',
    longDescription: `A comprehensive weather application that provides real-time weather data,
                     location-based forecasts, and interactive weather maps. Features include
                     current conditions, 7-day forecasts, weather alerts, and responsive design
                     for optimal viewing across all devices.`,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Weather API', 'Geolocation API'],
    images: ['/images/projects/weather-1.jpg'],
    featured: true,
    category: 'web',
    status: 'completed',
    completedAt: new Date('2024-01-15'),
    createdAt: new Date('2023-11-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'question-paper-management',
    title: 'Question Paper Management System',
    description: 'College question paper management platform for academic institutions',
    longDescription: `A comprehensive web-based solution for managing college question papers.
                     Features include paper upload, categorization by subjects and semesters,
                     search functionality, access control, and administrative dashboard for
                     managing academic content efficiently.`,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Multer', 'Bootstrap'],
    images: ['/images/projects/qpms-1.jpg'],
    featured: true,
    category: 'fullstack',
    status: 'completed',
    completedAt: new Date('2024-02-01'),
    createdAt: new Date('2023-12-01'),
    updatedAt: new Date('2024-02-01')
  },
  {
    id: 'simple-token-deployment',
    title: 'Simple Token Deployment',
    description: 'Basic cryptocurrency token deployment on Ethereum blockchain',
    longDescription: `A fundamental blockchain project demonstrating cryptocurrency token creation
                     and deployment on the Ethereum network. Includes smart contract development,
                     token standards implementation (ERC-20), and deployment scripts for
                     blockchain interaction and testing.`,
    technologies: ['Ethereum', 'Solidity', 'Web3.js', 'Truffle', 'MetaMask'],
    images: ['/images/projects/token-1.jpg'],
    featured: false,
    category: 'blockchain',
    status: 'completed',
    completedAt: new Date('2023-12-15'),
    createdAt: new Date('2023-10-01'),
    updatedAt: new Date('2023-12-15')
  },
  {
    id: 'house-price-prediction',
    title: 'House Price Prediction Model',
    description: 'ML model for predicting house prices using linear regression',
    longDescription: `A machine learning project that predicts house prices based on various
                     features like location, size, amenities, and market trends. Utilizes
                     linear regression algorithms with data preprocessing, feature engineering,
                     and model evaluation for accurate price predictions.`,
    technologies: ['Python', 'Linear Regression', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    images: ['/images/projects/house-price-1.jpg'],
    featured: false,
    category: 'ai',
    status: 'completed',
    createdAt: new Date('2024-01-01'),
    completedAt: new Date('2024-01-30'),
    updatedAt: new Date('2024-01-30')
  },
  {
    id: 'netflix-clone',
    title: 'Netflix Clone',
    description: 'Streaming platform replica with core Netflix features',
    longDescription: `A full-featured streaming platform replica that mimics Netflix's core
                     functionality. Includes user authentication, movie/TV show browsing,
                     video streaming, personalized recommendations, watchlist management,
                     and responsive design for seamless viewing experience.`,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Video.js', 'Tailwind CSS'],
    images: ['/images/projects/netflix-1.jpg'],
    featured: true,
    category: 'fullstack',
    status: 'completed',
    completedAt: new Date('2024-02-28'),
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-02-28')
  },
  {
    id: 'amazon-clone',
    title: 'Amazon Clone',
    description: 'E-commerce platform replica with Amazon-like functionality',
    longDescription: `A comprehensive e-commerce platform that replicates Amazon's core features.
                     Includes product catalog, shopping cart, user authentication, payment processing,
                     order management, seller dashboard, and review system for complete
                     online shopping experience.`,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Redux', 'Material-UI'],
    images: ['/images/projects/amazon-1.jpg'],
    featured: true,
    category: 'fullstack',
    status: 'completed',
    completedAt: new Date('2024-03-15'),
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-03-15')
  },
  {
    id: 'stone-paper-scissors',
    title: 'Stone Paper Scissors Game',
    description: 'Interactive web-based rock paper scissors game',
    longDescription: `A fun and interactive web-based implementation of the classic Rock Paper Scissors
                     game. Features include score tracking, animated gameplay, sound effects,
                     multiple difficulty levels, and responsive design for both desktop and
                     mobile gaming experience.`,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Local Storage', 'CSS Animations'],
    images: ['/images/projects/rps-1.jpg'],
    featured: false,
    category: 'web',
    status: 'completed',
    completedAt: new Date('2023-11-30'),
    createdAt: new Date('2023-09-01'),
    updatedAt: new Date('2023-11-30')
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot',
    description: 'Intelligent chatbot powered by Google\'s Gemini API',
    longDescription: `An advanced AI-powered chatbot utilizing Google's Gemini API for intelligent
                     conversations. Features include natural language processing, context awareness,
                     multi-topic discussions, conversation history, and integration capabilities
                     for various applications and platforms.`,
    technologies: ['Python', 'Gemini API', 'Flask', 'JavaScript', 'WebSocket', 'HTML', 'CSS'],
    images: ['/images/projects/chatbot-1.jpg'],
    featured: false,
    category: 'ai',
    status: 'completed',
    completedAt: new Date('2024-03-01'),
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-03-01')
  },
  {
    id: 'todo-web-app',
    title: 'TO DO Web App',
    description: 'Task management application for organizing daily activities',
    longDescription: `A comprehensive task management web application designed for organizing
                     daily activities and improving productivity. Features include task creation,
                     categorization, priority levels, due dates, progress tracking, and
                     responsive design for seamless task management across devices.`,
    technologies: ['React', 'JavaScript', 'CSS3', 'Local Storage', 'React Hooks'],
    images: ['/images/projects/todo-1.jpg'],
    featured: false,
    category: 'web',
    status: 'completed',
    completedAt: new Date('2023-10-15'),
    createdAt: new Date('2023-09-01'),
    updatedAt: new Date('2023-10-15')
  },
  // IoT Projects
  {
    id: 'parking-sensor',
    title: 'Parking Sensor System',
    description: 'IoT parking sensor using ultrasonic sensor, LEDs and buzzer',
    longDescription: `An intelligent parking sensor system that detects vehicle presence using
                     ultrasonic sensors. Features LED indicators for distance visualization,
                     buzzer alerts for proximity warnings, and real-time feedback for
                     parking assistance and space management.`,
    technologies: ['Arduino', 'C++', 'Ultrasonic Sensor', 'LEDs', 'Buzzer', 'IoT'],
    images: ['/images/projects/parking-sensor-1.jpg'],
    featured: false,
    category: 'iot',
    status: 'completed',
    completedAt: new Date('2023-08-15'),
    createdAt: new Date('2023-07-01'),
    updatedAt: new Date('2023-08-15')
  },
  {
    id: 'digital-clock-weather',
    title: 'Digital Clock with Weather Station',
    description: 'Digital clock displaying room temperature, humidity and date',
    longDescription: `A comprehensive digital clock system that displays current time, date,
                     room temperature, and humidity levels. Features real-time sensor readings,
                     LCD display interface, and environmental monitoring capabilities for
                     smart home automation.`,
    technologies: ['Arduino', 'C++', 'DHT22 Sensor', 'LCD Display', 'RTC Module', 'IoT'],
    images: ['/images/projects/digital-clock-1.jpg'],
    featured: false,
    category: 'iot',
    status: 'completed',
    completedAt: new Date('2023-09-20'),
    createdAt: new Date('2023-08-15'),
    updatedAt: new Date('2023-09-20')
  },
  {
    id: 'mobile-controlled-car',
    title: 'Mobile Controlled Car',
    description: 'Tiny mobile controlled car project using wireless communication',
    longDescription: `A miniature remote-controlled car that can be operated via mobile device.
                     Features wireless communication, motor control, directional movement,
                     and real-time response to mobile commands for interactive robotics
                     and automation learning.`,
    technologies: ['Arduino', 'C++', 'Bluetooth Module', 'Motor Driver', 'Mobile App', 'IoT'],
    images: ['/images/projects/mobile-car-1.jpg'],
    featured: false,
    category: 'iot',
    status: 'in-progress',
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-03-15')
  },
  {
    id: 'drone-project',
    title: 'Drone Project',
    description: 'Advanced drone development project with flight control systems',
    longDescription: `An advanced drone development project focusing on flight control systems,
                     autonomous navigation, and aerial robotics. Features custom flight controller,
                     sensor integration, GPS navigation, and wireless communication for
                     advanced aerial applications and research.`,
    technologies: ['Arduino', 'C++', 'Flight Controller', 'GPS Module', 'Gyroscope', 'Propellers', 'IoT'],
    images: ['/images/projects/drone-1.jpg'],
    featured: true,
    category: 'iot',
    status: 'in-progress',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-03-20')
  },
  // Additional Web Development Projects
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description: 'Modern responsive portfolio website showcasing projects and skills',
    longDescription: `A professional portfolio website built with Next.js and TailwindCSS.
                     Features responsive design, smooth animations, project showcase,
                     skills section, and contact form with modern UI/UX principles.`,
    technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    images: ['/images/projects/portfolio-1.jpg'],
    featured: false,
    category: 'web',
    status: 'completed',
    completedAt: new Date('2024-03-01'),
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-03-01')
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker App',
    description: 'Personal finance management application for tracking expenses',
    longDescription: `A comprehensive expense tracking application for personal finance management.
                     Features expense categorization, budget planning, visual charts,
                     monthly reports, and data export functionality.`,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'JWT'],
    images: ['/images/projects/expense-tracker-1.jpg'],
    featured: false,
    category: 'fullstack',
    status: 'completed',
    completedAt: new Date('2023-11-15'),
    createdAt: new Date('2023-10-01'),
    updatedAt: new Date('2023-11-15')
  },
  {
    id: 'blog-platform',
    title: 'Blog Platform',
    description: 'Full-featured blogging platform with CMS capabilities',
    longDescription: `A complete blogging platform with content management system.
                     Features rich text editor, user authentication, comment system,
                     category management, and SEO optimization.`,
    technologies: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth'],
    images: ['/images/projects/blog-1.jpg'],
    featured: false,
    category: 'fullstack',
    status: 'completed',
    completedAt: new Date('2024-01-20'),
    createdAt: new Date('2023-12-01'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: 'quiz-app',
    title: 'Interactive Quiz Application',
    description: 'Educational quiz platform with multiple question types',
    longDescription: `An interactive quiz application for educational purposes.
                     Features multiple choice questions, timer functionality,
                     score tracking, progress analytics, and admin panel for quiz management.`,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    images: ['/images/projects/quiz-1.jpg'],
    featured: false,
    category: 'fullstack',
    status: 'completed',
    completedAt: new Date('2023-10-30'),
    createdAt: new Date('2023-09-15'),
    updatedAt: new Date('2023-10-30')
  },
  {
    id: 'recipe-finder',
    title: 'Recipe Finder App',
    description: 'Recipe discovery platform with ingredient-based search',
    longDescription: `A recipe discovery application that helps users find recipes based on
                     available ingredients. Features recipe search, nutritional information,
                     cooking instructions, and favorite recipes management.`,
    technologies: ['React', 'JavaScript', 'Recipe API', 'CSS3', 'Local Storage'],
    images: ['/images/projects/recipe-1.jpg'],
    featured: false,
    category: 'web',
    status: 'completed',
    completedAt: new Date('2023-09-10'),
    createdAt: new Date('2023-08-01'),
    updatedAt: new Date('2023-09-10')
  },
  {
    id: 'url-shortener',
    title: 'URL Shortener Service',
    description: 'Custom URL shortening service with analytics',
    longDescription: `A URL shortening service similar to bit.ly with custom short URLs,
                     click analytics, QR code generation, and link management dashboard.`,
    technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'QR Code API'],
    images: ['/images/projects/url-shortener-1.jpg'],
    featured: false,
    category: 'fullstack',
    status: 'completed',
    completedAt: new Date('2023-12-05'),
    createdAt: new Date('2023-11-15'),
    updatedAt: new Date('2023-12-05')
  },
  {
    id: 'password-generator',
    title: 'Password Generator Tool',
    description: 'Secure password generation tool with customizable options',
    longDescription: `A secure password generator with customizable length, character sets,
                     and complexity options. Features password strength indicator,
                     copy to clipboard, and password history.`,
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Crypto API'],
    images: ['/images/projects/password-gen-1.jpg'],
    featured: false,
    category: 'web',
    status: 'completed',
    completedAt: new Date('2023-07-20'),
    createdAt: new Date('2023-07-01'),
    updatedAt: new Date('2023-07-20')
  },
  // Data Science & AI Projects
  {
    id: 'sales-prediction',
    title: 'Sales Prediction Model',
    description: 'Machine learning model for predicting sales trends',
    longDescription: `A predictive analytics project using machine learning to forecast sales trends.
                     Features data preprocessing, feature engineering, model training with
                     multiple algorithms, and performance evaluation.`,
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Jupyter Notebook'],
    images: ['/images/projects/sales-prediction-1.jpg'],
    featured: false,
    category: 'ai',
    status: 'completed',
    completedAt: new Date('2024-02-15'),
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-02-15')
  },
  {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis Tool',
    description: 'NLP-based sentiment analysis for social media data',
    longDescription: `A natural language processing tool for analyzing sentiment in social media posts.
                     Features text preprocessing, sentiment classification, visualization of results,
                     and real-time analysis capabilities.`,
    technologies: ['Python', 'NLTK', 'TextBlob', 'Pandas', 'Matplotlib', 'Streamlit'],
    images: ['/images/projects/sentiment-1.jpg'],
    featured: false,
    category: 'ai',
    status: 'completed',
    completedAt: new Date('2024-01-10'),
    createdAt: new Date('2023-12-15'),
    updatedAt: new Date('2024-01-10')
  },
  {
    id: 'cryptocurrency-tracker',
    title: 'Cryptocurrency Price Tracker',
    description: 'Real-time cryptocurrency price monitoring dashboard',
    longDescription: `A comprehensive cryptocurrency tracking application with real-time price updates,
                     portfolio management, price alerts, and historical data visualization.`,
    technologies: ['React', 'Node.js', 'CoinGecko API', 'Chart.js', 'WebSocket'],
    images: ['/images/projects/crypto-tracker-1.jpg'],
    featured: false,
    category: 'web',
    status: 'completed',
    completedAt: new Date('2023-11-25'),
    createdAt: new Date('2023-10-15'),
    updatedAt: new Date('2023-11-25')
  },
  {
    id: 'smart-contract-voting',
    title: 'Blockchain Voting System',
    description: 'Decentralized voting system using smart contracts',
    longDescription: `A secure and transparent voting system built on blockchain technology.
                     Features smart contract implementation, voter authentication,
                     tamper-proof voting records, and real-time result tracking.`,
    technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'Truffle', 'IPFS'],
    images: ['/images/projects/voting-1.jpg'],
    featured: false,
    category: 'blockchain',
    status: 'completed',
    completedAt: new Date('2024-01-05'),
    createdAt: new Date('2023-11-20'),
    updatedAt: new Date('2024-01-05')
  },
  {
    id: 'image-classifier',
    title: 'Image Classification Model',
    description: 'Deep learning model for image recognition and classification',
    longDescription: `A convolutional neural network for image classification tasks.
                     Features data augmentation, model training, accuracy evaluation,
                     and real-time image prediction capabilities.`,
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy'],
    images: ['/images/projects/image-classifier-1.jpg'],
    featured: false,
    category: 'ai',
    status: 'completed',
    completedAt: new Date('2024-02-20'),
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-02-20')
  },
  // Additional Web & Mobile Projects
  {
    id: 'music-player',
    title: 'Web Music Player',
    description: 'Feature-rich web-based music player application',
    longDescription: `A modern web music player with playlist management, audio visualization,
                     shuffle and repeat modes, volume control, and responsive design.`,
    technologies: ['JavaScript', 'HTML5 Audio API', 'CSS3', 'Web Audio API'],
    images: ['/images/projects/music-player-1.jpg'],
    featured: false,
    category: 'web',
    status: 'completed',
    completedAt: new Date('2023-08-30'),
    createdAt: new Date('2023-08-01'),
    updatedAt: new Date('2023-08-30')
  },
  {
    id: 'calendar-app',
    title: 'Event Calendar Application',
    description: 'Interactive calendar app for event management',
    longDescription: `A comprehensive calendar application for managing events and appointments.
                     Features event creation, reminders, recurring events, and calendar sharing.`,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'FullCalendar.js'],
    images: ['/images/projects/calendar-1.jpg'],
    featured: false,
    category: 'fullstack',
    status: 'completed',
    completedAt: new Date('2023-12-10'),
    createdAt: new Date('2023-11-01'),
    updatedAt: new Date('2023-12-10')
  },
  {
    id: 'qr-code-generator',
    title: 'QR Code Generator',
    description: 'Dynamic QR code generation tool with customization options',
    longDescription: `A versatile QR code generator supporting various data types including URLs,
                     text, contact information, and WiFi credentials with customization options.`,
    technologies: ['JavaScript', 'QR.js Library', 'HTML5 Canvas', 'CSS3'],
    images: ['/images/projects/qr-generator-1.jpg'],
    featured: false,
    category: 'web',
    status: 'completed',
    completedAt: new Date('2023-07-15'),
    createdAt: new Date('2023-06-15'),
    updatedAt: new Date('2023-07-15')
  },
  {
    id: 'file-upload-system',
    title: 'File Upload & Management System',
    description: 'Secure file upload system with cloud storage integration',
    longDescription: `A robust file upload and management system with drag-and-drop interface,
                     file type validation, progress tracking, and cloud storage integration.`,
    technologies: ['Node.js', 'Express', 'Multer', 'AWS S3', 'React', 'Dropzone'],
    images: ['/images/projects/file-upload-1.jpg'],
    featured: false,
    category: 'fullstack',
    status: 'completed',
    completedAt: new Date('2023-10-20'),
    createdAt: new Date('2023-09-20'),
    updatedAt: new Date('2023-10-20')
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for data analysis and visualization',
    longDescription: `A comprehensive data visualization dashboard with interactive charts,
                     filters, real-time updates, and export capabilities for business intelligence.`,
    technologies: ['Python', 'Dash', 'Plotly', 'Pandas', 'SQLite'],
    images: ['/images/projects/data-viz-1.jpg'],
    featured: false,
    category: 'ai',
    status: 'completed',
    completedAt: new Date('2024-01-25'),
    createdAt: new Date('2023-12-20'),
    updatedAt: new Date('2024-01-25')
  }
];

export const featuredProjects = projects.filter(project => project.featured);

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string) => {
  return projects.filter(project => project.category === category);
};

export const getProjectsByStatus = (status: string) => {
  return projects.filter(project => project.status === status);
};
