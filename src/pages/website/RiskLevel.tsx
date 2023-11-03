import React from "react";

type Props = {};

const RiskLevel = (props: Props) => {
  return (
    <div className="p-10">
      <div className="risklevel-bg flex items-center justify-center ">
        <p className="text-white text-4xl font-bold">
          What level of risk suits you best?
        </p>
      </div>
    </div>
  );
};

export default RiskLevel;
