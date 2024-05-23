import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  // Obtener el nombre de usuario del local storage
  const userName = localStorage.getItem('user');

  const handleLogoutClick = () => {
    logout();
    navigate('/');
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${isOpen ? 'block' : 'hidden'}`}
      onClick={toggleSidebar}
    >
      <div className="fixed inset-y-0 right-0 w-64 bg-[#2B2D31] shadow-md text-white z-50 p-4">
        <div className="flex justify-end">
          <button onClick={toggleSidebar} className="text-gray-500">
            Close
          </button>
        </div>
        <div className="p-4">
          <div className="flex items-center space-x-4">
            <img src="https://via.placeholder.com/50" alt="Profile" className="rounded-full" />
            <div>
              <h2 className="text-lg font-bold">{userName}</h2> {/* Aquí asegúrate de que userName sea una cadena */}
              <p className="text-gray-500">@{userName}</p> {/* También aquí */}
            </div>
          </div>
          <button
            onClick={handleLogoutClick}
            className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
