import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://source.unsplash.com/400x300/?travel",
  "https://source.unsplash.com/400x300/?temple",
  "https://source.unsplash.com/400x300/?beach",
  "https://source.unsplash.com/400x300/?car",
  "https://source.unsplash.com/400x300/?coast",
  "https://source.unsplash.com/400x300/?journey",
];

const Gallery = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Gallery
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
