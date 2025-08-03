import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Optional: If using React Router
import LogoLight from "../assets/logo/logo.svg";
import LogoDark from "../assets/logo/logo dark.svg";
import ArrowSvg from "../assets/icons/arrow.svg";
import Dropdown from "./DropDown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsOpen(!isOpen);

  const homeRoute = location.pathname === "/";

  return (
    <nav className={`${homeRoute ? "bg-[#0A0C33]" : "bg-white"}  shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={homeRoute ? LogoLight : LogoDark} alt="logo" />
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-sm text-gray-400 hover:border-b-[#A5EB14] focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <div className="hidden md:flex space-x-6">
            <Dropdown
              button={
                <div
                  className={`${
                    homeRoute ? "text-gray-300" : "text-gray-700"
                  } text-sm  hover:border-b hover:border-b-[#A5EB14]`}
                >
                  Products
                </div>
              }
            >
              <ul className="py-2 text-sm text-gray-700">
                <div className="grid grid-cols-3">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                     products 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                         products 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                           products 3
                    </a>
                  </li>
                </div>
              </ul>
            </Dropdown>
            <Dropdown
              button={
                <div
                  className={`${
                    homeRoute ? "text-gray-300" : "text-gray-700"
                  } text-sm  hover:border-b hover:border-b-[#A5EB14] cursor-pointer`}
                >
                  Use Cases
                </div>
              }
            >
              <ul className="py-2 text-sm text-gray-700">
                <div className="grid grid-cols-3">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      use case 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      use case 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      use case 3
                    </a>
                  </li>
                </div>
              </ul>
            </Dropdown>
            <Link
              to="/about"
              className={`${
                homeRoute ? "text-gray-300" : "text-gray-700"
              } text-sm  hover:border-b hover:border-b-[#A5EB14]`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`${
                homeRoute ? "text-gray-300" : "text-gray-700"
              } text-sm  hover:border-b hover:border-b-[#A5EB14]`}
            >
              Contact
            </Link>
            <div
              className={`${
                homeRoute ? "text-gray-300" : "text-gray-700"
              } text-sm  hover:border-b hover:border-b-[#A5EB14]`}
            >
              Blogs
            </div>
          </div>
          <div>
            <button className="bg-[#A5EB14] text-[12px] rounded-3xl py-2 px-5 flex gap-3 items-center">
              Get Started <img src={ArrowSvg} alt="arrow" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link
            to="/"
            className="block py-2 text-sm text-gray-400 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 text-sm text-gray-400 hover:text-blue-600"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 text-sm text-gray-400 hover:text-blue-600"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
