import { useEffect } from "react";
import irri from "../assets/IRRI.svg";
import underline from "../assets/underline.png";
import vision from "../assets/vision.png";
import mission from "../assets/mission.png";
import founders from "../assets/founders.png";
import ahmedFayez from "../assets/ahmed-fayez.png";
import mohamedEssam from "../assets/mohamed-essam.png";
import abdulrahmanAref from "../assets/aref.png";
import mohamedMostafa from "../assets/mohamed-mostafa.png";
import contact from "../assets/contact.png";
import { useLocation } from 'react-router-dom';

const AboutUs = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.hash === '#founders-section') {
      const element = document.getElementById('founders-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
    
    const elements = document.querySelectorAll(".animate-on-load");
    elements.forEach((el) => {
      el.classList.remove("hidden-on-scroll");
      if (el.classList.contains("slide-in-left")) {
        el.classList.add("slide-in-left");
      } else if (el.classList.contains("slide-in-right")) {
        el.classList.add("slide-in-right");
      } else if (el.classList.contains("fade-in-up")) {
        el.classList.add("animate-fadeInUp");
      }
    });
  }, [location]);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-5 py-10 md:py-14 lg:py-18 font-inter">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center mb-10 md:mb-18">
        <img 
          src={irri} 
          alt="IRRI Logo" 
          className="h-30 w-30 md:h-38 md:w-38 mb-5 transition-transform duration-300 hover:scale-105 hidden-on-scroll fade-in-up animate-on-load" 
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#195769] mb-3 md:mb-5 text-center hidden-on-scroll fade-in-up animate-on-load">
          IRRI Vision
        </h1>
        <img 
          src={underline} 
          alt="Underline decoration" 
          className="h-7 md:h-9 w-46 md:w-58 transition-transform duration-300 hover:scale-105 hidden-on-scroll fade-in-up animate-on-load" 
        />
      </div>

      {/* Vision & Mission Sections */}
      <div className="space-y-14 md:space-y-18 mb-14 md:mb-22 mx-3 sm:mx-7 md:mx-11 lg:mx-22">
        {/* Vision Section */}
        <div className="flex flex-col sm:flex-row items-start gap-5 md:gap-7 p-5 rounded-xl hover:bg-gray-50 transition-colors duration-300 hidden-on-scroll slide-in-left animate-on-load">
          <img 
            src={vision} 
            alt="Vision icon" 
            className="h-15 w-15 md:h-19 md:w-19 flex-shrink-0 transition-transform duration-300 hover:scale-110" 
          />
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#4D4D4D] mb-2 md:mb-3">
              Company's Vision
            </h2>
            <p className="text-base md:text-lg text-[#68686C] leading-relaxed">
              "For more information on the Company's main business and products and design, you may
              be a good thing to offer when needed in relation."
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col sm:flex-row items-start gap-5 md:gap-7 p-5 rounded-xl hover:bg-gray-50 transition-colors duration-300 hidden-on-scroll slide-in-right animate-on-load">
          <img 
            src={mission} 
            alt="Mission icon" 
            className="h-15 w-15 md:h-19 md:w-19 flex-shrink-0 transition-transform duration-300 hover:scale-110" 
          />
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#4D4D4D] mb-2 md:mb-3">
              Company's Mission
            </h2>
            <p className="text-base md:text-lg text-[#68686C] leading-relaxed italic">
              "To lead the transformation of healthcare through intelligent, accessible, and innovative technology—improving lives globally through data-driven precision medicine."
            </p>
          </div>
        </div>
      </div>
      
      {/* Founders Section */}
      <div id="founders-section" className="flex flex-col items-center justify-center mb-14 md:mb-22">
        <img 
          src={founders} 
          alt="Founders icon" 
          className="h-30 w-30 md:h-38 md:w-38 mb-5 transition-transform duration-300 hover:scale-105 hidden-on-scroll fade-in-up animate-on-load" 
        />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#306E80] text-center mb-7 md:mb-11 hidden-on-scroll fade-in-up animate-on-load">
          Founders
        </h2>
        
        {/* Founders Grid - 2×2 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 w-full max-w-4xl px-3">
          {/* Founder 1 */}
          <div className="flex flex-col items-center p-5 rounded-xl transition-colors duration-300 hidden-on-scroll slide-in-left animate-on-load">
            <img 
              src={ahmedFayez} 
              alt="Ahmed Fayez" 
              className="h-46 w-46 md:h-54 md:w-54 rounded-full object-cover shadow-md shadow-gray-300 transition-transform duration-300 hover:scale-105 mb-3" 
            />
            <h3 className="text-lg md:text-xl font-semibold text-[#68686C] text-center">Ahmed Fayez</h3>
            <p className="text-[#68686C] text-sm md:text-base text-center">Co-founder & CEO</p>
          </div>
          
          {/* Founder 2 */}
          <div className="flex flex-col items-center p-5 rounded-xl transition-colors duration-300 hidden-on-scroll slide-in-right animate-on-load">
            <img 
              src={mohamedEssam} 
              alt="Mohamed Essam" 
              className="h-46 w-46 md:h-54 md:w-54 rounded-full object-cover shadow-md shadow-gray-300 transition-transform duration-300 hover:scale-105 mb-3" 
            />
            <h3 className="text-lg md:text-xl font-semibold text-[#68686C] text-center">Mohamed Essam</h3>
            <p className="text-[#68686C] text-sm md:text-base text-center">Co-founder & COO</p>
          </div>
          
          {/* Founder 3 */}
          <div className="flex flex-col items-center p-5 rounded-xl transition-colors duration-300 hidden-on-scroll slide-in-left animate-on-load">
            <img 
              src={abdulrahmanAref} 
              alt="Abdulrahman Aref" 
              className="h-46 w-46 md:h-54 md:w-54 rounded-full object-cover shadow-md shadow-gray-300 transition-transform duration-300 hover:scale-105 mb-3" 
            />
            <h3 className="text-lg md:text-xl font-semibold text-[#68686C] text-center">Abdulrahman Aref</h3>
            <p className="text-[#68686C] text-sm md:text-base text-center">Co-founder & Head of R&D</p>
          </div>
          
          {/* Founder 4 */}
          <div className="flex flex-col items-center p-5 rounded-xl transition-colors duration-300 hidden-on-scroll slide-in-right animate-on-load">
            <img 
              src={mohamedMostafa} 
              alt="Mohamed Mostafa" 
              className="h-46 w-46 md:h-54 md:w-54 rounded-full object-cover shadow-md shadow-gray-300 transition-transform duration-300 hover:scale-105 mb-3" 
            />
            <h3 className="text-lg md:text-xl font-semibold text-[#68686C] text-center">Mohamed Mostafa</h3>
            <p className="text-[#68686C] text-sm md:text-base text-center">Co-founder & CTO</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-center justify-center mb-10 md:mb-18">
        <img 
          src={contact} 
          alt="Contact icon" 
          className="h-30 w-30 md:h-38 md:w-38 mb-5 transition-transform duration-300 hover:scale-105 hidden-on-scroll fade-in-up animate-on-load" 
        />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#306E80] text-center mb-7 md:mb-11 hidden-on-scroll fade-in-up animate-on-load">
          Contact us!
        </h2>
        
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-sm p-7 md:p-9 hover:shadow-md transition-shadow duration-300 hidden-on-scroll fade-in-up animate-on-load">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-3 lg:gap-7">
            {/* Address */}
            <div className="flex flex-col items-center text-center group">
              <div className="h-11 w-11 md:h-13 md:w-13 mb-3 text-[#306E80] group-hover:text-[#195769] transition-colors duration-300">
                <svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-base font-medium text-[#4D4D4D] mb-1">Address</h3>
              <p className="text-[#68686C] text-sm">
                76 Ibn Sender St. – Zaitoon<br />
                Cairo – Egypt
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center group">
              <div className="h-11 w-11 md:h-13 md:w-13 mb-3 text-[#306E80] group-hover:text-[#195769] transition-colors duration-300">
                <svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base font-medium text-[#4D4D4D] mb-1">Email</h3>
              <a href="mailto:info@irri-vision.com" className="text-[#68686C] text-sm hover:text-[#306E80] transition-colors duration-300">
                info@irri-vision.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center text-center group">
              <div className="h-11 w-11 md:h-13 md:w-13 mb-3 text-[#306E80] group-hover:text-[#195769] transition-colors duration-300">
                <svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-base font-medium text-[#4D4D4D] mb-1">Phone</h3>
              <p className="text-[#68686C] text-sm">
                Mobile: +201553011938<br />
                Landline: 0226038191
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;