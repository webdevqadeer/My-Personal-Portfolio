import React, { useState, useEffect, useRef } from 'react';
import { Layers, User, Code, HeartHandshake, Star, BookOpen, X } from 'lucide-react';
import portfolioData from "../Data/portfolioData";

export const About = () => {
    const { service, testimonial } = portfolioData;
    const [modalActive, setModalActive] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const scrollContainerRef = React.useRef(null);
    const handleScroll = (e) => {
        const container = e.target;
        const scrollWidth = container.scrollWidth - container.clientWidth;
        const scrolled = container.scrollLeft;
        const progress = (scrolled / scrollWidth) * 100;
        setScrollProgress(progress);
    };
    return (
        <article className="animate-fadeIn">
            <header className="mb-6">
                <h2 className="text-white text-2xl lg:text-3xl font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-1 after:bg-gradient-to-r after:from-[#ffdb70] after:to-[#f5c842] after:rounded-full">
                    About me
                </h2>
            </header>

            <section className="text-[#d6d6d6] text-sm lg:text-base leading-relaxed space-y-4 mb-10">
                <p className="text-lg font-semibold">Welcome to My Portfolio!</p>
                <p>
                    I am a professional <strong className="text-white">full-stack developer</strong> with over <strong className="text-white">1 Year</strong> of industry experience.
                </p>
                <p>
                    As an experienced <strong className="text-white">MERN Stack developer</strong>, I specialize in both front-end and back-end development using <strong className="text-[#ffdb70]">Node.js, MongoDB, Express, Next.js, HTML5, CSS3, Tailwind, Bootstrap and React.js</strong>.
                </p>
            </section>

            <section className="mb-10">
                <h3 className="text-white text-xl lg:text-2xl font-medium mb-5">What I'm doing</h3>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {portfolioData.services.map((service, index) => (
                        <li key={index} className="relative bg-gradient-to-br from-[#404040] to-transparent p-6 rounded-2xl shadow-lg">
                            <div className="text-4xl mb-3 text-center lg:text-left">{service.icon}</div>
                            <div className="text-center lg:text-left">
                                <h4 className="text-white text-base font-medium mb-2">{service.title}</h4>
                                <p className="text-[#d6d6d6] text-sm leading-relaxed">{service.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

     
      <section className="max-w-6xl mx-auto pt-16">
        <h2 className="text-white text-3xl font-semibold mb-12">Testimonials</h2>
        
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide pt-12"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {portfolioData.testimonials.map((testimonial, index) => (
            <div 
              key={index}
              onClick={() => { 
                setSelectedTestimonial(testimonial); 
                setModalActive(true); 
              }} 
              className="relative bg-[#2b2b2c] border border-[#383838] p-6 pt-16 rounded-2xl cursor-pointer hover:border-[#4a4a4a] transition-all w-[calc(50%-12px)] snap-start flex-shrink-0"
            >
              <figure className="absolute top-0 left-6 transform -translate-y-1/2 bg-gradient-to-br from-[#505050] to-[#3a3a3a] rounded-3xl w-20 h-20 overflow-hidden shadow-xl border-4 border-[#1e1e1f]">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover" 
                />
              </figure>
              
              <h3 className="text-white text-xl font-medium mb-3">
                {testimonial.name}
              </h3>
              
              <p className="text-[#b8b8b8] text-sm leading-relaxed line-clamp-3">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-full max-w-md h-1 bg-[#3a3a3a] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#ffd966] rounded-full transition-all duration-300"
              style={{ width: `${Math.max(25, scrollProgress)}%` }}
            ></div>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      {/* Modal - Fixed positioning that doesn't affect page layout */}
      {modalActive && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div 
            className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm" 
            onClick={() => setModalActive(false)}
          ></div>
          
          <div className="relative bg-[#2b2b2c] border border-[#383838] rounded-2xl p-8 max-w-2xl w-full shadow-2xl z-10">
            <button 
              onClick={() => setModalActive(false)} 
              className="absolute top-4 right-4 bg-[#3a3a3a] hover:bg-[#4a4a4a] rounded-lg w-10 h-10 flex items-center justify-center text-white transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="flex gap-6 items-start">
              <figure className="bg-gradient-to-br from-[#505050] to-[#3a3a3a] rounded-3xl w-24 h-24 overflow-hidden flex-shrink-0 shadow-xl">
                <img 
                  src={selectedTestimonial?.avatar} 
                  alt={selectedTestimonial?.name} 
                  className="w-full h-full object-cover" 
                />
              </figure>
              
              <div className="flex-1">
                <h3 className="text-white text-2xl font-medium mb-4">
                  {selectedTestimonial?.name}
                </h3>
                <p className="text-[#b8b8b8] text-base leading-relaxed">
                  {selectedTestimonial?.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
   
  
        </article>
    );
};