"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

interface SliderImage {
  url: string;
  title: string;
  description: string;
}

interface GalleryImage {
  url: string;
  title: string;
  description: string;
}

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  videoUrl?: string;
  hasSlider?: boolean;
  sliderImages?: SliderImage[];
  hasGallery?: boolean;
  galleryImages?: GalleryImage[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
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
    id: 2,
    title: "Etereo 1, Goa",
    category: "3D Isometrics",
    image: "/images/portfolio/15.jpg",
    description:
      "Premium residential project featuring contemporary design and luxury amenities in the heart of Goa with comprehensive isometric visualization.",
    videoUrl:
      "https://www.youtube.com/embed/BiCKdx0fDik?si=y4M05nZkVgJPmB9U&autoplay=1",
    hasGallery: true,
    galleryImages: [
      {
        url: "/images/services/3d-renders-isometrics/etereo/1.jpg",
        title: "Master Plan Isometric",
        description:
          "Complete site layout with residential blocks and amenities",
      },
      {
        url: "/images/services/3d-renders-isometrics/etereo/2.jpg",
        title: "Building Isometric View",
        description: "Detailed residential building with floor plan layouts",
      },
      {
        url: "/images/services/3d-renders-isometrics/etereo/3.jpg",
        title: "Complex Layout Isometric",
        description: "Multi-tower residential development with amenities",
      },
      {
        url: "/images/services/3d-renders-isometrics/etereo/4.jpg",
        title: "Complex Layout Isometric",
        description: "Multi-tower residential development with amenities",
      },
    ],
  },
  {
    id: 3,
    title: "Shree Radha Gopal Residency, Kosi",
    category: "3D Renders",
    image: "/images/services/3d-renders-isometrics/shree-radha/1.png",
    description:
      "Interactive VR tour of a residential plotted development with modern amenities and green spaces.",
    hasSlider: true,
    sliderImages: [
      {
        url: "/images/services/3d-renders-isometrics/shree-radha/1.png",
        title: "Luxury Residential Complex",
        description: "Modern residential development with premium amenities",
      },
      {
        url: "/images/services/3d-renders-isometrics/shree-radha/2.jpg",
        title: "Premium Interior Design",
        description: "Sophisticated interior spaces with modern finishes",
      },
      {
        url: "/images/services/3d-renders-isometrics/shree-radha/3.png",
        title: "High-Rise Development",
        description: "Urban residential tower with panoramic city views",
      },
      {
        url: "/images/services/3d-renders-isometrics/shree-radha/4.png",
        title: "Premium Villa Project",
        description: "Exclusive villa development with luxury amenities",
      },
      {
        url: "/images/services/3d-renders-isometrics/shree-radha/5.png",
        title: "Master Plan Visualization",
        description: "Complete residential development master planning",
      },
    ],
  },
];

const testimonials = [
  {
    name: "Akhil Gupta",
    position: "Managing Director",
    company: "Etereo Realty",
    content:
      "Alliance Media Labs handled everything for our latest project Etereo 1, Goa. They delivered a complete end-to-end real estate marketing solution for us, including high-quality 3D walkthroughs, isometric designs, teaser videos, reels, and 3D renders, with great attention to detail. The overall real estate visualisation and video marketing really helped us present the project more effectively to our buyers.",
  },
  {
    name: "Ajeet Mehta",
    position: "Director",
    company: "SRM Group",
    content:
      "For Shree Radha Gopal Residency, Kosi, Alliance Media Labs delivered architectural scale models, 3D walkthroughs, renders, a 360 interactive virtual tour, and a location AV exactly the way we had envisioned. Everything felt well thought-through, and the overall real estate visualisation and virtual tour execution came out clean and impactful.",
  },
];

export default function RendersIsometricsClient() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project_type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item);
    setCurrentSlideIndex(0);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setCurrentSlideIndex(0);
  };

  const nextSlide = () => {
    if (selectedItem?.sliderImages) {
      setCurrentSlideIndex((prev) =>
        prev === selectedItem.sliderImages!.length - 1 ? 0 : prev + 1
      );
    }
    if (selectedItem?.galleryImages) {
      setCurrentSlideIndex((prev) =>
        prev === selectedItem.galleryImages!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevSlide = () => {
    if (selectedItem?.sliderImages) {
      setCurrentSlideIndex((prev) =>
        prev === 0 ? selectedItem.sliderImages!.length - 1 : prev - 1
      );
    }
    if (selectedItem?.galleryImages) {
      setCurrentSlideIndex((prev) =>
        prev === 0 ? selectedItem.galleryImages!.length - 1 : prev - 1
      );
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "a557c293-5de3-4d54-8636-50b7d3c406c7",
          subject: `3D Renders Isometrics Inquiry - ${formData.name}`,
          from_name: formData.name,
          from_email: formData.email,
          message: `
New 3D Renders Isometrics Inquiry

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Project Type: ${formData.project_type || "Not specified"}

Project Details:
${formData.message || "No additional details provided"}
          `.trim(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setTimeout(() => {
          setFormData({ name: "", email: "", phone: "", project_type: "", message: "" });
          setSubmitStatus("idle");
        }, 3000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-black/70"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/services/3d-renders-isometrics/1.jpg')`,
            }}
          ></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mb-8">
                <i className="ri-cube-line text-3xl text-black"></i>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                3D Renders & Isometrics for Real Estate India
</h1>
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg">
                Photorealistic 3D visualizations and isometric illustrations
                that bring architectural concepts to life.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Get Quote
                </Link>
                <Link
                  href="/portfolio"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Professional 3D Visualization
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Transform architectural plans into stunning photorealistic
                renders and clear isometric illustrations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-image-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Photorealistic Renders
                </h3>
                <p className="text-gray-600">
                  Ultra-high quality 3D renders with realistic lighting,
                  materials, and environmental details.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-layout-grid-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Isometric Illustrations
                </h3>
                <p className="text-gray-600">
                  Clear, technical isometric views perfect for marketing
                  materials and project presentations.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-sun-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Dynamic Lighting
                </h3>
                <p className="text-gray-600">
                  Advanced lighting scenarios including day/night variations and
                  seasonal changes.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-palette-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Material Accuracy
                </h3>
                <p className="text-gray-600">
                  Precise material representation with accurate textures,
                  reflections, and surface properties.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-landscape-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Environmental Context
                </h3>
                <p className="text-gray-600">
                  Detailed surrounding environments including landscaping,
                  streetscapes, and neighborhood context.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-camera-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Multiple Angles
                </h3>
                <p className="text-gray-600">
                  Comprehensive view sets including exterior, interior, aerial,
                  and street-level perspectives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Our 3D Rendering & Isometrics Portfolio
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Explore our collection of stunning 3D renders and isometric
                illustrations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => handleItemClick(project)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                        <i
                          className={`${
                            project.hasGallery || project.hasSlider
                              ? "ri-image-line"
                              : "ri-play-fill"
                          } text-2xl text-black`}
                        ></i>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2">
                      {project.title}
                    </h3>
                    <p className="text-black/70">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal with Slider/Gallery */}
            {selectedItem && (
              <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl overflow-hidden max-w-5xl w-full relative max-h-[90vh] overflow-y-auto">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-20"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>

                  {selectedItem.hasSlider ? (
                    <div>
                      <div className="relative h-96 md:h-[500px] overflow-hidden">
                        <div
                          className="flex transition-transform duration-500 ease-in-out h-full"
                          style={{
                            transform: `translateX(-${currentSlideIndex * 100}%)`,
                          }}
                        >
                          {selectedItem.sliderImages?.map((slide, index) => (
                            <div
                              key={index}
                              className="w-full h-full flex-shrink-0 relative"
                            >
                              <img
                                src={slide.url}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>

                        {selectedItem.sliderImages &&
                          selectedItem.sliderImages.length > 1 && (
                            <>
                              <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-10"
                              >
                                <i className="ri-arrow-left-line text-xl"></i>
                              </button>
                              <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-10"
                              >
                                <i className="ri-arrow-right-line text-xl"></i>
                              </button>
                            </>
                          )}
                      </div>

                      {selectedItem.sliderImages &&
                        selectedItem.sliderImages.length > 1 && (
                          <div className="flex justify-center space-x-2 py-4 bg-gray-100">
                            {selectedItem.sliderImages.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                                  index === currentSlideIndex
                                    ? "bg-yellow-400"
                                    : "bg-gray-400"
                                }`}
                              ></button>
                            ))}
                          </div>
                        )}

                      <div className="p-8">
                        <div className="text-yellow-400 text-sm font-medium mb-2">
                          {selectedItem.category}
                        </div>
                        <h3 className="text-3xl font-bold text-black mb-4">
                          {selectedItem.title}
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                          {selectedItem.description}
                        </p>
                      </div>
                    </div>
                  ) : selectedItem.hasGallery ? (
                    <div>
                      <div className="relative h-96 md:h-[500px] overflow-hidden">
                        <div
                          className="flex transition-transform duration-500 ease-in-out h-full"
                          style={{
                            transform: `translateX(-${currentSlideIndex * 100}%)`,
                          }}
                        >
                          {selectedItem.galleryImages?.map((image, index) => (
                            <div
                              key={index}
                              className="w-full h-full flex-shrink-0 relative"
                            >
                              <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-contain bg-gray-100"
                              />
                            </div>
                          ))}
                        </div>

                        {selectedItem.galleryImages &&
                          selectedItem.galleryImages.length > 1 && (
                            <>
                              <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-10"
                              >
                                <i className="ri-arrow-left-line text-xl"></i>
                              </button>
                              <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-10"
                              >
                                <i className="ri-arrow-right-line text-xl"></i>
                              </button>
                            </>
                          )}
                      </div>

                      {selectedItem.galleryImages &&
                        selectedItem.galleryImages.length > 1 && (
                          <div className="flex justify-center space-x-2 py-4 bg-gray-100">
                            {selectedItem.galleryImages.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                                  index === currentSlideIndex
                                    ? "bg-yellow-400"
                                    : "bg-gray-400"
                                }`}
                              ></button>
                            ))}
                          </div>
                        )}

                      <div className="p-8">
                        <div className="text-yellow-400 text-sm font-medium mb-2">
                          {selectedItem.category}
                        </div>
                        <h3 className="text-3xl font-bold text-black mb-4">
                          {selectedItem.title}
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                          {selectedItem.description}
                        </p>
                        {selectedItem.galleryImages &&
                          selectedItem.galleryImages[currentSlideIndex] && (
                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold text-black mb-2">
                                {selectedItem.galleryImages[currentSlideIndex].title}
                              </h4>
                              <p className="text-gray-600 text-sm">
                                {selectedItem.galleryImages[currentSlideIndex].description}
                              </p>
                            </div>
                          )}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            )}

            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Rendering Services Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Rendering Services
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-building-line text-2xl text-black"></i>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Exterior Renders
                </h3>
                <p className="text-gray-600 mb-6">
                  Stunning exterior visualizations showcasing architectural
                  design, materials, and environmental context.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Photorealistic building facades</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Landscaping and surroundings</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Multiple viewing angles</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-home-4-line text-2xl text-black"></i>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Interior Renders
                </h3>
                <p className="text-gray-600 mb-6">
                  Detailed interior visualizations highlighting space planning,
                  materials, and design aesthetics.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Realistic lighting and shadows</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Furniture and decor placement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Material and texture accuracy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
<section className="py-24 bg-gray-50">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
        Client Testimonials
      </h2>
      <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {/* User Info */}
          <div className="mb-6">
            <h4 className="font-bold text-black text-lg">
              {testimonial.name}
            </h4>
            <p className="text-sm text-gray-600">
              {testimonial.position}
            </p>
            <p className="text-sm text-yellow-600 font-medium">
              {testimonial.company}
            </p>
          </div>

          {/* Stars */}
          <div className="flex text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="ri-star-fill text-sm"></i>
            ))}
          </div>

          {/* Content */}
          <p className="text-gray-700 leading-relaxed italic">
            &ldquo;{testimonial.content}&rdquo;
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Types of 3D Rendering Services */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Types of 3D Rendering & Visualisation Services</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From a single 3D house rendering to full township visualisation packages — we cover every output a real estate developer needs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "ri-home-4-line",
                  title: "3D House Rendering",
                  desc: "Photorealistic exterior renders of residential villas, bungalows, and independent houses. The most searched 3D rendering service in India — showing facade materials, landscaping, and natural lighting at their best.",
                },
                {
                  icon: "ri-layout-grid-line",
                  title: "3D Floor Plan Design",
                  desc: "Detailed 3D floor plans and 3D floor plan designer services that go beyond basic 2D layouts — showing furniture placement, room proportions, and traffic flow in an easy-to-understand top-down 3D view.",
                },
                {
                  icon: "ri-building-2-line",
                  title: "Architectural 3D Rendering",
                  desc: "Full exterior and interior architectural renders for mid-rise and high-rise residential, commercial, and mixed-use projects. We are one of India's most trusted architectural rendering companies for real estate marketing.",
                },
                {
                  icon: "ri-palette-line",
                  title: "3D Interior Visualisation",
                  desc: "Photorealistic interior 3D visualisation for living rooms, kitchens, bedrooms, and commercial spaces. Accurate material representation, custom furniture staging, and mood lighting for brochures and digital campaigns.",
                },
                {
                  icon: "ri-map-2-line",
                  title: "Isometric & Aerial Views",
                  desc: "Bird's-eye isometric renders of entire townships, podium layouts, and amenity zones. These 3D rendering of house plans at a master-plan scale are essential for township launch brochures and hoarding creatives.",
                },
                {
                  icon: "ri-cpu-line",
                  title: "AI-Assisted 3D Rendering",
                  desc: "We combine traditional 3D rendering with AI 3D rendering acceleration tools to deliver faster turnarounds on large projects without compromising photorealistic quality — ideal for launches with tight marketing deadlines.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                    <i className={`${item.icon} text-2xl text-black`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison: Photography vs 3D Render */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Why 3D Renders Beat Photography</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">For under-construction projects, photography is impossible. 3D renders let you market before the first brick is laid.</p>
            </div>
            <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">
              <div className="grid grid-cols-3 bg-black text-white">
                <div className="p-6 font-bold text-lg">Feature</div>
                <div className="p-6 font-bold text-lg text-center border-l border-gray-700">Photography</div>
                <div className="p-6 font-bold text-lg text-center border-l border-gray-700 bg-yellow-400 text-black">3D Rendering</div>
              </div>
              {[
                ["Available before construction", "✗ Not possible", "✓ Yes"],
                ["Show multiple design options", "✗ Fixed shot", "✓ Unlimited variants"],
                ["Control lighting & weather", "✗ Depends on conditions", "✓ Perfect every time"],
                ["Suitable for RERA submission", "✗ Limited", "✓ Widely accepted"],
                ["Modify post-delivery", "✗ Requires reshoot", "✓ Easy updates"],
                ["Used in hoardings & brochures", "✓ Yes", "✓ Yes — higher quality"],
              ].map(([feature, photo, render], i) => (
                <div key={i} className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <div className="p-5 font-medium text-gray-800 border-t border-gray-200">{feature}</div>
                  <div className="p-5 text-center text-gray-600 border-t border-l border-gray-200">{photo}</div>
                  <div className="p-5 text-center font-semibold text-black border-t border-l border-gray-200 bg-yellow-50">{render}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Frequently Asked Questions</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: "How long does a 3D render take to produce?", a: "A standard exterior render takes 5–7 working days. Interior renders take 7–10 days. Large sets (10+ views) or isometric master plans are scoped individually. Rush delivery is available." },
                { q: "How many revision rounds are included?", a: "2 revision rounds are included in every project. The first after the grey-structure review, the second after final texturing and lighting. Additional revisions are billed separately." },
                { q: "Can renders be used for RERA registration?", a: "Yes. Our renders are accepted for RERA project marketing submissions across Maharashtra, Karnataka, Delhi NCR, and other states. We include RERA disclaimer overlays as required." },
                { q: "What file formats do you deliver?", a: "We deliver high-resolution JPG/PNG files (300 DPI print-ready) and web-optimised versions. PSD layered files and video turntables are available on request." },
                { q: "What is the difference between a 3D render and a 3D isometric?", a: "A 3D render is a photorealistic still image of a building or interior — like a photograph. A 3D isometric is an aerial bird's-eye illustration showing the entire site or township layout, used for master plan marketing." },
                { q: "How do I choose between different 3D rendering companies in India?", a: "Look for 3D rendering companies with a dedicated real estate portfolio — not generic product or film studios. Key criteria: real estate project experience, in-house modelling team, RERA-ready output, and transparent revision policies. Alliance Media Labs specialises exclusively in real estate and architectural rendering services, making us the preferred choice for India's top developers." },
                { q: "How much do 3D renders cost in India?", a: "Pricing depends on the number of views, complexity of the structure, and output requirements. Contact our experts for a tailored quote." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-black mb-3">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl p-12 shadow-lg">
              <h2 className="text-3xl font-bold text-black mb-4">Pricing for 3D Renders & Isometrics</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-gray-600 mb-8">Pricing varies based on the number of views, level of detail, and delivery timeline. Contact our experts for a custom quote tailored to your project.</p>
              <a href="/contact" className="inline-flex items-center bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                <i className="ri-phone-line mr-2"></i>Contact Our Experts
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 bg-yellow-400">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Get Your 3D Rendering Quote
                </h2>
                <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
                <p className="text-lg text-black/80">
                  Ready to visualize your project? Contact us for a custom
                  quote.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <form
                  id="3d-renders-inquiry-form"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Render Type
                      </label>
                      <select
                        name="project_type"
                        value={formData.project_type}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      >
                        <option value="">Select render type</option>
                        <option value="exterior">Exterior Renders</option>
                        <option value="interior">Interior Renders</option>
                        <option value="isometric">Isometric Illustrations</option>
                        <option value="aerial">Aerial Views</option>
                        <option value="360-panorama">360° Panoramas</option>
                        <option value="animation">3D Animation</option>
                        <option value="comprehensive">Comprehensive Package</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm resize-none"
                      placeholder="Tell us about your project, number of renders needed, timeline, and any specific requirements..."
                    ></textarea>
                    <div className="text-right text-xs text-gray-500 mt-1">
                      {formData.message.length}/500 characters
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-400 text-black py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center space-x-2">
                        <i className="ri-loader-4-line animate-spin"></i>
                        <span>Sending.....</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center space-x-2">
                        <span>Send Inquiry via Email</span>
                        <i className="ri-mail-send-line"></i>
                      </span>
                    )}
                  </button>

                  {submitStatus === "success" && (
                    <div className="text-green-600 text-center font-medium">
                      Thank you! We&apos;ll get back to you with a custom quote
                      within 24 hours.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="text-red-600 text-center font-medium">
                      Sorry, there was an error. Please email us directly at
                      info@alliancemedialabs.com
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bring Your Vision to Life
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform architectural plans into stunning photorealistic
              visualizations that sell your vision.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer"
              >
                Start Your Project
              </Link>
              <Link
                href="/#services"
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors whitespace-nowrap cursor-pointer"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
