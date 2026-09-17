export interface ProjectItem {
  title: string;
  category: string;
  tools: string;
  description: string;
  image: string;
  link?: string;
  video?: string;
}

export interface CareerItem {
  role: string;
  company: string;
  date: string;
  description: string;
}

export interface SkillPillar {
  title: string;
  description: string;
  skills: string[];
}

export const portfolioData = {
  profile: {
    firstName: "ABHISHEK",
    lastName: "SALUNKE",
    fullName: "Abhishek Salunke",
    title: "Python Developer | Machine Learning & Generative AI",
    roles: [
      { primary: "Python", secondary: "Developer" },
      { primary: "AI / ML", secondary: "Engineer" },
    ],
    email: "abhisheksalunke7387@gmail.com",
    phone: "+91 8261850720",
    location: "Malegaon, Maharashtra, India",
    socials: {
      github: "https://github.com/abhishek-salunkergb",
      linkedin: "https://linkedin.com/in/abhishek-salunke-860761409",
      resume: "/Abhishek_Salunke_Resume.pdf",
    },
  },
  about: {
    title: "About Me",
    bio: "Computer Science Engineering graduate (CGPA 8.19, SPPU) with hands-on experience across Python development, applied machine learning, and secure backend design. Currently interning as an AI/ML Engineer at Blujay Technologies building production LLM chatbots, with past data analytics experience at Paarsh Infotech cutting data preparation time by ~40%. Passionate about building robust AI-driven systems backed by research.",
  },
  whatIDo: [
    {
      title: "AI & ML",
      description:
        "Building production-grade Generative AI applications, LLM agents, predictive models, and real-time audio/NLP pipelines.",
      skills: [
        "Python",
        "Generative AI",
        "Google Gemini API",
        "OpenAI API",
        "Prompt Engineering",
        "PyTorch",
        "Hugging Face",
        "Random Forest",
        "Speech-to-Text",
        "EDA & Pandas",
      ],
    },
    {
      title: "BACKEND",
      description:
        "Architecting secure, high-performance RESTful backends, auth flows, cryptographic security, and automated pipelines.",
      skills: [
        "FastAPI",
        "Django",
        "Flask",
        "REST APIs",
        "AES Encryption",
        "OTP Auth",
        "MySQL",
        "SQLite",
        "Docker",
        "System Architecture",
      ],
    },
    {
      title: "DATA ANALYTICS",
      description:
        "Transforming complex raw datasets into actionable insights through statistical modeling, automated data cleaning, algorithm benchmarking, and interactive visual dashboards.",
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Data Preprocessing",
        "EDA",
        "Matplotlib",
        "Power BI",
        "SQL Queries",
        "Scikit-Learn",
        "Model Benchmarking",
      ],
    },
  ] as SkillPillar[],
  career: [
    {
      role: "AI/ML Intern",
      company: "Blujay Technologies",
      date: "2026 – PRESENT",
      description:
        "Developing production LLM-powered applications including an AI conversational chatbot and real-time interview intelligence assistant. Implemented prompt engineering, conversation memory, response caching, multilingual (Hindi/English) query handling, and API quota management.",
    },
    {
      role: "Data Analytics Intern",
      company: "Paarsh Infotech Pvt. Ltd.",
      date: "2024 – 2025",
      description:
        "Preprocessed 10,000+ row datasets cutting data prep time by ~40%. Built EDA visualizations and dashboards in Pandas, Matplotlib, and Power BI. Benchmarked 4+ ML algorithms on accuracy, precision, and F1-score.",
    },
    {
      role: "B.E. in Computer Science",
      company: "MMANTC, SPPU (CGPA 8.19)",
      date: "2022 – 2026",
      description:
        "5th rank in final year & Star Performer of the batch (Semester GPA 9.15). Co-authored a research paper validating Random Forest ML models on agricultural predictive platforms. Won multiple inter-college debate competitions.",
    },
  ] as CareerItem[],
  projects: [
    {
      title: "Farmer Marketplace",
      category: "Full-Stack Agriculture Platform",
      tools: "React, Python, Django, MySQL, REST APIs, ML Pricing",
      description:
        "Agricultural marketplace platform connecting farmers directly with buyers. Built with Django backend and React frontend, featuring farmer/buyer registration, regional crop pricing, real-time bargaining, and product listing workflows.",
      image: "/images/farming_project.jpg",
      link: "https://github.com/abhishek-salunkergb",
    },
    {
      title: "AI Interview Assistant",
      category: "Generative AI & Audio Desktop App",
      tools: "Python, FastAPI, Groq LLM, RAG, Speech-to-Text, WebSockets",
      description:
        "Real-time AI interview intelligence application processing candidate audio, microphone streams, and questions. Implemented RAG pipeline with strict candidate resume grounding, speech-to-text transcription, and low-latency LLM feedback.",
      image: "/images/interview_project.jpg",
      link: "https://github.com/abhishek-salunkergb",
    },
    {
      title: "Production LLM Chatbot",
      category: "AI & Multilingual Conversational Agent",
      tools: "Python, Flask, Google Gemini API, Prompt Engineering, Redis",
      description:
        "Enterprise AI chatbot built for automated customer engagement and lead capture. Implemented conversation memory, multilingual query routing (Hindi/English), response caching, and flask-limiter API quota protection.",
      image: "/images/chatbot_project.jpg",
      link: "https://github.com/abhishek-salunkergb",
    },
    {
      title: "Hospital Management System",
      category: "Python & Relational Database Application",
      tools: "Python, MySQL, SQLite, OOP, CRUD, Role-Based Access",
      description:
        "Healthcare administration system managing patient registration, appointment scheduling, and automated billing workflows. Designed normalized database schemas, role-based staff authentication, and record auditing.",
      image: "/images/hospital_project.jpg",
      link: "https://github.com/abhishek-salunkergb",
    },
  ] as ProjectItem[],
};
