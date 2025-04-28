import React from "react";
import Images from "./Images";

function Herosection() {
  return (
    <div className="flex border-b-2 border-zinc-400 flex-col md:flex-row">
      <div className="md:min-w-[45%] md:max-w-[45%]">
        <div className="text-6xl px-5 pt-20 pb-5">
          Hey There, <br />
          We Are Candid Dreams
        </div>
        <div className="border-t-2 border-zinc-400 px-5 py-10">
          <p>
            We are experienced event photographers, capturing genuine moments
            with creativity and care, turning your special memories into
            timeless stories you'll treasure forever. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto explicabo reiciendis in, architecto eius quis harum laborum, sequi odit, debitis sunt. Delectus dicta adipisci animi unde numquam id aut!
          </p>
          <button className="bg-red-700 text-white text-sm px-2 py-1 mt-5 rounded-md">
            Get in Touch
          </button>
        </div>
      </div>

      <div className="md:border-l-2 border-zinc-400 relative flex justify-end items-end md:pr-10 pr-5 pb-5 w-full min-h-[400px] ">

        <div className="absolute h-[90%] md:w-[60%] w-[70%]">
        <Images
          url="https://www.ptaufiqphotography.com/wp-content/uploads/2018/10/ptaufiq-indian-wedding-jaisalmer-india-destination-engagement-1280x854.jpg"
          height="100%"
          width="100%"
        />
        </div>
        <div className="absolute md:left-[10%] left-[10%] h-[50%] md:w-[40%] w-[40%]">
          {" "}
          <Images
            url="https://media.istockphoto.com/id/866987706/photo/indian-wedding-hands.jpg?s=1024x1024&w=is&k=20&c=hMoZyz4VbXnYTI6QDPH7hH_4wdGAHnNOhHvQQ9sIgkc="
            height="100%"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default Herosection;
