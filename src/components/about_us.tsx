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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 font-inter">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center mb-12 md:mb-20">
        <img 
          src={irri} 
          alt="IRRI Logo" 
          className="h-32 w-32 md:h-40 md:w-40 mb-6 transition-transform duration-300 hover:scale-105 hidden-on-scroll fade-in-up animate-on-load" 
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#195769] mb-4 md:mb-6 text-center hidden-on-scroll fade-in-up animate-on-load">
          IRRI Vision
        </h1>
        <img 
          src={underline} 
          alt="Underline decoration" 
          className="h-8 md:h-10 w-48 md:w-60 transition-transform duration-300 hover:scale-105 hidden-on-scroll fade-in-up animate-on-load" 
        />
      </div>

      {/* Vision & Mission Sections */}
      <div className="space-y-16 md:space-y-20 mb-16 md:mb-24 mx-4 sm:mx-8 md:mx-12 lg:mx-24">
        {/* Vision Section */}
        <div className="flex flex-col sm:flex-row items-start gap-6 md:gap-8 p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300 hidden-on-scroll slide-in-left animate-on-load">
          <img 
            src={vision} 
            alt="Vision icon" 
            className="h-16 w-16 md:h-20 md:w-20 flex-shrink-0 transition-transform duration-300 hover:scale-110" 
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#4D4D4D] mb-3 md:mb-4">
              Company's Vision
            </h2>
            <p className="text-lg md:text-xl text-[#68686C] leading-relaxed">
              "For more information on the Company's main business and products and design, you may
              be a good thing to offer when needed in relation."
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col sm:flex-row items-start gap-6 md:gap-8 p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300 hidden-on-scroll slide-in-right animate-on-load">
          <img 
            src={mission} 
            alt="Mission icon" 
            className="h-16 w-16 md:h-20 md:w-20 flex-shrink-0 transition-transform duration-300 hover:scale-110" 
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#4D4D4D] mb-3 md:mb-4">
              Company's Mission
            </h2>
            <p className="text-lg md:text-xl text-[#68686C] leading-relaxed italic">
              "To lead the transformation of healthcare through intelligent, accessible, and innovative technology—improving lives globally through data-driven precision medicine."
            </p>
          </div>
        </div>
      </div>
      
      {/* Founders Section */}
      <div id="founders-section" className="flex flex-col items-center justify-center mb-16 md:mb-24">
        <img 
          src={founders} 
          alt="Founders icon" 
          className="h-32 w-32 md:h-40 md:w-40 mb-6 transition-transform duration-300 hover:scale-105 hidden-on-scroll fade-in-up animate-on-load" 
        />
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#306E80] text-center mb-8 md:mb-12 hidden-on-scroll fade-in-up animate-on-load">
          Founders
        </h2>
        
        {/* Founders Grid - 2×2 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl px-4">
          {/* Founder 1 */}
          <div className="flex flex-col items-center p-6 rounded-xl transition-colors duration-300 hidden-on-scroll slide-in-left animate-on-load">
            <img 
              src={ahmedFayez} 
              alt="Ahmed Fayez" 
              className="h-48 w-48 md:h-56 md:w-56 rounded-full object-cover shadow-lg shadow-gray-300 transition-transform duration-300 hover:scale-105 mb-4" 
            />
            <h3 className="text-xl md:text-2xl font-semibold text-[#68686C] text-center">Ahmed Fayez</h3>
            <p className="text-[#68686C] text-base md:text-lg text-center">Co-founder & CEO</p>
          </div>
          
          {/* Founder 2 */}
          <div className="flex flex-col items-center p-6 rounded-xl transition-colors duration-300 hidden-on-scroll slide-in-right animate-on-load">
            <img 
              src={mohamedEssam} 
              alt="Mohamed Essam" 
              className="h-48 w-48 md:h-56 md:w-56 rounded-full object-cover shadow-lg shadow-gray-300 transition-transform duration-300 hover:scale-105 mb-4" 
            />
            <h3 className="text-xl md:text-2xl font-semibold text-[#68686C] text-center">Mohamed Essam</h3>
            <p className="text-[#68686C] text-base md:text-lg text-center">Co-founder & COO</p>
          </div>
          
          {/* Founder 3 */}
          <div className="flex flex-col items-center p-6 rounded-xl transition-colors duration-300 hidden-on-scroll slide-in-left animate-on-load">
            <img 
              src={abdulrahmanAref} 
              alt="Abdulrahman Aref" 
              className="h-48 w-48 md:h-56 md:w-56 rounded-full object-cover shadow-lg shadow-gray-300 transition-transform duration-300 hover:scale-105 mb-4" 
            />
            <h3 className="text-xl md:text-2xl font-semibold text-[#68686C] text-center">Abdulrahman Aref</h3>
            <p className="text-[#68686C] text-base md:text-lg text-center">Co-founder & Head of R&D</p>
          </div>
          
          {/* Founder 4 */}
          <div className="flex flex-col items-center p-6 rounded-xl transition-colors duration-300 hidden-on-scroll slide-in-right animate-on-load">
            <img 
              src={mohamedMostafa} 
              alt="Mohamed Mostafa" 
              className="h-48 w-48 md:h-56 md:w-56 rounded-full object-cover shadow-lg shadow-gray-300 transition-transform duration-300 hover:scale-105 mb-4" 
            />
            <h3 className="text-xl md:text-2xl font-semibold text-[#68686C] text-center">Mohamed Mostafa</h3>
            <p className="text-[#68686C] text-base md:text-lg text-center">Co-founder & CTO</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-center justify-center mb-12 md:mb-20">
        <img 
          src={contact} 
          alt="Contact icon" 
          className="h-32 w-32 md:h-40 md:w-40 mb-6 transition-transform duration-300 hover:scale-105 hidden-on-scroll fade-in-up animate-on-load" 
        />
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#306E80] text-center mb-8 md:mb-12 hidden-on-scroll fade-in-up animate-on-load">
          Contact us!
        </h2>
        
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-8 md:p-10 hover:shadow-lg transition-shadow duration-300 hidden-on-scroll fade-in-up animate-on-load">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
            {/* Address */}
            <div className="flex flex-col items-center text-center group">
              <div className="h-12 w-12 md:h-14 md:w-14 mb-4 text-[#306E80] group-hover:text-[#195769] transition-colors duration-300">
                <svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[#4D4D4D] mb-2">Address</h3>
              <p className="text-[#68686C] text-base">
                76 Ibn Sender St. – Zaitoon<br />
                Cairo – Egypt
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center group">
              <div className="h-12 w-12 md:h-14 md:w-14 mb-4 text-[#306E80] group-hover:text-[#195769] transition-colors duration-300">
                <svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[#4D4D4D] mb-2">Email</h3>
              <a href="mailto:info@irri-vision.com" className="text-[#68686C] text-base hover:text-[#306E80] transition-colors duration-300">
                info@irri-vision.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center text-center group">
              <div className="h-12 w-12 md:h-14 md:w-14 mb-4 text-[#306E80] group-hover:text-[#195769] transition-colors duration-300">
                <svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[#4D4D4D] mb-2">Phone</h3>
              <p className="text-[#68686C] text-base">
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