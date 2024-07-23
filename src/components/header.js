import React, { useState } from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';
import { TiArrowSortedDown } from "react-icons/ti";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle search icon click
  const handleSearchClick = () => {
    console.log('Search icon clicked');
    // Add further logic for the search icon click if needed
  };

  // Handle notification icon click
  const handleNotificationClick = () => {
    console.log('Notification icon clicked');
    // Add further logic for the notification icon click if needed
  };

  // Handle sign-out action
  const handleSignOut = () => {
    console.log('Sign out clicked');
    // Add sign-out logic here
    setMenuOpen(false); // Close the menu after signing out
    // Example:
    // auth.signOut().then(() => {
    //   window.location.href = '/login';
    // });
  };

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Placeholder image URL
  const placeholderImageUrl = 'https://picsum.photos/200/200';

  return (
    <div className='flex items-center justify-between py-4 px-6 bg-gray-100 shadow-md font-inter'>
      {/* Left section */}
      <div className='flex items-center'>
        <p >👋</p>
        <div className='ml-2 font-inter'>
          <p>Hey! Olive Rye</p>
          <p>No holes in this pocket</p>
        </div>
      </div>

      {/* Right section */}
      <div className='flex items-center ml-auto space-x-4'>
        {/* Search Icon */}
        <div className='cursor-pointer' onClick={handleSearchClick}>
          <FaSearch size={20} style={{ color: 'gray' }} />
        </div>
        {/* Notification Icon */}
        <div className='cursor-pointer' onClick={handleNotificationClick}>
          <FaBell size={20} style={{ color: 'gray' }} />
        </div>
        {/* User image and details */}
        <div className='relative flex items-center'>
          <img
            src={placeholderImageUrl}
            alt='User'
            className='w-10 h-10 rounded-full'
          />
          <div className='ml-2'>
            <div><b>Olivia Rhye</b></div>
            <div><p>olivia@moola.com</p></div>
          </div>
          {/* Sign-out Menu */}
          <div className='relative'>
            <TiArrowSortedDown 
              size={20} 
              style={{ color: 'gray', cursor: 'pointer' }} 
              onClick={toggleMenu} 
            />
            {menuOpen && (
              <div className='absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg'>
                <div 
                  className='py-2 px-4 cursor-pointer hover:bg-gray-200'
                  onClick={handleSignOut}
                >
                  Sign Out
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
