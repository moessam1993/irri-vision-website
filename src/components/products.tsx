import underline from "../assets/underline.png"
import oqfy from "../assets/oqfy.png"
import button from "../assets/button.png"
import nonai from "../assets/nonia.png"
import qumra from "../assets/qumra.png"

const Products = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 py-12 font-inter">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center mb-24"> {/* Increased mb-16 to mb-24 */}
        <h1 className="text-4xl font-bold text-[#195769] mb-12 mt-10 text-center">
          Products & Solutions
        </h1>
        <img src={underline} alt="Underline decoration" className="h-10 w-60" />
      </div>

      {/* OQfy Product */}
      <div className="mb-40 mx-6 md:mx-12 lg:mx-24 xl:mx-32"> {/* Increased mb-16 to mb-32 */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Text Content */}
          <div className="flex-1">
            <div className="mb-4">
              <h2 className="text-[20px] font-semibold text-black font-serif">OQfy – Intelligent EMR for Ophthalmology</h2>
              <div className="border-b border-2 rounded-xl border-[#195769] w-[300px] mt-2"></div>
            </div>
            <p className="text-[15px] font-inter text-[#4D4D4D] mb-4">
              "OQfy is a modern, ophthalmologist-centric electronic medical record (EMR) system. It helps clinicians manage appointments, document visits, schedule surgeries, and generate invoices, all while tracking essential performance metrics. Whether for solo clinics or large hospitals, OQfy offers a beautifully intuitive and friendly interface."
            </p>
            <div className="mt-2">
              <img src={button} alt="Learn more button" className="h-[60px] w-auto object-cover" /> 
            </div>
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img src={oqfy} alt="OQfy product image" className="h-80 w-auto object-cover" />
          </div>
        </div>
      </div>

      {/* NON-AI Product - Reversed Layout */}
      <div className="mb-40 mx-6 md:mx-12 lg:mx-24 xl:mx-32"> {/* Increased mb-16 to mb-32 */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image */}
          <div className="flex-1 flex justify-center md:justify-start">
            <img src={nonai} alt="NON-AI product image" className="h-80 w-auto object-cover" />
          </div>
          {/* Text Content - Right-aligned */}
          <div className="flex-1 flex flex-col items-end text-right">
            <div className="mb-4">
              <h2 className="text-[20px] font-semibold text-black font-serif">NON-AI – Neural Ocular Network-AI</h2>
              <div className="border-b border-2 rounded-xl border-[#195769] w-[300px] mt-2 ml-auto"></div>
            </div>
            <p className="text-[15px] font-inter text-[#4D4D4D] mb-4">
              NON-AI is an advanced diagnostic platform that uses AI to detect ophthalmic conditions from medical imaging with exceptional speed and accuracy. Currently focused on Retinopathy of Prematurity (ROP), NON-AI can diagnose a case in under 2 seconds, identifying zones and stages with clinical-grade precision. It bridges the critical gap between neonatal care centers and the global shortage of ROP experts, making early detection and intervention possible—especially in underserved areas. NON-AI is not just a tool—it's a continuously evolving AI ecosystem designed to one day detect all major ophthalmic diseases.
            </p>
            <div className="mt-2">
              <img src={button} alt="Learn more button" className="h-[60px] w-auto object-cover ml-auto" /> 
            </div>
          </div>
        </div>
      </div>

      {/* QUMRA Product */}
      <div className="mb-40 mx-6 md:mx-12 lg:mx-24 xl:mx-32"> {/* Increased mb-16 to mb-32 */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Text Content */}
          <div className="flex-1">
            <div className="mb-4">
              <h2 className="text-[20px] font-semibold text-black font-serif">Qumra – The Future of Tele-Ophthalmology</h2>
              <div className="border-b border-2 rounded-xl border-[#195769] w-[300px] mt-2"></div>
            </div>
            <p className="text-[15px] font-inter text-[#4D4D4D] mb-4">
              Qumra is our breakthrough Remote Immersive Binocular Ophthalmoscope (RIBO) System, enabling eye exams without physical proximity. Patients wear a lightweight, VR-like headset with embedded motorized lenses and cameras, while physicians can examine the full eye—live and remotely—through a standard VR viewer or external monitor. Qumra makes telemedicine tangible, scalable, and immersive—perfect for clinics, hospitals, bedridden patients, or even home use.
            </p>
            <div className="mt-2">
              <img src={button} alt="Learn more button" className="h-[60px] w-auto object-cover" /> 
            </div>
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img src={qumra} alt="Qumra product image" className="h-80 w-auto object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;