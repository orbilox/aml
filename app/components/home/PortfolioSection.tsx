"use client";
import { useState } from "react";

/* ================= TYPES ================= */

type SliderImage = {
  url: string;
  title: string;
  description: string;
};

type GalleryImage = {
  url: string;
  title: string;
  description: string;
};

type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  videoUrl?: string;
  isExternal?: boolean;
  hasSlider?: boolean;
  sliderImages?: SliderImage[];
  hasGallery?: boolean;
  galleryImages?: GalleryImage[];
};

/* ================= DATA ================= */

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Etereo 1, Goa",
    category: "3D Walkthrough",
    image: "/images/portfolio/1.png",
    description:
      "Cinematic 3D walkthrough showcasing luxury residential units with panoramic city views.",
    videoUrl: "https://www.youtube.com/embed/BiCCdx0fDik?autoplay=1&t",
    isExternal: false,
  },

  {
    id: 2,
    title: "Shree Radha Gopal Residency, Kosi",
    category: "VR Experience",
    image: "/images/portfolio/2.png",
    description:
      "Interactive VR tour of a residential plotted development with modern amenities and green spaces.",
    videoUrl: "https://amlabs.cloud/SRMG_V06/",
    isExternal: true,
  },

  {
    id: 3,
    title: "Province D Olympia, Noida",
    category: "Location AV",
    image: "/images/portfolio/3.png",
    description:
      "Professional location showcase highlighting the prime Noida location and premium real estate development with excellent connectivity and modern infrastructure.",
    videoUrl:
      "https://www.youtube.com/embed/VPTirPc5a1I?si=y4M05nZkVgJPmB9U&autoplay=1",
  },

  {
    id: 4,
    title: "Multiple Projects",
    category: "3D Rendering",
    image: "/images/portfolio/4.png",
    description:
      "Comprehensive collection of 3D still renders showcasing various residential developments with detailed architectural visualization",
    videoUrl:
      "https://www.youtube.com/embed/BiCCdx0fDik?si=y4M05nZkVgJPmB9U&autoplay=1",
    hasSlider: true,
    sliderImages: [
      {
        url: "/images/portfolio/5.png",
        title: "Luxury Residential Complex",
        description: "Modern residential development with premium amenities",
      },
      {
        url: "/images/portfolio/6.png",
        title: "Premium Interior Design",
        description: "Sophisticated interior spaces with modern finishes",
      },
      {
        url: "/images/portfolio/7.png",
        title: "High-Rise Development",
        description: "Urban residential tower with panoramic city views",
      },
      {
        url: "/images/portfolio/8.png",
        title: "Premium Villa Project",
        description: "Exclusive villa development with luxury amenities",
      },
      {
        url: "/images/portfolio/9.png",
        title: "Master Plan Visualization",
        description: "Complete residential development master planning",
      },
    ],
  },

  {
    id: 5,
    title: "Pyramid Alban, Gurugram",
    category: "Construction Updates",
    image: "/images/portfolio/10.png",
    description:
      "Comprehensive construction progress documentation of premium residential project with detailed milestone markers and progress tracking.",
    videoUrl:
      "https://www.youtube.com/embed/QDJxopvP4Ro?si=y4M05nZkVgJPmB9U&autoplay=1",
  },

  {
    id: 6,
    title: "Yuu by Nahar, Mumbai",
    category: "Interactive 3D",
    image: "/images/portfolio/13.png",
    description:
      "Interactive residential apartment configurator allowing buyers to customize layouts, finishes, and amenities in real-time for premium Mumbai living.",
    videoUrl: "https://amlabs.cloud/Nahar_VR/",
    isExternal: true,
  },

  {
    id: 7,
    title: "Hero Homes-The Palatial, Gurugram",
    category: "Route Videos",
    image: "/images/portfolio/14.png",
    description:
      "Dynamic route visualization showcasing different approach routes to reach the project site highlighting nearby landmarks and markers for easy navigation.",
    videoUrl:
      "https://www.youtube.com/embed/ENlsfe7wQRs?si=y4M05nZkVgJPmB9U&autoplay=1",
  },

  {
    id: 8,
    title: "Residential Complex Isometrics",
    category: "3D Isometrics",
    image: "/images/portfolio/28.jpg",
    description:
      "Technical isometric visualizations providing comprehensive overview of architectural layouts and spatial relationships.",
    videoUrl:
      "https://www.youtube.com/embed/BiCKdx0fDik?si=y4M05nZkVgJPmB9U&autoplay=1",
  },

  {
    id: 9,
    title: "Hero Homes, Ludhiana",
    category: "Interior Cinematic Walkthrough",
    image: "/images/portfolio/19.jpg",
    description:
      "Immersive interior walkthrough highlighting the sophisticated apartment interiors with premium finishes, modern amenities, and elegant design elements.",
    videoUrl:
      "https://www.youtube.com/embed/dPJRyTFkX-g?si=y4M05nZkVgJPmB9U&autoplay=1",
  },

  {
    id: 11,
    title: "Luxury Commercial Complex",
    category: "3D Walkthrough",
    image: "/images/portfolio/29.jpg",
    description:
      "Sophisticated commercial development featuring modern office spaces and premium retail environments.",
    videoUrl:
      "https://www.youtube.com/embed/BiCKdx0fDik?si=y4M05nZkVgJPmB9U&autoplay=1",
  },

  {
    id: 12,
    title: "Heritage Hotel Restoration",
    category: "VR Experience",
    image: "/images/portfolio/30.jpg",
    description:
      "Virtual tour of heritage hotel restoration blending historical architecture with contemporary luxury amenities.",
    videoUrl:
      "https://www.youtube.com/embed/BiCKdx0fDik?si=y4M05nZkVgJPmB9U&autoplay=1",
  },

  {
    id: 13,
    title: "Smart City Infrastructure",
    category: "Location AV",
    image: "/images/portfolio/31.jpg",
    description:
      "Comprehensive smart city development showcasing integrated infrastructure and sustainable urban planning solutions.",
    videoUrl:
      "https://www.youtube.com/embed/BiCKdx0fDik?si=y4M05nZkVgJPmB9U&autoplay=1",
  },

  {
    id: 14,
    title: "Waterfront Residences",
    category: "3D Rendering",
    image: "/images/portfolio/32.jpg",
    description:
      "Premium waterfront residential project featuring contemporary design and stunning lake views.",
    videoUrl:
      "https://www.youtube.com/embed/BiCKdx0fDik?si=y4M05nZkVgJPmB9U&autoplay=1",
  },

  {
    id: 15,
    title: "Smart World- The Edition, Gurugram",
    category: "Construction Updates",
    image: "/images/portfolio/33.jpg",
    description:
      "Comprehensive construction progress documentation highlighting the development of multi-tower residential project with premium amenities and modern architectural design.",
    videoUrl:
      "https://www.youtube.com/embed/4RebMEfQr3Y?si=y4M05nZkVgJPmB9U&autoplay=1",
  },

  {
    id: 16,
    title: "House of Hiranandani, Mumbai",
    category: "VR Experience",
    image: "/images/portfolio/23.png",
    description:
      "Immersive VR tour of premium shopping mall featuring interactive retail spaces and modern commercial architecture.",
    videoUrl: "https://amlabs.cloud/HOH-V2/",
    isExternal: true,
  },

  {
    id: 17,
    title: "Province D Olympia, Noida",
    category: "VR Experience",
    image: "/images/portfolio/3.png",
    description: "Residential plotted development",
    videoUrl: "https://amlabs.cloud/ATS_PDO/",
    isExternal: true,
  },

  {
    id: 19,
    title: "Altura DXP 92, Gurugram",
    category: "Location AV",
    image: "/images/portfolio/26.png",
    description:
      "Infographical location AV showcasing Altura DXP 92 development in Gurugram with comprehensive visual presentation and detailed project information.",
    videoUrl:
      "https://www.youtube.com/embed/z6RclcDFWAA?si=y4M05nZkVgJPmB9U&autoplay=1",
  },

  {
    id: 20,
    title: "Shree Radha Gopal Residency, Kosi",
    category: "Location AV",
    image: "/images/portfolio/2.png",
    description:
      "Highlighting spiritual location of Kosi along with project highlights showcasing the serene environment and premium residential development features.",
    videoUrl:
      "https://www.youtube.com/embed/nl1xegGywlc?si=y4M05nZkVgJPmB9U&autoplay=1",
  },

  {
    id: 21,
    title: "Aura, Sector 79, Gurugram",
    category: "Location AV",
    image: "/images/portfolio/34.png",
    description:
      "A high-impact location walkthrough for Aura – Sector 79, Gurugram, designed to showcase premium connectivity and attract qualified property leads.",
    videoUrl:
      "https://www.youtube.com/embed/-6icu6ALbr4?si=0H-4fGbiNLi3y0fG&autoplay=1",
  },

  {
    id: 22,
    title: "GMI Elite Homes, Mohali",
    category: "Construction Updates",
    image: "/images/portfolio/GMI.png",
    description:
      "Visual documentation of GMI Elite Homes, capturing the construction journey of a modern multi-tower residential project designed for refined, upscale living.",
    videoUrl:
      "https://www.youtube.com/embed/cCE1QRmeIRU?si=y4M05nZkVgJPmB9U&autoplay=1",
  },

  {
    id: 23,
    title: "Rising Homes, Gurugram",
    category: "Interior Cinematic Walkthrough",
    image: "/images/portfolio/20.png",
    description:
      "Immersive interior walkthrough highlighting the sophisticated apartment interiors with premium finishes, modern amenities, and elegant design elements.",
    videoUrl:
      "https://www.youtube.com/embed/ExZlpEoGIBc?si=y4M05nZkVgJPmB9U&autoplay=1",
  },

  {
    id: 24,
    title: "SAP Experience Center, Bengaluru",
    category: "VR Experience",
    image: "/images/portfolio/SAP-Experience-Center.png",
    description:
      "Matterport-powered virtual tour created for the SAP Experience Center, delivering an immersive and interactive walkthrough.",
    videoUrl: "https://my.matterport.com/show/?m=ceeiCLowE6C",
    isExternal: true,
  },

  {
    id: 25,
    title: "SAP S Market, Bengaluru",
    category: "VR Experience",
    image: "/images/portfolio/SAP-S-Market.png",
    description:
      "High-fidelity Matterport virtual walkthrough developed for the SAP S Market.",
    videoUrl: "https://my.matterport.com/show/?m=R5jPFcjQaeh",
    isExternal: true,
  },

  {
    id: 26,
    title: "Sanfran Sarovar Heights, Jhansi",
    category: "VR Experience",
    image: "/images/portfolio/Sanfran-VR-Thumbnail.png",
    description:
      "Immersive virtual tour showcasing high-rise towers of Sanfran Sarovar Heights, highlighting advanced functionalities and modern residential design.",
    videoUrl: "https://amlabs.cloud/SSH_V3/",
    isExternal: true,
  },

  {
    id: 27,
    title: "Prime Residences, Gurugram ",
    category: "Construction Updates",
    image: "/images/portfolio/Prime-Residences.png",
    description:
      "Construction progress documentation capturing the development of Prime Residences — a contemporary residential project defined by modern architecture and thoughtfully curated amenities.",
    videoUrl:
      "https://www.youtube.com/embed/ZLblD-AEilk?si=y4M05nZkVgJPmB9U&autoplay=1",
  },
  {
    id: 28,
    title: "Central Ikon, Noida",
    category: "Construction Updates",
    image: "/images/portfolio/Central-Ikon-Thumbnail.png",
    description:
      "Visual documentation of Central Ikon, showcasing the progressive development of a contemporary commercial and retail project crafted to reflect sophistication, scale, and premium positioning.",
    videoUrl: "https://www.youtube.com/embed/k2jFPH49J0U?autoplay=1",
  },
  {
    id: 29,
    title: "The Kutumb, Ghaziabad",
    category: "Construction Updates",
    image: "/images/portfolio/Kutumb-Thumbnail.png",
    description:
      "Construction update video capturing the evolution of The Kutumb — a contemporary residential development distinguished by modern architectural design and carefully planned lifestyle amenities.",
    videoUrl: "https://www.youtube.com/embed/ZLblD-AEilk?autoplay=1",
  },
  {
    id: 30,
    title: "Mauli Housing, Mumbai",
    category: "VR Experience",
    image: "/images/portfolio/Mauli-VR-Thumbnail.png",
    description:
      "An immersive 360° Virtual Reality tour for Mauli Housing, showcasing landmark views and multi-height outside perspectives for a complete spatial experience.",
    videoUrl: "https://amlabs.cloud/Mauli_V06/",
    isExternal: true,
  },
  {
    id: 31,
    title: "Dosti Greater Thane, Thane",
    category: "VR Experience",
    image: "/images/portfolio/Dosti-VR-Thumbnail.png",
    description:
      "A 360° VR real estate tour for Dosti Group, featuring a superimposed 3D building for a realistic virtual property walkthrough experience.",
    videoUrl: "https://amlabs.cloud/Dosti_Mumbai_V01/",
    isExternal: true,
  },
  {
    id: 32,
    title: "Centonic, Pune",
    category: "Architectural Scale Models",
    image: "/images/services/architectural-scale-models/1.jpg",
    description:
      "Precision architectural scale model showcasing Centonic's contemporary residential development in Pune, featuring detailed landscaping, modern tower structures, and comprehensive amenity planning.",
    hasGallery: true,
    galleryImages: [
      {
        url: "/images/services/architectural-scale-models/centonic/1.jpeg",
        title: "Centonic Main Tower Complex",
        description:
          "Detailed scale model of the primary residential towers with surrounding landscape elements and pedestrian pathways",
      },
      {
        url: "/images/services/architectural-scale-models/centonic/2.jpeg",
        title: "Amenity Zone Layout",
        description:
          "Miniature representation of recreational facilities including clubhouse, pool area, and community spaces",
      },
      {
        url: "/images/services/architectural-scale-models/centonic/3.jpeg",
        title: "Tower Elevation Detail",
        description:
          "Close-up view showcasing architectural facade details, balcony arrangements, and building proportion accuracy",
      },
      {
        url: "/images/services/architectural-scale-models/centonic/4.jpeg",
        title: "Master Plan Overview",
        description:
          "Complete aerial perspective of the Centonic development showing site planning and spatial organization",
      },
    ],
  },
  {
    id: 33,
    title: "Indian Railways",
    category: "Architectural Scale Models",
    image: "/images/services/architectural-scale-models/2.jpg",
    description:
      "Intricate scale model for Indian Railways infrastructure project, demonstrating station layouts, platform configurations, and surrounding urban integration with meticulous attention to operational details.",
    hasGallery: true,
    galleryImages: [
      {
        url: "/images/services/architectural-scale-models/railways/1.jpeg",
        title: "Railway Station Complex",
        description:
          "Comprehensive model showing station building architecture, platform arrangements, and passenger circulation areas",
      },
      {
        url: "/images/services/architectural-scale-models/railways/2.jpeg",
        title: "Platform Infrastructure",
        description:
          "Detailed representation of railway tracks, platform edges, overhead structures, and signaling systems",
      },
      {
        url: "/images/services/architectural-scale-models/railways/3.jpeg",
        title: "Terminal Building Facade",
        description:
          "Architectural elevation model highlighting the station's main entrance, roof design, and structural elements",
      },
      {
        url: "/images/services/architectural-scale-models/railways/4.jpeg",
        title: "Transit Integration Hub",
        description:
          "Scale model depicting connectivity between railway platforms and surrounding transportation networks",
      },
      {
        url: "/images/services/architectural-scale-models/railways/5.jpeg",
        title: "Station Master Plan",
        description:
          "Bird's eye view of the complete railway infrastructure showcasing track layouts and station positioning",
      },
    ],
  },
  {
    id: 34,
    title: "Hiranandani Meadows, Thane",
    category: "Architectural Scale Models",
    image: "/images/services/architectural-scale-models/3.jpg",
    description:
      "Elaborate architectural scale model of Hiranandani Meadows in Thane, capturing the sprawling residential township with multi-story buildings, green corridors, and integrated community facilities.",
    hasGallery: true,
    galleryImages: [
      {
        url: "/images/services/architectural-scale-models/hiranandani/1.jpeg",
        title: "Township Residential Clusters",
        description:
          "Multiple residential tower models arranged to show the planned neighborhood layout and density distribution",
      },
      {
        url: "/images/services/architectural-scale-models/hiranandani/2.jpeg",
        title: "Central Landscaped Gardens",
        description:
          "Miniature green spaces featuring walking paths, water features, and recreational zones within the township",
      },
      {
        url: "/images/services/architectural-scale-models/hiranandani/3.jpeg",
        title: "High-Rise Tower Detail",
        description:
          "Individual tower model showcasing architectural style, floor-to-floor heights, and facade treatment",
      },
      {
        url: "/images/services/architectural-scale-models/hiranandani/4.jpeg",
        title: "Community Center Complex",
        description:
          "Scale representation of shared facilities including clubhouse, sports areas, and social gathering spaces",
      },
      {
        url: "/images/services/architectural-scale-models/hiranandani/5.jpeg",
        title: "Master Township Layout",
        description:
          "Complete site model displaying road networks, building clusters, and open space distribution across the development",
      },
    ],
  },
  {
    id: 35,
    title: "Venkatesh Skydale, Pune",
    category: "Architectural Scale Models",
    image: "/images/services/architectural-scale-models/4.jpg",
    description:
      "Sophisticated scale model of Venkatesh Skydale residential project in Pune, highlighting the twin-tower configuration, podium-level amenities, and contextual urban setting with accurate proportions.",
    hasGallery: true,
    galleryImages: [
      {
        url: "/images/services/architectural-scale-models/venkatesh/1.jpeg",
        title: "Twin Tower Configuration",
        description:
          "Architectural model showing both residential towers with connecting podium and vertical circulation cores",
      },
      {
        url: "/images/services/architectural-scale-models/venkatesh/2.jpeg",
        title: "Podium Level Amenities",
        description:
          "Ground and podium floor model featuring entrance lobbies, parking areas, and resident facilities",
      },
    ],
  },
  {
    id: 36,
    title: "Spree City, Sonipat",
    category: "Architectural Scale Models",
    image: "/images/services/architectural-scale-models/5.jpg",
    description:
      "Comprehensive architectural scale model for Spree City in Sonipat, representing a mixed-use development with residential zones, commercial areas, and extensive landscaping across multiple phases.",
    hasGallery: true,
    galleryImages: [
      {
        url: "/images/services/architectural-scale-models/spree/1.jpeg",
        title: "Mixed-Use Development Core",
        description:
          "Central area model showing integration of residential, retail, and commercial components",
      },
      {
        url: "/images/services/architectural-scale-models/spree/2.jpeg",
        title: "Residential Phase Clusters",
        description:
          "Housing sector models depicting apartment buildings, row houses, and supporting infrastructure",
      },
      {
        url: "/images/services/architectural-scale-models/spree/3.jpeg",
        title: "Commercial District Zone",
        description:
          "Scale model of business and retail areas with office buildings and shopping complexes",
      },
      {
        url: "/images/services/architectural-scale-models/spree/4.jpeg",
        title: "Green Corridor Network",
        description:
          "Landscape model showing interconnected parks, tree-lined avenues, and pedestrian-friendly pathways",
      },
      {
        url: "/images/services/architectural-scale-models/spree/5.jpeg",
        title: "Complete City Master Plan",
        description:
          "Expansive overview model presenting all development phases, infrastructure, and land use distribution",
      },
    ],
  },
  {
    id: 37,
    title: "Skyline Realty, Hyderabad",
    category: "Architectural Scale Models",
    image: "/images/services/architectural-scale-models/6.jpg",
    description:
      "Detailed architectural scale model for Skyline Realty's premium development in Hyderabad, showcasing contemporary high-rise design, rooftop amenities, and sophisticated urban living spaces.",
    hasGallery: true,
    galleryImages: [
      {
        url: "/images/services/architectural-scale-models/skyline/1.jpeg",
        title: "Premium Tower Elevation",
        description:
          "High-rise residential tower model with detailed facade articulation and balcony projections",
      },
      {
        url: "/images/services/architectural-scale-models/skyline/2.jpeg",
        title: "Rooftop Amenity Deck",
        description:
          "Top-floor amenity level showcasing swimming pool, gym facilities, and sky lounge areas",
      },
      {
        url: "/images/services/architectural-scale-models/skyline/3.jpeg",
        title: "Entrance Plaza Design",
        description:
          "Ground level model featuring grand entrance, drop-off area, and landscaped arrival court",
      },
      {
        url: "/images/services/architectural-scale-models/skyline/4.jpeg",
        title: "Site Context Integration",
        description:
          "Complete development model showing relationship with surrounding roads, neighboring buildings, and urban fabric",
      },
    ],
  },
  {
    id: 38,
    title: "Island City Centre, Mumbai",
    category: "Architectural Scale Models",
    image: "/images/services/architectural-scale-models/7.jpg",
    description:
      "Premium architectural scale model of Island City Centre in Mumbai, depicting a landmark mixed-use development with commercial towers, retail podiums, and waterfront promenade integration.",
    hasGallery: true,
    galleryImages: [
      {
        url: "/images/services/architectural-scale-models/island/1.jpeg",
        title: "Commercial Tower Complex",
        description:
          "Multi-tower model showing office buildings, retail podium, and multi-level parking structures",
      },
      {
        url: "/images/services/architectural-scale-models/island/2.jpeg",
        title: "Waterfront Promenade",
        description:
          "Detailed model of public realm areas with pedestrian walkways, seating zones, and waterfront landscaping",
      },
    ],
  },
  {
    id: 39,
    title: "Tata La Vida, Gurugram",
    category: "Interactive 3D",
    image: "/images/portfolio/Tata-La-vida-Thumbnail.png",
    description:
      "An immersive 3D interactive virtual tour designed for a 3BHK residential project, allowing users to explore the space with ease and clarity.",
    videoUrl: "https://amlabs.cloud/Interior_VR/",
    isExternal: true,
  },
  {
    id: 40,
    title: "TVS Emerald Luxor, Chennai",
    category: "Interactive 3D",
    image: "/images/portfolio/TVS-thumbnail.png",
    description:
      "Crafted a high-end 3D interactive virtual tour for a luxury villa, highlighting spacious layouts, design details, and overall flow of the home. The experience delivers a refined real estate villa virtual walkthrough, with smooth transitions and a true-to-space feel.",
    videoUrl: "https://amlabs.cloud/Villa_VR_Tour/",
    isExternal: true,
  },
  {
    id: 41,
    title: "Aura Vantaje, Gurugram",
    category: "3D Walkthrough",
    image: "/images/portfolio/Aura-Vantaje-Thumbnail.png",
    description:
      "Developed an AI-powered 3D walkthrough for a commercial project, bringing out the scale, layout, and usability of the spaces in a smart way. Delivered at record speed of 7 days.",
    videoUrl:
      "https://www.youtube.com/embed/YGaAU9B37nc?autoplay=1",
  },
] 

/* ================= CONSTANTS ================= */

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

/* ================= COMPONENT ================= */

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  /* ================= HANDLERS ================= */

  const handleItemClick = (item: PortfolioItem) => {
    // External links
    if (item.isExternal && item.videoUrl) {
      window.open(item.videoUrl, "_blank");
      return;
    }

    // Special cases (use ID instead of title)
    if (item.id === 6) {
      window.open("https://amlabs.cloud/Nahar_VR/", "_blank");
      return;
    }

    if (item.id === 16) {
      window.open("https://amlabs.cloud/HOH-V2/", "_blank");
      return;
    }

    if (item.id === 17 && item.category === "VR Experience") {
      window.open("https://amlabs.cloud/ATS_PDO/", "_blank");
      return;
    }

    // Default
    setSelectedItem(item);
    setCurrentSlideIndex(0);
    setShowVideo(!!item.videoUrl);
  };

  const handleVideoPlay = (item: PortfolioItem) => {
    if (item.isExternal && item.videoUrl) {
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
    if (!selectedItem) return;

    if (selectedItem.sliderImages) {
      setCurrentSlideIndex((prev) =>
        prev === selectedItem.sliderImages!.length - 1 ? 0 : prev + 1
      );
    }

    if (selectedItem.galleryImages) {
      setCurrentSlideIndex((prev) =>
        prev === selectedItem.galleryImages!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevSlide = () => {
    if (!selectedItem) return;

    if (selectedItem.sliderImages) {
      setCurrentSlideIndex((prev) =>
        prev === 0 ? selectedItem.sliderImages!.length - 1 : prev - 1
      );
    }

    if (selectedItem.galleryImages) {
      setCurrentSlideIndex((prev) =>
        prev === 0 ? selectedItem.galleryImages!.length - 1 : prev - 1
      );
    }
  };

  const hasSlider = !!selectedItem?.sliderImages;
  const hasGallery = !!selectedItem?.galleryImages;

  /* ================= UI ================= */

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Portfolio Showcase</h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full ${
                activeCategory === category
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-800 text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="cursor-pointer"
            >
              <img src={item.image} className="rounded-xl h-60 w-full object-cover" />
              <h3 className="text-white mt-4 font-bold">{item.title}</h3>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center"
            onClick={closeModal}
          >
            <div
              className="bg-white max-w-4xl w-full rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* VIDEO */}
              {showVideo && selectedItem.videoUrl && (
                <iframe
                  src={selectedItem.videoUrl}
                  className="w-full h-[400px]"
                />
              )}

              {/* SLIDER */}
              {hasSlider && selectedItem.sliderImages && (
                <img
                  src={selectedItem.sliderImages[currentSlideIndex].url}
                  className="w-full h-[400px] object-cover"
                />
              )}

              {/* GALLERY */}
              {hasGallery && selectedItem.galleryImages && (
                <img
                  src={selectedItem.galleryImages[currentSlideIndex].url}
                  className="w-full h-[400px] object-cover"
                />
              )}

              {/* CONTENT */}
              <div className="p-6">
                <h2 className="text-xl font-bold">{selectedItem.title}</h2>
                <p>{selectedItem.description}</p>
              </div>

              {/* NAV */}
              {(hasSlider || hasGallery) && (
                <div className="flex justify-between p-4">
                  <button onClick={prevSlide}>Prev</button>
                  <button onClick={nextSlide}>Next</button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}