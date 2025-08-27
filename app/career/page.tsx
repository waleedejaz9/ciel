"use client"
import Image from "next/image";
import FooterBanner from "@/components/FooterBanner";
import CielHeading from "@/components/CielHeading";
import SubHeading from "@/components/SubHeading";
import CardView from "@/components/CardView";
import CountUp from 'react-countup';
import {
  birthday,
  gaming,
  carom,
  trip,
  xVector,
  guru,
  box,
  briefcase,
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
  FaB1,
  FaB2,
  FaB3,
  FaB4,
  FaB5,
  FaB6,
  FaB7,
  FaB8,
  requestConsultationSvg,
  underline
} from "../../global";
import styles from '../app.module.css'
import * as stack_images from "assets/stack";
import GradientButton from "@/components/Gradientbutton";
import JobCards from "@/components/JobCards";
export default function Careers() {
  return (
    <>
      <section className="bg-requestConsultationBg flex justify-center pt-10 pb-16">
        <div className="container mx-auto w-8/12">
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
          <CielHeading customClassName="mt-10" headingTextPrimaryClassName="text-center" headingTextPrimary={"ARE YOU INTERESTED IN "} headingTextSecondary={"JOINING OUR TEAM"} />
            <SubHeading
              headingText="YOU GOT TALENT WE PROVIDE YOU PLATFORM"
              headingTextClassName="text-center"
            />
            <div className="flex justify-center mt-2">
              <Image src={spinnerHeaderBar} alt="spinnerHeaderBar"></Image>
            </div>
            <div className="flex justify-center mt-12">
            <div className="grid grid-cols-3 w-11/12 gap-x-5 gap-y-5">
          <JobCards />
        </div>

            </div>

            </div>
      </section>
      <section className="flex justify-center bg-careerPageBg">
        <div className="container mx-auto my-16">
          <div className="flex justify-center">
            <div className="grid gris-cols-1 xl:grid-cols-2">
              <div className="mt-3">
                <div className="flex justify-center">
                  <div className="w-8/12 ml-36">
                    <SubHeading
                      headingText="Life"
                    />
                    <CielHeading
                      headingTextPrimary="CIEL "
                      headingTextPrimaryClassName=""
                      headingTextSecondary="TECHNOLOGIES"
                      headingTextSecondaryClassName=""
                    />
                    <SubHeading
                      headingText="We build Future with human mind."
                    />
                    <div className="w-20 mt-2">
                      <Image src={underline} alt="underline"></Image>
                    </div>

                  </div>

                </div>
                <div className="flex justify-center">
                  <p className="text-ptColor font-normal track-tight text-sm w-7/12 mt-5 ml-20">
                    At Ciel, we aim at building the best of everything. Be it technology, environment or relationships with our human resources.
                    Our team is passionate about contributing to the world in a most productive manner and this is what enables us to deliver hundreds of successful projects every year.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="mt-3 w-8/12 ml-36">
                    <GradientButton inLineClassName="gap-x-4" customClassName="w-44 mt-10" link="/request-consultation" text={"Joining our Team"} />
                  </div>
                </div>
              </div>
              <div className="flex justify-center md:justify-start mt-3 md:mt-0">
                <div className="flex flex-col">
                  <div className="flex gap-x-2">
                    <div className="w-66">
                      <Image src={birthday} alt="requestConsultationSvg" />
                    </div>
                    <div className="w-5/12">
                      <Image src={gaming} alt="requestConsultationSvg" />
                    </div>
                  </div>
                  <div className="flex gap-x-2">
                    <div className="w-5/12">
                      <Image src={carom} alt="requestConsultationSvg" />
                    </div>
                    <div className="w-66">
                      <Image src={trip} alt="requestConsultationSvg" />
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 pt-16 bg-requestConsultationBg">
        <div className="container mx-auto">

          <h3 className={`font-bold text-2xl uppercase font-Montserrat text-primary1 text-center`}>
            FACILITIES
            <span className={`text-black`}>
              {" "} AND {" "}
            </span>
            BENEFITS
          </h3>
          <SubHeading
            headingText="we provide best for our team"
            headingTextClassName="text-center w-11/12 md:w-3/12"
            customClassName="flex justify-center"
          />
          <div className="flex justify-center mt-2">
            <Image src={spinnerHeaderBar} alt="spinnerHeaderBar"></Image>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-4 mt-16">
              <CardView
                customClassName="w-64 pl-5 pr-1 pt-5 pb-2 border border-solid rounded-lg shadow shadow-black-400 shadow-md hover:cursor-pointer"
                imageSrc={FaB1}
                imageClassName="w-20 -ml-2"
                headingText="Provident Fund"
                cardHeadingCheck={true}
                textClassName="text-sm font-normal leading-4 text-gray-500 mt-2 w-10/12 tracking-tight text-cardViewParaText"
                text="Contribute 5% into the provident fund after 6 months of completion of employment"
              />
              <CardView
                customClassName="w-64 pl-5 pr-1 pt-5 pb-2 border border-solid rounded-lg shadow shadow-black-400 shadow-md hover:cursor-pointer "
                imageSrc={FaB2}
                imageClassName="w-20 -ml-2"
                headingText="Annual Increments"
                cardHeadingCheck={true}
                textClassName="text-sm font-normal leading-4 text-gray-500 mt-2 w-10/12 tracking-tight text-cardViewParaText"
                text="Annual increments based on the achievement individual
                performance, and extra efforts for the company"
              />
              <CardView
                customClassName="w-64 pl-5 pr-1 pt-5 pb-2 border border-solid rounded-lg shadow shadow-black-400 shadow-md hover:cursor-pointer"
                imageSrc={FaB3}
                imageClassName="w-20 -ml-2"
                headingText="OPD Expense"
                cardHeadingCheck={true}
                textClassName="text-sm font-normal leading-4 text-gray-500 mt-2 w-9/12 tracking-tight text-cardViewParaText"
                text="Cover outpatient medical costs as a part of the employee wellness program"
              />
              <CardView
                customClassName="w-64 pl-5 pr-1 pt-5 pb-2 border border-solid rounded-lg shadow shadow-black-400 shadow-md hover:cursor-pointer"
                imageSrc={FaB4}
                imageClassName="w-20 -ml-2"
                headingText="Medical Coverage"
                cardHeadingCheck={true}
                textClassName="text-sm font-normal leading-4 text-gray-500 mt-2 w-10/12 tracking-tight text-cardViewParaText"
                text="Provide medical coverage to all the employees in case of medical emergencies"
              />
              <CardView
                customClassName="w-64 pl-5 pr-1 pt-5 pb-2 border border-solid rounded-lg shadow shadow-black-400 shadow-md hover:cursor-pointer"
                imageSrc={FaB5}
                imageClassName="w-20 -ml-2"
                headingText="Wellness Plan"
                cardHeadingCheck={true}
                textClassName="text-sm font-normal leading-4 text-gray-500 mt-2 w-10/12 tracking-tight text-cardViewParaText"
                text="Reimburse 75% of the monthly subscription fee if you are a part of any health club"
              />
              <CardView
                customClassName="w-64 pl-5 pr-1 pt-5 pb-4 border border-solid rounded-lg shadow shadow-black-400 shadow-md hover:cursor-pointer"
                imageSrc={FaB6}
                imageClassName="w-20 -ml-2"
                headingText="Employee Empowerment"
                cardHeadingCheck={true}
                textClassName="text-sm font-normal leading-4 text-gray-500 mt-2 w-10/12 tracking-tight text-cardViewParaText"
                text="Provide the employees with cars, bikes, and appreciation for the efforts they have put in for many years"
              />
              <CardView
                customClassName="w-64 pl-5 pr-1 pt-5 pb-2 border border-solid rounded-lg shadow shadow-black-400 shadow-md hover:cursor-pointer"
                imageSrc={FaB7}
                imageClassName="w-20 -ml-2"
                headingText="Mobile Data"
                cardHeadingCheck={true}
                textClassName="text-sm font-normal leading-4 text-gray-500 mt-2 w-10/12 tracking-tight text-cardViewParaText"
                text="Recharge employee’s mobile data for their personal use at the start of every month"
              />
              <CardView
                customClassName="w-64 pl-5 pr-1 pt-5 pb-2 border border-solid rounded-lg shadow shadow-black-400 shadow-md hover:cursor-pointer"
                imageSrc={FaB8}
                imageClassName="w-20 -ml-2"
                headingText="Fuel Allowance"
                cardHeadingCheck={true}
                textClassName="text-sm font-normal leading-4 text-gray-500 mt-2 w-10/12 tracking-tight text-cardViewParaText"
                text="Reimburse the commuting expense as it contributes the major chunk to monthly expenditures"
              />

            </div>

          </div>
        </div>
      </section>
      <div className="bg-footerContactUsBanner bg-cover bg-right-top bg-no-repeat w-full pt-16 pb-16">
        <div className="flex justify-center">
          <div className="container">
            <div className='flex justify-center'>
              <h1 className={`${styles.footer} font-Montserrat font-bold md:text-3xl text-xl leading-7 tracking-wide uppercase text-white text-center`}>
                OUR SUCCESS
              </h1>
            </div>
            <div className="flex justify-evenly gap-x-10 mt-16">
              <div className='flex gap-x-16 justify-center'>
                <div className='flex flex-col items-center'>
                  <Image className="w-16" src={briefcase} alt="breifcase"></Image>
                  <h5 className='text-sm font-normal font-salsa-without-letter-spacing mt-3 text-countUpText mt-6'>years in business</h5>
                  <h2 className='text-white font-semibold text-lg'><CountUp duration={1} end={10} />+</h2>
                </div>
              </div>

              <div className='flex gap-x-16 justify-center'>
                <div className='flex flex-col items-center'>
                  <Image className="w-16" src={guru} alt="breifcase"></Image>
                  <h5 className='text-white text-sm font-normal font-salsa-without-letter-spacing mt-3 text-countUpText'>solutions derived</h5>
                  <h2 className='text-white font-semibold text-lg'><CountUp duration={1.75} end={120} />+</h2>
                </div>
              </div>

              <div className='flex gap-x-16 justify-center'>
                <div className='flex flex-col items-center'>
                  <Image className="w-16" src={xVector} alt="breifcase"></Image>
                  <h5 className='text-white text-sm font-normal font-salsa-without-letter-spacing mt-3 text-countUpText'>Technology experts</h5>
                  <h2 className='text-white font-semibold text-lg'><CountUp end={150} decimal="," />+</h2>
                </div>

              </div>
              <div className='flex gap-x-16 justify-center'>
                <div className='flex flex-col items-center'>
                  <Image className="w-16" src={box} alt="breifcase"></Image>
                  <h5 className='text-white text-sm font-normal font-salsa-without-letter-spacing mt-3 countUpText'>Business derived</h5>
                  <h2 className='text-white font-semibold text-lg'><CountUp prefix='$' end={50} />M+</h2>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
      {/* our partners */}
      <section className="bg-spinnerBg bg-cover bg-center bg-no-repeat pt-16 pb-16">
        <CielHeading customClassName="" headingTextPrimaryClassName="text-center" headingTextPrimary={"OUR"} headingTextSecondary={" Partners."} />
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
                  <Image className="w-9/12" src={seasonedInvestors} alt="airBnB"></Image>
                </div>
              </div>
              <div >
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
      <section>
        <FooterBanner />
      </section>

    </>
  )
}