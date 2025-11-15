import React from "react";
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

const portfolioData = {
  personalInfo: {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Abdul",
    name: "Abdul Qadeer",
    title: "Professional Web developer",
    email: "abdul@example.com",
    phone: "+92 300 1234567",
    birthday: "May 23, 1997",
    location: "Lahore, Punjab, Pakistan",
  },
  socialLinks: {
    facebook: "https://facebook.com",
    github: "https://github.com",
    instagram: "https://instagram.com",
  },
};

export const Sidebar = ({ isActive, toggleSidebar }) => {
  const { personalInfo, socialLinks } = portfolioData;

  const contactItems = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: Calendar, label: "Birthday", value: personalInfo.birthday },
    { icon: MapPin, label: "Location", value: personalInfo.location },
  ];

  const socialItems = [
    { icon: Facebook, href: socialLinks.facebook, label: "Facebook" },
    { icon: Github, href: socialLinks.github, label: "Github" },
    { icon: Instagram, href: socialLinks.instagram, label: "Instagram" },
  ];

  return (
    <aside
      className={`flex-shrink-0 bg-[#1e1e1f] border border-[#383838] rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)]
      transition-all duration-500 overflow-hidden
      ${isActive ? "max-h-[800px]" : "max-h-40"}
      md:max-h-max md:w-[280px] w-full`}
    >
      {/* MOBILE / SMALL SCREEN */}
      <div className="md:hidden relative p-4  sm:p-5">
        <div className="flex items-center justify-center flex-col gap-3 sm:gap-4">
          <figure className="bg-gradient-to-br from-[#404040] to-[#303030] rounded-xl overflow-hidden 
            w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0 shadow-inner">
            <img src={personalInfo.avatar} alt={personalInfo.name} className="w-full h-full object-cover" />
          </figure>

          <div className="flex-1 text-center min-w-0">
            <h1 className="text-white font-semibold mb-1 truncate text-[0.9rem] sm:text-base md:text-lg">
              {personalInfo.name}
            </h1>
            <p className="bg-[#2b2b2c] text-white px-2 py-1 rounded-lg font-medium shadow-md inline-block truncate
              text-[0.65rem] sm:text-xs md:text-sm">
              {personalInfo.title}
            </p>
          </div>
        </div>

        {/* Collapse button */}
        <button
          onClick={toggleSidebar}
          aria-expanded={isActive}
          className="absolute top-0 right-0 bg-[#2b2b2c] text-[#ffdb70] w-8 h-8 rounded-sm flex items-center justify-center hover:bg-[#3a3a3a] transition-colors"
        >
          <ChevronDown
            size={18}
            className={`transition-transform ${isActive ? "rotate-180" : ""}`}
          />
        </button>

        {/* Expandable content */}
        <div
          className={`transition-all duration-300 overflow-hidden ${isActive ? "opacity-100  max-h-[700px] ease-out" : "opacity-0 max-h-0"}`}
        >
          <div className="w-full h-px bg-[#383838] my-4" />

          <ul className="space-y-3 sm:space-y-4">
            {contactItems.map((item, index) => (
              <li key={index} className="flex items-center gap-3 sm:gap-4">
                <div className="bg-[#2b2b2c] w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-[#ffdb70] shadow-inner flex-shrink-0">
                  <item.icon size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-[#d6d6d6b3] text-[9px] sm:text-xs uppercase mb-0.5 tracking-wide">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white text-sm sm:text-[0.85rem] hover:text-[#ffdb70] truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-white text-sm sm:text-[0.85rem] truncate block">{item.value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="w-full h-px bg-[#383838] my-4" />

          <ul className="flex justify-center gap-4 sm:gap-6">
            {socialItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-[#d6d6d6b3] hover:text-white transition-colors"
                  aria-label={item.label}
                >
                  <item.icon size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* DESKTOP / MEDIUM+ SCREEN */}
      <div className="hidden md:block p-6">
        <div className="flex flex-col items-center mb-6">
          <figure className="bg-gradient-to-br from-[#404040] to-[#303030] rounded-xl overflow-hidden 
            w-32 h-32 mb-4 shadow-inner">
            <img src={personalInfo.avatar} alt={personalInfo.name} className="w-full h-full object-cover" />
          </figure>

          <h1 className="text-white text-xl font-semibold mb-2 text-center">
            {personalInfo.name}
          </h1>
          <p className="bg-[#2b2b2c] text-white text-center py-1 w-full rounded-lg font-normal shadow-md text-[16px]">
            {personalInfo.title}
          </p>
        </div>

        <div className="w-full h-px bg-[#383838] my-6" />

        <ul className="space-y-4">
          {contactItems.map((item, index) => (
            <li key={index} className="flex items-center gap-4">
              <div className="bg-[#2b2b2c] w-11 h-11 rounded-xl flex items-center justify-center text-[#ffdb70] shadow-inner flex-shrink-0">
                <item.icon size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[#d6d6d6b3] text-xs uppercase mb-1 tracking-wide">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-white text-sm hover:text-[#ffdb70] break-words"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-white text-sm break-words">{item.value}</span>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="w-full h-px bg-[#383838] my-6" />

        <ul className="flex justify-center gap-6">
          {socialItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-[#d6d6d6b3] hover:text-white transition-colors"
                aria-label={item.label}
              >
                <item.icon size={22} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};