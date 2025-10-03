import React from "react";
import { Link } from "react-router-dom"; 

function Navbar() {
  return (
    <div className="px-2 sm:px-15 flex justify-between items-center py-2 border-b-2 border-zinc-400">
      <div className="text-xl sm:text-3xl head-font">
        <Link to="/">
          <img
            src="./assets/images/logo/logo.png"
            alt="Candid Dreams"
            className="h-auto w-30 sm:w-40"
          />
        </Link>
      </div>
      <a
        href="https://wa.me/918114412845"
        target="_blank"
        className="border-2 text-sm sm:text-lg hover:bg-zinc-200 border-zinc-400 text-zinc-600 px-2 py-1"
      >
        Contact Us
      </a>
    </div>
  );
}

export default Navbar;
