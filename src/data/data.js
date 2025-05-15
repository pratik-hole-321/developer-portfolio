// src/data/data.js

export const professionalSummary = `
Frontend Developer with 2+ years of experience in building responsive and SEO-friendly web apps using React.js, JavaScript, Redux, and Tailwind CSS. Skilled in UI development, state management, and modern frontend tools.
`;

export const personalInfo = {
  name: "Pratik Hole",
  role: "Frontend Developer",
  location: "Pune, India",
  email: "pratik.hole321@gmail.com",
  phone: "+91 9146342251",
};

export const education = [
  {
    degree: "Master of Computer Science",
    institution: "Anna Saheb Magar Mahavidyalaya, Hadapsar",
    year: "2019 - 2021",
    percentage: "66%",
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "Shri Chatrapati Shivaji Mahavidyalaya, Shrigonda",
    year: "2015 - 2018",
    percentage: "60%",
  },
];

export const skills = [
  {
    title: "Frontend",
    skillList: [
      { name: "React.js" },
      // { name: "Next.js" },
      { name: "Redux" },
      { name: "Redux Toolkit" },
      { name: "JavaScript (ES6+)" },
      // { name: "TypeScript" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    title: "UI Frameworks",
    skillList: [
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
      { name: "React Bootstrap" },
    ],
  },
  // {
  //   title: "Testing",
  //   skillList: [{ name: "Jest" }, { name: "React Testing Library" }],
  // },
  {
    title: "Build & Tooling",
    skillList: [{ name: "Webpack" }, { name: "Babel" }],
  },
  {
    title: "DevOps & Deployment",
    skillList: [{ name: "CI/CD" }],
  },
];

export const experience = [
  {
    position: "Software Developer",
    company: "Arkin Techno Private Limited",
    location: "Pune",
    duration: "May 2022 – Present",
    responsibilities: [
      "Developed and maintained frontend features using React.js",
      "Collaborated with designers and backend developers",
      // "Improved UI performance and optimized components",
      "Implemented state management using Redux and Redux Toolkit",
      "Worked on RESTful API integrations for seamless data flow",
      // "Enhanced accessibility and ensured cross-browser compatibility",
    ],
  },
];

export const projects = [
  // Developer Portfolio
  {
    title: "Developer Portfolio",
    description:
      "Built a modern developer portfolio showcasing projects,\
      skills, and contact. Integrated with Gemini API for dynamic content.",
    tech: [
      "Next.js",
      "Tailwind",
      "Gemini API",
      "HTML",
      "CSS",
      "GIT",
      "Github",
      "NPM",
      "Vercel",
    ],
    liveLink: "https://password-generator-ochre.vercel.app/",
    github: "https://github.com/pratik-hole-321/password-generator",
    status: "In Progress",
  },
  ,
  // Password
  {
    title: "PassGen - Password Generator Tool",
    description:
      "A SEO friendly, responsive and user-friendly password generator\
      built using Next.js and Tailwind CSS. Allows users to generate secure,\
      customizable passwords with options to select length, numbers, symbols,\
      and uppercase letters. Fully responsive with a clean and modern UI.",
    tech: [
      "Next.js",
      "Tailwind",
      "HTML",
      "CSS",
      "GIT",
      "Github",
      "NPM",
      "Vercel",
    ],
    liveLink: "https://password-generator-ochre.vercel.app/",
    github: "https://github.com/pratik-hole-321/password-generator",
    status: "Completed",
  },
  // Dev Bytes md blog
  {
    title: "DevBytes -  Blogging Platform",
    description:
      "A clean, SEO-friendly, and performance-optimized blogging platform built\
      with Next.js and Tailwind CSS. Content is managed via Markdown files with\
      dynamic routing, static site generation (SSG), and content-driven UI rendering\
      following modern web development best practices.",
    tech: [
      "Next.js",
      "Tailwind",
      "Markdown",
      "React Syntax Highlighter",
      "HTML",
      "CSS",
      "GIT",
      "Github",
      "Vercel",
      "NPM",
    ],
    liveLink: "https://dev-bytes-md-blogging.vercel.app/",
    github: "https://github.com/pratik-hole-321/dev-bytes-md-blogging",
    status: "Completed",
  },
  {
    title: "Mutual Fund Returns Calculator",
    description:
      "A web-based financial calculator built with React, React-Bootstrap, and Chart.js. \
      Allows users to calculate SIP returns with interactive charts. Features\
      include responsive UI, real-time calculations, \
      and data visualization using React Chart.js 2 for better financial decision-making.",
    tech: [
      "React",
      "Chart.js",
      "react-bootstrap",
      "bootstrap",
      "React Chartjs 2",
      "HTML",
      "CSS",
      "GIT",
      "Github",
    ],
    liveLink: "https://mutual-fund-returns-calculator-three.vercel.app/",
    github: "https://github.com/pratik-hole-321/mutual-fund-returns-calculator",
    status: "Completed",
  },
  // AI Tool
  {
    title: "React AI Tool",
    description:
      "An interactive AI chatbot interface built using React\
      and Tailwind CSS, integrated with Gemini API for conversational\
      AI capabilities. Supports code and text rendering using React Markdown\
      and React Syntax Highlighter. Features a clean, responsive chat UI with\
      user and AI conversations, markdown rendering, and code block support.",
    tech: [
      "React",
      "Tailwind CSS",
      "Gemini API",
      "React Markdown",
      "React Syntax Highlighter",
      "vite",
      "HTML",
      "CSS",
      "GIT",
      "Github",
      "Vercel",
    ],
    liveLink: "https://react-ai-tool-lemon.vercel.app/",
    github: "https://github.com/pratik-hole-321/react-ai-tool",
    status: "In Progress",
  },
  // Spinner
  {
    title: "React Custom Spinner - Npm Package",
    description:
      "A reusable and customizable spinner/loader components library built\
      with React and TypeScript. Published as an NPM package with multiple\
      unique animations. Integrated with Babel, Webpack for build optimization,\
      and documented using Markdown with live code examples using React Markdown\
      and React Syntax Highlighter. Fully styled using Tailwind CSS.",
    tech: [
      "React",
      "TypeScript",
      "Babel",
      "Webpack",
      "NPM",
      "HTML",
      "CSS",
      "Markdown",
      "React Markdown",
      "React Syntax Highlighter",
      "Tailwind CSS",
    ],
    liveLink: "https://react-custom-spinner.vercel.app/",
    github: "https://github.com/pratik-hole-321/react-custom-spinner",
    status: "Completed",
  },

  // Flash Gen
  {
    title: "FlashGen",
    description:
      "A smart study assistant built with Next.js and integrated with ChatGPT API\
      to automatically generate study flashcards from user-provided content. Helps\
      learners quickly convert text into question-answer flashcards for effective\
      revision and personalized learning.",
    tech: ["Nextjs", "React", "Tailwind", "Chat GPT API"],
    liveLink: "#",
    github: "#",
    status: "Upcoming",
  },
  // {
  //   title: "Custom Hooks - Npm Package",
  //   description:
  //     "Frontend website, calculator the returns and side by show pie chart",
  //   tech: ["React", "Tailwind", "Chart.js"],
  //   liveLink: "#",
  //   github: "#",
  // }
];
