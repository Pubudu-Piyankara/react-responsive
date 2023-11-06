import React from "react";
// import { Link } from 'react-router-dom'
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { FaUserAlt } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import Logo from "../../images/logo.png";

const NavigationBar = () => {
  return (
    <>
      <div className="w-screen bg-white h-[70px] z-10 fixed drop-shadow-lg">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            {/* <h1 className="text-3xl font-bold text-black mr-4 sm:text-4xl">EAGER</h1> */}
            <img
              className="px-10 h-[40px] cursor-pointer "
              src={Logo}
              alt="No Internet"
            />
            <ul className="hidden text-black md:flex">
              <li className="cursor-pointer hover:bg-white hover:text-yellow-600 hover:rounded-lg">
                Home
              </li>
              <li className="cursor-pointer relative group hover:bg-white hover:text-yellow-600 hover:rounded-lg">
                About Us
              </li>
              <li className="cursor-pointer relative group hover:bg-white hover:text-yellow-600 hover:rounded-lg">
                Contact Us
              </li>
              <li className="cursor-pointer relative group hover:bg-white hover:text-yellow-600 hover:rounded-lg">
                Services
              </li>
            </ul>
          </div>
          <div className="hidden md:flex pr-4">
            <a
              href="/login"
              className="flex text-center cursor-pointer items-center mx-4 text-black hover:text-green-600"
              type="submit"
            >
              <FaSignInAlt className="lg:w-5 lg:h-5 mx-2" />
              <span className="text-sm font-medium">Login</span>
            </a>

            <a
              href="/account"
              className="block cursor-pointer shrink-0 rounded-lg bg-white p-2.5 border border-gray-100 shadow-sm hover:bg-transparent hover:text-green-600 hover:border hover:border-green-600"
            >
              <span className="sr-only">Account</span>
              <FaUserAlt className="lg:w-5 lg:h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
