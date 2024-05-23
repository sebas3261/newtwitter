import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const {logout} = useAuth();
  const handleLogoutClick = () => {
    logout();
    navigate('/')
  };

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
        <button onClick={handleLogoutClick} className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
