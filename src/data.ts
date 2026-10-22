export const profile = {
  name: 'Joy Chang',
  initials: 'JC',
  role: 'Data Science · Software Development· ML Researcher',
  headline: 'Hi, I am Joy.',
  intro: 'I’m an Informatics student at the University of Washington interested in data science, software engineering, and human-centered technology. I enjoy building useful products and exploring how AI shapes people’s lives.',
  location: 'Seattle, WA',
  university: 'University of Washington',
  graduation: 'June 2028',
  email: 'YOUR_EMAIL@example.com',
  github: 'https://github.com/jmchang3',
  linkedin: 'https://www.linkedin.com/in/joymchang/',
  resume: `${import.meta.env.BASE_URL}Joy_Chang_10_14_26_Resume.pdf`,
  about: `I'm fascinated by how people interact with technology and how we can make those experiences more intuitive, accessible, and meaningful. I'm particularly interested in understanding human behavior through data and exploring how technology can better respond to people's needs. I enjoy combining research, analytical thinking, and technical problem-solving to develop practical solutions. For me, the most interesting part of technology is understanding the people who use it.
  
  Outside of school, I enjoy being outdoors, video editing, painting (see my work below!), and curating playlists. I’m always looking for something new to try, so feel free to send recommendations my way!`,

};
export const skills = [
  { group: 'Languages', items: ['Python', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'Swift', 'R', 'HTML / CSS'] },
  { group: 'Frameworks & ML', items: ['React', 'FastAPI', 'PyTorch', 'scikit-learn', 'pandas', 'NumPy'] },
  { group: 'Tools', items: ['Git & GitHub', 'Docker', 'Jupyter', 'VS Code', 'Jira', 'Xcode'] },
];
export const experience = [
  { role: 'Research Assistant', org: 'UW User Empowerment Lab', date: 'Mar 2025 – Present', description: 'Study how emerging adults interact with conversational AI, using large-scale conversation analysis, NLP, and longitudinal methods.', tags: ['Python', 'NLP', 'Research'] },
  { role: 'IT Infrastructure Intern', org: 'Lynden Inc.', date: 'Jun 2026 – Sep 2026', description: 'Automated GitHub repository migration workflows and supported enterprise systems, networking, and technical troubleshooting.', tags: ['Python', 'GitHub API', 'Infrastructure'] },
  { role: 'Software Development Intern', org: 'Sensoria Health', date: 'Sep 2023 – Jun 2024', description: 'Contributed to an iOS experience for smart-textile wheelchair pressure monitoring and accessible health technology.', tags: ['Swift', 'iOS', 'Accessibility'] },
];
export const projects = [
  { title: 'Husky Maps', category: 'Algorithms', description: 'Navigation and search features powered by graph algorithms, priority queues, and efficient autocomplete data structures.', tags: ['Java', 'Dijkstra', 'Data Structures'], github: 'https://github.com/joymchang/Husky-Maps-Data-Structures-and-Algorithms-', demo: '' },
  { title: 'WCAG Violation Classifier', category: 'Machine Learning', description: 'A text-classification pipeline that maps accessibility violations to WCAG categories using TF-IDF and logistic regression.', tags: ['Python', 'scikit-learn', 'NLP'], github: 'https://github.com/joymchang/Team-JMC-Dubtech', demo: '' },
  { title: 'Wordplay', category: 'Open Source', description: 'Contributions to an accessible programming language and web platform designed to make coding more inclusive.', tags: ['TypeScript', 'Svelte', 'Accessibility'], github: 'https://github.com/wordplaydev/wordplay', demo: '' },
  { title: 'Teens4Teens Data Pipeline', category: 'Data Engineering', description: 'An ETL project focused on transforming and preparing data for downstream analysis.', tags: ['Python', 'R', 'ETL'], github: '', demo: '' },
];
export const publications = [
  { title: 'How are Emerging Adults Using ChatGPT in the Wild', venue: 'ACM Conference on AI, Ethics, and Society (AIES), 2026', detail: 'Accepted · Co-author', link: '' },
];

// Add artwork images to public/ and list their relative paths here.
// Example: { title: 'Title', image: 'artwork/piece.jpg', alt: 'Description of the artwork', medium: 'Watercolor' }
export const artwork: { title: string; image: string; alt: string; medium?: string }[] = [];
