import { Layout, Cpu, Database, Code2, Github } from 'lucide-react';

export const PROJECTS = [
  {
    title: "Plant Analysis",
    subtitle: "AI-Based Soil Intelligence",
    description: "Krishi Saathi AI is a comprehensive, AI-Based Soil Intelligence System designed to help farmers make data-driven decisions. By analyzing real-world soil test reports, local agro-climatic conditions...",
    tags: ["AI", "Machine Learning", "Data Analysis"],
    link: "https://github.com/vipulofficial206/plant_analysis",
    icon: <Database className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Virtual Classroom",
    subtitle: "Real-time Interaction Platform",
    description: "A comprehensive, real-time Virtual Classroom solution designed for seamless teacher-student interaction. This platform features live classes with WebRTC video, real-time attendance via QR codes...",
    tags: ["WebRTC", "React", "Node.js", "Socket.io"],
    link: "https://github.com/vipulofficial206/virtual_classroom",
    icon: <Layout className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Portfolio Website",
    subtitle: "Modern Developer Portfolio",
    description: "A modern, responsive developer portfolio website built with React, showcasing my skills, projects, and contact info. It includes smooth animations and interactive UI to provide a great visitor experience.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/vipulofficial206/portfolio-website-vipul",
    icon: <Code2 className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Plant Doctor",
    subtitle: "AI Disease Detection",
    description: "Plant Doctor is an AI-based plant disease detection and advisory system that identifies plant health issues from images using a Convolutional Neural Network (CNN).",
    tags: ["Python", "TensorFlow", "React", "FastAPI"],
    link: "https://github.com/vipulofficial206/plant-doctor",
    icon: <Cpu className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Plant Doctor Frontend",
    subtitle: "React UI for Plant Doctor",
    description: "Plant Doctor Frontend is a React-based user interface for the AI Plant Doctor system. It allows users to upload plant leaf images, interact with the disease detection model, and receive diagnosis...",
    tags: ["React", "UI/UX", "API Integration"],
    link: "https://github.com/vipulofficial206/plant-doctor-frontend",
    icon: <Layout className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Ohm’s Law Circuit Builder",
    subtitle: "3D Interactive Web Platform",
    description: "Ohm’s Law Circuit Builder is an interactive web application that allows users to construct simple electrical circuits and understand the relationship between voltage, current, and resistance.",
    tags: ["React", "Three.js", "TypeScript", "WebGL"],
    link: "https://github.com/vipulofficial206/Ohm-s-Law-Circuit-Builder",
    icon: <Cpu className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Food Nutritionist",
    subtitle: "AI Nutrition Analyzer",
    description: "Food Nutritionist is a deep learning–based food recognition and nutrition analysis system that identifies food items from images using a Convolutional Neural Network (CNN).",
    tags: ["Gemini AI", "React", "Node.js", "Vision"],
    link: "https://github.com/vipulofficial206/food_nutritionist",
    icon: <Database className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Form Canvas",
    subtitle: "MERN Stack Form Builder",
    description: "Form Canvas is a full-stack web application that replicates and extends the core features of Google Forms. It allows users to create, share, and analyze forms seamlessly.",
    tags: ["MERN", "Tailwind CSS", "Recharts", "JWT"],
    link: "https://github.com/vipulofficial206/Form_canvas",
    icon: <Layout className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "EAT-IT Frontend",
    subtitle: "Food Delivery App",
    description: "Food Delivery App built using React provides users with a seamless interface to browse through restaurants, view menus, add items to the cart, and place orders.",
    tags: ["React.js", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/vipulofficial206/EAT-IT-Frontend",
    icon: <Layout className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "GitHub Profile Analyzer",
    subtitle: "Stats Visualization",
    description: "A responsive React + TypeScript web app that analyzes any GitHub profile. View user stats, explore repositories, and visualize daily commits — beautifully styled with ShadCN UI.",
    tags: ["GitHub API", "React", "Recharts", "Tailwind"],
    link: "https://github.com/vipulofficial206/GitHubProfileAnalyzer",
    icon: <Github className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "QR Generator",
    subtitle: "Utility Tool",
    description: "A QR generator website which works on both laptop and mobile and easy to use with some cool animations and working module a download option to download the QR within seconds.",
    tags: ["React", "QR Code API", "JavaScript"],
    link: "https://github.com/vipulofficial206/QRGenerator",
    icon: <Code2 className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800"
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
  { degree: "B.Tech in Computer Science & Engineering", school: "VIT-AP University", period: "2023 – 2027", grade: "8.31 CGPA" },
  { degree: "Senior Secondary (XII), Science", school: "MPC", period: "2021 – 2023", grade: "93%" }
];

export const GITHUB_STATS = [
  { label: "Repositories", value: "11+", icon: <Database className="w-4 h-4" /> },
  { label: "Hackathons", value: "20+", icon: <Code2 className="w-4 h-4" /> },
  { label: "Practical Experience", value: "1+ Years", icon: <Cpu className="w-4 h-4" /> },
];
