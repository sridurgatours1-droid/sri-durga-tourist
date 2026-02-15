import React from "react";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Murudeshwara Temple & Beach Tour",
    description:
      "Explore the iconic Murudeshwara temple and relax at the beach.",
    duration: "1 Day",
    image: "/src/assets/packs/m1.jpg",
  },
  {
    name: "Murudeshwara – Gokarna – Honnavar Package",
    description: "A spiritual and scenic journey through coastal Karnataka.",
    duration: "2 Days",
    image: "/src/assets/packs/m2.jpg",
  },
  {
    name: "Coastal Karnataka Temple Tour",
    description: "Visit famous temples along the serene Karnataka coast.",
    duration: "3 Days",
    image: "/src/assets/packs/m3.jpeg",
  },
  {
    name: "Weekend Murudeshwara Getaway",
    description: "A perfect weekend escape to Murudeshwara.",
    duration: "2 Days",
    image: "/src/assets/packs/m4.jpg",
  },
];

const PopularPackages = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Popular Packages
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="bg-white rounded shadow hover:shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-2">{pkg.description}</p>
                <p className="text-sm text-gray-500 mb-4">
                  Duration: {pkg.duration}
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPackages;
