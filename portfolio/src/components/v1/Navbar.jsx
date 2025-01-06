import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaHome, FaUserAlt, FaPhoneAlt } from "react-icons/fa"; // Importing React Icons
import UrlsDropdown from "./UrlsDropdown";
const DefaultNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility when clicking the hamburger icon
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu state
  };

  return (
    <nav className="relative">
      <ul className="nav-bar flex items-center space-x-6 bg-gray-800 text-white">
        {/* Logo */}
        <li className="logo">
          <Link href="/" className="flex text-2xl font-semibold">
            <p>Rishabh</p>
            <span>Dubey</span>
          </Link>
        </li>

        {/* Menu Button for Small Screens */}
        <li className="block md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <FaTimes className="text-darkDark text-2xl" /> // Display close icon
            ) : (
              <FaBars className="text-darkDark text-3xl" /> // Display hamburger icon
            )}
          </button>
        </li>
      </ul>

      {/* Slider Menu for Small Screens */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute left-0 top-full mx-3 px-1 pb-3 rounded-[10px] bg-lightDark opacity-95  text-white shadow-2xl z-50 md:hidden`} // rgba(51, 51, 51, 0.8) for translucent background
        style={{
          width: "calc(100% - 1.5rem)", // This ensures it respects the margin (m-2.5) on the left and right
        }}
      >
        <ul>
          <li>
            <Link
              href="/"
              className="block text-md font-poppins font-bold text-primaryColor px-6 py-4 hover:bg-gray-700 transition duration-300"
            >
              <FaHome className="inline-block mr-2" /> {/* Home icon */}
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block text-md font-poppins font-bold text-primaryColor px-6 py-4 hover:bg-gray-700 transition duration-300"
            >
              <FaPhoneAlt className="inline-block mr-2" /> {/* Contact icon */}
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Links for Larger Screens */}
      <div className="hidden ">
        <li>
          <Link
            href="/"
            className="text-lg hover:text-gray-400 transition duration-300"
          >
            <FaHome className="inline-block mr-2" /> {/* Home icon */}
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="text-lg hover:text-gray-400 transition duration-300"
          >
            <FaUserAlt className="inline-block mr-2" /> {/* About icon */}
            Project
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-lg hover:text-gray-400 transition duration-300"
          >
            <FaPhoneAlt className="inline-block mr-2" /> {/* Contact icon */}
            Contact
          </Link>
        </li>
      </div>
    </nav>
  );
};

const ProjectsNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="relative">
      <ul className="h-[10vh] flex justify-between items-center bg-darkDark px-4 py-3 rounded-md space-x-6 border-b border-gray-600">
        {/* Logo */}
        <li className="logo">
          <Link href="/" className="flex text-2xl font-semibold">
            <p className="text-primaryColor">Rishabh</p>
            <span className="text-primaryColor">&nbsp;Dubey</span>
          </Link>
        </li>

        {/* Right Section - CTA and Dropdown */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <UrlsDropdown /> {/* URLs Dropdown Component */}
          <Link
            href="/contact"
            className="px-6 py-3 text-primaryColor text-md font-bold bg-lightDark rounded-full hover:bg-primaryDark transition duration-300"
          >
            Get in touch
          </Link>
        </div>

        {/* Menu Button for Small Screens */}
        <li className="block md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <FaTimes className="text-darkDark text-2xl" />
            ) : (
              <FaBars className="text-darkDark text-3xl" />
            )}
          </button>
        </li>
      </ul>

      {/* Slider Menu for Small Screens */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute left-0 top-full mx-3 px-1 pb-3 rounded-[10px] bg-lightDark opacity-95 text-white shadow-2xl z-50 md:hidden transition-all duration-300 ease-in-out`}
        style={{
          width: "calc(100% - 1.5rem)",
        }}
      >
        <ul>
          <li>
            <Link
              href="/"
              className="block text-md font-bold text-primaryColor px-6 py-4 hover:bg-gray-700 transition duration-300"
            >
              <FaHome className="inline-block mr-2" />
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block text-md font-bold text-primaryColor px-6 py-4 hover:bg-gray-700 transition duration-300"
            >
              <FaPhoneAlt className="inline-block mr-2" />
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
const ArticlesNavbar = () => {
  return (
    <nav className="relative">
      <ul className="nav-bar flex items-center space-x-6 bg-green-900 text-white">
        {/* Logo */}
        <li className="logo">
          <Link href="/" className="flex text-2xl font-semibold">
            <p>Rishabh</p>
            <span>Articles</span>
          </Link>
        </li>

        {/* Menu Button for Small Screens */}
        <li className="block md:hidden">
          <button className="focus:outline-none">
            <FaBars className="text-white text-3xl" />
          </button>
        </li>
      </ul>

      {/* Slider Menu for Small Screens */}
      <div
        className={`absolute left-0 top-full mx-3 px-1 pb-3 rounded-[10px] bg-green-800 text-white shadow-2xl z-50 md:hidden`}
        style={{
          width: "calc(100% - 1.5rem)",
        }}
      >
        <ul>
          <li>
            <Link
              href="/articles"
              className="block text-md font-poppins font-bold text-primaryColor px-6 py-4 hover:bg-gray-700 transition duration-300"
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block text-md font-poppins font-bold text-primaryColor px-6 py-4 hover:bg-gray-700 transition duration-300"
            >
              <FaPhoneAlt className="inline-block mr-2" /> {/* Contact icon */}
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Links for Larger Screens */}
      <div className="hidden md:flex items-center space-x-6">
        <li>
          <Link
            href="/articles"
            className="text-lg hover:text-gray-400 transition duration-300"
          >
            Articles
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-lg hover:text-gray-400 transition duration-300"
          >
            Contact
          </Link>
        </li>
      </div>
    </nav>
  );
};

const Navbar = ({ type = "default" }) => {
  if (type === "projects") {
    return <ProjectsNavbar />;
  } else if (type === "articles") {
    return <ArticlesNavbar />;
  } else {
    return <DefaultNavbar />;
  }
};

export default Navbar;
