import { HeartHandshake, Video } from "lucide-react";
import React from "react";
import Images from "./Images";

function Experience() {
  return (
    <div className="flex justify-around items-center mt-15">
      <div className="flex flex-col justify-center items-start gap-5 min-w-[50%] max-w-[50%] ps-5">
        <div className="bg-zinc-300 px-4 py-2 ">About us</div>
        <div className="text-4xl">
          What Sets Us <br />
          Apart!
        </div>
        <div className="grid grid-cols-2 gap-5 justify-center items-center">
          <div className=" p-2">
            <p className="text-3xl font-bold">100+</p>
            <p>Weddings Covered</p>
          </div>
          <div className=" p-2">
            <p className="text-3xl font-bold">10+</p>
            <p> Years of Experience</p>
          </div>
          <div className=" p-2">
            <p className="text-3xl font-bold">
              <Video size={40} />
            </p>
            <p>Storytelling</p>
          </div>
          <div className=" p-2">
            <p className="text-3xl font-bold">
              <HeartHandshake size={40} />
            </p>
            <p>Professionalism</p>
          </div>
        </div>
      </div>

      <div className="relative w-full  min-w-[50%] aspect-[16/9]">
        <div className="absolute h-full w-1/2 object-cover left-[40%] z-10">
          <Images
            url="https://media.istockphoto.com/id/1127706701/photo/hindi-wedding-ceremony.jpg?s=1024x1024&w=is&k=20&c=-D2_-mbbweziTG2xRvVHCBgnFX-3495R-jC-lnOEsXs="
            height="100%"
            width="100%"
          />
        </div>
        <div className="absolute h-full w-1/2 object-cover top-[20%] left-0 z-0">
          <Images
            url="https://media.istockphoto.com/id/1141906552/photo/indian-hindu-couple-holding-each-other-hands-during-their-marriage-symbolising-love-and.jpg?s=1024x1024&w=is&k=20&c=ykJaSgPmkDS64ey6pD8oMhCmHXg90cN8cgRMZZTN0cc="
            height="100%"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
