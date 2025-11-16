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
    facebook: "#",
    github: "#",
    instagram: "#"
  },

  services: [
    {
      icon: "🎨",
      title: "Web Design",
      description: "The most modern and high-quality design made at a professional level."
    },
    {
      icon: "💻",
      title: "Web Development",
      description: "High-quality development of sites at the expert level."
    }
  ],

  testimonials: [
    {
      name: "Daniel Lewis",
      avatar:Img.avatar1,
      text: "Abdul Qadeer was hired to create a corporate identity. We were very pleased with the work done."
    },
    {
      name: "Jessica Miller",
      avatar:Img.avatar4,
      text: "We hired Abdul Qadeer to design a Figma design for our brand website landing page."
    },
    {
      name: "Emily Evans",
      avatar:Img.avatar2,
      text: "Abdul Qadeer was given a task to solve an error in our React.js project."
    },
    {
      name: "Henry William",
      avatar:Img.avatar3,
      text: "Abdul Qadeer is a very good freelancer. He made a portfolio website for me."
    }
  ],

  education: [
    {
      institution: "The Islamia University of Bahawalpur",
      period: "2021 — Present",
      description: "I am currently doing BS in Computer Science studying in 7th semester."
    },
    {
      institution: "Government Graduate College, Bahawalpur",
      period: "2019 — 2021",
      description: "I completed my ICS education from this institute. I secured 91% marks in aggregate."
    },
    {
      institution: "Science College, Minchinabad",
      period: "2017 — 2019",
      description: "I did my matric from the Science College Minchinabad. I got 92% marks."
    }
  ],

  experience: [
    {
      title: "Web Development",
      period: "2022 — Present",
      description: "I began my journey in website development in 2021. After mastering HTML, CSS, JavaScript, React.js, and Redux Toolkit."
    },
    {
      title: "Web Designer",
      period: "2023",
      description: "Throughout my web development journey I've also practiced web design, which is my passion."
    }
  ],

  skills : [
  { name: "HTML", percentage: 100, icon:Img.html },
  { name: "CSS", percentage: 95, icon: Img.css },
  { name: "JavaScript", percentage: 85, icon: Img.javascript },
  { name: "React.js", percentage: 98, icon: Img.react },
  { name: "Tailwind CSS", percentage: 88, icon: Img.tailwind },
  { name: "Bootstrap", percentage: 80, icon: Img.bootstrap },
  { name: "MongoDB", percentage: 94, icon: Img.mongodb },
  { name: "Express.js", percentage: 90, icon: Img.node },
  { name: "Node.js", percentage: 96, icon: Img.node },
],


  projects: [
    {
      title: "Hoobank Project",
      category: "web development",
      image: Img.hoobankProject,
      link: "https://premium-bank-site.netlify.app/"
    },
    {
      title: "Edit and Craft",
      category: "web development",
      image: Img.editAndCraft,
      link: "https://edit-and-craft.netlify.app/"
    },
    {
      title: "Business Website",
      category: "web design",
      image: Img.businessweb,
      link: "https://premium-softwarehouse-site.netlify.app/"
    },
    {
      title: "Shoppy Dashboard",
      category: "web development",
      image:Img.shoppyDashboard,
      link: "https://custom-shoppy-dashboard.netlify.app/"
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
      image: Img.frontend,
      credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/NDME2P535RKY"
    },
    {
      title: "Designing (UI/UX)",
      issuer: "Coursera",
      date: "Feb 2024",
      image: Img.uiux,
      credentialUrl: "https://coursera.org/verify/Y7UGE8T6RBR8"
    },
    {
      title: "Foundations of (UX) Design",
      issuer: "Coursera",
      date: "Mar 2024",
      image: Img.foundationuiux,
      credentialUrl: "https://coursera.org/verify/XX8UMMVJEWLS"
    }
  ]
};

export default portfolioData;
