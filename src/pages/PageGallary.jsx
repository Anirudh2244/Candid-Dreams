import React from "react";

const PageGallary = ({ gallaryImages }) => {
  return (
    <div className="">
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-2 space-y-2 sm:gap-4 sm:space-y-4">
        {gallaryImages.map((url, index) => (
          <img
            key={index}
            src={url}
            className="w-full h-auto object-cover rounded-lg shadow hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default PageGallary;
