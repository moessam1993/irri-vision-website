import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../assets/footerL.png";
import linked from "../assets/linked.png";
import facebook from "../assets/facebook.png";
import email from "../assets/email.png";
import Swal from "sweetalert2";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const scrollToFounders = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/about-us', { state: { scrollTo: 'founders-section' } });
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = "info@irri-vision.com";
    
    navigator.clipboard.writeText(email)
      .then(() => {
        Swal.fire({
          title: 'Email copied!',
          text: 'Feel free to send us your inquiry or CV. We look forward to hearing from you!',
          icon: 'success',
          confirmButtonColor: '#306E80',
          confirmButtonText: 'Got it!',
          timer: 6000,
          timerProgressBar: true,
          background: 'white',
          color: '#195769',
          showClass: { popup: 'animate__animated animate__fadeInDown' },
          hideClass: { popup: 'animate__animated animate__fadeOutUp' }
        });
      })
      .catch((err) => {
        console.error('Failed to copy email: ', err);
        window.location.href = `mailto:${email}`;
      });
  };

  return (
    <footer className="bg-gradient-to-r from-[#195769] to-[#306E80] text-white py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Column - Logo and Contact Info */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-6">
                <img src={logo} alt="IRRI Vision Logo" className="h-12 w-12 mr-3" />
                <h3 className="text-2xl font-bold font-inter">IRRI Vision</h3>
              </div>
              
              <div className="mb-6">
                <p className="text-white text-sm mb-2">HQ address: 7G Ibn Sender St. - Zaitoon Cairo - Egypt</p>
                <p className="text-white text-sm mb-2">Mobile: +201553011938</p>
                <p className="text-white text-sm">Landline: 0226038191</p>
              </div>
              
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/irri-vision" target="_blank" rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-200">
                  <img src={linked} alt="LinkedIn" className="w-8 h-8" />
                </a>
                <a href="https://www.facebook.com/irri.vision.llc" target="_blank" rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-200">
                  <img src={facebook} alt="Facebook" className="w-8 h-8" />
                </a>
                <a href="mailto:info@irri-vision.com" onClick={handleEmailClick}
                  className="hover:scale-110 transition-transform duration-200 cursor-pointer">
                  <img src={email} alt="Email" className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Company Links */}
          <div className="md:w-1/2 md:pl-50">
            <h4 className="text-xl font-semibold mb-4 font-inter">Company</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <li>
                <NavLink 
                  to="/about-us" 
                  className={({ isActive }) => 
                    `font-inter font-medium transition-colors duration-200 block py-2 ${
                      isActive ? 'text-blue-200' : 'text-white hover:text-blue-200'
                    }`
                  }
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/blog" 
                  className={({ isActive }) => 
                    `font-inter font-medium transition-colors duration-200 block py-2 ${
                      isActive ? 'text-blue-200' : 'text-white hover:text-blue-200'
                    }`
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about-us" 
                  onClick={scrollToFounders} 
                  className={({ isActive }) => 
                    `font-inter font-medium transition-colors duration-200 block py-2 ${
                      isActive ? 'text-blue-200' : 'text-white hover:text-blue-200'
                    }`
                  }
                >
                  Leadership
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/products" 
                  className={({ isActive }) => 
                    `font-inter font-medium transition-colors duration-200 block py-2 ${
                      isActive ? 'text-blue-200' : 'text-white hover:text-blue-200'
                    }`
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/careers" 
                  className={({ isActive }) => 
                    `font-inter font-medium transition-colors duration-200 block py-2 ${
                      isActive ? 'text-blue-200' : 'text-white hover:text-blue-200'
                    }`
                  }
                >
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact-us" 
                  className={({ isActive }) => 
                    `font-inter font-medium transition-colors duration-200 block py-2 ${
                      isActive ? 'text-blue-200' : 'text-white hover:text-blue-200'
                    }`
                  }
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20">
          <p className="text-white text-sm text-center">
            Copyright © {new Date().getFullYear()} IRRI Vision. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;