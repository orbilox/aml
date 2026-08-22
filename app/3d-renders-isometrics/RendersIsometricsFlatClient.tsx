"use client";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

interface SliderImage {
  url: string;
  title: string;
  description: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  hasSlider?: boolean;
  sliderImages?: SliderImage[];
  hasGallery?: boolean;
  galleryImages?: SliderImage[];
}

const renderTypes = [
  {
    icon: "ri-building-line",
    title: "3D House Rendering & Architectural Visualization",
    desc: "Photorealistic exterior and interior 3D house rendering paired with full 3D architectural visualization for individual units, sample flats, and full towers — delivered as part of our 3D architectural rendering services.",
  },
  {
    icon: "ri-layout-grid-line",
    title: "3D Floor Plan Design",
    desc: "Angled top-down 3D floor plan design with furniture, finishes, and material callouts — the most-requested asset for brochures and listings.",
  },
  {
    icon: "ri-image-2-line",
    title: "3D Renders",
    desc: "High-resolution 3D renders for hoardings, brochures, digital ads, and sales-office display — our most versatile rendering service.",
  },
  {
    icon: "ri-shape-line",
    title: "3D Isometric Views & 3D Visualisation",
    desc: "Isometric renders and 3D visualisation showing full-site layouts, unit distribution, and master plans in a single, easy-to-read visual.",
  },
  {
    icon: "ri-door-line",
    title: "3D Rendering Interior Design",
    desc: "Interior-focused 3D rendering interior design for sample flats, showcasing furniture, lighting, and material finishes room by room.",
  },
  {
    icon: "ri-magic-line",
    title: "AI 3D Rendering",
    desc: "AI-assisted 3D rendering for faster texturing, lighting studies, and revision cycles — refined by our in-house artists before delivery.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Drawing Review",
    desc: "Share your CAD, Revit, or SketchUp files along with reference material and the purpose of the render.",
  },
  {
    step: "02",
    title: "Scope & Quotation",
    desc: "We recommend the right render type — 3D house rendering, floor plan, or isometric — with a written quote and timeline.",
  },
  {
    step: "03",
    title: "3D Build & Render",
    desc: "Our team models, textures, and lights every scene for photorealistic accuracy, using AI 3D rendering tools to speed up iteration.",
  },
  {
    step: "04",
    title: "Review & Delivery",
    desc: "You review draft renders, request revisions, and receive final high-resolution files ready for print and digital use.",
  },
];

const renderCategories = [
  {
    icon: "ri-building-line",
    title: "Exterior Renders",
    desc: "Photorealistic architectural rendering and 3D house rendering services showcasing building facades, landscaping, lighting, and environmental context for real estate marketing.",
    items: [
      "Photorealistic building facades",
      "Landscaping and surroundings",
      "Multiple viewing angles",
    ],
  },
  {
    icon: "ri-home-4-line",
    title: "Interior Renders",
    desc: "Premium 3D rendering interior design services with realistic furniture layouts, material detailing, mood lighting, and architectural visualisation for luxury interiors.",
    items: [
      "Realistic lighting and shadows",
      "Furniture and decor placement",
      "Material and texture accuracy",
    ],
  },
];

const comparisonRows: [string, string, string][] = [
  ["Available before construction", "✗ Not possible", "✓ Yes"],
  ["Show multiple design options", "✗ Fixed shot", "✓ Unlimited variants"],
  [
    "Control lighting & weather",
    "✗ Depends on conditions",
    "✓ Perfect every time",
  ],
  ["Suitable for RERA submission", "✗ Limited", "✓ Widely accepted"],
  ["Modify post-delivery", "✗ Requires reshoot", "✓ Easy updates"],
  ["Used in hoardings & brochures", "✓ Yes", "✓ Yes — higher quality"],
];

export default function RendersIsometricsFlatClient() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    firm: "",
    renderType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const portfolioProjects: Project[] = [
    {
      id: 1,
      title: "Multiple Projects",
      category: "3D Rendering",
      image: "/images/portfolio/4.png",
      description:
        "Comprehensive collection of 3D still renders showcasing various residential developments with detailed architectural visualization.",
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
        "Photorealistic 3D renders of a residential plotted development with modern amenities and green spaces.",
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

  const faqs = [
    {
      q: "What does an architectural rendering company actually deliver?",
      a: "An architectural rendering company converts your CAD, Revit, or SketchUp drawings into photorealistic 3D renders, 3D floor plan visuals, and isometric views used for sales, marketing, and design presentations.",
    },
    {
      q: "What is the difference between 3D house rendering and a 3D floor plan design?",
      a: "3D house rendering produces a photorealistic exterior or interior view of a building, while a 3D floor plan design shows the unit layout from an angled top-down perspective with furniture and finishes visualised.",
    },
    {
      q: "Do you use AI 3D rendering to speed up delivery?",
      a: "Yes. We use AI 3D rendering tools to accelerate texturing, lighting studies, and revision cycles, while every final render is reviewed and refined by our in-house artists before delivery.",
    },
    {
      q: "How do I choose between 3D rendering companies in India?",
      a: "Look for one of the architectural rendering companies with an in-house team, a real estate-specific portfolio, and a track record of accurate scale and lighting. Ask to see full-resolution 3D renders from a completed project first.",
    },
    {
      q: "Do you offer architectural visualization services in India for both residential and commercial projects?",
      a: "Yes. Our architectural visualization services in India cover residential, commercial, and mixed-use developments — from 3D architectural visualization of a single unit to full 3D floor plan designer work across an entire master plan.",
    },
    {
      q: "Can you produce 3D rendering of house plans before construction begins?",
      a: "Yes. Our 3D rendering services work directly from architectural drawings, so we can produce accurate 3D house rendering and floor plans months before ground-breaking.",
    },
    {
      q: "Do you offer 3D rendering services near me across India?",
      a: "Yes. Our 3D rendering services are delivered remotely to developers across Mumbai, Delhi NCR, Bangalore, Pune, Hyderabad, and all major Indian cities.",
    },
  ];

  const handleItemClick = (item: Project) => {
    setSelectedProject(item);
    setCurrentSlideIndex(0);
  };
  const closeModal = () => {
    setSelectedProject(null);
    setCurrentSlideIndex(0);
  };
  const activeImages =
    selectedProject?.sliderImages || selectedProject?.galleryImages;
  const nextSlide = () => {
    if (activeImages)
      setCurrentSlideIndex((p) => (p === activeImages.length - 1 ? 0 : p + 1));
  };
  const prevSlide = () => {
    if (activeImages)
      setCurrentSlideIndex((p) => (p === 0 ? activeImages.length - 1 : p - 1));
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "a557c293-5de3-4d54-8636-50b7d3c406c7",
          subject: "New Lead — 3D Renders & Isometrics Page",
          from_name: formData.name,
          ...formData,
        }),
      });
      if (res.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          firm: "",
          renderType: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 min-h-[85vh] flex items-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/services/3d-renders-isometrics/1.jpg')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mb-8">
                  <i className="ri-box-3-line text-3xl text-black"></i>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                  3D House <span className="text-yellow-400">Rendering</span>
                </h1>
                <p className="text-xl md:text-2xl text-white mb-4 leading-relaxed drop-shadow-lg">
                  A complete architectural visualization services partner — 3D
                  renders, 3D floor plan design, and isometric views for real
                  estate developers across India.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed drop-shadow-lg">
                  From a single 3D render to a full architectural rendering
                  services rollout, our team delivers with AI-assisted speed and
                  in-house precision.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap"
                  >
                    Get Quote
                  </a>
                  <a
                    href="#portfolio"
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap"
                  >
                    View Portfolio
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl w-full">
                {submitStatus === "success" ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-check-line text-2xl text-green-500" />
                    </div>
                    <h3 className="text-lg font-bold text-black mb-1">Thank You!</h3>
                    <p className="text-gray-600 text-sm">
                      We&apos;ve received your enquiry. Our team will respond within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-black mb-1">Get a Free Quote</h3>
                    <p className="text-gray-500 text-sm mb-5">
                      Share your drawings and we&apos;ll respond within 24 hours.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Name *</label>
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
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name</label>
                          <input
                            type="text"
                            name="firm"
                            value={formData.firm}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                            placeholder="Your company name"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Render Type</label>
                        <select
                          name="renderType"
                          value={formData.renderType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        >
                          <option value="">Select type</option>
                          <option value="3D House Rendering">3D House Rendering</option>
                          <option value="3D Floor Plan Design">3D Floor Plan Design</option>
                          <option value="3D Isometric View">3D Isometric View</option>
                          <option value="3D Rendering Interior Design">3D Rendering Interior Design</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Project Details</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm resize-none"
                          placeholder="Project name, deadline, and any specific requirements..."
                        ></textarea>
                      </div>
                      {submitStatus === "error" && (
                        <p className="text-red-600 text-sm">Something went wrong. Please try again or WhatsApp us directly.</p>
                      )}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-yellow-400 text-black py-3.5 rounded-lg font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <i className="ri-loader-4-line animate-spin"></i>
                            Sending...
                          </>
                        ) : (
                          <>
                            Get My Free Quote
                            <i className="ri-send-plane-line"></i>
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose / Features Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                3D Rendering Services Built for Real Estate
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                As one of the architectural rendering companies developers
                return to project after project, we deliver 3D house rendering,
                architectural visualisation, and 3D architectural rendering
                services under one roof — with a dedicated 3D floor plan
                designer on every project.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "ri-pencil-ruler-2-line",
                  title: "In-House 3D Rendering Team",
                  desc: "Our 3D rendering services work directly from CAD, Revit, and SketchUp files — no outsourcing at any stage of the architectural visualization process.",
                },
                {
                  icon: "ri-time-line",
                  title: "Fast, Deadline-Aware Delivery",
                  desc: "3D renders and 3D floor plan design delivered on schedule for launches, brochures, and hoarding print deadlines.",
                },
                {
                  icon: "ri-magic-line",
                  title: "AI 3D Rendering, Human Finishing",
                  desc: "AI 3D rendering speeds up texturing and lighting studies; our artists refine every scene for photorealistic accuracy.",
                },
                {
                  icon: "ri-hd-line",
                  title: "High-Resolution Output",
                  desc: "Every 3D render is delivered print-ready at 4K+ resolution, suitable for hoardings, brochures, and digital ads.",
                },
                {
                  icon: "ri-shape-line",
                  title: "Isometric & Floor Plan Expertise",
                  desc: "3D floor plan designer skills combined with full-site isometric renders for master plans and unit-level marketing.",
                },
                {
                  icon: "ri-global-line",
                  title: "Architectural Visualization Services Pan-India",
                  desc: "We deliver architectural visualization services in India remotely — no site visit required for most rendering work.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                    <i className={`${f.icon} text-2xl text-black`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    {f.title}
                  </h3>
                  <p className="text-gray-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Render Types Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                6 Types of 3D Rendering We Deliver
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderTypes.map((mt) => (
                <div
                  key={mt.title}
                  className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                    <i className={`${mt.icon} text-2xl text-black`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {mt.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {mt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                3D Renders &amp; Isometrics Portfolio
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                A sample of the 3D house rendering, 3D renders, and isometric
                visualisation delivered by our team for developers across India.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioProjects.map((project) => (
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
            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap inline-flex"
              >
                View Full Portfolio
              </Link>
            </div>

            {/* Modal with Slider/Gallery */}
            {selectedProject && (
              <div
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
                onClick={closeModal}
              >
                <div
                  className="bg-white rounded-2xl overflow-hidden max-w-5xl w-full relative max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-20"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                  {activeImages && (
                    <div>
                      <div className="relative h-96 md:h-[500px] overflow-hidden">
                        <div
                          className="flex transition-transform duration-500 ease-in-out h-full"
                          style={{
                            transform: `translateX(-${currentSlideIndex * 100}%)`,
                          }}
                        >
                          {activeImages.map((img, index) => (
                            <div
                              key={index}
                              className="w-full h-full flex-shrink-0 relative"
                            >
                              <img
                                src={img.url}
                                alt={img.title}
                                className={`w-full h-full ${selectedProject.hasGallery ? "object-contain bg-gray-100" : "object-cover"}`}
                              />
                            </div>
                          ))}
                        </div>
                        {activeImages.length > 1 && (
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
                      {activeImages.length > 1 && (
                        <div className="flex justify-center space-x-2 py-4 bg-gray-100">
                          {activeImages.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentSlideIndex(index)}
                              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${index === currentSlideIndex ? "bg-yellow-400" : "bg-gray-400"}`}
                            ></button>
                          ))}
                        </div>
                      )}
                      <div className="p-8">
                        <div className="text-yellow-500 text-sm font-medium mb-2">
                          {selectedProject.category}
                        </div>
                        <h3 className="text-3xl font-bold text-black mb-4">
                          {selectedProject.title}
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                          {selectedProject.description}
                        </p>
                        {activeImages[currentSlideIndex] && (
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h4 className="font-semibold text-black mb-2">
                              {activeImages[currentSlideIndex].title}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {activeImages[currentSlideIndex].description}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Rendering Categories Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Exterior &amp; Interior 3D Rendering Services
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {renderCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                    <i className={`${cat.icon} text-2xl text-black`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{cat.desc}</p>
                  <ul className="space-y-2 text-gray-600">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center space-x-2">
                        <i className="ri-check-line text-yellow-400"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Our 4-Step Process
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-black">
                      {step.step.replace(/^0/, "")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison: Photography vs 3D Render */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Why 3D Renders Beat Photography
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                For under-construction projects, photography is impossible. 3D
                renders let you market before the first brick is laid.
              </p>
            </div>
            <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">
              <div className="grid grid-cols-3 bg-black text-white">
                <div className="p-6 font-bold text-lg">Feature</div>
                <div className="p-6 font-bold text-lg text-center border-l border-gray-700">
                  Photography
                </div>
                <div className="p-6 font-bold text-lg text-center border-l border-gray-700 bg-yellow-400 text-black">
                  3D Rendering
                </div>
              </div>
              {comparisonRows.map(([feature, photo, render], i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <div className="p-5 font-medium text-gray-800 border-t border-gray-200">
                    {feature}
                  </div>
                  <div className="p-5 text-center text-gray-600 border-t border-l border-gray-200">
                    {photo}
                  </div>
                  <div className="p-5 text-center font-semibold text-black border-t border-l border-gray-200 bg-yellow-50">
                    {render}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architectural Rendering Company Intro */}
        <section className="py-24 bg-black text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Your In-House 3D Rendering Partner
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                As one of the architectural rendering companies real estate
                developers work with repeatedly, we handle 3D house rendering,
                3D floor plan design, isometric visualisation, and full
                architectural visualization services under one roof — with no
                outsourcing at any stage.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Our scale model makers, 3D architects, and rendering artists
                work from the same drawing set, so your 3D renders, floor plans,
                and isometric views stay consistent across every marketing
                touchpoint — from hoardings to sales-office screens.
              </p>
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
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
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
                Get a Custom 3D Rendering Quote
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-gray-600 mb-8">
                Pricing varies based on the number of views, level of detail,
                and delivery timeline. Contact our experts for a custom quote
                tailored to your project.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
              >
                <i className="ri-phone-line mr-2"></i>Talk to Our Team
              </a>
            </div>
          </div>
        </section>

        {/* Related Services & Blogs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                  <i className="ri-stack-line text-yellow-500" />
                  Related Services
                </h3>
                <div className="grid gap-4">
                  {[
                    {
                      href: "/services/3d-renders-isometrics",
                      title: "3D Renders & Isometrics",
                      desc: "Full-service architectural rendering for real estate marketing.",
                      icon: "ri-image-line",
                    },
                    {
                      href: "/3d-walkthrough-videos",
                      title: "3D Architectural Walkthrough Services",
                      desc: "Cinematic 3D walkthrough videos built from your renders.",
                      icon: "ri-video-line",
                    },
                    {
                      href: "/virtual-reality-tours",
                      title: "Virtual Reality Tours",
                      desc: "Interactive VR tours and 360 virtual photography.",
                      icon: "ri-eye-line",
                    },
                  ].map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:border-yellow-400/50 hover:bg-yellow-400/5 transition-all group"
                    >
                      <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                        <i className={`${s.icon} text-yellow-500 text-lg`} />
                      </div>
                      <div>
                        <div className="font-semibold text-black text-sm group-hover:text-yellow-600 transition-colors">
                          {s.title}
                        </div>
                        <div className="text-gray-500 text-xs mt-0.5">
                          {s.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                  <i className="ri-article-line text-yellow-500" />
                  Related Articles
                </h3>
                <div className="grid gap-4">
                  {[
                    {
                      href: "/blog/3d-house-rendering-guide-india",
                      title:
                        "3D House Rendering in India: The Complete Guide for Real Estate Developers (2026)",
                      tag: "Rendering",
                    },
                    {
                      href: "/blog/premium-real-estate-marketing-differentiation-india",
                      title:
                        "Why Your Premium Project Looks Like Every Other Listing Online",
                      tag: "Marketing",
                    },
                    {
                      href: "/blog/real-estate-marketing-video-types-india",
                      title:
                        "7 Types of Real Estate Marketing Videos Every Indian Developer Should Use",
                      tag: "Marketing",
                    },
                  ].map((b) => (
                    <Link
                      key={b.href}
                      href={b.href}
                      className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:border-yellow-400/50 hover:bg-yellow-400/5 transition-all group"
                    >
                      <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                        <i className="ri-article-line text-yellow-500 text-lg" />
                      </div>
                      <div>
                        <span className="text-xs text-yellow-600 font-semibold">
                          {b.tag}
                        </span>
                        <div className="font-semibold text-black text-sm group-hover:text-yellow-600 transition-colors mt-0.5">
                          {b.title}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-24 bg-yellow-400">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Talk to Our 3D Rendering Team
                </h2>
                <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
                <p className="text-lg text-black/80">
                  Share your drawings — we&apos;ll recommend the right mix of 3D
                  renders, floor plans, and isometric views, with a quote within
                  24 hours.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                {submitStatus === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-check-line text-3xl text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600">
                      We&apos;ve received your enquiry. Our team will respond
                      within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                          placeholder="you@company.com"
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
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="firm"
                          value={formData.firm}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Render Type
                      </label>
                      <select
                        name="renderType"
                        value={formData.renderType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      >
                        <option value="">Select type</option>
                        <option value="3D House Rendering">
                          3D House Rendering
                        </option>
                        <option value="3D Floor Plan Design">
                          3D Floor Plan Design
                        </option>
                        <option value="3D Isometric View">
                          3D Isometric View
                        </option>
                        <option value="3D Rendering Interior Design">
                          3D Rendering Interior Design
                        </option>
                      </select>
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm resize-none"
                        placeholder="Project name, deadline, and any specific requirements..."
                      ></textarea>
                    </div>
                    {submitStatus === "error" && (
                      <p className="text-red-600 text-sm">
                        Something went wrong. Please try again or WhatsApp us
                        directly.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-yellow-400 text-black py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="ri-send-plane-line" />
                          Get My Free Quote
                        </>
                      )}
                    </button>
                    <p className="text-center text-gray-500 text-xs">
                      We respond within 24 hours. Your information is
                      confidential. Or{" "}
                      <a
                        href="https://wa.me/919999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 font-medium hover:underline"
                      >
                        WhatsApp us directly
                      </a>
                      .
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Visualise Your Next Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              From a single hoarding render to a full launch campaign of 3D
              renders, floor plans, and isometric views — our team is ready to
              start.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap"
              >
                Start Your Project
              </a>
              <a
                href="#portfolio"
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors whitespace-nowrap"
              >
                View Our Work
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
