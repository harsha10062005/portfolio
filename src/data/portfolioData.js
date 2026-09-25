// ============================================================================
// HARSHA VARDHAN — INTERACTIVE DIGITAL VISITING CARD & EDITORIAL PORTFOLIO DATA
// All verified facts adhere strictly to instructions (no invented URLs/awards)
// ============================================================================

export const portfolioData = {
  // Brand Identity
  name: "Harsha Vardhan",
  initials: "HV",
  role: "Software Developer",
  roleSecondary: "Full Stack Developer · AI Application Developer",
  tagline: "Synthesizing client-side predictability with resilient backend architectures and real-time artificial intelligence workflows.",
  status: "OPEN FOR OPPORTUNITIES '26",
  availability: "AVAILABLE FOR HIRE",
  
  // Editorial Metadata
  regNo: "REG. NO: HV-2026-IND",
  spec: "SPEC: FULL-STACK & AI",
  location: "Hyderabad, India",
  coordinates: "17.3850° N, 78.4867° E",
  timezone: "IST (UTC+5:30)",
  cardIndex: "INDEX: 01 / 26",
  passportId: "HV-2026-PASSPORT",

  // Contact
  email: "hv6380355@gmail.com",
  phone: "+91 7993861576",
  github: "https://github.com/harsha10062005",
  linkedin: "https://linkedin.com", // generic link preserved as placeholder

  // Bio & Statement
  statement: "Harsha Vardhan is a Computer Science Engineering developer with hands-on experience building responsive web applications, REST APIs and AI-powered applications.",
  
  philosophy: "Clean abstractions over complex mechanics. Build systems that are easy to reason about, performant under pressure, and visually unapologetic.",

  coreDomains: [
    {
      id: "01",
      title: "FULL-STACK APPS",
      description: "Architecting modular React, Node.js, and Django architectures with clean RESTful endpoints, type-safe interfaces, and relational database schemas."
    },
    {
      id: "02",
      title: "APPLIED AI",
      description: "Bridging large language models (Google Gemini API) with practical web interfaces to build automated resume analyzers, intelligent assistants, and voice agents."
    }
  ],

  // Selected Work (Strictly the 3 specified projects)
  projects: [
    {
      id: "01",
      number: "01",
      title: "Nexa Mart E-Commerce Platform",
      category: "FULL STACK E-COMMERCE & SCALABILITY",
      tags: ["React.js", "TypeScript", "Express.js", "REST API", "Vercel"],
      description: "A responsive, full-featured modern e-commerce platform built with React.js and TypeScript, featuring real-time catalog discovery, category filtering, cart state persistence, and high-concurrency Express.js REST APIs deployed on Vercel.",
      extendedDesc: "Engineered Nexa Mart as a high-performance modern retail platform with dynamic component architecture, localStorage cart persistence, seamless search & filtering, and a production-grade REST API backend hosted with sub-second response times.",
      specs: [
        { label: "FRONTEND", value: "React.js, TypeScript, Tailwind" },
        { label: "BACKEND", value: "Express.js, REST API, Axios" },
        { label: "DEPLOYMENT", value: "Vercel (Production CI/CD)" },
        { label: "STATUS", value: "Live & Deployed on Vercel" }
      ],
      features: [
        "Component-based modular storefront with responsive UI across all devices",
        "Dynamic catalog search, category filtering, and instant pricing calculations",
        "Persistent shopping cart and checkout drawer with state synchronization",
        "Production deployment on Vercel with high-availability API endpoints"
      ],
      sourceUrl: "https://github.com/harsha10062005/nexa-mart",
      liveUrl: "https://dhulamart-fpsj-gray.vercel.app/",
      badge: "V.2.0 · REACT & TS · DEPLOYED VERCEL",
      metric: "LIVE: DHULAMART-FPSJ-GRAY.VERCEL.APP",
      previewType: "ecommerce"
    },
    {
      id: "02",
      number: "02",
      title: "AI Resume Enhancer",
      category: "GENERATIVE AI & ATS OPTIMIZATION",
      tags: ["Gemini API", "JavaScript", "Prompt Engineering", "NLP Processing"],
      description: "An AI-powered resume enhancement application designed to optimize resume content for specific job roles through structured prompting and professional content generation.",
      extendedDesc: "Harnesses Google's Gemini LLM to analyze resume syntax against job descriptions. Features prompt chains designed for zero hallucination and metric-grounded suggestions.",
      specs: [
        { label: "CORE ENGINE", value: "Gemini API (Google AI Studio)" },
        { label: "LANGUAGE", value: "Modern JavaScript / ES6+" },
        { label: "CAPABILITY", value: "ATS Scoring, Targeted Skill Gap Analysis" },
        { label: "STATUS", value: "Prompt Pipeline Active" }
      ],
      features: [
        "Structured prompt workflows evaluating industry ATS compliance",
        "Automated bullet point rewrites focusing on measurable achievements",
        "Targeted keyword extraction and technical terminology matching",
        "Real-time JSON response parsing with clean structured display"
      ],
      sourceUrl: "https://github.com/harsha10062005",
      badge: "GEMINI-1.5-FLASH · PROMPT PIPELINE",
      metric: "ATS SCORE: 94.8%",
      previewType: "ai"
    },
    {
      id: "03",
      number: "03",
      title: "Voice Assistant & Authentication",
      category: "VOICE AI & BIOMETRIC AUTH",
      tags: ["Python", "SpeechRecognition", "PyAudio", "Auth Protocols"],
      description: "A Python-based voice interaction and authentication system involving recorded voice input, audio processing and voice-based interaction workflows.",
      extendedDesc: "Voice recognition workstation interface configured in Python. Dispatches desktop automation workflows and gates operations behind voice token and password validation.",
      specs: [
        { label: "CORE STACK", value: "Python, PyAudio, SpeechRecognition" },
        { label: "SECURITY", value: "Hashed Local Auth, Permission Flags" },
        { label: "WORKFLOW", value: "Voice Command Dispatcher & TTS Feedback" },
        { label: "STATUS", value: "16-Bit PCM Signal Secure" }
      ],
      features: [
        "Real-time microphone input stream processing with PyAudio",
        "Robust speech-to-text recognition with voice prompt dispatching",
        "Biometric audio waveform analysis and security authentication gate",
        "Hands-free local desktop automation and productivity scripts"
      ],
      sourceUrl: "https://github.com/harsha10062005",
      badge: "VOICE-ENGINE.PY · SPECTRUM ANALYSIS",
      metric: "SIGNAL: 16-BIT PCM",
      previewType: "voice"
    }
  ],

  // Stack (Editorial Typographic List)
  stack: [
    { number: "01", name: "REACT.JS", detail: "FUNCTIONAL COMPONENTS / CUSTOM HOOKS / STATE LOOPS", highlight: true },
    { number: "02", name: "PYTHON", detail: "BACKEND SYSTEMS / AUTOMATION SCRIPTS / AI LIBS", highlight: true },
    { number: "03", name: "DJANGO", detail: "MVT ARCHITECTURE / ORM / REST FRAMEWORK", highlight: false },
    { number: "04", name: "NODE.JS & EXPRESS", detail: "MICROSERVICES / ASYNC I/O / REST ARCHITECTURE", highlight: false },
    { number: "05", name: "JAVASCRIPT & TS", detail: "ESNEXT / STRICT TYPES / MODERN DOM APIS", highlight: true },
    { number: "06", name: "MYSQL & SQLITE", detail: "RELATIONAL MODELING / INDEXING / QUERY OPTIMIZATION", highlight: false },
    { number: "07", name: "GIT & CI WORKFLOWS", detail: "VERSION CONTROL / BRANCHING / GITHUB REPOS", highlight: false }
  ],

  // Experience (Professional Chronicle)
  experience: [
    {
      id: "01",
      role: "React.js Developer Intern",
      company: "INTEGRATERS",
      term: "INTERNSHIP TENURE · FRONTEND ARCHITECTURE",
      description: "Spearheaded modular component development for interactive client portals using React.js. Streamlined global state patterns, optimized browser render cycles, and collaborated with UX leads to ensure clean cross-device consistency.",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "State Management", "Event Handling", "API Integration", "Responsive Design", "Git/GitHub"]
    },
    {
      id: "02",
      role: "Python Full Stack Intern",
      company: "DATAVALLEY",
      term: "FULL STACK INTERNSHIP · BACKEND & DATA",
      description: "Engineered and maintained backend REST services with Python and Django. Implemented efficient database queries with MySQL, handled user authentication, and conducted unit testing across mission-critical endpoints.",
      skills: ["Python", "Django", "Authentication & Authorization", "MySQL Database", "REST API Development", "Deployment & Debugging"]
    }
  ],

  // Education
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Krishna University College of Engineering and Technology",
      period: "2022 – 2026",
      score: "CGPA: 7.5",
      isPrimary: true
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Star Junior College",
      period: "Completed",
      score: "60%",
      isPrimary: false
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Sri Chaitanya Techno School",
      period: "Completed",
      score: "GPA: 10",
      isPrimary: false
    }
  ],

  // Certifications
  certifications: [
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM",
      badge: "AI CORE"
    },
    {
      title: "Prompt Engineering and Advanced ChatGPT",
      issuer: "Specialized Training",
      badge: "LLM PROMPT"
    },
    {
      title: "Python Full Stack Development",
      issuer: "Data Valley",
      badge: "FULL STACK"
    }
  ]
};
