import React from 'react';
import { Link} from 'react-router-dom';
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
        <img src={irri} alt="IRRI Logo" className="h-10 w-10 mr-2" />
        <div className="text-[25px] font-bold text-[#195769] font-inter">IRRI Vision</div>
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