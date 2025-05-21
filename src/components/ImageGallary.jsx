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
      <div
        className="w-full h-[500px] sm:max-h-[600px]"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* <img
        src={img}
        alt=""
        className="object-contain w-[500px] h-[500px]"
      /> */}
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
