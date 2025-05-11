import React from "react";

function Plansection() {
  return (
    <div className="flex justify-between items-center flex-col sm:flex-row  sm:gap-0 gap-15 mt-15 bg-zinc-200 py-15 ">
      <div className="sm:w-1/2  pl-5">
        <p className="text-4xl head-font text-zinc-800">
          Getting Ready to Plan a <br /> special Event
        </p>
        <p className="my-5 text-zinc-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          incidunt labore fugiat sunt temporibus, quia omnis, hic ratione
          consequatur fugit accusantium, nihil ducimus ab. Doloribus.
        </p>
        <a
          href="https://wa.me/918114412845"
          target="_blank"
          className="bg-red-700 px-4 py-2 text-white "
        >
          Get in Touch
        </a>
      </div>

      <div class="relative w-full sm:w-[40%] h-[20%] max-w-[700px] aspect-[16/8]  ">
        <img
          src="https://thecandidhouse.com/images/upload/TCH02685.jpg"
          alt=""
          class="absolute h-full w-[45%] right-[10%] sm:w-1/2 object-cover sm:left-[40%] z-10 bottom-[10%]"
        />
        <img
          src="https://media.istockphoto.com/id/2168707868/photo/indian-couple-holding-hand-close-up-in-wedding-ceremony.jpg?s=1024x1024&w=is&k=20&c=bMeqmdbQ3QFgY8va5JQOCr0kr4rp89Uyn3zSkvbzmPo="
          alt=""
          class="absolute h-full w-[45%] left-[10%] sm:w-1/2 object-cover top-[10%] sm:left-0 z-0"
        />
      </div>
    </div>
  );
}

export default Plansection;
