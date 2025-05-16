import React from "react";
import Images from "./Images";

function Services() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 animation-custom">
      <button className="bg-zinc-400 px-4 py-2 mt-10 text-white">
        Our Services
      </button>

      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-full m-5 h-0.5 my-5 bg-zinc-400 border-0" />
        <span class="px-3 text-xl text-center sm:text-4xl text-zinc-800 -translate-x-1/2 bg-white absolute left-1/2 head-font">
          What We Do Best?
        </span>
      </div>
      <div className="px-5 sm:w-[50%] text-center text-zinc-600">
        <p>
          We capture genuine moments, timeless emotions, and unforgettable love
          stories with artistry, passion, and a deep attention to every detail.
        </p>
      </div>

      <div className="flex flex-col w-full sm:flex-row justify-evenly  items-center gap-5 sm:gap-0">
        <div className="flex w-[80%] sm:w-[25%] flex-col justify-center items-center">
          <Images
            url="https://i.ibb.co/dwb06c0y/DSC08047-copy.jpg"
            width="100%"
          />
          <p className="py-2 text-xl head-font text-zinc-800">Pre Wedding</p>
        </div>
        <div className=" flex w-[80%] sm:w-[25%] flex-col justify-center items-center">
          <Images url="https://i.ibb.co/hFT9HxBG/1.jpg" width="100%" />
          <p className="py-2 head-font text-zinc-800 text-xl">Weddings</p>
        </div>
        <div className=" flex w-[80%] sm:w-[25%] flex-col justify-center items-center">
          <Images url="https://i.ibb.co/VYsCy07z/DSC07584-1.jpg" width="100%" />
          <p className="py-2 head-font text-zinc-800 text-xl">
            Shoots and Events
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
