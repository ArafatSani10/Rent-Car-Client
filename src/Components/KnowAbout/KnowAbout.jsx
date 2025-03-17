import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const KnowAbout = () => {
    // Animation controls using useAnimation hook
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('know-about');
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                controls.start({ opacity: 1, y: 0 });
            } else {
                controls.start({ opacity: 0, y: 100 });
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger once on load

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);

    return (
        <motion.div
            id="know-about"
            initial={{ opacity: 0, y: 100 }} // Initial state when out of view
            animate={controls}
            transition={{ duration: 1, ease: 'easeInOut' }} // Smooth transition
            className="mt-12  max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
        >
            {/* Section Title */}
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex items-center gap-5">
                    <div className="w-28 h-1 bg-[#000000] lg:mx-0"></div>
                    <div className="uppercase text-4xl font-Bebas text-center">
                        <h1>ABOUT US</h1>
                    </div>
                    <div className="w-28 h-1 bg-[#000000] lg:mx-0"></div>
                </div>
            </div>

            {/* Main Title */}
            <div className="font-Bebas text-center text-5xl mt-3 md:text-[63px]">
                <h1>KNOW MORE <span className="text-blue-600">ABOUT US</span></h1>
            </div>

            {/* Content Section */}
            <div className="flex flex-col-reverse lg:flex-row items-center mt-12 gap-8">
                {/* Image on the left (mobile-first flex) */}
                <motion.div
                    className="w-full lg:w-1/2"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }} // Delay for smooth transition
                >
                    <img
                        src="https://i.ibb.co.com/LDbqN82t/pngegg-4-1.png"
                        alt="About Image"
                        className="w-full"
                    />
                </motion.div>

                {/* Text content on the right (mobile-first flex) */}
                <motion.div
                    className="w-full lg:w-[568px]"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }} // Delay for smooth transition
                >
                    <h1 className="text-[24px] text-center font-semibold">
                        Welcome to <span className="text-blue-500">QEEQ.COM</span>
                    </h1>
                    <p className="text-xl text-start mt-6">
                        <span className="text-blue-600">QEEQ.COM</span> is a leading name in the car rental industry, committed to providing exceptional service and a diverse fleet of vehicles for all your travel needs in Jaipur. Our journey began with a vision to redefine car rentals by focusing on quality, reliability, and customer satisfaction. At <span className="text-blue-600">QEEQ.COM</span>, we strive to make your journey comfortable, convenient, and memorable in the vibrant city of Jaipur. We understand the diverse needs of our customers in Jaipur and work tirelessly to offer solutions that best suit them. Whether it's a family vacation, a business trip, or a special event in Jaipur, we have the perfect ride for every occasion.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default KnowAbout;
