import React from "react";
import { motion } from "framer-motion";
import { X, MapPin, Clock, Users, DollarSign, Camera } from "lucide-react";

const PackageDetails = ({ pkg, onClose }) => {
  if (!pkg) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with close button */}
        <div className="relative">
          <img
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-2">{pkg.name}</h1>
          <p className="text-gray-600 mb-6">{pkg.description}</p>

          {/* Key Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="text-blue-500" size={20} />
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-semibold">{pkg.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="text-green-500" size={20} />
              <div>
                <p className="text-sm text-gray-600">Price</p>
                <p className="font-semibold">₹{pkg.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-purple-500" size={20} />
              <div>
                <p className="text-sm text-gray-600">Group Size</p>
                <p className="font-semibold">{pkg.groupSize}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-red-500" size={20} />
              <div>
                <p className="text-sm text-gray-600">Difficulty</p>
                <p className="font-semibold">{pkg.difficulty}</p>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-6 pb-6 border-b">
            <h2 className="text-xl font-bold mb-3">Overview</h2>
            <p className="text-gray-700">{pkg.overview}</p>
          </div>

          {/* Itinerary */}
          <div className="mb-6 pb-6 border-b">
            <h2 className="text-xl font-bold mb-3">Itinerary</h2>
            <div className="space-y-3">
              {pkg.itinerary.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <span className="font-bold text-blue-500 min-w-fit">
                    Day {index + 1}
                  </span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-6 pb-6 border-b">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Camera size={20} /> Highlights
            </h2>
            <ul className="space-y-2">
              {pkg.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 pb-6 border-b">
            <div>
              <h3 className="font-bold text-green-600 mb-3">Inclusions</h3>
              <ul className="space-y-1 text-sm">
                {pkg.inclusions.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-red-600 mb-3">Exclusions</h3>
              <ul className="space-y-1 text-sm">
                {pkg.exclusions.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Best Time to Visit */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Best Time to Visit</h2>
            <p className="text-gray-700">{pkg.bestTime}</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <button
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded transition"
              onClick={() => {
                const message = `Hi, I'm interested in the "${pkg.name}" package. Can you provide more details?`;
                const encodedMessage = encodeURIComponent(message);
                window.open(
                  `https://wa.me/918749070550?text=${encodedMessage}`,
                  "_blank",
                );
              }}
            >
              Book Now
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded transition"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PackageDetails;
