import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const destinations = [
  {
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
    region: "Jog Falls",
    attractions: ["Jog Falls", "Hanging Bridge", "Sharavati Valley View"],
  },
  {
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

const PopularDestinations = () => {
  const [expandedRegion, setExpandedRegion] = useState(0);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Popular Destinations & Attractions
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore the most sought-after temples and attractions across coastal
          Karnataka
        </motion.p>

        <div className="space-y-4 max-w-2xl mx-auto">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() =>
                  setExpandedRegion(expandedRegion === index ? -1 : index)
                }
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 flex justify-between items-center transition-all"
              >
                <h3 className="text-lg font-semibold text-left">
                  {destination.region}
                </h3>
                <motion.div
                  animate={{
                    rotate: expandedRegion === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedRegion === index ? "auto" : 0,
                  opacity: expandedRegion === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="bg-gray-50 px-6 py-4">
                  <ul className="space-y-2">
                    {destination.attractions.map((attraction, idx) => (
                      <motion.li
                        key={idx}
                        className="text-gray-700 flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: idx * 0.05,
                        }}
                      >
                        <span className="text-blue-500 font-bold mt-1">•</span>
                        <span>{attraction}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-gray-600 mt-8 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Contact us to customize a tour package that includes these
          destinations!
        </motion.p>
      </div>
    </section>
  );
};

export default PopularDestinations;
