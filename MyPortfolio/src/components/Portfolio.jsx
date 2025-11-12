import React, { useState } from 'react';
import { Eye } from 'lucide-react';import portfolioData from "../Data/portfolioData";

export const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const filteredProjects = filter === 'all' ? portfolioData.projects : portfolioData.projects.filter(p => p.category === filter);

  return (
    <article>
      <header className="mb-6">
        <h2 className="text-white text-2xl lg:text-3xl font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-1 after:bg-gradient-to-r after:from-[#ffdb70] after:to-[#f5c842] after:rounded-full">
          Portfolio
        </h2>
      </header>

      <ul className="flex gap-6 mb-8">
        {['all', 'web design', 'web development'].map((cat) => (
          <li key={cat}>
            <button onClick={() => setFilter(cat)} className={`text-sm capitalize ${filter === cat ? 'text-[#ffdb70]' : 'text-[#d6d6d6]'}`}>
              {cat}
            </button>
          </li>
        ))}
      </ul>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <li key={index}>
            <a href={project.link} className="block group">
              <figure className="relative w-full h-48 rounded-2xl overflow-hidden mb-4">
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all z-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#383838] text-[#ffdb70] p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-all z-20">
                  <Eye size={20} />
                </div>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </figure>
              <h3 className="text-white text-base font-normal ml-2">{project.title}</h3>
              <p className="text-[#d6d6d6b3] text-sm ml-2">{project.category}</p>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
};