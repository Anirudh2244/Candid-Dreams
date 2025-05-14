import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import ImageGallary from "./ImageGallary";

// to render all images
export default function WeddingModal({ url, name }) {
  const [show, setShow] = useState(false);

  // Everytime handle show is called, it will toggle the value of show
  const handleShow = () => {
    setShow((prev) => !prev);
  };

  // const handleShow = () => {
  //   if (show) {
  //     setShow(false);
  //   } else if (!show) {
  //     setShow(true);
  //   }
  // };

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
  }, [show]);
  return (
    <div>
      <SquareImage url={url[0]} handleClick={handleShow} normalMode={true} />
      <p className="mt-5 text-xl text-zinc-600 head-font">{name}</p>
      {
        <div
          onClick={handleShow}
          className={`z-20 flex justify-center items-center  fixed w-[200%] h-[200%] -left-[50vw] -top-[50vh] bg-[rgba(0,0,0,0.8)] duration-300 trasnition ${
            show
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 pointer-events-none translate-y-[200px] scale-75"
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[40%] sm:w-[30%] max-h-[40%] bg-transparent  flex justify-center items-center mx-auto"
          >
            <ImageGallary imgArr={url} />
          </div>
        </div>
      }
    </div>
  );
}

// individual image
function SquareImage({ url, handleClick, normalMode = false }) {
  return (
    <div
      className={`${
        normalMode ? "border" : ""
      } border-gray-400 relative aspect-[4/3]`}
      onClick={handleClick}
    >
      <div
        style={{ backgroundImage: `url(${url})` }}
        onClick={(e) => {
          if (!normalMode) {
            e.stopPropagation();
          }
        }}
        className={`w-full h-full bg-cover bg-center absolute ${
          normalMode ? "top-[5%] left-[5%]" : "rounded-lg"
        }`}
      ></div>

      {normalMode || (
        <button
          className="absolute -top-[15px] -right-[15px] cursor-pointer bg-zinc-200   rounded-full h-[30px] p-1 flex justify-center items-center w-[30px] hover:bg-zinc-300"
          role="button"
        >
          <X size={25} color="#000" />
        </button>
      )}
    </div>
  );
}
