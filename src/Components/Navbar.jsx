import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Services");
  const [showNav, setShowNav] = useState(true);

  const location = useLocation();

  // Auto-Highlight based on current URL
  useEffect(() => {
    const path = location.pathname;

    if (path.includes("services")) setActive("Services");
    else if (path.includes("industries")) setActive("Industries");
    else if (path.includes("investors")) setActive("Investors");
    else if (path.includes("careers")) setActive("Careers");
  }, [location.pathname]);

  // Show nav ONLY at top
  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Services", path: "/service" },
    { name: "Industries", path: "/industries" },
    { name: "Investors", path: "/investors" },
    { name: "Careers", path: "/careers" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999]
        bg-black/40 backdrop-blur-md text-white px-6 py-4
        flex items-center justify-between transition-all duration-300
        ${showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}
      `}
    >
      {/* Logo */}
      <img src={logo} alt="logo" className="lg:w-40 w-33 xl:w-44" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center xl:gap-25 gap-10 text-lg xl:text-2xl lg:text-lg md:text-sm">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              onClick={() => setActive(item.name)}
              className={`pb-1 cursor-pointer transition-all duration-200
                ${
                  active === item.name
                    ? "border-b-2 border-white"
                    : "hover:text-gray-300"
                }
              `}
            >
              {item.name}
            </Link>
          </li>
        ))}

        <Link to="/contact">
          <button className="bg-gray-200 text-black px-6 py-2 rounded-full font-medium hover:bg-white">
            Contact
          </button>
        </Link>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-3xl cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? <HiX /> : <HiMenu />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 right-0 h-screen w-2/3 bg-black text-white p-6 flex flex-col gap-6 text-lg shadow-xl
          transform transition-all duration-300 md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => {
              setActive(item.name);
              setOpen(false);
            }}
            className={`cursor-pointer pb-2 transition-all duration-200 
              ${active === item.name ? "border-b-2 border-white" : ""}
            `}
          >
            {item.name}
          </Link>
        ))}

        <Link to="/contact">
          <button className="bg-gray-200 text-black w-full py-2 rounded-full font-medium hover:bg-white">
            Contact
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
