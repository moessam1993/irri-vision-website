import React, { useEffect } from 'react';
import join from "../assets/join-us.png";
import now from "../assets/join.png";
import culture from "../assets/culture.png";
import right from "../assets/right.png";
import { useNavigate } from 'react-router';

const Careers: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    
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

  const handleJoinClick = () => {
    navigate("/join");
  };

  return (
    <div className="min-h-screen flex flex-col">      
      <main className="flex-grow">
        {/* Hero Section - Reduced padding and font sizes */}
        <section className="bg-gradient-to-b from-[#FFFAE7] to-white py-8 md:py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            <div className="lg:w-1/2 flex flex-col items-start w-full hidden-on-scroll slide-in-left animate-on-load">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#195769]">
                Why Join Us ?
              </h1>
              <div className="mb-4 md:mb-6">
                <p className="text-sm md:text-base text-[#4D4D4D] mb-3">
                  Joining IRRI Vision means becoming part of a mission-driven team working on some of the most meaningful challenges in global health.
                </p>
                <p className="text-sm md:text-base text-[#4D4D4D] font-semibold">
                  Whether you're a developer, a researcher, or a healthcare professional, there's a place for you on our team.
                </p>
              </div>
              <div className="flex justify-start w-full">
                <button 
                  onClick={handleJoinClick}
                  className="flex items-center justify-center gap-2 cursor-pointer text-white bg-[#195769] px-4 py-2 text-sm rounded-md font-semibold hover:bg-[#134252] transition-all duration-200 min-w-[160px] transform hover:scale-105 focus:outline-none active:scale-95 shadow-sm hover:shadow-md"
                >
                  <img src={now} alt="loading" className="h-4 w-4" />
                  <span>Join us Now !</span>
                </button>
              </div>
            </div>

            {/* Right Column - Logo */}
            <div className="lg:w-1/2 flex justify-center w-full mt-6 lg:mt-0 hidden-on-scroll slide-in-right animate-on-load">
              <img 
                src={join} 
                alt="IRRI Logo" 
                className="h-auto w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px]" 
              />
            </div>
          </div>
        </section>

        {/* What You Will Learn Section - Reduced padding and sizes */}
        <section className="w-full py-8 md:py-12 bg-white px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Title Section */}
            <div className="text-center mb-6 md:mb-8 hidden-on-scroll fade-in-up animate-on-load">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#195769]">
                What you will learn
              </h2>
            </div>

            {/* Interactive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-0">
              {/* Card 1 - Innovative Work */}
              <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-[#FFFAE7] hover:border-[#195769] transform hover:-translate-y-1  hidden-on-scroll fade-in-up animate-on-load">
                <div className="flex items-center mb-4">
                  <div className="bg-[#FFFAE7] p-3 rounded-lg group-hover:bg-[#195769] transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#195769] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-lg font-semibold text-[#195769]">Innovative Work</h3>
                </div>
                <p className="text-sm md:text-base text-[#4D4D4D]">
                  You'll collaborate on breakthrough technologies in diagnostics, imaging, and AI development.
                </p>
              </div>

              {/* Card 2 - Learning Culture */}
              <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-[#FFFAE7] hover:border-[#195769] transform hover:-translate-y-1  hidden-on-scroll fade-in-up animate-on-load" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center mb-4">
                  <div className="bg-[#FFFAE7] p-3 rounded-lg group-hover:bg-[#195769] transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#195769] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-lg font-semibold text-[#195769]">Learning Culture</h3>
                </div>
                <p className="text-sm md:text-base text-[#4D4D4D]">
                  Our diverse team of engineers, clinicians, and researchers fosters continuous learning and cross-disciplinary growth.
                </p>
              </div>

              {/* Card 3 - Real Impact */}
              <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-[#FFFAE7] hover:border-[#195769] transform hover:-translate-y-1  hidden-on-scroll fade-in-up animate-on-load" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center mb-4">
                  <div className="bg-[#FFFAE7] p-3 rounded-lg group-hover:bg-[#195769] transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#195769] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-lg font-semibold text-[#195769]">Real Impact</h3>
                </div>
                <p className="text-sm md:text-base text-[#4D4D4D]">
                  Your work will directly improve the lives of patients and the efficiency of healthcare providers across the globe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Culture & Values Section - Reduced padding and sizes */}
        <section className="bg-gradient-to-b from-white to-[#FFFAE7] py-8 md:py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            <div className="lg:w-1/2 flex flex-col items-start"> 
              <h1 className="text-3xl md:text-4xl font-bold mb-6"> 
                <span className="text-[#195769]">Culture & Values</span>
              </h1>
              <h2 className='text-left mb-6'>
                <span className='text-[#4D4D4D] text-sm md:text-base'>We believe that the future of healthcare is human-centered, technology-enabled, and deeply collaborative.</span>
              </h2>
              <div className="flex justify-start"> 
                <button 
                  onClick={handleJoinClick}
                  className="flex items-center justify-center gap-2 cursor-pointer text-white bg-[#195769] px-4 py-2 text-sm rounded-md font-semibold hover:bg-[#134252] transition-all duration-200 min-w-[160px] transform hover:scale-105 focus:outline-none shadow-sm hover:shadow-md"
                >
                  <img src={now} alt="loading" className="h-4 w-4" />
                  <span>Join us Now !</span>
                </button>
              </div>
            </div>
            
            {/* Right Column - Logo */}
            <div className="lg:w-1/2 flex justify-center">
              <img 
                src={culture} 
                alt="culture" 
                className="h-auto w-full max-w-[300px] md:max-w-[400px]" 
              />
            </div>
          </div>

          {/* Values Grid - Adjusted width and margins */}
          <div className="flex flex-col items-center justify-center mt-6 md:mt-8 mx-4 sm:mx-6 md:mx-8 lg:mx-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl">
              {/* Value 1 */}
              <div className="flex flex-col items-start p-3 md:p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 hidden-on-scroll fade-in-up animate-on-load">
                <img 
                  src={right} 
                  alt="Purpose-Driven Innovation" 
                  className="h-8 md:h-10 w-8 md:w-10 rounded-full object-cover mb-2 shadow-md shadow-gray-200 transition-transform duration-300 hover:scale-110" 
                />
                <h3 className="text-base md:text-lg font-semibold text-[#68686C] mb-1">Purpose-Driven Innovation</h3>
                <p className="text-xs md:text-sm text-[#68686C]">
                  We work on solutions that truly matter—where technology directly improves health outcomes.
                </p>
              </div>
              
              {/* Value 2 */}
              <div className="flex flex-col items-start p-3 md:p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 hidden-on-scroll fade-in-up animate-on-load" style={{ animationDelay: "0.2s" }}>
                <img 
                  src={right} 
                  alt="Agility & Curiosity" 
                  className="h-8 md:h-10 w-8 md:w-10 rounded-full object-cover mb-2 shadow-md shadow-gray-200 transition-transform duration-300 hover:scale-110" 
                />
                <h3 className="text-base md:text-lg font-semibold text-[#68686C] mb-1">Agility & Curiosity</h3>
                <p className="text-xs md:text-sm text-[#68686C]">
                  We move fast, experiment boldly, and embrace change as a pathway to growth.
                </p>
              </div>
              
              {/* Value 3 */}
              <div className="flex flex-col items-start p-3 md:p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 hidden-on-scroll fade-in-up animate-on-load" style={{ animationDelay: "0.4s" }}>
                <img 
                  src={right} 
                  alt="Excellence with Empathy" 
                  className="h-8 md:h-10 w-8 md:w-10 rounded-full object-cover mb-2 shadow-md shadow-gray-200 transition-transform duration-300 hover:scale-110" 
                />
                <h3 className="text-base md:text-lg font-semibold text-[#68686C] mb-1">Excellence with Empathy</h3>
                <p className="text-xs md:text-sm text-[#68686C]">
                  We hold ourselves to the highest standards while respecting the needs of both patients and providers.
                </p>
              </div>
              
              {/* Value 4 */}
              <div className="flex flex-col items-start p-3 md:p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 hidden-on-scroll fade-in-up animate-on-load" style={{ animationDelay: "0.6s" }}>
                <img 
                  src={right} 
                  alt="Integrity & Transparency" 
                  className="h-8 md:h-10 w-8 md:w-10 rounded-full object-cover mb-2 shadow-md shadow-gray-200 transition-transform duration-300 hover:scale-110" 
                />
                <h3 className="text-base md:text-lg font-semibold text-[#68686C] mb-1">Integrity & Transparency</h3>
                <p className="text-xs md:text-sm text-[#68686C]">
                  From clinical validation to data privacy, we operate with complete honesty and responsibility.
                </p>
              </div>
              
              {/* Value 5 */}
              <div className="flex flex-col items-start p-3 md:p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 hidden-on-scroll fade-in-up animate-on-load" style={{ animationDelay: "0.8s" }}>
                <img 
                  src={right} 
                  alt="Diversity & Inclusion" 
                  className="h-8 md:h-10 w-8 md:w-10 rounded-full object-cover mb-2 shadow-md shadow-gray-200 transition-transform duration-300 hover:scale-110" 
                />
                <h3 className="text-base md:text-lg font-semibold text-[#68686C] mb-1">Diversity & Inclusion</h3>
                <p className="text-xs md:text-sm text-[#68686C]">
                  We welcome different perspectives and backgrounds to spark the best ideas and strongest teamwork.
                </p>
              </div>
            </div>
            <p className="text-sm md:text-xl text-[#195769] font-semibold mt-8 md:mt-10 font-inter hidden-on-scroll fade-in-up animate-on-load">
              Whether you're a developer, a researcher, or a healthcare professional, there's a place for you on our team!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Careers;