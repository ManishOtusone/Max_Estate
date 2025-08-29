import React, { useState } from "react";
import Maxlogo from "../assets/max-logo.png";
import AntaraLogo from "../assets/antara-logo.png";
import EnquiryModal from "../pages/Enquiry";

const Navbar = () => {
    const [active, setActive] = useState("Estate 360");
    const [isModalOpen, setModalOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: "Estate 360", href: "#estate" },
        { name: "Residences", href: "#residences" },
        { name: "Antara", href: "#antara" },
        { name: "Amenities", href: "#amenities" },
        { name: "Typologies", href: "#typologies" },
        { name: "Enquire Now", href: "#" },
    ];

    const handleClick = (link) => {
        setActive(link.name);

        if (link.name === "Enquire Now") {
            setModalOpen(true);
        } else {
            const target = document.querySelector(link.href);
            if (target) target.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false); // close mobile menu after click
        }
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 flex items-center justify-between py-4 px-4 md:px-8 bg-[#fafaf8] z-50 shadow-sm">
                {/* Left: Max Logo */}
                <div className="flex-shrink-0">
                    <img src={Maxlogo} alt="Max Logo" className="w-[130px] h-[62.25px]" />
                </div>

                {/* Center links (desktop only) */}
                <ul className="hidden md:flex md:space-x-6 text-black font-medium">
                    {links.map((link) => (
                        <li
                            key={link.name}
                            onClick={() => handleClick(link)}
                            className={`cursor-pointer border-b-2 md:border-b-0 transition-all duration-300 py-2 md:py-0 px-4 md:px-0 ${active === link.name ? "border-[#67132f] text-[#67132f]" : "border-transparent"
                                } hover:border-[#67132f] hover:text-[#67132f]`}
                        >
                            {link.name}
                        </li>
                    ))}
                </ul>

                {/* Right side: Antara Logo + Hamburger (mobile) / Antara Logo (desktop) */}
                <div className="flex items-center space-x-4">
                    {/* Antara Logo */}
                    <img
                        src={AntaraLogo}
                        alt="Antara Logo"
                        className="h-[40px] w-auto md:h-[58.89px] md:w-[210px]"
                    />

                    {/* Hamburger for mobile */}
                    <button
                        className="md:hidden text-black"
                        onClick={() => setMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile menu */}
                <ul
                    className={`flex flex-col md:hidden absolute top-full left-0 w-full bg-[#fafaf8] transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-[500px] py-4" : "max-h-0"
                        }`}
                >
                    {links.map((link) => (
                        <li
                            key={link.name}
                            onClick={() => handleClick(link)}
                            className={`cursor-pointer border-b-2 transition-all duration-300 py-2 px-4 ${active === link.name ? "border-[#67132f] text-[#67132f]" : "border-transparent"
                                } hover:border-[#67132f] hover:text-[#67132f]`}
                        >
                            {link.name}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Modal */}
            <EnquiryModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
};

export default Navbar;
