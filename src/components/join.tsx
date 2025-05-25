import { useEffect } from "react";
import linked from "../assets/injob.png";
import face from "../assets/facejob.png";
import mail from "../assets/mailjob.png";
import Swal from "sweetalert2";

const Join = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = "info@irri-vision.com";
    
    navigator.clipboard.writeText(email)
      .then(() => {
        Swal.fire({
          title: 'Email copied!',
          text: 'Feel free to send us your inquiry or CV. We look forward to hearing from you!',
          icon: 'success',
          confirmButtonColor: '#306E80',
          confirmButtonText: 'Got it!',
          timer: 6000,
          timerProgressBar: true,
          background: 'white',
          color: '#195769',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
      })
      .catch((err) => {
        console.error('Failed to copy email: ', err);
        // Fallback to mailto if clipboard failss
        window.location.href = `mailto:${email}`;
      });
  };

  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 font-inter bg-gradient-to-b from-[#FFFAE7] to-white">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center mb-12 md:mb-20 mt-30">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold font-inter text-[#195769] mb-6 text-center">
          Open Positions
        </h1>
                
        <p className="text-xl md:text-2xl text-[#4D4D4D] text-center max-w-full leading-relaxed">
          We're growing! Follow us on social media for job announcements and opportunities to join the team.
        </p>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-col items-center mt-50">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#195769] mb-8 text-center">
          Connect With Us
        </h2>
        
        <div className="flex space-x-6 md:space-x-10 mb-30">
          {/* LinkedIn */}
          <a 
            href="https://linkedin.com/company/irri-vision" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#306E80] hover:text-[#195769]  duration-300 hover:scale-110 transition-transform"
          >
            <img src={linked} alt="LinkedIn profile" className="w-30 h-29" />
          </a>
          
          {/* Facebook */}
          <a 
            href="https://www.facebook.com/irri.vision.llc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#306E80] hover:text-[#195769]  duration-300 hover:scale-110 transition-transform"
          >
            <img src={face} alt="Facebook profile" className="w-30 h-29" />
          </a>
          
          {/* Mail */}
          <a 
            href="mailto:info@irri-vision.com" 
            onClick={handleEmailClick}
            className="text-[#306E80] hover:text-[#195769] duration-300 hover:scale-110 transition-transform cursor-pointer"
          >
            <img src={mail} alt="Email contact" className="w-30 h-29" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Join;