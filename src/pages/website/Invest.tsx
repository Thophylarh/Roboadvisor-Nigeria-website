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
    <div className="md:p-20 relative p-4">
      <div>
        <div className="md:flex items-start justify-between">
          <h2 className="text-[1.3rem] md:text-[3rem] md:w-6/12 italic font-serif ">
            Investing that accounts for your needs.
          </h2>
          <div className="w-4/12 ">
            <Image
              src={houseImg}
              alt="house-img"
              className="md:w-[300px] md:h-[300px] absolute -top-14 md:block hidden"
            />
          </div>
        </div>
        <div className="border-b border-[#333] my-2 md:my-10"></div>
      </div>
      <div className="md:flex justify-between items-center">
        <div className="space-y-6 w-6/12 animate__animated animate__fadeInLeft">
          {investData.map(({ id, title, content }) => (
            <div key={id} className="">
              <h4 className="text-xl md:text-4xl font-bold">{title}</h4>

              <p className="md:text-base text-sm">{content}</p>
            </div>
          ))}
        </div>
        <div className="w-6/12 space-y-4 animate__animated animate__fadeInRight">
          <h4 className="text-xl md:text-4xl font-bold">
            {" "}
            Invest even faster <br /> with the Wealthfront <br /> Cash Account.
          </h4>
          <p className="md:text-base text-sm">
            Enjoy a 5.00% APY on all your cash. Pay bills,save for big <br />
            purchases, or get in the market in minutes.Our technology lets{" "}
            <br /> you automate your paycheck and organize cash effortlessly
          </p>
          <div>
            <Button className="underline text-[#230b59] md:text-base text-sm">Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
