import React, { useEffect, useState } from "react";
import Images from "./Images";
import { Link } from "react-router";
import { motion } from "framer-motion";

function Services() {
  const [viewportAmount, setViewportAmount] = useState(0.2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Mobile viewport → trigger sooner
        setViewportAmount(0.1);
      } else {
        // Tablet/Desktop → smoother, trigger later
        setViewportAmount(0.2);
      }
    };

    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: viewportAmount }}
      className="flex flex-col justify-center items-center gap-5"
    >
      {/* Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: viewportAmount }}
        className="bg-zinc-400 px-4 py-2 mt-10 text-white"
      >
        Our Services
      </motion.button>

      {/* Heading with Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true, amount: viewportAmount }}
        className="inline-flex items-center justify-center w-full relative"
      >
        <hr className="w-full m-5 h-0.5 my-5 bg-zinc-400 border-0" />
        <span className="px-3 text-xl text-center sm:text-4xl text-zinc-800 -translate-x-1/2 bg-white absolute left-1/2 head-font">
          What We Do Best?
        </span>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true, amount: viewportAmount }}
        className="px-5 sm:w-[50%] text-center text-zinc-600"
      >
        <p>
          We capture genuine moments, timeless emotions, and unforgettable love
          stories with artistry, passion, and a deep attention to every detail.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="flex flex-col w-full sm:flex-row justify-evenly items-center gap-5 sm:gap-0">
        {/* Pre Wedding */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: viewportAmount }}
          className="flex w-[80%] sm:w-[25%] flex-col justify-center items-center"
        >
          <Link to="/preweddings" className="block w-full">
            <Images
              url="./assets/images/thumbnails/preWedThumbnail.jpg"
              width="100%"
            />
          </Link>
          <p className="py-2 text-xl head-font text-zinc-800">Pre Wedding</p>
        </motion.div>

        {/* Weddings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: viewportAmount }}
          className="flex w-[80%] sm:w-[25%] flex-col justify-center items-center"
        >
          <Link to="/weddings" className="block w-full">
            <Images
              url="./assets/images/thumbnails/weddingThumbnail.jpg"
              width="100%"
            />
          </Link>
          <p className="py-2 head-font text-zinc-800 text-xl">Weddings</p>
        </motion.div>

        {/* Shoots and Events */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: viewportAmount }}
          className="flex w-[80%] sm:w-[25%] flex-col justify-center items-center"
        >
          <Link to="/shoots-events" className="block w-full">
            <Images
              url="./assets/images/thumbnails/shootsThumbnail.jpg"
              width="100%"
            />
          </Link>
          <p className="py-2 head-font text-zinc-800 text-xl">
            Shoots and Events
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Services;
