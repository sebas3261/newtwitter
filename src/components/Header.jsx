import React from 'react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-[#2B2D31] shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">FlareFlow</h1>
        <input type="text" placeholder="Search" className="bg-gray-200 rounded-full px-4 py-2" />
        <button onClick={toggleSidebar} className="md:hidden bg-blue-500 text-white px-4 py-2 rounded-full">
          Menu
        </button>
      </div>
    </header>
  );
};

export default Header;
