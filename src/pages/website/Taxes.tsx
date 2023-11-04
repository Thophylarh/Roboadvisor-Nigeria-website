import Button from "@/components/buttons";
import React from "react";

type Props = {};

const Taxes = (props: Props) => {
  return (
    <div className="h-[50vh] flex flex-col items-center justify-center ">
      <div className="text-center space-y-6">
        <h2 className="text-5xl font-semibold">Let your taxes pay you for a change</h2>
        <div>
          <h4 className="text-lg font-semibold">
            Tax-Loss Harvesting can find many small wins to boost your after-tax
            returns
          </h4>
          <p>
            Our software monitors your investment to automatically trade similar
            assets that lose value, which <br /> can help you lower your tax
            bill while still keeping your portfolio on track. When you offset
            your <br /> capital gains by claiming many small losses, you can put
            the savings right back to work in the <br /> market. No tractors or
            shovels required.
          </p>
        </div>
        <div>
          <Button className="border border-blue-600 text-blue-600 py-2 px-6 rounded-md">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Taxes;
