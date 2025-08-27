"use client";

import { Swiper } from "swiper/react";
import { Autoplay } from "swiper";
import React, { ReactNode } from "react";
import "swiper/css";
// import "./carousel.css";

type CarouselProps = {
  slides: number;
  children: ReactNode;
};

export default function Carousel(props: CarouselProps) {
  const { slides, children } = props;
  return (
    <div
      style={{
        height: "450px",
      }}
    >
      <Swiper
        slidesPerView={slides}
        spaceBetween={20}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {children}
      </Swiper>
    </div>
  );
}
