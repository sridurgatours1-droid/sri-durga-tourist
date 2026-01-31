import React from "react";
import { motion } from "framer-motion";
import { FaCar, FaMapMarkedAlt, FaUserShield, FaSmile } from "react-icons/fa";

const About = () => {
  const services = [
    {
      icon: <FaCar />,
      title: "Car Rentals",
      description: "Comfortable and well-maintained cars for your journeys.",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Custom Packages",
      description: "Tailored travel packages to suit your needs.",
    },
    {
      icon: <FaUserShield />,
      title: "Local Drivers",
      description: "Experienced and friendly local drivers.",
    },
    {
      icon: <FaSmile />,
      title: "Safe Journeys",
      description: "Ensuring safety and comfort throughout your trip.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          What We Do
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded shadow hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-blue-500 text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
