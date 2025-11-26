import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Services");
  const [showNav, setShowNav] = useState(true);

  // Show nav ONLY at top of page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowNav(true); // Show at top
      } else {
        setShowNav(false); // Hide everywhere else
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-[9999]
        bg-black/40 backdrop-blur-md text-white px-6 py-4
        flex items-center justify-between
        transition-all duration-300
        ${showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}
      `}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="logo" className="lg:w-40 w-33 xl:w-44" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center xl:gap-25 gap-10 text-lg xl:text-2xl lg:text-lg md:text-sm">
        {["Services", "Industries", "Investors", "Careers"].map((item) => (
          <li
            key={item}
            onClick={() => setActive(item)}
            className={`pb-1 cursor-pointer transition-all duration-200
              ${
                active === item
                  ? "border-b-2 border-white"
                  : "hover:text-gray-300"
              }
            `}
          >
            {item}
          </li>
        ))}

        <button className="bg-gray-200 text-black px-6 py-2 rounded-full font-medium hover:bg-white">
          Contact
        </button>
      </ul>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden text-3xl cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <HiX /> : <HiMenu />}
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-16 right-0 h-screen w-2/3 bg-black text-white p-6 flex flex-col gap-6 text-lg shadow-xl
          transform transition-all duration-300 md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {["Services", "Industries", "Investors", "Careers"].map((item) => (
          <p
            key={item}
            onClick={() => {
              setActive(item);
              setOpen(false);
            }}
            className={`cursor-pointer pb-2 transition-all duration-200 
              ${active === item ? "border-b-2 border-white" : ""}
            `}
          >
            {item}
          </p>
        ))}

        <button className="bg-gray-200 text-black w-full py-2 rounded-full font-medium hover:bg-white">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
