import { FaCalendar } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* Main banner section */}
      <motion.div
        className="flex flex-col lg:flex-row items-center p-6 my-6 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Left section */}
        <div className="w-full lg:w-1/3 mx-12  text-center lg:text-left">
          <div className="w-28 h-1 bg-blue-600 lg:mx-0"></div> {/* Thin blue bar */}
          <div className="mt-6 text-start font-Bebas flex md:text-6xl text-4xl">
            <h1>
              WE PROVIDE <span className="text-blue-600 underline decoration-blue-600">LUXURY</span>
              <br className="max-sm:hidden" />
              <span className="text-blue-600"> CARS</span> FOR RENT
            </h1>
          </div>
          <div className="font-Poppins text-start text-sm md:text-lg mt-3">
            <p>
              Drive in Style with Our Car Rental Services! <br />
              Explore the World at Your Own Pace - Rent Now & Save
            </p>
          </div>
        </div>

        {/* Right section */}
        <motion.div
          className="w-full lg:w-10/12 mt-6 lg:mt-0"
          animate={{ y: [0, -20, 0] }} // Moves up and down
          transition={{
            duration: 2, // Duration of one cycle
            repeat: Infinity, // Repeat indefinitely
            repeatType: "reverse", // Reverse the animation
            ease: "easeInOut", // Smooth easing
          }}
        >
          <img
            src="https://i.ibb.co/KzWHHtRw/image-16.png"
            alt="Luxury Cars"
            className="w-[1000px] h-auto rounded-lg"
          />
        </motion.div>
      </motion.div>

      {/* Form section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8 bg-base-100 w-full mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Location Input */}
        <motion.div
          className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:scale-105 border border-blue-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="bg-blue-100 p-3 rounded-full">
            <ImLocation2 className="text-blue-600 text-3xl" />
          </div>
          <div className="flex flex-col w-full space-y-2">
            <h1 className="text-lg font-semibold text-gray-700">Location</h1>
            <input
              type="text"
              placeholder="Enter Your Location"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all w-full"
            />
          </div>
        </motion.div>

        {/* Pickup Date Input */}
        <motion.div
          className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:scale-105 border border-blue-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="bg-blue-100 p-3 rounded-full">
            <FaCalendar className="text-blue-600 text-3xl" />
          </div>
          <div className="flex flex-col w-full space-y-2">
            <h1 className="text-lg font-semibold text-gray-700">PickUp Date</h1>
            <input
              type="date"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all w-full"
            />
          </div>
        </motion.div>

        {/* Return Date Input */}
        <motion.div
          className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:scale-105 border border-blue-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="bg-blue-100 p-3 rounded-full">
            <FaCalendar className="text-blue-600 text-3xl" />
          </div>
          <div className="flex flex-col w-full space-y-2">
            <h1 className="text-lg font-semibold text-gray-700">Return Date</h1>
            <input
              type="date"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all w-full"
            />
          </div>
        </motion.div>

        {/* Search Button */}
        <motion.button
          className="bg-blue-500 hover:bg-blue-600 h-32 btn text-white rounded-xl shadow-lg hover:shadow-2xl text-3xl transition-all hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Search
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Banner;