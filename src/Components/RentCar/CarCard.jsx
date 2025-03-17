import React from 'react';
import { FaCar, FaGasPump } from 'react-icons/fa';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { TbAutomaticGearboxFilled } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './CarCard.css'; // Gradient animation CSS
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
    const {_id, logo, name, carImage, miles, charge } = car;

    // Intersection Observer hook to detect when the element comes into view
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation will run once
        threshold: 0.2,    // Trigger at 20% visibility
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100, scale: inView ? 1 : 0.95 }}
            transition={{ 
                duration: 1.2, 
                ease: [0.42, 0, 0.58, 1], // Valid cubic-bezier easing curve (ease-in-out)
                delay: 0.2                // Slight delay for anticipation
            }}
            className="max-w-3xl md:p-10 max-sm:p-5 font-Bebas mx-auto rounded-lg overflow-hidden shadow-lg bg-white hover:scale-105 hover:shadow-2xl transform transition-transform duration-300"
        >
            <div className="relative">
                <motion.img
                    src={carImage}
                    alt={`${name} image`}  // Improved alt text
                    className="w-full h-auto  object-cover rounded-t-lg"
                    initial={{ scale: 1.1 }}  // Slight zoom-in effect
                    animate={{ scale: inView ? 1 : 1.1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <motion.div
                    className="absolute top-4 left-4 bg-white py-1 px-3 rounded-full shadow-lg flex items-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                >
                    <img
                        src={logo}
                        alt={`${name} logo`} // Improved alt text
                        className="w-12 h-12 object-contain"
                    />
                    <h2 className="text-2xl font-semibold text-gray-800 ml-3">
                        {name}
                    </h2>
                </motion.div>
            </div>
            <motion.div
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            >
                <div className="space-y-4 flex items-center justify-between mt-5">
                    <div className="flex items-center gap-3 mt-4">
                        <FaCar className="text-gray-600 text-2xl " />
                        <p className="text-gray-600 text-lg">{miles} Miles</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaGasPump className="text-gray-600 text-2xl" />
                        <p className="text-gray-600 text-lg">{charge}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <TbAutomaticGearboxFilled className="text-gray-600 text-2xl" />
                        <p className="text-gray-600 text-lg">Automatic</p>
                    </div>
                </div>
                <div className="mt-4">
                    <motion.button
                        whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
                        className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center shadow-md"
                    >
                        <Link to={`/car/${_id}`} aria-label={`View details for ${name}`}> {/* Added accessibility */}
                            <span>Details</span>
                        </Link>
                        <HiOutlineChevronRight className="ml-2 text-xl" />
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default CarCard;
