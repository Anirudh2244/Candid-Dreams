import { HeartHandshake, Video } from "lucide-react";
import React, { useEffect, useState } from "react";
import Images from "./Images";
import { motion } from "framer-motion";

function Experience() {
  const [viewportAmount, setViewportAmount] = useState(0.2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setViewportAmount(0.1); // mobile: trigger earlier
      } else {
        setViewportAmount(0.2); // desktop: trigger later
      }
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: viewportAmount }}
      className="flex flex-col sm:flex-row justify-around sm:items-center mt-15"
    >
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: viewportAmount }}
        className="flex flex-col items-start gap-5 px-2 sm:px-5"
      >
        <div className="bg-zinc-400 text-white px-4 py-2">About us</div>
        <div className="text-4xl head-font text-zinc-800">
          What Sets Us <br />
          Apart!
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: viewportAmount }}
          className="grid grid-cols-2 gap-4 justify-center items-center"
        >
          <div className="p-2">
            <p className="text-3xl text-zinc-800 font-bold">100+</p>
            <p className="text-zinc-800">Weddings Covered</p>
          </div>
          <div className="p-2">
            <p className="text-3xl font-bold text-zinc-800">10+</p>
            <p className="text-zinc-800">Years of Experience</p>
          </div>
          <div className="p-2">
            <p className="text-3xl text-zinc-800 font-bold">
              <Video size={40} />
            </p>
            <p className="text-zinc-800">Storytelling</p>
          </div>
          <div className="p-2">
            <p className="text-3xl text-zinc-800 font-bold">
              <HeartHandshake size={40} />
            </p>
            <p className="text-zinc-800">Professionalism</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: viewportAmount }}
        className="relative w-full h-4/5 sm:max-w-[40%] aspect-[16/9]"
      >
        <div className="absolute h-full w-[50%] object-cover right-[5%] top-0 z-10">
          <Images
            url="./assets/images/aboutus/aboutusimg1.jpg"
            height="100%"
            width="100%"
          />
        </div>
        <div className="absolute h-full w-[50%] object-cover top-[20%] left-[5%] z-0">
          <Images
            url="./assets/images/aboutus/aboutusimg2.jpg"
            height="100%"
            width="100%"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Experience;
