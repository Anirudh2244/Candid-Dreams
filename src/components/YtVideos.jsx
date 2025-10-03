import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function YtVideos() {
  const [viewportAmount, setViewportAmount] = useState(0.2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setViewportAmount(0.1); // mobile: trigger earlier
      } else {
        setViewportAmount(0.2); // desktop: trigger later
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: viewportAmount }}
      className="mt-10"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: viewportAmount }}
        className="inline-flex items-center justify-center w-full mb-10 sm:mb-5 relative"
      >
        <hr className="w-full m-5 h-0.5 my-5 bg-zinc-400 border-0" />
        <span className="px-3 text-xl head-font sm:text-4xl text-zinc-800 -translate-x-1/2 text-center bg-white absolute left-1/2">
          Moments
        </span>
      </motion.div>

      {/* YouTube Videos */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: viewportAmount }}
        className="flex flex-col sm:flex-row gap-5 mx-2 sm:mx-5 justify-around items-center"
      >
        <motion.iframe
          className="w-full sm:w-1/2 aspect-16/9"
          src="https://www.youtube.com/embed/vI7wbxMLXfE?si=MkRqzQPALFTWKgp2"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: viewportAmount }}
        ></motion.iframe>

        <motion.iframe
          className="w-full sm:w-1/2 aspect-16/9"
          src="https://www.youtube.com/embed/KMyPcLvGtXs?si=Pyf3-4QQFsvcXy0n"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: viewportAmount }}
        ></motion.iframe>
      </motion.div>
    </motion.div>
  );
}

export default YtVideos;
