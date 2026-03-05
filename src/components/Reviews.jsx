import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "DHEERAJ KUMAR K",
    title: "Local Guide • 22 reviews • 35 photos",
    rating: 5,
    timeAgo: "a month ago",
    text: "Had a very great experience, hassle free Cab services With Ravi from Shree durga tourist.Very reasonable price with best on time service. Also suggested us all the nearby must visit places, we had him as our local guide. Totally worth it and very good experience.",
  },
  {
    id: 2,
    name: "Bala Kumar S",
    title: "Local Guide • 85 reviews • 111 photos",
    rating: 5,
    timeAgo: "2 months ago",
    text: "I would like to take a moment to thank Mr. Ravi for the well-organised one-day trip at a very reasonable price. Throughout the journey, he was polite, calm, and professional. I was truly impressed by his driving skills. Highly recommended for a comfortable and safe family trip.",
  },
  {
    id: 3,
    name: "Sunil Naik",
    title: "3 reviews • 22 photos",
    rating: 5,
    timeAgo: "a month ago",
    text: "Very comfortable drive.. vehicle also comfort. Patience driver and also know about route. Highly recommend for family favourite trip. Thank you shree Durga tourist and driver Ravi, for making our trip memorable. I would like to recommend this service in murdeshwar, best for coastal trips and temple visits. ❤️",
  },
  {
    id: 4,
    name: "Annie subba",
    title: "2 reviews",
    rating: 5,
    timeAgo: "2 months ago",
    text: "Nice driver. Has good communication skill knows local very well thank you for the safe and joyful trip",
  },
  {
    id: 5,
    name: "chandahabolina muthaiah",
    title: "3 reviews • 15 photos",
    rating: 5,
    timeAgo: "a month ago",
    text: "Feeling very comfortable with driver Ravi.....in all aspects like driving, obedience, guiding.....Thank you for making my trip memorable",
  },
];

const Reviews = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Guest Reviews</h2>
          <p className="text-gray-600">
            See what our customers have to say about their experience with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{review.name}</h3>
                  <p className="text-xs text-gray-500">{review.title}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500">{review.timeAgo}</span>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {review.text}
              </p>

              {/* Footer divider */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="inline-block text-xs text-gray-400">
                  Google Review
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-600 mb-4">
            Experience the same level of service and hospitality
          </p>
          <button
            onClick={() => {
              const message =
                "Hi, I'd like to book a tour package with Shree Durga Tourist. Can you help me?";
              const encodedMessage = encodeURIComponent(message);
              window.open(
                `https://wa.me/918749070550?text=${encodedMessage}`,
                "_blank",
              );
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Book Your Tour Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
