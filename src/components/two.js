import React, { useState } from "react";
import LineChart from "./graph";
import RadialBarChart from "./spiral";
import { TiArrowSortedDown } from "react-icons/ti";

const Two = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Last 30 Days"); // Default selected option

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleActionClick = (action) => {
    // Perform action based on the selected option
    console.log(`Action clicked: ${action}`);

    // Set the selected option and close the menu
    setSelectedOption(action);
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-around ">
      <div className="w-full lg:w-[58%] p-4 bg-white rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg lg:text-xl font-bold font-clash-display">Financial Health Index</div>
          <div className="text-lg lg:text-xl flex items-center relative">
            <div className="mr-2">{selectedOption}</div>
            <TiArrowSortedDown
              className={`inline-block cursor-pointer ${
                isMenuOpen ? "text-purple-600" : "text-black "
              }`}
              onClick={handleMenuToggle}
            />
            {isMenuOpen && (
             <div className="absolute mt-2 left-0 top-10 z-50 w-36 bg-white border border-gray-300 shadow-lg rounded-lg text-sm font-inter">
             <ul className="divide-y divide-gray-200 ">
               <li
                 className={`px-4 py-2 hover:bg-gray-100  cursor-pointer ${
                   selectedOption === "Last 30 Days" ? "text-purple-600" : "text-black"
                 }`}
                 onClick={() => handleActionClick("Last 30 Days")}
               >
                 Last 30 Days
               </li>
               <li
                 className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                   selectedOption === "Last 90 Days" ? "text-purple-600" : "text-black"
                 }`}
                 onClick={() => handleActionClick("Last 90 Days")}
               >
                 Last 90 Days
               </li>
               <li
                 className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                   selectedOption === "Last 365 Days" ? "text-purple-600" : "text-black"
                 }`}
                 onClick={() => handleActionClick("Last 365 Days")}
               >
                 Last 365 Days
               </li>
             </ul>
           </div>
           
            )}
          </div>
        </div>
        <LineChart />
      </div>
      <div className="w-full lg:w-[40%] p-4 py-5   bg-white rounded-lg">
      <div className="flex justify-between items-center mb-4 pb-3">
          <div className="text-lg lg:text-xl font-bold font-clash-display ">Pocket Goals</div>
          <div className="text-lg lg:text-xl flex items-center relative">
            <div className="mr-2">{selectedOption}</div>
            <TiArrowSortedDown
              className={`inline-block cursor-pointer ${
                isMenuOpen ? "text-purple-600" : "text-black "
              }`}
              onClick={handleMenuToggle}
            />
            {isMenuOpen && (
             <div className="absolute mt-2 left-0 top-10 z-50 w-36 bg-white border border-gray-300 shadow-lg rounded-lg text-sm font-inter">
             <ul className="divide-y divide-gray-200 ">
               <li
                 className={`px-4 py-2 hover:bg-gray-100  cursor-pointer ${
                   selectedOption === "Last 30 Days" ? "text-purple-600" : "text-black"
                 }`}
                 onClick={() => handleActionClick("Last 30 Days")}
               >
                 Last 30 Days
               </li>
               <li
                 className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                   selectedOption === "Last 90 Days" ? "text-purple-600" : "text-black"
                 }`}
                 onClick={() => handleActionClick("Last 90 Days")}
               >
                 Last 90 Days
               </li>
               <li
                 className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                   selectedOption === "Last 365 Days" ? "text-purple-600" : "text-black"
                 }`}
                 onClick={() => handleActionClick("Last 365 Days")}
               >
                 Last 365 Days
               </li>
             </ul>
           </div>
           
            )}
          </div>
        </div>
        <RadialBarChart />
      </div>
    </div>
  );
};

export default Two;
