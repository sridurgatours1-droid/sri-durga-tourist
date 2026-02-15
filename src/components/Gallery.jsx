import React from "react";
import { motion } from "framer-motion";

const images = [
  "/src/assets/gallery/1gal.jpeg",
  "/src/assets/gallery/2gal.jpeg",
  "/src/assets/gallery/3gal.jpeg",
  "/src/assets/gallery/4gal.jpeg",
  "/src/assets/gallery/5gal.jpeg",
  "/src/assets/gallery/6gal.jpeg",
  "/src/assets/gallery/7gal.jpeg",
  "/src/assets/gallery/8gal.jpeg",
  "/src/assets/gallery/9gal.jpeg",
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
              className="overflow-hidden rounded shadow-lg aspect-[3/4]"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
