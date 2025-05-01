import React from 'react';
import irri from "../assets/IRRI.svg"
import hardware from "../assets/hardware.png"
import software from "../assets/software.png"
import loading from "../assets/Loading.png"
import join from "../assets/join.png"


const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">      
<main className="flex-grow">
  {/* Hero Section */}
  <section className="bg-[#F5F7FA] py-20 px-6">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Column - Title */}
      <div className="lg:w-1/2">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
      <span className="text-[#4D4D4D]">Revolutionizing Healthcare with the</span>
      <span className="text-[#195769]"> Power of AI</span>
      </h1>
      </div>

      {/* Right Column - Logo */}
      <div className="lg:w-1/2 flex justify-center">
        <img 
          src={irri} 
          alt="IRRI Logo" 
          className="h-auto w-full max-w-[400px] md:max-w-[542px]" 
        />
      </div>
    </div>

    {/* Buttons - Centered below */}
    <div className=" lg:w-1/2 flex flex-col sm:flex-row justify-center gap-18  w-full">
      <button className="flex items-center justify-center gap-2 text-white bg-[#195769] px-6 py-3 rounded-md font-semibold hover:bg-[#134252] transition-all duration-200 min-w-[180px] transform hover:scale-105 focus:outline-none">
      <img src={loading} alt="loading" className="h-5 w-5" />
      <span>Explore our products</span>
      </button>
        <button className="flex items-center justify-center gap-2 text-white bg-[#195769] px-6 py-3 rounded-md font-semibold hover:bg-[#134252] transition-all duration-200 min-w-[180px] transform hover:scale-105 focus:outline-none">
        <img src={join} alt="loading" className="h-5 w-5" />
        <span>Join the Mission</span>
      </button>
    </div>
  </section>

        {/* Who We Are Section */}
        <section className="py-30 px-6 bg-[#FFFAE7] max-w-full mx-auto">
          <h2 className="text-[64px] font-bold text-center text-[#195769] mb-6">Who are we?</h2>
          <h2 className=' text-center'>
            <span className='text-[#D9A444] font-bold text-[20px]'>IRRI Vision LLC</span>
             <span className='text-[#4D4D4D] text-[20px]'> is an Egyptian health-tech company founded in 2024 by passionate pioneers in medical innovation. 
            Our mission is to empower healthcare professionals with intelligent tools that enhance diagnostics, improve outcomes, 
            and expand access to quality care.
            </span>
          </h2>
        </section>

        {/* What We Do Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[64px] font-bold text-center text-[#195769] mb-6">What we do</h2>
            
            <div className="grid md:grid-cols-2 gap-15">
            <div className="flex flex-col items-center p-20 rounded-lg">
              <img src={hardware} alt="hardware" className="h-25 w-25 mb-4" />
              <h3 className="text-[25px] font-semibold text-[#4D4D4D] mb-4 text-center">Hardware Solutions</h3>
              <p className="text-[#68686C] text-center max-w-md text-[20px]">
                Our R&D team develops next-generation medical devices designed to integrate smoothly into clinical workflows. 
                By eliminating traditional barriers and embracing cutting-edge design, we bring powerful tools directly to the point of care.
              </p>
            </div>
              
            <div className="flex flex-col items-center p-20 rounded-lg">
              <img src={software} alt="software" className="h-25 w-25 mb-4" />
              <h3 className="text-[25px] font-semibold text-[#4D4D4D] mb-4 text-center">Software Solutions</h3>
              <p className="text-[#68686C] text-center max-w-md text-[20px]">
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