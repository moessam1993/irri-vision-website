// src/components/landing_page.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import irri from "../assets/IRRI.svg";
import hardware from "../assets/hardware.png";
import software from "../assets/software.png";
import loading from "../assets/Loading.png";
import join from "../assets/join.png";
import useScrollAnimation from '../components/useScrollAnimation';

const LandingPage: React.FC = () => {
  const isVisible = useScrollAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleJoinClick = () => {
    navigate("/join");
  };
  const handleExploreClick = () => {
    navigate("/products");
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#F5F7FA] py-12 md:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              <div className="lg:w-1/2 w-full animate-fadeIn">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-4 leading-tight">
                  <span className="text-[#4D4D4D] block">Revolutionizing Healthcare with the</span>
                  <span className="text-[#195769] block mt-2 md:mt-4">Power of AI</span>
                </h1>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-12">
                  <button className="flex items-center justify-center gap-2 text-white bg-[#195769] px-6 py-3 rounded-md font-semibold hover:bg-[#134252] transition-all duration-200 min-w-[180px] transform hover:scale-105 focus:outline-none active:scale-95 shadow-md hover:shadow-lg"
                  onClick={handleExploreClick}
                  >
                    <img src={loading} alt="loading" className="h-5 w-5 animate-spin" />
                    <span>Explore our products</span>
                  </button>
                  <button 
                    onClick={handleJoinClick}
                    className="flex items-center justify-center gap-2 text-white bg-[#195769] px-6 py-3 rounded-md font-semibold hover:bg-[#134252] transition-all duration-200 min-w-[180px] transform hover:scale-105 focus:outline-none active:scale-95 shadow-md hover:shadow-lg"
                  >
                    <img src={join} alt="Join icon" className="h-5 w-5" />
                    <span>Join the Mission</span>
                  </button>
                </div>
              </div>

              <div className="lg:w-1/2 w-full flex justify-center mt-8 lg:mt-0 animate-slideInRight">
                <img 
                  src={irri} 
                  alt="IRRI Logo" 
                  className="h-auto w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] transition-transform duration-500 hover:scale-105" 
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#FFFAE7] to-white max-w-full mx-auto animate-fadeInUp">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-[#195769] mb-6">Who are we?</h2>
            <div className="text-center max-w-4xl mx-auto">
              <p className='text-[#4D4D4D] text-lg md:text-xl leading-relaxed'>
                <span className='text-[#D9A444] font-bold'>IRRI Vision LLC</span> is an Egyptian health-tech company founded in 2024 by passionate pioneers in medical innovation. 
                Our mission is to empower healthcare professionals with intelligent tools that enhance diagnostics, improve outcomes, 
                and expand access to quality care.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-[#195769] mb-12 md:mb-16">What we do</h2>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 px-4 sm:px-0">
              <div 
                className={`hardware-section animate-on-scroll flex flex-col items-center p-6 sm:p-8 md:p-12 rounded-lg bg-white hover:bg-[#F5F7FA] transition-all duration-300 shadow-md hover:shadow-xl hidden-on-scroll ${
                  isVisible ? 'slide-in-left' : ''
                }`}
              >
                <img src={hardware} alt="hardware" className="h-16 sm:h-20 w-16 sm:w-20 mb-4 sm:mb-6 transition-transform duration-300 hover:scale-110" />
                <h3 className="text-xl md:text-2xl font-semibold text-[#4D4D4D] mb-3 sm:mb-4 text-center">Hardware Solutions</h3>
                <p className="text-[#68686C] text-center max-w-md text-base md:text-lg leading-relaxed">
                  Our R&D team develops next-generation medical devices designed to integrate smoothly into clinical workflows. 
                  By eliminating traditional barriers and embracing cutting-edge design, we bring powerful tools directly to the point of care.
                </p>
              </div>
              
              <div 
                className={`software-section animate-on-scroll flex flex-col items-center p-6 sm:p-8 md:p-12 rounded-lg bg-white hover:bg-[#F5F7FA] transition-all duration-300 shadow-md hover:shadow-xl hidden-on-scroll ${
                  isVisible ? 'slide-in-right' : ''
                }`}
              >
                <img src={software} alt="software" className="h-16 sm:h-20 w-16 sm:w-20 mb-4 sm:mb-6 transition-transform duration-300 hover:scale-110" />
                <h3 className="text-xl md:text-2xl font-semibold text-[#4D4D4D] mb-3 sm:mb-4 text-center">Software Solutions</h3>
                <p className="text-[#68686C] text-center max-w-md text-base md:text-lg leading-relaxed">
                  From AI-powered diagnostics to intelligent EMRS, our software platforms are built to streamline clinical processes, 
                  reduce costs, and elevate productivity—all while delivering intuitive and seamless user experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;