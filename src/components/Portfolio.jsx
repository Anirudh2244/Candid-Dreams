import React from "react";
import WeddingModal from "./WeddingModal";
const WEDDINGS = [
  {
    urls: [
      "https://images.pexels.com/photos/5589840/pexels-photo-5589840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5589840/pexels-photo-5589840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5589840/pexels-photo-5589840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    name: "Abhishek weds APO",
  },
  {
    urls: [
      "https://images.pexels.com/photos/16445761/pexels-photo-16445761/free-photo-of-hugging-newlyweds-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/16445761/pexels-photo-16445761/free-photo-of-hugging-newlyweds-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/16445761/pexels-photo-16445761/free-photo-of-hugging-newlyweds-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    name: "Vivaan weds Isha",
  },
  {
    urls: [
      "https://images.pexels.com/photos/30817333/pexels-photo-30817333/free-photo-of-elegant-black-and-white-wedding-kiss.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/30817333/pexels-photo-30817333/free-photo-of-elegant-black-and-white-wedding-kiss.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/30817333/pexels-photo-30817333/free-photo-of-elegant-black-and-white-wedding-kiss.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    name: "Kabir weds Meera",
  },
  {
    urls: [
      "https://images.pexels.com/photos/11087143/pexels-photo-11087143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/11087143/pexels-photo-11087143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/11087143/pexels-photo-11087143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    name: "Aryan weds Saanvi",
  },
  {
    urls: [
      "https://images.pexels.com/photos/20486241/pexels-photo-20486241/free-photo-of-a-newlywed-couple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/20486241/pexels-photo-20486241/free-photo-of-a-newlywed-couple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/20486241/pexels-photo-20486241/free-photo-of-a-newlywed-couple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    name: "Aditya weds Riya",
  },
  {
    urls: [
      "https://images.pexels.com/photos/18107914/pexels-photo-18107914/free-photo-of-smiling-newlyweds-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/18107914/pexels-photo-18107914/free-photo-of-smiling-newlyweds-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/18107914/pexels-photo-18107914/free-photo-of-smiling-newlyweds-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    name: "Rahul weds Priya",
  },
];

function Portfolio() {
  return (
    <div className=" flex justify-center items-center flex-col  sm:gap-3 mt-10 ">
      <button className="bg-zinc-400 text-white px-4 py-2  mt-10">
        Our Works
      </button>
      <div class="inline-flex items-center justify-center w-full  mb-10 sm:mb-5">
        <hr class="w-full m-5 h-0.5 my-5 bg-zinc-400 border-0" />
        <span class="px-3 text-xl head-font sm:text-4xl text-zinc-800 -translate-x-1/2 text-center bg-white absolute left-1/2">
          Latest Projects
        </span>
      </div>

      <div className=" w-full md:pr-5 pb-5">
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-10 mx-4 mr-8 sm:mx-15  ">
          {WEDDINGS.map((wedding, index) => (
            <WeddingModal key={index} name={wedding.name} url={wedding.urls} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
