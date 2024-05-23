import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 w-64 bg-[#2B2D31] shadow-md text-white transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-1/4 p-4`}
    >
      <div className="flex justify-end">
        <button onClick={toggleSidebar} className="md:hidden text-gray-500">
          Close
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <img src="https://via.placeholder.com/50" alt="Profile" className="rounded-full" />
          <div>
            <h2 className="text-lg font-bold">User Name</h2>
            <p className="text-gray-500">@username</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
