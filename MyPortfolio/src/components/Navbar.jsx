import React from "react";

export const Navbar = ({ activePage, setActivePage }) => {
  const pages = ["About", "Resume", "Portfolio", "Contact"];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex absolute top-0 right-0 bg-[#1e1e1fb3] backdrop-blur-md border border-[#383838] rounded-bl-3xl shadow-2xl z-20">
        <ul className="flex justify-center items-center gap-2 lg:gap-4 p-2 lg:px-5">
          {pages.map((page) => (
            <li key={page}>
              <button
                onClick={() => setActivePage(page.toLowerCase())}
                className={`text-xs lg:text-sm px-2 transition-colors ${
                  activePage === page.toLowerCase()
                    ? "text-[#ffdb70]"
                    : "text-[#d6d6d6] hover:text-[#d6d6d6b3]"
                }`}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#1e1e1f] border-t border-[#383838] rounded-t-3xl shadow-[0_-2px_10px_rgba(0,0,0,0.4)] py-3 flex justify-around items-center lg:hidden z-50">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setActivePage(page.toLowerCase())}
            className={`text-xs font-medium transition-colors ${
              activePage === page.toLowerCase()
                ? "text-[#ffdb70]"
                : "text-[#d6d6d6] hover:text-[#ffdb70]"
            }`}
          >
            {page}
          </button>
        ))}
      </nav>
    </>
  );
};
