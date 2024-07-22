import React, { useState } from 'react';
import { TbTrain } from 'react-icons/tb';
import './Multiple.css'; // Import CSS file for styling

const Multiple = () => {
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setShowAll(!showAll); // Toggle the showAll state
  };

  const cards = [...Array(20)]; // Array to hold the cards
  const visibleCards = showAll ? cards : cards.slice(0, 6); // Show all cards if showAll is true, else show first 6

  return (
    <section>
      <div className="overflow-auto h-96 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-10">
        <div className='flex justify-between pt-[26px]'>
          <div>
            <h1 className='text-xl font-bold'>Pockets</h1>
          </div>
          <div onClick={handleViewAll} className="cursor-pointer text-blue-500">
            {showAll ? 'View Less' : 'View All'}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-1 gap-y-2 pt-10 ">
          {/* Render visible cards */}
          {visibleCards.map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md relative w-full md:w-70">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <TbTrain size={30} color="green" />
                    <div className="ml-2">Transport</div>
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-end pt-5">$47000</h1>
                </div>
              </div>
            </div>
          ))}
          {/* End of repeated structure */}
        </div>
      </div>
    </section>
  );
};

export default Multiple;
