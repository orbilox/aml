"use client";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

type GalleryImage = { url: string; title: string; description: string };
type PortfolioItem = {
  id: number; title: string; category: string; image: string; description: string;
  hasGallery?: boolean; galleryImages?: GalleryImage[];
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1, title: "Centonic, Pune", category: "Scale Models",
    image: "/images/services/architectural-scale-models/1.jpg",
    description: "Precision architectural scale model showcasing Centonic's contemporary residential development in Pune, featuring detailed landscaping, modern tower structures, and comprehensive amenity planning.",
    hasGallery: true,
    galleryImages: [
      { url: "/images/services/architectural-scale-models/centonic/1.jpeg", title: "Centonic Main Tower Complex", description: "Detailed scale model of the primary residential towers with surrounding landscape elements and pedestrian pathways" },
      { url: "/images/services/architectural-scale-models/centonic/2.jpeg", title: "Amenity Zone Layout", description: "Miniature representation of recreational facilities including clubhouse, pool area, and community spaces" },
      { url: "/images/services/architectural-scale-models/centonic/3.jpeg", title: "Tower Elevation Detail", description: "Close-up view showcasing architectural facade details, balcony arrangements, and building proportion accuracy" },
      { url: "/images/services/architectural-scale-models/centonic/4.jpeg", title: "Master Plan Overview", description: "Complete aerial perspective of the Centonic development showing site planning and spatial organization" },
    ],
  },
  {
    id: 2, title: "Indian Railways", category: "Scale Models",
    image: "/images/services/architectural-scale-models/2.jpg",
    description: "Intricate scale model for Indian Railways infrastructure project, demonstrating station layouts, platform configurations, and surrounding urban integration with meticulous attention to operational details.",
    hasGallery: true,
    galleryImages: [
      { url: "/images/services/architectural-scale-models/railways/1.jpeg", title: "Railway Station Complex", description: "Comprehensive model showing station building architecture, platform arrangements, and passenger circulation areas" },
      { url: "/images/services/architectural-scale-models/railways/2.jpeg", title: "Platform Infrastructure", description: "Detailed representation of railway tracks, platform edges, overhead structures, and signaling systems" },
      { url: "/images/services/architectural-scale-models/railways/3.jpeg", title: "Terminal Building Facade", description: "Architectural elevation model highlighting the station's main entrance, roof design, and structural elements" },
      { url: "/images/services/architectural-scale-models/railways/4.jpeg", title: "Transit Integration Hub", description: "Scale model depicting connectivity between railway platforms and surrounding transportation networks" },
      { url: "/images/services/architectural-scale-models/railways/5.jpeg", title: "Station Master Plan", description: "Bird's eye view of the complete railway infrastructure showcasing track layouts and station positioning" },
    ],
  },
  {
    id: 3, title: "Hiranandani Meadows, Thane", category: "Scale Models",
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
    id: 4, title: "Venkatesh Skydale, Pune", category: "Scale Models",
    image: "/images/services/architectural-scale-models/4.jpg",
    description: "Sophisticated scale model of Venkatesh Skydale residential project in Pune, highlighting the twin-tower configuration, podium-level amenities, and contextual urban setting with accurate proportions.",
    hasGallery: true,
    galleryImages: [
      { url: "/images/services/architectural-scale-models/venkatesh/1.jpeg", title: "Twin Tower Configuration", description: "Architectural model showing both residential towers with connecting podium and vertical circulation cores" },
      { url: "/images/services/architectural-scale-models/venkatesh/2.jpeg", title: "Podium Level Amenities", description: "Ground and podium floor model featuring entrance lobbies, parking areas, and resident facilities" },
    ],
  },
  {
    id: 5, title: "Spree City, Sonipat", category: "Scale Models",
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
    id: 6, title: "Skyline Realty, Hyderabad", category: "Scale Models",
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
    id: 7, title: "Island City Centre, Mumbai", category: "Scale Models",
    image: "/images/services/architectural-scale-models/7.jpg",
    description: "Premium architectural scale model of Island City Centre in Mumbai, depicting a landmark mixed-use development with commercial towers, retail podiums, and waterfront promenade integration.",
    hasGallery: true,
    galleryImages: [
      { url: "/images/services/architectural-scale-models/island/1.jpeg", title: "Commercial Tower Complex", description: "Multi-tower model showing office buildings, retail podium, and multi-level parking structures" },
      { url: "/images/services/architectural-scale-models/island/2.jpeg", title: "Waterfront Promenade", description: "Detailed model of public realm areas with pedestrian walkways, seating zones, and waterfront landscaping" },
    ],
  },
];

const testimonials = [
  {
    name: "Ajeet Mehta",
    position: "Director",
    company: "SRM Group",
    content:
      "For Shree Radha Gopal Residency, Kosi, Alliance Media Labs delivered architectural scale models, 3D walkthroughs, renders, a 360 interactive virtual tour, and a location AV exactly the way we had envisioned. Everything felt well thought-through, and the overall real estate visualisation and virtual tour execution came out clean and impactful.",
  },
  {
    name: "Saurabh Dalvi",
    position: "COO",
    company: "Shree Venkatesh Buildcon",
    content:
      "Detailing is the key in architectural scale models, and Alliance Media Labs delivered that precision perfectly. Their team was very creative and responsive throughout the project. Highly recommendable.",
  },
  {
    name: "Rajesh Channa",
    position: "Marketing Head",
    company: "Spree City",
    content:
      "Alliance Media Labs did a great job delivering a precise miniature model for our recent plotted development project in Sonipat. They ensured everything was well placed and even provided post-delivery support. Kudos to the team.",
  },
];
export default function ArchitecturalScaleModelsClient() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", project_type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleItemClick = (item: PortfolioItem) => { setSelectedItem(item); setCurrentSlideIndex(0); };
  const closeModal = () => { setSelectedItem(null); setCurrentSlideIndex(0); };
  const nextSlide = () => {
    if (selectedItem?.galleryImages) setCurrentSlideIndex((p) => p === selectedItem.galleryImages!.length - 1 ? 0 : p + 1);
  };
  const prevSlide = () => {
    if (selectedItem?.galleryImages) setCurrentSlideIndex((p) => p === 0 ? selectedItem.galleryImages!.length - 1 : p - 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          subject: `Architectural Scale Models Inquiry - ${formData.name}`,
          from_name: formData.name,
          from_email: formData.email,
          message: `New Architectural Scale Models Inquiry\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\nProject Type: ${formData.project_type || "Not specified"}\n\nProject Details:\n${formData.message || "No additional details provided"}`,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus("success");
        setTimeout(() => { setFormData({ name: "", email: "", phone: "", project_type: "", message: "" }); setSubmitStatus("idle"); }, 3000);
      } else throw new Error("Form submission failed");
    } catch {
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
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/services/architectural-scale-models/1.jpg')` }}></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mb-8">
                <i className="ri-building-2-line text-3xl text-black"></i>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">Architectural Scale Models India</h1>
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg">
                Detailed video presentations of physical and digital architectural scale models with professional cinematography.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer">Get Quote</Link>
                <Link href="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer">View Portfolio</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Professional Scale Model Craftsmanship</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">Handcrafted architectural scale models with exceptional detail and precision for presentations and exhibitions</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "ri-hammer-line", title: "Precision Craftsmanship", desc: "Expert artisans create detailed scale models using premium materials and traditional model-making techniques." },
                { icon: "ri-ruler-2-line", title: "Accurate Scaling", desc: "Precise measurements and proportions ensuring every detail matches your architectural drawings and specifications." },
                { icon: "ri-palette-line", title: "Premium Materials", desc: "High-quality materials including acrylic, wood, metal, and specialized modeling compounds for realistic finishes." },
                { icon: "ri-lightbulb-line", title: "LED Lighting Integration", desc: "Custom LED lighting systems to illuminate interiors, exteriors, and landscape features for dramatic presentations." },
                { icon: "ri-landscape-line", title: "Landscape Details", desc: "Detailed landscaping including trees, gardens, pathways, and environmental context to complete the presentation." },
                { icon: "ri-shield-check-line", title: "Protective Display Cases", desc: "Custom acrylic display cases with professional mounting to protect and showcase your scale model investment." },
              ].map((f) => (
                <div key={f.title} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                    <i className={`${f.icon} text-2xl text-black`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">{f.title}</h3>
                  <p className="text-gray-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Architectural Scale Model Portfolio</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Explore our collection of architectural scale models, real estate scale models, and 3D miniature model presentations created for leading developers and infrastructure projects across India.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((project) => (
                <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={() => handleItemClick(project)}>
                  <div className="relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                        <i className="ri-image-line text-2xl text-black"></i>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">{project.category}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                    <p className="text-black/70">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/portfolio" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer">View Our Portfolio</Link>
            </div>
          </div>

          {/* Gallery Modal */}
          {selectedItem && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl overflow-hidden max-w-5xl w-full relative max-h-[90vh] overflow-y-auto">
                <button onClick={closeModal} className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-20">
                  <i className="ri-close-line text-xl"></i>
                </button>
                {selectedItem.hasGallery && selectedItem.galleryImages && (
                  <div>
                    <div className="relative h-96 md:h-[500px] overflow-hidden">
                      <div
                        className="flex transition-transform duration-500 ease-in-out h-full"
                        style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
                      >
                        {selectedItem.galleryImages.map((image, index) => (
                          <div key={index} className="w-full h-full flex-shrink-0 relative">
                            <img src={image.url} alt={image.title} className="w-full h-full object-contain bg-gray-100" />
                          </div>
                        ))}
                      </div>
                      {selectedItem.galleryImages.length > 1 && (
                        <>
                          <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-10">
                            <i className="ri-arrow-left-line text-xl"></i>
                          </button>
                          <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-10">
                            <i className="ri-arrow-right-line text-xl"></i>
                          </button>
                        </>
                      )}
                    </div>
                    {selectedItem.galleryImages.length > 1 && (
                      <div className="flex justify-center space-x-2 py-4 bg-gray-100">
                        {selectedItem.galleryImages.map((_, index) => (
                          <button key={index} onClick={() => setCurrentSlideIndex(index)} className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${index === currentSlideIndex ? "bg-yellow-400" : "bg-gray-400"}`}></button>
                        ))}
                      </div>
                    )}
                    <div className="p-8">
                      <div className="text-yellow-400 text-sm font-medium mb-2">{selectedItem.category}</div>
                      <h3 className="text-3xl font-bold text-black mb-4">{selectedItem.title}</h3>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">{selectedItem.description}</p>
                      {selectedItem.galleryImages[currentSlideIndex] && (
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-black mb-2">{selectedItem.galleryImages[currentSlideIndex].title}</h4>
                          <p className="text-gray-600 text-sm">{selectedItem.galleryImages[currentSlideIndex].description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </section>

        {/* Scale Model Applications */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Scale Model Applications</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-presentation-line text-2xl text-black"></i>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Presentation Models</h3>
                <p className="text-gray-600 mb-6">High-quality display models for client presentations, marketing centers, and public exhibitions with premium finishes and detailed craftsmanship.</p>
                <ul className="space-y-2 text-gray-600">
                  {["Premium material finishes", "Integrated LED lighting systems", "Custom display cases included"].map((item) => (
                    <li key={item} className="flex items-center space-x-2"><i className="ri-check-line text-yellow-400"></i><span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-tools-line text-2xl text-black"></i>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Working Study Models</h3>
                <p className="text-gray-600 mb-6">Functional models for design development, spatial analysis, and architectural studies with modular components and testing capabilities.</p>
                <ul className="space-y-2 text-gray-600">
                  {["Removable building sections", "Modular design components", "Design iteration flexibility"].map((item) => (
                    <li key={item} className="flex items-center space-x-2"><i className="ri-check-line text-yellow-400"></i><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Scale Model Making Process</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">A structured, detail-driven approach to deliver precise and high-quality architectural scale models.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { num: "1", title: "Concept & Design Planning", desc: "Review architectural drawings and references. Define model purpose. Finalize detailing level and delivery timeline." },
                { num: "2", title: "Scale Selection & Material Planning", desc: "Select the appropriate scale for the model. Choose materials like acrylic, wood, metal, or resin. Plan durability and display requirements." },
                { num: "3", title: "Precision Model Making", desc: "Accurate measurements and proportional execution. Professional scale model builders ensure precision. Handcrafted and tool-assisted construction." },
                { num: "4", title: "Detailing, Lighting & Finishing", desc: "Landscape, textures, and surface detailing. Optional LED lighting integration. Color matching and finish enhancement." },
                { num: "5", title: "Quality Check & Delivery", desc: "Accuracy and finish inspection. Secure packaging for safe transport. Ready-to-display model delivery." },
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-black">{step.num}</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Why Choose Our Scale Model Making Company</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">We combine craftsmanship, technology, and real estate expertise to deliver world-class architectural scale models.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { title: "Expert Scale Model Makers & Builders", desc: "Our team of professional scale model makers and scale model builders specialises in architectural scale models and precision miniature model making. Every model is crafted with strict attention to accuracy, proportion, and detailing to represent the architect's vision perfectly." },
                { title: "High-Realism Miniature Models", desc: "We create high-realism miniature models using premium materials, advanced 3D model making techniques, and fine finishing. From textures and landscaping to elevations and lighting, our models deliver a lifelike visual experience that boosts client confidence." },
                { title: "Real Estate Scale Model Expertise", desc: "With deep expertise in real estate scale models, we help developers present projects effectively at sales offices, exhibitions, and investor meetings. Our models simplify complex layouts, enhance buyer understanding, and support faster decision-making and higher conversions." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="text-yellow-400 text-3xl font-bold">•</span>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
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

        {/* Materials Showcase */}
<section className="py-24 bg-black">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-4">Materials We Work With</h2>
      <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
      <p className="text-gray-400 max-w-2xl mx-auto">Every material is chosen for its durability, visual accuracy, and ability to represent your design intent at scale.</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { icon: "ri-settings-3-line", title: "ABS Plastic", desc: "Precision CNC-cut ABS for crisp architectural details and structural elements." },
        { icon: "ri-water-flash-line", title: "Acrylic & Glass", desc: "Clear and frosted acrylic for glazing, water features, and feature facades." },
        { icon: "ri-lightbulb-flash-line", title: "LED Lighting", desc: "Integrated LED systems for unit illumination, landscape lighting, and lobby displays." },
        { icon: "ri-tree-line", title: "Laser-Cut Wood", desc: "MDF and balsa wood for landscape elements, podium levels, and organic forms." },
        { icon: "ri-paint-fill", title: "Powder Coating", desc: "Durable powder-coated finishes matching your brand colour palette precisely." },
        { icon: "ri-map-pin-line", title: "Landscaping Elements", desc: "Handcrafted trees, water bodies, roads, and site boundaries for complete site context." },
      ].map((item) => (
        <div key={item.title} className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-yellow-400 transition-colors">
          <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-4">
            <i className={`${item.icon} text-xl text-black`}></i>
          </div>
          <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
          <p className="text-gray-400 text-sm">{item.desc}</p>
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
        { q: "What materials are used in architectural scale models?", a: "We use ABS plastic, acrylic, MDF, balsa wood, powder-coated metal, and integrated LED lighting depending on the model type and display requirements. All materials are selected for durability and visual accuracy." },
        { q: "How long does it take to build a scale model?", a: "A standard residential project model (1:200 scale) takes 4–6 weeks. Large township or commercial models take 8–12 weeks. Rush timelines are possible for specific requirements." },
        { q: "How is the model packaged and delivered?", a: "Models are custom-packaged in foam-lined wooden crates for safe transport. We handle delivery across India and internationally. White-glove installation at your sales office is available." },
        { q: "Can the model be updated if the design changes?", a: "Yes. We offer modification services for existing models — adding new towers, updating landscaping, or changing unit configurations without rebuilding the entire model." },
        { q: "What scale is typically used for real estate models?", a: "1:100 for individual villas and apartments, 1:200 for mid-size residential projects, and 1:500 to 1:1000 for large townships. We recommend the best scale based on your display space and level of detail required." },
        { q: "How much does an architectural scale model cost?", a: "Pricing depends on the scale, size, complexity, materials, and LED integration. Contact our experts for a detailed quote based on your project drawings." },
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
      <h2 className="text-3xl font-bold text-black mb-4">Scale Model Pricing</h2>
      <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
      <p className="text-gray-600 mb-8">Every scale model is handcrafted to your specifications. Pricing depends on scale, size, materials, LED integration, and delivery requirements. Contact our experts for a custom quote.</p>
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
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Get Your Scale Model Quote</h2>
                <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
                <p className="text-lg text-black/80">Ready to create impressive scale models? Contact us for a custom quote.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm" placeholder="Your phone number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Model Type</label>
                      <select name="project_type" value={formData.project_type} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm">
                        <option value="">Select model type</option>
                        <option value="physical">Physical Scale Model</option>
                        <option value="digital">Digital 3D Model</option>
                        <option value="both">Both Physical &amp; Digital</option>
                        <option value="presentation">Presentation Model</option>
                        <option value="working">Working Model</option>
                        <option value="conceptual">Conceptual Model</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} maxLength={500} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm resize-none" placeholder="Tell us about your scale model requirements, preferred scale, materials, timeline, and intended use..."></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-yellow-400 text-black py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <><i className="ri-loader-4-line animate-spin"></i><span>Sending...</span></>
                    ) : (
                      <><span>Send Inquiry via Email</span><i className="ri-mail-send-line"></i></>
                    )}
                  </button>
                  {submitStatus === "success" && <p className="text-green-600 text-center font-medium">Thank you! We&apos;ll get back to you within 24 hours.</p>}
                  {submitStatus === "error" && <p className="text-red-600 text-center font-medium">Something went wrong. Please try again.</p>}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
