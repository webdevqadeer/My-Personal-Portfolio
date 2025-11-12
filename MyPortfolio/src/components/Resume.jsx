import React from 'react';
import { Briefcase, BookOpen } from 'lucide-react';

const portfolioData = {
  education: [
    {
      institution: "The Islamia University Of Bahawalpur",
      period: "2021 — Present",
      description: "I am currently doing BS in Computer Science studying in 7th semester."
    },
    {
      institution: "Government Graduate College, Bahawalpur",
      period: "2019 — 2021",
      description: "I completed my ICS education from the this institute I secured 91% marks in aggregate."
    },
    {
      institution: "Science College, Minchinabad",
      period: "2017 — 2019",
      description: "I did my matric from the Science College Minchinabad. I got 92% marks."
    }
  ],
  experience: [
    {
      title: "Full Stack Developer",
      period: "2023 — Present",
      description: "Working on various web applications using MERN stack, building scalable solutions."
    },
    {
      title: "Frontend Developer",
      period: "2022 — 2023",
      description: "Developed responsive and interactive user interfaces using React.js and modern CSS."
    }
  ],
  skills: [
    { name: "Web design", percentage: 80, icon: "🎨" },
    { name: "Graphic design", percentage: 70, icon: "✏️" },
    { name: "Branding", percentage: 90, icon: "🏷️" },
    { name: "WordPress", percentage: 50, icon: "📝" },
    { name: "React.js", percentage: 85, icon: "⚛️" },
    { name: "Node.js", percentage: 80, icon: "🟢" },
    { name: "JavaScript", percentage: 90, icon: "🟨" },
    { name: "Tailwind CSS", percentage: 85, icon: "🎨" },
    { name: "HTML5", percentage: 95, icon: "🌐" },
    { name: "CSS3", percentage: 90, icon: "🎭" }
  ]
};

export const Resume = () => {
  return (
    <article className="pt-12 sm:pt-14 lg:pt-16">
      {/* Header */}
      <header className="mb-6 sm:mb-8 lg:mb-12">
        <h2 className="text-white text-xl sm:text-2xl lg:text-4xl font-semibold relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-gradient-to-r after:from-[#ffdb70] after:to-[#f5c842] after:rounded-full">
          Resume
        </h2>
      </header>

      {/* Education Section */}
      <section className="mb-10 sm:mb-12 lg:mb-20">
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-12">
          <div className="bg-gradient-to-br from-[#404040] to-[#1e1e1f] w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-[#ffdb70] flex-shrink-0 shadow-lg">
            <BookOpen size={18} className="sm:hidden" />
            <BookOpen size={20} className="hidden sm:block lg:hidden" />
            <BookOpen size={24} className="hidden lg:block" />
          </div>
          <h3 className="text-white text-lg sm:text-xl lg:text-3xl font-medium">Education</h3>
        </div>

        <ol className="relative ml-2 sm:ml-4 space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-[#383838]"></div>
          
          {portfolioData.education.map((edu, index) => (
            <li key={index} className="relative pl-6 sm:pl-8 lg:pl-12 pb-6 sm:pb-8 last:pb-0">
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-3 h-3 sm:w-4 sm:h-4 bg-[#ffdb70] rounded-full border-2 sm:border-4 border-[#1e1e1f] transform -translate-x-[5px] sm:-translate-x-[7px] shadow-lg"></div>
              
              <h4 className="text-white text-sm sm:text-base lg:text-xl font-medium mb-2 sm:mb-3 leading-snug pr-2">
                {edu.institution}
              </h4>
              <span className="text-[#e5c368] text-xs sm:text-sm lg:text-base mb-2 sm:mb-3 lg:mb-4 block font-medium">
                {edu.period}
              </span>
              <p className="text-[#d6d6d6] text-xs sm:text-sm lg:text-base leading-relaxed pr-2">
                {edu.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Experience Section */}
      <section className="mb-10 sm:mb-12 lg:mb-20">
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-12">
          <div className="bg-gradient-to-br from-[#404040] to-[#1e1e1f] w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-[#ffdb70] flex-shrink-0 shadow-lg">
            <Briefcase size={18} className="sm:hidden" />
            <Briefcase size={20} className="hidden sm:block lg:hidden" />
            <Briefcase size={24} className="hidden lg:block" />
          </div>
          <h3 className="text-white text-lg sm:text-xl lg:text-3xl font-medium">Experience</h3>
        </div>

        <ol className="relative ml-2 sm:ml-4 space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-[#383838]"></div>
          
          {portfolioData.experience.map((exp, index) => (
            <li key={index} className="relative pl-6 sm:pl-8 lg:pl-12 pb-6 sm:pb-8 last:pb-0">
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-3 h-3 sm:w-4 sm:h-4 bg-[#ffdb70] rounded-full border-2 sm:border-4 border-[#1e1e1f] transform -translate-x-[5px] sm:-translate-x-[7px] shadow-lg"></div>
              
              <h4 className="text-white text-sm sm:text-base lg:text-xl font-medium mb-2 sm:mb-3 leading-snug pr-2">
                {exp.title}
              </h4>
              <span className="text-[#e5c368] text-xs sm:text-sm lg:text-base mb-2 sm:mb-3 lg:mb-4 block font-medium">
                {exp.period}
              </span>
              <p className="text-[#d6d6d6] text-xs sm:text-sm lg:text-base leading-relaxed pr-2">
                {exp.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills Section */}
      <section className="mb-10 sm:mb-12 lg:mb-20">
        <h3 className="text-white text-lg sm:text-xl lg:text-3xl font-medium mb-5 sm:mb-6 lg:mb-10">
          My skills
        </h3>
        <ul className="bg-gradient-to-br from-[#404040] to-transparent p-4 sm:p-5 lg:p-8 rounded-2xl shadow-lg space-y-4 sm:space-y-5 lg:space-y-6">
          {portfolioData.skills.map((skill, index) => (
            <li key={index}>
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                {/* Skill Icon */}
                <div className="text-xl sm:text-2xl lg:text-3xl flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  {skill.icon}
                </div>
                {/* Skill Name and Percentage */}
                <h5 className="text-white text-xs sm:text-sm lg:text-base font-medium flex-1">
                  {skill.name}
                </h5>
                <data className="text-[#d6d6d6] text-xs sm:text-sm font-medium">
                  {skill.percentage}%
                </data>
              </div>
              {/* Progress Bar */}
              <div className="bg-[#383838] w-full h-1.5 sm:h-2 lg:h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-[#ffdb70] to-[#f5c842] h-full rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};