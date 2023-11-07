import Button from "@/components/buttons";
import Animations from "@/components/utils/Animation";
import React from "react";

type Props = {};

const Taxes = (props: Props) => {
  return (
    <div className="h-[50vh] flex flex-col items-center justify-center md:px-0 px-4">
      <Animations>
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-5xl italic font-serif">
            Let your taxes pay you for a change
          </h2>
          <div>
            <h4 className="text-base md:text-lg font-semibold">
              Tax-Loss Harvesting can find many small wins to boost your
              after-tax returns
            </h4>
            <p className="md:text-base text-sm w-[350px] md:w-[800px]">
              Our software monitors your investment to automatically trade
              similar assets that lose value, which  can help you lower
              your tax bill while still keeping your portfolio on track. When
              you offset your capital gains by claiming many small
              losses, you can put the savings right back to work in the 
              market. No tractors or shovels required.
            </p>
          </div>
          <div>
            <Button className="border border-[#230b59] text-[#230b59] py-2 px-4 md:px-6 rounded-md md:text-base text-sm">
              Learn more
            </Button>
          </div>
        </div>
      </Animations>
    </div>
  );
};

export default Taxes;
