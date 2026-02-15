import React, { useState } from "react";
import { motion } from "framer-motion";
import PackageDetails from "./PackageDetails";
import m1 from "../assets/packs/m1.jpg";
import m2 from "../assets/packs/m2.jpg";
import m3 from "../assets/packs/m3.jpeg";
import m4 from "../assets/packs/m4.jpg";

const packages = [
  {
    id: 1,
    name: "Murudeshwara Temple & Beach Tour",
    description:
      "Explore the iconic Murudeshwara temple and relax at the beach.",
    duration: "1 Day",
    price: "2,500",
    groupSize: "4-25 people",
    difficulty: "Easy",
    image: m1,
    overview:
      "Experience the grandeur of the Murudeshwara temple, one of the tallest temple towers in India, followed by a serene beach relaxation. This one-day tour is perfect for both spiritual seekers and beach lovers. Visit the ancient 9-story gopuram, explore the temple premises, and enjoy the pristine Arabian Sea beaches.",
    itinerary: [
      "8:00 AM - Pickup from your hotel. Arrive at Murudeshwara by 10:00 AM. Visit the stunning Murudeshwara Temple and explore the 9-story gopuram offering panoramic views. Enjoy temple breakfast (Prasadam). Spend time photographing the temple architecture and sea view.",
      "1:00 PM - Lunch at a beachside restaurant with local cuisines. Afternoon - Relax at Murudeshwara Beach, swim, or take photos on the sandy shores. Visit nearby attractions like the temple complex and shops.",
      "5:00 PM - Return journey begins. Drop-off at your hotel by 7:00 PM.",
    ],
    highlights: [
      "Visit the iconic 9-story Murudeshwara temple tower",
      "Enjoy panoramic Arabian Sea views",
      "Relax on pristine sandy beaches",
      "Experience authentic South Indian temple culture",
      "Photography opportunities of the sunset",
      "Local vegetarian and non-vegetarian food options",
    ],
    inclusions: [
      "Comfortable AC vehicle transportation",
      "Professional guide throughout the day",
      "Temple entrance fees",
      "Beach access",
      "One vegetarian meal (lunch)",
      "Bottled water and snacks",
    ],
    exclusions: [
      "Beverages and alcohol",
      "Personal expenses and shopping",
      "Optional activities",
      "Travel insurance",
      "Tips and gratuities",
    ],
    bestTime:
      "October to March is the best time to visit. The weather is pleasant with temperatures ranging from 20-28°C. Avoid monsoon season (June-September) due to heavy rainfall.",
  },
  {
    id: 2,
    name: "Murudeshwara – Gokarna – Honnavar Package",
    description: "A spiritual and scenic journey through coastal Karnataka.",
    duration: "2 Days",
    price: "5,800",
    groupSize: "4-30 people",
    difficulty: "Moderate",
    image: m2,
    overview:
      "Embark on a mesmerizing 2-day coastal journey through Karnataka's most spiritual and picturesque destinations. This package combines temple visits, beach exploration, and local culture experiences. Visit Murudeshwara's iconic temple, explore Gokarna's famous beaches and temples, and discover the hidden gem of Honnavar.",
    itinerary: [
      "Day 1: 8:00 AM - Pickup from your hotel. Arrive at Murudeshwara by 10:00 AM. Visit Murudeshwara Temple, explore the 9-story gopuram. Lunch at a local restaurant. Afternoon drive to Gokarna (2 hours). Check-in at hotel. Visit Mahabaleshwara Temple in Gokarna. Dinner and overnight stay at Gokarna.",
      "Day 2: Early morning sunrise visit to Om Beach (Gokarna's most famous beach). Breakfast at a beachside cafe. Visit Half Moon Beach and Paradise Beach by trekking. Lunch at Gokarna. Afternoon drive to Honnavar to see the scenic coastal landscapes and fishing villages. Evening return journey to your hotel by 7:00 PM.",
    ],
    highlights: [
      "Twin temple visits - Murudeshwara and Mahabaleshwara",
      "Experience 3 famous beaches - Om Beach, Half Moon Beach, Paradise Beach",
      "Trek through scenic coastal trails",
      "Watch sunrise over the Arabian Sea",
      "Explore fishing villages and local lifestyle",
      "Visit the scenic Honnavar coastline",
      "Experience authentic coastal Karnataka culture",
    ],
    inclusions: [
      "2 nights accommodation in 3-star hotels",
      "Comfortable AC vehicle transportation",
      "Professional guide for both days",
      "All temple entrance fees",
      "Breakfast and lunch (vegetarian/non-vegetarian options)",
      "Complimentary water and snacks",
      "Travel assistance and local recommendations",
    ],
    exclusions: [
      "Beverages and alcoholic drinks",
      "Dinner on Day 1 and Day 2",
      "Personal shopping and expenses",
      "Adventure activities (parasailing, water sports)",
      "Travel insurance",
      "Tips and gratuities",
    ],
    bestTime:
      "October to March is ideal with pleasant weather. During monsoon (June-September), some beaches may be restricted. Summer (April-May) can be hot.",
  },
  {
    id: 3,
    name: "Coastal Karnataka Temple Tour",
    description: "Visit famous temples along the serene Karnataka coast.",
    duration: "3 Days",
    price: "8,900",
    groupSize: "4-35 people",
    difficulty: "Moderate",
    image: m3,
    overview:
      "A comprehensive 3-day spiritual journey visiting the most revered temples along Karnataka's coast. This tour includes Murudeshwara, Gokarna, Udupi, and Sringeri temples, each with unique architectural and spiritual significance. Perfect for pilgrims, culture enthusiasts, and history buffs.",
    itinerary: [
      "Day 1: 8:00 AM - Hotel pickup. Drive to Murudeshwara (5 hours). Check-in at hotel. Visit Murudeshwara Temple with 9-story gopuram. Evening visit to the beach. Dinner and overnight stay at Murudeshwara.",
      "Day 2: Early morning drive to Gokarna (2 hours). Visit Mahabaleshwara Temple, one of the oldest temples in South India. Trek to Om Beach and Half Moon Beach. Lunch at Gokarna. Afternoon drive to Udupi (3 hours). Visit the famous Krishna Temple (Udupi Sri Krishna Matha). Evening Pooja (prayer ceremony) at Krishna Temple. Dinner and overnight stay at Udupi.",
      "Day 3: Morning visit to nearby Ananta Padmanabha Temple in Udupi. Visit the beach and local markets. Lunch. Afternoon return journey to your hotel by 7:00 PM. Arrive by evening.",
    ],
    highlights: [
      "Visit 4 major temples - Murudeshwara, Mahabaleshwara, Krishna Temple (Udupi), Ananta Padmanabha",
      "Experience evening temple prayers (Arati and Pooja)",
      "Visit famous beaches - Om Beach, Half Moon Beach, Udupi Beach",
      "Learn about ancient temple architecture and history",
      "Interact with local pilgrims and priests",
      "Taste authentic South Indian temple food",
      "Photography opportunities of ancient temples",
    ],
    inclusions: [
      "3 nights accommodation in comfortable 3-star hotels",
      "AC vehicle transportation throughout",
      "Experienced cultural guide",
      "All temple entrance fees",
      "Breakfast and lunch (vegetarian/non-vegetarian)",
      "Evening snacks and chai",
      "Complimentary water and beverages",
    ],
    exclusions: [
      "Dinner meals",
      "Alcoholic beverages",
      "Personal shopping and souvenirs",
      "Optional activities and adventure sports",
      "Travel insurance",
      "Tips to guide and driver",
      "Puja offerings (donations)",
    ],
    bestTime:
      "October to March is the best season. Avoid monsoon months (June-September). Most temples are especially visited during Hindu festivals like Janmashtami and Diwali.",
  },
  {
    id: 4,
    name: "Weekend Murudeshwara Getaway",
    description: "A perfect weekend escape to Murudeshwara.",
    duration: "2 Days",
    price: "4,500",
    groupSize: "2-20 people",
    difficulty: "Easy",
    image: m4,
    overview:
      "Perfect for busy professionals and families seeking a quick escape from city life. This 2-day weekend package combines spiritual experiences at the Murudeshwara Temple with relaxation at the beautiful beaches. Ideal for rejuvenation and creating memorable moments with loved ones.",
    itinerary: [
      "Day 1 (Friday Evening / Saturday): 6:00 PM - Pickup from your home or office. Evening drive to Murudeshwara (5-6 hours). Late dinner at hotel. Overnight stay. Night beach walk at Murudeshwara Beach (optional).",
      "Day 2 (Sunday): 7:00 AM - Breakfast at hotel. Visit Murudeshwara Temple and explore the 9-story gopuram. Climb to the top for panoramic sea views. 12:30 PM - Lunch at a beachside restaurant. Afternoon - Beach activities like swimming, photo shoots, or relaxation. 5:00 PM - Start return journey. Arrive at home by 10:00 PM.",
    ],
    highlights: [
      "Quick weekend spiritual getaway",
      "Climb the iconic 9-story temple tower",
      "Panoramic coastal views",
      "Beach activities and swimming",
      "Sunset viewing on the beach",
      "Local authentic cuisine tasting",
      "Perfect for families and couples",
    ],
    inclusions: [
      "1 night 3-star hotel accommodation",
      "AC vehicle pickup and drop-off service",
      "Temple visit and entrance fees",
      "Breakfast and lunch",
      "Complimentary water and snacks",
      "Basic tour information",
    ],
    exclusions: [
      "Dinner meals (both days)",
      "Beverages other than water",
      "Personal expenses and shopping",
      "Water sports and special activities",
      "Travel insurance",
      "Guide services (self-guided)",
      "Tips and gratuities",
    ],
    bestTime:
      "Year-round destination, but October to February offers the most comfortable weather. Avoid holidays for better availability and prices. Weekend rates apply Friday evening to Sunday evening.",
  },
];

const PopularPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <>
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Popular Packages
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                className="bg-white rounded shadow hover:shadow-lg overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-2">{pkg.description}</p>
                  <p className="text-sm text-gray-500 mb-2">
                    Duration: {pkg.duration}
                  </p>
                  <p className="text-lg font-bold text-green-600 mb-4">
                    ₹{pkg.price}
                  </p>
                  <button
                    onClick={() => setSelectedPackage(pkg)}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition font-semibold"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Details Modal */}
      {selectedPackage && (
        <PackageDetails
          pkg={selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </>
  );
};

export default PopularPackages;
