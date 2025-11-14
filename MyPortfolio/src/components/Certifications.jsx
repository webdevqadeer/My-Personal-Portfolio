import React from "react"
import { Award, ExternalLink } from 'lucide-react'

// Mock data for preview
const mockCertifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Jan 2024",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    credentialUrl: "#"
  },
  {
    title: "Google Cloud Professional",
    issuer: "Google Cloud",
    date: "Dec 2023",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    credentialUrl: "#"
  },
  {
    title: "React Advanced Certification",
    issuer: "Meta",
    date: "Nov 2023",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80",
    credentialUrl: "#"
  },
  {
    title: "Docker Certified Associate",
    issuer: "Docker Inc",
    date: "Oct 2023",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80",
    credentialUrl: "#"
  }
];

export const Certifications = () => {
  return (
    <article className="mb-12">
      <header className="mb-8">
        <h2 className="text-white text-2xl lg:text-3xl font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-1 after:bg-gradient-to-r after:from-[#ffdb70] after:to-[#f5c842] after:rounded-full">
          Certifications
        </h2>
      </header>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {mockCertifications.map((cert, index) => (
          <li key={index} className="group">
            <div className="bg-gradient-to-br from-[#404040] to-transparent rounded-2xl shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffdb70]/10 hover:-translate-y-1">

              {/* Image Container */}
              <figure className="relative w-full h-35 sm:h-35 overflow-hidden bg-[#2a2a2a]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#404040] via-transparent to-transparent opacity-60"></div>

                {/* Award Badge Overlay */}
                <div className="absolute top-4 right-4 bg-[#ffdb70] rounded-full p-2 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <Award size={20} className="text-[#1a1a1a]" />
                </div>
              </figure>

              {/* Content Container */}
              <div className="p-4 sm:p-4 flex-1 flex flex-col">

                {/* Title */}
                <h3 className="text-white text-sm sm:text-sm font-semibold mb-3 leading-tight group-hover:text-[#ffdb70] transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer and Date */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 text-base">
                  <p className="text-[#ffdb70] text-[18px]">{cert.issuer}</p>
                  <span className="text-[#808080]">•</span>
                  <p className="text-[#d6d6d6] text-[18px]">{cert.date}</p>
                  <a
                    href={cert.credentialUrl}
                    className="inline-flex items-center gap-2 text-[#ffdb70] text-sm font-medium hover:text-[#f5c842] transition-all duration-200 group/link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <ExternalLink size={16} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>

              
              </div>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}