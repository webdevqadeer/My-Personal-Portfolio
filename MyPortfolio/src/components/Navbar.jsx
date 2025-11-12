import React from "react";

export const Navbar = ({ activePage, setActivePage }) => {
  // Added "Certifications" to the pages array
  const pages = ["About", "Resume", "Portfolio", "Certifications", "Contact"];

  return (
    <>
      {/* Desktop Navbar - Top Right */}
      <nav className="hidden lg:flex absolute top-0 right-0 bg-[#1e1e1fb3] backdrop-blur-md border border-[#383838] rounded-bl-3xl shadow-2xl z-20">
        <ul className="flex justify-center items-center gap-2 lg:gap-4 p-2 lg:px-5">
          {pages.map((page) => (
            <li key={page}>
              <button
                onClick={() => setActivePage(page.toLowerCase())}
                className={`text-xs lg:text-sm px-3 py-2 rounded-lg transition-all ${
                  activePage === page.toLowerCase()
                    ? "text-[#ffdb70] bg-[#2b2b2c]"
                    : "text-[#d6d6d6] hover:text-[#ffdb70] hover:bg-[#2b2b2c]"
                }`}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#1e1e1f] border-t border-[#383838] rounded-t-3xl shadow-[0_-2px_10px_rgba(0,0,0,0.4)] py-3 px-2 flex justify-around items-center lg:hidden z-50">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setActivePage(page.toLowerCase())}
            className={`text-[10px] sm:text-xs font-medium px-2 py-1.5 rounded-lg transition-all whitespace-nowrap ${
              activePage === page.toLowerCase()
                ? "text-[#ffdb70] bg-[#2b2b2c]"
                : "text-[#d6d6d6] hover:text-[#ffdb70] hover:bg-[#2b2b2c]"
            }`}
          >
            {page}
          </button>
        ))}
      </nav>
    </>
  );
};