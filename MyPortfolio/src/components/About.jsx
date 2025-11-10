import React, { useState } from 'react';
import { X } from 'lucide-react';

const portfolioData = {
  services: [
    {
      icon: "💻",
      title: "Web Development",
      description: "High-quality development of sites at the professional level."
    },
    {
      icon: "🎨",
      title: "Web Design",
      description: "The most modern and high-quality design made at a professional level."
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Professional development of applications for iOS and Android."
    },
    {
      icon: "📸",
      title: "Photography",
      description: "I make high-quality photos of any category at a professional level."
    }
  ],
  testimonials: [
    {
      name: "Daniel Lewis",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel",
      text: "Abdul Qadeer was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client."
    },
    {
      name: "Jessica Miller",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
      text: "We hired Abdul Qadeer to design a Figma design for our brand website landing page. The result was outstanding and exceeded our expectations."
    },
    {
      name: "Emily Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      text: "Outstanding work on our company logo. Abdul delivered exactly what we needed with great attention to detail."
    },
    {
      name: "Michael Brown",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      text: "The UI/UX design was exceptional. Our users love the new interface and it has improved engagement significantly."
    }
  ]
};

export const About = ()=> {
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
    <article>
      {/* Header Section */}
      <header className="mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-gradient-to-r after:from-[#ffdb70] after:to-[#f5c842] after:rounded-full">
          About me
        </h2>
      </header>

      {/* Introduction Section */}
      <section className="text-[#d6d6d6] text-sm sm:text-base leading-relaxed space-y-4 mb-12 sm:mb-16 lg:mb-20">
        <p className="text-base sm:text-lg font-semibold text-white">
          Welcome to My Portfolio!
        </p>
        <p className="leading-7 sm:leading-8">
          I am a professional <strong className="text-white">full-stack developer</strong> with over <strong className="text-white">1 Year</strong> of industry experience.
        </p>
        <p className="leading-7 sm:leading-8">
          As an experienced <strong className="text-white">MERN Stack developer</strong>, I specialize in both front-end and back-end development using <strong className="text-[#ffdb70]">Node.js, MongoDB, Express, Next.js, HTML5, CSS3, Tailwind, Bootstrap and React.js</strong>.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-12 sm:mb-16 lg:mb-20">
        <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-medium mb-6 sm:mb-8 lg:mb-10">
          What I'm doing
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {portfolioData.services.map((service, index) => (
            <li 
              key={index} 
              className="relative bg-gradient-to-br from-[#404040] to-transparent p-5 sm:p-6 lg:p-7 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-center md:text-left">
                {service.icon}
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-white text-base sm:text-lg font-medium mb-2 sm:mb-3">
                  {service.title}
                </h4>
                <p className="text-[#d6d6d6] text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="mb-12 sm:mb-16 lg:mb-20">
        <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-medium mb-6 sm:mb-8 lg:mb-10">
          Testimonials
        </h3>

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide pt-8 sm:pt-10 lg:pt-12 -mx-4 px-4 sm:mx-0 sm:px-0"
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
              className="relative bg-[#2b2b2c] border border-[#383838] p-5 sm:p-6 pt-14 sm:pt-16 rounded-2xl cursor-pointer hover:border-[#4a4a4a] transition-all w-[85%] sm:w-[calc(50%-12px)] snap-start flex-shrink-0"
            >
              <figure className="absolute top-0 left-4 sm:left-6 transform -translate-y-1/2 bg-gradient-to-br from-[#505050] to-[#3a3a3a] rounded-3xl w-16 h-16 sm:w-20 sm:h-20 overflow-hidden shadow-xl border-4 border-[#1e1e1f]">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </figure>

              <h4 className="text-white text-base sm:text-xl font-medium mb-2 sm:mb-3">
                {testimonial.name}
              </h4>

              <p className="text-[#b8b8b8] text-xs sm:text-sm leading-relaxed line-clamp-3">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          <div className="w-full max-w-xs sm:max-w-md h-1 bg-[#3a3a3a] rounded-full overflow-hidden">
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
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"
            onClick={() => setModalActive(false)}
          ></div>

          <div className="relative bg-[#2b2b2c] border border-[#383838] rounded-2xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalActive(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#3a3a3a] hover:bg-[#4a4a4a] rounded-lg w-10 h-10 flex items-center justify-center text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
              <figure className="bg-gradient-to-br from-[#505050] to-[#3a3a3a] rounded-3xl w-20 h-20 sm:w-24 sm:h-24 overflow-hidden flex-shrink-0 shadow-xl mx-auto sm:mx-0">
                <img
                  src={selectedTestimonial?.avatar}
                  alt={selectedTestimonial?.name}
                  className="w-full h-full object-cover"
                />
              </figure>

              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-white text-xl sm:text-2xl font-medium mb-3 sm:mb-4">
                  {selectedTestimonial?.name}
                </h3>
                <p className="text-[#b8b8b8] text-sm sm:text-base leading-relaxed">
                  {selectedTestimonial?.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}