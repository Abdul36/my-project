import React from "react";
import Multiple from "./cardss"; // Assuming you have renamed the import from "./cardss" to "./Multiple"

const gradientStyle = {
  background: 'linear-gradient(62.44deg, #1D0CB6 -42.93%, #7466F5 -42.92%, #B480FF 47.91%, #F0B3FF 138.75%)',
};
const Cards = () => {
  // Assuming the budget percentage is 30% as per your example
  const budgetPercentage = 30;

  return (
    <div className="flex items-start justify-between">
      {/* Card Container */}
      <div className="w-1/3 bg-purple-500 rounded-lg overflow-hidden shadow-lg mt-8"  style={gradientStyle}> 
        {/* Card header */}
        <div className=" text-white px-6 py-4">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold font-chillax">moola</h1>
            <p className="ml-auto">Last update: 5 mins ago</p>
          </div>
        </div>

        {/* Card body */}
        <div className="px-6 py-4">
          <div className="mb-4">
            <h4 className="text-gray-100">Total Account Balance</h4>
            <h2 className="text-2xl font-bold text-white">$36,400 USD</h2>
          </div>

          <div className="flex mb-4">
            <div>
              <p className="text-white">Cardholder Name</p>
              <h4 className="font-semibold text-white">JENNIFER SMITH</h4>
            </div>
            <div className="ms-10">
              <p className="text-white">Expiry Date</p>
              <h4 className="font-semibold text-white">02/27</h4>
            </div>
          </div>

          {/* Budget section */}
          <div className="shadow-lg bg-custom-purple p-2 rounded">
            <div className="mb-4 flex justify-between items-center">
              <div className="text-white">Monthly Budget</div>
              <div className="text-white">30%</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full overflow-hidden shadow-lg">
              {/* Progress bar */}
              <div className="bg-gray-200  h-2 rounded-full">
                <div
                  className="bg-sky-400 h-full rounded-full"
                  style={{ width: `${budgetPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Multiple Cards Container */}
      <div className="w-2/3 ml-4">
        <Multiple />
      </div>
    </div>
  );
};

export default Cards;
