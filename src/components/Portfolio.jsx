import React from "react";
import WeddingModal from "./WeddingModal";

const WEDDINGS = [
  {
    urls: [
      "https://ik.imagekit.io/adsrc2244/wedding/w1/1.jpg?updatedAt=1748420226447",
      "https://ik.imagekit.io/adsrc2244/wedding/w1/2.jpg?updatedAt=1748420226451",
      "https://ik.imagekit.io/adsrc2244/wedding/w1/3.jpg?updatedAt=1748420226201",
      "https://ik.imagekit.io/adsrc2244/wedding/w1/4.jpg?updatedAt=1748420226054",
      "https://ik.imagekit.io/adsrc2244/wedding/w1/5.jpg?updatedAt=1748420226086",
    ],
    name: "Megha & Saurabh",
  },
  {
    urls: [
      "https://ik.imagekit.io/adsrc2244/wedding/w2/1.jpg?updatedAt=1748420233762",
      "https://ik.imagekit.io/adsrc2244/wedding/w2/2.jpg?updatedAt=1748420231435",
      "https://ik.imagekit.io/adsrc2244/wedding/w2/3.jpg?updatedAt=1748420232347",
      "https://ik.imagekit.io/adsrc2244/wedding/w2/4.jpg?updatedAt=1748420231143",
      "https://ik.imagekit.io/adsrc2244/wedding/w2/5.jpg?updatedAt=1748420231162",
    ],
    name: "Nehal & Akshay",
  },
  {
    urls: [
      "https://ik.imagekit.io/adsrc2244/wedding/w3/1.jpg?updatedAt=1748420235064",
      "https://ik.imagekit.io/adsrc2244/wedding/w3/2.jpg?updatedAt=1748420235099",
      "https://ik.imagekit.io/adsrc2244/wedding/w3/3.jpg?updatedAt=1748420235199",
      "https://ik.imagekit.io/adsrc2244/wedding/w3/4.jpg?updatedAt=1748420234742",
      "https://ik.imagekit.io/adsrc2244/wedding/w3/5.jpg?updatedAt=1748420235037",
    ],
    name: "Nikita & Saurabh",
  },
  {
    urls: [
      "https://ik.imagekit.io/adsrc2244/wedding/w4/1.jpg?updatedAt=1748420238014",
      "https://ik.imagekit.io/adsrc2244/wedding/w4/2.jpg?updatedAt=1748420235663",
      "https://ik.imagekit.io/adsrc2244/wedding/w4/3.jpg?updatedAt=1748420236916",
      "https://ik.imagekit.io/adsrc2244/wedding/w4/4.jpg?updatedAt=1748420235230",
      "https://ik.imagekit.io/adsrc2244/wedding/w4/5.jpg?updatedAt=1748420235579",
    ],
    name: "Saumaya & Ravindra",
  },
  {
    urls: [
      "https://ik.imagekit.io/adsrc2244/wedding/w5/11.jpg?updatedAt=1748420229758",
      "https://ik.imagekit.io/adsrc2244/wedding/w5/2.jpg?updatedAt=1748420230916",
      "https://ik.imagekit.io/adsrc2244/wedding/w5/3.jpg?updatedAt=1748420231080",
      "https://ik.imagekit.io/adsrc2244/wedding/w5/4.jpg?updatedAt=1748420230664",
      "https://ik.imagekit.io/adsrc2244/wedding/w5/5.jpg?updatedAt=1748420230852",
    ],
    name: "Shefali & Rahul",
  },
  {
    urls: [
      "https://ik.imagekit.io/adsrc2244/wedding/w6/1.jpg?updatedAt=1748420226294",
      "https://ik.imagekit.io/adsrc2244/wedding/w6/2.jpg?updatedAt=1748420226936",
      "https://ik.imagekit.io/adsrc2244/wedding/w6/3.jpg?updatedAt=1748420226348",
      "https://ik.imagekit.io/adsrc2244/wedding/w6/4.jpg?updatedAt=1748420225719",
      "https://ik.imagekit.io/adsrc2244/wedding/w6/5.jpg?updatedAt=1748420226181",
    ],
    name: "Sushila & Sambhu",
  },
];

function Portfolio() {
  return (
    <div className=" flex justify-center items-center flex-col  sm:gap-3 mt-10 ">
      <button className="bg-zinc-400 text-white px-4 py-2  mt-10 animation-custom">
        Our Works
      </button>
      <div class="inline-flex items-center justify-center w-full  mb-10 sm:mb-5 animation-custom">
        <hr class="w-full m-5 h-0.5 my-5 bg-zinc-400 border-0" />
        <span class="px-3 text-xl head-font sm:text-4xl text-zinc-800 -translate-x-1/2 text-center bg-white absolute left-1/2">
          Latest Projects
        </span>
      </div>

      <div className=" w-full md:pr-5 pb-5 ">
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
