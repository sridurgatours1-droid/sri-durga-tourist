import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import m1 from "../assets/packs/m1.jpg";
import m2 from "../assets/packs/m2.jpg";
import m3 from "../assets/packs/m3.jpeg";
import m4 from "../assets/packs/m4.jpg";

const destinationCards = [
  {
    id: 1,
    title: "Murudeshwara & Beaches",
    image: m1,
    region: "Karwar & Nearby",
    attractions: [
      "Idagunji Vinayaka Temple",
      "Gunavanteshwara Temple",
      "Apsakonda Falls",
      "Sharavati Backwater Boating",
      "Eco Beach",
      "Mangroves Boardwalk",
    ],
  },
  {
    id: 2,
    title: "Gokarna Temples & Beaches",
    image: m2,
    region: "Gokarna",
    attractions: [
      "Mahabaleshwar Temple",
      "Ganapati Temple",
      "Bhadrakali Temple",
      "Om Beach",
      "Kudle Beach",
    ],
  },
  {
    id: 3,
    title: "Udupi & Temples",
    image: m3,
    region: "Udupi",
    attractions: [
      "Udupi Krishna Matha",
      "Maravante Beach",
      "Aanegudda Vinayaka Temple",
      "Chandika Durgaparameshwari Temple",
      "Kolluru Mookambika Temple",
      "Malpe Beach",
    ],
  },
  {
    id: 4,
    title: "Major Temple Circuit",
    image: m4,
    region: "Famous Temples",
    attractions: [
      "Dharmasthala",
      "Kukke Subrahmanya",
      "Shringeri",
      "Horanadu",
      "Kolluru",
      "Udupi",
      "Gokarna",
      "Murudeshwara",
    ],
  },
];

const DestinationShowcase = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Explore Popular Destinations
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Click on any destination to explore attractions and temples
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinationCards.map((card, index) => (
            <motion.div
              key={card.id}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{card.region}</p>

                {/* Expandable Attractions */}
                <button
                  onClick={() =>
                    setExpandedId(expandedId === card.id ? null : card.id)
                  }
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition font-semibold flex items-center justify-between"
                >
                  <span>View Attractions</span>
                  <motion.div
                    animate={{
                      rotate: expandedId === card.id ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                {/* Attractions List */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedId === card.id ? "auto" : 0,
                    opacity: expandedId === card.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-3"
                >
                  <ul className="space-y-1 text-sm text-gray-700">
                    {card.attractions.map((attraction, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.2,
                          delay: idx * 0.05,
                        }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-blue-500 font-bold">•</span>
                        <span>{attraction}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-gray-600 mt-8 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Contact us to book a customized tour package to any of these
          destinations!
        </motion.p>
      </div>
    </section>
  );
};

export default DestinationShowcase;
