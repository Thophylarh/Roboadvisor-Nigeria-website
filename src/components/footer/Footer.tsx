import { Whitelogo } from "@/assets/svgs";
import Image from "next/image";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="md:p-20 bg-[#18172b] h-[100vh] md:h-[50vh] p-4">
      <div className="grid grid-cols-1 md:grid-cols-5 cursor-pointer">
        <div>
          <Image src={Whitelogo} alt="logo" />
        </div>
        <div className="">
          <h4 className="text-white text-lg font-semibold my-4">Investing</h4>
          <ul className="text-white font-medium space-y-2 ">
            <li className="hover:underline">Automated Investing</li>
            <li className="hover:underline">Stock Investing</li>
            <li className="hover:underline">Explore all investments</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold my-4">Save</h4>
          <ul className="text-white font-medium space-y-2 ">
            <li className="hover:underline">Cash</li>
            <li className="hover:underline">ATM Locator</li>
            <li className="hover:underline">Pricing</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold my-4">Learn</h4>
          <ul className="text-white font-medium space-y-2 ">
            <li className="hover:underline">Blog</li>
            <li className="hover:underline">Help Center</li>
            <li className="hover:underline">
              What level of risk suits you best?
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold my-4">About</h4>
          <ul className="text-white font-medium space-y-2  ">
            <li className="hover:underline">About Us</li>
            <li className="hover:underline">Newsroom</li>
            <li className="hover:underline">Reviews</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
