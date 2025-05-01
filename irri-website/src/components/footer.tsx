import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#195769] to-[#306E80] text-white py-12 px-6 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 font-inter">IRRI Vision</h3>
          <p className="mb-2">HQ address:  7G Ibn Sender St. – Zaitoon  Cairo – Egypt</p>
          <p className="mb-2">Mobile: +201553011938</p>
          <p className="mb-2">Landline: 0226038191</p>

          <p className="mb-2">Copyright © 2023 IRRI Vision.<br/> All rights reserved</p>
        </div>
        
        <div>
          <h4 className="text-xl font-semibold mb-4 font-inter">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">About us</a></li>
            <li><a href="#" className="hover:text-blue-400">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400">Founders & Leadership</a></li>
            <li><a href="#" className="hover:text-blue-400">Products & Solutions</a></li>
            <li><a href="#" className="hover:text-blue-400">Careers</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact us</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-semibold mb-4 font-inter">Stay up to date</h4>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your mail address" 
              className="px-4 py-2 rounded-l-md text-gray-800 w-full"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 font-inter">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;