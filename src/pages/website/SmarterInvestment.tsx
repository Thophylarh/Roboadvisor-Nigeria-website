import React from "react";
import { Progress } from "@mantine/core";
import { MdOutlineHelp } from "react-icons/md";
import Button from "@/components/buttons";
import BarChart from "@/components/charts/BarChart";
type Props = {};

const smartData = [
  {
    id: 0,
    title: "US Stocks",
    icon: <MdOutlineHelp />,
    percent: "45%",
  },
  {
    id: 1,
    title: "Foreign Stocks",
    icon: <MdOutlineHelp />,
    percent: "15%",
  },
  {
    id: 2,
    title: "Emerging Markets",
    icon: <MdOutlineHelp />,
    percent: "15%",
  },
  {
    id: 3,
    title: "Dividend Stocks",
    icon: <MdOutlineHelp />,
    percent: "9%",
  },
  {
    id: 3,
    title: "Dividend Stocks",
    icon: <MdOutlineHelp />,
    percent: "9%",
  },
];

const SmarterInvestment = (props: Props) => {
  return (
    <div className="">
      <div className="md:flex sm:block items-center gap-x-8 border-6 ">
        <div className="bg-[#230b59] text-white md:w-8/12 md:h-[80vh] w-full  ">
          <div className="px-12 md:flex pt-[6rem] md:items-start md:justify-between block">
            <div className="">
              {smartData.map(({ id, title }) => (
                <div className="flex items-center gap-x-4 mt-6" key={id}>
                  <p> {title} </p>
                  <div>
                    <MdOutlineHelp />
                  </div>
                </div>
              ))}
            </div>
            <div className="md:h-[50vh] md:w-[90vh] h-[24vh] md:mt-0 mt-6">
              <BarChart />
            </div>
          </div>
          <div className="md:flex items-center justify-between px-12 hidden">
            <div>
              <p>Real Estate</p>
              <p>Tips</p>
            </div>
            <div>
              <div className="flex items-center gap-x-4">
                <p>0%</p>
                <p>US Bonds</p>
              </div>
              <div className="flex items-center gap-x-4">
                <p>0%</p>
                <p>Emerging Market Bonds</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-x-4">
                <p>0%</p>
                <p>Corporate Bonds</p>
              </div>
              <div>
                <p>0%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:p-0 p-4">
          <h1 className="italics text-4xl md:text-6xl">
            Smarter <br /> investing <br /> brilliantly <br /> personalized.
          </h1>
          <p className="md:py-8 py-4">
            Just answer a few questions,and we`ll build you <br /> a
            personalized portfolio of low-cost index funds <br /> from up to 17
            global asset classes. Our software <br /> handles all the
            trading,rebalancing, and other <br /> busywork to help grow your
            wealth for the long term
          </p>
          <Button className="bg-blue-600 text-white py-3 px-8 rounded sm">
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SmarterInvestment;
