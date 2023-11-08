import Button from "@/components/buttons";
import Animations from "@/components/utils/Animation";
import React from "react";

type Props = {};

const Fee = (props: Props) => {
  return (
    <div className="h-[60vh] flex flex-col items-center justify-center bg-[#505ca6] md:px-0 px-4">
      <Animations>
        <div className="text-center space-y-6 animate__animated animate__fadeInUp">
          <div className="space-y-2">
            <h2 className="text-xl md:text-6xl font-medium font-sans text-[#dadef1] ">
              Our fee is small,{" "}
            </h2>
            <p className="font-serif italic text-xl md:text-6xl font-medium  text-[#dadef1]">
              but we think its`s a really big deal.
            </p>
          </div>

          <div className="space-y-4 ">
            <h4 className="text-2xl md:text-7xl font-[700] font-sans text-[#dadef1]">
              0.25%
            </h4>
            <p className="text-[#dadef1] md:text-base text-sm">
              For just 0.25% a year, Automated Investing Account client gets all
              the <br /> benefits of always-on automation, expert-curated
              portfolios,and Tax-Loss <br /> Harvesting that typically covers
              our fee more than 11x over.
            </p>
          </div>
          <div className="animate__animated animate__fadeInUp">
            <Button className="border  text-white py-2 px-6 rounded-md md:text-base text-sm">
              See how much it costs
            </Button>
          </div>
        </div>
      </Animations>
    </div>
  );
};

export default Fee;
