import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <div className="space-y-4">
          <motion.div
            className="flex items-center justify-center space-x-4 text-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaPhoneAlt className="text-blue-500" />
            <span>+91 98765 43210</span>
          </motion.div>
          <motion.div
            className="flex items-center justify-center space-x-4 text-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaWhatsapp className="text-green-500" />
            <span>Chat with us on WhatsApp</span>
          </motion.div>
          <motion.div
            className="flex items-center justify-center space-x-4 text-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaMapMarkerAlt className="text-red-500" />
            <span>Karnataka, India</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
