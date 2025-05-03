import React from 'react';
import { NavLink} from 'react-router-dom';
import irri from "../assets/IRRI.svg"
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
    <nav className="bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.10)] py-4 px-6 flex justify-between items-center font-sans sticky top-0 z-50">
      <div className="flex items-center ml-10"
      onClick={handleLogoClick}
      >
        <img src={irri} alt="IRRI Logo" className="h-10 w-10 mr-2 hover:scale-120" />
        <div className="text-[25px] font-bold text-[#195769] font-inter hover:scale-110 ml-2">IRRI Vision</div>
      </div>
      
      <div className="flex-1 flex justify-end mr-8"> 
      <div className="hidden md:flex space-x-8">
  <NavLink 
    to="/" 
    className={({ isActive }) => 
      `font-inter font-semibold transition-colors duration-200 ${
        isActive ? 'text-[#306E80]' : 'text-gray-700 hover:text-[#306E80]'
      }`
    }
  >
    Home
  </NavLink>
  <NavLink 
    to="/products" 
    className={({ isActive }) => 
      `font-inter font-semibold transition-colors duration-200 ${
        isActive ? 'text-[#306E80]' : 'text-gray-700 hover:text-[#306E80]'
      }`
    }
  >
    Products & Solutions
  </NavLink>
  <NavLink 
    to="/blog" 
    className={({ isActive }) => 
      `font-inter font-semibold transition-colors duration-200 ${
        isActive ? 'text-[#306E80]' : 'text-gray-700 hover:text-[#306E80]'
      }`
    }
  >
    Blog
  </NavLink>
  <NavLink 
    to="/careers" 
    className={({ isActive }) => 
      `font-inter font-semibold transition-colors duration-200 ${
        isActive ? 'text-[#306E80]' : 'text-gray-700 hover:text-[#306E80]'
      }`
    }
  >
    Careers
  </NavLink>
  <NavLink 
    to="/about-us" 
    className={({ isActive }) => 
      `font-inter font-semibold transition-colors duration-200 ${
        isActive ? 'text-[#306E80]' : 'text-gray-700 hover:text-[#306E80]'
      }`
    }
  >
    About Us
  </NavLink>
</div>
      </div>
      
      <div className="flex space-x-3">
      <button className="flex items-center justify-center gap-2 text-white bg-[#195769] px-4 py-2 rounded-md font-semibold hover:bg-[#134252] transition-all duration-200 min-w-[180px] transform hover:scale-105 focus:outline-none active:scale-95"
                onClick={handleJoinClick}
                >
                  <img src={now} alt="loading" className="h-5 w-5" />
                  <span>Join us Now !</span>
                </button>
      </div>
    </nav>
  );
};

export default Navbar;