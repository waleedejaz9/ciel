import { useMemo, useState } from "react";
import CustomTabs from "@/components/CustomTabs";
import PaginateCard from "./PaginateCards";

const types: Record<number, string> = {
  0: "web",
  1: "design",
  2: "mobile",
  3: "game",
};

const BlogTabs = () => {
  const [type, setType] = useState("all");
  const dataTabs = useMemo(
    () => [
      {
        label: "Website",
        content: <PaginateCard type={type} />,
      },
      {
        label: "UI/UX/Design",
        content: <PaginateCard type={type} />,
      },
      {
        label: "Mobile Development",
        content: <PaginateCard type={type} />,
      },
      {
        label: "Games",
        content: <PaginateCard type={type} />,
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
export default BlogTabs;
