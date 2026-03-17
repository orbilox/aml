"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

type GalleryImage = { url: string; title: string; description: string };

type PortfolioItem = {
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
    title: "Etereo 1, Goa",
    image:
      "https://readdy.ai/api/search-image?query=3D%20isometric%20illustration%20of%20luxury%20beachside%20resort%20development%20in%20Goa%2C%20showing%20villa%20clusters%2C%20pools%2C%20tropical%20landscaping%2C%20beach%20access%2C%20and%20amenity%20buildings%2C%20professional%20architectural%20isometric%20view&width=400&height=600&seq=isometric-portfolio-1&orientation=portrait",
    description:
      "Detailed isometric illustration of a luxury beachside resort showcasing villa clusters, pools, and tropical landscaping",
    hasGallery: true,
    isPortrait: true,
    galleryImages: [
      {
        url: "https://readdy.ai/api/search-image?query=3D%20isometric%20luxury%20resort%20villa%20development%20aerial%20view%2C%20Goa%20beachside%2C%20detailed%20architectural%20illustration%2C%20tropical%20landscaping%2C%20swimming%20pools%2C%20professional%20rendering&width=400&height=600&seq=etereo-gallery-1&orientation=portrait",
        title: "Etereo Master Plan View",
        description:
          "Complete isometric overview of the Etereo 1 development showing all villa clusters and amenities",
      },
      {
        url: "https://readdy.ai/api/search-image?query=Isometric%20luxury%20villa%20resort%20pool%20area%20Goa%2C%20tropical%20garden%2C%20detailed%203D%20illustration%2C%20professional%20architectural%20visualization&width=400&height=600&seq=etereo-gallery-2&orientation=portrait",
        title: "Amenity Zone Detail",
        description:
          "Detailed view of recreational areas including pools, gardens, and community spaces",
      },
      {
        url: "https://readdy.ai/api/search-image?query=3D%20isometric%20beachside%20luxury%20resort%20section%20view%2C%20villa%20interiors%2C%20Goa%20development%2C%20professional%20architectural%20isometric%20illustration&width=400&height=600&seq=etereo-gallery-3&orientation=portrait",
        title: "Villa Cluster Layout",
        description:
          "Individual villa cluster arrangement showing private spaces and access pathways",
      },
    ],
  },
  {
    title: "Commercial Tower Layout",
    image:
      "https://readdy.ai/api/search-image?query=3D%20isometric%20illustration%20of%20modern%20commercial%20office%20tower%2C%20showing%20floor%20layouts%2C%20lobby%2C%20parking%2C%20and%20surrounding%20landscape%2C%20professional%20architectural%20visualization&width=600&height=400&seq=isometric-portfolio-2&orientation=landscape",
    description:
      "Technical isometric layout of a modern commercial tower showing floor configurations and amenities",
  },
  {
    title: "Township Master Plan",
    image:
      "https://readdy.ai/api/search-image?query=3D%20isometric%20township%20master%20plan%20showing%20residential%20clusters%2C%20commercial%20zones%2C%20parks%2C%20roads%2C%20and%20infrastructure%2C%20large%20scale%20development%20visualization%2C%20professional%20architectural%20illustration&width=600&height=400&seq=isometric-portfolio-3&orientation=landscape",
    description:
      "Comprehensive township master plan isometric showing zones, infrastructure, and community facilities",
  },
];

export default function IsometricsClient() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setCurrentGalleryIndex(0);
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
              3D Isometrics
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      {selectedItem && (
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
                      alt={selectedItem.galleryImages[currentGalleryIndex].title}
                      className="w-full h-auto object-contain bg-gray-100 rounded-t-2xl"
                    />
                  </div>
                  {selectedItem.isPortrait && (
                    <div className="w-1/2 p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        {selectedItem.galleryImages[currentGalleryIndex].title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {selectedItem.galleryImages[currentGalleryIndex].description}
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
                      {selectedItem.galleryImages[currentGalleryIndex].description}
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
      )}

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
