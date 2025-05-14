import React from "react";
// functional components named Images
//taking an object of props destructured otherwise props.property
// e.g. props.url
const Images = ({
  url,
  height = "300px",
  paddingRight = "10px",
  width = "320px",
  video = false,
}) => {
  return (
    <div
      className={`border-r-2 border-zinc-400 rounded-t-full`}
      style={{ height, width, paddingRight }}
    >
      {video == true ? (
        <video
          className="rounded-t-full object-cover w-full h-full "
          // style={{ height: `${height}px` }}
          src={url}
          alt="Wedding Video"
          autoPlay
          loop
          muted
        />
      ) : (
        <img
          className="rounded-t-full object-cover h-full w-full"
          // style={{ height: `${height}px` }}
          src={url}
          alt="Wedding Image"
        />
      )}
    </div>
  );
};

export default Images;
