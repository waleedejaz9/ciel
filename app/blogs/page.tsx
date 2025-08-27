"use client";

import Image from "next/image";
import * as stack_images from "assets/stack";
import FooterBanner from "@/components/FooterBanner";
import BlogTabs from "./BlogTabs";
import SectionHeading from "@/components/SectionHeading";

const page = () => {
  return (
    <>
      <div>
        <div className="container mx-auto py-8">
          <div
            className="flex flex-row bg-primary1 h-14 w-80 rounded-lg"
            style={{
              border: "1.58px solid",
              borderImageSource:
                "linear-gradient(269.23deg, rgba(132, 71, 233, 0.6) 0.62%, rgba(62, 118, 255, 0.6) 51.96%, rgba(255, 67, 187, 0.6) 100.19%)",
            }}>
            <div
              className="flex justify-center gap-2 bg-tabColor items-center h-full w-56 rounded-lg"
              style={{
                clipPath: "polygon(0% 0%, 90% 0, 100% 50%, 90% 100%, 0% 100%)",
              }}>
              <Image src={stack_images.home_svg} alt="home icon here" />
              <h3 className=" text-md font-Montserrat text-left text-primary1 font-bold tracking-wide">
                Company
              </h3>
            </div>
            <div className="flex justify-center items-center h-full w-44">
              <h3 className="text-md font-Montserrat capitalize text-center text-mainBg tracking-wide">
                Blogs
              </h3>
            </div>
          </div>
        </div>

        <SectionHeading
          isPrimaryLeft
          primary_title="Look out for latest trends&nbsp;"
          secondary_title="and find out our reviews and updates on all you need to know about."
        />
      </div>
      <BlogTabs />
      <FooterBanner />
    </>
  );
};

export default page;
