import React, { useEffect, useState } from "react";
import Images from "./Images";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Services() {
  const [viewportAmount, setViewportAmount] = useState(0.2);

  useEffect(() => {
    const handleResize = () => {
      setViewportAmount(window.innerWidth < 640 ? 0.1 : 0.2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const AnimatedDiv = ({ children, delay = 0, ...props }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: viewportAmount }}
      {...props}
    >
      {children}
    </motion.div>
  );

  const servicesData = [
    {
      title: "Pre Wedding",
      link: "/preweddings",
      img: "./assets/images/thumbnails/preWedThumbnail.jpg",
      delay: 0.5,
    },
    {
      title: "Weddings",
      link: "/weddings",
      img: "./assets/images/thumbnails/weddingThumbnail.jpg",
      delay: 0.6,
    },
    {
      title: "Shoots and Events",
      link: "/shoots-events",
      img: "./assets/images/thumbnails/shootsThumbnail.jpg",
      delay: 0.7,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: viewportAmount }}
      className="flex flex-col justify-center items-center gap-5"
    >
      <AnimatedDiv
        as="button"
        delay={0.2}
        className="bg-zinc-400 px-4 py-2 mt-10 text-white"
      >
        Our Services
      </AnimatedDiv>

      <AnimatedDiv
        delay={0.3}
        className="inline-flex items-center justify-center w-full relative"
      >
        <hr className="w-full m-5 h-0.5 my-5 bg-zinc-400 border-0" />
        <span className="px-3 text-xl text-center sm:text-4xl text-zinc-800 -translate-x-1/2 bg-white absolute left-1/2 head-font">
          What We Do Best?
        </span>
      </AnimatedDiv>

      <AnimatedDiv
        delay={0.4}
        className="px-5 sm:w-[50%] text-center text-zinc-600"
      >
        <p>
          We capture genuine moments, timeless emotions, and unforgettable love
          stories with artistry, passion, and a deep attention to every detail.
        </p>
      </AnimatedDiv>

      <div className="flex flex-col w-full sm:flex-row justify-evenly items-center gap-5 sm:gap-0">
        {servicesData.map((service, index) => (
          <AnimatedDiv
            key={index}
            delay={service.delay}
            className="flex w-[80%] sm:w-[25%] flex-col justify-center items-center"
          >
            <Link to={service.link} className="block w-full">
              <Images url={service.img} width="100%" />
            </Link>
            <p className="py-2 head-font text-zinc-800 text-xl">
              {service.title}
            </p>
          </AnimatedDiv>
        ))}
      </div>
    </motion.div>
  );
}

export default Services;
