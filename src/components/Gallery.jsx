import React from "react";
import { motion } from "framer-motion";
import gal1 from "../assets/gallery/1gal.jpeg";
import gal2 from "../assets/gallery/2gal.jpeg";
import gal3 from "../assets/gallery/3gal.jpeg";
import gal4 from "../assets/gallery/4gal.jpeg";
import gal5 from "../assets/gallery/5gal.jpeg";
import gal6 from "../assets/gallery/6gal.jpeg";
import gal7 from "../assets/gallery/7gal.jpeg";
import gal8 from "../assets/gallery/8gal.jpeg";
import gal9 from "../assets/gallery/9gal.jpeg";
import gal10 from "../assets/gallery/10gal.jpeg";
import gal11 from "../assets/gallery/11gal.jpeg";

const images = [
  gal1,
  gal2,
  gal3,
  gal4,
  gal5,
  gal6,
  gal7,
  gal8,
  gal9,
  gal10,
  gal11,
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded shadow-lg h-64"
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
