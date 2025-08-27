"use client";
import React, { useMemo, useState } from "react";
import * as stack_images from "assets/stack";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CustomTabs from "@/components/CustomTabs";
import AllSection from "./AllSection";

const types: Record<number, string> = {
  0: "Website",
  1: "UI/UX Design ",
  2: "Mobile Application",
  3: "Games",
};

const data = [
  { img: "", text: "" },
  { img: "", text: "" },
  { img: "", text: "" },
  { img: "", text: "" },
];
const Page = () => {
  const [type, setType] = useState<string>("All");
  const ourProcessDataTabs = useMemo(
    () => [
      {
        label: "All",
        content: <AllSection />,
      },
      {
        label: "Website",
        content: <AllSection />,
      },
      {
        label: "Mobile Application",
        content: <AllSection />,
      },
      {
        label: "Games",
        content: <AllSection />,
      },
    ],
    []
  );
  const dataTabs = useMemo(
    () => [
      {
        label: "All",
        content: <AllSection />,
      },
      {
        label: "Website",
        content: <AllSection />,
      },
      {
        label: "Mobile Application",
        content: <AllSection />,
      },
      {
        label: "Games",
        content: <AllSection />,
      },
    ],
    []
  );
  const handleTypeChange = (index: number) => {
    setType(types[index]);
  };
  return (
    // Home Tab
    <div className="container mx-auto mb-10 bg-portBg bg-cover bg-center bg-no-repeat ">
      <div className=" mx-auto py-8">
        <div
          className="flex flex-row bg-primary1 h-14 w-80 rounded-lg"
          style={{
            border: "1.58px solid",
            borderImageSource:
              "linear-gradient(269.23deg, rgba(132, 71, 233, 0.6) 0.62%, rgba(62, 118, 255, 0.6) 51.96%, rgba(255, 67, 187, 0.6) 100.19%)",
          }}
        >
          <div
            className="flex justify-center gap-2 bg-tabColor items-center h-full w-56 rounded-lg"
            style={{
              clipPath: "polygon(0% 0%, 90% 0, 100% 50%, 90% 100%, 0% 100%)",
            }}
          >
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
      {/* Section Heading  */}
      <SectionHeading
        primary_title="Portfolio"
        secondary_title="our&nbsp;"
        secondary_detail="We are here to empower business leaders."
      />
      {/* Tabs Component  */}
      <CustomTabs
        dataTabs={ourProcessDataTabs}
        handleTypeChange={handleTypeChange}
      />
    </div>
  );
};

export default Page;
