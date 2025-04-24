import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full bg-red-200 bg-opacity-90 backdrop-blur-lg shadow-md z-50">
      <div className="flex flex-row gap-x-10 justify-between bg-red-200">
        <Link
          className="text-red-600 font-bold relative cursor-pointer transition-colors duration-300 hover:text-red-800 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-600 after:left-0 after:bottom-[-4px] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
          to="/"
        >
          <img
            className="pl-5 contrast-125 brightness-90"
            src="crest.png"
            alt="Group"
            width="100"
          ></img>
        </Link>
        <div className="flex flex-row gap-x-10 items-center justify-center pr-10">
          <Link
            className="text-red-600 font-bold relative cursor-pointer transition-colors duration-300 hover:text-red-800 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-600 after:left-0 after:bottom-[-4px] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
            to="/Events"
          >
            EVENTS
          </Link>
          <Link
            className="text-red-600 font-bold relative cursor-pointer transition-colors duration-300 hover:text-red-800 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-600 after:left-0 after:bottom-[-4px] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
            to="/Team"
          >
            TEAM
          </Link>
          <Link
            className="text-red-600 font-bold relative cursor-pointer transition-colors duration-300 hover:text-red-800 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-600 after:left-0 after:bottom-[-4px] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
            to="/About"
          >
            ABOUT US
          </Link>
          <p className="text-red-600 font-bold relative cursor-pointer transition-colors duration-300 hover:text-red-800 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-600 after:left-0 after:bottom-[-4px] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
            APPLY
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
