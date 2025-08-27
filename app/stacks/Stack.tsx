"use client";

import { Fragment } from "react";
import Image from "next/image";
import {
  Portal,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import * as stack_images from "assets/stack";
import { menuPolygon } from "@globals";

const stack_details = [
  {
    type: "design",
    title: "Adobe Indesign",
    icon: stack_images.adobe_indesign,
    description: `Adobe InDesign is the industry-leading layout and page design software for print and digital media. Create beautiful graphic designs with typography from the world's top foundries and imagery from Adobe Stock.`,
  },
  {
    type: "design",
    title: "Adobe Lightroom",
    icon: stack_images.adobe_lightroom,
    description: `Adobe Lightroom is a creative image organization and image manipulation software developed by Adobe Inc. as part of the Creative Cloud subscription family.`,
  },
  {
    type: "design",
    title: "Adobe Premier",
    icon: stack_images.adobe_premier,
    description: `Adobe Premiere Pro is a timeline-based and non-linear video editing software application developed by Adobe Inc. and published as part of the Adobe Creative Cloud licensing program.`,
  },
  {
    type: "design",
    title: "After Effects",
    icon: stack_images.after_effect,
    description: `Is a digital visual effect, motion graphics, and compositing application developed by Adobe Systems and used in the post-production process of filmmaking, video games, and television production.`,
  },
  {
    type: "design",
    title: "Blender",
    icon: stack_images.blender,
    description: `Blender is a free and open-source 3D computer graphics software tool set used for creating animated films, visual effects, art, 3D-printed models, motion graphics, interactive 3D applications, virtual reality, and, formerly, video games.`,
  },
  {
    type: "design",
    title: "Illustrator",
    icon: stack_images.illustrator,
    description: `The graphic editor is used to create vectors, drawings, and sketches.`,
  },
  {
    type: "design",
    title: "Xd",
    icon: stack_images.xd,
    description: `A prototyping tool for UI/UX design and collaborating tool to make wireframes, screen designs, and prototypes.`,
  },
  {
    type: "design",
    title: "Figma",
    icon: stack_images.figma,
    description: `Design developing tool used by designers and developers to edit and comment on the current project.`,
  },
  {
    type: "design",
    title: "Photoshop",
    icon: stack_images.photoshop,
    description: `Graphic editor to enhance pictures and characters to provide outstanding visuals.`,
  },
  {
    type: "design",
    title: "Substance Designer",
    icon: stack_images.substance_designer,
    description: `Substance 3D Designer is an application intended for creating 2D textures, materials, filters, and 3D models in a node-based interface, with a heavy focus on procedural generation, parametrization, and non-destructive workflows.`,
  },
  {
    type: "design",
    title: "Substance Painter",
    icon: stack_images.substance_painter,
    description: `Substance 3D Painter is a 3D painting software allowing to texture and render 3D meshes.`,
  },
  {
    type: "game",
    title: "Unity",
    icon: stack_images.unity,
    description: `Cross-platform to create one of the extraordinary games while saving time and providing efficient work.`,
  },
  {
    type: "game",
    title: "Unreal",
    icon: stack_images.unreal,
    description: `We are creating iconic games with the help of the most potent 3-D creation tool of game development.`,
  },
  {
    type: "game",
    title: "Constructer 3",
    icon: stack_images.constructer,
    description: `Construct 3 is the world's best game-making software. Making games in the browser without coding or with Javascript.`,
  },
  {
    type: "game",
    title: "GoDot",
    icon: stack_images.godot,
    description: `Godot aims to offer a fully integrated game development environment. It allows developers to create a game, needing no other tools beyond those used for content creation (visual assets, music, etc.).`,
  },
  {
    type: "game",
    title: "BuildBox",
    icon: stack_images.build_box,
    description: `Buildbox is a no-code development platform focused on game creation without programming, coding, or scripting.`,
  },
  {
    type: "game",
    title: "Play Canvas",
    icon: stack_images.play_canvas,
    description: `PlayCanvas is an open-source 3D game engine/interactive 3D application engine alongside a proprietary cloud-hosted creation platform that allows for simultaneous editing from multiple computers via a browser-based interface.`,
  },
  {
    type: "web",
    title: "React",
    icon: stack_images.react,
    description: `React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.`,
  },
  {
    type: "web",
    title: "Node",
    icon: stack_images.node,
    description: `Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser.`,
  },
  {
    type: "web",
    title: "Python",
    icon: stack_images.python,
    description: `Programming language to support a fast and powerful work environment.`,
  },
  {
    type: "web",
    title: "Aws",
    icon: stack_images.aws,
    description: `Amazon Web Service provides on-demand cloud computing platforms to help reduce costs and innovate faster.`,
  },
  {
    type: "web",
    title: "Vue",
    icon: stack_images.vue,
    description: `Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.`,
  },
];

const Stack = ({ type }: { type: string }) => {
  let list =
    type !== "all"
      ? stack_details.filter((val) => val.type === type)
      : [...stack_details];
  return (
    <div>
      {/* <div className="flex flex-wrap px-8 justify-center gap-y-5"></div> */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {list.slice(0, 8).map((val) => (
          <Fragment key={val.title}>
            <Popover>
              <PopoverTrigger>
                <div
                  style={{
                    width: "12.5%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    width={100}
                    height={100}
                    src={val.icon}
                    alt="tech icon here"
                  />
                </div>
              </PopoverTrigger>
              <Portal>
                <PopoverContent className="border border-primary1 w-popover">
                  <div
                    className="absolute "
                    style={{ left: "47%", bottom: "100%" }}
                  >
                    <Image height={15} src={menuPolygon} alt="menu-polygon" />
                  </div>
                  <PopoverBody style={{ padding: "0px" }}>
                    <div className="flex gap-2.5 items-center">
                      <div style={{ width: "40%" }}>
                        <Image
                          height={400}
                          width={200}
                          src={stack_images.popoverLeft}
                          alt="unity icon here"
                        />
                      </div>
                      <div style={{ padding: "5px 10px", width: "60%" }}>
                        <h2 className="font-Montserrat tracking-wide text-primary1 pt-2.5 text-3xl font-bold text-left">
                          {val.title}
                        </h2>
                        <p className="font-Montserrat font-normal text-lg text-ptColor tracking-wide pt-2.5 text-left">
                          {val.description}
                        </p>
                      </div>
                    </div>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </Fragment>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {list.slice(8, 15).map((val) => (
          <Fragment key={val.title}>
            <Popover>
              <PopoverTrigger>
                <div
                  style={{
                    width: "12.5%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    width={100}
                    height={100}
                    src={val.icon}
                    alt="tech icon here"
                  />
                </div>
              </PopoverTrigger>
              <Portal>
                <PopoverContent className="border border-primary1 w-popover">
                  <div
                    className="absolute "
                    style={{ left: "47%", bottom: "100%" }}
                  >
                    <Image height={15} src={menuPolygon} alt="menu-polygon" />
                  </div>
                  <PopoverBody style={{ padding: "0px" }}>
                    <div className="flex gap-2.5 items-center">
                      <div style={{ width: "40%" }}>
                        <Image
                          height={400}
                          width={200}
                          src={stack_images.popoverLeft}
                          alt="unity icon here"
                        />
                      </div>
                      <div style={{ padding: "5px 10px", width: "60%" }}>
                        <h2 className="font-Montserrat tracking-wide text-primary1 pt-2.5 text-3xl font-bold text-left">
                          {val.title}
                        </h2>
                        <p className="font-Montserrat font-normal text-lg text-ptColor tracking-wide pt-2.5 text-left">
                          {val.description}
                        </p>
                      </div>
                    </div>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </Fragment>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {list.slice(15, 21).map((val) => (
          <Fragment key={val.title}>
            <Popover>
              <PopoverTrigger>
                <div
                  style={{
                    width: "12.5%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    width={100}
                    height={100}
                    src={val.icon}
                    alt="tech icon here"
                  />
                </div>
              </PopoverTrigger>
              <Portal>
                <PopoverContent className="border border-primary1 w-popover">
                  <div
                    className="absolute "
                    style={{ left: "49%", bottom: "100%" }}
                  >
                    <Image height={15} src={menuPolygon} alt="menu-polygon" />
                  </div>
                  <PopoverBody style={{ padding: "0px" }}>
                    <div className="flex gap-2.5 items-center">
                      <div style={{ width: "40%" }}>
                        <Image
                          height={400}
                          width={200}
                          src={stack_images.popoverLeft}
                          alt="unity icon here"
                        />
                      </div>
                      <div style={{ padding: "5px 10px", width: "60%" }}>
                        <h2 className="font-Montserrat tracking-wide text-primary1 pt-2.5 text-3xl font-bold text-left">
                          {val.title}
                        </h2>
                        <p className="font-Montserrat font-normal text-lg text-ptColor tracking-wide pt-2.5 text-left">
                          {val.description}
                        </p>
                      </div>
                    </div>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stack;
