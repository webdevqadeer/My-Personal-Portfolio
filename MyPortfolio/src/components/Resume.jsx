import React from 'react';
import { Layers, Briefcase, User, Code, HeartHandshake, BookOpen, X } from 'lucide-react';
import portfolioData from "../Data/portfolioData";

export const Resume = () => {

  return (
    <article>
      <header className="mb-6">
        <h2 className="text-white text-2xl lg:text-3xl font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-1 after:bg-gradient-to-r after:from-[#ffdb70] after:to-[#f5c842] after:rounded-full">
          Resume
        </h2>
      </header>

      <section className="mb-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-gradient-to-br from-[#404040] to-[#1e1e1f] w-12 h-12 rounded-xl flex items-center justify-center text-[#ffdb70]">
            <BookOpen size={20} />
          </div>
          <h3 className="text-white text-xl lg:text-2xl font-medium">Education</h3>
        </div>

        <ol className="ml-12 space-y-5 text-sm">
          {portfolioData.education.map((edu, index) => (
            <li key={index} className="relative">
              <h4 className="text-white text-base font-medium mb-2">{edu.institution}</h4>
              <span className="text-[#e5c368] text-sm mb-2 block">{edu.period}</span>
              <p className="text-[#d6d6d6] leading-relaxed">{edu.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-gradient-to-br from-[#404040] to-[#1e1e1f] w-12 h-12 rounded-xl flex items-center justify-center text-[#ffdb70]">
            <Briefcase size={20} />
          </div>
          <h3 className="text-white text-xl lg:text-2xl font-medium">Experience</h3>
        </div>

        <ol className="ml-12 space-y-5 text-sm">
          {portfolioData.experience.map((exp, index) => (
            <li key={index}>
              <h4 className="text-white text-base font-medium mb-2">{exp.title}</h4>
              <span className="text-[#e5c368] text-sm mb-2 block">{exp.period}</span>
              <p className="text-[#d6d6d6] leading-relaxed">{exp.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h3 className="text-white text-xl lg:text-2xl font-medium mb-5">My skills</h3>
        <ul className="bg-gradient-to-br from-[#404040] to-transparent p-6 rounded-2xl shadow-lg space-y-4">
          {portfolioData.skills.map((skill, index) => (
            <li key={index}>
              <div className="flex items-center gap-2 mb-2">
                <h5 className="text-white text-sm font-medium flex-1">{skill.name}</h5>
                <data className="text-[#d6d6d6] text-sm">{skill.percentage}%</data>
              </div>
              <div className="bg-[#383838] w-full h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-[#ffdb70] to-[#f5c842] h-full rounded-full" style={{ width: `${skill.percentage}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};