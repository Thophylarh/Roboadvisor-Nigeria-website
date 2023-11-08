import React, { useCallback, useState } from "react";
import { Progress, Slider } from "@mantine/core";
import { MdOutlineHelp } from "react-icons/md";
import Button from "@/components/buttons";
import BarChart from "@/components/charts/BarChart";
type Props = {};

const smartData = [
  {
    id: 0,
    title: "US Stocks",
    icon: <MdOutlineHelp />,
  },
  {
    id: 1,
    title: "Foreign Stocks",
    icon: <MdOutlineHelp />,
  },
  {
    id: 2,
    title: "Emerging Markets",
    icon: <MdOutlineHelp />,
  },
  {
    id: 3,
    title: "Dividend Stocks",
    icon: <MdOutlineHelp />,
  },
  {
    id: 4,
    title: "Municipal Bonds",
    icon: <MdOutlineHelp />,
  },
  {
    id: 5,
    title: "TIPS",
    icon: <MdOutlineHelp />,
  },
];

const SmarterInvestment = (props: Props) => {
  const [value, setValue] = useState<number>(40);

  const generateRandomNumberArray = useCallback((length: number) => {
    const randomNumbers: any[] = [];

    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      randomNumbers.push(randomNumber);
    }

    return randomNumbers;
  }, []);

  return (
    <div className="md:py-6 py-10">
      <div className="md:flex sm:block items-center gap-x-8 ">
        <div className="bg-[#230b59] text-white md:w-8/12 h-auto w-full  animate__animated animate__fadeInLeft relative">
          <div className="p-4 bg-white md:w-[420px] w-[300px] rounded-md mx-4 px-2 -top-12 md:left-[25%] left-[10%] absolute ">
            <div className="flex items-center justify-between my-2">
              <h5 className="font-semibold md:text-xl text-base ">
                Risk score:{value}
              </h5>
              <p className="md:text-sm text-xs">Example portfolio</p>
            </div>
            <Slider
              value={value}
              onChange={setValue}
              className="md:w-[400px]"
            />
          </div>
          <div className="px-12 md:flex pt-[3rem] md:items-center gap-x-10">
            <div className="">
              {smartData.map(({ id, title, icon }) => (
                <div className="flex items-center gap-x-4 mt-4 " key={id}>
                  <p className="text-[#dadef1] md:text-base text-sm">{title}</p>
                  <div>{icon}</div>
                </div>
              ))}
            </div>
            <div className=" h-full w-full md:mt-0 mt-6 ">
              <BarChart graphData={generateRandomNumberArray(6)} />
            </div>
          </div>
          <div className="md:flex items-center justify-between px-12 hidden">
            <div className="">
              <p className="text-white">Real Estate</p>
              <p className="text-white">Tips</p>
            </div>
            <div>
              <div className="flex items-center gap-x-4">
                <p className="text-white">0%</p>
                <p className="text-white">US Bonds</p>
              </div>
              <div className="flex items-center gap-x-4">
                <p className="text-white">0%</p>
                <p className="text-white">Emerging Market Bonds</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-x-4">
                <p className="text-white">0%</p>
                <p className="text-white">Corporate Bonds</p>
              </div>
              <div className="pb-4">
                <p className="text-white">0%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:p-0 p-4 animate__animated animate__fadeInRight">
          <h1 className="italic text-3xl md:text-6xl font-serif font-normal md:w-[10px]">
            Smarter investing brilliantly personalized.
          </h1>
          <p className="md:py-8 py-4 md:text-base text-sm">
            Just answer a few questions,and we`ll build you <br /> a
            personalized portfolio of low-cost index funds <br /> from up to 17
            global asset classes. Our software <br /> handles all the
            trading,rebalancing, and other <br /> busywork to help grow your
            wealth for the long term
          </p>
          <Button className="bg-[#230b59] text-white py-3 px-4 md:px-8 rounded sm md:text-base text-sm">
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SmarterInvestment;
