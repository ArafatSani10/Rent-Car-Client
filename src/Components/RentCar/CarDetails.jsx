import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion';  // Import motion from framer-motion
import { FaCar, FaLocationArrow, FaBatteryFull, FaUserAlt } from 'react-icons/fa'; // Import icons

const CarDetails = () => {
    const { logo, name, carImage, miles, charge, location } = useLoaderData();

    const [showScrollBtn, setShowScrollBtn] = useState(false);

    // Handle scroll event to show the button
    const handleScroll = () => {
        if (window.scrollY > 500) {
            setShowScrollBtn(true);
        } else {
            setShowScrollBtn(false);
        }
    };

    // Smooth scroll to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Listen for scroll events
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen font-Bebas p-8">
            {/* Car Info Section */}
            <motion.div
                className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-2xl mt-10"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
            >
                {/* Two-column layout with animation */}
                <motion.div
                    className="flex flex-col lg:flex-row items-center lg:items-start"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Car Image Section */}
                    <motion.div
                        className="flex justify-center lg:w-1/2 mb-8 lg:mb-0"
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img className="w-full max-w-lg rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300" src={carImage} alt={name} />
                    </motion.div>

                    {/* Car Info Section */}
                    <motion.div
                        className="text-center lg:text-left lg:w-1/2 lg:pl-8"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-4xl font-semibold text-gray-800 mb-6">{name}</h1>

                        {/* Car Logo */}
                        <motion.div
                            className="flex justify-center lg:justify-start mb-6"
                            whileInView={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            <img src={logo} alt={`${name} logo`} className="w-28 h-28 object-contain rounded-full border-4 border-gray-300 p-2 shadow-lg transition-transform transform hover:scale-110" />
                        </motion.div>

                        {/* Car Specifications */}
                        <div className="space-y-4 text-gray-700 mb-8">
                            <motion.div
                                className="flex items-center justify-center lg:justify-start"
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                <FaCar className="text-indigo-500 text-xl mr-2" />
                                <p className="text-xl font-medium"><strong>Miles:</strong> {miles} miles</p>
                            </motion.div>
                            <motion.div
                                className="flex items-center justify-center lg:justify-start"
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                <FaBatteryFull className="text-green-500 text-xl mr-2" />
                                <p className="text-xl font-medium"><strong>Charge:</strong> {charge}%</p>
                            </motion.div>
                            <motion.div
                                className="flex items-center justify-center lg:justify-start"
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                <FaLocationArrow className="text-blue-500 text-xl mr-2" />
                                <p className="text-xl font-medium"><strong>Location:</strong> {location}</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Featured Features Section */}
            <motion.div
                className="mt-16 bg-white p-8 rounded-lg shadow-lg"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Featured Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <motion.div
                        className="flex flex-col items-center bg-indigo-50 p-6 rounded-lg shadow-md"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <FaCar className="text-indigo-600 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Comfortable Ride</h3>
                        <p className="text-gray-600 text-center">Experience smooth and luxurious rides with top-notch comfort.</p>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center bg-indigo-50 p-6 rounded-lg shadow-md"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <FaBatteryFull className="text-green-600 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Long-lasting Battery</h3>
                        <p className="text-gray-600 text-center">Enjoy long drives with a battery that keeps you going for miles.</p>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center bg-indigo-50 p-6 rounded-lg shadow-md"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <FaLocationArrow className="text-blue-600 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Wide Availability</h3>
                        <p className="text-gray-600 text-center">Find this car easily in locations across the city for your convenience.</p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Testimonial Section */}
            <motion.div
                className="mt-16 bg-white p-8 rounded-lg shadow-lg"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">What Our Customers Say</h2>
                <div className="flex justify-center">
                    <motion.div
                        className="max-w-lg text-center"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-lg text-gray-600 mb-4">“This car was perfect for my trip! Smooth driving, efficient battery, and the comfort was top-notch. Highly recommend!”</p>
                        <div className="flex justify-center items-center">
                            <FaUserAlt className="text-indigo-500 text-2xl mr-4" />
                            <div>
                                <p className="text-xl font-semibold text-gray-800">John Doe</p>
                                <p className="text-gray-500">Frequent Traveler</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Related Cars Section */}
            <motion.div
                className="mt-16 bg-white p-8 rounded-lg shadow-lg"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">You Might Also Like</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <motion.div
                        className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img className="w-full max-w-xs rounded-lg mb-4" src="https://i.ibb.co.com/4R5yWNg3/5bb9fc41-e0fb-428c-b1ae-727b5f28df2f.png" alt="Car 1" />
                        <p className="text-xl font-semibold text-gray-800">SQ6 e-tron</p>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img className="w-full max-w-xs rounded-lg mb-4" src="https://i.ibb.co.com/v6vzVb0J/image.png" alt="Car 2" />
                        <p className="text-xl font-semibold text-gray-800">Eclipse Cross</p>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img className="w-full max-w-xs rounded-lg mb-4" src="https://i.ibb.co.com/HLvMP1sr/image-1.png" alt="Car 3" />
                        <p className="text-xl font-semibold text-gray-800">M-cla180</p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll to top button */}
            {showScrollBtn && (
                <div className="fixed bottom-10 right-10">
                    <button
                        onClick={scrollToTop}
                        className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300"
                    >
                        ↑
                    </button>
                </div>
            )}
        </div>
    );
};

export default CarDetails;
