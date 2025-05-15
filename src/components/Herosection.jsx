import React from "react";
import Images from "./Images";
import feature_video from "/assets/videos/herovideo.mp4";
import Typewriter from "./Typewriter";
function Herosection() {
  return (
    <div className="flex border-b-2 border-zinc-400 flex-col md:flex-row animation-custom">
      <div className="md:min-w-[45%] md:max-w-[45%]">
        <div className="text-4xl sm:text-6xl px-5 pt-10 pb-5 leading-12 sm:leading-18 head-font font-bold text-zinc-800">
          Hey There! <br />
          We Are The Candid Dreams.
        </div>
        <p className="text-xl sm:text-2xl px-5 pb-5 head-font text-zinc-800">
          <Typewriter />
        </p>

        <div className="border-t-2 border-zinc-400 px-5 py-10">
          <p className="mb-5 text-zinc-600">
            We are experienced photographers and cinematographers, capturing
            genuine moments with creativity, passion, and care. From heartfelt
            smiles to unforgettable celebrations, we turn your special memories
            into timeless stories through stunning imagery and cinematic films.
            Our goal is to preserve every emotion, detail, and connection,
            creating treasures you'll cherish forever.
          </p>
          <a
            href="https://wa.me/918114412845"
            target="_blank"
            className="bg-red-700 hover:bg-red-900 px-4 py-2 text-white "
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="md:border-l-2 border-zinc-400 relative flex justify-end items-end md:pr-10 pr-5 pb-5 w-full min-h-[400px] ">
        <div className="absolute h-[90%] md:w-[60%] w-[70%]">
          <Images url={feature_video} video={true} height="100%" width="100%" />
        </div>
        <div className="absolute md:left-[5%] left-[5%] h-[50%] md:w-[40%] w-[40%]">
          {" "}
          <Images
            url="/assets/images/wedding/w5/1.jpg"
            height="100%"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default Herosection;
