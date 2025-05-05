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
      <div className="px-4 py-3 sm:px-5 sm:py-4 bg-white rounded-md transition-shadow text-left">
        <h3 className="text-lg font-normal font-inter text-black mb-1">
          OQfy now is live !
        </h3>
      </div>
    ),
    "First Team-Building Event": (
      <div className="px-4 py-3 sm:px-5 sm:py-4 bg-white rounded-md transition-shadow text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-[#195769] mb-3">
          Building the Future Together: IRRI Vision's First Team-Building Event
        </h3>
        <p className="text-base text-gray-700 mb-3">
          At IRRI Vision, we believe that innovation starts with a strong, connected team. This month, we
          hosted our 
          <span className='font-semibold'> First Team-Building Event</span>
          , bringing together our talented interns and core team
          members for a day of connection, creativity, and collaboration.
        </p>
        <p className="text-base text-gray-700 mb-3">
          Our mission at IRRI Vision has always been about pushing boundaries in ophthalmology and
          healthcare technology. But behind every breakthrough, there's a team that trusts, supports, and
          inspires one another. Events like these are not just about fun — they are an investment in the
          culture that powers our vision.
        </p>
        <p className="text-base text-gray-700 mb-3">
          Throughout the day, we engaged in dynamic activities designed to strengthen communication,
          problem-solving, and teamwork. It was incredible to see the energy, passion, and innovative
          thinking that our interns brought to every challenge. This event also offered a space for
          mentorship, open discussions, and the sharing of new ideas that will fuel our projects moving
          forward.
        </p>
        <p className="text-base text-gray-700 mb-3 font-semibold">
          At IRRI Vision, we don't just build technologies — we build people.
        </p>
        <p className="text-base text-gray-700">
          We are excited to continue fostering a company culture where everyone feels empowered to
          learn, grow, and make an impact. This team-building event is only the beginning. We are
          committed to creating an environment where creativity thrives, collaboration is second nature,
          and every team member plays a vital role in shaping the future of ophthalmology.
        </p>
        <p className="text-base text-gray-700 mt-3 font-semibold">
          Stay tuned for more updates as we continue our journey!
        </p>
        
        {/* Scrollable Image Gallery */}
        <div className="mt-4 sm:mt-5 px-2">
          <h4 className="text-base sm:text-lg font-semibold text-[#195769] mb-3">Event Gallery</h4>
          <div className="relative px-2">
            <div className="flex space-x-2 sm:space-x-3 overflow-x-auto pb-2 sm:pb-3 scrollbar-hide px-2">
              {teamBuildingImages.map((image, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 cursor-pointer transition-transform hover:scale-105 px-1"
                  onClick={() => openImageModal(image)}
                >
                  <img 
                    src={image} 
                    alt={`Team building event ${index + 1}`} 
                    className="h-40 sm:h-52 w-auto rounded-md object-cover shadow-sm hover:opacity-90 transition-opacity"
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
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="animate-pulse flex flex-col items-center px-4">
          <img src={loading} alt="Loading" className="w-12 h-12 mb-3" />
          <p className="text-[#195769] text-sm">Loading blog content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-full mx-auto px-6 sm:px-8 py-6 sm:py-8 md:py-10 font-inter">
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 px-6"
          onClick={closeImageModal}
        >
          <div className="relative max-w-full max-h-full px-4">
            <img 
              src={selectedImage} 
              alt="Full screen" 
              className="max-w-full max-h-[85vh] object-contain"
            />
            <button
              onClick={closeImageModal}
              className="absolute top-2 right-4 sm:top-3 sm:right-5 text-white text-2xl sm:text-3xl hover:text-gray-300 transition-colors"
              aria-label="Close image"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="flex flex-col items-start gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 md:mb-10 px-2">
        <div className="w-full h-[1px] sm:h-[2px] bg-[#195769] rounded-lg mt-3 sm:mt-4"></div>
        <div className="flex items-center gap-2 sm:gap-3 w-full px-2">
          <img src={blog} alt="Blog" className="w-6 h-6 sm:w-8 sm:h-8" />
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#195769]">
              News & Blog: Latest Announcements
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2 text-left">
              Subscribe to get the latest updates and innovations
            </p>
          </div>
        </div>
        <div className="w-full h-[1px] sm:h-[2px] bg-[#195769] rounded-lg mt-3 sm:mt-4"></div>
      </div>

      {/* Main Content */}
      <div className="pt-4 sm:pt-5 md:pt-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4">
          {/* Categories Section - Left Column */}
          <div className="md:col-span-1 px-2">
            <h2 className="text-lg sm:text-xl font-semibold text-[#195769] mb-3 sm:mb-4 pb-1 text-left">
              Feed
            </h2>
            <ul className="space-y-2 sm:space-y-3 text-left px-2">
              <li>
                <button
                  onClick={() => setActiveItem("Company")}
                  className={`flex items-center text-sm sm:text-base transition-colors px-2 ${
                    activeItem === "Company" 
                      ? "text-[#D9A444]" 
                      : "text-gray-700 hover:text-[#195769]"
                  }`}
                >
                  {activeItem === "Company" && (
                    <img src={loading} alt="Loading" className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                  )}
                  Company
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveItem("First Team-Building Event")}
                  className={`flex items-center text-sm sm:text-base transition-colors px-2 ${
                    activeItem === "First Team-Building Event" 
                      ? "text-[#D9A444]" 
                      : "text-gray-700 hover:text-[#195769]"
                  }`}
                >
                  {activeItem === "First Team-Building Event" && (
                    <img src={loading} alt="Loading" className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                  )}
                  First Team-Building Event
                </button>
              </li>
            </ul>
          </div>

          {/* Latest News Section - Right Column */}
          <div className="md:col-span-3 text-left w-full px-2"> 
            <h2 className="text-lg sm:text-xl font-semibold text-[#195769] mb-3 sm:mb-4 pb-1">
              What's new?
            </h2>
            <div className="space-y-4 sm:space-y-5">
              {contentMap[activeItem]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;