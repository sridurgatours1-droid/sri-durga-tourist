import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Packages", id: "packages" },
    { label: "Gallery", id: "gallery" },
    { label: "Contact Us", id: "contact" },
  ];

  return (
    <motion.nav
      className="sticky top-0 bg-white shadow-md z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1
          className="text-xl font-bold hover:text-blue-500 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Sri Durga Tours
        </h1>
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="hover:text-blue-500 cursor-pointer transition-colors"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-xl">
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.ul
          className="md:hidden bg-white shadow-md space-y-4 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <li
              key={item.id}
              className="hover:text-blue-500 cursor-pointer transition-colors"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
