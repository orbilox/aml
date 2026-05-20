"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

type GalleryImage = { url: string; title: string; description: string };

type PortfolioItem = {
  id: number;
  category: string;
  title: string;
  image: string;
  description: string;
  hasGallery?: boolean;
  galleryImages?: GalleryImage[];
  isPortrait?: boolean;
};

const features = [
  {
    icon: "ri-cube-line",
    title: "Technical Precision",
    description:
      "Mathematically accurate isometric projections ensuring correct proportions and spatial relationships throughout.",
  },
  {
    icon: "ri-layout-grid-line",
    title: "Comprehensive Layouts",
    description:
      "Complete site plans and master layouts showing all buildings, amenities, landscaping, and infrastructure.",
  },
  {
    icon: "ri-building-2-line",
    title: "Multi-Level Visualization",
    description:
      "Detailed representation of multiple floors and levels within buildings, showing internal layouts and structures.",
  },
  {
    icon: "ri-palette-line",
    title: "Professional Styling",
    description:
      "High-quality rendering with professional color schemes, textures, and visual presentation standards.",
  },
  {
    icon: "ri-zoom-in-line",
    title: "Detail Integration",
    description:
      "Incorporation of fine details like furniture, vegetation, vehicles, and human figures for context.",
  },
  {
    icon: "ri-file-chart-line",
    title: "Technical Documentation",
    description:
      "Comprehensive technical illustrations suitable for architectural documentation and regulatory submissions.",
  },
];

const benefits = [
  "Clear technical communication with buyers and stakeholders",
  "Comprehensive view of entire project layout and planning",
  "Professional documentation for regulatory approvals",
  "Effective marketing material for luxury developments",
  "Detailed showcase of amenities and infrastructure",
  "Versatile format for print and digital applications",
];

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Etereo 1, Goa",
    category: "3D Isometrics",
    image: "/images/portfolio/15.jpg",
    description:
      "Premium residential project featuring contemporary design and luxury amenities in the heart of Goa with comprehensive isometric visualization.",
    // videoUrl:
    //   "https://www.youtube.com/embed/BiCKdx0fDik?si=y4M05nZkVgJPmB9U&autoplay=1",
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
];

export default function IsometricsClient() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setCurrentGalleryIndex(0);
  };

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item);
    setCurrentGalleryIndex(0);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setCurrentGalleryIndex(0);
  };

  const nextSlide = () => {
    if (selectedItem?.galleryImages) {
      setCurrentGalleryIndex((prev) =>
        prev === selectedItem.galleryImages!.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const prevSlide = () => {
    if (selectedItem?.galleryImages) {
      setCurrentGalleryIndex((prev) =>
        prev === 0 ? selectedItem.galleryImages!.length - 1 : prev - 1,
      );
    }
  };

  const goToSlide = (index: number) => {
    setCurrentGalleryIndex(index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20isometric%20architectural%20illustration%20workspace%2C%20technical%20drawings%2C%20detailed%203D%20isometric%20projections%2C%20architectural%20design%20studio%2C%20professional%20visualization&width=1920&height=1080&seq=isometrics-hero-bg&orientation=landscape')`,
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              3D Isometric Views for Real Estate India
            </h1>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Professional isometric illustrations providing comprehensive
              technical views of real estate developments with precise accuracy
              and stunning visual appeal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer"
              >
                Start Your Project
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">
              3D Isometric Features
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technical precision combined with artistic excellence for
              comprehensive architectural visualizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-yellow-400 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${feature.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Why Choose 3D Isometrics?
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
              <p className="text-xl text-gray-600 mb-8">
                Isometric illustrations provide a unique perspective that
                communicates complex architectural information clearly and
                effectively to all audiences.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <i className="ri-check-line text-yellow-400 text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20architect%20working%20on%20detailed%20isometric%20illustration%2C%20technical%20drawing%20workspace%2C%20computer%20screens%20showing%203D%20isometric%20views%2C%20professional%20design%20studio%20environment&width=600&height=500&seq=isometrics-benefits&orientation=landscape"
                alt="3D Isometric Design Process"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">
              Isometric Portfolio
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our 3D isometric illustrations for real estate and
              architectural projects
            </p>
          </div>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-900 mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <i className="ri-zoom-in-line text-4xl mb-2"></i>
                      <p className="text-sm">View Details</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div> */}

          {/* Portfolio Grid */}
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
                      <i className="ri-image-line text-2xl text-black"></i>
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

          {/* Gallery Modal */}
          {selectedItem && selectedItem.hasGallery && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl overflow-hidden max-w-5xl w-full relative max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-20"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>

                {/* Gallery Slider */}
                <div className="relative h-96 md:h-[500px] overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{
                      transform: `translateX(-${currentGalleryIndex * 100}%)`,
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

                  {/* Previous Button */}
                  {selectedItem.galleryImages &&
                    selectedItem.galleryImages.length > 1 && (
                      <>
                        <button
                          onClick={prevSlide}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-10"
                        >
                          <i className="ri-arrow-left-line text-xl"></i>
                        </button>

                        {/* Next Button */}
                        <button
                          onClick={nextSlide}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-10"
                        >
                          <i className="ri-arrow-right-line text-xl"></i>
                        </button>
                      </>
                    )}
                </div>

                {/* Dots */}
                {selectedItem.galleryImages &&
                  selectedItem.galleryImages.length > 1 && (
                    <div className="flex justify-center space-x-2 py-4 bg-gray-100">
                      {selectedItem.galleryImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                            index === currentGalleryIndex
                              ? "bg-yellow-400"
                              : "bg-gray-400"
                          }`}
                        ></button>
                      ))}
                    </div>
                  )}

                {/* Content */}
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
                    selectedItem.galleryImages[currentGalleryIndex] && (
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-black mb-2">
                          {
                            selectedItem.galleryImages[currentGalleryIndex]
                              .title
                          }
                        </h4>

                        <p className="text-gray-600 text-sm">
                          {
                            selectedItem.galleryImages[currentGalleryIndex]
                              .description
                          }
                        </p>
                      </div>
                    )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Where 3D Isometrics Make the Most Impact
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "ri-flag-2-line",
                title: "Township Launches",
                desc: "Show the entire master plan — roads, towers, amenities, and green spaces — in one compelling visual.",
              },
              {
                icon: "ri-megaphone-line",
                title: "Hoarding Creatives",
                desc: "Large-format isometrics on highway hoardings that stop traffic and communicate scale instantly.",
              },
              {
                icon: "ri-book-open-line",
                title: "Brochure Centrepiece",
                desc: "A full-bleed isometric across the brochure spread — the most-shared page in any real estate booklet.",
              },
              {
                icon: "ri-advertisement-line",
                title: "Social & Digital Ads",
                desc: "Animated isometric flyovers drive 4–5x better engagement than static images on Instagram and YouTube.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-yellow-400 transition-colors"
              >
                <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${item.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: 2D Master Plan vs 3D Isometric */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              2D Master Plan vs 3D Isometric View
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flat plans tell. 3D isometrics sell.
            </p>
          </div>
          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">
            <div className="grid grid-cols-3 bg-black text-white">
              <div className="p-6 font-bold text-lg">Feature</div>
              <div className="p-6 font-bold text-lg text-center border-l border-gray-700">
                2D Master Plan
              </div>
              <div className="p-6 font-bold text-lg text-center border-l border-gray-700 bg-yellow-400 text-black">
                3D Isometric View
              </div>
            </div>
            {[
              [
                "Buyer comprehension",
                "Requires expertise to read",
                "Instantly understood by anyone",
              ],
              [
                "Shows building height & massing",
                "✗ Flat view only",
                "✓ Full 3D depth visible",
              ],
              [
                "Suitable for hoardings & ads",
                "✗ Too technical",
                "✓ Visually impactful",
              ],
              [
                "Differentiates from competition",
                "✗ Generic",
                "✓ Premium & distinctive",
              ],
              [
                "Can be animated",
                "✗ Limited",
                "✓ Flyover animations available",
              ],
              [
                "RERA map substitute",
                "✓ Yes",
                "✓ Yes — with better buyer appeal",
              ],
            ].map(([feature, plan2d, iso3d], i) => (
              <div
                key={i}
                className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <div className="p-5 font-medium text-gray-800 border-t border-gray-200">
                  {feature}
                </div>
                <div className="p-5 text-center text-gray-600 border-t border-l border-gray-200">
                  {plan2d}
                </div>
                <div className="p-5 text-center font-semibold text-black border-t border-l border-gray-200 bg-yellow-50">
                  {iso3d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What is the difference between a 3D isometric and a master plan?",
                a: "A master plan is a flat 2D site layout showing roads, towers, and zones. A 3D isometric is an elevated perspective rendering of the same site in full 3D — showing building heights, landscaping, and design in a way any buyer can understand instantly.",
              },
              {
                q: "Can a 3D isometric be animated?",
                a: "Yes. We produce animated isometric flyovers — the camera slowly rotates around the master plan, revealing towers, amenities, and the site in full. These perform exceptionally well as social ads and launch films.",
              },
              {
                q: "How long does a 3D isometric take to produce?",
                a: "A static isometric illustration takes 10–15 working days. An animated flyover takes 3–4 weeks depending on site complexity and animation length.",
              },
              {
                q: "What inputs do you need to start?",
                a: "We work from master plan drawings, AutoCAD files, or even rough site layouts. Elevation drawings and a list of tower names/amenities help us produce the most accurate result.",
              },
              {
                q: "Can the isometric be used for RERA submissions?",
                a: "Yes. 3D isometric views are widely used as marketing materials for RERA project registrations across India.",
              },
              {
                q: "How much does a 3D isometric illustration cost?",
                a: "Pricing depends on site size, number of towers, level of landscaping detail, and whether animation is required. Contact our experts for a custom quote.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow"
              >
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
            <h2 className="text-3xl font-bold text-black mb-4">
              3D Isometric Pricing
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-600 mb-8">
              Pricing varies based on site size, complexity, level of detail,
              and animation requirements. Contact our experts for a tailored
              quote.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
            >
              <i className="ri-phone-line mr-2"></i>Contact Our Experts
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Technical Visualizations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us create precise and stunning isometric illustrations that
            communicate your project's vision with technical accuracy.
          </p>
          <Link
            href="/contact"
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Modal */}
      {/* {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/80 text-white rounded-full flex items-center justify-center hover:bg-black transition-colors"
              >
                <i className="ri-close-line text-xl"></i>
              </button>

              {selectedItem.hasGallery && selectedItem.galleryImages ? (
                <div className={selectedItem.isPortrait ? "flex gap-0" : ""}>
                  <div className={selectedItem.isPortrait ? "w-1/2" : ""}>
                    <img
                      src={selectedItem.galleryImages[currentGalleryIndex].url}
                      alt={
                        selectedItem.galleryImages[currentGalleryIndex].title
                      }
                      className="w-full h-auto object-contain bg-gray-100 rounded-t-2xl"
                    />
                  </div>
                  {selectedItem.isPortrait && (
                    <div className="w-1/2 p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        {selectedItem.galleryImages[currentGalleryIndex].title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {
                          selectedItem.galleryImages[currentGalleryIndex]
                            .description
                        }
                      </p>
                      <div className="flex gap-2">
                        {selectedItem.galleryImages.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentGalleryIndex(i)}
                            className={`w-3 h-3 rounded-full transition-colors ${i === currentGalleryIndex ? "bg-yellow-400" : "bg-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-auto object-cover rounded-t-2xl"
                />
              )}
            </div>

            {!selectedItem.isPortrait && (
              <div className="p-8">
                <h3 className="text-3xl font-bold text-black mb-4">
                  {selectedItem.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  {selectedItem.description}
                </p>
                {selectedItem.hasGallery && selectedItem.galleryImages && (
                  <>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      {selectedItem.galleryImages[currentGalleryIndex].title}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      {
                        selectedItem.galleryImages[currentGalleryIndex]
                          .description
                      }
                    </p>
                    <div className="flex gap-2">
                      {selectedItem.galleryImages.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentGalleryIndex(i)}
                          className={`w-3 h-3 rounded-full transition-colors ${i === currentGalleryIndex ? "bg-yellow-400" : "bg-gray-300"}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )} */}

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
