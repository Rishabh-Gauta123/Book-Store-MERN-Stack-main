import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Company Info */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg font-semibold">MyBookApp</p>
          <p className="text-sm">© 2025 MyBookApp. All Rights Reserved.</p>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-x-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-300 transition duration-300"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-300 transition duration-300"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-300 transition duration-300"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-300 transition duration-300"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
