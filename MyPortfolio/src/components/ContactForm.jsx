import React, { useState } from "react";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({ 
    fullname: '', 
    email: '', 
    message: '' 
  });
  const [formValid, setFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const newData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newData);
    setFormValid(newData.fullname && newData.email && newData.message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setShowSuccess(true);
      setIsSubmitting(false);
      setFormData({ fullname: '', email: '', message: '' });
      setFormValid(false);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <article className="pt-12 sm:pt-14 lg:pt-16">
      {/* Header */}
      <header className="mb-6 sm:mb-8 lg:mb-10">
        <h2 className="text-white text-xl sm:text-2xl lg:text-4xl font-semibold relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-gradient-to-r after:from-[#ffdb70] after:to-[#f5c842] after:rounded-full">
          Contact
        </h2>
      </header>

      {/* Contact Info Cards */}
      <section className="mb-8 sm:mb-10 lg:mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {/* Email Card */}
          <div className="bg-gradient-to-br from-[#404040] to-transparent p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-[#383838] hover:border-[#4a4a4a] transition-all group">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="bg-[#2b2b2c] w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-[#ffdb70] flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail size={18} className="sm:hidden" />
                <Mail size={20} className="hidden sm:block" />
              </div>
              <div className="min-w-0">
                <p className="text-[#d6d6d6b3] text-[10px] sm:text-xs uppercase mb-1 tracking-wide">
                  Email
                </p>
                <a 
                  href="mailto:abdul@example.com" 
                  className="text-white text-xs sm:text-sm hover:text-[#ffdb70] transition-colors truncate block"
                >
                  abdul@example.com
                </a>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-gradient-to-br from-[#404040] to-transparent p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-[#383838] hover:border-[#4a4a4a] transition-all group">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="bg-[#2b2b2c] w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-[#ffdb70] flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone size={18} className="sm:hidden" />
                <Phone size={20} className="hidden sm:block" />
              </div>
              <div className="min-w-0">
                <p className="text-[#d6d6d6b3] text-[10px] sm:text-xs uppercase mb-1 tracking-wide">
                  Phone
                </p>
                <a 
                  href="tel:+923001234567" 
                  className="text-white text-xs sm:text-sm hover:text-[#ffdb70] transition-colors truncate block"
                >
                  +92 300 1234567
                </a>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-gradient-to-br from-[#404040] to-transparent p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-[#383838] hover:border-[#4a4a4a] transition-all group sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="bg-[#2b2b2c] w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-[#ffdb70] flex-shrink-0 group-hover:scale-110 transition-transform">
                <MapPin size={18} className="sm:hidden" />
                <MapPin size={20} className="hidden sm:block" />
              </div>
              <div className="min-w-0">
                <p className="text-[#d6d6d6b3] text-[10px] sm:text-xs uppercase mb-1 tracking-wide">
                  Location
                </p>
                <span className="text-white text-xs sm:text-sm truncate block">
                  Lahore, Punjab, Pakistan
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-medium mb-5 sm:mb-6 lg:mb-8">
          Contact Form
        </h3>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 bg-green-500 bg-opacity-10 border border-green-500 rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center gap-3 animate-slideDown">
            <CheckCircle size={20} className="text-green-500 flex-shrink-0 sm:hidden" />
            <CheckCircle size={24} className="text-green-500 flex-shrink-0 hidden sm:block" />
            <p className="text-green-500 text-sm sm:text-base">
              Message sent successfully! I'll get back to you soon.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <div className="relative">
              <input
                type="text"
                name="fullname"
                placeholder="Full name"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full bg-transparent border border-[#383838] rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-white text-sm sm:text-base placeholder:text-[#d6d6d6] focus:border-[#ffdb70] focus:ring-2 focus:ring-[#ffdb70] focus:ring-opacity-20 outline-none transition-all"
                required
              />
            </div>
            
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-[#383838] rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-white text-sm sm:text-base placeholder:text-[#d6d6d6] focus:border-[#ffdb70] focus:ring-2 focus:ring-[#ffdb70] focus:ring-opacity-20 outline-none transition-all"
                required
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border border-[#383838] rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-white text-sm sm:text-base placeholder:text-[#d6d6d6] focus:border-[#ffdb70] focus:ring-2 focus:ring-[#ffdb70] focus:ring-opacity-20 outline-none resize-vertical min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] transition-all"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!formValid || isSubmitting}
            className="bg-gradient-to-br from-[#404040] to-transparent px-5 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-[#ffdb70] text-sm sm:text-base font-medium flex items-center justify-center gap-2 sm:gap-3 hover:from-[#ffdb70] hover:to-[#f5c842] hover:text-[#0c0c0d] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-2xl w-full sm:w-auto group"
          >
            <Send 
              size={16} 
              className={`transition-transform group-hover:translate-x-1 sm:hidden ${isSubmitting ? 'animate-pulse' : ''}`}
            />
            <Send 
              size={18} 
              className={`transition-transform group-hover:translate-x-1 hidden sm:block ${isSubmitting ? 'animate-pulse' : ''}`}
            />
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
      </section>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </article>
  );
};