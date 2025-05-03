import { useState, useEffect } from 'react';
import { submitContactForm } from '../components/services/contact_service';
import Swal from 'sweetalert2';
import contactHero from "../assets/contactus.png";
import right from "../assets/right.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactType: 'inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactTypeChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      contactType: type,
      message: type === 'demo' ? 'I would like to schedule an OQFY demo.' : prev.message
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      Swal.fire({
        title: 'Missing Information',
        text: 'Please fill in all required fields',
        icon: 'error',
        confirmButtonColor: '#195769',
        backdrop: `
          rgba(25, 87, 105, 0.1)
          url("/images/nyan-cat.gif")
          center top
          no-repeat
        `,
        confirmButtonText: 'Got it!'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const submissionData = {
        ...formData,
        message: `[${formData.contactType.toUpperCase()}] ${formData.message}`
      };

      await submitContactForm(submissionData);
      
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
        contactType: 'inquiry',
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
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#FFFAE7] to-white py-12 md:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="lg:w-1/2 flex flex-col items-start w-full hidden-on-scroll slide-in-left animate-on-load">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 text-[#195769] leading-tight">
                {isMobile ? "Let's Talk" : "Get In Touch With Our Team"}
              </h1>
              <div className="mb-6 md:mb-8 space-y-4">
                <p className="text-base md:text-lg text-gray-600">
                  Have questions about our solutions or want to schedule a demo? Our team is ready to assist you.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center w-full mt-8 lg:mt-0 hidden-on-scroll slide-in-right animate-on-load">
              <img 
                src={contactHero} 
                alt="Contact Us" 
                className="h-auto w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] transition-all duration-300 hover:scale-105" 
              />
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full py-12 md:py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12 hidden-on-scroll fade-in-up animate-on-load">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#195769]">
                Send Us a Message
              </h2>
              <p className="mt-2 text-gray-500 max-w-lg mx-auto">
                We typically respond within 24 hours
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100 hidden-on-scroll fade-in-up animate-on-load">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#195769] focus:border-transparent transition-all"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#195769] focus:border-transparent transition-all"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Contact Type <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => handleContactTypeChange('inquiry')}
                        className={`p-4 border rounded-lg transition-all duration-200 ${formData.contactType === 'inquiry' 
                          ? 'border-[#195769] bg-[#195769]/10 ring-2 ring-[#195769]/30' 
                          : 'border-gray-300 hover:border-gray-400'}`}
                      >
                        <div className="flex items-center space-x-2">
                          <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${formData.contactType === 'inquiry' ? 'border-[#195769] bg-[#195769]' : 'border-gray-400'}`}>
                            {formData.contactType === 'inquiry' && (
                              <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <span className="text-gray-700">General Inquiry</span>
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleContactTypeChange('demo')}
                        className={`p-4 border rounded-lg transition-all duration-200 ${formData.contactType === 'demo' 
                          ? 'border-[#195769] bg-[#195769]/10 ring-2 ring-[#195769]/30' 
                          : 'border-gray-300 hover:border-gray-400'}`}
                      >
                        <div className="flex items-center space-x-2">
                          <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${formData.contactType === 'demo' ? 'border-[#195769] bg-[#195769]' : 'border-gray-400'}`}>
                            {formData.contactType === 'demo' && (
                              <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <span className="text-gray-700">OQFY Demo</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message {formData.contactType === 'demo' ? '(Optional)' : <span className="text-red-500">*</span>}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#195769] focus:border-transparent transition-all"
                      placeholder={
                        formData.contactType === 'demo' 
                          ? 'Tell us about your organization and preferred demo time (optional)' 
                          : 'How can we help you? Please include any relevant details.'
                      }
                      required={formData.contactType !== 'demo'}
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 px-6 bg-gradient-to-r from-[#195769] to-[#1a6b7d] text-white font-medium rounded-lg hover:from-[#134252] hover:to-[#155361] transition-all duration-300 ${
                        isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:shadow-lg transform hover:-translate-y-0.5'
                      } flex items-center justify-center space-x-2`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

        {/* Additional Info Section */}
        <section className="bg-gradient-to-b from-white to-[#FFFAE7] py-12 md:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 hidden-on-scroll fade-in-up animate-on-load">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#195769]">
                Why Contact Us?
              </h2>
              <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
                Discover how we can help transform your ophthalmology practice
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                  className="flex flex-col items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 hidden-on-scroll fade-in-up animate-on-load"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 bg-[#195769]/10 rounded-full mb-4">
                    <img 
                      src={item.icon} 
                      alt={item.title} 
                      className="h-6 w-6 object-cover" 
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
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