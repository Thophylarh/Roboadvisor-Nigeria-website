import Button from "@/components/buttons";
import React from "react";

type Props = {};

const Fee = (props: Props) => {
  return (
    <div className="h-[60vh] flex flex-col items-center justify-center bg-[#505ca6] ">
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-medium italic text-[#dadef1]">
          Our fee is small, <br/> but we think its`s a really big deal.
        </h2>
        <div className="space-y-4 ">
          <h4 className="text-6xl font-bold text-[#dadef1]">0.25%</h4>
          <p className="text-[#dadef1]">
            For just 0.25% a year, Automated Investing Account client gets all
            the <br/> benefits of always-on automation, expert-curated portfolios,and
            Tax-Loss <br/> Harvesting that typically covers our fee more than 11x
            over.
          </p>
        </div>
        <div>
          <Button className="border  text-white py-2 px-6 rounded-md">
            See how much it costs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Fee;
