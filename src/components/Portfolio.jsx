import React from "react";
import SquareImages from "./SquareImages";

function Portfolio() {
  return (
    <div className="flex justify-center items-center flex-col  sm:gap-3 mt-10 ">
      <button className="bg-zinc-300 px-4 py-2  mt-10">Our Works</button>
      <div class="inline-flex items-center justify-center w-full  mb-10 sm:mb-5">
        <hr class="w-full m-5 h-0.5 my-5 bg-zinc-400 border-0" />
        <span class="px-3 text-xl sm:text-4xl text-zinc-800 -translate-x-1/2 text-center bg-white absolute left-1/2">
          Latest Projects
        </span>
      </div>

      <div className=" w-full md:pr-5 pb-5">
        <SquareImages />
      </div>
    </div>
  );
}

export default Portfolio;
