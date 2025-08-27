import React from "react";
import * as about_images from "assets/about";
import * as partner_images from "assets/partner";
import Image from "next/image";
import FooterBanner from "../components/FooterBanner";

const data = [
  { img: partner_images.logo1 },
  { img: partner_images.logo2 },
  { img: partner_images.logo3 },
  { img: partner_images.logo4 },
  { img: partner_images.logo5 },
  { img: partner_images.logo6 },
  { img: partner_images.logo7 },
  { img: partner_images.logo8 },
  { img: partner_images.logo9 },
  { img: partner_images.logo10 },
  { img: partner_images.logo11 },
  { img: partner_images.logo12 },
  { img: partner_images.logo13 },
  { img: partner_images.logo14 },
  { img: partner_images.logo15 },
  { img: partner_images.logo16 },
  { img: partner_images.logo17 },
  { img: partner_images.logo18 },
];

const page = () => {
  return (
    <>
      <div className="bg-bgPartner pb-14">
        <div className="container mx-auto pt-6">
          {/* Partner Tab  */}

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
                Partners
              </h3>
            </div>
          </div>

          {/* Partner Heading  */}

          <div className="py-7">
            <div className="flex justify-center ">
              <h2 className="font-Montserrat text-2xl font-bold text-black uppercase w-3/5	text-center ">
                <span className="font-Montserrat text-2xl font-bold text-primary1 uppercase text-center pe-2">
                  Look out for the latest trends
                </span>
                and find out our reviews and updates on all you need to know
                about.
              </h2>
            </div>
            <p className="font-Montserrat text-lg font-medium text-black capitalize text-center ">
              Lets Work Together
            </p>
          </div>

          {/* Partners Card Layout  */}

          <div className="pt-5 flex justify-center gap-5">
            {data.slice(0, 6).map((item, index) => {
              return (
                <div key={index} className="flex justify-around w-1/6">
                  <Image src={item.img} alt="logo" />
                </div>
              );
            })}
          </div>
          <div className="pt-5 flex justify-center gap-5">
            {data.slice(6, 11).map((item, index) => {
              return (
                <div key={index} className="flex justify-around w-1/6">
                  <Image src={item.img} alt="logo" />
                </div>
              );
            })}
          </div>
          <div className="pt-5 flex justify-center gap-5">
            {data.slice(11, 15).map((item, index) => {
              return (
                <div key={index} className="flex justify-around w-1/6">
                  <Image src={item.img} alt="logo" />
                </div>
              );
            })}
          </div>
          <div className="pt-5 flex justify-center gap-5">
            {data.slice(14, 17).map((item, index) => {
              return (
                <div key={index} className="flex justify-around w-1/6">
                  <Image src={item.img} alt="logo" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Footer Banner  */}
      <FooterBanner />
    </>
  );
};

export default page;
