import React, { useState } from 'react';
import RentCar from '../../Components/RentCar/RentCar';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';  // Import for scroll-triggered animations

const Vehicles = () => {
  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of image URLs
  const images = [
    'https://i.ibb.co/4gV46rBD/maxresdefault.jpg',
    'https://i.ibb.co/SDkhjMfR/car-rental-cover-banner-web-poster-promotion-post-template-416835-218.jpg',
    'https://i.ibb.co.com/GfsTYtHf/31.jpg'
   ];

  // Next slide function
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  // Previous slide function
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  // Intersection Observer hooks for animation triggers
  const { ref: faqRef, inView: faqInView } = useInView({ triggerOnce: true });

  // FAQ state to handle accordion toggle
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div className="font-Bebas">
      {/* Slider Section */}
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          className="w-full md:h-[600px] object-cover rounded-lg"
          src={images[currentSlide]} 
          alt={`Slide ${currentSlide + 1}`}
        />

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 p-4 bg-white text-black rounded-full shadow-lg hover:bg-gray-300 transition duration-300"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 p-4 bg-white text-black rounded-full shadow-lg hover:bg-gray-300 transition duration-300"
        >
          &#10095;
        </button>
      </motion.div>

      {/* Featured Vehicles Section */}
      <motion.div
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Featured Vehicles</h2>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Featured Vehicle Cards */}
          {/* You can add your vehicle cards here */}
        </div>
      </motion.div>

      {/* RentCar Component */}
      <RentCar />

      {/* FAQ Section */}
      <motion.div
        ref={faqRef}
        className="py-16 max-sm:p-5 text-center bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: faqInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-screen-xl mx-auto">
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <motion.div
              className="border-b border-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: faqInView ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="text-xl font-semibold text-left py-4 cursor-pointer"
                onClick={() => toggleAccordion(0)}
              >
                1. What do I need to rent a car?
              </div>
              {activeIndex === 0 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 pb-4"
                >
                  To rent a car, you must be at least 21 years old and have a valid driver's license.
                </motion.div>
              )}
            </motion.div>

            {/* FAQ Item 2 */}
            <motion.div
              className="border-b border-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: faqInView ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="text-xl font-semibold text-left py-4 cursor-pointer"
                onClick={() => toggleAccordion(1)}
              >
                2. Can I cancel my reservation?
              </div>
              {activeIndex === 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 pb-4"
                >
                  Yes, you can cancel your reservation up to 24 hours before pickup for a full refund.
                </motion.div>
              )}
            </motion.div>

            {/* FAQ Item 3 */}
            <motion.div
              className="border-b border-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: faqInView ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="text-xl font-semibold text-left py-4 cursor-pointer"
                onClick={() => toggleAccordion(2)}
              >
                3. Are the vehicles insured?
              </div>
              {activeIndex === 2 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 pb-4"
                >
                  Yes, all our vehicles come with basic insurance, and you can upgrade for additional coverage.
                </motion.div>
              )}
            </motion.div>

            {/* FAQ Item 4 */}
            <motion.div
              className="border-b border-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: faqInView ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="text-xl font-semibold text-left py-4 cursor-pointer"
                onClick={() => toggleAccordion(3)}
              >
                4. How can I modify my reservation?
              </div>
              {activeIndex === 3 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 pb-4"
                >
                  You can modify your reservation by logging into your account and making changes before the scheduled pickup time.
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Customer Testimonials</h2>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Testimonial 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 italic">"Excellent service! The car was spotless, and the booking process was smooth and easy."</p>
            <p className="mt-4 font-semibold text-right">- John Doe</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 italic">"A great experience overall! The customer service team was super helpful."</p>
            <p className="mt-4 font-semibold text-right">- Jane Smith</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 italic">"Highly recommend RentCar for anyone looking to rent a vehicle hassle-free."</p>
            <p className="mt-4 font-semibold text-right">- Robert Brown</p>
          </div>
        </div>
      </motion.div>

      {/* Contact Us Section */}
     
    </div>
  );
};

export default Vehicles;
