import { PhoneImg } from "@/assets/jpg";
import Button from "@/components/buttons";
import Image from "next/image";
import React from "react";

type Props = {};

const Custom = (props: Props) => {
  return (
    <div className="flex items-center">
      <div>
        <h4>
          You make it <br /> custom.We`ll do <br /> the rest.
        </h4>
        <p className="">
          Choose from hundreds of funds in categories like clean <br />{" "}
          energy,tech,and crypto and we`ll handle the trades and <br />{" "}
          rebalance your portfolio for you. Or start with a portfolio <br />{" "}
          designed around your values with our{" "}
          <span className="underline">Socially Responsible portfolio</span>. We
          make it easy and safe to customize by helping <br /> you see when your
          choices won`t be in line with your <br /> preferred risk level
        </p>
        <Button className="bg-blue-600 text-white px-8 py-4 rounded-md">
          Get Started
        </Button>
      </div>
      <div>
        <div>
          <Image src={PhoneImg} alt="phone-img" className="h-[400px]" />
        </div>
        <div>cards</div>
      </div>
      <div>col3</div>
    </div>
  );
};

export default Custom;
