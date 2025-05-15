import {
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <div>
      <div className="px-2 py-10 text-center border-l-2 mx-5 sm:mx-15 border-r-2 border-zinc-400">
        <img
          src="https://i.ibb.co/F4FxYZPL/logo-removebg-preview.png"
          alt="Candid Dreams"
          className="w-50 mx-auto"
        />
        <p className="text-xl my-5 text-zinc-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
          impedit.
        </p>
        <div>
          <a text="whatsapp" href="https://wa.me/918114412845" target="_blank">
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="2x"
              className="hover:text-green-800"
            />
          </a>
          <a
            href="https://www.youtube.com/@candiddreams8412"
            target="_blank"
            className="mx-5"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              size="2x"
              className="hover:text-red-700"
            />
          </a>
          <a href="https://www.instagram.com/thecandiddreams/" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className=" hover:text-pink-700"
            />
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center mb-10 ">
        <hr className="w-full h-0.5  bg-zinc-400 border-0" />
        <span className="px-3 text-xl text-center text-zinc-600 -translate-x-1/2 bg-white absolute left-1/2">
          © 2025 Candid Dreams
        </span>
      </div>
    </div>
  );
}

export default Footer;
