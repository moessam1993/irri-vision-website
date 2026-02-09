import { useEffect } from "react";
import underline from "../assets/underline.png";
import oqfy from "../assets/oqfy.png";
import button from "../assets/button.png";
import nonai from "../assets/nonia.png";
import qumra from "../assets/qumra.png";
import { useNavigate } from 'react-router';

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
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#195769] mb-4 md:mb-6 mt-4 md:mt-8 text-center hidden-on-scroll fade-in-up animate-on-load">
          Products & Solutions
        </h1>
        <img 
          src={underline} 
          alt="Underline decoration" 
          className="h-6 md:h-8 lg:h-10 w-40 md:w-48 lg:w-60 transition-transform duration-300 hover:scale-105 hidden-on-scroll fade-in-up animate-on-load" 
        />
      </div>

      {/* OQfy Product */}
      <div className="mb-16 sm:mb-20 md:mb-28 lg:mb-32 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 items-center">
          {/* Text Content */}
          <div className="flex-1 order-2 md:order-1 hidden-on-scroll slide-in-left animate-on-load px-2 sm:px-4">
            <div className="mb-3 md:mb-4">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black font-serif">
                OQfy - Intelligent EMR for Ophthalmology
              </h2>
              <div className="border-b border-2 rounded-xl border-[#195769] w-full max-w-[250px] sm:max-w-[300px] mt-1 md:mt-2"></div>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-inter text-[#4D4D4D] mb-4 md:mb-6">
              "OQfy is a modern, ophthalmologist-centric electronic medical record (EMR) system. It helps clinicians manage appointments, document visits, schedule surgeries, and generate invoices, all while tracking essential performance metrics. Whether for solo clinics or large hospitals, OQfy offers a beautifully intuitive and friendly interface."
            </p>
            <div className="mt-2 md:mt-4">
              <button 
                className="group relative cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95"
                onClick={handleContactClick}
              >
                <img 
                  src={button} 
                  alt="Learn more button" 
                  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-cover" 
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-medium text-xs sm:text-sm md:text-base opacity-0  transition-opacity duration-300">
                  Learn More
                </span>
              </button>
            </div>
          </div>
          {/* Image */}
          <div className="flex-1 order-1 md:order-2 flex justify-center hidden-on-scroll slide-in-right animate-on-load px-2 sm:px-4">
            <img 
              src={oqfy} 
              alt="OQfy product image" 
              className="h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 w-auto object-contain transition-transform duration-500 hover:scale-105" 
            />
          </div>
        </div>
      </div>

      {/* NON-AI Product - Reversed Layout */}
      <div className="mb-16 sm:mb-20 md:mb-28 lg:mb-32 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 items-center">
          {/* Image */}
          <div className="flex-1 flex justify-center hidden-on-scroll slide-in-left animate-on-load px-2 sm:px-4">
            <img 
              src={nonai} 
              alt="NON-AI product image" 
              className="h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 w-auto object-contain transition-transform duration-500 hover:scale-105" 
            />
          </div>
          {/* Text Content - Right-aligned */}
          <div className="flex-1 flex flex-col items-start md:items-end text-left md:text-right hidden-on-scroll slide-in-right animate-on-load px-2 sm:px-4">
            <div className="mb-3 md:mb-4 w-full">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black font-serif">
                NON-AI - Neural Ocular Network-AI
              </h2>
              <div className="border-b border-2 rounded-xl border-[#195769] w-full max-w-[250px] sm:max-w-[300px] mt-1 md:mt-2 md:ml-auto"></div>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-inter text-[#4D4D4D] mb-4 md:mb-6">
              NON-AI is an advanced diagnostic platform that uses AI to detect ophthalmic conditions from medical imaging with exceptional speed and accuracy. Currently focused on Retinopathy of Prematurity (ROP), NON-AI can diagnose a case in under 2 seconds, identifying zones and stages with clinical-grade precision. It bridges the critical gap between neonatal care centers and the global shortage of ROP experts, making early detection and intervention possible—especially in underserved areas. NON-AI is not just a tool—it's a continuously evolving AI ecosystem designed to one day detect all major ophthalmic diseases.
            </p>
            <div className="mt-2 md:mt-4">
              <button 
                className="group relative overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
                onClick={handleContactClick}
              >
                <img 
                  src={button} 
                  alt="Learn more button" 
                  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-cover" 
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-medium text-xs sm:text-sm md:text-base opacity-0  transition-opacity duration-300">
                  Learn More
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* QUMRA Product */}
      <div className="mb-16 sm:mb-20 md:mb-28 lg:mb-32 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 items-center">
          {/* Text Content */}
          <div className="flex-1 order-2 md:order-1 hidden-on-scroll slide-in-left animate-on-load px-2 sm:px-4">
            <div className="mb-3 md:mb-4">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black font-serif">
                Qumra - The Future of Tele-Ophthalmology
              </h2>
              <div className="border-b border-2 rounded-xl border-[#195769] w-full max-w-[250px] sm:max-w-[300px] mt-1 md:mt-2"></div>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-inter text-[#4D4D4D] mb-4 md:mb-6">
              Qumra is our breakthrough Remote Immersive Binocular Ophthalmoscope (RIBO) System, enabling eye exams without physical proximity. Patients wear a lightweight, VR-like headset with embedded motorized lenses and cameras, while physicians can examine the full eye—live and remotely—through a standard VR viewer or external monitor. Qumra makes telemedicine tangible, scalable, and immersive—perfect for clinics, hospitals, bedridden patients, or even home use.
            </p>
            <div className="mt-2 md:mt-4">
              <button 
                className="group relative overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95"
                onClick={handleContactClick}
              >
                <img 
                  src={button} 
                  alt="Learn more button" 
                  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-cover" 
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-medium text-xs sm:text-sm md:text-base opacity-0  transition-opacity duration-300">
                  Learn More
                </span>
              </button>
            </div>
          </div>
          {/* Image */}
          <div className="flex-1 order-1 md:order-2 flex justify-center hidden-on-scroll slide-in-right animate-on-load px-2 sm:px-4">
            <img 
              src={qumra} 
              alt="Qumra product image" 
              className="h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 w-auto object-contain transition-transform duration-500 hover:scale-105" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;