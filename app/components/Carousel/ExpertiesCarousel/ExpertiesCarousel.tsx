"use client";

import React from "react";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import Carousel from "../Carousel";

interface MyComponentProps {
  data: { image: string; text: string }[];
}
const ExpertiesCarousel = (props: MyComponentProps) => {
  const { data } = props;
  const slide: number = 4;
  return (
    <>
      <Carousel slides={slide}>
        {data.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="relative">
                <Image
                  style={{ borderRadius: "8px" }}
                  className="img"
                  src={item.image}
                  alt="Slider Images here"
                />
                <h2 className="font-montesserat text-white font-bold text-xl absolute bottom-5 left-2/4 w-9/12 text-center -translate-x-2/4">
                  {item.text}
                </h2>
              </div>
            </SwiperSlide>
          );
        })}
      </Carousel>
    </>
  );
};

export default ExpertiesCarousel;
