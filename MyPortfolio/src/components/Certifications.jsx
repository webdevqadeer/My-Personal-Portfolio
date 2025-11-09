import React from "react"
import { Award, ExternalLink } from 'lucide-react'
import portfolioData from "../Data/portfolioData";

export const Certifications = () => {
  return (
    <article>
      <header className="mb-6">
        <h2 className="text-white text-2xl lg:text-3xl font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-1 after:bg-gradient-to-r after:from-[#ffdb70] after:to-[#f5c842] after:rounded-full">
          Certifications
        </h2>
      </header>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.certifications.map((cert, index) => (
          <li key={index}>
            <div className="bg-gradient-to-br from-[#404040] to-transparent rounded-2xl shadow-lg overflow-hidden group">
              <figure className="relative w-full h-48 overflow-hidden">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </figure>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="text-white text-lg font-medium mb-1">{cert.title}</h3>
                  </div>
                  <Award size={24} className="text-[#ffdb70] flex-shrink-0" />
                </div>
                <div className="flex items-start justify-between gap-4  ">
                                      <p className="text-[#ffdb70] text-sm">{cert.issuer}</p>

                  <p className="text-[#d6d6d6] text-sm mb-4">{cert.date}</p>
                <a href={cert.credentialUrl} className="inline-flex items-center gap-2 text-[#ffdb70] text-sm hover:text-[#f5c842] transition-colors">
                  View Credential
                  <ExternalLink size={16} />
                </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};