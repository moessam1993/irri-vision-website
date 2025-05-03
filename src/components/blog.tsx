import { useState } from 'react';
import blog from "../assets/blog.png";
import loading from "../assets/loadblog.png";
import teamImage1 from "../assets/degla/1.png";
import teamImage2 from "../assets/degla/3.png";
import teamImage3 from "../assets/degla/5.png";
import teamImage4 from "../assets/degla/8.png";
import teamImage5 from "../assets/degla/10.png";
import teamImage6 from "../assets/degla/11.png";
import teamImage7 from "../assets/degla/12.png";
import teamImage8 from "../assets/degla/13.png";
import teamImage9 from "../assets/degla/14.png";
import teamImage11 from "../assets/degla/7.png";
import teamImage12 from "../assets/degla/9.png";
import teamImage13 from "../assets/degla/4.png";
import teamImage14 from "../assets/degla/6.png";

type ActiveItemType = "Company" | "First Team-Building Event";

const Blog = () => {
  const [activeItem, setActiveItem] = useState<ActiveItemType>("Company");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading completion
  setTimeout(() => setIsLoading(false), 1000);

  const teamBuildingImages = [
    teamImage1,
    teamImage2,
    teamImage3,
    teamImage4,
    teamImage5,
    teamImage6,
    teamImage7,
    teamImage8,
    teamImage9,
    teamImage11,
    teamImage12,
    teamImage13,
    teamImage14,
  ];

  const openImageModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const contentMap: Record<ActiveItemType, React.ReactNode> = {
    "Company": (
      <div className="p-4 sm:p-6 bg-white rounded-lg transition-shadow text-left">
        <h3 className="text-xl font-normal font-inter text-black mb-2">
          OQfy now is live !
        </h3>
      </div>
    ),
    "First Team-Building Event": (
      <div className="p-4 sm:p-6 bg-white rounded-lg transition-shadow text-left">
        <h3 className="text-xl sm:text-2xl font-semibold text-[#195769] mb-4">
          Building the Future Together: IRRI Vision's First Team-Building Event
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          At IRRI Vision, we believe that innovation starts with a strong, connected team. This month, we
          hosted our 
          <span className='font-semibold'> First Team-Building Event</span>
          , bringing together our talented interns and core team
          members for a day of connection, creativity, and collaboration.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our mission at IRRI Vision has always been about pushing boundaries in ophthalmology and
          healthcare technology. But behind every breakthrough, there's a team that trusts, supports, and
          inspires one another. Events like these are not just about fun — they are an investment in the
          culture that powers our vision.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Throughout the day, we engaged in dynamic activities designed to strengthen communication,
          problem-solving, and teamwork. It was incredible to see the energy, passion, and innovative
          thinking that our interns brought to every challenge. This event also offered a space for
          mentorship, open discussions, and the sharing of new ideas that will fuel our projects moving
          forward.
        </p>
        <p className="text-lg text-gray-700 mb-4 font-semibold">
          At IRRI Vision, we don't just build technologies — we build people.
        </p>
        <p className="text-lg text-gray-700">
          We are excited to continue fostering a company culture where everyone feels empowered to
          learn, grow, and make an impact. This team-building event is only the beginning. We are
          committed to creating an environment where creativity thrives, collaboration is second nature,
          and every team member plays a vital role in shaping the future of ophthalmology.
        </p>
        <p className="text-lg text-gray-700 mt-4 font-semibold">
          Stay tuned for more updates as we continue our journey!
        </p>
        
        {/* Scrollable Image Gallery */}
        <div className="mt-6 sm:mt-8">
          <h4 className="text-lg sm:text-xl font-semibold text-[#195769] mb-4">Event Gallery</h4>
          <div className="relative">
            <div className="flex space-x-3 sm:space-x-4 overflow-x-auto pb-3 sm:pb-4 scrollbar-hide">
              {teamBuildingImages.map((image, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openImageModal(image)}
                >
                  <img 
                    src={image} 
                    alt={`Team building event ${index + 1}`} 
                    className="h-48 sm:h-64 w-auto rounded-lg object-cover shadow-md hover:opacity-90 transition-opacity"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <img src={loading} alt="Loading" className="w-16 h-16 mb-4" />
          <p className="text-[#195769]">Loading blog content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-full mx-auto px-4 ml-15 mr-15 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 font-inter">
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-full max-h-full">
            <img 
              src={selectedImage} 
              alt="Full screen" 
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              onClick={closeImageModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white text-3xl sm:text-4xl hover:text-gray-300 transition-colors"
              aria-label="Close image"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="flex flex-col items-start gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
        <div className="w-full h-[2px] sm:h-[3px] bg-[#195769] rounded-xl mt-4 sm:mt-6"></div>
        <div className="flex items-center gap-3 sm:gap-4 w-full">
          <img src={blog} alt="Blog" className="w-8 h-8 sm:w-10 sm:h-10" />
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#195769]">
              News & Blog: Latest Announcements
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mt-2 sm:mt-4 text-left">
              Subscribe to get the latest updates and innovations
            </p>
          </div>
        </div>
        <div className="w-full h-[2px] sm:h-[3px] bg-[#195769] rounded-xl mt-4 sm:mt-6"></div>
      </div>

      {/* Main Content */}
      <div className="pt-6 sm:pt-8 md:pt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
          {/* Categories Section - Left Column */}
          <div className="md:col-span-1">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#195769] mb-4 sm:mb-6 pb-2 text-left">
              Feed
            </h2>
            <ul className="space-y-3 sm:space-y-4 text-left">
              <li>
                <button
                  onClick={() => setActiveItem("Company")}
                  className={`flex items-center text-base sm:text-lg transition-colors ${
                    activeItem === "Company" 
                      ? "text-[#D9A444]" 
                      : "text-gray-700 hover:text-[#195769]"
                  }`}
                >
                  {activeItem === "Company" && (
                    <img src={loading} alt="Loading" className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  )}
                  Company
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveItem("First Team-Building Event")}
                  className={`flex items-center text-base sm:text-lg transition-colors ${
                    activeItem === "First Team-Building Event" 
                      ? "text-[#D9A444]" 
                      : "text-gray-700 hover:text-[#195769]"
                  }`}
                >
                  {activeItem === "First Team-Building Event" && (
                    <img src={loading} alt="Loading" className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  )}
                  First Team-Building Event
                </button>
              </li>
            </ul>
          </div>

          {/* Latest News Section - Right Column */}
          <div className="md:col-span-3 text-left w-full"> 
            <h2 className="text-xl sm:text-2xl font-semibold text-[#195769] mb-4 sm:mb-6 pb-2">
              What's new?
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {contentMap[activeItem]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;