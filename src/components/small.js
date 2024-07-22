import React from "react";
import { TbTrain } from "react-icons/tb";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

import { FaPlus } from "react-icons/fa";
// import Cardss from "./cardss";
import Cards from "./cards";
import Multiple from "./cardss";

const Small = () => {
  // Custom component for menu items
  const MenuItem = ({ icon, text }) => (
    <div className="flex items-center shadow-lg bg-white p-2 ms-3 rounded  space-x-2">
      {icon}
      <div className="text-lg">{text}</div>
    </div>
  );
  return (
    <div className="fl bg-white p-5 mt-2 rounded-10">
      {" "}
      <div className="pt-10 flex justify-between">
        <div className="ds flex items-center">
          <div className="text-xl font-bold">Pockets</div>
          <div>
            {" "}
            <MenuItem icon={<FaPlus className="text-lg" />} text="Add Pocket" />
          </div>
        </div>
        <div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3a6 6 0 015.093 8.868l5.368 5.367a1 1 0 01-1.414 1.414l-5.367-5.368A6 6 0 119 3zm0 2a4 4 0 100 8 4 4 0 000-8z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 placeholder-purple-500"
              placeholder="Pre Order Pockets"
            />
          </div>
        </div>
      </div>
      <Multiple/>
    </div>
  );
};

export default Small;
