// "use client";

import Image from "next/image";
import { Metadata } from "next";
import * as stack_images from "assets/stack";
import StackTabs from "./StackTabs";
import FooterBanner from "@/components/FooterBanner";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Tech Stack",
  description: "Technology Stacks",
};
export default function Stacks() {
  return (
    <>
      <div className="bg-cover bg-stackBg">
        <div className="container mx-auto py-8">
          <div
            className="flex flex-row bg-primary1 h-14 w-96 rounded-lg"
            style={{
              border: "1.58px solid",
              borderImageSource:
                "linear-gradient(269.23deg, rgba(132, 71, 233, 0.6) 0.62%, rgba(62, 118, 255, 0.6) 51.96%, rgba(255, 67, 187, 0.6) 100.19%)",
            }}>
            <div
              className="flex justify-center gap-2 bg-tabColor items-center h-full w-44 rounded-lg"
              style={{
                clipPath: "polygon(0% 0%, 90% 0, 100% 50%, 90% 100%, 0% 100%)",
              }}>
              <Image src={stack_images.home_svg} alt="home icon here" />
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
        </div>

        <SectionHeading
          primary_title="For Quick development"
          secondary_title="software development platforms & Tools&nbsp;"
        />

        <div className="flex justify-center p-7">
          <StackTabs />
        </div>
      </div>
      <FooterBanner />
    </>
  );
}
