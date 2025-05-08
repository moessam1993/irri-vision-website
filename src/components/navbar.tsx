import React from 'react';
import { NavLink } from 'react-router-dom';
import irri from "../assets/IRRI.svg";
import { useNavigate } from 'react-router';
import now from "../assets/join.png";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/join");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-sm py-3 px-4 sm:py-3 sm:px-5 flex justify-between items-center font-sans sticky top-0 z-50">
      <div 
        className="flex items-center cursor-pointer ml-2 sm:ml-3"
        onClick={handleLogoClick}
      >
        <img 
          src={irri} 
          alt="IRRI Logo" 
          className="h-10 w-10 mr-2 transition-transform hover:scale-105" 
        />
        <div className="text-2xl font-bold text-[#195769] font-inter">
          IRRI Vision
        </div>
      </div>
      
      <div className="flex-1 flex justify-end mr-3 sm:mr-4"> 
        <div className="hidden md:flex space-x-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `font-inter font-medium text-base transition-colors duration-200 ${
                isActive ? 'text-[#306E80]' : 'text-gray-700 hover:text-[#306E80]'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => 
              `font-inter font-medium text-base transition-colors duration-200 ${
                isActive ? 'text-[#306E80]' : 'text-gray-700 hover:text-[#306E80]'
              }`
            }
          >
            Products
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => 
              `font-inter font-medium text-base transition-colors duration-200 ${
                isActive ? 'text-[#306E80]' : 'text-gray-700 hover:text-[#306E80]'
              }`
            }
          >
            Blog
          </NavLink>
          <NavLink 
            to="/careers" 
            className={({ isActive }) => 
              `font-inter font-medium text-base transition-colors duration-200 ${
                isActive ? 'text-[#306E80]' : 'text-gray-700 hover:text-[#306E80]'
              }`
            }
          >
            Careers
          </NavLink>
          <NavLink 
            to="/about-us" 
            className={({ isActive }) => 
              `font-inter font-medium text-base transition-colors duration-200 ${
                isActive ? 'text-[#306E80]' : 'text-gray-700 hover:text-[#306E80]'
              }`
            }
          >
            About
          </NavLink>
        </div>
      </div>
      
      <div className="flex">
        <button 
          className="flex items-center justify-center gap-2 text-white bg-[#195769] px-4 py-2 text-sm rounded font-semibold hover:bg-[#134252] transition-all duration-200 min-w-[102px] transform hover:scale-105 focus:outline-none active:scale-95"
          onClick={handleJoinClick}
        >
          <img src={now} alt="Join icon" className="h-4 w-4" />
          <span>Join Now</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;