// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/">BookShop</Link>
        </div>
        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/books/create" className="hover:text-gray-300">
            Books
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            Show
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
