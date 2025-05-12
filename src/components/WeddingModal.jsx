import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

// to render all images
export default function WeddingModal({ url, name }) {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
  }, [show]);
  return (
    <div>
      <SquareImage url={url} handleClick={handleShow} popupMode={true} />
      <p className="mt-5 text-xl text-zinc-600 head-font">{name}</p>
      {show && (
        <div
          onClick={handleShow}
          className="z-20 top-0 flex justify-center items-center left-0 fixed w-full h-dvh bg-[rgba(0,0,0,0.8)]  duration-300"
        >
          {/* <img
            src={url}
            onClick={(e) => e.stopPropagation()}
            alt=""
            className="max-w-[500px] max-h-[80%] w-[90%] "
            /> */}
          <div className="max-w-[500px] max-h-[80%] w-[90%] relative">
            <SquareImage url={url} />
          </div>
        </div>
      )}
    </div>
  );
}

// individual image
function SquareImage({ url, handleClick, popupMode = false }) {
  return (
    <div
      className={`${
        popupMode ? "border" : ""
      } border-gray-400 relative aspect-[4/3]`}
      onClick={handleClick}
    >
      {/* <img
        src={url}
        alt=""
        className="w-full h-full absolute top-[5%] left-[5%]"
      /> */}

      <div
        style={{ backgroundImage: `url(${url})` }}
        className={`w-full h-full bg-cover bg-center absolute ${
          popupMode ? "top-[5%] left-[5%]" : "rounded-lg"
        }`}
      ></div>
      {popupMode || (
        <button
          className="absolute -top-4 -right-4 cursor-pointer bg-zinc-400 rounded-full hover:bg-zinc-500"
          role="button"
        >
          <X size={25} color="#fff" />
        </button>
      )}
    </div>
  );
}
