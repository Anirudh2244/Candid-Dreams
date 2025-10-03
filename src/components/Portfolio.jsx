import React, { useEffect, useState } from "react";
import WeddingModal from "./WeddingModal";
import { motion } from "framer-motion";

const WEDDINGS = [
  {
    urls: [
      "https://ik.imagekit.io/adsrc2244/wedding/w1/1.jpg?updatedAt=1748422222798",
      "https://ik.imagekit.io/adsrc2244/wedding/w1/2.jpg?updatedAt=1748422222884",
      "https://ik.imagekit.io/adsrc2244/wedding/w1/3.jpg?updatedAt=1748422221681",
      "https://ik.imagekit.io/adsrc2244/wedding/w1/4.jpg?updatedAt=1748422222634",
      "https://ik.imagekit.io/adsrc2244/wedding/w1/5.jpg?updatedAt=1748422222415",
    ],
    name: "Megha & Saurabh",
  },
  {
    urls: [
      "https://ik.imagekit.io/adsrc2244/wedding/w2/1.jpg?updatedAt=1748422229548",
      "https://ik.imagekit.io/adsrc2244/wedding/w2/2.jpg?updatedAt=1748422228545",
      "https://ik.imagekit.io/adsrc2244/wedding/w2/3.jpg?updatedAt=1748422228275",
      "https://ik.imagekit.io/adsrc2244/wedding/w2/4.jpg?updatedAt=1748422227817",
      "https://ik.imagekit.io/adsrc2244/wedding/w2/5.jpg?updatedAt=1748422228400",
    ],
    name: "Nehal & Akshay",
  },
  {
    urls: [
      "https://ik.imagekit.io/adsrc2244/wedding/w3/1.jpg?updatedAt=1748422232378",
      "https://ik.imagekit.io/adsrc2244/wedding/w3/2.jpg?updatedAt=1748422231388",
      "https://ik.imagekit.io/adsrc2244/wedding/w3/3.jpg?updatedAt=1748422231590",
      "https://ik.imagekit.io/adsrc2244/wedding/w3/5.jpg?updatedAt=1748422231304",
      "https://ik.imagekit.io/adsrc2244/wedding/w3/4.jpg?updatedAt=1748422230075",
    ],
    name: "Nikita & Saurabh",
  },
  {
    urls: [
      "https://ik.imagekit.io/adsrc2244/wedding/w4/1.jpg?updatedAt=1748422233583",
      "https://ik.imagekit.io/adsrc2244/wedding/w4/2.jpg?updatedAt=1748422232564",
      "https://ik.imagekit.io/adsrc2244/wedding/w4/3.jpg?updatedAt=1748422233387",
      "https://ik.imagekit.io/adsrc2244/wedding/w4/4.jpg?updatedAt=1748422232432",
      "https://ik.imagekit.io/adsrc2244/wedding/w4/5.jpg?updatedAt=1748422232852",
    ],
    name: "Saumaya & Ravindra",
  },
  {
    urls: [
      "https://ik.imagekit.io/adsrc2244/wedding/w5/11.jpg?updatedAt=1748422225669",
      "https://ik.imagekit.io/adsrc2244/wedding/w5/2.jpg?updatedAt=1748422228230",
      "https://ik.imagekit.io/adsrc2244/wedding/w5/3.jpg?updatedAt=1748422228309",
      "https://ik.imagekit.io/adsrc2244/wedding/w5/4.jpg?updatedAt=1748422226077",
      "https://ik.imagekit.io/adsrc2244/wedding/w5/5.jpg?updatedAt=1748422227028",
    ],
    name: "Shefali & Rahul",
  },
  {
    urls: [
      "https://ik.imagekit.io/adsrc2244/wedding/w6/1.jpg?updatedAt=1748422221687",
      "https://ik.imagekit.io/adsrc2244/wedding/w6/2.jpg?updatedAt=1748422223056",
      "https://ik.imagekit.io/adsrc2244/wedding/w6/3.jpg?updatedAt=1748422222306",
      "https://ik.imagekit.io/adsrc2244/wedding/w6/4.jpg?updatedAt=1748422222687",
      "https://ik.imagekit.io/adsrc2244/wedding/w6/4.jpg?updatedAt=1748422222687",
    ],
    name: "Sushila & Sambhu",
  },
];

function Portfolio() {
  const [viewportAmount, setViewportAmount] = useState(0.2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setViewportAmount(0.1); // Mobile: trigger sooner
      } else {
        setViewportAmount(0.2); // Desktop: trigger slightly later
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
      className="flex justify-center items-center flex-col sm:gap-3 mt-10"
    >
      {/* Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: viewportAmount }}
        className="bg-zinc-400 text-white px-4 py-2 mt-10"
      >
        Our Works
      </motion.button>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: viewportAmount }}
        className="inline-flex items-center justify-center w-full mb-10 sm:mb-5 relative"
      >
        <hr className="w-full m-5 h-0.5 my-5 bg-zinc-400 border-0" />
        <span className="px-3 text-xl head-font sm:text-4xl text-zinc-800 -translate-x-1/2 text-center bg-white absolute left-1/2">
          Latest Projects
        </span>
      </motion.div>

      {/* Grid of Weddings */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: viewportAmount }}
        className="w-full md:pr-5 pb-5"
      >
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mx-4 mr-8 sm:mx-15">
          {WEDDINGS.map((wedding, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: viewportAmount }}
            >
              <WeddingModal name={wedding.name} url={wedding.urls} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Portfolio;
