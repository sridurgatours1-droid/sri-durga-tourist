import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-semibold">Sri Durga Tours and Travels</p>
        <p className="text-sm">
          Your trusted partner for coastal and temple tours
        </p>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Packages
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Gallery
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Contact Us
          </a>
        </div>
        <p className="mt-4 text-sm">
          &copy; 2026 Sri Durga Tours and Travels. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
