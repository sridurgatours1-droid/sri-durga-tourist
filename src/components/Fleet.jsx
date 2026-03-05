import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import car from "../assets/gallery/11gal.jpeg";
import bus from "../assets/gallery/10gal.jpeg";

const Fleet = () => {
  const vehicles = [
    {
      name: "Car Rental Service",
      description: "Comfortable and spacious vehicles for up to 5-7 passengers",
      image: car,
      imageAlt: "White car rental vehicle",
      features: [
        "AC & Heating",
        "Safety Features",
        "Clean & Well-Maintained",
        "Experienced Drivers",
      ],
      capacity: "5-7 Passengers",
      ideal: "Ideal for families and small groups",
    },
    {
      name: "Bus Rental Service",
      description: "Spacious buses for larger groups and organized tours",
      image: bus,
      imageAlt: "White bus rental vehicle",
      features: [
        "AC & Comfortable Seating",
        "Professional Drivers",
        "Safety Equipment",
        "Long-Distance Travel",
      ],
      capacity: "25-50 Passengers",
      ideal: "Ideal for group tours and large families",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-3">Our Fleet</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our well-maintained collection of vehicles tailored to
            meet your travel needs, whether it's a small family outing or a
            large group tour.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-200 flex items-center justify-center">
                {vehicle.image ? (
                  <img
                    src={vehicle.image}
                    alt={vehicle.imageAlt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-center text-gray-500">
                    <Users size={48} className="mx-auto mb-2 opacity-50" />
                    <p className="text-sm">{vehicle.imageAlt}</p>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                <p className="text-gray-600 mb-4">{vehicle.description}</p>

                {/* Capacity */}
                <div className="mb-4 p-3 bg-blue-50 rounded">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-blue-600">
                      Capacity:
                    </span>{" "}
                    {vehicle.capacity}
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    <span className="font-semibold text-blue-600">
                      Ideal for:
                    </span>{" "}
                    {vehicle.ideal}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-800">Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="text-blue-500 mt-1">✓</div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    const message = `Hi, I'm interested in booking the "${vehicle.name}". Can you provide more details and availability?`;
                    const encodedMessage = encodeURIComponent(message);
                    window.open(
                      `https://wa.me/918749070550?text=${encodedMessage}`,
                      "_blank",
                    );
                  }}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition-colors"
                >
                  Inquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12 p-6 bg-blue-50 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-700">
            All vehicles are regularly maintained and driven by experienced,
            courteous drivers trained to provide the best travel experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Fleet;
