import React, { useState, useEffect } from "react";
import { FaBuilding, FaHandshake, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {


  return (
    <section className="bg-blue-600 dark:bg-gray-800 text-white py-10 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to Holding Co.
          </motion.h1>
          <motion.p
            className="mt-4 text-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Your trusted partner for innovation, growth, and global success.
          </motion.p>
          <div className="mt-6">
            <motion.button
              className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition"
              onClick={() =>
                alert(
                  "Thank you for your interest! Profile download feature is coming soon."
                )
              }
              whileHover={{ scale: 1.1 }}
            >
              Company Profile
            </motion.button>
          </div>
        </div>
        {/* الأيقونات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {[
            {
              icon: FaBuilding,
              title: "Innovation",
              description:
                "We build innovative solutions to empower businesses globally.",
            },
            {
              icon: FaHandshake,
              title: "Partnership",
              description:
                "Trusted by partners worldwide to achieve success together.",
            },
            {
              icon: FaGlobe,
              title: "Global Reach",
              description:
                "Expanding our presence across industries and countries.",
            },
          ].map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Icon className="text-6xl mb-4" />
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="text-sm mt-2">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
