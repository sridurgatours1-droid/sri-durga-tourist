import React from "react";
import { motion } from "framer-motion";

const reasons = [
  "Experienced local drivers",
  "Clean and well-maintained cars",
  "Customizable packages",
  "On-time pickup and drop",
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Us
        </motion.h2>
        <ul className="space-y-4">
          {reasons.map((reason, index) => (
            <motion.li
              key={index}
              className="text-lg text-gray-700"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {reason}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
