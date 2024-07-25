import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoIosSettings, IoIosCash, IoIosSync } from "react-icons/io";
import { BsFillWalletFill } from "react-icons/bs";
import { CiBank } from "react-icons/ci";
import Cards from "../components/cards";
import Header from "../components/header";
import Two from "../components/two";
import Add from "../components/add";

const Product = () => {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Offcanvas Sidebar (visible on sm and md screens) */}
      <div
        className={`lg:hidden fixed inset-0 z-50 w-64 bg-[#EAECF0] transition-transform duration-300 transform ${
          offcanvasOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ top: 0, left: 0 }}
      >
        <div className="text-dark flex flex-col h-full">
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
          <div className="flex flex-col flex-grow pt-10 p-[50px] font-inter">
            <MenuItem icon={<FaHome className="text-lg" />} text="Dashboard" />
            <MenuItem icon={<IoIosCash className="text-lg bg-white" />} text="Transaction" />
            <MenuItem icon={<IoIosSync className="text-lg whitespace-nowrap" />} text="Request" />
            <MenuItem icon={<BsFillWalletFill className="text-lg whitespace-nowrap" />} text="Pockets" />
            <MenuItem icon={<FaHome className="text-lg whitespace-nowrap" />} text="Change" />
            <MenuItem icon={<FaHome className="text-lg whitespace-nowrap" />} text="Waterfall" />
            <MenuItem icon={<CiBank className="text-lg whitespace-nowrap" />} text="Money 101" />
          </div>
          <div className="p-[50px]">
            <MenuItem icon={<IoIosSettings className="text-lg whitespace-nowrap" />} text="Settings" />
          </div>
        </div>
      </div>

      {/* Sidebar (visible on lg and above screens) */}
      <div className="hidden lg:flex flex-col text-dark h-full w-72 bg-white fixed">
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
        {/* Menu Items */}
        <div className="flex flex-col flex-grow pt-10 p-[50px] font-inter">
          <MenuItem icon={<FaHome className="text-lg" />} text="Dashboard" />
          <MenuItem icon={<IoIosCash className="text-lg bg-white" />} text="Transaction" />
          <MenuItem icon={<IoIosSync className="text-lg" />} text="Send/Request" />
          <MenuItem icon={<BsFillWalletFill className="text-lg" />} text="Pockets" />
          <MenuItem icon={<FaHome className="text-lg" />} text="Spare Change" />
          <MenuItem icon={<FaHome className="text-lg" />} text="Waterfall" />
          <MenuItem icon={<CiBank className="text-lg" />} text="Money 101" />
        </div>
        <div className="p-[50px]">
          <MenuItem icon={<IoIosSettings className="text-lg whitespace-nowrap" />} text="Settings" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col py-5 px-[40px] h-[140%] bg-[#EAECF0] ml-0 lg:ml-72 ">
        <Header />
        <Cards />
        <Two />
        <Add />
      </div>

      {/* Offcanvas Toggle Button (visible on sm and md screens) */}
      <button
        onClick={toggleOffcanvas}
        className="lg:hidden fixed inset-y-0 left-0 z-50 flex items-center justify-center w-[30px] h-[30px] bg-[#EAECF0] border-l border-gray-200 focus:outline-none"
      >
        <svg
          className="h-6 w-6 text-gray-800 hover:text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {offcanvasOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
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
