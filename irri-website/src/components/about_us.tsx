import irri from "../assets/IRRI.svg";
import underline from "../assets/underline.png";
import vision from "../assets/vision.png";
import mission from "../assets/mission.png";
import founders from "../assets/founders.png";
import ahmedFayez from "../assets/ahmed-fayez.png";
import mohamedEssam from "../assets/mohamed-essam.png";
import abdulrahmanAref from "../assets/aref.png";
import mohamedMostafa from "../assets/mohamed-mostafa.png";
import contact from "../assets/contact.png"

const AboutUs = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 py-12 font-inter">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center mb-16">
        <img src={irri} alt="IRRI Logo" className="h-45 w-45 mb-4" />
        <h1 className="text-[65px] font-semibold text-[#195769] mb-4">IRRI Vision</h1>
        <img src={underline} alt="Underline decoration" className="h-10 w-60" />
        
        {/* Vision Section */}
        <div className="mt-10 mb-12 mx-8 md:mx-16 lg:mx-24 xl:mx-32">
          <div className="flex items-start mb-6"> 
            <img src={vision} alt="Vision icon" className="h-20 w-20 mr-4" /> 
            <div className="flex-1">
              <h2 className="text-[28px] font-semibold text-[#4D4D4D] mb-4">Company's Vision</h2>
              <p className="text-[#68686C] text-[25px] text-left ml-0 pl-0">
                "For more information on the Company's main business and products and design, you may
                be a good thing to offer when needed in relation."
              </p>
            </div>
          </div>
        </div>
        
        {/* Mission Section */}
        <div className="mt-10 mb-16 mx-8 md:mx-16 lg:mx-24 xl:mx-32">
          <div className="flex items-start mb-6">
            <img src={mission} alt="Mission icon" className="h-20 w-20 mr-4" />
            <div className="flex-1">
              <h2 className="text-[28px] font-semibold text-[#4D4D4D] mb-4">Company's Mission</h2>
              <p className="text-[#68686C] text-[25px] text-left italic ml-0 pl-0">
                "To lead the transformation of healthcare through intelligent, accessible, and innovative technology—improving lives globally through data-driven precision medicine."
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Founders Section */}
      <div className="flex flex-col items-center justify-center mb-16">
        <img src={founders} alt="Founders icon" className="h-45 w-45 mb-4" />
        <h2 className="text-[65px] font-semibold text-[#306E80] text-center mb-8">Founders</h2>
        
        {/* 2×2 Grid Container */}
        <div className="grid grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Row 1 */}
          <div className="flex flex-col items-center p-6">
            <img src={ahmedFayez} alt="Ahmed Fayez" className="h-60 w-60 rounded-full object-cover mb-4 shadow-2xl shadow-gray-400" />
            <h3 className="text-[28px] font-semibold text-[#68686C] text-center">Ahmed Fayez</h3>
            <p className="text-[#68686C] text-[20px] text-center">Co-founder & CEO</p>
          </div>
          
          <div className="flex flex-col items-center p-6">
            <img src={mohamedEssam} alt="Mohamed Essam" className="h-60 w-60 rounded-full object-cover mb-4 shadow-2xl shadow-gray-400" />
            <h3 className="text-[28px] font-semibold text-[#68686C] text-center">Mohamed Essam</h3>
            <p className="text-[#68686C] text-[20px] text-center">Co-founder & COO</p>
          </div>
          
          {/* Row 2 */}
          <div className="flex flex-col items-center p-6">
            <img src={abdulrahmanAref} alt="Abdulrahman Aref" className="h-60 w-60 rounded-full object-cover mb-4 shadow-2xl shadow-gray-400" />
            <h3 className="text-[28px] font-semibold text-[#68686C] text-center">Abdulrahman Aref</h3>
            <p className="text-[#68686C] text-[20px] text-center">Co-founder & Head of R&D</p>
          </div>
          
          <div className="flex flex-col items-center p-6">
            <img src={mohamedMostafa} alt="Mohamed Mostafa" className="h-60 w-60 rounded-full object-cover mb-4 shadow-2xl shadow-gray-400" />
            <h3 className="text-[28px] font-semibold text-[#68686C] text-center">Mohamed Mostafa</h3>
            <p className="text-[#68686C] text-[20px] text-center">Co-founder & CTO</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-center justify-center mb-16">
        <img src={contact} alt="Founders icon" className="h-45 w-45 mb-4" />
        <h2 className="text-[65px] font-semibold text-[#306E80] text-center mb-8">Contact us!</h2>
        <div className="py-8 px-4">
  <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-start gap-8 sm:gap-60">
    {/* Address */}
    <div className="flex flex-col items-center text-center">
      <div className="h-15 w-15 mb-5">
        <svg className="h-full w-full text-[#68686C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <p className="text-[#4D4D4D] text-[20px] text-nowrap">
        76 Ibn Sender St. – Zaitoon<br />
        Cairo – Egypt
      </p>
    </div>

    {/* Email */}
    <div className="flex flex-col items-center text-center">
      <div className="h-15 w-15 mb-5">
        <svg className="h-full w-full text-[#68686C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <p className="text-[#4D4D4D] text-[20px] text-nowrap">info@irri-vision.com</p>
    </div>

    {/* Phone Numbers */}
    <div className="flex flex-col items-center text-center">
      <div className="h-15 w-15 mb-2">
        <svg className="h-full w-full text-[#68686C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </div>
      <p className="text-[#4D4D4D] text-[20px] text-nowrap">
        +201553011938<br />
        0226038191
      </p>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default AboutUs;