"use client";
import React, { FC, ChangeEvent } from "react";

interface InputProps {
  name: string;
  placeholder: string;
  type: string;
  value: string | number;
  optional: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  name,
  placeholder,
  type,
  optional = "",
  value,
  handleChange,
}) => {
  return (
    <div>
      <label
        className="font-Montserrat font-xl font-bold text-left capitalize text-input block pt-3.5"
        htmlFor=""
      >
        {name}{" "}
        <span className="font-Montserrat text-sm font-normal text-blueLight">
          {optional}
        </span>
      </label>
      <input
        className="my-3.5 bg-inputBg h-12 rounded-lg w-full pl-2"
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
