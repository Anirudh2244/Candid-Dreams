import { HeartHandshake, Video } from "lucide-react";
import React from "react";
import Images from "./Images";

function Experience() {
  return (
    <div className="flex flex-col sm:flex-row justify-around sm:items-center mt-15 animation-custom">
      <div className="flex flex-col items-start gap-5 ps-5">
        <div className="bg-zinc-400 text-white px-4 py-2 ">About us</div>
        <div className="text-4xl head-font text-zinc-800">
          What Sets Us <br />
          Apart!
        </div>
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className=" p-2">
            <p className="text-3xl text-zinc-800 font-bold">100+</p>
            <p className="text-zinc-800">Weddings Covered</p>
          </div>
          <div className="p-2">
            <p className="text-3xl font-bold text-zinc-800">10+</p>
            <p className="text-zinc-800"> Years of Experience</p>
          </div>
          <div className=" p-2">
            <p className="text-3xl text-zinc-800 font-bold">
              <Video size={40} />
            </p>

            <p className="text-zinc-800">Storytelling</p>
          </div>
          <div className=" p-2">
            <p className="text-3xl text-zinc-800 font-bold">
              <HeartHandshake size={40} />
            </p>
            <p className="text-zinc-800">Professionalism</p>
          </div>
        </div>
      </div>

      <div className="relative w-full h-4/5  sm:max-w-[40%] aspect-[16/9]">
        <div className="absolute h-full w-[50%] object-cover right-[5%] top-0 z-10">
          <Images
            url="https://i.ibb.co/BVsFqV11/5.jpg"
            height="100%"
            width="100%"
          />
        </div>
        <div className="absolute h-full w-[50%] object-cover top-[20%] left-[5%] z-0">
          <Images
            url="https://i.ibb.co/0p92ybvJ/4.jpg"
            height="100%"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
