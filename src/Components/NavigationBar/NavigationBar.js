import React from "react";
// import { Link } from 'react-router-dom'
// import { MenuIcon, XIcon } from "@heroicons/react/outline";
// import { FaUserAlt } from "react-icons/fa";
import Logo from '../../images/logo.png'

const NavigationBar = () => {
  return (
    <>
      <div className="w-screen bg-white h-[70px] z-10 fixed drop-shadow-lg">
        
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            {/* <h1 className="text-3xl font-bold text-black mr-4 sm:text-4xl">EAGER</h1> */}
            <img className="px-10 h-[40px]" src={Logo} alt="No Internet"/>
            <ul className="hidden text-black md:flex">
              <li className="cursor-pointer hover:bg-white hover:text-green-600 hover:rounded-lg">
                Home
              </li>
              <li className="cursor-pointer relative group hover:bg-white hover:text-green-600 hover:rounded-lg">
                About Us
              </li>
              <li className="cursor-pointer relative group hover:bg-white hover:text-green-600 hover:rounded-lg">
                Contact Us
              </li>
              <li className="cursor-pointer relative group hover:bg-white hover:text-green-600 hover:rounded-lg">
                Services
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
