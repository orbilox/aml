"use client";
import { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "Etereo 1, Goa",
    category: "3D Walkthrough",
    image: "/images/portfolio/1.png",
    description: "A stunning 3D walkthrough video showcasing the luxury villas and amenities of Etereo 1 in Goa.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isExternal: false,
  },
  {
    id: 2,
    title: "Shree Radha Gopal Residency",
    category: "VR Experience",
    image: "/images/portfolio/2.png",
    description: "An immersive VR experience of the Shree Radha Gopal Residency, allowing buyers to explore the property virtually.",
    videoUrl: "https://amlabs.cloud/Shree_Radha_Gopal/",
    isExternal: true,
  },
  {
    id: 3,
    title: "Province D Olympia, Noida",
    category: "Location AV",
    image: "/images/portfolio/3.png",
    description: "A compelling location AV video highlighting the strategic location and connectivity of Province D Olympia in Noida.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isExternal: false,
  },
  {
    id: 4,
    title: "Multiple Projects",
    category: "3D Rendering",
    image: "/images/portfolio/4.png",
    description: "A showcase of high-quality 3D renderings across multiple real estate projects, demonstrating our rendering expertise.",
    hasSlider: true,
    sliderImages: [
      { url: "/images/portfolio/5.png", title: "Project Render 1", description: "High-quality 3D render showcasing architectural details" },
      { url: "/images/portfolio/6.png", title: "Project Render 2", description: "Photorealistic exterior rendering with landscape" },
      { url: "/images/portfolio/7.png", title: "Project Render 3", description: "Interior rendering highlighting premium finishes" },
      { url: "/images/portfolio/8.png", title: "Project Render 4", description: "Aerial perspective render of the development" },
      { url: "/images/portfolio/9.png", title: "Project Render 5", description: "Night-time render showcasing lighting design" },
    ],
  },
  {
    id: 5,
    title: "Pyramid Alban, Gurugram",
    category: "Construction Updates",
    image: "/images/portfolio/10.png",
    description: "Regular construction update videos for Pyramid Alban in Gurugram, keeping investors informed about project progress.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isExternal: false,
  },
  {
    id: 6,
    title: "Yuu by Nahar, Mumbai",
    category: "Interactive 3D",
    image: "/images/portfolio/13.png",
    description: "An interactive 3D tool for Yuu by Nahar in Mumbai, allowing prospects to explore floor plans and configurations.",
    videoUrl: "https://amlabs.cloud/Nahar_VR/",
    isExternal: true,
  },
  {
    id: 7,
    title: "Hero Homes-The Palatial, Gurugram",
    category: "Route Videos",
    image: "/images/portfolio/14.png",
    description: "A dynamic route video showcasing the connectivity and accessibility of Hero Homes-The Palatial in Gurugram.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isExternal: false,
  },
  {
    id: 8,
    title: "Etereo 1, Goa",
    category: "3D Isometrics",
    image: "/images/portfolio/15.jpg",
    description: "Beautiful 3D isometric views of Etereo 1 in Goa, showcasing the layout and design from unique perspectives.",
    hasGallery: true,
    galleryImages: [
      { url: "/images/portfolio/16.jpeg", title: "Isometric View 1", description: "Top-down isometric perspective of the villa layout" },
      { url: "/images/portfolio/17.jpg", title: "Isometric View 2", description: "Side isometric view highlighting the building profile" },
      { url: "/images/portfolio/18.jpg", title: "Isometric View 3", description: "Detailed isometric view of amenities and landscaping" },
    ],
  },
  {
    id: 9,
    title: "Hero Homes, Ludhiana",
    category: "Interior Cinematic Walkthrough",
    image: "/images/portfolio/19.jpg",
    description: "A cinematic interior walkthrough of Hero Homes in Ludhiana, showcasing premium interiors and lifestyle.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isExternal: false,
  },
  {
    id: 11,
    title: "House of Hiranandani, Mumbai",
    category: "VR Experience",
    image: "/images/portfolio/23.png",
    description: "An immersive VR experience for House of Hiranandani in Mumbai, allowing buyers to virtually tour the property.",
    videoUrl: "https://amlabs.cloud/HOH-V2/",
    isExternal: true,
  },
  {
    id: 12,
    title: "Province D Olympia, Noida",
    category: "VR Experience",
    image: "/images/portfolio/24.png",
    description: "A comprehensive VR experience for Province D Olympia in Noida, providing an immersive property tour.",
    videoUrl: "https://amlabs.cloud/ATS_PDO/",
    isExternal: true,
  },
  {
    id: 14,
    title: "Altura DXP 92, Gurugram",
    category: "Location AV",
    image: "/images/portfolio/26.png",
    description: "A professional location AV for Altura DXP 92 in Gurugram, highlighting its prime location and surroundings.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isExternal: false,
  },
  {
    id: 15,
    title: "Shree Radha Gopal Residency",
    category: "Location AV",
    image: "/images/portfolio/27.png",
    description: "A compelling location AV for Shree Radha Gopal Residency, showcasing the neighborhood and connectivity.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isExternal: false,
  },
  {
    id: 16,
    title: "Smart World-The Edition",
    category: "Construction Updates",
    image: "/images/portfolio/11.png",
    description: "Comprehensive construction update videos for Smart World-The Edition, documenting project milestones.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isExternal: false,
  },
  {
    id: 18,
    title: "Rising Homes, Gurugram",
    category: "Interior Cinematic Walkthrough",
    image: "/images/portfolio/20.png",
    description: "A cinematic interior walkthrough of Rising Homes in Gurugram, presenting the project's luxury interiors.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isExternal: false,
  },
  {
    id: 19,
    title: "Modern Apartment Lifestyle",
    category: "Interior Cinematic Walkthrough",
    image: "/images/portfolio/21.jpg",
    description: "A lifestyle-focused interior cinematic walkthrough of a modern apartment, highlighting contemporary design.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isExternal: false,
  },
  {
    id: 20,
    title: "Aura, Sector 79",
    category: "Location AV",
    image: "/images/portfolio/34.png",
    description: "A strategic location AV for Aura in Sector 79, showcasing the project's connectivity and surroundings.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isExternal: false,
  },
  {
    id: 21,
    title: "GMI Elite Homes, Mohali",
    category: "Construction Updates",
    image: "/images/portfolio/GMI.png",
    description: "Regular construction update videos for GMI Elite Homes in Mohali, keeping stakeholders updated.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isExternal: false,
  },
  {
    id: 22,
    title: "Prime Residences, Gurugram",
    category: "Construction Updates",
    image: "/images/portfolio/Prime-Residences.png",
    description: "Detailed construction update videos for Prime Residences in Gurugram, documenting project progress.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isExternal: false,
  },
  {
    id: 23,
    title: "SAP Experience Center",
    category: "VR Experience",
    image: "/images/portfolio/SAP-Experience-Center.png",
    description: "An immersive VR experience for the SAP Experience Center, showcasing the corporate facility virtually.",
    videoUrl: "https://my.matterport.com/show/?m=SAP_Experience",
    isExternal: true,
  },
  {
    id: 24,
    title: "SAP S Market",
    category: "VR Experience",
    image: "/images/portfolio/SAP-S-Market.png",
    description: "A virtual reality tour of SAP S Market, enabling remote exploration of the commercial space.",
    videoUrl: "https://my.matterport.com/show/?m=SAP_S_Market",
    isExternal: true,
  },
  {
    id: 25,
    title: "Sanfran Sarovar Heights",
    category: "VR Experience",
    image: "/images/portfolio/Sanfran-VR-Thumbnail.png",
    description: "An immersive VR tour of Sanfran Sarovar Heights, providing prospective buyers with a virtual property experience.",
    videoUrl: "https://amlabs.cloud/Sanfran/",
    isExternal: true,
  },
  {
    id: 26,
    title: "Central Ikon, Noida",
    category: "Construction Updates",
    image: "/images/portfolio/Central-Ikon-Thumbnail.png",
    description: "Construction update videos for Central Ikon in Noida, keeping investors informed about development progress.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isExternal: false,
  },
  {
    id: 27,
    title: "The Kutumb, Ghaziabad",
    category: "Construction Updates",
    image: "/images/portfolio/Kutumb-Thumbnail.png",
    description: "Comprehensive construction documentation for The Kutumb in Ghaziabad, tracking project milestones.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isExternal: false,
  },
  {
    id: 28,
    title: "Mauli Housing, Mumbai",
    category: "VR Experience",
    image: "/images/portfolio/Mauli-VR-Thumbnail.png",
    description: "A virtual reality experience for Mauli Housing in Mumbai, enabling buyers to explore the property remotely.",
    videoUrl: "https://amlabs.cloud/Mauli/",
    isExternal: true,
  },
  {
    id: 29,
    title: "Dosti Greater Thane",
    category: "VR Experience",
    image: "/images/portfolio/Dosti-VR-Thumbnail.png",
    description: "An immersive VR tour of Dosti Greater Thane, allowing prospective buyers to virtually experience the development.",
    videoUrl: "https://amlabs.cloud/Dosti/",
    isExternal: true,
  },
  {
    id: 30,
    title: "Centonic, Pune",
    category: "Architectural Scale Models",
    image: "/images/services/architectural-scale-models/1.jpg",
    description: "A detailed architectural scale model of Centonic in Pune, showcasing the residential development's layout and design.",
    hasGallery: true,
    galleryImages: [
      { url: "/images/services/architectural-scale-models/centonic/1.jpeg", title: "Centonic Overview", description: "Complete scale model showing the full development layout" },
      { url: "/images/services/architectural-scale-models/centonic/2.jpeg", title: "Tower Detail", description: "Close-up view of the residential towers" },
      { url: "/images/services/architectural-scale-models/centonic/3.jpeg", title: "Amenities Zone", description: "Scale model of amenity areas and landscaping" },
      { url: "/images/services/architectural-scale-models/centonic/4.jpeg", title: "Master Plan View", description: "Bird's eye view of the complete site plan" },
    ],
  },
  {
    id: 31,
    title: "Indian Railways",
    category: "Architectural Scale Models",
    image: "/images/services/architectural-scale-models/2.jpg",
    description: "A comprehensive architectural scale model for Indian Railways, depicting station infrastructure and rail network planning.",
    hasGallery: true,
    galleryImages: [
      { url: "/images/services/architectural-scale-models/railways/1.jpeg", title: "Railway Station Model", description: "Detailed scale model of the railway station complex" },
      { url: "/images/services/architectural-scale-models/railways/2.jpeg", title: "Platform Layout", description: "Scale representation of platform configuration and tracks" },
      { url: "/images/services/architectural-scale-models/railways/3.jpeg", title: "Terminal Building", description: "Architectural model of the main terminal building" },
      { url: "/images/services/architectural-scale-models/railways/4.jpeg", title: "Infrastructure Details", description: "Detailed model of rail infrastructure components" },
      { url: "/images/services/architectural-scale-models/railways/5.jpeg", title: "Station Master Plan", description: "Bird's eye view of the complete railway infrastructure showcasing track layouts and station positioning" },
    ],
  },
  {
    id: 32,
    title: "Hiranandani Meadows, Thane",
    category: "Architectural Scale Models",
    image: "/images/services/architectural-scale-models/3.jpg",
    description: "Elaborate architectural scale model of Hiranandani Meadows in Thane, capturing the sprawling residential township with multi-story buildings, green corridors, and integrated community facilities.",
    hasGallery: true,
    galleryImages: [
      { url: "/images/services/architectural-scale-models/hiranandani/1.jpeg", title: "Township Residential Clusters", description: "Multiple residential tower models arranged to show the planned neighborhood layout and density distribution" },
      { url: "/images/services/architectural-scale-models/hiranandani/2.jpeg", title: "Central Landscaped Gardens", description: "Miniature green spaces featuring walking paths, water features, and recreational zones within the township" },
      { url: "/images/services/architectural-scale-models/hiranandani/3.jpeg", title: "High-Rise Tower Detail", description: "Individual tower model showcasing architectural style, floor-to-floor heights, and facade treatment" },
      { url: "/images/services/architectural-scale-models/hiranandani/4.jpeg", title: "Community Center Complex", description: "Scale representation of shared facilities including clubhouse, sports areas, and social gathering spaces" },
      { url: "/images/services/architectural-scale-models/hiranandani/5.jpeg", title: "Master Township Layout", description: "Complete site model displaying road networks, building clusters, and open space distribution across the development" },
    ],
  },
  {
    id: 33,
    title: "Venkatesh Skydale, Pune",
    category: "Architectural Scale Models",
    image: "/images/services/architectural-scale-models/4.jpg",
    description: "Sophisticated scale model of Venkatesh Skydale residential project in Pune, highlighting the twin-tower configuration, podium-level amenities, and contextual urban setting with accurate proportions.",
    hasGallery: true,
    galleryImages: [
      { url: "/images/services/architectural-scale-models/venkatesh/1.jpeg", title: "Twin Tower Configuration", description: "Architectural model showing both residential towers with connecting podium and vertical circulation cores" },
      { url: "/images/services/architectural-scale-models/venkatesh/2.jpeg", title: "Podium Level Amenities", description: "Ground and podium floor model featuring entrance lobbies, parking areas, and resident facilities" },
    ],
  },
  {
    id: 34,
    title: "Spree City, Sonipat",
    category: "Architectural Scale Models",
    image: "/images/services/architectural-scale-models/5.jpg",
    description: "Comprehensive architectural scale model for Spree City in Sonipat, representing a mixed-use development with residential zones, commercial areas, and extensive landscaping across multiple phases.",
    hasGallery: true,
    galleryImages: [
      { url: "/images/services/architectural-scale-models/spree/1.jpeg", title: "Mixed-Use Development Core", description: "Central area model showing integration of residential, retail, and commercial components" },
      { url: "/images/services/architectural-scale-models/spree/2.jpeg", title: "Residential Phase Clusters", description: "Housing sector models depicting apartment buildings, row houses, and supporting infrastructure" },
      { url: "/images/services/architectural-scale-models/spree/3.jpeg", title: "Commercial District Zone", description: "Scale model of business and retail areas with office buildings and shopping complexes" },
      { url: "/images/services/architectural-scale-models/spree/4.jpeg", title: "Green Corridor Network", description: "Landscape model showing interconnected parks, tree-lined avenues, and pedestrian-friendly pathways" },
      { url: "/images/services/architectural-scale-models/spree/5.jpeg", title: "Complete City Master Plan", description: "Expansive overview model presenting all development phases, infrastructure, and land use distribution" },
    ],
  },
  {
    id: 35,
    title: "Skyline Realty, Hyderabad",
    category: "Architectural Scale Models",
    image: "/images/services/architectural-scale-models/6.jpg",
    description: "Detailed architectural scale model for Skyline Realty's premium development in Hyderabad, showcasing contemporary high-rise design, rooftop amenities, and sophisticated urban living spaces.",
    hasGallery: true,
    galleryImages: [
      { url: "/images/services/architectural-scale-models/skyline/1.jpeg", title: "Premium Tower Elevation", description: "High-rise residential tower model with detailed facade articulation and balcony projections" },
      { url: "/images/services/architectural-scale-models/skyline/2.jpeg", title: "Rooftop Amenity Deck", description: "Top-floor amenity level showcasing swimming pool, gym facilities, and sky lounge areas" },
      { url: "/images/services/architectural-scale-models/skyline/3.jpeg", title: "Entrance Plaza Design", description: "Ground level model featuring grand entrance, drop-off area, and landscaped arrival court" },
      { url: "/images/services/architectural-scale-models/skyline/4.jpeg", title: "Site Context Integration", description: "Complete development model showing relationship with surrounding roads, neighboring buildings, and urban fabric" },
    ],
  },
  {
    id: 36,
    title: "Island City Centre, Mumbai",
    category: "Architectural Scale Models",
    image: "/images/services/architectural-scale-models/7.jpg",
    description: "Premium architectural scale model of Island City Centre in Mumbai, depicting a landmark mixed-use development with commercial towers, retail podiums, and waterfront promenade integration.",
    hasGallery: true,
    galleryImages: [
      { url: "/images/services/architectural-scale-models/island/1.jpeg", title: "Commercial Tower Complex", description: "Multi-tower model showing office buildings, retail podium, and multi-level parking structures" },
      { url: "/images/services/architectural-scale-models/island/2.jpeg", title: "Waterfront Promenade", description: "Detailed model of public realm areas with pedestrian walkways, seating zones, and waterfront landscaping" },
    ],
  },
] as const;

type PortfolioItem = (typeof portfolioItems)[number];

const categories = [
  "All",
  "3D Walkthrough",
  "VR Experience",
  "Location AV",
  "3D Rendering",
  "Construction Updates",
  "Interactive 3D",
  "Route Videos",
  "3D Isometrics",
  "Interior Cinematic Walkthrough",
  "Architectural Scale Models",
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const handleItemClick = (item: PortfolioItem) => {
    if (item.title === "Yuu by Nahar, Mumbai") {
      window.open("https://amlabs.cloud/Nahar_VR/", "_blank");
      return;
    }
    if (item.title === "House of Hiranandani, Mumbai") {
      window.open("https://amlabs.cloud/HOH-V2/", "_blank");
      return;
    }
    if (item.title === "Province D Olympia, Noida" && item.category === "VR Experience") {
      window.open("https://amlabs.cloud/ATS_PDO/", "_blank");
      return;
    }
    if (item.title === "Etereo 1, Goa" && item.category === "3D Walkthrough") {
      setSelectedItem(item);
      setShowVideo(true);
      return;
    }
    if (item.title === "Etereo 1, Goa" && item.category === "3D Isometrics") {
      setSelectedItem(item);
      setShowVideo(false);
      setCurrentSlideIndex(0);
      return;
    }
    if ("isExternal" in item && item.isExternal) {
      window.open(item.videoUrl, "_blank");
      return;
    }
    setSelectedItem(item);
    setCurrentSlideIndex(0);
  };

  const handleVideoPlay = (item: PortfolioItem) => {
    if ("isExternal" in item && item.isExternal) {
      window.open(item.videoUrl, "_blank");
      return;
    }
    setSelectedItem(item);
    setShowVideo(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setShowVideo(false);
    setCurrentSlideIndex(0);
  };

  const nextSlide = () => {
    if (selectedItem && "sliderImages" in selectedItem && selectedItem.sliderImages) {
      setCurrentSlideIndex((prev) =>
        prev === selectedItem.sliderImages!.length - 1 ? 0 : prev + 1
      );
    }
    if (selectedItem && "galleryImages" in selectedItem && selectedItem.galleryImages) {
      setCurrentSlideIndex((prev) =>
        prev === selectedItem.galleryImages!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevSlide = () => {
    if (selectedItem && "sliderImages" in selectedItem && selectedItem.sliderImages) {
      setCurrentSlideIndex((prev) =>
        prev === 0 ? selectedItem.sliderImages!.length - 1 : prev - 1
      );
    }
    if (selectedItem && "galleryImages" in selectedItem && selectedItem.galleryImages) {
      setCurrentSlideIndex((prev) =>
        prev === 0 ? selectedItem.galleryImages!.length - 1 : prev - 1
      );
    }
  };

  const hasSlider = selectedItem && "sliderImages" in selectedItem && selectedItem.sliderImages;
  const hasGallery = selectedItem && "hasGallery" in selectedItem && selectedItem.hasGallery && "galleryImages" in selectedItem && selectedItem.galleryImages;

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Portfolio Showcase</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest projects and see how we transform visions into immersive experiences
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeCategory === category
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div
                    className="text-center text-white cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      if ("hasSlider" in item || "hasGallery" in item) {
                        handleItemClick(item);
                      } else {
                        handleVideoPlay(item);
                      }
                    }}
                  >
                    <i className={`${"hasSlider" in item || "hasGallery" in item ? "ri-image-line" : "ri-play-circle-line"} text-4xl mb-2`}></i>
                    <p className="text-sm">{"hasSlider" in item || "hasGallery" in item ? "View Gallery" : "View Project"}</p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="text-yellow-400 text-sm font-medium mb-2">{item.category}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={closeModal}>
            <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              {showVideo ? (
                <div className="relative">
                  <div className="aspect-video">
                    <iframe
                      src={"videoUrl" in selectedItem ? selectedItem.videoUrl : ""}
                      title={selectedItem.title}
                      className="w-full h-full rounded-t-2xl"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <button onClick={closeModal} className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-10">
                    <i className="ri-close-line text-xl"></i>
                  </button>
                  <div className="p-8">
                    <div className="text-yellow-400 text-sm font-medium mb-2">{selectedItem.category}</div>
                    <h3 className="text-3xl font-bold text-black mb-4">{selectedItem.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">{selectedItem.description}</p>
                  </div>
                </div>
              ) : hasSlider ? (
                <div className="relative">
                  <button onClick={closeModal} className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-20">
                    <i className="ri-close-line text-xl"></i>
                  </button>
                  <div className="relative h-96 md:h-[500px] overflow-hidden rounded-t-2xl">
                    <div className="flex transition-transform duration-500 ease-in-out h-full" style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}>
                      {hasSlider && (selectedItem as typeof portfolioItems[3]).sliderImages.map((slide, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0 relative">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={slide.url} alt={slide.title} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-10">
                      <i className="ri-arrow-left-line text-xl"></i>
                    </button>
                    <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-10">
                      <i className="ri-arrow-right-line text-xl"></i>
                    </button>
                  </div>
                  <div className="flex justify-center space-x-2 py-4 bg-gray-100">
                    {hasSlider && (selectedItem as typeof portfolioItems[3]).sliderImages.map((_, index) => (
                      <button key={index} onClick={() => setCurrentSlideIndex(index)} className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${index === currentSlideIndex ? "bg-yellow-400" : "bg-gray-400"}`}></button>
                    ))}
                  </div>
                  <div className="p-8">
                    <div className="text-yellow-400 text-sm font-medium mb-2">{selectedItem.category}</div>
                    <h3 className="text-3xl font-bold text-black mb-4">{selectedItem.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{selectedItem.description}</p>
                  </div>
                </div>
              ) : hasGallery ? (
                <div className="relative">
                  <button onClick={closeModal} className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-20">
                    <i className="ri-close-line text-xl"></i>
                  </button>
                  <div className="relative h-96 md:h-[500px] overflow-hidden rounded-t-2xl">
                    <div className="flex transition-transform duration-500 ease-in-out h-full" style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}>
                      {hasGallery && (selectedItem as typeof portfolioItems[7]).galleryImages.map((image, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0 relative flex">
                          <div className="w-1/2 h-full">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="w-1/2 h-full">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-10">
                      <i className="ri-arrow-left-line text-xl"></i>
                    </button>
                    <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-10">
                      <i className="ri-arrow-right-line text-xl"></i>
                    </button>
                  </div>
                  <div className="flex justify-center space-x-2 py-4 bg-gray-100">
                    {hasGallery && (selectedItem as typeof portfolioItems[7]).galleryImages.map((_, index) => (
                      <button key={index} onClick={() => setCurrentSlideIndex(index)} className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${index === currentSlideIndex ? "bg-yellow-400" : "bg-gray-400"}`}></button>
                    ))}
                  </div>
                  <div className="p-8">
                    <div className="text-yellow-400 text-sm font-medium mb-2">{selectedItem.category}</div>
                    <h3 className="text-3xl font-bold text-black mb-4">{selectedItem.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{selectedItem.description}</p>
                    {hasGallery && (selectedItem as typeof portfolioItems[7]).galleryImages[currentSlideIndex] && (
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-black mb-2">{(selectedItem as typeof portfolioItems[7]).galleryImages[currentSlideIndex].title}</h4>
                        <p className="text-gray-600 text-sm">{(selectedItem as typeof portfolioItems[7]).galleryImages[currentSlideIndex].description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-96 object-cover object-top rounded-t-2xl" />
                  <button onClick={closeModal} className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer">
                    <i className="ri-close-line text-xl"></i>
                  </button>
                  <div className="absolute inset-0 bg-black/40 rounded-t-2xl flex items-center justify-center">
                    <button onClick={() => setShowVideo(true)} className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors cursor-pointer">
                      <i className="ri-play-fill text-3xl text-black"></i>
                    </button>
                  </div>
                  <div className="p-8">
                    <div className="text-yellow-400 text-sm font-medium mb-2">{selectedItem.category}</div>
                    <h3 className="text-3xl font-bold text-black mb-4">{selectedItem.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">{selectedItem.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
