"use client";

import Image from "next/image";
import * as blogs from "assets/blog";
import { underline } from "@globals";
import SubHeading from "@/components/SubHeading";
import GradientButton from "@/components/Gradientbutton";
import FooterBanner from "@/components/FooterBanner";
import SectionHeading from "@/components/SectionHeading";

const BlogDetails = ({ params }: any) => {
  console.log({ params });
  return (
    <>
      <div>
        <div className="container mx-auto py-8">
          <Image src={blogs.blog_breadcrum} alt="home icon here" />
        </div>
        <section className="py-10 px-8">
          <div className="relative px-2  lg:px-8 mx-auto">
            <SectionHeading
              primary_title={`Trends ${new Date().getFullYear()}`}
              secondary_title="Top Business & Technology&nbsp;"
            />
          </div>
        </section>

        <section className="flex justify-center">
          <div className="container mx-auto my-4">
            <div className="flex justify-center">
              <div className="grid gris-cols-1 xl:grid-cols-2 bg-requestConsultation">
                <div>
                  <div className="flex justify-center flex-col">
                    <div className="flex">
                      <div>
                        <SubHeading headingText="Life" />
                        <div className="flex">
                          <h3
                            className={`text-primary1 font-bold text-2xl uppercase font-Montserrat`}>
                            Ciel&nbsp;
                            <span className="text-black">Technologies</span>
                          </h3>
                        </div>
                        <SubHeading headingText="We Build Future With Human Mind" />
                        <div className="w-20 mt-2">
                          <Image src={underline} alt="underline" />
                        </div>
                      </div>
                    </div>
                    <p className="text-ptColor w-8/12 font-normal text-sm track-wide mt-4">
                      CIEL provides high-quality development services and
                      IT-based business solutions. Providing high-quality
                      services and attention to micro-level detail gives the
                      company a competitive edge. CIEL drives on the motive of
                      one extra degree of effort separate good from great. We
                      provide cost-effective business solutions in a limited
                      timeline and simultaneously ensure quality standards and
                      an effective chain of command.
                    </p>
                    <div className="mt-14 w-8/12 lg:-pl-4">
                      <GradientButton
                        inLineClassName="gap-x-4"
                        customClassName="w-44"
                        link="/request-consultation"
                        text={"Join Our Team"}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center md:justify-center mt-3 md:mt-0">
                  <div className="w-8/12">
                    <Image
                      src={blogs.blog_image}
                      alt="requestConsultationSvg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterBanner />
    </>
  );
};

export default BlogDetails;
