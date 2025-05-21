import React from "react";
import Typewriter from "./Typewriter";

function Loading() {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center h-screen head-font text-4xl bg-black text-white  ">
      <div className="mx-10 text-center ">
        <Typewriter
          staticStr="Welcome to The Candid Dreams!"
          dynamicArr={["❤️"]}
        />
      </div>
    </div>
  );
}

export default Loading;
