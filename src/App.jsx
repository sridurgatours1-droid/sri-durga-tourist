import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import DestinationShowcase from "./components/DestinationShowcase";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Location from "./components/Location";
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
        <DestinationShowcase />
      </div>
      <WhyChooseUs />
      <div id="gallery">
        <Gallery />
      </div>
      <Reviews />
      <Location />
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </motion.div>
  );
}

export default App;
