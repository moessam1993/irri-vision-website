import { useEffect } from "react";
import underline from "../assets/underline.png";
import qumra from "../assets/qumra.png";
import { useNavigate } from 'react-router';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

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
  }, []);

  const handleContactClick = () => {
    navigate("/contact-us");
  };

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-8 md:py-12 lg:py-16 font-inter">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center mb-12 md:mb-20 px-2 sm:px-4">
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#195769] mb-4 md:mb-6 mt-4 md:mt-8 text-center hidden-on-scroll fade-in-up animate-on-load">
          Solutions
        </h1>
        <img 
          src={underline} 
          alt="Underline decoration" 
          className="h-6 md:h-8 lg:h-10 w-40 md:w-48 lg:w-60 transition-transform duration-300 hover:scale-105 hidden-on-scroll fade-in-up animate-on-load" 
        />
      </div>

      {/* QUMRA Product */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 items-center">
          {/* Text Content */}
          <div className="flex-1 order-2 md:order-1 hidden-on-scroll slide-in-left animate-on-load px-2 sm:px-4">
            <div className="mb-3 md:mb-4">
              <h2 className="font-display text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black">
                Qumra - The Future of Tele-Ophthalmology
              </h2>
              <div className="border-b border-2 rounded-xl border-[#195769] w-full max-w-[250px] sm:max-w-[300px] mt-1 md:mt-2"></div>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-inter text-[#4D4D4D] mb-4 md:mb-6">
              Qumra is our breakthrough Remote Immersive Binocular Ophthalmoscope (RIBO) System, enabling eye exams without physical proximity. Patients wear a lightweight, VR-like headset with embedded motorized lenses and cameras, while physicians can examine the full eye—live and remotely—through a standard VR viewer or external monitor. Qumra makes telemedicine tangible, scalable, and immersive—perfect for clinics, hospitals, bedridden patients, or even home use.
            </p>
            <div className="mt-4 md:mt-6">
              <button 
                onClick={handleContactClick}
                className="group flex items-center justify-center gap-2 text-white bg-[#195769] px-5 py-2.5 text-sm sm:text-base rounded-md font-semibold hover:bg-[#134252] transition-all duration-200 transform hover:scale-105 focus:outline-none active:scale-95 shadow-sm hover:shadow-md"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          {/* Image with Diagnostic Scanner Effect */}
          <div className="flex-1 order-1 md:order-2 flex justify-center hidden-on-scroll slide-in-right animate-on-load px-2 sm:px-4 relative group">
            <div className="relative rounded-2xl p-4 bg-gradient-to-tr from-[#195769]/5 to-transparent border border-gray-100 shadow-md hover:border-[#195769]/30 transition-all duration-500 overflow-hidden">
              {/* Target Reticles */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#195769]/30 rounded-tl-sm pointer-events-none group-hover:border-[#195769] transition-all" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#195769]/30 rounded-tr-sm pointer-events-none group-hover:border-[#195769] transition-all" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#195769]/30 rounded-bl-sm pointer-events-none group-hover:border-[#195769] transition-all" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#195769]/30 rounded-br-sm pointer-events-none group-hover:border-[#195769] transition-all" />
              
              {/* Laser Scanning Bar */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#D9A444] to-transparent animate-scan pointer-events-none" />

              <img 
                src={qumra} 
                alt="Qumra product image" 
                className="h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 w-auto object-contain transition-transform duration-500 group-hover:scale-102" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
