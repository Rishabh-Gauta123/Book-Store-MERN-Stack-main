import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-teal-600 shadow-lg border-b border-b-teal-700"
    style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white text-3xl font-bold">
          <Link to="/">MyBookApp</Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link
            to="/"
            className="text-white hover:text-teal-200 text-lg font-medium transition duration-300"
          >
            <FaHome className="inline mr-1" />
            Home
          </Link>
          <Link
            to="/"
            className="text-white hover:text-teal-200 text-lg font-medium transition duration-300"
          >
            <FaBook className="inline mr-1" />
            Books
          </Link>
          <Link
            to="/"
            className="text-white hover:text-teal-200 text-lg font-medium transition duration-300"
          >
            <FaUserCircle className="inline mr-1" />
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
