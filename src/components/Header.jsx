import React from 'react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-[#2B2D31] shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">FlareFlow</h1>
        <div>
          <button onClick={toggleSidebar} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
