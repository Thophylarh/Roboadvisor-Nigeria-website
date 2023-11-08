import Image from "next/image";
import logo from "../../assets/svgs/logo.svg";
import Button from "../buttons";
import { Menu, MenuDropdown, MenuTarget } from "@mantine/core";
import Link from "next/link";
import hourglass from "../../assets/png/hourglass.png";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { SideDrawer } from "../drawer/SideDrawer";
import { BsArrowUpRight } from "react-icons/bs";
import { PiCaretUpBold } from "react-icons/pi";

const menuData = [
  {
    id: 0,
    title: "Socially Responsible(SRI)",
  },
  {
    id: 1,
    title: "Retirement(IRAs)",
  },
  {
    id: 2,
    title: "College(529s)",
  },
];

const NavBar = () => {
  const handleClick = (e: any) => {
    e.preventDefault();
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <Image src={logo} alt="" />
        </div>
        <div className="md:flex items-center gap-x-4 hidden text-[#230b59]">
          <Link href="#" onClick={handleClick}>
            Cash
          </Link>
          <Link href="!#" onClick={handleClick}>
            Bonds
          </Link>

          <Menu
            trigger="hover"
            openDelay={100}
            closeDelay={400}
            shadow="md"
            width={400}
            arrowPosition="center"
            withArrow
          >
            <Menu.Target>
              <Link
                href="!#"
                onClick={handleClick}
                className="hover:underline flex items-center "
              >
                Automated Investing
                <div></div>
              </Link>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item>
                <div className="flex items-center flex-col ">
                  <div className="w-full ">
                    <div className="flex items-center gap-x-2 py-10">
                      <Image src={hourglass} alt="" className="w-24 h-24" />
                      <div className=" space-y-2">
                        <div className="flex items-center gap-x-1">
                          <h4 className="font-sans italic text-lg font-semibold hover:border-b-2 hover:border-[#230b59]">
                            Automated Index Investing
                          </h4>

                          <div>
                            <BsArrowUpRight />
                          </div>
                        </div>

                        <p className="w-[250px]">
                          We`ll build and manage a diversified portfolio of
                          low-cost index funds personified for you
                        </p>
                        <div className="border-b border-[#230b59] w-[150px] pt-2"></div>
                        <p className="font-[600] pt-2">
                          Explore all investment
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="w-4/12 bg-[#f3f4f6] h-full">
                    {menuData.map(({ id, title }) => (
                      <ul key={id} className="my-2">
                        <li>{title}</li>
                      </ul>
                    ))}
                  </div> */}
                </div>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <Link href="!#" onClick={handleClick}>
            Stocks
          </Link>
          <Link href="!#" onClick={handleClick}>
            Learn
          </Link>
        </div>
        <div className="md:flex items-center gap-x-4 hidden">
          <Button className="border border-[#230b59] text-[#230b59] py-2 rounded-md px-4">
            Login
          </Button>
          <Button className="bg-[#230b59] py-2 rounded-md text-white px-3">
            Get Started
          </Button>
        </div>
        <div className="md:hidden">
          <div>
            <button onClick={toggleDrawer}>
              {isDrawerOpen ? <FaTimes /> : <FaBars />}
            </button>
            {isDrawerOpen && (
              <div>
                <SideDrawer isOpen={isDrawerOpen} closeDrawer={toggleDrawer} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
