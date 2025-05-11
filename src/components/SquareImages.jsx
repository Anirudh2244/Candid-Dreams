import React from "react";
const WEDDINGS = [
  {
    url: "https://images.pexels.com/photos/5589840/pexels-photo-5589840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Abhishek weds APO",
  },
  {
    url: "https://images.pexels.com/photos/16445761/pexels-photo-16445761/free-photo-of-hugging-newlyweds-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Vivaan weds Isha",
  },
  {
    url: "https://images.pexels.com/photos/30817333/pexels-photo-30817333/free-photo-of-elegant-black-and-white-wedding-kiss.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Kabir weds Meera",
  },
  {
    url: "https://images.pexels.com/photos/11087143/pexels-photo-11087143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Aryan weds Saanvi  ",
  },
  {
    url: "https://images.pexels.com/photos/20486241/pexels-photo-20486241/free-photo-of-a-newlywed-couple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Aditya weds Riya",
  },
  {
    url: "https://images.pexels.com/photos/18107914/pexels-photo-18107914/free-photo-of-smiling-newlyweds-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Rahul weds Priya",
  },
];

// individual image
function SquareImage({ url }) {
  return (
    <div className=" border border-gray-400 relative aspect-[4/3]">
      <img
        src={url}
        alt=""
        className="w-full h-full absolute top-[5%] left-[5%]"
      />
    </div>
  );
}

// to render all images
export default function SquareImages() {
  return (
    <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-10 mx-4 mr-8 sm:mx-15  ">
      {WEDDINGS.map((wedding, index) => (
        <div key={index}>
          <SquareImage url={wedding.url} />
          <p className="mt-5 text-xl text-zinc-600 head-font">{wedding.name}</p>
        </div>
      ))}
    </div>
  );
}
