import React from "react";

function YtVideos() {
  return (
    <div className="animation-custom">
      <div class="mt-10 inline-flex items-center justify-center w-full  mb-10 sm:mb-5">
        <hr class="w-full m-5 h-0.5 my-5 bg-zinc-400 border-0" />
        <span class="px-3 text-xl head-font sm:text-4xl text-zinc-800 -translate-x-1/2 text-center bg-white absolute left-1/2">
          Moments
        </span>
      </div>
      <div className="  flex flex-col sm:flex-row gap-5 mx-2 sm:mx-5 justify-around items-center">
        <iframe
          className="w-full sm:w-1/2 aspect-16/9"
          //   width="560"
          //   height="315"
          src="https://www.youtube.com/embed/vI7wbxMLXfE?si=MkRqzQPALFTWKgp2"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          className="w-full sm:w-1/2 aspect-16/9"
          //   width="560"
          //   height="315"
          src="https://www.youtube.com/embed/KMyPcLvGtXs?si=Pyf3-4QQFsvcXy0n"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default YtVideos;
