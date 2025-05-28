import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

export default function ImageGallary({ imgArr }) {
  const images = imgArr.map((img, index) => (
    <SwiperSlide key={index}>
      {/* <div
        className="w-full h-[500px] sm:max-h-[600px]"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div> */}

      <div className="w-full h-[500px] sm:max-h-[600px] flex justify-center items-center overflow-hidden ">
        <img
          src={img}
          alt="Descriptive alt text"
          className="max-h-full max-w-full object-contain select-none"
          draggable="false"
          loading="lazy"
        />
      </div>
    </SwiperSlide>
  ));
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper flex justify-center items-center w-full h-full"
    >
      {images}
    </Swiper>
  );
}
