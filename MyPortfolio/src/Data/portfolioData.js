import { Facebook } from "lucide-react";
import * as Img from "../assets/images";
const portfolioData = {
  personalInfo: {
    name: "Abdul Qadeer",
    title: "Professional Web Developer",
    email: "qadeerlatif56577",
    phone: "+92 316-6416866",
    birthday: "Jan 01, 2001",
    location: "Lahore, Punjab, Pakistan",
    avatar: Img.dp1
  },

  socialLinks: {
    github: "https://github.com/webdevqadeer",
    linkedin: "https://www.linkedin.com/in/abdul-qadeer-a58035333/",
  },

  services: [
    {
      icon: "🎨",
      title: "Website Development",
      description:
        "Building responsive, scalable, and high-performance user interfaces using React.js, JavaScript, Tailwind CSS, and modern web technologies.",
    },
    {
      icon: "🎨",
      title: "UI / UX Designer",
      description:
        "Transforming UI/UX designs into pixel-perfect, user-friendly, and fully responsive web experiences.",
    },
  ],

  testimonials: [
    {
      name: "Daniel Lewis",
      avatar: Img.avatar1,
      text: "Abdul Qadeer was hired to create a corporate identity. We were very pleased with the work done."
    },
    {
      name: "Jessica Miller",
      avatar: Img.avatar4,
      text: "We hired Abdul Qadeer to design a Figma design for our brand website landing page."
    },
    {
      name: "Emily Evans",
      avatar: Img.avatar2,
      text: "Abdul Qadeer was given a task to solve an error in our React.js project."
    },
    {
      name: "Henry William",
      avatar: Img.avatar3,
      text: "Abdul Qadeer is a very good freelancer. He made a portfolio website for me."
    }
  ],

  education: [
    {
      institution: "The Islamia University of Bahawalpur, Pakistan",
      period: "2021 – 2025",
      description:
        "Bachelor of Computer Science | CGPA: 3.15 | Courses: Software Engineering, Programming Fundamentals.",
    },
    {
      institution: "Informatics International College, Bahawalnagar",
      period: "2019 – 2021",
      description:
        "Intermediate (ICS) | Marks: 84% | Subjects: Mathematics, Physics, Computer Science.",
    },
    {
      institution: "Science College Minchinabad",
      period: "2017 – 2019",
      description:
        "Matriculation | Marks: 90% | Subjects: Biology, Chemistry, Physics, Mathematics.",
    },
  ],

  experience: [
    {
      title: "Frontend Developer Intern",
      period: "Sep 2025 – Present",
      location: "PSEB Internship | QTO House Lahore",
      description: `Currently working as a Frontend Developer Intern through the PSEB internship program.
Responsibilities:
• Designing and developing responsive, user-friendly web applications using React.js, JavaScript, HTML5, CSS3, Tailwind CSS, and Bootstrap.
• Collaborating with senior developers to enhance UI/UX and optimize performance.
• Ensuring mobile responsiveness and browser compatibility.`,
    },
    {
      title: "Frontend Developer Intern",
      period: "Jun 2025 – Sep 2025",
      location: "Zapta Technologies | Lahore, Pakistan",
      description: `Worked as a Frontend Developer Intern at Zapta Technologies.
Responsibilities:
• Developed and maintained responsive UIs using React.js, JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS.
• Collaborated with senior developers to implement scalable frontend components.
• Improved performance, mobile responsiveness, and cross-browser compatibility.
• Worked with Git/GitHub, participated in code reviews, and followed agile workflows.`,
    },
  ],

  skills: [
    { name: "HTML", percentage: 100, icon: Img.html },
    { name: "CSS", percentage: 95, icon: Img.css },
    { name: "JavaScript", percentage: 85, icon: Img.javascript },
    { name: "React.js", percentage: 95, icon: Img.react },
    { name: "Tailwind CSS", percentage: 95, icon: Img.tailwind },
    { name: "Bootstrap", percentage: 95, icon: Img.bootstrap },
    { name: "MongoDB", percentage: 90, icon: Img.mongodb },
    { name: "Express.js", percentage: 90, icon: Img.node },
    { name: "Node.js", percentage: 90, icon: Img.node },
    // Soft + Tools
    { name: "Javascript Libraries and Frameworks", percentage: 95, icon: Img.node },
    { name: "User Experience Design", percentage: 70, icon: Img.node },
    { name: "Communication and Interpersonal Skills", percentage: 95, icon: Img.node },
    { name: "Git", percentage: 95, icon: Img.node },
    { name: "Gitea", percentage: 95, icon: Img.node },
    { name: "GitHub", percentage: 95, icon: Img.node },
    { name: "Agile Development", percentage: 85, icon: Img.node },
  ],


   projects: [
    {
      title: "Shoppy Dashboard",
      category: "web development",
      image: Img.shoppyDashboard,
      link: "https://custom-shoppy-dashboard.netlify.app",
    },
    {
      title: "Premium Bank Website",
      category: "web development",
      image: Img.hoobankProject,
      link: "https://premium-bank-site.netlify.app",
    },
    {
      title: "Software House Website",
      category: "web design",
      image: Img.businessweb,
      link: "https://premium-softwarehouse-site.netlify.app",
    },
     {
      title: "Edit and Craft",
      category: "web development",
      image: Img.editAndCraft,
      link: "https://edit-and-craft.netlify.app/"
    },
    {
      title: "GMHS Minchinabad",
      category: "web development",
      image: Img.businessweb,
      link: "https://gmhs-minchinabad.vercel.app",
    },
    {
      title: "Chakifaiq Website",
      category: "web development",
      image: Img.businessweb,
      link: "https://chakifaiq.vercel.app",
    },
    {
      title: "Asset Management System — Zapta",
      category: "web development",
      image: Img.businessweb,
      link: "https://asset-management-zapta-unxf.vercel.app",
    },
  ],

  certifications: [
    {
      title: "Front-End Development",
      issuer: "Coursera",
      date: "Feb 2024",
      image: Img.frontend,
      credentialUrl: "https://coursera.org/verify/YLE3DXVQV8DB"
    },
    {
      title: "Javascript",
      issuer: "Coursera",
      date: "Aug 2025",
      image: Img.javascriptcertificate,
      credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/NDME2P535RKY"
    },
    {
      title: "Designing (UI/UX)",
      issuer: "Coursera",
      date: "Feb 2024",
      image: Img.uiuxcertificate1,
      credentialUrl: "https://coursera.org/verify/Y7UGE8T6RBR8"
    },
    {
      title: "Foundations of (UX) Design",
      issuer: "Coursera",
      date: "Mar 2024",
      image: Img.uiuxcertificate2,
      credentialUrl: "https://coursera.org/verify/XX8UMMVJEWLS"
    }
  ]
};

export default portfolioData;
