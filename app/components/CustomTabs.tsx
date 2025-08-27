import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel, TabPanels } from "@chakra-ui/react";

type dataTabsTypes = {
  label: string;
  content: JSX.Element;
}[];

const CustomTabs = ({
  dataTabs,
  handleTypeChange,
}: {
  dataTabs: dataTabsTypes;
  handleTypeChange: (index: number) => void;
}) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
    handleTypeChange(index);
  };

  return (
    <>
      <Tabs
        // position="relative"
        variant="unstyled"
        index={tabIndex}
        onChange={handleTabsChange}
      >
        <TabList className="flex justify-center borderBottom">
          {dataTabs.map((tab, index) => (
            <Tab
              key={index}
              className={`font-Montserrat ${
                tabIndex === index
                  ? "font-bold border border-l-0 border-t-0 border-r-0 border-b-3 border-primary1 text-primary1 h-10 pl-0 pr-0"
                  : "text-blurColor"
              }`}
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="py-10">
          {dataTabs.map((tab, index) => (
            <TabPanel key={index}>
              <div className="">{tab.content}</div>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};

export default CustomTabs;
