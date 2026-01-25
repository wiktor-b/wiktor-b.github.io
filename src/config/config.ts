export const profile = {
  name: "Wiktor Bechciński",
  role: "Full Stack Developer",
  email: "wiktor.bechcinski@gmail.com",
  phone: "+48 881 705 318",
  linkedin: "https://www.linkedin.com/in/wiktor-bechcinski/",
  github: "https://github.com/wiktor-b",
  location: "Łódź / Warszawa, Poland",
  avatarUrl: "/avatar.png",
  summary:
    "Full-stack engineer with front-end focus, delivering enterprise solutions for global brands including Procter & Gamble, Philip Morris International, and Frisco. Passionate about building performant, user-centric applications that bridge design and engineering to create real business impact.",
} as const;

export const sidebarSections = [
  {
    title: "Technologies",
    items: [
      "TypeScript | JavaScript",
      "React | React Native",
      "Next.js | Vite | Expo",
      "Node.js | Java (Spring)",
      "Salesforce",
      "Redux | Zustand",
      "Tailwind | styled-components",
      "REST | GraphQL | tRPC",
      "AWS | Azure | Docker",
      "Jest | Jenkins | CI/CD",
      "Git | GitHub | Jira",
    ],
  },
  {
    title: "Soft skills",
    items: [
      "Curious fast-learner",
      "Creative problem solver",
      "Deep focus on complex problems",
      "Adaptable in dynamic environments",
      "Strong pattern recognition",
      "Attention to detail",
      "Collaborative team player",
      "Clear communicator",
    ],
  },
  {
    title: "Languages",
    items: ["Polish (Native)", "English (Fluent)", "Japanese (Beginner)"],
  },
];

export const work = [
  {
    period: "03.2025 - PRESENT",
    company: "Accenture",
    role: "Product Engineering Senior Analyst",
    tech: "React, React Native, TypeScript, Redux, Java, Salesforce, AWS, Vite, Jest, Jenkins, CI/CD",
    bullets: [
      "Procter & Gamble (01.2026-present): Developing a global offline-first Retail Execution App integrating Salesforce with React Native and Java for multi-market scalability. Implementing metadata-driven UI (Dynamic Design), performance optimizations and complex synchronization logic for reliable offline-to-online data flow",
      "Philip Morris International (09-12.2025): Built React web application features for real-time IQOS device diagnostics and IoT monitoring. Developed comprehensive analytics dashboard utilizing Redux, Vite and AWS for optimal performance",
      "Frisco (03-09.2025): Created AI-powered meal planning features with conversational chat interface for the e-commerce mobile app. Implemented smart filtering system and personalized recommendations engine using React Native and Expo",
    ],
  },
  {
    period: "02.2024 - 02.2025",
    company: "Comarch",
    role: "Full Stack Developer",
    tech: "Angular, TypeScript, Java (Spring), Node.js, Docker, AWS, Less, CI/CD",
    bullets: [
      "Developed and maintained high-traffic Angular application for major insurance companies",
      "Identified and resolved production bugs ensuring application stability under real-time conditions",
    ],
  },
  {
    period: "12.2022 - 06.2023",
    company: "Sinom",
    role: "Frontend Developer",
    tech: "React, TypeScript, Next.js, Tailwind, GraphQL, Redux, tRPC, Tanstack, Material UI",
    bullets: [
      "Developed web climate-smart planning tool for property renovation and maintenance",
      "Refactored legacy components, optimizing performance and aligning with modern practices",
    ],
  },
  {
    period: "07.2021 - 02.2024",
    company: "LSI Software",
    role: "Software Developer",
    tech: "JavaScript, Python, Jenkins, SQL, TestComplete, Postman, Jest, RabbitMQ",
    bullets: [
      "Developed automated test scripts for software quality assurance",
      "Analyzed and debugged software issues, maintained testing documentation",
    ],
  },
];
