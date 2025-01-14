import React, { useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  // Theme Persistence Logic
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <footer className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-300 py-10 px-5 border-t border-gray-300 dark:border-gray-700">
      {/* Company Overview Section */}
      <div className="w-full px-10 flex  gap-8 justify-around">
        {/* Site Map */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
            Site Map
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="/home" className="hover:text-blue-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-blue-500 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/investments"
                className="hover:text-blue-500 transition-colors"
              >
                Investments
              </a>
            </li>
            <li>
              <a
                href="/subsidiaries"
                className="hover:text-blue-500 transition-colors"
              >
                Subsidiaries
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
            Contact Us
          </h2>
          <ul className="space-y-2">
            <li>
              Email:
              <a
                href="mailto:support@company.com"
                className="hover:text-pink-500 transition-colors"
              >
                support@company.com
              </a>
            </li>
            <li>
              Phone:
              <a
                href="tel:+1234567890"
                className="hover:text-pink-500 transition-colors"
              >
                +1 234 567 890
              </a>
            </li>
            <li>Address: 123 Innovation Street, Tech City</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
            Follow Us
          </h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:support@company.com"
              className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center border-t border-gray-300 dark:border-gray-700 pt-6">
        <p className="text-sm text-gray-700 dark:text-gray-400">
          © {new Date().getFullYear()} Holding Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
