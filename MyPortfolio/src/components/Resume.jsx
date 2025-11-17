import React from 'react';
import { Briefcase, BookOpen, Layers } from 'lucide-react'; // Added Layers icon for Skills
import portfolioData from "../Data/portfolioData"

export const Resume = () => {
  return (
    <article>
      {/* Header */}
      <header className="mb-8 sm:mb-10 md:mb-8">
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-gradient-to-r after:from-[#ffdb70] after:to-[#f5c842] after:rounded-full">
          Resume
        </h2>
      </header>

      {/* Education Section */}
      <section className="mb-12 sm:mb-16 ">
        <div className="flex items-center gap-3 sm:gap-4 mb-2 ">
          <div className="bg-gradient-to-br from-[#404040] to-[#1e1e1f] w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-[#ffdb70] flex-shrink-0">
            <BookOpen size={18} className="sm:hidden" />
            <BookOpen size={20} className="hidden sm:block" />
          </div>
          <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-medium">Education</h3>
        </div>

        <ol className="relative ml-4">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-5 bottom-0 w-0.5 bg-[#383838]"></div>

          {portfolioData.education.map((edu, index) => (
            <li key={index} className="relative pl-8 sm:pl-12 ">
              {/* Timeline dot */}
              <div className="absolute left-0 top-5 w-4 h-4 bg-[#ffdb70] rounded-full border-4 border-[#1e1e1f] transform -translate-x-[7px]"></div>

              {/* Institution + Period on one line */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h4 className="text-white text-base font-medium leading-relaxed mt-4">
                  {edu.institution}
                </h4>
                <span className="text-[#e5c368] text-xs mt-4">
                  {edu.period}
                </span>
              </div>
              <p className="text-[#d6d6d6] text-xs leading-relaxed ">
                {edu.description}
              </p>
            </li>
          ))}

          <div className="absolute left-0 bottom-0 w-0.5 h-8 bg-[#383838] transform translate-y-full"></div>
        </ol>
      </section>

      {/* Experience Section */}
      <section className="mb-12 sm:mb-10 ">
        <div className="flex items-center gap-3 sm:gap-4 mb-4 ">
          <div className="bg-gradient-to-br from-[#404040] to-[#1e1e1f] w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-[#ffdb70] flex-shrink-0">
            <Briefcase size={18} className="sm:hidden" />
            <Briefcase size={20} className="hidden sm:block" />
          </div>
          <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-medium">Experience</h3>
        </div>

        <ol className="relative ml-6">
          <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-[#383838]"></div>

          {portfolioData.experience.map((exp, index) => (
            <li key={index} className="relative pl-8 sm:pl-10">
              <div className="absolute left-0 top-2 w-4 h-4 bg-[#ffdb70] rounded-full border-4 border-[#1e1e1f] transform -translate-x-[7px]"></div>

              {/* Title + Period on one line */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h4 className="text-white text-base font-medium leading-relaxed">
                  {exp.title}
                </h4>
                <span className="text-[#e5c368] text-xs font-medium">
                  {exp.period}
                </span>
              </div>

              {/* Location (kept same style) */}
              {exp.location && (
                <span className="text-[#e5c368] text-xs  mb-3 sm:mb-4 block font-medium">
                  {exp.location}
                </span>
              )}

              <p className="text-[#d6d6d6] text-xs leading-relaxed mb-4">
                {exp.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills Section */}
      <section className="mb-12 sm:mb-16 md:mb-0">
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
          <div className="bg-gradient-to-br from-[#404040] to-[#1e1e1f] w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-[#ffdb70]">
            <Layers size={18} className="sm:hidden" />
            <Layers size={20} className="hidden sm:block" />
          </div>
          <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-medium">
            My Skills
          </h3>
        </div>

        <ul className="bg-gradient-to-br from-[#404040] to-transparent p-5 sm:p-6 lg:p-8 rounded-2xl shadow-lg space-y-5 sm:space-y-6">
          {portfolioData.skills.map((skill, index) => (
            <li key={index}>
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl sm:text-3xl flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain" />
                </div>

                <h5 className="text-white text-sm sm:text-base font-medium flex-1">
                  {skill.name}
                </h5>

                <data className="text-[#d6d6d6] text-xs sm:text-sm font-medium">
                  {skill.percentage}%
                </data>
              </div>

              <div className="bg-[#383838] w-full h-2 sm:h-2.5 rounded-full overflow-hidden">
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
