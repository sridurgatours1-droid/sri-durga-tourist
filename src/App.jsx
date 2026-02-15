import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PopularPackages from "./components/PopularPackages";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <About />
      <div id="packages">
        <PopularPackages />
      </div>
      <WhyChooseUs />
      <div id="gallery">
        <Gallery />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </motion.div>
  );
}

export default App;
