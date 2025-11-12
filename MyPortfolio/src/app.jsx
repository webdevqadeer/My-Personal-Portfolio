import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Resume } from "./components/Resume";
import { Portfolio } from "./components/Portfolio";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/ContactForm";

const App = () => {
  const [activePage, setActivePage] = useState("about");
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-4 sm:px-6 lg:px-10 py-6 lg:py-10">
      {/* ✅ Main layout wrapper */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-7xl mx-auto">
        
        {/* ✅ Sidebar (fixed width on desktop) */}
        <div className="w-full lg:w-[340px] flex-shrink-0">
          <Sidebar
            isActive={sidebarActive}
            toggleSidebar={() => setSidebarActive(!sidebarActive)}
          />
        </div>

        {/* ✅ Main Content (takes remaining width) */}
        <main className="flex-1 bg-[#1e1e1f] border border-[#383838] rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] p-4 sm:p-6 lg:p-10 pb-20 lg:pb-10 relative overflow-hidden">
          <Navbar activePage={activePage} setActivePage={setActivePage} />

          {activePage === "about" && <About />}
          {activePage === "resume" && <Resume />}
          {activePage === "portfolio" && <Portfolio />}
          {activePage === "certifications" && <Certifications />}
          {activePage === "contact" && <Contact />}
        </main>
      </div>
    </div>
  );
};

export default App;
