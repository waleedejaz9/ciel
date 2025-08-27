"use client"
import JobDetails from "./JobDetails.json";
import Link from "next/link";
import styles from './jobCard.module.css'
import Image from "next/image";
import { jobsDetailsRightNavBtn } from "@globals";
const JobCards = () => {
    return (<>
        {JobDetails.map((item, index) => {
            {
                return (
                    <div key={index} className={`${styles.jobCardShadow} shadow shadow-gradientButtonColor shadow-md rounded-lg hover:bg-gradient-to-r from-gradientColor3 via-gradientColor2 to-gradientColor1 p-0.5`}>
                        <Link href={`/jobs/${item.id}`}>
                            <div className={`pt-5 pb-5 rounded-md  bg-white back`}>
                                <div className="flex justify-center">

                                    <h1 className={`${styles.jobTitleShadow} w-8/12 text-center text-primary1 font-Montserrat font-bold md:text-3xl text-xl leading-7 tracking-wide capitalize`}>
                                        {item.jobTitle}
                                    </h1>
                                </div>
                                <div className="flex justify-center gap-x-10 mt-5">
                                    <div className="flex flex-col">
                                        <h3 className="text-center text-sm font-bold font-Montserrat tracking-tight">
                                            Location
                                        </h3>
                                        <h3 className="text-center capitalize text-xs font-medium text-jobDetailText">
                                            {item.location}
                                        </h3>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-center text-sm font-bold font-Montserrat tracking-tight">
                                            Last Date
                                        </h3>
                                        <h3 className="text-center capitalize text-xs font-medium text-jobDetailText">
                                            {item.lastDate}
                                        </h3>
                                    </div>
                                </div>
                                <h3 className="text-center text-sm font-bold font-Montserrat tracking-tight mt-3">
                                    Skills need
                                </h3>
                                <div className="flex justify-center">
                                    {
                                        item.Skills.map((skill, index) => {
                                            return (
                                                <Image className="jobImage" width={50} height={20} key={index} src={skill} alt="skill"></Image>
                                            )
                                        })
                                    }
                                </div>
                                <div className="flex justify-center mt-10">
                                    <div className={`${styles.button}`}>
                                        <span className={`${styles.text}`}>Apply Now</span>
                                        <div className={`rounded-full bg-white border border-gray items-center flex justify-center  p-4 w-2/12 `}>
                                            <Image className={`w-3  ${styles.icon}`} src={jobsDetailsRightNavBtn} alt="jobsDetailsRightNavBtn"></Image>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                )
            }
        })}
    </>)
}
export default JobCards;