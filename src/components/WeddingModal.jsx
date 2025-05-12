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
      <SquareImage url={url} handleClick={handleShow} normalMode={true} />
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
function SquareImage({ url, handleClick, normalMode = false }) {
  return (
    <div
      className={`${
        normalMode ? "border" : ""
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
