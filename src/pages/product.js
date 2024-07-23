import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosSettings, IoIosCash, IoIosSync } from "react-icons/io";
import { BsFillWalletFill } from "react-icons/bs";
import { CiBank } from "react-icons/ci";
import Cards from "../components/cards";
import Header from "../components/header";

import Two from "../components/two";

import Add from "../components/add";

const Product = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="text-dark h-full w-72 flex flex-col bg-white fixed">
        {/* Top section */}
        <h1 className="py-5 text-black text-center bg-white font-chillax text-custom-large font-medium leading-custom-large tracking-custom">
  moo<span className="gradient-background">la</span>
</h1>
        <hr
          className="mx-auto"
          style={{
            width: "70%",
            height: "2px",
            backgroundColor: "rgb(217 214 214)",
            border: "none",
          }}
        />

        <div className="flex flex-col pt-10 p-[50px] overflow-y-auto font-inter">
          <MenuItem icon={<FaHome className="text-lg" />} text="Dashboard" />
          <MenuItem
            icon={<IoIosCash className="text-lg bg-white" />}
            text="Transaction"
          />
          <MenuItem
            icon={<IoIosSync className="text-lg" />}
            text="Send/Request"
          />
          <MenuItem
            icon={<BsFillWalletFill className="text-lg" />}
            text="Pockets"
          />
          <MenuItem icon={<FaHome className="text-lg" />} text="Spare Change" />
          <MenuItem icon={<FaHome className="text-lg" />} text="Waterfall" />
          <MenuItem icon={<CiBank className="text-lg" />} text="Money 101" />
        </div>

        {/* Bottom section */}
        <div className="flex-grow"></div>
        <div className="mt-auto pb-5 p-[50px] font-inter">
          <MenuItem
            icon={<IoIosSettings className="text-lg" />}
            text="Settings"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 py-5 px-[40px] h-screen bg-[#EAECF0] ml-72 overflow-y-auto">
        <Header />
        <Cards />
        <Two />
        <Add />
      </div>
    </div>
  );
};

// Custom component for menu items
const MenuItem = ({ icon, text }) => (
  <div className="flex items-center space-x-2 py-2 px-4 cursor-pointer text-black hover:bg-purple-200 hover:text-[#6200EE]">
    {React.cloneElement(icon, {
      className: `text-lg ${icon.props.className} group-hover:text-[#6200EE]`,
    })}
    <div className="text-lg">{text}</div>
  </div>
);

export default Product;
