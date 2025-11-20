import React, {useState} from "react";
import {Send} from "lucide-react"

export const Contact = () => {
  const [formData, setFormData] = useState({ fullname: '', email: '', message: '' });
  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const newData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newData);
    setFormValid(newData.fullname && newData.email && newData.message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ fullname: '', email: '', message: '' });
    setFormValid(false);
  };

  return (
    <article className="mb-12">
      <header className="mb-6">
        <h2 className="text-white text-2xl lg:text-3xl font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-1 after:bg-gradient-to-r after:from-[#ffdb70] after:to-[#f5c842] after:rounded-full">
          Contact
        </h2>
      </header>

      <section>
        <h3 className="text-white text-xl font-medium mb-5">Contact Form</h3>
        <p className="text-white text-base md:text-[#d6d6d6] md:text-base lg:text-lg">No projects found in this category.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="fullname"
              placeholder="Full name"
              value={formData.fullname}
              onChange={handleChange}
              className="bg-transparent border border-[#383838] rounded-2xl px-5 py-4 text-white placeholder:text-[#d6d6d6] focus:border-[#ffdb70] outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border border-[#383838] rounded-2xl px-5 py-4 text-white placeholder:text-[#d6d6d6] focus:border-[#ffdb70] outline-none"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-transparent border border-[#383838] rounded-2xl px-5 py-4 text-white placeholder:text-[#d6d6d6] focus:border-[#ffdb70] outline-none resize-vertical min-h-[120px]"
            required
          />

          <button
            type="submit"
            disabled={!formValid}
            className="bg-gradient-to-br from-[#404040] to-transparent px-6 py-2 rounded-xl text-[#ffdb70] flex items-center gap-3 hover:from-[#ffdb70] hover:to-[#f5c842] hover:text-[#0c0c0d] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            <Send size={18} />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};