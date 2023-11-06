import { carImg } from "@/assets/jpg";
import { PhoneImg } from "@/assets/png";
import Button from "@/components/buttons";
import ProgressBar from "@/components/progressbar/ProgressBar";
import Animations from "@/components/utils/Animation";
import Image from "next/image";
import React from "react";

type Props = {};

const Custom = (props: Props) => {
  return (
    <div className="md:flex items-center justify-between flex-row-reverse md:px-0 px-4 md:space-y-0 space-y-8 md:py-0 py-8 relative">
      <div className="md:w-4/12 animate__animated animate__fadeInUp px-4">
        <div className="space-y-4">
          <h4 className="md:text-6xl text-3xl italic font-serif">
            You make it custom. We`ll do the rest.
          </h4>
          <p className="md:text-base text-sm">
            Choose from hundreds of funds in categories like clean <br />{" "}
            energy,tech,and crypto and we`ll handle the trades and <br />{" "}
            rebalance your portfolio for you. Or start with a portfolio <br />{" "}
            designed around your values with our{" "}
            <span className="underline">Socially Responsible portfolio.</span>{" "}
            We make it easy and safe to customize by helping <br /> you see when
            your choices won`t be in line with your <br /> preferred risk level
          </p>
          <Button className="bg-[#230b59] text-white px-4 md:px-8 py-2 md:py-4 rounded-md md:text-base text-sm">
            Get Started
          </Button>
        </div>
      </div>
      <div>
        <div className=" w-8/12 animate__animated animate__fadeInUp">
          <Image
            src={carImg}
            alt="phone-img"
            className="relative md:w-[1200px] md:h-[600px] md:object-fit w[600px] h-[300px]"
          />
        </div>
        <div>
          <div className="">
            <div className="bg-white shadow-sm rounded-md md:w-[300px] md:h-[100px] h-[60px] md:p-4 p-2 absolute md:top-[45%] md:left-[40%] bottom-[18%] left-[40%] animate__animated animate__fadeInUp animate__delay-3s space-y-2 ">
              <div className="">
                <div className="flex items-center justify-between md:text-sm text-[12px]">
                  <p>Emerging Markets</p>
                  <p>now</p>
                </div>
                <p className="md:text-sm text-[14px]">
                  {" "}
                  We automatically invested your $500
                </p>
              </div>
              <div className="md:blocck hidden  ">
                <ProgressBar percentage={10} />
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-md md:w-[300px] md:h-[100px] h-[60px] md:p-4 p-2 absolute md:top-[45%] md:left-[40%] bottom-[32%] left-[37%] animate__animated animate__fadeInUp animate__delay-3s space-y-2 ">
            <div className="">
              <div className="flex items-center justify-between md:text-sm text-[12px]">
                <p>Emerging Markets</p>
                <p>now</p>
              </div>
              <p className="md:text-sm text-[14px]">
                {" "}
                We saved you $78.11 on your taxes
              </p>
            </div>
            <div className="md:blocck hidden ">
              <ProgressBar percentage={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom;
