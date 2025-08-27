"use client";

import Image from "next/image";
import { underline } from "@globals";

type IProps = {
  primary_title: string;
  secondary_title: string;
  isPrimaryLeft?: boolean;
  not_primary?: string;
  isCenterdAlign?: boolean;
  secondary_detail?: string;
};

const SectionHeading = ({
  not_primary = "",
  secondary_detail = "Lets work togather",
  isCenterdAlign = true,
  ...props
}: IProps) => {
  return (
    <div className={isCenterdAlign ? "text-center" : ""}>
      <div className="flex flex-col justify-center font-Montserrat uppercase font-bold">
        {props.isPrimaryLeft ? (
          <p className="text-2xl">
            <span className={`${not_primary ? not_primary : "text-primary1"}`}>
              {props.primary_title}
            </span>
            {props.secondary_title}
          </p>
        ) : (
          <p className="text-2xl">
            {props.secondary_title}
            <span className={`${not_primary ? not_primary : "text-primary1"}`}>
              {props.primary_title}
            </span>
          </p>
        )}
        {secondary_detail && (
          <h5 className="capitalize font-thin py-1">{secondary_detail}</h5>
        )}

        <div className={`flex mt-2 ${isCenterdAlign ? "justify-center" : ""}`}>
          <Image src={underline} alt="underline" />
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
