import React from 'react';
import { Link } from 'react-router-dom';
import irri from "../assets/IRRI.svg"

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-[0_4px_20px_0px_rgba(0,0,0,0.10)] py-4 px-6 flex justify-between items-center font-sans sticky top-0 z-50">
      <div className="flex items-center">
        <img src={irri} alt="IRRI Logo" className="h-6 w-6 mr-2" />
        <div className="text-l font-bold text-[#195769] font-inter">IRRI Vision</div>
      </div>
      
      <div className="flex-1 flex justify-end mr-8"> {/* Added flex-1 and justify-end */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-[#306E80] font-inter font-semibold transition-colors duration-200">Home</Link>
          <Link to="/products" className="text-gray-700 hover:text-[#306E80] font-inter font-semibold transition-colors duration-200">Products & Solutions</Link>
          <Link to="/blog" className="text-gray-700 hover:text-[#306E80] font-inter font-semibold transition-colors duration-200">Blog</Link>
          <Link to="/careers" className="text-gray-700 hover:text-[#306E80] font-inter font-semibold transition-colors duration-200">Careers</Link>
          <Link to="/about-us" className="text-gray-700 hover:text-[#306E80] font-inter font-semibold transition-colors duration-200">About Us</Link>
        </div>
      </div>
      
      <div className="flex space-x-4">
        <button className="bg-[#195769] text-white px-4 py-2 rounded-md hover:bg-[#134252] font-inter text-[15px] shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none">
          Join Us now!
        </button>
      </div>
    </nav>
  );
};

export default Navbar;