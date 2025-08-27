import Image from "next/image";
import { Fragment } from "react";
import * as services from "assets/services";
import SubHeading from "@/components/SubHeading";
import SectionHeading from "@/components/SectionHeading";

type IProps = {
  side_img: any;
  order?: string;
  description: string;
  sub_heading?: string;
  primary_title: string;
  is_desc_gray?: boolean;
  primary_left?: boolean;
  secondary_title: string;
  bulletContent: string[];
  secondary_detail?: string;
  is_large_content?: boolean;
  isPrimaryBullets?: boolean;
  headingTextClassName?: string;
  is_gray_bulletsIcon?: boolean;
};

const DevelopmentProcess = ({
  side_img,
  order = "",
  description,
  primary_title,
  bulletContent,
  secondary_title,
  sub_heading = "",
  is_desc_gray = true,
  primary_left = false,
  secondary_detail = "",
  isPrimaryBullets = false,
  is_large_content = false,
  headingTextClassName = "",
  is_gray_bulletsIcon = false,
}: IProps) => {
  return (
    <>
      <section className="flex justify-center">
        <div className="container mx-auto my-6">
          <div className="grid gris-cols-1 xl:grid-cols-2 bg-requestConsultation">
            <div className={`flex justify-center flex-col ${order}`}>
              <div className="flex flex-col">
                {sub_heading && (
                  <SubHeading
                    headingText={sub_heading}
                    is_large_content={is_large_content}
                    headingTextClassName={headingTextClassName}
                  />
                )}
                <SectionHeading
                  isCenterdAlign={false}
                  isPrimaryLeft={primary_left}
                  primary_title={primary_title}
                  not_primary={headingTextClassName}
                  secondary_detail={secondary_detail}
                  secondary_title={`${secondary_title}`}
                />
              </div>
              <span
                className={`${
                  is_desc_gray ? "text-ptColor" : "text-paragraph"
                } w-8/12 font-normal text-sm track-wide mt-4`}>
                {description}
              </span>
              <div className="grid grid-cols-2 gap-y-1 pt-8">
                {bulletContent.map((val) => (
                  <Fragment key={val}>
                    <div className="flex items-center gap-2.5">
                      <Image
                        src={
                          is_gray_bulletsIcon
                            ? services.gray_bar
                            : services.black_bar
                        }
                        alt="gray bar icon"
                      />
                      <h5
                        className={`font-Montserrat ${
                          isPrimaryBullets ? "text-primary1" : ""
                        } capitalize font-medium`}>
                        {val}
                      </h5>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
            <div
              className={`flex justify-center md:justify-center mt-3 md:mt-0`}>
              <div className="w-8/12">
                <Image src={side_img} alt={`side image here`} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DevelopmentProcess;
