import React, { useState, useEffect, useCallback } from 'react';
import { Layers, Briefcase, Mail, User, Code, HeartHandshake, Star, X } from 'lucide-react';
import portfolioData from "../Data/portfolioData";

export const About = () => {
    const { service, testimonial } = portfolioData;
    const [modalActive, setModalActive] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);


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

            <section className="mb-10">
                <h3 className="text-white text-xl lg:text-2xl font-medium mb-5">Testimonials</h3>
                <ul className="flex gap-4 overflow-x-auto pb-6">
                    {portfolioData.testimonials.map((testimonial, index) => (
                        <li key={index} className="min-w-full">
                            <div onClick={() => { setSelectedTestimonial(testimonial); setModalActive(true); }} className="relative bg-gradient-to-br from-[#404040] to-transparent p-6 pt-12 rounded-2xl shadow-lg cursor-pointer">
                                <figure className="absolute top-0 left-0 transform translate-x-4 -translate-y-6 bg-gradient-to-br from-[#404040] to-[#303030] rounded-2xl shadow-lg w-16 h-16 overflow-hidden">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                                </figure>
                                <h4 className="text-white text-base font-medium mb-2">{testimonial.name}</h4>
                                <p className="text-[#d6d6d6] text-sm leading-relaxed">{testimonial.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {modalActive && (
                <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                    <div className="absolute inset-0 bg-black bg-opacity-80" onClick={() => setModalActive(false)}></div>
                    <div className="relative bg-[#1e1e1f] border border-[#383838] rounded-2xl p-6 max-w-2xl w-full shadow-2xl z-10 flex gap-6">
                        <button onClick={() => setModalActive(false)} className="absolute top-4 right-4 bg-[#2b2b2c] rounded-lg w-8 h-8 flex items-center justify-center text-white">
                            <X size={18} />
                        </button>
                        <figure className="bg-gradient-to-br from-[#404040] to-[#303030] rounded-2xl shadow-lg w-20 h-20 overflow-hidden flex-shrink-0">
                            <img src={selectedTestimonial?.avatar} alt={selectedTestimonial?.name} className="w-full h-full object-cover" />
                        </figure>
                        <div>
                            <h4 className="text-white text-xl font-medium mb-3">{selectedTestimonial?.name}</h4>
                            <p className="text-[#d6d6d6] text-sm leading-relaxed">{selectedTestimonial?.text}</p>
                        </div>
                    </div>
                </div>
            )}
        </article>
    );
};