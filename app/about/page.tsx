import React from "react";
import * as about_images from "assets/about";
import Image from "next/image";
import Stats from "./Stats";
import Core from "./Core";
import FooterBanner from "@/components/FooterBanner";
import TestimonialCarousel from "../components/Carousel/TestimonialCarousel/TestimonialCarousel";
// import Carousel from "./AboutCarousel";
const page = () => {
  const cardData = [
    {
      heading: "Our Mission",
      img: about_images.mission,
      paragraph:
        "Our mission combines work and talent. We seek to achieve extraordinary results by helping our clients make distinctive improvements.    ",
    },
    {
      heading: "Our Vision",
      img: about_images.vission,
      paragraph:
        "Our passion for what we do is what moti- vates us. Our vision guides our business every day: to provide the world with the best IT consulting and software develop- ment services in US while taking care of our people and honoring our values.    ",
    },
    {
      heading: "Our Values",
      img: about_images.values,
      paragraph:
        "Ciel values serving technology to its very best. Our company has been able to secure several big clients and multiple certifications which serves as a proof of our speedy success.    ",
    },
  ];
  return (
    <>
      <div className="bg-secondary2">
        <div className="container mx-auto pt-6">
          <div
            className="flex flex-row bg-primary1 h-14 w-96 rounded-lg"
            style={{
              border: "1.58px solid",
              borderImageSource:
                "linear-gradient(269.23deg, rgba(132, 71, 233, 0.6) 0.62%, rgba(62, 118, 255, 0.6) 51.96%, rgba(255, 67, 187, 0.6) 100.19%)",
            }}
          >
            <div
              className="flex justify-center gap-2 bg-tabColor items-center h-full w-44 rounded-lg"
              style={{
                clipPath: "polygon(0% 0%, 90% 0, 100% 50%, 90% 100%, 0% 100%)",
              }}
            >
              <Image src={about_images.home} alt="home icon here" />
              <h3 className=" text-md font-Montserrat text-left text-primary1 font-bold tracking-wide">
                Company
              </h3>
            </div>
            <div className="flex justify-center items-center h-full w-56">
              <h3 className="text-md font-Montserrat capitalize text-center text-mainBg tracking-wide">
                Technology Stack
              </h3>
            </div>
          </div>

          <div className="pt-12 pb-14 flex gap-3 flex-row  ">
            {cardData.map((item, i) => {
              return (
                <div
                  key={i}
                  className="w-4/12 px-8 bg-mainBg relative shadow-[52px_0px_52px_-12px_#7F7F7F21] rounded-lg border-box hover:border border-indigo-600 transition duration-200"
                >
                  <Image
                    height={55}
                    className="pt-8"
                    src={item.img}
                    alt="card icon here"
                  />
                  <h2 className="pt-6 font-Montserrat text-2xl font-bold text-primary1 text-capitalize">
                    {item.heading}
                  </h2>
                  <p className="py-2.5 font-Montserrat text-base font-normal text-ptColor normal-case mb-5">
                    {item.paragraph}{" "}
                  </p>
                  {i === 1 ? (
                    <div className="absolute bottom-0 right-0">
                      <Image height={100} src={about_images.logo} alt="" />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
          <Stats />
          <Core />

          <div>
            <div className="flex align-center flex-col items-center pt-14 pb-20">
              <h2 className="font-montessrat font-bold text-3xl uppercase">
                We always listen to our clients.
              </h2>
              <p className="font-montessrat font-medium	 text-base capitalize ">
                That Speak!
              </p>
            </div>
            {/* <Carousel /> */}
            <TestimonialCarousel />
          </div>
        </div>
      </div>
      <FooterBanner />
    </>
  );
};

export default page;
