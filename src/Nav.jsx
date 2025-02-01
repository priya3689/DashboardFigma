import logo from "./images/LogoIcon.png";
import {  ChevronsLeftRightIcon,  Search } from "lucide-react";
import { NavSideMenu } from "./NavSideMenu";

function Nav() {
  return (
    <div className="w-[292px] py-6 px-4  border-r-[#0B1739] bg-customBlue shadow-2xl  mb-4 flex flex-col  gap-6 ">
      <div className="flex flex-row  items-center justify-between">
        <div className="flex flex-row">
          <img src={logo} alt="Logo" />
          <span className="px-2">DashDark X</span>
        </div>
       
        <ChevronsLeftRightIcon size={16} strokeWidth="1"/>
      </div>
      <div className="relative">
        <input
          type="search"
          className="text-color-dd w-full pl-8  h-8 bg-secondDark border-[2px] border-[#343B4F] rounded text-sm"
          placeholder="Search For"
        />

        <Search className="h-4 w-4 absolute top-2 left-3 " color="#AEB9E1" />
      </div>
      <div className="w-full font-bold">
       
        <NavSideMenu/>
      </div>
    </div>
  );
}

export default Nav;
