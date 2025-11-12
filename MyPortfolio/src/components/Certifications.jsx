import React from "react";
import { Award, ExternalLink } from 'lucide-react';

// Sample data - replace with your actual portfolioData import
const portfolioData = {
  certifications: [
    {
      title: "React - The Complete Guide",
      issuer: "Udemy",
      date: "2023",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
      credentialUrl: "#"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2023",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
      credentialUrl: "#"
    },
    {
      title: "JavaScript Algorithms",
      issuer: "FreeCodeCamp",
      date: "2022",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400",
      credentialUrl: "#"
    },
    {
      title: "Node.js Certification",
      issuer: "LinkedIn Learning",
      date: "2023",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400",
      credentialUrl: "#"
    }
  ]
};

export const Certifications = () => {
  return (
    <article className="pt-12 sm:pt-14 lg:pt-16">
      {/* Header */}
      <header className="mb-6 sm:mb-8 lg:mb-10">
        <h2 className="text-white text-xl sm:text-2xl lg:text-4xl font-semibold relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-gradient-to-r after:from-[#ffdb70] after:to-[#f5c842] after:rounded-full">
          Certifications
        </h2>
      </header>

      {/* Certifications Grid */}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
        {portfolioData.certifications.map((cert, index) => (
          <li 
            key={index}
            className="animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="bg-gradient-to-br from-[#404040] to-transparent rounded-xl sm:rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-[#383838] hover:border-[#4a4a4a]">
              {/* Certificate Image */}
              <figure className="relative w-full aspect-[16/9] sm:aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f]">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1f] via-transparent to-transparent opacity-60"></div>
              </figure>
              
              {/* Certificate Details */}
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white text-sm sm:text-base lg:text-lg font-medium mb-1 sm:mb-2 line-clamp-2 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-[#ffdb70] text-xs sm:text-sm font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                  <Award 
                    size={20} 
                    className="text-[#ffdb70] flex-shrink-0 sm:hidden" 
                  />
                  <Award 
                    size={24} 
                    className="text-[#ffdb70] flex-shrink-0 hidden sm:block" 
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <p className="text-[#d6d6d6] text-xs sm:text-sm">
                    {cert.date}
                  </p>
                  
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#ffdb70] text-xs sm:text-sm hover:text-[#f5c842] transition-colors group/link"
                  >
                    <span>View Credential</span>
                    <ExternalLink 
                      size={14} 
                      className="group-hover/link:translate-x-1 transition-transform sm:hidden" 
                    />
                    <ExternalLink 
                      size={16} 
                      className="group-hover/link:translate-x-1 transition-transform hidden sm:block" 
                    />
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Empty State */}
      {portfolioData.certifications.length === 0 && (
        <div className="text-center py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#404040] to-transparent rounded-2xl">
          <Award size={48} className="mx-auto text-[#ffdb70] mb-4 opacity-50" />
          <p className="text-[#d6d6d6] text-sm sm:text-base lg:text-lg">
            No certifications available yet.
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