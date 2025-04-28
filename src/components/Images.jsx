import React from "react";
// functional components named Images
//taking an object of props destructured otherwise props.property
// e.g. props.url
const Images = ({
  url,
  height = "400px",
  paddingRight = "10px",
  width = "320px",
  top = "0",
  left = "0",
}) => {
  return (
    <div
      className={`border-r-2 border-zinc-400 rounded-t-full`}
      style={{ height, width, top, left, paddingRight }}
    >
      <img
        className="rounded-t-full object-cover h-full "
        // style={{ height: `${height}px` }}
        src={url}
        alt="Wedding Image"
      />
    </div>
  );
};

export default Images;
