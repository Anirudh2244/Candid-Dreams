import React from "react";

const urls = [
  "https://images.pexels.com/photos/5589840/pexels-photo-5589840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/16445761/pexels-photo-16445761/free-photo-of-hugging-newlyweds-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/30817333/pexels-photo-30817333/free-photo-of-elegant-black-and-white-wedding-kiss.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/11087143/pexels-photo-11087143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/20486241/pexels-photo-20486241/free-photo-of-a-newlywed-couple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/18107914/pexels-photo-18107914/free-photo-of-smiling-newlyweds-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const WeddingName = [
  "a weds b",
  "a weds c", 
  "a weds d",
  "a weds e",
  "a weds f",
  "a weds g",
]

// individual image
function SquareImage({ url }) {
  return (
    <div className="m-2 w-[40%] md:w-[30%] border border-gray-400 relative aspect-[4/3]">
      <img
        src={url}
        alt=""
        className="w-full h-full absolute top-[5%] left-[5%]"
      />
      <p>{WeddingName}</p>
    </div>
  );
}

// to render all images
export default function SquareImages() {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-5">
      {urls.map((url, index, WeddingName) => (
        <SquareImage key={index} url={url} WeddingName={WeddingName} />
      ))}
    </div>
  );
}
