"use client";

import { useMemo } from "react";
import Image from "next/image";
import * as blogs from "assets/blog";
import * as stack_images from "assets/stack";
import CardView from "@/components/CardView";
import SectionHeading from "@/components/SectionHeading";
import {
  arVr,
  blockChain,
  cloud,
  gameDevelopment,
  metaverse,
  mobile,
  uiUx,
  webDevelopment,
} from "@globals";
import FooterBanner from "@/components/FooterBanner";
import DevelopmentProcess from "./DevelopmentProcess";

type servicesProps = {
  icon: any;
  title: string;
  description: string;
};

const Services = () => {
  const services: servicesProps[] = useMemo(
    () => [
      {
        icon: gameDevelopment,
        title: "Game Development",
        description:
          "We provide high-end game development services, we bring your ideas into ...",
      },
      {
        icon: mobile,
        title: "Mobile",
        description:
          "We built mobile apps to serve different mobile devices.Leverage the ...",
      },
      {
        icon: uiUx,
        title: "UI/UX Design",
        description:
          "We deliver smart user experience, imitating a well-balanced connection...",
      },
      {
        icon: webDevelopment,
        title: "Web Development",
        description:
          "We offer one of the best website designing and development services ...",
      },
      {
        icon: blockChain,
        title: "BlockChain",
        description:
          "It is a decentralized, distributed public ledger used to collect information ...",
      },
      {
        icon: metaverse,
        title: "Metaverse",
        description:
          "Users travers a virtual world that mimics aspects of physical world using ...",
      },
      {
        icon: arVr,
        title: "AR/VR",
        description:
          "The integration of digital information with the user's environment in real time ...",
      },
      {
        icon: cloud,
        title: "Cloud",
        description:
          "We provide on demand cloud computing services auch as AWS and AZURE and...",
      },
    ],
    []
  );

  return (
    <>
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
              Services
            </h3>
          </div>
        </div>
      </div>

      <section className="pb-16 pt-8">
        <div className="container mx-auto">
          <SectionHeading
            primary_title="for Quick Development"
            secondary_title=" Software Develoment Platforms & Tools&nbsp;"
          />
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-4 mt-16">
              {services.map((val, index) => (
                <CardView
                  key={index}
                  learnMoreCheck
                  cardHeadingCheck
                  imageSrc={val.icon}
                  text={val.description}
                  headingText={val.title}
                  imageClassName="w-20 -ml-2"
                  textClassName="text-sm font-normal leading-4 text-gray-500 mt-2 w-9/12 tracking-tight"
                  customClassName="w-64 pl-5 pr-1 border-4 border-white border-x-0 border-t-0 pt-5 pb-2 bg-white hover:border-b-4 hover:border-primary1 hover:cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <DevelopmentProcess
        is_desc_gray
        sub_heading="Our"
        is_gray_bulletsIcon
        primary_title="Process"
        secondary_title="Development&nbsp;"
        side_img={blogs.blog_image}
        bulletContent={[
          "Requirement Identification",
          "Quality Assurance",
          "Engineering",
          "Deployment",
        ]}
        description="We fuel the growth of purpose driven brands through strategy
                activation, design empowerment, and market adoption. From
                cultivating new ideas to connecting the dots for customers or
                users, these are our core principles."
      />
      <FooterBanner />
    </>
  );
};

export default Services;
