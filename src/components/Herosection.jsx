import React, { useEffect, useState } from "react";
import Images from "./Images";
import Typewriter from "./Typewriter";
import { motion } from "framer-motion";

function Herosection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // mobile if width < 640px
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const commonMotionProps = isMobile
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1 } }
    : { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 1, ease: "easeOut" } };

  return (
    <motion.div
      {...commonMotionProps}
      className="flex border-b-2 border-zinc-400 flex-col md:flex-row"
    >
      {/* Left Content */}
      <motion.div
        {...(isMobile
          ? {}
          : { initial: { opacity: 0, scale: 0.98 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 1, ease: "easeOut", delay: 0.2 }, viewport: { once: true } })}
        className="md:min-w-[45%] md:max-w-[45%]"
      >
        <div className="text-4xl sm:text-6xl px-2 sm:px-5 pt-10 pb-5 leading-12 sm:leading-18 head-font font-bold text-zinc-800">
          Hey There! <br />
          We Are The Candid Dreams.
        </div>

        <p className="text-xl gap-2 flex sm:text-2xl px-2 sm:px-5 pb-5 head-font text-zinc-800">
          <span>We Capture </span>
          <Typewriter
            staticStr=""
            dynamicArr={[" Emotions!❤️", " Memories!✨", " Heart!❤️", " Feelings!✨"]}
          />
        </p>

        <div className="border-t-2 border-zinc-400 px-2 sm:px-5 py-10">
          <p className="mb-5 text-zinc-600 pr-2">
            We are experienced photographers and cinematographers, capturing
            genuine moments with creativity, passion, and care. From heartfelt
            smiles to unforgettable celebrations, we turn your special memories
            into timeless stories through stunning imagery and cinematic films.
            Our goal is to preserve every emotion, detail, and connection,
            creating treasures you'll cherish forever.
          </p>

          <a
            href="https://wa.me/918114412845"
            target="_blank"
            className="bg-red-700 hover:bg-red-900 px-4 py-2 text-white font-semibold inline-block"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>

      {/* Right Media Section */}
      <motion.div
        {...(isMobile
          ? {}
          : { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 1, ease: "easeOut", delay: 0.3 }, viewport: { once: true, amount: 0.3 } })}
        className="md:border-l-2 border-zinc-400 relative flex justify-end items-end md:pr-10 pr-5 pb-5 w-full min-h-[400px]"
      >
        <div className="absolute h-[90%] md:w-[60%] w-[70%]">
          <Images
            url="https://ik.imagekit.io/adsrc2244/wedding/herovideo.mp4?updatedAt=1759480354834"
            video={true}
            height="100%"
            width="100%"
            poster="https://ik.imagekit.io/adsrc2244/wedding/videoposter.png?updatedAt=1759479878747"
          />
        </div>

        <div className="absolute md:left-[5%] left-[5%] h-[50%] md:w-[40%] w-[40%]">
          <Images
            url="https://ik.imagekit.io/adsrc2244/wedding/heroImg.jpg?updatedAt=1759479878568"
            video={false}
            height="100%"
            width="100%"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Herosection;
