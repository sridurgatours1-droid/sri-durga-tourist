import gal9 from "../assets/bg.png";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative h-screen bg-center bg-cover"
      style={{
        backgroundImage: `url(${gal9})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Shree Durga Tourist
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Car Rentals & Tour Packages for Coastal and Temple Destinations
        </motion.p>

        <motion.div
          className="mt-6 flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={() => scrollToSection("packages")}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded transition-colors"
          >
            View Packages
          </button>
          <button
            onClick={() => {
              const message =
                "Hi, I'm interested in exploring your tour packages. Can you provide more details?";
              const encodedMessage = encodeURIComponent(message);
              window.open(
                `https://wa.me/918749070550?text=${encodedMessage}`,
                "_blank",
              );
            }}
            className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded transition-colors flex items-center gap-2"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
