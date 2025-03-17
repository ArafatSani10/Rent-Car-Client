import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = ({ children, id, animationClass }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${inView ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </motion.section>
  );
};

const AboutUs = () => {
  return (
    <div className="min-h-screen font-Bebas bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <Section id="hero">
          <div className="text-center">
            <motion.h1
              className="text-6xl font-normal mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              About Us
            </motion.h1>
            <motion.p
              className="text-2xl text-gray-300 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Revolutionizing the automotive experience with cutting-edge technology and design.
            </motion.p>
          </div>
        </Section>

        {/* Who We Are Section */}
        <Section id="who-we-are">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="About Us"
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <h2 className="text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Who We Are
              </h2>
              <p className="text-gray-300 mb-6">
                We are a passionate team of automotive enthusiasts, striving to innovate and revolutionize the automotive world.
              </p>
              <p className="text-gray-300 mb-6">
                From innovative designs to groundbreaking technologies, we focus on delivering exceptional products.
              </p>
              <motion.button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </Section>

        {/* Our Values Section */}
        <Section id="our-values">
          <div className="mt-20 text-center">
            <h2 className="text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">
              Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Innovation',
                  description: "We constantly push the boundaries of what's possible in the automotive industry.",
                },
                {
                  title: 'Quality',
                  description: 'Every vehicle we offer is crafted with precision and care.',
                },
                {
                  title: 'Sustainability',
                  description: 'We are committed to a greener future with eco-friendly solutions.',
                },
                {
                  title: 'Customer Focus',
                  description: 'Your satisfaction is our top priority. We listen, we care, we deliver.',
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 * index, duration: 1 }}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-4 text-indigo-500">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Our Team Section */}
        <Section id="our-team">
          <div className="mt-20 text-center">
            <h2 className="text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
              Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'John Doe',
                  role: 'CEO',
                  image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                },
                {
                  name: 'Jane Smith',
                  role: 'Lead Designer',
                  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                },
                {
                  name: 'Mike Johnson',
                  role: 'Engineer',
                  image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.2, duration: 1 }}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 mx-auto rounded-full mb-4 transform hover:scale-110 transition-transform duration-500"
                  />
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-300">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Testimonials Section */}
        <Section id="testimonials">
          <div className="mt-20 text-center">
            <h2 className="text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-500">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  quote: 'Amazing service and top-quality vehicles! Highly recommended.',
                  author: 'Alice Brown',
                },
                {
                  quote: 'The best car-buying experience I\'ve ever had. Thank you!',
                  author: 'Bob Green',
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.2, duration: 1 }}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <p className="text-gray-300 italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-gray-400 font-bold">- {testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default AboutUs;
