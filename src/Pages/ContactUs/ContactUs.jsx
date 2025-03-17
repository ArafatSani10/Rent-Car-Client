import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserAlt, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation
  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.email.includes('@')) errors.email = "Email is invalid";
    if (!formData.phone) errors.phone = "Phone number is required";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
      setFormErrors({});
    } else {
      setFormErrors(errors);
      setSubmitted(false);
    }
  };

  return (
    <div className="bg-gradient-to-r font-Bebas from-purple-400 to-blue-500 min-h-screen p-8">
      {/* Banner Section */}
      <motion.div
        className="h-[400px] font-Bebas bg-cover bg-center relative overflow-hidden rounded-xl shadow-xl"
        style={{ backgroundImage: 'url(https://i.ibb.co.com/PGsRtc69/image-2.png)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-white text-5xl font-extrabold tracking-wider transform hover:scale-110 transition-all duration-500">Contact Us</h1>
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 font-Bebas"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Form Card */}
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl text-gray-800 text-center mb-8">Get in Touch</h2>
          {submitted && <p className="text-center text-green-600 mb-4">Thank you! We will get back to you soon.</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative flex flex-col">
              <label htmlFor="name" className="text-lg font-medium text-gray-700 absolute top-0 left-4 transform -translate-y-7">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-all duration-300"
                placeholder=" "
              />
              {formErrors.name && <p className="text-red-500 text-sm mt-2">{formErrors.name}</p>}
            </div>

            <div className="relative flex flex-col">
              <label htmlFor="email" className="text-lg font-medium text-gray-700 absolute top-0 left-4 transform -translate-y-7">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-all duration-300"
                placeholder=" "
              />
              {formErrors.email && <p className="text-red-500 text-sm mt-2">{formErrors.email}</p>}
            </div>

            <div className="relative flex flex-col">
              <label htmlFor="phone" className="text-lg font-medium text-gray-700 absolute top-0 left-4 transform -translate-y-7">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-all duration-300"
                placeholder=" "
              />
              {formErrors.phone && <p className="text-red-500 text-sm mt-2">{formErrors.phone}</p>}
            </div>

            <div className="relative flex flex-col">
              <label htmlFor="message" className="text-lg font-medium text-gray-700 absolute top-0 left-4 transform -translate-y-7">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-all duration-300"
                rows="5"
                placeholder=" "
              />
              {formErrors.message && <p className="text-red-500 text-sm mt-2">{formErrors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 rounded-lg hover:bg-gradient-to-r hover:from-indigo-700 hover:to-blue-700 transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Info Card */}
        <div className="bg-white font-Bebas p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl text-gray-800 text-center mb-8">Bangladesh</h2>
          <div className="flex justify-center items-center space-x-6">
            <FaMapMarkerAlt className="text-indigo-600 text-4xl" />
            <div>
              <p className="text-xl text-gray-800">1234 Car Avenue, Dhaka</p>
              <p className="text-gray-600">Open Monday to Friday, 9 AM to 6 PM</p>
            </div>
          </div>

          {/* Additional Info (New Content) */}
          <div className="mt-12">
            <h3 className="text-2xl text-gray-800 text-center mb-4">Visit Our Location</h3>
            <div className="flex justify-center items-center space-x-4">
              <div className="w-full h-[300px] bg-gray-300 rounded-lg shadow-md mb-6">
                {/* Add your map or iframe here */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.906137996139!2d90.3502651152991!3d23.81031939452169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c73b3a8e9379%3A0x1a8c274d8b8e1451!2sDhaka%20Medical%20College!5e0!3m2!1sen!2sbd!4v1612450875163!5m2!1sen!2sbd"
                  width="100%" height="100%" style={{border: 0}} allowFullScreen="" loading="lazy"></iframe>
              </div>
            </div>
          </div>

        </div>
      </motion.div>

      {/* Customer Reviews Section */}
      <motion.div
        className="mt-16 font-Bebas bg-white p-8 rounded-lg shadow-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl text-gray-800 text-center mb-8">What Our Customers Say</h2>
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">“The best service! I found the perfect car for my needs. Will definitely come back!”</p>
          <div className="flex justify-center items-center">
            <FaUserAlt className="text-indigo-500 text-2xl mr-4" />
            <div>
              <p className="text-xl text-gray-800">Jane Smith</p>
              <p className="text-gray-500">Happy Customer</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
