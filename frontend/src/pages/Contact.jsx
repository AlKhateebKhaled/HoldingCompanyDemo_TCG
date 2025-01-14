import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 px-6 py-10">
      <motion.h1
        className="text-5xl font-extrabold text-gray-800 dark:text-gray-100"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Reach out to us for inquiries, partnerships, or support through the
        following channels:
      </motion.p>
      <motion.div
        className="mt-10 space-y-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Email */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-lg font-semibold text-gray-700 dark:text-gray-300"
        >
          Email:{" "}
          <a
            href="mailto:contact@holdingco.com"
            className="text-blue-500 hover:underline"
          >
            contact@holdingco.com
          </a>
        </motion.div>

        {/* Phone */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-lg font-semibold text-gray-700 dark:text-gray-300"
        >
          Phone:{" "}
          <a href="tel:+1234567890" className="text-blue-500 hover:underline">
            +1 234 567 890
          </a>
        </motion.div>

        {/* LinkedIn */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-lg font-semibold text-gray-700 dark:text-gray-300"
        >
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/company/holdingco"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            linkedin.com/company/holdingco
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
