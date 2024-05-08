import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Menu from "./Menu";
import Descripcion from "./Descripcion";
export const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      <nav className="w-full h-24 flex flex-col justify-center sticky top-0 z-50 shadow-sm  bg-[#fffeef]">
        <div className="container mx-auto lg:px-3  w-full">
          <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-x-2">
                <h2 className="text-black font-semibold text-xl relative">
                  MindMend
                  <p className="absolute top-0  left-full text-xs">TM</p>
                </h2>
              </div>
            </div>

            <ul className="flex items-center xl:gap-2 gap-x-2 max-lg:hidden">
              <button className="bg-transparent rounded-full px-20  h-10 border-gray-950  text-secondary border hover:bg-primary hover:text-white cursor-pointer text-base transition-bg hover:border hover:border-primary">
                About
              </button>
              <button className="bg-transparent rounded-full px-20  h-10 border-gray-950  text-secondary border hover:bg-primary hover:text-white cursor-pointer text-base transition-bg hover:border hover:border-primary">
                Products
              </button>
              <button className="bg-transparent rounded-full px-20  h-10 border-gray-950  text-secondary border hover:bg-primary hover:text-white cursor-pointer text-base transition-bg hover:border hover:border-primary">
                Team
              </button>
              <button className="bg-transparent rounded-full px-20  h-10 border-gray-950  text-secondary border hover:bg-primary hover:text-white cursor-pointer text-base transition-bg hover:border hover:border-primary">
                Contact
              </button>
            </ul>
          </div>
        </div>
      </nav>
      <Menu />
      <Descripcion />
    </>
  );
};
