import Image from "next/image";
import logo from "../../assets/svgs/logo.svg";
import Button from "../buttons";

const navLinkData = [
  {
    id: 1,
    path: "",
    title: "Cash",
  },
  {
    id: 2,
    path: "",
    title: "Bonds",
  },
  {
    id: 1,
    path: "",
    title: "Cash",
  },
  {
    id: 1,
    path: "",
    title: "Cash",
  },
];

const NavBar = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <Image src={logo} alt="" />
        </div>
        <div className="flex items-center gap-x-4">
          <p>Cash</p>
          <p>Bonds</p>
          <p>Automated Invesing</p>
          <p>Stocks</p>
          <p>Learn</p>
        </div>
        <div className="flex items-center gap-x-4">
          <Button className="border border-blue-600 text-blue-600 py-3 rounded-md px-6">
            Login
          </Button>
          <Button className="bg-blue-600 py-3 rounded-md text-white px-4">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
