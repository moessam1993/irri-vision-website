import { useState, useEffect, useRef } from 'react';
import blog from "../assets/blog.png";
import edafaAcquisition from "../assets/Edafa Acquistion.png";
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

type ActiveItemType = "Company" | "First Team-Building Event" | "Edafa VC Partnership";

interface CirclePosition {
  x: number;
  y: number;
  xSpeed: number;
  ySpeed: number;
  size: number;
}

const Blog = () => {
  const [activeItem, setActiveItem] = useState<ActiveItemType>("Edafa VC Partnership");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isTitleAnimating, setIsTitleAnimating] = useState(false);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const animationRef = useRef<number | null>(null);
  const circlePositions = useRef<CirclePosition[]>([
    { x: 10, y: 20, xSpeed: 0.2, ySpeed: 0.15, size: 64 },
    { x: 80, y: 70, xSpeed: -0.25, ySpeed: 0.1, size: 96 },
    { x: 40, y: 50, xSpeed: 0.15, ySpeed: -0.2, size: 80 }
  ]);

  // Scroll to top when component mounts or activeItem changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [activeItem]);

  useEffect(() => {
    if (isTitleAnimating) {
      const fullTitle = "News & Blog: Latest Updates";
      let currentIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (currentIndex <= fullTitle.length) {
          setDisplayedTitle(fullTitle.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTitleAnimating(false);
        }
      }, 100); 

      return () => clearInterval(typeInterval);
    }
  }, [isTitleAnimating]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsTitleAnimating(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const animate = () => {
      circlePositions.current = circlePositions.current.map(circle => {
        let newX = circle.x + circle.xSpeed;
        let newY = circle.y + circle.ySpeed;
        
        if (newX < 0 || newX > 100) {
          newX = Math.max(0, Math.min(100, newX));
          return { ...circle, x: newX, xSpeed: -circle.xSpeed };
        }
        if (newY < 0 || newY > 100) {
          newY = Math.max(0, Math.min(100, newY));
          return { ...circle, y: newY, ySpeed: -circle.ySpeed };
        }
        
        return { ...circle, x: newX, y: newY };
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const handleTitleClick = () => {
    setIsTitleAnimating(true);
    setDisplayedTitle("");
  };

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
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const contentMap: Record<ActiveItemType, React.ReactNode> = {
    "Edafa VC Partnership": (
      <div className="px-4 py-3 sm:px-5 sm:py-4 bg-white/90 backdrop-blur-sm rounded-lg text-left shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
        <h3 className="text-lg sm:text-xl font-semibold text-[#195769] mb-3 animate-fade-in">
          IRRI Vision Joins Edafa Venture Capital Portfolio
        </h3>
        <div className="mb-6 overflow-hidden rounded-lg shadow-md group cursor-pointer" onClick={() => openImageModal(edafaAcquisition)}>
          <img 
            src={edafaAcquisition} 
            alt="Edafa Venture Capital Partnership" 
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <p className="text-base text-gray-700 mb-4 font-semibold italic">
          A proud moment for the IRRI Vision team.
        </p>
        <p className="text-base text-gray-700 mb-3">
          We are excited to announce that IRRI Vision has joined the 
          <span className="font-semibold"> Edafa Venture Capital portfolio</span>, 
          marking a significant milestone in our journey to build the future of AI-driven ophthalmology and digital healthcare.
        </p>
        <p className="text-base text-gray-700 mb-3">
          We are deeply grateful to Edafa VC for their confidence, partnership, and commitment to supporting innovative Egyptian startups with global potential.
        </p>
        <p className="text-base text-gray-700 mb-3">
          Special thanks to <span className="font-semibold">AI Everything MEA Egypt</span> for providing the platform that made this connection possible and for fostering meaningful opportunities between startups and investors.
        </p>
        <p className="text-base text-gray-700 mb-4">
          The journey continues, and we are more excited than ever for what lies ahead.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {["#IRRIVision", "#EdafaVC", "#HealthTech", "#AI", "#AIEverythingMEAEgypt", "#StartupEcosystem", "#Innovation"].map(tag => (
            <span key={tag} className="text-sm font-medium text-[#195769] bg-[#195769]/10 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
    "Company": (
      <div className="px-4 py-3 sm:px-5 sm:py-4 bg-white/90 backdrop-blur-sm rounded-lg text-left shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-pulse">
        <h3 className="text-lg font-normal font-inter text-black mb-1">
          IRRI Vision platform updates are now live.
        </h3>
      </div>
    ),
    "First Team-Building Event": (
      <div className="px-4 py-3 sm:px-5 sm:py-4 bg-white/90 backdrop-blur-sm rounded-lg text-left shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
        <h3 className="text-lg sm:text-xl font-semibold text-[#195769] mb-3 animate-fade-in">
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
        <div className="mt-4 sm:mt-5 px-2 animate-fade-in">
          <h4 className="text-base sm:text-lg font-semibold text-[#195769] mb-3 animate-bounce">
            Event Gallery
          </h4>
          <div className="relative px-2">
            <div className="flex space-x-2 sm:space-x-3 overflow-x-auto pb-2 sm:pb-3 scrollbar-hide px-2">
              {teamBuildingImages.map((image, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 cursor-pointer px-1 group relative"
                  onClick={() => openImageModal(image)}
                  onMouseEnter={() => setHoveredItem(`image-${index}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="relative overflow-hidden rounded-md transition-all duration-500 transform group-hover:scale-110 group-hover:z-10 animate-float">
                    <img 
                      src={image} 
                      alt={`Team building event ${index + 1}`} 
                      className="h-40 sm:h-52 w-auto object-cover shadow-sm transition-all duration-500 group-hover:brightness-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3">
                      <span className="text-white text-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        Click to enlarge
                      </span>
                    </div>
                    <div className={`absolute inset-0 border-2 border-transparent group-hover:border-[#D9A444] transition-all duration-300 ${hoveredItem === `image-${index}` ? 'scale-105' : ''}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] relative overflow-hidden font-inter">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#195769] border-opacity-75"></div>
        </div>
      ) : (
        <>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden bg-gradient-to-br from-[#195769]/5 to-[#D9A444]/5">
            {circlePositions.current.map((circle, index) => (
              <div 
                key={index}
                className={`absolute rounded-full blur-xl opacity-20 ${
                  index % 2 === 0 ? 'bg-[#D9A444]' : 'bg-[#195769]'
                }`}
                style={{
                  width: `${circle.size}px`,
                  height: `${circle.size}px`,
                  top: `${circle.y}%`,
                  left: `${circle.x}%`,
                  transform: 'translate(-50%, -50%)',
                  animation: `float 8s ease-in-out infinite ${index * 2}s`
                }}
              />
            ))}
          </div>

          {selectedImage && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 px-6 backdrop-blur-sm animate-fade-in"
              onClick={closeImageModal}
            >
              <div className="relative max-w-full max-h-full px-4 animate-scale-in">
                <img 
                  src={selectedImage} 
                  alt="Full screen" 
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
                />
                <button
                  onClick={closeImageModal}
                  className="absolute top-4 right-6 text-white text-3xl hover:text-[#D9A444] transition-all duration-300 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:rotate-90 hover:scale-110"
                  aria-label="Close image"
                >
                  &times;
                </button>
              </div>
            </div>
          )}

          <div className="relative z-10 max-w-full mx-auto px-6 sm:px-8 py-6 sm:py-8 md:py-10">
            <div className="flex flex-col items-start gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 md:mb-10 px-2">
              <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#195769] to-transparent rounded-lg mt-3 sm:mt-4 animate-width-grow"></div>
              <div className="flex items-center gap-2 sm:gap-3 w-full px-2 animate-fade-in-up">
                <div className="p-2 bg-white/80 rounded-lg shadow-sm transition-all duration-500 hover:rotate-6 hover:scale-110 animate-wiggle">
                  <img src={blog} alt="Blog" className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="flex-1">
                  <h1 
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-[#195769] drop-shadow-sm cursor-pointer"
                    onClick={handleTitleClick}
                  >
                    {displayedTitle}
                    <span className="inline-block w-1 h-6 sm:h-8 bg-[#D9A444] ml-1 animate-blink"></span>
                  </h1>
                  <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2 text-left animate-pulse">
                    Subscribe to get the latest updates and innovations
                  </p>
                </div>
              </div>
              <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#195769] to-transparent rounded-lg mt-3 sm:mt-4 animate-width-grow"></div>
            </div>

            <div className="pt-4 sm:pt-5 md:pt-6 px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="md:col-span-1 px-2 animate-fade-in-left">
                  <h2 className="text-lg sm:text-xl font-semibold text-[#195769] mb-3 sm:mb-4 pb-1 text-left">
                    Feed
                  </h2>
                  <ul className="space-y-2 sm:space-y-3 text-left px-2">
                    {["Edafa VC Partnership", "Company", "First Team-Building Event"].map((item) => (
                      <li key={item}>
                        <button
                          onClick={() => setActiveItem(item as ActiveItemType)}
                          className={`flex items-center w-full text-left text-sm cursor-pointer sm:text-base px-3 py-2 rounded-lg transition-all duration-300 ${
                            activeItem === item
                              ? "text-[#D9A444] bg-white/80 shadow-md font-medium animate-pulse"
                              : "text-gray-700 hover:text-[#195769] hover:bg-white/50"
                          }`}
                        >
                          {activeItem === item && (
                            <span className="w-2 h-2 sm:w-3 sm:h-3 mr-2 rounded-full bg-[#D9A444] animate-pulse"></span>
                          )}
                          {item}
                          {activeItem === item && (
                            <span className="ml-auto text-[#195769] animate-bounce">→</span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-3 text-left w-full px-2 animate-fade-in-right"> 
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
        </>
      )}
    </div>
  );
};

export default Blog;
