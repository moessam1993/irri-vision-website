import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import irri from "../assets/IRRI.svg";
import { useNavigate } from 'react-router';
import now from "../assets/join.png";
import { FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleJoinClick = () => {
    navigate("/join");
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/blog", label: "Blog" },
    { path: "/careers", label: "Careers" },
    { path: "/about-us", label: "About" },
    { path: "/contact-us", label: "Contact Us" }
  ];

  return (
    <>
      <nav className="bg-white shadow-sm py-3 px-4 sm:py-3 sm:px-5 flex justify-between items-center font-sans sticky top-0 z-50">
        <div className="flex items-center">
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
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end mr-3 sm:mr-4"> 
          <div className="flex space-x-4">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path}
                to={link.path} 
                className={({ isActive }) => 
                  `font-inter font-medium text-base transition-colors duration-200 ${
                    isActive ? 'text-[#306E80]' : 'text-gray-700 hover:text-[#306E80]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
        
        {/* Join Now Button (Desktop) */}
        <div className="hidden md:flex">
          <button 
            className="flex items-center cursor-pointer justify-center gap-2 text-white bg-[#195769] px-4 py-2 text-sm rounded font-semibold hover:bg-[#134252] transition-all duration-200 min-w-[102px] transform hover:scale-105 focus:outline-none active:scale-95"
            onClick={handleJoinClick}
          >
            <img src={now} alt="Join icon" className="h-4 w-4" />
            <span>Join Now</span>
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden gap-4">
          {/* Join Now Button (Mobile - small) */}
          <button 
            className="flex md:hidden items-center justify-center text-white bg-[#195769] p-2 rounded-full font-semibold hover:bg-[#134252] transition-all duration-200 focus:outline-none"
            onClick={handleJoinClick}
          >
            <img src={now} alt="Join icon" className="h-4 w-4" />
          </button>
          
          {/* Hamburger Button */}
          <button 
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-[#306E80] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <div className="flex flex-col gap-1.5">
                <span className="block w-6 h-0.5 bg-gray-700"></span>
                <span className="block w-6 h-0.5 bg-gray-700"></span>
                <span className="block w-6 h-0.5 bg-gray-700"></span>
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20 px-4 overflow-y-auto animate-slide-down">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path}
                to={link.path} 
                className={({ isActive }) => 
                  `block py-3 px-4 font-inter font-medium text-lg transition-colors duration-200 ${
                    isActive ? 'text-[#306E80] bg-[#f0f7fa]' : 'text-gray-700 hover:text-[#306E80] hover:bg-[#f0f7fa]'
                  } rounded-lg`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <button 
              className="flex items-center justify-center gap-2 text-white bg-[#195769] px-4 py-3 text-lg rounded-lg font-semibold hover:bg-[#134252] transition-all duration-200 mt-4"
              onClick={handleJoinClick}
            >
              <img src={now} alt="Join icon" className="h-5 w-5" />
              <span>Join Now</span>
            </button>
          </div>
        </div>
      )}

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;