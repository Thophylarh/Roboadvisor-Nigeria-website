import React from "react";

type Props = {};

const RiskLevel = (props: Props) => {
  return (
    <div className="md:p-10 p-6">
      <div className="risklevel-bg flex items-center justify-center ">
        <p className="text-white md:text-4xl text-xl font-bold">
          What level of risk suits you best?
        </p>
      </div>
    </div>
  );
};

export default RiskLevel;
