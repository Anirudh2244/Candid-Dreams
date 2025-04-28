import React from "react";
import Images from "./Images";

function Services() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <button className="bg-gray-300 px-4 py-2 mt-10">Our Services</button>

      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-full m-5 h-0.5 my-5 bg-zinc-400 border-0" />
        <span class="px-3 text-4xl text-gray-800 -translate-x-1/2 bg-white absolute left-1/2">
          What We Do Best?
        </span>
      </div>
      <div className="w-[50%] text-center text-zinc-600">
        <p>
          We capture genuine moments, timeless emotions, and unforgettable love
          stories with artistry, passion, and a deep attention to every detail.
        </p>
      </div>
      <div className="flex justify-around">
        <div className="w-[32%] flex flex-col justify-center items-center">
          <Images
            url="https://jaipurpreweddingshoot.com/wp-content/uploads/2024/06/Aanshu_30-scaled.jpg"
            width="80%"
          />
          <p className="py-2">Pre Wedding</p>
        </div>
        <div className="w-[32%] flex flex-col justify-center items-center">
          <Images
            url="https://media.istockphoto.com/id/2168707868/photo/indian-couple-holding-hand-close-up-in-wedding-ceremony.jpg?s=1024x1024&w=is&k=20&c=bMeqmdbQ3QFgY8va5JQOCr0kr4rp89Uyn3zSkvbzmPo="
            width="80%"
          />
          <p className="py-2">Weddings</p>
        </div>
        <div className="w-[32%] flex flex-col justify-center items-center">
          <Images
            url="https://www.partyone.in/suploads/2024/Jun/26/38857/1719365590IMG_E7413.webp"
            width="80%"
          />
            <p className="py-2">Events</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
