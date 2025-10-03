import {
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Footer() {
  const [viewportAmount, setViewportAmount] = useState(0.2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setViewportAmount(0.1); // mobile: trigger earlier
      } else {
        setViewportAmount(0.2); // desktop
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
    >
      {/* Logo and Info */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: viewportAmount }}
        className="px-2 py-10 text-center border-l-2 mx-2 sm:mx-15 border-r-2 border-zinc-400"
      >
        <img
          src="./assets/images/logo/logo.png"
          alt="Candid Dreams"
          className="w-50 mx-auto"
        />
        <p className="text-xl my-5 text-zinc-600">
          Near Gulab Garh, <br />
          Patrakar colony, Jaipur
        </p>
        <div className="flex justify-center gap-5">
          <a
            text="whatsapp"
            href="https://wa.me/918114412845"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="2x"
              className="hover:text-green-800"
            />
          </a>
          <a
            href="https://www.youtube.com/@candiddreams8412"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              size="2x"
              className="hover:text-red-700"
            />
          </a>
          <a
            href="https://www.instagram.com/thecandiddreams/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className="hover:text-pink-700"
            />
          </a>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: viewportAmount }}
        className="flex justify-center items-center mb-10 relative"
      >
        <hr className="w-full h-0.5 bg-zinc-400 border-0" />
        <span className="px-3 text-sm sm:text-lg text-center text-zinc-600 -translate-x-1/2 bg-white absolute left-1/2">
          © 2025 Candid Dreams
        </span>
      </motion.div>
    </motion.div>
  );
}

export default Footer;
