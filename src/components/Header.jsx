import { useState } from "react";
import NavLinks from "./NavLinks";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu visibility

  const toggleMenu = () => setIsOpen(!isOpen); // Function to toggle menu

  return (
    <div className="bg-white text-center flex justify-between items-center p-4 md:px-8 2xl:p-8 2xl:px-24">
      <img
        src="Logo.svg"
        alt="logo"
        className="w-20 md:w-32 lg:w-40 2xl:w-56"
      />
      <div className="flex md:w-2/3 xl:w-1/2 justify-end items-center">
        {/* Navigation Links (Visible only on large and larger screens) */}
        <div className="hidden lg:flex w-full justify-between">
          <NavLinks />
        </div>

        {/* Lets Speak button */}
        <button className="bg-[#303036] flex justify-center items-center h-1/2 lg:w-1/4">
          <img src="green_ellipse.svg" alt="online" />
          <span className="pl-2 font-normal text-xs md:text-sm 2xl:text-2xl">
            Lets Speak
          </span>
        </button>

        {/* Hamburger Menu Button (Visible only on medium and smaller screens) */}
        <button
          className="lg:hidden bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 p-2"
          onClick={toggleMenu}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#303036"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Hamburger Menu Content (Visible when isOpen is true) */}
      {isOpen && (
        <div className="absolute top-0 right-0 bg-white w-full lg:hidden">
          <NavLinks isColumn={true} />
          <button
            className="absolute top-4 right-4 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 p-2"
            onClick={toggleMenu}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="#303036"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
