import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";

const LivroSwiper = () => {
  return (
    <Swiper
      className="w-screen"
      spaceBetween={1}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className=" bg-red-700">1</SwiperSlide>
      <SwiperSlide className="w-[10px]">2</SwiperSlide>
      <SwiperSlide className="w-[10px]">3</SwiperSlide>
      <SwiperSlide className="w-[10px]">4</SwiperSlide>
    </Swiper>
  );
};

export default LivroSwiper;
