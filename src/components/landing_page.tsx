import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import irri from "../assets/IRRI.svg";
import hardware from "../assets/hardware.png";
import software from "../assets/software.png";
import loading from "../assets/Loading.png";
import join from "../assets/join.png";
import useScrollAnimation from '../components/useScrollAnimation';
import { earlyAccessAnnouncement } from '../data/early_access_announcement';

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
  const handleEarlyAccessClick = () => {
    navigate("/blog/limited-early-access");
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">      
      <main className="flex-grow">
        {/* Hero Section - Optimized for mobile */}
        <section className="bg-[#F5F7FA] py-6 md:py-16 px-4 sm:px-6 pt-10 md:pt-20">
          <div className="max-w-[90rem] mx-auto">
            <div className="flex flex-col items-center lg:flex-row justify-between gap-4 lg:gap-10">
              {/* Content - order changes on mobile */}
              <div className="flex flex-col items-center lg:items-start w-full lg:w-3/5 order-2 lg:order-1 animate-fadeIn">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 lg:mb-3 leading-tight text-center lg:text-left">
                  <span className="text-[#4D4D4D] block">Revolutionizing Healthcare with the Power of AI</span>
                    </h1>

                <div className="w-full mt-5 sm:mt-6 animate-fadeInUp">
                  <div className="bg-gradient-to-r from-[#195769] to-[#144552] rounded-2xl shadow-lg p-5 sm:p-6 md:p-7 text-white flex flex-col gap-4 transition-transform duration-500 hover:-translate-y-1">
                    <div>
                      <p className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-white/80 mb-2">
                        {earlyAccessAnnouncement.preview.eyebrow}
                      </p>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
                        {earlyAccessAnnouncement.preview.headline}
                      </h2>
                      <p className="text-sm sm:text-base text-white/90 mb-2">
                        {earlyAccessAnnouncement.preview.body}
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-[#FDE68A]">
                        {earlyAccessAnnouncement.preview.urgency}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full">
                      <button
                        onClick={handleEarlyAccessClick}
                        className="flex items-center justify-center px-4 py-2.5 rounded-lg bg-white text-[#195769] font-semibold shadow-md hover:bg-[#F3F4F6] transition-colors w-full sm:w-auto"
                      >
                        {earlyAccessAnnouncement.preview.readLabel}
                      </button>
                      <a
                        href="https://forms.gle/uzHhvC3HYue4SCUv8"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center px-4 py-2.5 rounded-lg border border-white/70 text-white font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto"
                      >
                        {earlyAccessAnnouncement.preview.requestLabel}
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 mt-4 lg:mt-8 w-full justify-center lg:justify-start">
                  <button 
                    onClick={handleExploreClick}
                    className="flex items-center justify-center gap-2 text-white bg-[#195769] px-4 py-2 text-sm rounded-md font-semibold hover:bg-[#134252] transition-all duration-200 w-full sm:w-auto transform hover:scale-105 focus:outline-none active:scale-95 shadow-sm hover:shadow-md"
                  >
                    <img src={loading} alt="loading" className="h-4 w-4 animate-spin" />
                    <span>Explore our products</span>
                  </button>
                  <button 
                    onClick={handleJoinClick}
                    className="flex items-center justify-center gap-2 text-white bg-[#195769] px-4 py-2 text-sm rounded-md font-semibold hover:bg-[#134252] transition-all duration-200 w-full sm:w-auto transform hover:scale-105 focus:outline-none active:scale-95 shadow-sm hover:shadow-md"
                  >
                    <img src={join} alt="Join icon" className="h-4 w-4" />
                    <span>Join the Mission</span>
                  </button>
                </div>
              </div>

              {/* Logo - appears first on mobile, then normal order on desktop */}
              <div className="lg:w-2/5 w-full flex justify-center lg:justify-end order-1 lg:order-2 mb-6 lg:mb-0 lg:mt-0 animate-slideInRight">
                <img 
                  src={irri} 
                  alt="IRRI Logo" 
                  className="h-auto w-full max-w-[180px] sm:max-w-[250px] md:max-w-[320px] lg:max-w-[400px] transition-transform duration-500 hover:scale-105" 
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section - Mobile optimized */}
        <section className="py-8 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#FFFAE7] to-white max-w-full mx-auto animate-fadeInUp">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-[#195769] mb-3 md:mb-4">Who are we?</h2>
            <div className="text-center max-w-3xl mx-auto">
              <p className='text-[#4D4D4D] text-sm md:text-lg leading-relaxed'>
                <span className='text-[#D9A444] font-bold'>IRRI Vision LLC</span> is an Egyptian health-tech company founded in 2024 by passionate pioneers in medical innovation. 
                Our mission is to empower healthcare professionals with intelligent tools that enhance diagnostics, improve outcomes, 
                and expand access to quality care.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Section - Mobile optimized */}
        <section className="py-8 px-4 sm:px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-[#195769] mb-6 md:mb-12">What we do</h2>
            
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 px-2 sm:px-0">
              <div 
                className={`hardware-section animate-on-scroll flex flex-col items-center p-4 sm:p-6 md:p-8 rounded-lg bg-white hover:bg-[#F5F7FA] transition-all duration-300 shadow-sm hover:shadow-md ${
                  isVisible ? 'slide-in-left' : ''
                }`}
              >
                <img src={hardware} alt="hardware" className="h-12 sm:h-16 w-12 sm:w-16 mb-2 sm:mb-4 transition-transform duration-300 hover:scale-110" />
                <h3 className="text-base md:text-xl font-semibold text-[#4D4D4D] mb-2 sm:mb-3 text-center">Hardware Solutions</h3>
                <p className="text-[#68686C] text-center max-w-md text-xs sm:text-sm md:text-base leading-relaxed">
                  Our R&D team develops next-generation medical devices designed to integrate smoothly into clinical workflows. 
                  By eliminating traditional barriers and embracing cutting-edge design, we bring powerful tools directly to the point of care.
                </p>
              </div>
              
              <div 
                className={`software-section animate-on-scroll flex flex-col items-center p-4 sm:p-6 md:p-8 rounded-lg bg-white hover:bg-[#F5F7FA] transition-all duration-300 shadow-sm hover:shadow-md ${
                  isVisible ? 'slide-in-right' : ''
                }`}
              >
                <img src={software} alt="software" className="h-12 sm:h-16 w-12 sm:w-16 mb-2 sm:mb-4 transition-transform duration-300 hover:scale-110" />
                <h3 className="text-base md:text-xl font-semibold text-[#4D4D4D] mb-2 sm:mb-3 text-center">Software Solutions</h3>
                <p className="text-[#68686C] text-center max-w-md text-xs sm:text-sm md:text-base leading-relaxed">
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