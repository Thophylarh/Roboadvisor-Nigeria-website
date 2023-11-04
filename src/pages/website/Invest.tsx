import { houseImg } from "@/assets/png";
import Button from "@/components/buttons";
import Image from "next/image";
import React from "react";

type Props = {};
const investData = [
  {
    id: 0,
    title: "Invest for retirement.",
    content: "Traditional IRA, Roth IRA, SEP IRA, 401(k) Rollover",
  },
  {
    id: 1,
    title: "Invest for education.",
    content: "529 Account for college savings",
  },
  {
    id: 0,
    title: "Invest for everything else.",
    content: "Individual Accounts, Joint Accounts,Trust Accounts",
  },
];

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
        <div className="space-y-6 w-6/12">
          {investData.map(({ id, title, content }) => (
            <div key={id} className="">
              <h4 className="text-4xl font-bold">{title}</h4>

              <p>{content}</p>
            </div>
          ))}
        </div>
        <div className="w-6/12 space-y-4">
          <h4 className="text-4xl font-bold">
            {" "}
            Invest even faster <br /> with the Wealthfront <br /> Cash Account.
          </h4>
          <p>
            Enjoy a 5.00% APY on all your cash. Pay bills,save for big <br />
            purchases, or get in the market in minutes.Our technology lets{" "}
            <br /> you automate your paycheck and organize cash effortlessly
          </p>
          <div>
            <Button className="underline text-[#230b59]">Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
