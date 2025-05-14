import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

export default function ImageGallary({imgArr}) {

    const images = imgArr.map((img, index) => <SwiperSlide key={index}><img src={img} alt="" className="mx-auto max-h-[500px] sm:max-h-[600px]" /></SwiperSlide>)
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
