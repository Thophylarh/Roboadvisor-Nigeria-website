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
        <div className="md:flex items-center gap-x-4 hidden ">
          <Link href="#" onClick={handleClick}>
            Cash
          </Link>
          <Link href="!#" onClick={handleClick}>
            Bonds
          </Link>
          <Link href="!#" onClick={handleClick}>
            Automated Investment
          </Link>

          {/* <Menu
            trigger="click"
            openDelay={100}
            closeDelay={400}
            shadow="lg"
            width={800}
            arrowPosition="center"
          >
            <Menu.Target>
              <Link href="!#" onClick={handleClick}>
                Automated Investing
              </Link>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item>
                <div className="flex items-center gap-x-2">
                  <div className="w-8/12 ">
                    <div className="flex items-center gap-x-4">
                      <Image src={hourglass} alt="" className="w-20 h-20" />
                      <div className="">
                        Automated Index Investing
                        <p>icon</p>
                        <p>
                          We`ll build and manage a diversified <br /> portfolio
                          of low-cost index funds <br /> personified for you
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-4/12 ">
                    {menuData.map(({ id, title }) => (
                      <ul key={id} className="my-2">
                        <li>{title}</li>
                      </ul>
                    ))}
                  </div>
                </div>
              </Menu.Item>

             
            </Menu.Dropdown>
          </Menu> */}

          <Link href="!#" onClick={handleClick}>
            Stocks
          </Link>
          <Link href="!#" onClick={handleClick}>
            Learn
          </Link>
        </div>
        <div className="md:flex items-center gap-x-4 hidden">
          <Button className="border border-blue-600 text-blue-600 py-3 rounded-md px-6">
            Login
          </Button>
          <Button className="bg-blue-600 py-3 rounded-md text-white px-4">
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
