import { useState, useEffect } from 'react';
import { submitContactForm } from '../components/services/contact_service';
import Swal from 'sweetalert2';
import contactHero from "../assets/contactus.png";
import right from "../assets/right.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    project: '',
    specialty: '',
    specialtyOther: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const projectOptions = [
    { value: 'QUMRA', label: 'QUMRA' },
    { value: 'GENERAL', label: 'General Inquiry' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    
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

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'specialty' && value !== 'OTHER' ? { specialtyOther: '' } : {})
    }));
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phoneNumber || !formData.project || !formData.specialty) {
      Swal.fire({
        title: 'Missing Information',
        text: 'Please fill in all required fields',
        icon: 'error',
        confirmButtonColor: '#195769',
        backdrop: 'rgba(25, 87, 105, 0.15)',
        confirmButtonText: 'Got it!'
      });
      return;
    }

    if (formData.specialty === 'OTHER' && !formData.specialtyOther.trim()) {
      Swal.fire({
        title: 'Missing Information',
        text: 'Please enter your specialty',
        icon: 'error',
        confirmButtonColor: '#195769'
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      Swal.fire({
        title: 'Invalid Email',
        text: 'Please enter a valid email address',
        icon: 'error',
        confirmButtonColor: '#195769'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
      
      Swal.fire({
        title: 'Message Sent!',
        text: 'We will get back to you soon.',
        icon: 'success',
        confirmButtonColor: '#195769',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false
      });

      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        project: '',
        specialty: '',
        specialtyOther: '',
        message: '',
      });
    } catch (error) {
      Swal.fire({
        title: 'Oops...',
        text: error instanceof Error ? error.message : 'Failed to send message',
        icon: 'error',
        confirmButtonColor: '#195769',
        footer: '<a href="mailto:support@irrivision.com">Contact support directly?</a>'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-[#FFFAE7] to-white py-8 md:py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            <div className="lg:w-1/2 flex flex-col items-start w-full hidden-on-scroll slide-in-left animate-on-load">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] font-bold mb-4 text-[#195769] leading-tight">
                {isMobile ? "Let's Talk" : "Get In Touch With Our Team"}
              </h1>
              <div className="mb-4 md:mb-6 space-y-3">
                <p className="text-sm md:text-base text-gray-600">
                  Have questions about our solutions or want to schedule a demo? Our team is ready to assist you.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center w-full mt-6 lg:mt-0 hidden-on-scroll slide-in-right animate-on-load">
              <img 
                src={contactHero} 
                alt="Contact Us" 
                className="h-auto w-full max-w-[240px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[440px] transition-all duration-300 hover:scale-105" 
              />
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-8 md:py-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6 md:mb-10 hidden-on-scroll fade-in-up animate-on-load">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#195769]">
                Send Us a Message
              </h2>
              <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
                We typically respond within 24 hours
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100 hidden-on-scroll fade-in-up animate-on-load">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="name" className="block text-xs font-medium text-gray-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#195769] focus:border-transparent transition-all"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="email" className="block text-xs font-medium text-gray-700">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#195769] focus:border-transparent transition-all"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="phoneNumber" className="block text-xs font-medium text-gray-700">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#195769] focus:border-transparent transition-all"
                        placeholder="Your phone number"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="project" className="block text-xs font-medium text-gray-700">
                        Project <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="project"
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#195769] focus:border-transparent transition-all appearance-none bg-white"
                        required
                      >
                        <option value="">Select a project</option>
                        {projectOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="specialty" className="block text-xs font-medium text-gray-700">
                        Specialty <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="specialty"
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#195769] focus:border-transparent transition-all appearance-none bg-white"
                        required
                      >
                        <option value="">Select a specialty</option>
                        <option value="OPHTHALMOLOGIST">Ophthalmologist</option>
                        <option value="OTHER">Other</option>
                      </select>
                    </div>

                    {formData.specialty === 'OTHER' ? (
                      <div className="space-y-1">
                        <label htmlFor="specialtyOther" className="block text-xs font-medium text-gray-700">
                          Please specify <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="specialtyOther"
                          name="specialtyOther"
                          value={formData.specialtyOther}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#195769] focus:border-transparent transition-all"
                          placeholder="Your specialty"
                          required
                        />
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-xs font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#195769] focus:border-transparent transition-all"
                      placeholder="How can we help you? Please include any relevant details."
                    />
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-4 text-sm bg-gradient-to-r from-[#195769] to-[#1a6b7d] text-white font-medium rounded-md hover:from-[#134252] hover:to-[#155361] transition-all duration-300 ${
                        isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:shadow-md transform hover:-translate-y-0.5'
                      } flex items-center justify-center space-x-2`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white to-[#FFFAE7] py-8 md:py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 hidden-on-scroll fade-in-up animate-on-load">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#195769]">
                Why Contact Us?
              </h2>
              <p className="mt-1 text-sm text-gray-500 max-w-xl mx-auto">
                Discover how we can help transform your ophthalmology practice
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  title: "Product Demos",
                  description: "Schedule a demonstration of our solutions tailored to your needs.",
                  icon: right
                },
                {
                  title: "Technical Support",
                  description: "Get help with implementation, troubleshooting, and best practices.",
                  icon: right
                },
                {
                  title: "Partnerships",
                  description: "Explore collaboration opportunities with our research team.",
                  icon: right
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-start p-4 bg-white rounded-lg shadow-xs hover:shadow-sm transition-shadow duration-300 border border-gray-100 hidden-on-scroll fade-in-up animate-on-load"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-2 bg-[#195769]/10 rounded-full mb-3">
                    <img 
                      src={item.icon} 
                      alt={item.title} 
                      className="h-5 w-5 object-cover" 
                    />
                  </div>
                  <h3 className="text-base font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
