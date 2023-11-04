import { carImg } from "@/assets/jpg";
import { PhoneImg } from "@/assets/png";
import Button from "@/components/buttons";
import ProgressBar from "@/components/progressbar/ProgressBar";
import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player/lazy";

type Props = {};

const Custom = (props: Props) => {
  return (
    <div className="flex items-center justify-between flex-row-reverse">
      <div className="w-4/12 animate__animated animate__fadeInUp ">
        <div className="space-y-4">
          <h4 className="text-6xl">
            You make it <br /> custom.We`ll do <br /> the rest.
          </h4>
          <p className="">
            Choose from hundreds of funds in categories like clean <br />{" "}
            energy,tech,and crypto and we`ll handle the trades and <br />{" "}
            rebalance your portfolio for you. Or start with a portfolio <br />{" "}
            designed around your values with our{" "}
            <span className="underline">Socially Responsible portfolio.</span>{" "}
            We make it easy and safe to customize by helping <br /> you see when
            your choices won`t be in line with your <br /> preferred risk level
          </p>
          <Button className="bg-blue-600 text-white px-8 py-4 rounded-md">
            Get Started
          </Button>
        </div>
      </div>
      <div>
        <div className="relative w-8/12 animate__animated animate__fadeInUp">
          <Image
            src={carImg}
            alt="phone-img"
            className="relative w-[1200px]  h-[600px] object-fit"
          />
        </div>
        <div>
          {/* <div className="">
            <div className="bg-white shadow-sm rounded-md w-[120] h-[70px] p-4 absolute -bottom-[175%] left-[50%] space-y-2 animate__animated animate__fadeInUp  animate__delay-2s">
              <div className="flex items-center  gap-x-10">
                <p>US Direct Indexing</p>
                <p>15%</p>
              </div>
              <div>
                <ProgressBar percentage={15} />
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-md w-[120] h-[70px] p-4 absolute -bottom-[190%] left-[45%] animate__animated animate__fadeInUp animate__delay-3s space-y-2 ">
            <div className="flex items-center gap-x-10">
              <p>Emerging Markets</p>
              <p>10%</p>
            </div>
            <div>
              <ProgressBar percentage={10} />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Custom;
