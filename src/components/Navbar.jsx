import React from "react";

function Navbar() {
  return (
    <div className="px-5 sm:px-15 flex justify-between items-center py-2 border-b-2 border-zinc-400">
      <div className="text-xl sm:text-3xl head-font">Candid Dreams</div>
      <a
        href="https://wa.me/918114412845"
        target="_blank"
        className="border-2 border-zinc-400 text-zinc-600 px-2 py-1 rounded-md"
      >
        Contact Us
      </a>
    </div>
  );
}

export default Navbar;
