import React from "react";
import * as about_images from "assets/about";
import Image from "next/image";

const dataLeft = [
  {
    name: "Flexibility",
    para: "Having to adapt easily to change helps manage work life balance leading to high performance efficient task fullfilment.",
    color: "core1",
  },
  {
    name: "Performance",
    para: "Working on each project with accuracy, thoughtfulness and competence contributes to well rounded implementation of tasks.",
    color: "core2",
  },
  {
    name: "Reliability",
    para: "Having trustworthy employees who can provide with optimum services is what this firm relies upon.",
    color: "core3",
  },
];
const Core = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="font-Montserrat text-2xl font-bold text-black uppercase text-center">
        <span className="font-Montserrat text-2xl font-bold text-primary1 uppercase">
          {" "}
          Why{" "}
        </span>
        Ciel TECHNOLOGIES ?
      </h2>
      <p className="font-Montserrat text-base font-medium text-black capitalize text-center">
        We build digital solutions.
      </p>
      <div className="container">
        <div className=" flex py-14">
          <div className="w-4/12">
            <div className="pt-6">
              <div className="flex items-center">
                <div
                  className="bg-core1 h-1"
                  style={{
                    width: "94%",
                  }}
                ></div>
                <div className="bg-white h-4 w-4 rounded-full border-3 border-solid border-core1"></div>
              </div>
              <h2 className="font-Montserrat text-2xl font-bold text-core1 capitalize pt-3">
                Flexibility
              </h2>
              <p className="font-Montserrat text-lg font-normal text-black pt-3 ">
                Having to adapt easily to change helps manage work life balance
                leading to high performance efficient task fullfilment.
              </p>
            </div>
            <div className="pt-6">
              <div className="flex items-center">
                <div
                  className="bg-core2 h-1"
                  style={{
                    width: "94%",
                  }}
                ></div>
                <div className="bg-white h-4 w-4 rounded-full border-3 border-solid border-core2"></div>
              </div>
              <h2 className="font-Montserrat text-2xl font-bold text-core2 capitalize pt-3">
                Performance
              </h2>
              <p className="font-Montserrat text-lg font-normal text-black pt-3 ">
                Working on each project with accuracy, thoughtfulness and
                competence contributes to well rounded implementation of tasks.
              </p>
            </div>
            <div className="pt-6">
              <div className="flex items-center">
                <div
                  className="bg-core3 h-1"
                  style={{
                    width: "94%",
                  }}
                ></div>
                <div className="bg-white h-4 w-4 rounded-full border-3 border-solid border-core3"></div>
              </div>
              <h2 className="font-Montserrat text-2xl font-bold text-core3 capitalize pt-3">
                Reliability
              </h2>
              <p className="font-Montserrat text-lg font-normal text-black pt-3 ">
                Having trustworthy employees who can provide with optimum
                services is what this firm relies upon.
              </p>
            </div>
          </div>
          <div className="w-6/12 flex justify-center">
            <Image src={about_images.imgCore} alt="Core img here" />
          </div>
          <div className="w-4/12">
            {" "}
            <div className="pt-6">
              <div className="flex items-center">
                <div className="bg-white h-4 w-4 rounded-full border-3 border-solid border-core4"></div>
                <div
                  className="bg-core4 h-1"
                  style={{
                    width: "94%",
                  }}
                ></div>
              </div>
              <h2 className="font-Montserrat text-2xl font-bold text-core4 capitalize pt-3 text-right">
                Responsibility
              </h2>
              <p className="font-Montserrat text-lg font-normal text-black pt-3 text-right">
                We are responsible, embracing challenge with open hands and
                working passionately towards success, to fillfill each and every
                responsibility.
              </p>
            </div>
            <div className="pt-6">
              <div className="flex items-center">
                <div className="bg-white h-4 w-4 rounded-full border-3 border-solid border-core5"></div>
                <div
                  className="bg-core5 h-1"
                  style={{
                    width: "94%",
                  }}
                ></div>
              </div>
              <h2 className="font-Montserrat text-2xl font-bold text-core5 capitalize pt-3 text-right">
                Quality
              </h2>
              <p className="font-Montserrat text-lg font-normal text-black pt-3 text-right">
                We are proud to provide quality solutions. Maintaining quality
                and delivering excellence is something we take very seriously.
              </p>
            </div>
            <div className="pt-6">
              <div className="flex items-center">
                <div className="bg-white h-4 w-4 rounded-full border-3 border-solid border-core6"></div>
                <div
                  className="bg-core6 h-1"
                  style={{
                    width: "94%",
                  }}
                ></div>
              </div>
              <h2 className="font-Montserrat text-2xl font-bold text-core6 capitalize pt-3 text-right">
                Confidentiality
              </h2>
              <p className="font-Montserrat text-lg font-normal text-black pt-3 text-right">
                We make sure to protect your data with deligince is our core
                value. There is no doubt you can trust us 100% at every stage of
                product development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Core;
