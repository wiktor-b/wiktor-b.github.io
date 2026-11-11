export const profile = {
  name: "Wiktor Bechciński",
  role: "Full-stack Developer",
  email: "wiktor.bechcinski@gmail.com",
  phone: "+48 881 705 318",
  linkedin: "https://www.linkedin.com/in/wiktor-bechcinski/",
  github: "https://github.com/wiktor-b",
  location: "Łódź / Warszawa, Poland",
  avatarUrl: "/avatar.png",
  summary:
    "Full-stack developer focused on React, React Native and TypeScript. Experience delivering enterprise web and mobile applications for Doppelmayr, Procter & Gamble and Philip Morris International, spanning IoT monitoring, offline-first workflows and reusable frontend libraries.",
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
      "Redux | Zustand | TanStack Query",
      "Tailwind CSS | styled-components",
      "REST | GraphQL | tRPC",
      "AWS | Azure | Docker",
      "Playwright | Vitest | Jest | CI/CD",
      "Git | GitHub | Jira",
    ],
  },
  {
    title: "Soft skills",
    items: [
      "Analytical problem solving",
      "Clear communication",
      "Team collaboration",
      "Adaptability",
      "Attention to detail",
    ],
  },
  {
    title: "Languages",
    items: ["Polish (Native)", "English (Fluent)", "Japanese (Beginner)"],
  },
];

export const work = [
  {
    period: "04.2026 - PRESENT",
    company: "Superdevs",
    role: "Frontend Developer (Contract)",
    tech: "React, TypeScript, TanStack Query, Tailwind CSS, Chart.js, Vite, PWA, Azure AD B2C, Azure DevOps, Playwright, Vitest",
    bullets: [
      "Develop Doppelmayr's clair, an IoT monitoring progressive web app that helps ropeway operators oversee multiple installations through live sensor data, historical trends and operational alerts",
      "Build and maintain a shared React dashboard SDK used across Doppelmayr applications, providing configurable drag-and-drop dashboards and reusable data visualization components",
      "Deliver responsive, multilingual interfaces for desktop and mobile, integrating sensor APIs and Azure AD B2C authentication",
      "Introduced automated end-to-end and unit testing with Playwright and Vitest, integrating regression checks into Azure DevOps CI/CD to catch issues before release",
    ],
  },
  {
    period: "03.2025 - 04.2026",
    company: "Accenture",
    role: "Product Engineering Senior Analyst",
    tech: "React, React Native, TypeScript, Redux, Java, Salesforce, AWS, Vite, Jest, Jenkins, CI/CD",
    bullets: [
      "Procter & Gamble (01-04.2026): Developed an offline-first retail execution app for multiple markets using React Native and Java, integrated with Salesforce. Implemented metadata-driven interfaces, performance optimizations and offline-to-online synchronization",
      "Philip Morris International (09-12.2025): Built React features for real-time IQOS device diagnostics and IoT monitoring, including an analytics dashboard using Redux, Vite and AWS",
      "Frisco (03-09.2025): Developed AI-powered meal planning features for an e-commerce mobile app using React Native and Expo, including a conversational interface, product filtering and personalized recommendations",
    ],
  },
  {
    period: "02.2024 - 02.2025",
    company: "Comarch",
    role: "Full Stack Developer",
    tech: "Angular, TypeScript, Java (Spring), Node.js, Docker, AWS, Less, CI/CD",
    bullets: [
      "Developed and maintained an Angular application for major insurance companies",
      "Diagnosed and resolved production issues to maintain application stability",
    ],
  },
  {
    period: "12.2022 - 06.2023",
    company: "Sinom",
    role: "Frontend Developer",
    tech: "React, TypeScript, Next.js, Tailwind CSS, GraphQL, Redux, tRPC, TanStack, Material UI",
    bullets: [
      "Developed a web application for planning sustainable property renovation and maintenance",
      "Refactored legacy components and optimized application performance",
    ],
  },
  {
    period: "07.2021 - 02.2024",
    company: "LSI Software",
    role: "Software Developer",
    tech: "JavaScript, Python, Jenkins, SQL, TestComplete, Postman, Jest, RabbitMQ",
    bullets: [
      "Developed automated test scripts to validate software functionality",
      "Investigated software defects and maintained test documentation",
    ],
  },
];
