"use client";

import React from "react";
import { SwiperSlide } from "swiper/react";
import * as about_images from "assets/about";
import { BsStarFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import Image from "next/image";
import Carousel from "../Carousel";
import "./TestimonialCarousel.css";

const TestimonialCarousel = () => {
  const slide: number = 3;
  return (
    <>
      <Carousel slides={slide}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
          return (
            <SwiperSlide key={item}>
              <div>
                <div
                  className="testimonialContent sm:py-8 pt-6 "
                  // key={`testimonials${ind}`}
                >
                  <div
                    style={{
                      background:
                        "linear-gradient(234.02deg, #AD4328 1.14%, #8447E9 43.92%, #8447E9 91.78%),linear-gradient(0deg, #FEFEFF, #FEFEFF)",
                    }}
                    className="box dark:bg-clBlack  shadow-lg mt-8 p-0.5 rounded-lg"
                  >
                    <div className="sm:px-3 px-7 py-4 rounded-lg bg-white relative group flex flex-col items-center">
                      <div className="relative">
                        <Image
                          className="relative border-2 border-transparent rounded-full -top-20"
                          src={about_images.commentImg}
                          alt=""
                        />
                        <MdVerified
                          className="absolute top-0 right-1"
                          fill="#5AA753"
                          size={25}
                        />
                      </div>
                      <div className="-mt-14 ">
                        <h3 className="font-Montserrat text-sm sm:text-base dark:text-white font-bold text-center uppercase">
                          Steven Creacy
                        </h3>
                        <p className="font-Montserrat text-xs sm:text-sm font-normal text-gray-400 dark:text-white text-center">
                          Technical PM, Reliable Group
                        </p>
                        <p className="font-Montserrat text-sm dark:text-white sm:text-base font-normal my-6 text-center mx-auto w-10/12">
                          “All service provided is so perfect and fast, and im
                          so happy to order from this company”
                        </p>
                        <div className="flex flex-col sm:flex-row justify-between items-center w-full">
                          <div className="flex items-center">
                            <h2 className="mt-1 dark:text-white text-lg font-semibold font-Montserrat">
                              5.0
                            </h2>
                            <ul className="flex items-center mt-1">
                              {[1, 2, 3, 4, 5].map((stars, ind) => (
                                <li
                                  className="mx-1"
                                  key={`starRating${ind + stars}`}
                                >
                                  <BsStarFill fill="#FFCC17" />
                                </li>
                              ))}
                            </ul>
                          </div>
                          <p className="text-sm font-normal text-gray-500 dark:text-white mt-2 sm:mt-0">
                            08-10-2022
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Carousel>
    </>
  );
};

export default TestimonialCarousel;
