import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 px-6 py-10">
      <motion.h1
        className="text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Us
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Welcome to Holding Co., a leading corporation dedicated to innovation and growth across diverse industries. Our mission is to empower businesses, create sustainable solutions, and foster meaningful partnerships that drive progress and excellence.
      </motion.p>
      <motion.div
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            To be a global leader in fostering innovation and creating value for our stakeholders, ensuring sustainable growth and long-term success.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Empowering businesses and individuals by delivering top-quality services, fostering partnerships, and driving excellence in all we do.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
