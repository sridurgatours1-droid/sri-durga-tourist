import React from "react";
import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

const Location = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Our Location</h2>
          <p className="text-gray-600">Visit us at our office in Murudeshwar</p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            onClick={() =>
              window.open("https://maps.app.goo.gl/AWfT8RuK3RE5AkhbA", "_blank")
            }
            className="relative cursor-pointer group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Map Embed */}
            <div className="relative w-full h-96">
              <iframe
                title="Shree Durga Tourist Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.8765!2d74.48567!3d14.36389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x90d752029084d1f5!2sShree%20Durga%20Tourist%20Murdeshwar!5e0!3m2!1sen!2sin!4v1234567890"
                allowFullScreen={true}
              />
            </div>

            {/* Overlay with click indicator */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center pointer-events-none">
              <motion.div
                className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
              >
                <ExternalLink size={20} />
                <span>Open in Google Maps</span>
              </motion.div>
            </div>
          </div>

          {/* Address Info */}
          <motion.div
            className="mt-6 bg-gray-50 p-6 rounded-lg text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-start gap-3 justify-center">
              <MapPin className="text-blue-500 flex-shrink-0 mt-1" size={24} />
              <div className="text-left">
                <p className="font-semibold text-gray-800">
                  Murdeshwar Temple Highway
                </p>
                <p className="text-gray-700">Near KSRTC Bus Stand</p>
                <p className="text-gray-700">Murudeshwar, Karnataka - 581350</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
