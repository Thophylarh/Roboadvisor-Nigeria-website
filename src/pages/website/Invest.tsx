import { houseImg } from "@/assets/png";
import Image from "next/image";
import React from "react";

type Props = {};

const Invest = (props: Props) => {
  return (
    <div className="p-20 relative">
      <div>
        <div className="flex items-start justify-between">
          <h2 className="text-[3rem] w-6/12">
            Investing that accounts for your <br /> needs.
          </h2>
          <div className="w-4/12">
            <Image
              src={houseImg}
              alt="hose-img"
              className="w-[300px] h-[300px] absolute -top-14"
            />
          </div>
        </div>
        <div className="border-b border-[#333]  my-10"></div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h4>Invest for retirement</h4>
          <p>Traditional IRA, Roth IRA, SEP IRA, 401(k)Rollover</p>
        </div>
        <div>Invest even faster</div>
      </div>
    </div>
  );
};

export default Invest;
