import React, { useState } from "react";
import {
  Mail,
  Phone,
  Calendar,
  MapPin,
  Facebook,
  Github,
  Instagram,
  ChevronDown,
} from "lucide-react";

export const portfolioData = {
  personalInfo: {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Abdul",
    name: "Abdul Qadeer",
    title: "Professional Web developer",
    email: "abdul@example.com",
    phone: "+92 300 1234567",
    birthday: "May 23, 1997",
    location: "Lahore, Punjab, Pakistan"
  },
  socialLinks: {
    facebook: "https://facebook.com",
    github: "https://github.com",
    instagram: "https://instagram.com"
  }
};

const Sidebar = ({ isActive, toggleSidebar }) => {
  const { personalInfo, socialLinks } = portfolioData;

  return (
    <aside
      className={`bg-[#1e1e1f] border border-[#383838] rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.5)] mb-4 lg:mb-0 lg:sticky lg:top-6 transition-all duration-500 ${
        isActive ? "max-h-[800px]" : "max-h-28"
      } overflow-hidden lg:max-h-max`}
    >
      {/* Mobile View - Horizontal Layout */}
      <div className="lg:hidden p-4 relative">
        <button
          onClick={toggleSidebar}
          className="absolute top-0 right-0 bg-[#2b2b2c] text-[#ffdb70] w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#3a3a3a] transition-colors"
        >
          <ChevronDown
            size={18}
            className={`transition-transform ${
              isActive ? "rotate-180" : ""
            }`}
          />
        </button>

        <div className="flex items-center justify-center gap-2 pr-2">
          <figure className="bg-gradient-to-br from-[#404040] to-[#303030] rounded-3xl overflow-hidden w-20 h-20 flex-shrink-0 shadow-inner">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </figure>

          <div className="flex-1 text-left ">
            <h1 className="text-white text-xl font-semibold mb-1">
              {personalInfo.name}
            </h1>
            <p className="bg-[#2b2b2c] text-white text-xs px-2 py-1.5 rounded-lg font-medium shadow-md inline-block ">
              {personalInfo.title}
            </p>
          </div>
        </div>

        {/* Contact Info Section - Mobile */}
        <div
          className={`transition-all duration-300 ${
            isActive ? "opacity-100 mt-6" : "opacity-0 max-h-0"
          }`}
        >
          <div className="w-full h-px bg-[#383838] mb-6"></div>

          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <div className="bg-[#2b2b2c] w-10 h-10 rounded-xl flex items-center justify-center text-[#ffdb70] shadow-inner">
                <Mail size={16} />
              </div>
              <div className="text-left">
                <p className="text-[#d6d6d6b3] text-xs uppercase mb-1 tracking-wide">
                  Email
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-white text-sm hover:text-[#ffdb70] transition-colors truncate block"
                >
                  {personalInfo.email}
                </a>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <div className="bg-[#2b2b2c] w-10 h-10 rounded-xl flex items-center justify-center text-[#ffdb70] shadow-inner">
                <Phone size={16} />
              </div>
              <div className="text-left">
                <p className="text-[#d6d6d6b3] text-xs uppercase mb-1 tracking-wide">
                  Phone
                </p>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-white text-sm hover:text-[#ffdb70] transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <div className="bg-[#2b2b2c] w-10 h-10 rounded-xl flex items-center justify-center text-[#ffdb70] shadow-inner">
                <Calendar size={16} />
              </div>
              <div className="text-left">
                <p className="text-[#d6d6d6b3] text-xs uppercase mb-1 tracking-wide">
                  Birthday
                </p>
                <time className="text-white text-sm">
                  {personalInfo.birthday}
                </time>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <div className="bg-[#2b2b2c] w-10 h-10 rounded-xl flex items-center justify-center text-[#ffdb70] shadow-inner">
                <MapPin size={16} />
              </div>
              <div className="text-left">
                <p className="text-[#d6d6d6b3] text-xs uppercase mb-1 tracking-wide">
                  Location
                </p>
                <address className="text-white text-sm not-italic leading-snug">
                  {personalInfo.location}
                </address>
              </div>
            </li>
          </ul>

          <div className="w-full h-px bg-[#383838] my-6"></div>

          <ul className="flex justify-center gap-6">
            <li>
              <a
                href={socialLinks.facebook}
                className="text-[#d6d6d6b3] hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
            </li>
            <li>
              <a
                href={socialLinks.github}
                className="text-[#d6d6d6b3] hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
            </li>
            <li>
              <a
                href={socialLinks.instagram}
                className="text-[#d6d6d6b3] hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop View - Vertical Layout (Original) */}
      <div className="hidden lg:block p-6">
        <div className="relative flex flex-col items-center text-center">
          <figure className="bg-gradient-to-br from-[#404040] to-[#303030] rounded-3xl overflow-hidden w-36 h-36 mb-4 shadow-inner">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </figure>

          <h1 className="text-white text-2xl font-semibold mb-2">
            {personalInfo.name}
          </h1>

          <p className="bg-[#2b2b2c] text-white text-sm px-4 py-1.5 rounded-lg mb-4 font-medium shadow-md">
            {personalInfo.title}
          </p>
        </div>

        <div className="w-full h-px bg-[#383838] my-6"></div>

        <ul className="space-y-4">
          <li className="flex items-center gap-4">
            <div className="bg-[#2b2b2c] w-10 h-10 rounded-xl flex items-center justify-center text-[#ffdb70] shadow-inner">
              <Mail size={16} />
            </div>
            <div className="text-left">
              <p className="text-[#d6d6d6b3] text-xs uppercase mb-1 tracking-wide">
                Email
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-white text-sm hover:text-[#ffdb70] transition-colors truncate block"
              >
                {personalInfo.email}
              </a>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <div className="bg-[#2b2b2c] w-10 h-10 rounded-xl flex items-center justify-center text-[#ffdb70] shadow-inner">
              <Phone size={16} />
            </div>
            <div className="text-left">
              <p className="text-[#d6d6d6b3] text-xs uppercase mb-1 tracking-wide">
                Phone
              </p>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-white text-sm hover:text-[#ffdb70] transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <div className="bg-[#2b2b2c] w-10 h-10 rounded-xl flex items-center justify-center text-[#ffdb70] shadow-inner">
              <Calendar size={16} />
            </div>
            <div className="text-left">
              <p className="text-[#d6d6d6b3] text-xs uppercase mb-1 tracking-wide">
                Birthday
              </p>
              <time className="text-white text-sm">
                {personalInfo.birthday}
              </time>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <div className="bg-[#2b2b2c] w-10 h-10 rounded-xl flex items-center justify-center text-[#ffdb70] shadow-inner">
              <MapPin size={16} />
            </div>
            <div className="text-left">
              <p className="text-[#d6d6d6b3] text-xs uppercase mb-1 tracking-wide">
                Location
              </p>
              <address className="text-white text-sm not-italic leading-snug">
                {personalInfo.location}
              </address>
            </div>
          </li>
        </ul>

        <div className="w-full h-px bg-[#383838] my-6"></div>

        <ul className="flex justify-center gap-6">
          <li>
            <a
              href={socialLinks.facebook}
              className="text-[#d6d6d6b3] hover:text-white transition-colors"
            >
              <Facebook size={20} />
            </a>
          </li>
          <li>
            <a
              href={socialLinks.github}
              className="text-[#d6d6d6b3] hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
          </li>
          <li>
            <a
              href={socialLinks.instagram}
              className="text-[#d6d6d6b3] hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
