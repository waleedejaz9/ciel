"use client";
import React, { useState } from "react";
import * as stack_images from "assets/stack";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import Input from "@/components/Input";
import DragInput from "@/components/DragInput";

const Page = () => {
  const [value, setValue] = useState<{
    name: string;
    project: string;
    email: string;
    budget: number | string;
    number: number | string;
    attachment: string | File[];
    description: string;
  }>({
    name: "",
    project: "",
    email: "",
    budget: "",
    number: "",
    attachment: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({ ...prevValue, [name]: value }));
  };

  console.log(value);
  return (
    <div className="bg-quoteBg">
      <div className="mx-auto py-8">
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
              Get Free Quote
            </h3>
          </div>
        </div>
      </div>
      <div>
        {/* Section Heading  */}
        <SectionHeading
          primary_title="for Quick Development"
          secondary_title="Software Development Platforms & Tools&nbsp;"
        />
      </div>

      <div
        style={{
          boxShadow:
            "0px 44.57912063598633px 35.66329574584961px 0px rgba(173, 173, 173, 0.06)",
        }}
        className="w-10/12 mx-auto rounded-lg my-10"
      >
        <form action="">
          <div className="flex flex-wrap justify-between px-8 py-6 ">
            <div style={{ width: "47%" }}>
              <Input
                name="name"
                placeholder="Please enter your name"
                optional=""
                type="text"
                value={value.name}
                handleChange={handleChange}
              />
            </div>
            <div style={{ width: "47%" }}>
              <Input
                name="project"
                placeholder="Project type"
                optional=""
                type="text"
                value={value.project}
                handleChange={handleChange}
              />
            </div>
            <div style={{ width: "47%" }}>
              <Input
                name="email"
                placeholder="Please enter your email"
                optional=""
                type="email"
                value={value.email}
                handleChange={handleChange}
              />
            </div>
            <div style={{ width: "47%" }}>
              <Input
                name="budget"
                type="number"
                optional=""
                placeholder="Write Your Mind"
                value={value.budget}
                handleChange={handleChange}
              />
            </div>
            <div style={{ width: "47%" }}>
              <Input
                name="number"
                type="number"
                optional=""
                placeholder="************"
                value={value.number}
                handleChange={handleChange}
              />
            </div>
            <div style={{ width: "47%" }}>
              <DragInput
                name="attachment"
                optional="(optional)"
                value={value.attachment}
                setValue={setValue}
              />
            </div>
            <div className="w-full">
              <label
                className="font-Montserrat font-xl font-bold text-left capitalize text-input block pt-3.5"
                htmlFor=""
              >
                Description
              </label>
              <textarea
                className="bg-inputBg my-3.5 rounded-lg px-2.5 w-full"
                value={value.description}
                placeholder="Write Details"
                name="description"
                id=""
                cols={100}
                rows={4}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
