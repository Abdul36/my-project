import React from "react";
import Multiple from "./cardss"; // Assuming you have renamed the import from "./cardss" to "./Multiple"
import './Multiple.css'; // Import CSS file for styling
const gradientStyle = {
  background: 'linear-gradient(62.44deg, #1D0CB6 -42.93%, #7466F5 -42.92%, #B480FF 47.91%, #F0B3FF 138.75%)',
};

const Cards = () => {
  // Assuming the budget percentage is 30% as per your example
  const budgetPercentage = 30;

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between">
      {/* Card Container */}
      <div className="cars  w-full lg:w-1/3  rounded-lg overflow-hidden shadow-lg mt-8" >
        {/* Card header */}
        <div className="text-white px-6 py-4">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold font-chillax">moola</h1>
            <p className="ml-auto cursor-pointer"><u>Hide Details</u> </p>
          </div>
        </div>

        {/* Card body */}
        <div className="px-6 py-4">
          <div className="mb-4">
            <h4 className="text-gray-100">Total Account Balance</h4>
            <h2 className="text-2xl font-bold text-white">$36,400</h2>
          </div>

          <div className="flex mb-4">
            <p className="text-white font-inter">Last updated : 5 mins ago</p>
          </div>

          {/* Budget section */}
          <div className="shadow-lg bg-[#6C33BF99] p-2 rounded font-inter">
            <div className="mb-4 flex justify-between items-center">
              <div className="text-white">Monthly Budget</div>
              <div className="text-white">30%</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full overflow-hidden shadow-lg">
              {/* Progress bar */}
              <div className="bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-[#2FFEFE] h-full rounded-full"
                  style={{ width: `${budgetPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Multiple Cards Container */}
      <div className="w-full lg:w-2/3 p-0 lg:ml-4 mt-3 lg:mt-0">
        <Multiple />
      </div>
    </div>
  );
};

export default Cards;
