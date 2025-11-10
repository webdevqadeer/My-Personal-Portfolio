import react from "react"

export const Navbar = ({ activePage, setActivePage }) => {
    const pages = ['About', 'Resume', 'Portfolio', 'Certifications', 'Contact'];

    return (
        <nav className="absolute top-0 right-0 bg-[#1e1e1fb3] backdrop-blur-md border border-[#383838] rounded-bl-3xl shadow-2xl z-20">
            <ul className="flex justify-center items-center gap-2 lg:gap-4 p-2 lg:px-5">
                {pages.map((page) => (
                    <li key={page}>
                        <button
                            onClick={() => setActivePage(page.toLowerCase())}
                            className={`text-xs lg:text-sm px-2  transition-colors ${activePage === page.toLowerCase()
                                    ? 'text-[#ffdb70]'
                                    : 'text-[#d6d6d6] hover:text-[#d6d6d6b3]'
                                }`}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};