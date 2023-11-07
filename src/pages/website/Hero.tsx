import Image from "next/image";
import React from "react";
import heroBg from "../../assets/png/hero-img.png";
import Button from "@/components/buttons";
import { Menu } from "@mantine/core";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="py-4 md:px-12">
      <div className="md:flex blockmd:flex-row items-start md:gap-x-4 flex-row-reverse">
        <div className="md:w-8/12 sm:w-screen ">
          <Image src={heroBg} alt="" className="object-fit bg-no-repeat" />
          <div className="md:flex items-start gap-x-4 md:py-6 py-4 text-[8px] md:text-base md:px-0 px-4 hidden">
            <div>
              <h4 className="text-[10px] md:text-xl">
                <span className="font-bold">N</span>nerdwallet{" "}
              </h4>
              <p>Best Robo-adbisor, Portfolio Options,2023</p>
              <p>Best Robo-advisor, IRA, 2023</p>
            </div>
            <div>
              <h4 className="text-[10px] md:text-xl">
                <span className="font-bold">I</span>Investopedia{" "}
              </h4>
              <p>Best Robo-advisor,2022</p>
              <p>Best Robo-advisor,2020</p>
            </div>
            <div>
              <h4 className="font-bold md:text-xl sm:text-[10px]">690K+</h4>
              <p>Trusted clients</p>
            </div>
            <div>
              <h4 className="font-bold md:text-xl sm:text-[10px]">$43B+</h4>
              <p>In assets managed</p>
            </div>
            <div>
              <h4 className="font-bold md:text-xl sm:text-[10px]">4.9</h4>
              <p>Google Play Store</p>
            </div>
            <div>
              <h4 className="font-bold md:text-xl sm:text-[10px]">4.8</h4>
              <p>Apple App Store</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/12  md:block md:px-0 px-4 md:py-0 py-8">
          <p className=" text-5xl md:text-7xl font-Dancing_script ">
            There`s no secret to long-term wealth, but if there were it would be
            this:
          </p>
          <p className="font-bold md:text-6xl font-sans text-4xl  ">
            automated <br /> index <br /> investing
          </p>
          <p className="mt-6">
            Even with the inevitable ups and downs of the market, our <br />{" "}
            expert-built, globally-diversified Automated Investing <br />{" "}
            Account makes it easy to start building long-term wealth by <br />{" "}
            managing your risk, maximizing returns, and minimizing taxes
          </p>
          <Button className="text-white bg-[#230b59] py-2 md:py-3 px-4 md:px-6 rounded-md mt-4 md:text-base sm:text-xs ">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
