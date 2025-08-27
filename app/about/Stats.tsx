import React from "react";
import * as about_images from "assets/about";
import Image from "next/image";

const data = [
  {
    name: "Happy Clients",
    numbers: "150+",
    img: about_images.clients,
  },
  {
    name: "Team Size",
    numbers: "150+",
    img: about_images.team,
  },
  {
    name: "Projects",
    numbers: "200+",
    img: about_images.projects,
  },
  {
    name: "Global Office",
    numbers: "04",
    img: about_images.company,
  },
];
const Stats = () => {
  return (
    <div className="bg-statsBg bg-cover">
      <div className="container mx-auto ">
        <div className="flex " style={{ alignItems: "center" }}>
          <Image
            style={{ width: "50%", height: "500px" }}
            src={about_images.statsLeft}
            alt="Stats Left"
          ></Image>
          <div style={{ width: "50%" }}>
            <h2 className="font-Montserrat text-2xl font-bold text-black uppercase">
              <span className="font-Montserrat text-2xl font-bold text-primary1 uppercase">
                {" "}
                Why{" "}
              </span>
              Ciel TECHNOLOGIES ?
            </h2>
            <p className="font-Montserrat text-base font-normal text-ptColor normal-case pt-1">
              We recruit, train, manage the resources well-versed in the <br />{" "}
              latest tech stacks.
            </p>
            <div className="pt-14 flex gap-10">
              {data.map((item, i) => {
                return (
                  <div key={i} className="w-25">
                    <Image className="h-20" src={item.img} alt="stats"></Image>
                    <h2 className=" font-Montserrat text-2xl font-bold text-black uppercase text-center pt-3">
                      {item.numbers}
                    </h2>
                    <p className="font-Montserrat text-base font-semibold text-ptColor normal-case text-center">
                      {item.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
