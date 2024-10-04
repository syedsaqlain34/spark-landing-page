"use client"; // Add this line to mark the component as a Client Component

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <span className="ml-3 font-bold font-serif text-3xl sm:text-4xl lg:text-5xl">SPARK</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        {/* <div className={`hidden md:flex space-x-4 md:space-x-6 lg:space-x-12 pt-1`}>
          <a href="#products" className="hover:text-red-800 text-lg font-bold">Products</a>
          <a href="#learn" className="hover:text-red-800 font-bold text-lg">Learn</a>
          <a href="#safety" className="hover:text-red-800 font-bold text-lg">Safety</a>
          <a href="#support" className="hover:text-red-800 font-bold text-lg">Support</a>
          <a href="#download" className="hover:text-red-800 font-bold text-lg">Download</a>
        </div> */}

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4 md:space-x-6 lg:space-x-8 pt-1">
          {/* <a href="#language" className="text-white hover:text-gray-400 text-xl font-bold">Language</a> */}
          <button className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-100">
            Log in
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white">
          <div className="flex flex-col space-y-4 p-4">
            {/* <a href="#products" className="hover:text-red-800 text-lg font-bold">Products</a>
            <a href="#learn" className="hover:text-red-800 font-bold text-lg">Learn</a>
            <a href="#safety" className="hover:text-red-800 font-bold text-lg">Safety</a>
            <a href="#support" className="hover:text-red-800 font-bold text-lg">Support</a>
            <a href="#download" className="hover:text-red-800 font-bold text-lg">Download</a>
            <a href="#language" className="text-white hover:text-gray-400 text-xl font-bold">Language</a> */}
            <button className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-100">
              Log in
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
