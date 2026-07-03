import { Layout, Cpu, Database, Code2, Github } from 'lucide-react';

export const PROJECTS = [
  {
    title: "Sree Devi Collection",
    subtitle: "Real-World Client Project",
    description: "An e-commerce collection platform tailored to local client requirements. Delivered as a freelance project and successfully deployed on Vercel for the client's localized use.",
    tags: ["Freelance", "Client Project", "Vercel"],
    github: null,
    live: "https://sree-devi-collection.vercel.app/",
    icon: <Layout className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "The Blueprint Squad",
    subtitle: "Real-World Client Project",
    description: "A professional web application built according to specific local client requirements. Ordered by the client and deployed on Vercel to establish their online digital presence.",
    tags: ["Freelance", "Client Project", "Vercel"],
    github: null,
    live: "https://the-blueprint-squad.vercel.app/",
    icon: <Layout className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Carbon Intelligence Platform",
    subtitle: "AI Emissions Tracker",
    description: "An advanced, AI-powered platform for tracking, predicting, and optimizing carbon emissions across organizations and supply chains. Built to empower businesses to make data-driven sustainability decisions.",
    tags: ["AI", "Analytics", "React"],
    github: "https://github.com/vipulofficial206/carbon-intelligence-platform",
    live: null,
    icon: <Database className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Dataset Intelligence Agent",
    subtitle: "Local AI Dataset Analyzer",
    description: "A powerful, fully local AI agent designed to analyze datasets across multiple formats (CSV, PDF, Image, Audio) and generate actionable insights, project ideas, and quality evaluations using open-source models.",
    tags: ["AI Agent", "Data Analysis", "Python"],
    github: "https://github.com/vipulofficial206/Dataset-Intelligence-Agent",
    live: null,
    icon: <Cpu className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Crickee",
    subtitle: "Live Cricket Auction App",
    description: "Crickee is a full-stack MERN application that brings the excitement of a live cricket auction to your fingertips. Unlike traditional fantasy leagues, Crickee features a real-time bidding system where players are exclusively owned by the highest bidder.",
    tags: ["MERN", "Socket.io", "Real-time"],
    github: "https://github.com/vipulofficial206/crickee",
    live: null,
    icon: <Layout className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "MailMind AI",
    subtitle: "Autonomous Productivity Sanctuary",
    description: "MailMind AI is not just an email client; it's an Autonomous Productivity Sanctuary. It uses advanced NLP and real-time web context to distill your inbox into a morning briefing, draft professional replies, and turn noise into actionable tasks.",
    tags: ["NLP", "AI Agent", "Productivity"],
    github: "https://github.com/vipulofficial206/mailmind",
    live: null,
    icon: <Code2 className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Portfolio Website",
    subtitle: "Modern Developer Portfolio",
    description: "A modern, responsive developer portfolio website built with React, showcasing my skills, projects, and contact info. It includes smooth animations and interactive UI to provide a great visitor experience.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/vipulofficial206/portfolio-website-vipul",
    live: "https://portfolio-website-vipul.vercel.app/",
    icon: <Layout className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Plant Analysis",
    subtitle: "AI-Based Soil Intelligence",
    description: "Krishi Saathi AI is a comprehensive, AI-Based Soil Intelligence System designed to help farmers make data-driven decisions. By analyzing real-world soil test reports, local agro-climatic conditions, and environmental metrics, the system recommends the most suitable crops.",
    tags: ["AI", "Machine Learning", "Data Analysis"],
    github: "https://github.com/vipulofficial206/plant_analysis",
    live: null,
    icon: <Database className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Virtual Classroom",
    subtitle: "Real-time Interaction Platform",
    description: "A comprehensive, real-time Virtual Classroom solution designed for seamless teacher-student interaction. This platform features live classes with WebRTC video, real-time attendance via QR codes, an interactive quiz system, automated analytics, and a robust notification engine.",
    tags: ["WebRTC", "React", "Node.js", "Socket.io"],
    github: "https://github.com/vipulofficial206/virtual_classroom",
    live: null,
    icon: <Layout className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Plant Doctor",
    subtitle: "AI Disease Detection",
    description: "Plant Doctor is an AI-based plant disease detection and advisory system that identifies plant health issues from images using a Convolutional Neural Network (CNN).",
    tags: ["Python", "TensorFlow", "CNN", "FastAPI"],
    github: "https://github.com/vipulofficial206/plant-doctor",
    live: null,
    icon: <Cpu className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Plant Doctor Frontend",
    subtitle: "React UI for Plant Doctor",
    description: "Plant Doctor Frontend is a React-based user interface for the AI Plant Doctor system. It allows users to upload plant leaf images, interact with the disease detection model, and receive diagnosis and treatment suggestions.",
    tags: ["React", "UI/UX", "API Integration"],
    github: "https://github.com/vipulofficial206/plant-doctor-frontend",
    live: null,
    icon: <Layout className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Ohm’s Law Circuit Builder",
    subtitle: "3D Interactive Web Platform",
    description: "Ohm’s Law Circuit Builder is an interactive web application that allows users to construct simple electrical circuits and understand the relationship between voltage, current, and resistance. The system dynamically calculates circuit values using Ohm’s Law and provides real-time visualization.",
    tags: ["React", "Three.js", "TypeScript", "WebGL"],
    github: "https://github.com/vipulofficial206/Ohm-s-Law-Circuit-Builder",
    live: null,
    icon: <Cpu className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Food Nutritionist",
    subtitle: "AI Nutrition Analyzer",
    description: "Food Nutritionist is a deep learning–based food recognition and nutrition analysis system that identifies food items from images using a Convolutional Neural Network (CNN).",
    tags: ["Gemini AI", "React", "Node.js", "Vision"],
    github: "https://github.com/vipulofficial206/food_nutritionist",
    live: null,
    icon: <Database className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Form Canvas",
    subtitle: "MERN Stack Form Builder",
    description: "Form Canvas is a full-stack web application that replicates and extends the core features of Google Forms. It allows users to create, share, and analyze forms seamlessly through an intuitive drag-and-drop interface.",
    tags: ["MERN", "Tailwind CSS", "Recharts", "JWT"],
    github: "https://github.com/vipulofficial206/Form_canvas",
    live: null,
    icon: <Layout className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "EAT-IT Frontend",
    subtitle: "Food Delivery App",
    description: "Food Delivery App built using React provides users with a seamless interface to browse through restaurants, view menus, add items to the cart, and place orders. The app focuses on a user-friendly UI/UX with smooth navigation and responsiveness.",
    tags: ["React.js", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/vipulofficial206/EAT-IT-Frontend",
    live: null,
    icon: <Layout className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "GitHub Profile Analyzer",
    subtitle: "Stats Visualization",
    description: "A responsive React + TypeScript web app that analyzes any GitHub profile. View user stats, explore repositories, and visualize daily commits — beautifully styled with ShadCN UI and powered by GitHub’s public API.",
    tags: ["GitHub API", "React", "Recharts", "Tailwind"],
    github: "https://github.com/vipulofficial206/GitHubProfileAnalyzer",
    live: null,
    icon: <Github className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "QR Generator",
    subtitle: "Utility Tool",
    description: "A QR generator website which works on both laptop and mobile and easy to use with some cool animations and working module a download option to download the QR within seconds.",
    tags: ["React", "QR Code API", "JavaScript"],
    github: "https://github.com/vipulofficial206/QRGenerator",
    live: null,
    icon: <Code2 className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&q=80&w=800"
  }
];

export const SKILLS = [
  { category: "Frontend", items: ["React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"] },
  { category: "ML & Deep Learning", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision", "Gemini APIs and Integrations", "FastAPI"] },
  { category: "Backend & DB", items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "SQL"] },
  { category: "Tools & Others", items: ["Three.js", "Git/GitHub", "Axios", "JWT Auth", "DevOps Basics"] }
];

export const CERTIFICATIONS = [
  { 
    title: "Devops, Agile & Design Thinking", 
    issuer: "IBM", 
    year: "2025",
    link: "https://courses.vit.skillsnetwork.site/certificates/773243bbcbc6468297fa7bf267fcb5fb",
    icon: <Cpu className="w-5 h-5" />
  },
  { 
    title: "DevOps Fundamentals", 
    issuer: "IBM", 
    year: "2025",
    link: "https://courses.vit.skillsnetwork.site/certificates/31c1497e4c234ee48e9aeff8fe18ba3f",
    icon: <Database className="w-5 h-5" />
  },
  { 
    title: "Web Development", 
    issuer: "Smarted", 
    year: "2025",
    link: "https://drive.google.com/file/d/1SAyQtBvNY2Uzy0javlwFPAatS_qJv3Yq/view?usp=sharing",
    icon: <Layout className="w-5 h-5" />
  },
  { 
    title: "IBM-DevOps", 
    issuer: "Prolearn / Adroit Technologies", 
    year: "2025",
    link: "https://drive.google.com/file/d/1SAyQtBvNY2Uzy0javlwFPAatS_qJv3Yq/view?usp=sharing",
    icon: <Code2 className="w-5 h-5" />
  }
];

export const EDUCATION = [
  { degree: "B.Tech in Computer Science & Engineering", school: "VIT-AP University", period: "2023 – 2027", grade: "8.35 CGPA" },
  { degree: "Senior Secondary (XII), Science", school: "MPC", period: "2021 – 2023", grade: "93%" }
];

export const GITHUB_STATS = [
  { label: "Repositories", value: "20+", icon: <Database className="w-4 h-4" /> },
  { label: "Hackathons", value: "25+", icon: <Code2 className="w-4 h-4" /> },
  { label: "Practical Experience", value: "1+ Years", icon: <Cpu className="w-4 h-4" /> },
];

export const SOCIAL_LINKS = [
  { id: 'github', label: 'GitHub', url: 'https://github.com/vipulofficial206' },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/vipul-thamminana' },
  { id: 'email', label: 'Email', url: 'mailto:vipulofficial206@gmail.com' }
];
