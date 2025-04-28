import React from "react";

function Experience() {
  return (
    <div className="flex justify-around items-center mt-15">
      <div className="flex flex-col justify-center items-start gap-5 w-[50%]">
        <div className="bg-zinc-300 px-4 py-2 ">About us</div>
        <div className="text-4xl">
          What Sets Us <br />
          Apart!
        </div>
        <div className="grid grid-cols-2 gap-5 justify-center items-center">
          <div className="bg-gray-300 p-2">
            <p className="text-3xl font-bold">100+</p>
            <p>Wedding Covered</p>
          </div>
          <div className="bg-gray-300 p-2">
            <p className="text-3xl font-bold">10+</p>
            <p> Years of Experience</p>
          </div>
          <div className="bg-gray-300 p-2">
            <p className="text-3xl font-bold">100+</p>
            <p>Storytelling</p>
          </div>
          <div className="bg-gray-300 p-2">
            <p className="text-3xl font-bold">100+</p>
            <p>Professionalism</p>
          </div>
        </div>
      </div>
      <div>images</div>
    </div>
  );
}

export default Experience;
