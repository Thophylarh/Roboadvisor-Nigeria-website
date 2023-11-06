import React from "react";

type Props = {};

const RiskLevel = (props: Props) => {
  return (
    <div className="md:p-10 p-4">
      <div className="risklevel-bg flex items-center justify-center hover:border-4 hover:border-[#230b59] transition-transform duration-300 hover:scale-105 ">
        <p className="text-white md:text-4xl text-xl font-bold">
          What level of risk suits you best?
        </p>
      </div>
    </div>
  );
};

export default RiskLevel;
