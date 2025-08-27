"use client";
import Image from "next/image";
import { useMemo, useState } from "react";

import { disc, requestConsultationSvg, underline } from "../global";
import GradientButton from "./components/Gradientbutton";
import CielHeading from "./components/CielHeading";
import SubHeading from "./components/SubHeading";
import CardView from "./components/CardView";
import FooterBanner from "./components/FooterBanner";
import CustomTabs from "./components/CustomTabs";

import Portfolio from "./PortfolioTabs";
import OurProcess from "./OurProcessTabs";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";

import {
  whatIsCiel1,
  whatIsCiel2,
  whatIsCiel3,
  whatIsCiel4,
  spinnerHeaderBar,
  airBnb,
  dogeDash,
  seasonedInvestors,
  zib,
  shibshi,
  megaFans,
  metalEnd,
  fayvo,
  daGame,
  gameDevelopment,
  blockChain,
  mobile,
  metaverse,
  uiUx,
  arVr,
  webDevelopment,
  cloud,
  expImg1,
  expImg2,
  expImg3,
  expImg4,
} from "../global";
import styles from "./app.module.css";
// import TypingText from "./components/TypingText";
import ExpertiesCarousel from "./components/Carousel/ExpertiesCarousel/ExpertiesCarousel";

const types: Record<number, string> = {
  0: "Website",
  1: "UI/UX Design ",
  2: "Mobile Application",
  3: "Games",
};

interface MyObject {
  image: string;
  text: string;
}

const slidesData: MyObject[] = [
  { image: expImg1, text: "Web Development" },
  { image: expImg2, text: "Application" },
  { image: expImg3, text: "Dashboard" },
  { image: expImg4, text: "Blockchain" },
  { image: expImg1, text: "Web Development" },
  { image: expImg2, text: "Application" },
  { image: expImg3, text: "Dashboard" },
  { image: expImg4, text: "Blockchain " },
];

export default function Home() {
  const [type, setType] = useState("Website");
  const ourProcessDataTabs = useMemo(
    () => [
      {
        label: "Discovery Workshop",
        content: <OurProcess />,
      },
      {
        label: "Planning",
        content: <OurProcess />,
      },
      {
        label: "Design",
        content: <OurProcess />,
      },
      {
        label: "Development",
        content: <OurProcess />,
      },
      {
        label: "Testing",
        content: <OurProcess />,
      },
      {
        label: "Mainenance",
        content: <OurProcess />,
      },
    ],
    []
  )
  const dataTabs = useMemo(
    () => [
      {
        label: "Website",
        content: <Portfolio />,
      },
      {
        label: "UI/UX Design",
        content: <Portfolio />,
      },
      {
        label: "Mobile Application",
        content: <Portfolio />,
      },
      {
        label: "Games",
        content: <Portfolio />,
      },
    ],
    []
  );
  SwiperCore.use([Autoplay]);
  const handleTypeChange = (index: number) => {
    setType(types[index]);
  };
  return (
    <div>
      {/* request consultation section */}
      <section className="flex justify-center bg-requestConsultationBg">
        <div className="container mx-auto my-16">
          <div className="flex justify-center">
            <div className="grid gris-cols-1 xl:grid-cols-2">
              <div className="mt-3">
                <div className="flex justify-center">
                  <CielHeading
                    customClassName="w-8/12"
                    headingTextPrimary={"How We Stand Out"}
                    headingTextSecondary={
                      " - We provide Bespoke Development services"
                    }
                  />
                </div>
                <div className="flex justify-center">
                  <p className="text-ptColor w-8/12 font-normal text-sm track-wide mt-4">
                    Inspired by our ambitious goal, we help clients across the
                    globe launch next-generation products that have a meaningful
                    impact on the IT industry.
                  </p>
                </div>
                <div className="flex justify-center">
                  <p className="text-ptColor font-normal track-wide text-sm w-8/12 mt-2">
                    CIEL is a leading provider of IT-based business solutions.
                    We believe that one extra degree of effort separates Good
                    from Great. We provide cost-effective business solutions in
                    minimal timelines while ensuring quality standards through
                    effective communication and best practices. Ciel uses a
                    feature-rich project management system, enabling our valued
                    clients to manage their projects with faster execution,
                    collaboration, and better management. Our focus remains on
                    delivering quality and professionalism to our clients and
                    future customers.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="mt-3 w-8/12 lg:-ml-6">
                    <GradientButton
                      inLineClassName="gap-x-4"
                      customClassName="w-52"
                      link="/request-consultation"
                      text={"Request Consultation"}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center md:justify-start mt-3 md:mt-0">
                <div className="w-8/12">
                  <Image
                    src={requestConsultationSvg}
                    alt="requestConsultationSvg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* what is Ciel ? section */}
      {/* TODO:cards gradient border */}
      <section className="flex justify-center my-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="mt-4">
              <div className="flex justify-center">
                <div className="w-7/12">
                  <SubHeading headingText="About" />
                  <CielHeading
                    headingTextPrimary="what is "
                    headingTextPrimaryClassName=""
                    headingTextSecondary="ciel ?"
                    headingTextSecondaryClassName=""
                  />
                  <SubHeading headingText="we believe in" />
                  <div className="w-20 mt-2">
                    <Image src={underline} alt="underline"></Image>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <p className="text-sm font-normal tracking-thin leading-6 mt-4 text-grayColor w-7/12">
                  Our mission combines work and talent. We do our very best to
                  provide first-class services. Our motivation comes from our
                  love for what we do. Every day, we revisit our vision: to
                  offer the best US-based IT consulting and software development
                  services while caring for our employees and upholding our
                  values.
                </p>
              </div>

              <div className="flex justify-center ml-10 mt-10">
                <div className="w-7/12">
                  <div className="flex flex-col">
                    <div className="flex gap-x-4">
                      <Image className="w-4" src={disc} alt="disc"></Image>
                      <p className="font-semibold leading-6 text-sm tracking-wider text-grayColor capitalize">Follow Quality Standards</p>
                    </div>
                    <div className="flex gap-x-4 mt-2">
                      <Image className="w-4" src={disc} alt="disc"></Image>
                      <p className="font-semibold leading-6 text-sm tracking-wider text-grayColor capitalize">growth opportunities</p>
                    </div>
                    <div className="flex gap-x-4 mt-2">
                      <Image className="w-4" src={disc} alt="disc"></Image>
                      <p className="font-semibold leading-6 text-sm tracking-wider text-grayColor capitalize">Our process</p>
                    </div>
                    <div className="flex gap-x-4 mt-2">
                      <Image className="w-4" src={disc} alt="disc"></Image>
                      <p className="font-semibold leading-6 text-sm tracking-wider text-grayColor capitalize">business Growth</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-20">
                <div className="w-7/12">
                  <GradientButton
                    customClassName="w-36"
                    inLineClassName="gap-x-10"
                    link="/request-consultation"
                    text={"View All"}
                  />
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 mt-10 md:mt-0 p-1">
              <div className="flex justify-center md:justify-start">
                <CardView
                  customClassName="w-72 h-72 pl-5 pr-1 pt-5 border border-b-0 rounded-lg border-primary1 shadow drop-shadow-xl bg-cardViewBg"
                  imageSrc={whatIsCiel1}
                  imageClassName="w-20 -ml-2"
                  textClassName="text-sm font-normal leading-6 text-gray-500 mt-2 w-10/12 tracking-tight"
                  text="We work with cutting edge technology focusing on maintaining a consistent performance throughout our development process, resulting in reliable and implementable software."
                />
              </div>
              <div className="flex justify-center md:justify-start">
                <CardView
                  customClassName="w-72 h-72 pl-5 pr-1 pt-5 pb-4 mt-8 md:-ml-16 border border-b-0 rounded-lg border-primary1 shadow drop-shadow-xl"
                  imageSrc={whatIsCiel3}
                  imageClassName="w-20 -ml-2 mt-10"
                  textClassName="text-sm font-normal leading-6 tracking-tight text-gray-500 mt-4"
                  text="Our method upholds a good quality job while providing one of the best software deliveries and promoting teamwork."
                />
              </div>
              <div className="flex justify-center md:justify-start">
                <CardView
                  customClassName="w-72 h-72 pl-5 mt-8 md:mt-0 pr-1 pt-5 pb-4 border  border-b-0 rounded-lg border-primary1 shadow drop-shadow-xl"
                  imageSrc={whatIsCiel2}
                  imageClassName="w-20 -ml-2 mt-10"
                  textClassName="text-sm font-normal leading-6 tracking-tight text-gray-500 mt-4"
                  text="We recruit cream of the crop and polish them in ways that bring out the best in them."
                />
              </div>
              <div className="flex justify-center md:justify-start">
                <CardView
                  customClassName="w-72 h-72 pl-5 pr-1 pt-5 pb-4 mt-8 md:-ml-16 border border-b-0 rounded-lg border-primary1 shadow drop-shadow-xl bg-cardViewBg"
                  imageSrc={whatIsCiel4}
                  imageClassName="w-20 -ml-2 mt-8"
                  textClassName="text-sm font-normal leading-66 tracking-tight text-gray-500 mt-4 w-11/12"
                  text="We have experience over different industrial verticals resulting in efficient delivery time and quick results."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* spinner section */}
      <section className="bg-spinnerBg bg-cover bg-center bg-no-repeat pt-16 pb-16">
        <div className="flex justify-center">
          <div className="container mx-auto">
            <CielHeading
              customClassName=""
              headingTextPrimaryClassName="text-center"
              headingTextPrimary={"WHAT WE HAVE"}
              headingTextSecondary={" DONE SO FAR."}
            />
            <SubHeading
              headingText="Recent Work Portfolio"
              headingTextClassName="text-center"
            />
            <div className="flex justify-center mt-2">
              <Image src={spinnerHeaderBar} alt="spinnerHeaderBar"></Image>
            </div>

            <div className="flex md:flex-row flex-col -gap-x-7">
              <div
                className="flex justify-center"
                style={{
                  height: "300px",
                  width: "300px",
                  margin: "0 auto",
                  marginTop: "100px",
                  borderRadius: "50%",
                  position: "relative",
                }}
              >
                <div className="mt-5 ml-5">
                  <div
                    className="bg-spinnerGreen bg-cover bg-center bg-no-repeat h-64 w-64"
                    style={{ margin: "0 auto" }}
                  >
                    <div className="flex justify-center">
                      <div className="flex flex-col">
                        <div className="flex justify-center mt-1">
                          <h1 className="font-Montserrat font-bold leading-9 text-4xl text-spinnerGreenText text-center mt-9 w-7/12">
                            2016
                          </h1>
                        </div>
                        <div className="flex justify-center mt-2">
                          <h6 className="text-xs font-Montserrat font-semibold leading-1 text-white bg-spinnerGreenText text-center rounded-md w-7/12">
                            Launch
                          </h6>
                        </div>
                        <div className="flex justify-center mt-1">
                          <h6 className="font-normal text-xs leading-4 text-center text-spinnerDescription w-6/12">
                            Launch with 7 employess with a focus on web
                            application
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.overlay}></div>
              </div>
              <div
                className="flex justify-center"
                style={{
                  height: "300px",
                  width: "300px",
                  margin: "0 auto",
                  marginTop: "100px",
                  borderRadius: "50%",
                  position: "relative",
                }}
              >
                <div className="mt-5 ml-5">
                  <div
                    className="bg-spinnerYellow bg-cover bg-center bg-no-repeat h-64 w-64"
                    style={{ margin: "0 auto" }}
                  >
                    <div className="flex justify-center">
                      <div className="flex flex-col">
                        <div className="flex justify-center mt-1">
                          <h1 className="font-Montserrat font-bold leading-7 text-4xl text-spinnerYellowText text-center mt-9 w-7/12">
                            2018
                          </h1>
                        </div>
                        <div className="flex justify-center mt-2">
                          <h6 className="text-xs font-Montserrat font-semibold leading-1 text-white bg-spinnerYellowText text-center rounded-md w-6/12">
                            Monthly Focus
                          </h6>
                        </div>
                        <div className="flex justify-center mt-1">
                          <h6 className="font-normal text-xs leading-1 text-center text-spinnerDescription w-6/12">
                            With the advent of touch based devices, embracing
                            the change was invitable as the demand for apps
                            increased
                          </h6>
                        </div>
                        <h6 className="font-bold font-Montserrat text-xs text-center tracking-tight">
                          Team Size: 20
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.overlay1}></div>
              </div>
              <div
                className="flex justify-center"
                style={{
                  height: "300px",
                  width: "300px",
                  margin: "0 auto",
                  marginTop: "100px",
                  borderRadius: "50%",
                  position: "relative",
                }}
              >
                <div className="mt-5 ml-5">
                  <div
                    className="bg-spinnerBlue bg-cover bg-center bg-no-repeat h-64 w-64"
                    style={{ margin: "0 auto" }}
                  >
                    <div className="flex justify-center">
                      <div className="flex flex-col">
                        <div className="flex justify-center mt-1">
                          <h1 className="font-Montserrat font-bold leading-9 text-4xl text-spinnerBlueText text-center mt-9 w-7/12">
                            2020
                          </h1>
                        </div>
                        <div className="flex justify-center mt-2">
                          <h6 className="text-xs font-Montserrat font-semibold leading-1 text-white bg-spinnerBlueText text-center rounded-md w-7/12">
                            Enterprise Focus
                          </h6>
                        </div>
                        <div className="flex justify-center mt-1">
                          <h6 className="font-normal text-xs leading-4 text-center text-spinnerDescription w-7/12">
                            We did a lot of work on Blockchain,Gaming, AI/ML
                            renewd our tech stack to keep up with the changing
                            trends
                          </h6>
                        </div>
                        <h5 className="font-semibold font-Montserrat tracking-tight text-center text-xs">
                          Team Size: 40
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.overlay2}></div>
              </div>
              <div
                className="flex justify-center"
                style={{
                  height: "300px",
                  width: "300px",
                  margin: "0 auto",
                  marginTop: "100px",
                  borderRadius: "50%",
                  position: "relative",
                }}
              >
                <div className="mt-5 ml-5">
                  <div
                    className="bg-spinnerRed bg-cover bg-center bg-no-repeat h-64 w-64"
                    style={{ margin: "0 auto" }}
                  >
                    <div className="flex justify-center">
                      <div className="flex flex-col">
                        <div className="flex justify-center mt-1">
                          <h1 className="font-Montserrat font-bold leading-9 text-4xl text-spinnerRedText text-center mt-9 w-7/12">
                            2022
                          </h1>
                        </div>
                        <div className="flex justify-center mt-2">
                          <h6 className="text-xs font-Montserrat font-semibold leading-1 text-white bg-spinnerRedText text-center rounded-md w-5/12">
                            Now
                          </h6>
                        </div>
                        <div className="flex justify-center mt-1">
                          <h6 className="font-normal text-xs leading-4 text-center text-spinnerDescription w-6/12">
                            Intoduced SAAS, Packaged Solutions, DevOps,
                            PlayToEarn, Metaverse, CRM Apps and ERP solutions
                          </h6>
                        </div>
                        <h5 className="font-semibold font-Montserrat tracking-tight text-center text-xs">
                          Team Size: 65
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.overlay3}></div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
      {/* what we have done so far ? section */}
      {/* todo: learn more bottom padding adjustmnet. 
      border gradient color.
      */}
      <section className="pb-16 pt-16">
        <div className="container mx-auto">
          <CielHeading
            customClassName=""
            headingTextPrimaryClassName="text-center"
            headingTextPrimary={"WHAT WE HAVE"}
            headingTextSecondary={" DONE SO FAR."}
          />
          <SubHeading
            headingText="We at Ciel Technology provide you application services with standardized protocols"
            headingTextClassName="text-center w-11/12 md:w-3/12"
            customClassName="flex justify-center"
          />
          <div className="flex justify-center mt-2">
            <Image src={spinnerHeaderBar} alt="spinnerHeaderBar"></Image>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-4 mt-16">
              <CardView
                customClassName="w-64 pl-5 pr-1 pt-5 pb-2 border border-solid rounded-lg shadow shadow-black-400 shadow-md bg-cardViewBg hover:bg-white hover:border-primary1 hover:cursor-pointer"
                imageSrc={gameDevelopment}
                imageClassName="w-20 -ml-2"
                headingText="Game Development"
                cardHeadingCheck={true}
                textClassName="text-sm font-normal leading-4 text-gray-500 mt-2 w-9/12 tracking-tight text-cardViewParaText"
                text="We provide high-end game development services, we bring your ideas into ..."
                learnMoreCheck={true}
              />
              <CardView
                customClassName="w-64 pl-5 pr-1 pt-5 pb-2 border border-solid rounded-lg shadow shadow-black-400 shadow-md bg-cardViewBg hover:bg-white hover:border-primary1 hover:cursor-pointer"
                imageSrc={mobile}
                imageClassName="w-20 -ml-2"
                headingText="Mobile"
                cardHeadingCheck={true}
                textClassName="text-sm font-normal leading-4 text-gray-500 mt-2 w-9/12 tracking-tight text-cardViewParaText"
                text="We built mobile apps to serve different mobile devices.Leverage the ..."
                learnMoreCheck={true}
              />
              <CardView
                customClassName="w-64 pl-5 pr-1 pt-5 pb-2 border border-solid rounded-lg shadow shadow-black-400 shadow-md bg-cardViewBg hover:bg-white hover:border-primary1 hover:cursor-pointer"
                imageSrc={uiUx}
                imageClassName="w-20 -ml-2"
                headingText="UI/UX Design"
                cardHeadingCheck={true}
                textClassName="text-sm font-normal leading-4 text-gray-500 mt-2 w-9/12 tracking-tight text-cardViewParaText"
                text="We deliver smart user experience, imitating a well-balanced connection..."
                learnMoreCheck={true}
              />
              <CardView
                customClassName="w-64 pl-5 pr-1 pt-5 pb-2 border border-solid rounded-lg shadow shadow-black-400 shadow-md bg-cardViewBg hover:bg-white hover:border-primary1 hover:cursor-pointer"
                imageSrc={webDevelopment}
                imageClassName="w-20 -ml-2"
                headingText="web development"
                cardHeadingCheck={true}
                textClassName="text-sm font-normal leading-4 text-gray-500 mt-2 w-9/12 tracking-tight text-cardViewParaText"
                text="We offer one of the best website designing and development services ..."
                learnMoreCheck={true}
              />
              <CardView
                customClassName="w-64 pl-5 pr-1 pt-5 pb-2 border border-solid rounded-lg shadow shadow-black-400 shadow-md bg-cardViewBg hover:bg-white hover:border-primary1 hover:cursor-pointer"
                imageSrc={blockChain}
                imageClassName="w-20 -ml-2"
                headingText="BlockChain"
                cardHeadingCheck={true}
                textClassName="text-sm font-normal leading-4 text-gray-500 mt-2 w-10/12 tracking-tight text-cardViewParaText"
                text="It is a decentralized, distributed public ledger used to collect information ..."
                learnMoreCheck={true}
              />
              <CardView
                customClassName="w-64 pl-5 pr-1 pt-5 pb-4 border border-solid rounded-lg shadow shadow-black-400 shadow-md bg-cardViewBg hover:bg-white hover:border-primary1 hover:cursor-pointer"
                imageSrc={metaverse}
                imageClassName="w-20 -ml-2"
                headingText="Metaverse"
                cardHeadingCheck={true}
                textClassName="text-sm font-normal leading-4 text-gray-500 mt-2 w-9/12 tracking-tight text-cardViewParaText"
                text="Users travers a virtual world that mimics aspects of physical world using ..."
                learnMoreCheck={true}
              />
              <CardView
                customClassName="w-64 pl-5 pr-1 pt-5 pb-2 border border-solid rounded-lg shadow shadow-black-400 shadow-md bg-cardViewBg hover:bg-white hover:border-primary1 hover:cursor-pointer"
                imageSrc={arVr}
                imageClassName="w-20 -ml-2"
                headingText="AR/VR"
                cardHeadingCheck={true}
                textClassName="text-sm font-normal leading-4 text-gray-500 mt-2 w-9/12 tracking-tight text-cardViewParaText"
                text="The integration of digital information with the user's environment in real time ..."
                learnMoreCheck={true}
              />
              <CardView
                customClassName="w-64 pl-5 pr-1 pt-5 pb-2 border border-solid rounded-lg shadow shadow-black-400 shadow-md bg-cardViewBg hover:bg-white hover:border-primary1 hover:cursor-pointer"
                imageSrc={cloud}
                imageClassName="w-20 -ml-2"
                headingText="Cloud"
                cardHeadingCheck={true}
                textClassName="text-sm font-normal leading-4 text-gray-500 mt-2 w-10/12 tracking-tight text-cardViewParaText"
                text="We provide on demand cloud computing services auch as AWS and AZURE and..."
                learnMoreCheck={true}
              />
            </div>
          </div>
        </div>
      </section>
      {/* our process */}
      <section className="bg-requestConsultationBg pt-16">
        <CielHeading customClassName="" headingTextPrimaryClassName="text-center" headingTextPrimary={"OUR"} headingTextSecondary={" PROCESS"} />
        <SubHeading
          headingText="We Have Best Solution For All"
          headingTextClassName="text-center"
        />
        <div className="flex justify-center mt-2">
          <Image src={spinnerHeaderBar} alt="spinnerHeaderBar"></Image>
        </div>
        <CustomTabs
          dataTabs={ourProcessDataTabs}
          handleTypeChange={handleTypeChange}
        />
      </section>

      {/* portfolio showcase */}
      <section className="pb-16 bg-requestConsultationBg">
        <div className="flex justify-center">
          <div className="container mx-auto">
            <div className="text-center">
              <CielHeading
                headingTextPrimary="PORTFOLIO "
                headingTextPrimaryClassName=""
                headingTextSecondary=" SHOWCASE"
                headingTextSecondaryClassName=""
              />
              <SubHeading headingText="That Speak!" />
              <div className="flex justify-center">
                <Image
                  className="w-20 mt-2"
                  src={underline}
                  alt="underline"
                ></Image>
              </div>
            </div>
            <CustomTabs
              dataTabs={dataTabs}
              handleTypeChange={handleTypeChange}
            />
          </div>
        </div>
      </section>

      {/* our experities
      sliders:
      todo: button adjustment.
      */}

      <section className="container mx-auto py-14 flex gap-20 ">
        <div className="w-3/12">
          <p className="font-Montserrat font-bold text-black text-lg">OUR</p>
          <h2 className="font-Montserrat font-bold font-3xl text-gradientColor1">
            EXPERTISE
          </h2>
          <p className="font-Montserrat font-bold text-lg text-black capitalize">
            We build digital solutions.{" "}
          </p>
          <h2 className="font-Montserrat font-bold font-3xl text-black pt-6">
            Web Development
          </h2>
          <p className="font-Montserrat font-bold font-normal  text-paragraph ">
            For 10+ years now, we’ve mastered the top web technologies to CIEL
            provides high-quality development services and IT-based business
            solutions. Providing high-quality services and attention to
            micro-level detail gives the company a competitive edge
          </p>
        </div>
        <div className="w-9/12">
          <ExpertiesCarousel data={slidesData} />
        </div>
      </section>
      <section className="relative">
        {/* <Slider></Slider> */}
        {/* <Testimonials /> */}
      </section>
      {/* footerBanner */}
      <section>
        <FooterBanner />
      </section>
      {/* our partners */}
      <section className="bg-spinnerBg bg-cover bg-center bg-no-repeat pt-16 pb-16">
        <CielHeading
          customClassName=""
          headingTextPrimaryClassName="text-center"
          headingTextPrimary={"OUR"}
          headingTextSecondary={" Partners."}
        />
        <SubHeading
          headingText="We have been working with some Fortune 500 clients"
          headingTextClassName="text-center"
        />
        <div className="flex justify-center mt-2">
          <Image src={spinnerHeaderBar} alt="spinnerHeaderBar"></Image>
        </div>
        <div className="flex justify-center">
          <div className="w-9/12">
            <div className="flex items-center mt-14 md:mt-28">
              <div className="flex justify-center">
                <Image className="w-9/12" src={airBnb} alt="airBnB"></Image>
              </div>
              <div>
                <div className="flex justify-center">
                  <Image className="w-9/12" src={dogeDash} alt="airBnB"></Image>
                </div>
                <div className="flex justify-center">
                  <Image
                    className="w-9/12"
                    src={seasonedInvestors}
                    alt="airBnB"
                  ></Image>
                </div>
              </div>
              <div>
                <div className="flex justify-center">
                  <Image className="w-9/12" src={zib} alt="airBnB"></Image>
                </div>
                <div className="flex justify-center">
                  <Image className="w-9/12" src={shibshi} alt="airBnB"></Image>
                </div>
                <div className="flex justify-center">
                  <Image className="w-9/12" src={megaFans} alt="airBnB"></Image>
                </div>
              </div>
              <div className="items-center">
                <div className="flex justify-center">
                  <Image className="w-9/12" src={metalEnd} alt="airBnB"></Image>
                </div>
                <div className="flex justify-center">
                  <Image className="w-9/12" src={fayvo} alt="airBnB"></Image>
                </div>
              </div>
              <div>
                <div className="flex justify-center">
                  <Image className="w-9/12" src={daGame} alt="airBnB"></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
