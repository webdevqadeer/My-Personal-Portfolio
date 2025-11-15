import React, { useState } from 'react';
import { Eye } from 'lucide-react';

// Mock data for preview
const mockProjects = [
  {
    title: "E-Commerce Platform",
    category: "web development",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    link: "#"
  },
  {
    title: "Brand Identity Design",
    category: "web design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    link: "#"
  },
  {
    title: "React Dashboard",
    category: "web development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    link: "#"
  },
  {
    title: "Portfolio Website",
    category: "web design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    link: "#"
  },
  {
    title: "Mobile App Interface",
    category: "web design",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    link: "#"
  },
  {
    title: "SaaS Platform",
    category: "web development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    link: "#"
  }
];

export const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const filteredProjects = filter === 'all' 
    ? mockProjects 
    : mockProjects.filter(p => p.category === filter);

  const categories = ['all', 'web design', 'web development'];

  return (
    <article className="mb-12">
      <header className="mb-8">
        <h2 className="text-white text-2xl lg:text-3xl font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-1 after:bg-gradient-to-r after:from-[#ffdb70] after:to-[#f5c842] after:rounded-full">
          Portfolio
        </h2>
      </header>

      {/* Filter Buttons */}
      <nav className="mb-10">
        <ul className="flex flex-wrap gap-6 sm:gap-4">
          {categories.map((cat) => (
            <li key={cat}>
              <button 
                onClick={() => setFilter(cat)} 
                className={`
                  text-base sm:text-base capitalize font-semibold   rounded-xl
                  transition-all duration-300 relative
                  ${filter === cat 
                    ? 'text-[#ffdb70]' 
                    : 'text-[#d6d6d6] hover:text-white'
                  }
                `}
              >
                {cat}
                {filter === cat && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ffdb70] to-[#f5c842] rounded-full"></span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Projects Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-4">
        {filteredProjects.map((project, index) => (
          <li 
            key={index}
            className="group animate-fadeIn"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <a 
              href={project.link} 
              className="block h-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-gradient-to-br from-[#404040] to-transparent rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffdb70]/10 hover:-translate-y-1">
                
                {/* Image Container */}
                <figure className="relative w-full h-35 sm:h-35 overflow-hidden bg-[#2a2a2a]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Hover Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <div className="bg-[#ffdb70] text-[#1a1a1a] p-2 rounded-xl shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Eye size={20} strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-[#404040]/90 backdrop-blur-sm text-[#ffdb70] text-xs font-medium px-3 py-1.5 rounded-full border border-[#ffdb70]/20">
                      {project.category}
                    </span>
                  </div>
                </figure>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-white text-base sm:text-sm font-semibold mb-2 group-hover:text-[#ffdb70] transition-colors leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-[#d6d6d6] text-lg">No projects found in this category.</p>
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
        }
      `}</style>
    </article>
  );
}