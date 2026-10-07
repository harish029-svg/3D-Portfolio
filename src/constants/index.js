const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Achievements",
    link: "#achievements",
  },
  {
    name: "Education",
    link: "#education",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const personalInfo = {
  name: "Harish Suthar",
  role: "Full-Stack & 3D Web Developer",
  tagline: "Building high-performance full-stack applications, immersive Three.js experiences, and intelligent AI integrations.",
  email: "harissh029@gmail.com",
  phone: "+91 8360455814",
  linkedin: "https://www.linkedin.com/in/harish-suthar09/",
  github: "https://github.com/harish029-svg",
  leetcode: "https://leetcode.com/u/Harry029/",
  resume: "/Harish_Suthar_Resume.pdf",
  location: "Phagwara, Punjab / Rajasthan, India",
  cgpa: "8.75",
  university: "Lovely Professional University",
};

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "3D Apps", imgPath: "/images/designs.svg" },
  { text: "AI Tools", imgPath: "/images/ideas.svg" },
  { text: "Full-Stack", imgPath: "/images/code.svg" },
  { text: "Results", imgPath: "/images/concepts.svg" },
];

const counterItems = [
  { value: 150, suffix: "+", label: "Problems Solved (LeetCode/GFG)" },
  { value: 100, suffix: "+", label: "Days LeetCode Streak" },
  { value: 10, suffix: "k+", label: "Data Records Pipeline" },
  { value: 875, suffix: " CGPA", label: "B.Tech CSE (8.75/10 @ LPU)", isDecimal: true, displayValue: "8.75" },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png", name: "Tech Partner 1" },
  { imgPath: "/images/logos/company-logo-2.png", name: "Tech Partner 2" },
  { imgPath: "/images/logos/company-logo-3.png", name: "Tech Partner 3" },
  { imgPath: "/images/logos/company-logo-4.png", name: "Tech Partner 4" },
  { imgPath: "/images/logos/company-logo-5.png", name: "Tech Partner 5" },
  { imgPath: "/images/logos/company-logo-6.png", name: "Tech Partner 6" },
  { imgPath: "/images/logos/company-logo-7.png", name: "Tech Partner 7" },
  { imgPath: "/images/logos/company-logo-8.png", name: "Tech Partner 8" },
  { imgPath: "/images/logos/company-logo-9.png", name: "Tech Partner 9" },
  { imgPath: "/images/logos/company-logo-10.png", name: "Tech Partner 10" },
  { imgPath: "/images/logos/company-logo-11.png", name: "Tech Partner 11" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Full-Stack Engineering",
    desc: "Designing and building complete web applications with React, Next.js, Node.js, Express, Python FastAPI/Flask, and RESTful APIs.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Interactive 3D & AI Integration",
    desc: "Crafting immersive 3D web graphics with Three.js & WebGL and integrating LLM/AI workflows with low-latency request handling.",
  },
  {
    imgPath: "/images/time.png",
    title: "Scalable Systems & DevOps",
    desc: "Containerizing services with Docker, setting up Git CI/CD pipelines, optimizing SQL/NoSQL databases, and ensuring 99.9% uptime.",
  },
];

const techStackIcons = [
  {
    name: "React.js",
    role: "Frontend Ecosystem",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
    color: "#61dafb",
  },
  {
    name: "Python",
    role: "Backend & AI Pipelines",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
    color: "#ffde57",
  },
  {
    name: "Node.js",
    role: "Server-side Runtime",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
    color: "#68a063",
  },
  {
    name: "Three.js",
    role: "3D Graphics & WebGL",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
    color: "#000000",
  },
  {
    name: "Git & Docker",
    role: "DevOps & Version Control",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
    color: "#f34f29",
  },
];

const skillsCategories = [
  {
    category: "Languages",
    skills: ["Python", "C++", "C", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React.js", "Node.js", "Express.js", "Next.js", "Tailwind CSS", "FastAPI", "Three.js", "Flask"],
  },
  {
    category: "Tools & Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Git", "GitHub", "Postman", "Docker", "REST APIs", "Socket.IO"],
  },
  {
    category: "Core Fundamentals",
    skills: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)", "DBMS", "API Architecture"],
  },
  {
    category: "Soft Skills",
    skills: ["Problem-Solving", "Effective Communication", "Team Work", "Adaptability", "Fast Learner"],
  },
];

const projectsData = [
  {
    id: "voidra-ai",
    title: "Voidra AI",
    badge: "LIVE • May' 26",
    tagline: "AI-Powered Code Generation, Enhancement & Debugging Workspace",
    desc: "Delivered a fully responsive, full-stack web application with consistent UI performance across screen sizes. Features an interactive Three.js frontend connected to a Python REST API backend deployed on Vercel.",
    highlights: [
      "Sub-2ms local routing latency during load testing via optimized backend pipeline.",
      "100% modular feature isolation across debugging, generation, and enhancement modules.",
      "Secure JWT authentication and dynamic AI response streaming.",
    ],
    tech: ["JavaScript", "HTML5", "Tailwind CSS", "Python", "Three.js", "JWT", "REST APIs", "AI/LLM"],
    imgPath: "/images/project1.png",
    github: "https://github.com/harish029-svg",
    live: "https://voidra-ai.vercel.app/",
  },
  {
    id: "urban-tourism",
    title: "Urban Tourism Optimizer",
    badge: "LIVE • Apr' 26",
    tagline: "Predictive Analytics & 3D Spatial-Temporal Urban Dashboard",
    desc: "Produced a complete full-stack application with a robust data pipeline successfully processing 10,000+ records without data loss by developing CRUD data handling and spatial-temporal dataset cleaning.",
    highlights: [
      "Improved platform response speed by 40% through restructuring the REST API architecture.",
      "Attained an 88% predictive model accuracy rate on real-time tourism density inputs.",
      "Integrated live Weather API data and 3D visual density map overlays.",
    ],
    tech: ["React", "Tailwind CSS", "Three.js", "Flask", "REST APIs", "JWT", "Weather API", "ML Analytics"],
    imgPath: "/images/project2.png",
    github: "https://github.com/harish029-svg",
    live: "https://urban-tourism-optimizer-9ont27r1t.vercel.app",
  },
  {
    id: "e-grievance-portal",
    title: "E-Grievance Redressal Portal",
    badge: "LIVE • Full-Stack MERN",
    tagline: "Centralized Citizen Grievance Redressal & Resolution Tracking Platform",
    desc: "Engineered a scalable full-stack MERN portal for citizen grievance logging, real-time ticket tracking, automated department routing, and administrative workflow management.",
    highlights: [
      "Role-based access control (RBAC) for citizens, department officials, and administrators.",
      "Real-time ticket lifecycle tracking with automated status updates and notifications.",
      "Optimized MongoDB indexing and REST APIs ensuring sub-50ms query responses.",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "JWT", "REST APIs"],
    imgPath: "/images/project3.png",
    github: "https://github.com/harish029-svg",
    live: "https://e-grievance-redressal-portal.vercel.app/",
  },
];

const expCards = [
  {
    title: "AI-Driven MERN Stack Trainee & Developer",
    organization: "Lovely Professional University",
    badge: "Certificate • Grade A",
    date: "Jun' 26 - Jul' 26",
    review:
      "Completed an intensive 5-week Agile sprint curriculum. Built scalable full-stack applications with React, Node, Express, MongoDB, and automated containerized deployments using Docker with 99.9% uptime.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    responsibilities: [
      "Earned top-tier A Grade through program-wide performance benchmarks.",
      "Reduced server-side response times by 25% via optimized RESTful API architecture.",
      "Automated CI/CD deployment cycles with Docker containerization.",
    ],
  },
  {
    title: "Full-Stack & 3D Web Project Lead",
    organization: "Voidra AI (Personal Project)",
    badge: "Production / Live",
    date: "May' 26",
    review:
      "Engineered an interactive Three.js 3D frontend integrated with a Python REST API backend. Reached 100% feature isolation across code generation, enhancement, and debugging modules.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    responsibilities: [
      "Architected backend pipeline to achieve sub-2ms local request handling latency.",
      "Developed interactive 3D WebGL visualizers with Three.js and Tailwind CSS.",
      "Integrated secure JWT auth and external AI/LLM API pipelines.",
    ],
  },
  {
    title: "Full-Stack & ML Predictive Analytics Developer",
    organization: "Urban Tourism Optimizer",
    badge: "Production / Live",
    date: "Apr' 26",
    review:
      "Developed a data-driven platform processing 10,000+ spatial-temporal records with 88% predictive model accuracy and a 40% platform load-time speedup.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    responsibilities: [
      "Cleaned and structured multi-source spatial-temporal datasets without data loss.",
      "Restructured REST API connecting React frontend to Python Flask backend.",
      "Integrated real-time Weather API and interactive visual density charts.",
    ],
  },
];

const certificatesList = [
  {
    title: "Database Management System Part-1",
    issuer: "Infosys Springboard",
    date: "Sep' 26",
    badge: "Verified Certificate",
    icon: "🗄️",
    desc: "Comprehensive mastery of Relational Database Concepts, SQL querying, Schema Normalization, Transaction Management, and ACID properties.",
  },
  {
    title: "Certificate of Cyber Job Simulation",
    issuer: "Deloitte",
    date: "Jul' 26",
    badge: "Verified Simulation",
    icon: "🛡️",
    desc: "Practical job simulation covering cyber security fundamentals, threat analysis, incident response, and secure system design.",
  },
  {
    title: "Introduction to AI & ML MOOC",
    issuer: "Skill Era (Proctored Examination)",
    date: "Mar' 25",
    badge: "Proctored Exam",
    icon: "🤖",
    desc: "Foundational machine learning algorithms, model evaluation, supervised/unsupervised learning pipelines, and predictive analytics.",
  },
  {
    title: "AI-Driven MERN Stack Bootcamp",
    issuer: "Lovely Professional University",
    date: "Jul' 26",
    badge: "Grade A Benchmark",
    icon: "💻",
    desc: "Intensive 5-week Agile sprint curriculum covering full-stack MERN engineering, RESTful APIs, Git workflows, and Docker containerization.",
  },
];

const achievementsList = [
  {
    title: "150+ Coding Problems Solved",
    platform: "LeetCode, GeeksforGeeks & CodeForces",
    icon: "🧩",
    desc: "Consistently sharpening algorithmic intuition across Data Structures, Dynamic Programming, Trees, Graphs, and System Design.",
    link: "https://leetcode.com/u/Harry029/",
    linkText: "View LeetCode Profile",
  },
  {
    title: "50-Day & 100-Day Consistency Badges",
    platform: "LeetCode Daily Challenges",
    icon: "🔥",
    desc: "Awarded LeetCode milestone consistency badges for continuous daily problem solving and dedication to algorithmic excellence.",
    link: "https://leetcode.com/u/Harry029/",
    linkText: "View Badges on LeetCode",
  },
  {
    title: "Represented LPU at All India Inter-University Championships",
    platform: "AIU Yogasana Championships (KIIT 2024, Vels Chennai 2025)",
    icon: "🏆",
    desc: "Selected to represent Lovely Professional University at prestigious national inter-university athletic and yogasana competitions.",
  },
];

const educationList = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    score: "CGPA: 8.75 / 10",
    period: "Aug' 24 – Present",
    desc: "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Web Technologies.",
    highlight: "8.75 CGPA",
  },
  {
    institution: "SVPS School",
    location: "Palsana, Rajasthan",
    degree: "Intermediate (12th Grade - Non-Medical / Science)",
    score: "Percentage: 73.5%",
    period: "Mar' 22 – May' 23",
    desc: "Focused on Mathematics, Physics, and Chemistry with rigorous analytical and problem-solving training.",
    highlight: "73.5%",
  },
  {
    institution: "BrahmRishi Mission School",
    location: "Abohar, Punjab",
    degree: "Matriculation (10th Grade)",
    score: "Percentage: 86.0%",
    period: "Mar' 20 – May' 21",
    desc: "Graduated with High Distinction across Mathematics, Science, and Computer Foundations.",
    highlight: "86.0%",
  },
];

const socialImgs = [
  {
    name: "leetcode",
    url: "https://leetcode.com/u/Harry029/",
    imgPath: "/images/logos/leetcode.svg",
    label: "LeetCode Profile",
  },
  {
    name: "github",
    url: "https://github.com/harish029-svg",
    imgPath: "/images/logos/git.svg",
    label: "GitHub",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/harish-suthar09/",
    imgPath: "/images/linkedin.png",
    label: "LinkedIn",
  },
  {
    name: "email",
    url: "mailto:harissh029@gmail.com",
    imgPath: "/images/chat.png",
    label: "Email",
  },
];

export {
  navLinks,
  personalInfo,
  words,
  counterItems,
  logoIconsList,
  abilities,
  techStackIcons,
  skillsCategories,
  projectsData,
  expCards,
  certificatesList,
  achievementsList,
  educationList,
  socialImgs,
};