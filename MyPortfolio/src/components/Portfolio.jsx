import React, { useState } from 'react';
import { Eye } from 'lucide-react';

// Sample data - replace with your actual portfolioData import
const portfolioData = {
  projects: [
    {
      title: "E-commerce Website",
      category: "web development",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=400",
      link: "#"
    },
    {
      title: "Landing Page Design",
      category: "web design",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400",
      link: "#"
    },
    {
      title: "Portfolio Template",
      category: "web development",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400",
      link: "#"
    },
    {
      title: "Corporate Website",
      category: "web design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
      link: "#"
    },
    {
      title: "Social Media Dashboard",
      category: "web development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      link: "#"
    },
    {
      title: "Mobile App Design",
      category: "web design",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400",
      link: "#"
    }
  ]
};

export const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const filteredProjects = filter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  const categories = ['all', 'web design', 'web development'];

  return (
    <article className="pt-12 sm:pt-14 lg:pt-16">
      {/* Header */}
      <header className="mb-6 sm:mb-8 lg:mb-10">
        <h2 className="text-white text-xl sm:text-2xl lg:text-4xl font-semibold relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-gradient-to-r after:from-[#ffdb70] after:to-[#f5c842] after:rounded-full">
          Portfolio
        </h2>
      </header>

      {/* Filter Buttons */}
      <ul className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-10">
        {categories.map((cat) => (
          <li key={cat}>
            <button 
              onClick={() => setFilter(cat)} 
              className={`text-xs sm:text-sm lg:text-base capitalize px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all ${
                filter === cat 
                  ? 'text-[#ffdb70] bg-[#2b2b2c]' 
                  : 'text-[#d6d6d6] hover:text-[#ffdb70] hover:bg-[#2b2b2c]'
              }`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>

      {/* Projects Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {filteredProjects.map((project, index) => (
          <li 
            key={index}
            className="animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <a href={project.link} className="block group">
              <figure className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4 bg-gradient-to-br from-[#404040] to-[#2b2b2c]">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 z-10"></div>
                
                {/* Eye Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2b2b2c] text-[#ffdb70] p-3 sm:p-4 rounded-xl opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 z-20 shadow-2xl">
                  <Eye size={20} className="sm:hidden" />
                  <Eye size={24} className="hidden sm:block" />
                </div>
                
                {/* Image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  loading="lazy"
                />
              </figure>
              
              {/* Project Info */}
              <div className="px-1 sm:px-2">
                <h3 className="text-white text-sm sm:text-base lg:text-lg font-normal mb-1 group-hover:text-[#ffdb70] transition-colors truncate">
                  {project.title}
                </h3>
                <p className="text-[#d6d6d6b3] text-xs sm:text-sm capitalize">
                  {project.category}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12 sm:py-16 lg:py-20">
          <p className="text-[#d6d6d6] text-sm sm:text-base lg:text-lg">
            No projects found in this category.
          </p>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </article>
  );
};