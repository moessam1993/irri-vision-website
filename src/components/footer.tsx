import React from 'react';
import logo from "../assets/footerL.png"
import linked from "../assets/linked.png"
import facebook from "../assets/facebook.png"
import email from "../assets/email.png"
import send from "../assets/send.png"
import Swal from "sweetalert2";


const Footer: React.FC = () => {
  const scrollToFounders = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutUsPath = '/about-us';
    
    if (window.location.pathname === aboutUsPath) {
      const element = document.getElementById('founders-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `${aboutUsPath}#founders-section`;
    }
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
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
      })
      .catch((err) => {
        console.error('Failed to copy email: ', err);
        // Fallback to mailto if clipboard fails
        window.location.href = `mailto:${email}`;
      });
  };




  return (
    <footer className="bg-gradient-to-r from-[#195769] to-[#306E80] text-white py-12 px-6 font-sans">
      <div className="max-w-full ml-20 mr-20 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="flex flex-col">
        <div className="flex items-start mb-4"> 
          <img src={logo} alt="IRRI Vision Logo" className="h-12 w-12 mr-4 mt-1" />
          <div>
            <h3 className="text-2xl font-bold font-inter mb-3">IRRI Vision</h3> 
            <div className="space-y-2 ">
              <p className="text-white">HQ address: 7G Ibn Sender St. - Zaitoon Cairo - Egypt</p>
              <p className="text-white">Mobile: +201553011938</p>
              <p className="text-white">Landline: 0226038191</p>
                   {/* Social Media Links */}        
        <div className="flex space-x-6 md:space-x-5 mb-5 mt-5">
          {/* LinkedIn */}
          <a 
            href="https://linkedin.com/company/irri-vision" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#306E80] hover:text-[#195769] transition-colors duration-300 hover:scale-110 transition-transform"
          >
            <img src={linked} alt="LinkedIn profile" className="w-10 h-10" />
          </a>
          
          {/* Facebook */}
          <a 
            href="https://www.facebook.com/irri.vision.llc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#306E80] hover:text-[#195769] transition-colors duration-300 hover:scale-110 transition-transform"
          >
            <img src={facebook} alt="Facebook profile" className="w-10 h-10" />
          </a>
          
          {/* Mail */}
          <a 
            href="mailto:info@irri-vision.com" 
            onClick={handleEmailClick}
            className="text-[#306E80] hover:text-[#195769] transition-colors duration-300 hover:scale-110 transition-transform cursor-pointer"
          >
            <img src={email} alt="Email contact" className="w-10 h-10" />
          </a>
        </div>
              <p className="text-white text-sm mt-4">Copyright © 2025 IRRI Vision.<br/>All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
        <div>
          <h4 className="text-xl justify-right font-semibold mb-4 font-inter">Company</h4>
          <ul className="space-y-2">
            <li><a href="/about-us" className="hover:text-blue-400">About us</a></li>
            <li><a href="/blog" className="hover:text-blue-400">Blog</a></li>
            <li><a href="/about-us#founders-section" onClick={scrollToFounders} className="hover:text-blue-400">Founders & Leadership</a></li>
            <li><a href="/products" className="hover:text-blue-400">Products & Solutions</a></li>
            <li><a href="/careers" className="hover:text-blue-400">Careers</a></li>
            <li><a href="/contact-us" className="hover:text-blue-400">Contact us</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-semibold mb-4 font-inter">Stay up to date</h4>
          <div className="relative flex items-center w-full">
          <input
            type="email"
            placeholder="Your mail address"
            className="pl-4 pr-10 py-2 rounded-md bg-opacity-50 text-white w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent placeholder-white placeholder-opacity-80"
          />
          <button className="absolute right-0 p-2 rounded-r-md hover:scale-120 transition-colors">
            <img src={send} alt="Submit email" className="w-4 h-4 filter brightness-0 invert" />
          </button>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;