import React, { useState } from 'react';
import { MdOutlineSportsRugby, MdShoppingBag,MdLocalGroceryStore  } from "react-icons/md";
import { TbBus, TbCar, TbBike, TbTicket } from 'react-icons/tb';
import './Multiple.css'; // Import CSS file for styling

const cardData = [
  { icon: '🚃', text: 'Transport', price: '$47000' },
  { icon: <MdShoppingBag size={30} color="purple" />, text: 'Shopping', price: '$32000' },
  { icon: <TbTicket size={30} color="orange" />, text: 'Tickets', price: '$50000' },
  { icon: <MdOutlineSportsRugby size={30} color="gray" />, text: 'Sports', price: '$850.00' },
  { icon: <MdLocalGroceryStore  size={30} color="green" />, text: 'Groceries', price: '$50000' },
  // Add additional cards here
  { icon: <TbBus size={30} color="blue" />, text: 'Travel', price: '$22000' },
  { icon: <TbBike size={30} color="green" />, text: 'Cycling', price: '$15000' },
  { icon: <MdOutlineSportsRugby size={30} color="black" />, text: 'Fitness', price: '$1200.00' },
  { icon: <MdShoppingBag size={30} color="orange" />, text: 'Fashion', price: '$25000' },
  { icon: <TbCar size={30} color="darkred" />, text: 'Maintenance', price: '$6000' },
  { icon: <TbBike size={30} color="blue" />, text: 'Bike Repair', price: '$800' },
  { icon: <TbBus size={30} color="darkblue" />, text: 'Public Transport', price: '$10000' },
  { icon: <MdOutlineSportsRugby size={30} color="blue" />, text: 'Outdoor Activities', price: '$2000' },
  { icon: <MdShoppingBag size={30} color="pink" />, text: 'Electronics', price: '$30000' },
  { icon: <TbTicket size={30} color="blue" />, text: 'Events', price: '$40000' },
  { icon: <TbCar size={30} color="yellow" />, text: 'Car Insurance', price: '$8000' },
  { icon: <TbBike size={30} color="red" />, text: 'Bike Accessories', price: '$500' },
  { icon: <MdOutlineSportsRugby size={30} color="green" />, text: 'Gym Membership', price: '$600' },
  { icon: <MdShoppingBag size={30} color="gray" />, text: 'Home Goods', price: '$15000' },
  { icon: <TbBus size={30} color="purple" />, text: 'Commuting', price: '$9000' },
  { icon: <TbTicket size={30} color="green" />, text: 'Theater', price: '$7000' },
  { icon: <TbCar size={30} color="blue" />, text: 'Vehicle Purchase', price: '$20000' },
  { icon: <TbBike size={30} color="gray" />, text: 'Bike Rental', price: '$1200' },
  { icon: <MdOutlineSportsRugby size={30} color="red" />, text: 'Sports Equipment', price: '$3000' },
  { icon: <MdShoppingBag size={30} color="blue" />, text: 'Books', price: '$2000' }
];

const Multiple = () => {
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setShowAll(!showAll); // Toggle the showAll state
  };

  // Number of cards to show based on state
  const cardsToShow = showAll ? cardData.length : 6;

  return (
    <section>
      <div className="overflow-auto h-96 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-10">
        <div className='flex justify-between pt-[26px]'>
          <div>
            <h1 className='text-xl font-bold font-clash-display'>Pockets</h1>
          </div>
          <div onClick={handleViewAll} className="cursor-pointer text-[#6200EE] font-clash-display" >
            {showAll ? 'View Less' : 'View All'}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-1 gap-y-2 pt-10">
          {/* Render the specified number of cards */}
          {cardData.slice(0, cardsToShow).map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md relative w-full md:w-70">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-xl">{card.icon}</span>
                    <div className="ml-2 font-inter">{card.text}</div>
                  </div>
                </div>
                <div>
                <h1 className="text-xl font-bold text-end pt-5 font-clash-display">{card.price}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Multiple;
