import Link from "next/link";
import { SideDrawerWrapper } from "../wrapper/SideDrawerWrapper";
import Button from "../buttons";
import { FaTimes } from "react-icons/fa";

export const SideDrawer = ({
  isOpen,
  closeDrawer,
}: {
  isOpen: boolean;
  closeDrawer: () => void;
}) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    closeDrawer();
  };

  return (
    <SideDrawerWrapper>
      <div className="bg-[#230b59] p-4   mt-0 w-[300px] rounded-md h-screen">
        <div className="flex items-center justify-end">
          <button onClick={handleClick} className="text-white">
            <FaTimes className=" " />
          </button>
        </div>

        <div className="flex flex-col space-y-6 text-white ">
          <Link href="#" onClick={handleClick}>
            Cash
          </Link>
          <Link href="!#" onClick={handleClick}>
            Bonds
          </Link>
          <Link href="!#" onClick={handleClick}>
            Automated Investment
          </Link>
          <Link href="!#" onClick={handleClick}>
            Stocks
          </Link>
          <Link href="!#" onClick={handleClick}>
            Learn
          </Link>
          <div className="">
            <Button className="  text-blue-600 ">Login</Button>
          </div>
          <div className="">
            <Button className="   ">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </SideDrawerWrapper>
  );
};
