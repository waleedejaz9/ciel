import Image from "next/image";
import React, { useCallback, ChangeEvent, FC } from "react";
import { useDropzone } from "react-dropzone";
import * as global_icons from "../../global";

interface InputProps {
  name: string;
  optional: string;
  value: string;
  setValue: React.Dispatch<
    React.SetStateAction<{
      name: string;
      project: string;
      email: string;
      budget: number | string;
      number: number | string;
      attachment: string | File[];
      description: string;
    }>
  >;
}

const DragInput: FC<InputProps> = ({ name, optional, value, setValue }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setValue((prevState) => ({
        ...prevState,
        attachment: acceptedFiles[0]?.name || "", // Update the 'attachment' property with the file name
      }));
    },
    [setValue]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <>
      <label
        className="font-Montserrat font-xl font-bold text-left capitalize text-input block pt-3.5"
        htmlFor=""
      >
        {name}
        <span className="font-Montserrat text-sm font-normal text-blueLight pl-1.5">
          {optional}
        </span>
      </label>
      <div
        className="my-3.5 bg-inputBg h-12 rounded-lg w-full pl-2 flex items-center"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div className="flex justify-between w-full pr-1.5">
          {value ? (
            value
          ) : (
            <>
              <p className="font-Montserrat text-base text-inputPh font-bold">
                Drag & drop files or{" "}
                <span
                  style={{ textDecoration: "underline" }}
                  className="pl-1 underline-offset-1 text-blueDark font-bold"
                >
                  Browse
                </span>
              </p>
              <Image src={global_icons.upload} alt="upload icon" />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DragInput;
