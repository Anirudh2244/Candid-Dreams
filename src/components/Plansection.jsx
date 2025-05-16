import React from "react";

function Plansection() {
  return (
    <div className="flex justify-between items-center flex-col sm:flex-row  sm:gap-0 gap-15 mt-15 bg-zinc-200 py-15 animation-custom">
      <div className="sm:w-1/2 px-2 sm:px-5">
        <p className="text-4xl head-font text-zinc-800">
          Getting Ready to <br />Plan a <br /> special Event
        </p>
        <p className="my-5 text-zinc-600">
        Capturing the magic of your journey, pre-wedding to wedding day, with vibrant, timeless photography. Let us tell your love story through stunning, heartfelt photography.
        </p>
        <a
          href="https://wa.me/918114412845"
          target="_blank"
          className="bg-red-700 px-4 py-2 text-white "
        >
          Get in Touch
        </a>
      </div>

      <div class="relative w-full sm:w-[50%] h-[20%] max-w-[700px] aspect-[16/8]  ">
        <img
          src="https://i.ibb.co/pgnNybN/3.jpg"
          alt=""
          class="absolute h-full w-[50%] right-[2%] sm:w-1/2 object-cover sm:right-[10%] z-10 bottom-[10%]"
        />
        <img
          src="https://i.ibb.co/gMxC1Q2G/DSC04492-copy-2.jpg"
          alt=""
          class="absolute h-full w-[50%] left-[2%] sm:w-1/2 object-cover top-[10%]  z-0"
        />
      </div>
    </div>
  );
}

export default Plansection;
