"use client";

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-800  text-black"> {/* Gradient background matching the logo */}
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center fill-inherit  ">
          <img
            src="/assets/images/sparklogo1.jpg"
            alt="Sparks Logo"
            className="h-20  w-15 object-contain  " // Consistent height, width adjusts automatically 
          />
          <span className=" text-white text-2xl sm:text-4xl px-2 font-serif lg:text-4xl tracking-widest">
            S P A R K S
          </span>
        </div>

        {/* Mobile Menu Button */}
        {/* <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
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
        </div> */}

        {/* Right Section */}
        {/* <div className="hidden md:flex items-center space-x-4 md:space-x-6 lg:space-x-8 pt-1"> */}
          {/* Your buttons or links here */}
        </div>
      {/* </div> */}

      {/* Mobile Menu */}
      {/* {isOpen && ( */}
        {/* <div className="md:hidden bg-gradient-to-r from-[#aaf0d1] to-[#79cae8] text-black"> */}
          {/* <div className="flex flex-col space-y-4 p-4"> */}
            {/* Your mobile menu links here */}
          {/* </div> */}
        {/* </div> */}
      {/* )} */}
    </nav>
  );
};

export default Navbar;
