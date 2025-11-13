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

export const  Resume = () => {
  return (
    <article>
      {/* Header */}
      <header className="mb-8 sm:mb-10 md:mb-8">
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-gradient-to-r after:from-[#ffdb70] after:to-[#f5c842] after:rounded-full">
          Resume
        </h2>
      </header>

      {/* Education Section */}
      <section className="mb-12 sm:mb-16 lg:mb-20">
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12">
          <div className="bg-gradient-to-br from-[#404040] to-[#1e1e1f] w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-[#ffdb70] flex-shrink-0">
            <BookOpen size={18} className="sm:hidden" />
            <BookOpen size={20} className="hidden sm:block" />
          </div>
          <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-medium">Education</h3>
        </div>

        <ol className="relative ml-4">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-[#383838]"></div>
          
          {portfolioData.education.map((edu, index) => (
            <li key={index} className="relative pl-8 sm:pl-10 lg:pl-12">
              {/* Timeline dot - centered on the line */}
              <div className="absolute left-0 top-2 w-4 h-4 bg-[#ffdb70] rounded-full border-4 border-[#1e1e1f] transform -translate-x-[7px]"></div>
              
              <h4 className="text-white text-base sm:text-lg lg:text-xl font-medium mb-3 sm:mb-4 leading-snug">
                {edu.institution}
              </h4>
              <span className="text-[#e5c368] text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 block font-medium">
                {edu.period}
              </span>
              <p className="text-[#d6d6d6] text-sm sm:text-base leading-relaxed">
                {edu.description}
              </p>
            </li>
          ))}
          
          {/* Extension line below last item */}
          <div className="absolute left-0 bottom-0 w-0.5 h-8 bg-[#383838] transform translate-y-full"></div>
        </ol>
      </section>

      {/* Experience Section */}
      <section className="mb-12 sm:mb-16 lg:mb-20">
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12">
          <div className="bg-gradient-to-br from-[#404040] to-[#1e1e1f] w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-[#ffdb70] flex-shrink-0">
            <Briefcase size={18} className="sm:hidden" />
            <Briefcase size={20} className="hidden sm:block" />
          </div>
          <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-medium">Experience</h3>
        </div>

        <ol className="relative ml-5 sm:ml-8 lg:ml-12 space-y-8 sm:space-y-10 lg:space-y-12">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-[#383838]"></div>
          
          {portfolioData.experience.map((exp, index) => (
            <li key={index} className="relative pl-8 sm:pl-10 lg:pl-12">
              {/* Timeline dot - centered on the line */}
              <div className="absolute left-0 top-2 w-4 h-4 bg-[#ffdb70] rounded-full border-4 border-[#1e1e1f] transform -translate-x-[7px]"></div>
              
              <h4 className="text-white text-base sm:text-lg lg:text-xl font-medium mb-3 sm:mb-4 leading-snug">
                {exp.title}
              </h4>
              <span className="text-[#e5c368] text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 block font-medium">
                {exp.period}
              </span>
              <p className="text-[#d6d6d6] text-sm sm:text-base leading-relaxed">
                {exp.description}
              </p>
            </li>
          ))}
          
          {/* Extension line below last item */}
          <div className="absolute left-0 bottom-0 w-0.5 h-8 bg-[#383838] transform translate-y-full"></div>
        </ol>
      </section>

      {/* Skills Section */}
      <section className="mb-12 sm:mb-16 md:mb-0">
        <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-medium mb-6 sm:mb-8 lg:mb-10">
          My skills
        </h3>
        <ul className="bg-gradient-to-br from-[#404040] to-transparent p-5 sm:p-6 lg:p-8 rounded-2xl shadow-lg space-y-5 sm:space-y-6">
          {portfolioData.skills.map((skill, index) => (
            <li key={index}>
              <div className="flex items-center gap-3 mb-3">
                {/* Skill Icon */}
                <div className="text-2xl sm:text-3xl flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  {skill.icon}
                </div>
                {/* Skill Name and Percentage */}
                <h5 className="text-white text-sm sm:text-base font-medium flex-1">
                  {skill.name}
                </h5>
                <data className="text-[#d6d6d6] text-xs sm:text-sm font-medium">
                  {skill.percentage}%
                </data>
              </div>
              {/* Progress Bar */}
              <div className="bg-[#383838] w-full h-2 sm:h-2.5 rounded-full overflow-hidden ">
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
}