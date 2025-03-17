import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const OurService = () => {
    // Control animation
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('our-services');
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
            id="our-services"
            initial={{ opacity: 0, y: 100 }}
            animate={controls}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
        >
            {/* Section Title */}
            <div className='flex flex-col items-center justify-center gap-6'>
                <div className='flex items-center gap-5'>
                    <div className="w-20 h-1 bg-[#000000] lg:mx-0"></div>
                    <div className='uppercase text-4xl  text-center text-gray-800'>
                        <h1 className='font-Bebas'>SERVICES</h1>
                    </div>
                    <div className="w-20 h-1 bg-[#000000] lg:mx-0"></div>
                </div>
            </div>
            
            {/* Main Title */}
            <div className='font-Bebas text-center text-5xl mt-8 md:text-[63px] text-gray-900'>
                <h1>OUR <span className='text-blue-600'>SERVICES</span></h1>
            </div>

            {/* Service Items Grid */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-12'>
                {/* Service Item 1 */}
                <motion.div
                    className='bg-[#2572D3] w-[177px] h-[177px] rounded-full flex flex-col items-center justify-center p-4 hover:bg-[#1b5ea8] transition duration-300'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <img className='w-16 h-16' src="https://i.ibb.co.com/chkycrQs/image-24.png" alt="Car Rental" />
                    <p className='text-white text-center mt-4 font-medium'>Car Rental Services Near You</p>
                </motion.div>

                {/* Service Item 2 */}
                <motion.div
                    className='bg-[#2572D3] w-[177px] h-[177px] rounded-full flex flex-col items-center justify-center p-4 hover:bg-[#1b5ea8] transition duration-300'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <img className='w-16 h-16' src="https://i.ibb.co.com/Z6kdRxkS/image.png" alt="Self Drive Car Rental" />
                    <p className='text-white text-center mt-4 font-medium'>Self Drive Car Rental</p>
                </motion.div>

                {/* Service Item 3 */}
                <motion.div
                    className='bg-[#2572D3] w-[177px] h-[177px] rounded-full flex flex-col items-center justify-center p-4 hover:bg-[#1b5ea8] transition duration-300'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <img className='w-16 h-16' src="https://i.ibb.co.com/jPw1zF1W/image-1.png" alt="Monthly Car Rental Plans" />
                    <p className='text-white text-center mt-4 font-medium'>Monthly Car Rental Plans</p>
                </motion.div>

                {/* Service Item 4 */}
                <motion.div
                    className='bg-[#2572D3] w-[177px] h-[177px] rounded-full flex flex-col items-center justify-center p-4 hover:bg-[#1b5ea8] transition duration-300'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <img className='w-16 h-16' src="https://i.ibb.co.com/chkycrQs/image-24.png" alt="Specialty Vehicles" />
                    <p className='text-white text-center mt-4 font-medium'>Specialty Vehicles</p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default OurService;
