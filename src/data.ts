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
  { role: 'IT DevOps Engineer Intern', org: 'Lynden Inc.', date: 'Jun 2026 – Sep 2026', description: 'Automated GitHub repository migration workflows and supported enterprise systems, networking, and technical troubleshooting.', tags: ['Python', 'GitHub API', 'Infrastructure'] },
  { role: 'Research Assistant', org: 'UW User Empowerment Lab', date: 'Mar 2025 – Present', description: 'Study how emerging adults interact with conversational AI, using large-scale conversation analysis, NLP, and longitudinal methods.', tags: ['Python', 'NLP', 'Research'] },
  { role: 'Lead Front-end Engineer', org: 'Husky Coding Project', date: 'Sept 2025 – Jun 2026', description: 'Lead front-end development and UI/UX design for a React Native productivity platform, building responsive interfaces and interactive dashboards while integrating REST APIs, OAuth authentication, and CI/CD workflows.', tags: ['Swift', 'UI/UX Design', 'REST APIs'] },
  { role: 'Diversity Committee Lead', org: 'UW Women in Informatics', date: 'Mar 2025 – Present', description: 'Directed the Amazon-sponsored “Fearless, Tech More” UX hackathon with 150+ participants - coordinating event operations, sponsor communication, and leading marketing & design efforts to boost event attendance by 25%.', tags: ['Leadership', 'Communication', 'Organization'] },
  { role: 'Software Development Intern', org: 'Sensoria Health', date: 'Sep 2023 – Jun 2024', description: 'Contributed to an iOS experience for smart-textile wheelchair pressure monitoring and accessible health technology.', tags: ['Swift', 'iOS', 'Accessibility'] },
  { role: 'Web & App Development Scholar', org: 'Kode With Klossy', date: 'July 2022 – July 2023', description: 'Selected on scholarship to attend an immersive coding program focused on web and mobile app development using HTML, CSS, Javascript, and Swift. Emphasized usability and accessible design principles.', tags: ['Swift', 'HTML/CSS', 'Javascript'] },
];
export const projects = [
  { title: 'Husky Maps', category: 'Algorithms', description: 'Navigation and search features powered by graph algorithms, priority queues, and efficient autocomplete data structures.', tags: ['Java', 'Dijkstra', 'Data Structures'], github: 'https://github.com/joymchang/Husky-Maps-Data-Structures-and-Algorithms-', demo: '' },
  { title: 'WCAG Violation Classifier', category: 'Machine Learning', description: 'A text-classification pipeline that maps accessibility violations to WCAG categories using TF-IDF and logistic regression.', tags: ['Python', 'scikit-learn', 'NLP'], github: 'https://github.com/joymchang/Team-JMC-Dubtech', demo: '' },
  { title: 'Wordplay', category: 'Open Source', description: 'Contributions to an accessible programming language and web platform designed to make coding more inclusive.', tags: ['TypeScript', 'Svelte', 'Accessibility'], github: 'https://github.com/wordplaydev/wordplay', demo: '' },
  { title: 'Word Embeddings & Transformer Language Models', category: 'NLP & Deep Learning', description: 'Explored how language models represent and generate text by building context-based word embeddings from over 620,000 tokens across seven literary texts. Implemented word similarity search using cosine similarity, compared custom embeddings against pretrained GloVe representations, and adapted a PyTorch transformer language model for word-level tokenization.', tags: ['Python', 'PyTorch', 'scikit-learn', 'NLTK'], demo: `${import.meta.env.BASE_URL}projects/problemSet7.html`},
  { title: 'Education & Employment Trends', category: 'Data Analytics', description: 'Analyzed U.S. higher education enrollment and unemployment trends from 2003–2021 using R. Cleaned, transformed, and joined datasets with dplyr and tidyr to explore relationships between educational attainment, demographic characteristics, and employment outcomes.', tags: ['R', 'dplyr', 'tidyr', 'Data Cleaning', 'Data Analysis'], github: '', demo: `${import.meta.env.BASE_URL}projects/201finalprojdataprocessing.html` },
  { title: 'COMPAS: Evaluating Bias in Criminal Justice Algorithms', category: 'Machine Learning', description: 'Analyzed 6,172 criminal justice records using R to evaluate racial disparities in COMPAS recidivism risk predictions. Explored fairness–accuracy tradeoffs to assess the ethical implications of algorithmic decision-making.', tags: ['R', 'tidyverse', 'Data Analysis'], demo: `${import.meta.env.BASE_URL}projects/info370problemSet7.html`  },
  { title: 'Web-Based Meal Planning Application', category: 'Full-Stack Web Development', description: 'Designed, developed, and deployed a web-based meal planning application to help users organize their meals through a streamlined, user-friendly interface. Focused on responsive web design, intuitive navigation, and delivering an accessible experience through Firebase Hosting.', tags: ['UI/UX', 'Cloud Deployment', 'HTML/CSS/Javascript'], demo: 'https://meal-planner-planner.web.app/' },
  { title: 'WIP', category: 'cat', description: 'coming soon...', tags: ['tag1', 'tag2', 'tag3'], github: '', demo: '' },
  { title: 'WIP', category: 'cat', description: 'coming soon...', tags: ['tag1', 'tag2', 'tag3'], github: '', demo: '' },

];
export const publications = [
  { title: 'How are Emerging Adults Using ChatGPT in the Wild', venue: 'ACM Conference on AI, Ethics, and Society (AIES), 2026', detail: 'Accepted · Co-author', link: '' },
];

// Add artwork images to public/ and list their relative paths here.
// Example: { title: 'Title', image: 'artwork/piece.jpg', alt: 'Description of the artwork', medium: 'Watercolor' }
export const artwork: { title: string; image: string; alt: string; medium?: string }[] = [
  { title: 'Still Life', image: 'artwork/oil3.png', alt: 'Still life painting', medium: 'Oil' },
  { title: 'Still Life', image: 'artwork/oil1.png', alt: 'Still life painting', medium: 'Oil' },
  { title: 'Connection', image: 'artwork/reachingOut.png', alt: 'The paradox of seeking connection with something that thrives in isolation.', medium: 'Oil' },
];
