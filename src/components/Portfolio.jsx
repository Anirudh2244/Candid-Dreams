import React from "react";
import SquareImages from "./SquareImages";

function Portfolio() {
  return (
    <div className="mt-30 flex justify-center items-center flex-col gap-5">
      <button className="bg-zinc-300 px-4 py-2 mt-10">Our Works</button>
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-full m-5 h-0.5 my-5 bg-zinc-400 border-0" />
        <span class="px-3 text-4xl text-zinc-800 -translate-x-1/2 bg-white absolute left-1/2">
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
