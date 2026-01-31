import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="sticky top-0 bg-white shadow-md z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Sri Durga Tours</h1>
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">Packages</li>
          <li className="hover:text-blue-500 cursor-pointer">Gallery</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
        </ul>
        <div className="md:hidden">
          <button className="text-xl">☰</button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
