import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import framer-motion
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle the menu open/close
    const closeMenu = () => setMenuOpen(false); // Close the menu

    return (
        <div className="sticky  font-Poppins top-0 z-50 mx-auto sm:w-full md:w-full lg:w-full bg-base-100 shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4">
                {/* Logo with animation */}
                <motion.div
                    className="logo"
                    initial={{ opacity: 0, y: -20 }} // Initial state for animation
                    animate={{ opacity: 1, y: 0 }}   // End state for animation
                    transition={{ duration: 1, delay: 0.2 }} // Add delay and duration for smooth effect
                >
                    <Link to='/'>
                        <a href="#home">
                            <img
                                className="w-[250px] max-sm:w-[150px]  md::w-[240px]"
                                src="https://i.ibb.co.com/bgjrnvfm/b5cf023abd09ddbe26dac95eebfedf04.png"
                                alt="Logo"
                            />
                        </a>
                    </Link>
                </motion.div>

                {/* Menu for larger screens (Laptop/Desktop) */}
                <ul className="hidden font-Poppins lg:flex gap-12 text-xl lg:text-2xl">
                    <Link to='/'>
                        <motion.li
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="font-bold opacity-95 hover:opacity-100 cursor-pointer"
                        >
                            Home
                        </motion.li>
                    </Link>
                    <Link to='/vehicles'>
                        <motion.li
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="opacity-95 hover:opacity-100 cursor-pointer"
                        >
                            Vehicles
                        </motion.li>
                    </Link>
                    <Link to='/about'>
                        <motion.li
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="opacity-95 hover:opacity-100 cursor-pointer"
                        >
                            About Us
                        </motion.li>
                    </Link>
                    <Link to='/contactus'>
                        <motion.li
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="opacity-75 hover:opacity-100 cursor-pointer"
                        >
                            Contact Us
                        </motion.li>
                    </Link>
                </ul>

                {/* "Order Now" Button for Desktop */}
                <motion.button
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="hidden lg:flex items-center bg-[#2572D3] text-xl border-2 p-2 gap-1 text-white font-bold h-[50px] hover:bg-gradient-to-r from-red-600 to-orange-500"
                >
                    Login Now
                </motion.button>

                {/* Hamburger Menu Icon for Mobile */}
                <div className="lg:hidden flex items-center gap-3">
                    {/* Hamburger Icon or Close Icon */}
                    <span className="text-3xl text-black cursor-pointer" onClick={toggleMenu}>
                        {menuOpen ? <IoMdClose /> : <FaBars />} {/* Toggle between Hamburger and Close Icon */}
                    </span>
                </div>
            </div>

            {/* Mobile Menu */}

            <div
                className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} absolute top-0 left-0 w-full bg-cover bg-center bg-opacity-65 bg-blur shadow-xl p-5 z-50`}
                style={{ backgroundImage: "url('https://i.ibb.co.com/s9VYnbZ4/360-F-584813294-c-MWq5-FAJDHKFCyj-Iw-B3-SYFPTumvu-UARK.jpg')" }} // Add your background image URL here
            >
                <div className="flex justify-between">
                    {/* Close icon inside mobile menu */}
                    <IoMdClose className="text-3xl cursor-pointer text-white" onClick={closeMenu} />
                </div>

                {/* Animated Mobile Menu Items (With Existing Slide-In Animation) */}
                <ul className="flex text-xl flex-col gap-6 mt-5">
                    <Link to='/'> <li className={`menu-item ${menuOpen ? 'animate-slide' : ''} transition-all duration-1000 ease-out text-white`}>Home</li></Link>
                  <Link to='/vehicles'>  <li className={`menu-item ${menuOpen ? 'animate-slide' : ''} transition-all duration-1000 ease-out delay-200 text-white`}>Vehicles</li></Link>
                    <Link to='/about'><li className={`menu-item ${menuOpen ? 'animate-slide' : ''} transition-all duration-1000 ease-out delay-400 text-white`}>About Us</li></Link>
                    <Link to='/contactus'>      <li className={`menu-item ${menuOpen ? 'animate-slide' : ''} transition-all duration-1000 ease-out delay-600 text-white`}>Contact Us</li></Link>

                    {/* "Booking Now" Button for Mobile */}
                    <li className={`menu-item ${menuOpen ? 'animate-slide' : ''} transition-all duration-1000 ease-out delay-800`}>
                        <button className="flex items-center bg-gradient-to-r from-red-500 to-orange-400 text-sm sm:text-sm border-2 p-2 sm:p-2 gap-1 text-white font-bold h-[50px] w-full">
                            Login Now
                        </button>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;
