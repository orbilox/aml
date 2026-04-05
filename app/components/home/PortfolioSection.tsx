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

  // 👉 keep rest of your items SAME (no change needed)
  // just ensure:
  // - videoUrl is OPTIONAL
  // - gallery/slider items only where needed

  {
    id: 32,
    title: "Centonic, Pune",
    category: "Architectural Scale Models",
    image: "/images/services/architectural-scale-models/1.jpg",
    description:
      "Precision architectural scale model showcasing Centonic's contemporary residential development.",
    hasGallery: true,
    galleryImages: [
      {
        url: "/images/services/architectural-scale-models/centonic/1.jpeg",
        title: "Centonic Main Tower Complex",
        description: "Detailed scale model",
      },
    ],
  },
];

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