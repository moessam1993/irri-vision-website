import React, { useEffect } from 'react';
import join from "../assets/join-us.png";
import cult from "../assets/culture_.png"
import now from "../assets/join.png";
import impact from "../assets/impact.png";
import work from "../assets/work.png";
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
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#FFFAE7] to-white py-12 md:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="lg:w-1/2 flex flex-col items-start w-full hidden-on-scroll slide-in-left animate-on-load">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[75px] font-bold mb-6 md:mb-8 text-[#195769]">
                Why Join Us ?
              </h1>
              <div className="mb-6 md:mb-8">
                <p className="text-base md:text-lg text-[#4D4D4D] mb-4">
                  Joining IRRI Vision means becoming part of a mission-driven team working on some of the most meaningful challenges in global health. You won't just be building products, you'll be helping prevent blindness, expand access to care, and shape the future of medical AI.
                </p>
                <p className="text-base md:text-lg text-[#4D4D4D] font-semibold">
                  Whether you're a developer, a researcher, or a healthcare professional, there's a place for you on our team.
                </p>
              </div>
              <div className="flex justify-start w-full">
                <button className="flex items-center justify-center gap-2 text-white bg-[#195769] px-6 py-3 rounded-md font-semibold hover:bg-[#134252] transition-all duration-200 min-w-[180px] transform hover:scale-105 focus:outline-none active:scale-95"
                onClick={handleJoinClick}
                >
                  <img src={now} alt="loading" className="h-5 w-5" />
                  <span>Join us Now !</span>
                </button>
              </div>
            </div>

            {/* Right Column - Logo */}
            <div className="lg:w-1/2 flex justify-center w-full mt-8 lg:mt-0 hidden-on-scroll slide-in-right animate-on-load">
              <img 
                src={join} 
                alt="IRRI Logo" 
                className="h-auto w-full max-w-[300px] sm:max-w-[400px] md:max-w-[542px]" 
              />
            </div>
          </div>
        </section>

        {/* What You Will Learn Section */}
        <section className="w-full py-12 md:py-16 bg-white px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Title Section */}
            <div className="text-center mb-8 md:mb-12 hidden-on-scroll fade-in-up animate-on-load">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#195769]">
                What you will learn
              </h2>
            </div>

            {/* Image Grid Section */}
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Image 1 - Culture */}
                <div className="flex justify-center hidden-on-scroll slide-in-left animate-on-load">
                  <img 
                    src={cult} 
                    alt="Company Culture" 
                    className="w-full max-w-[766px] h-[359px] object-contain"
                  />
                </div>
                
                {/* Image 2 - Impact */}
                <div className="flex justify-center hidden-on-scroll slide-in-right animate-on-load">
                  <img 
                    src={impact} 
                    alt="Company Impact" 
                    className="w-full max-w-[766px] h-[359px] object-contain"
                  />
                </div>
                
                {/* Image 3 - Work */}
                <div className="flex justify-center md:col-span-2 hidden-on-scroll fade-in-up animate-on-load">
                  <img 
                    src={work} 
                    alt="Work Environment" 
                    className="w-full max-w-[766px] h-[359px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white to-[#FFFAE7] py-12 md:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="lg:w-1/2 flex flex-col items-start"> 
      <h1 className="text-4xl md:text-6xl font-bold mb-8"> 
        <span className="text-[#195769] text-[75px]">Culture & Values</span>
      </h1>
      <h2 className='text-left mb-8'>
        <span className='text-[#4D4D4D]'>We believe that the future of healthcare is human-centered, technology-enabled, and deeply collaborative. At IRRI Vision, our culture is built on:</span> <br/>

      </h2>
      <div className="flex justify-start"> 
        <button className="flex items-center justify-center gap-2 text-white bg-[#195769] px-6 py-3 rounded-md font-semibold hover:bg-[#134252] transition-all duration-200 min-w-[180px] transform hover:scale-105 focus:outline-none">
          <img src={now} alt="loading" className="h-5 w-5" />
          <span>Join us Now !</span>
        </button>
      </div>
    </div>
        {/* Right Column - Logo */}
        <div className="lg:w-1/2 flex justify-center">
      <img 
        src={culture} 
        alt="culture" 
        className="h-auto w-full max-w-[400px] md:max-w-[542px]" 
      />
    </div>
    </div>

          {/* Values Grid - Adjusted width and margins */}
          <div className="flex flex-col items-center justify-center mt-8 md:mt-12 mx-4 sm:mx-8 md:mx-12 lg:mx-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl">
              {/* Value 1 */}
              <div className="flex flex-col items-start p-4 md:p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hidden-on-scroll fade-in-up animate-on-load">
                <img 
                  src={right} 
                  alt="Purpose-Driven Innovation" 
                  className="h-10 md:h-12 w-10 md:w-12 rounded-full object-cover mb-3 shadow-lg shadow-gray-300 transition-transform duration-300 hover:scale-110" 
                />
                <h3 className="text-lg md:text-xl font-semibold text-[#68686C] mb-2">Purpose-Driven Innovation</h3>
                <p className="text-sm text-[#68686C]">
                  We work on solutions that truly matter—where technology directly improves health outcomes.
                </p>
              </div>
              
              {/* Value 2 */}
              <div className="flex flex-col items-start p-4 md:p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hidden-on-scroll fade-in-up animate-on-load" style={{ animationDelay: "0.2s" }}>
                <img 
                  src={right} 
                  alt="Agility & Curiosity" 
                  className="h-10 md:h-12 w-10 md:w-12 rounded-full object-cover mb-3 shadow-lg shadow-gray-300 transition-transform duration-300 hover:scale-110" 
                />
                <h3 className="text-lg md:text-xl font-semibold text-[#68686C] mb-2">Agility & Curiosity</h3>
                <p className="text-sm text-[#68686C]">
                  We move fast, experiment boldly, and embrace change as a pathway to growth.
                </p>
              </div>
              
              {/* Value 3 */}
              <div className="flex flex-col items-start p-4 md:p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hidden-on-scroll fade-in-up animate-on-load" style={{ animationDelay: "0.4s" }}>
                <img 
                  src={right} 
                  alt="Excellence with Empathy" 
                  className="h-10 md:h-12 w-10 md:w-12 rounded-full object-cover mb-3 shadow-lg shadow-gray-300 transition-transform duration-300 hover:scale-110" 
                />
                <h3 className="text-lg md:text-xl font-semibold text-[#68686C] mb-2">Excellence with Empathy</h3>
                <p className="text-sm text-[#68686C]">
                  We hold ourselves to the highest standards while respecting the needs of both patients and providers.
                </p>
              </div>
              
              {/* Value 4 */}
              <div className="flex flex-col items-start p-4 md:p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hidden-on-scroll fade-in-up animate-on-load" style={{ animationDelay: "0.6s" }}>
                <img 
                  src={right} 
                  alt="Integrity & Transparency" 
                  className="h-10 md:h-12 w-10 md:w-12 rounded-full object-cover mb-3 shadow-lg shadow-gray-300 transition-transform duration-300 hover:scale-110" 
                />
                <h3 className="text-lg md:text-xl font-semibold text-[#68686C] mb-2">Integrity & Transparency</h3>
                <p className="text-sm text-[#68686C]">
                  From clinical validation to data privacy, we operate with complete honesty and responsibility.
                </p>
              </div>
              
              {/* Value 5 */}
              <div className="flex flex-col items-start p-4 md:p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hidden-on-scroll fade-in-up animate-on-load" style={{ animationDelay: "0.8s" }}>
                <img 
                  src={right} 
                  alt="Diversity & Inclusion" 
                  className="h-10 md:h-12 w-10 md:w-12 rounded-full object-cover mb-3 shadow-lg shadow-gray-300 transition-transform duration-300 hover:scale-110" 
                />
                <h3 className="text-lg md:text-xl font-semibold text-[#68686C] mb-2">Diversity & Inclusion</h3>
                <p className="text-sm text-[#68686C]">
                  We welcome different perspectives and backgrounds to spark the best ideas and strongest teamwork.
                </p>
              </div>
            </div>
            <p className="text-base md:text-[28px] text-[#195769] font-semibold mt-12 md:mt-16 font-inter hidden-on-scroll fade-in-up animate-on-load">
              Whether you're a developer, a researcher, or a healthcare professional, there's a place for you on our team!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Careers;