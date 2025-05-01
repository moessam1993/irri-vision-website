import React from 'react';
import cult from "../assets/cult.png"
import join from "../assets/join-us.png"
import now from "../assets/join.png"
import impact from "../assets/impact.png"
import work from "../assets/work.png"
import culture from "../assets/culture_.png"

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">      
<main className="flex-grow">
{/* Hero Section */}
<section className="bg-[#FFFAE7] py-20 px-6">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
    <div className="lg:w-1/2 flex flex-col items-start"> 
      <h1 className="text-4xl md:text-6xl font-bold mb-8"> 
        <span className="text-[#195769] text-[75px]">Why Join Us ?</span>
      </h1>
      <h2 className='text-left mb-8'>
        <span className='text-[#4D4D4D]'>Joining IRRI Vision means becoming part of a mission-driven team working on some of the most meaningful challenges in global health. You won't just be building products, you'll be helping prevent blindness, expand access to care, and shape the future of medical AI.</span> <br/>
        <span className='text-[#4D4D4D] font-semibold'> Whether you're a developer, a researcher, or a healthcare professional, there's a place for you on our team.
        </span>
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
        src={join} 
        alt="IRRI Logo" 
        className="h-auto w-full max-w-[400px] md:max-w-[542px]" 
      />
    </div>
  </div>
</section>

<section className="w-full py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Title Section */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#195769]">
        What you will learn
      </h2>
    </div>

    {/* Image Grid Section */}
    <div className="w-full">
      {/* Responsive grid - 2 columns on desktop, 1 on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image 1 - Culture */}
        <div className="flex justify-center">
          <img 
            src={culture} 
            alt="Company Culture" 
            className="w-full max-w-[500px] h-auto object-contain"
          />
        </div>
        
        {/* Image 2 - Impact */}
        <div className="flex justify-center">
          <img 
            src={impact} 
            alt="Company Impact" 
            className="w-full max-w-[500px] h-auto object-contain"
          />
        </div>
        
        {/* Image 3 - Work */}
        <div className="flex justify-center md:col-span-2"> {/* This will span full width on desktop */}
          <img 
            src={work} 
            alt="Work Environment" 
            className="w-full max-w-[500px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</section>
        {/* What We Do Section */}
        <section className="bg-[#FFFAE7] py-20 px-6">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
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
        src={cult} 
        alt="IRRI Logo" 
        className="h-auto w-full max-w-[400px] md:max-w-[542px]" 
      />
    </div>
  </div>
</section>
      </main>
    </div>
  );
};

export default Careers;