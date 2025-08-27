"use client"
import { useMemo, useState } from "react";
import Stack from "./Stack";
import CustomTabs from "@/components/CustomTabs";

const types: Record<number, string> = {
  0: "all",
  1: "web",
  2: "design",
  3: "game",
};

const StackTabs = () => {
  const [type, setType] = useState("all");
  const dataTabs = useMemo(
    () => [
      {
        label: "All",
        content: <Stack type={type} />,
      },
      {
        label: "Web Development",
        content: <Stack type={type} />,
      },
      {
        label: "Design",
        content: <Stack type={type} />,
      },
      {
        label: "Game Development",
        content: <Stack type={type} />,
      },
    ],
    [type]
  );

  const handleTypeChange = (index: number) => {
    setType(types[index]);
  };

  return (
    <>
      <CustomTabs dataTabs={dataTabs} handleTypeChange={handleTypeChange} />
    </>
  );
};

export default StackTabs;
