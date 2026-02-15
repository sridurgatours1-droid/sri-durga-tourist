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
            <a
              href="tel:+918749070550"
              className="hover:text-blue-600 transition-colors"
            >
              +91 8749070550
            </a>
          </motion.div>
          <motion.div
            className="flex items-center justify-center space-x-4 text-lg cursor-pointer hover:text-green-600 transition-colors"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => {
              const message =
                "Hi, I'm interested in exploring your tour packages. Can you provide more details?";
              const encodedMessage = encodeURIComponent(message);
              window.open(
                `https://wa.me/918749070550?text=${encodedMessage}`,
                "_blank",
              );
            }}
          >
            <FaWhatsapp className="text-green-500" />
            <span>Chat with us on WhatsApp</span>
          </motion.div>
          <motion.div
            className="flex items-center justify-center space-x-4 text-lg cursor-pointer hover:text-red-600 transition-colors"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={() =>
              window.open("https://share.google/Qc9tDe1SIhn0Baqic", "_blank")
            }
          >
            <FaMapMarkerAlt className="text-red-500" />
            <span>Shree Durga Tourist Murdeshwar</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
