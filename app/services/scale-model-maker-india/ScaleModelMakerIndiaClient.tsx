"use client";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

type GalleryImage = { url: string; title: string; description: string };
type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  city: string;
  hasGallery?: boolean;
  galleryImages?: GalleryImage[];
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "The Dualis, Shapoorji Pallonji",
    category: "Premium Residential",
    city: "Mumbai",
    image: "/images/services/architectural-scale-models/shapoorji/01.png",
    description:
      "A premium, space-efficient scale model solution for Shapoorji Pallonji's luxury residential launch — detailed tower structure, landscape elements, and modern residential planning.",
    hasGallery: true,
    galleryImages: [
      {
        url: "/images/services/architectural-scale-models/shapoorji/01.png",
        title: "The Dualis — Aerial View",
        description: "Full master plan view of the Shapoorji Pallonji luxury residential development with detailed landscaping and tower placement.",
      },
      {
        url: "/images/services/architectural-scale-models/shapoorji/02.jpeg",
        title: "Residential Tower Detail",
        description: "Close-up showing facade articulation, balcony design, and floor-level differentiation across the residential towers.",
      },
      {
        url: "/images/services/architectural-scale-models/shapoorji/03.jpeg",
        title: "Master Planning Layout",
        description: "Comprehensive model showing site organisation, road network, open spaces, and amenity zones.",
      },
      {
        url: "/images/services/architectural-scale-models/shapoorji/04.jpeg",
        title: "Premium Presentation View",
        description: "Sales office display perspective — crafted for investor presentations and high-ticket buyer walkthroughs.",
      },
    ],
  },
  {
    id: 2,
    title: "Indian Railways Infrastructure",
    category: "Government / Infrastructure",
    city: "Pan-India",
    image: "/images/services/architectural-scale-models/2.jpg",
    description:
      "Precision infrastructure model for Indian Railways — station layouts, platform configurations, and urban integration with operational accuracy.",
    hasGallery: true,
    galleryImages: [
      { url: "/images/services/architectural-scale-models/railways/1.jpeg", title: "Railway Station Complex", description: "Station building, platform arrangements, and passenger circulation at scale." },
      { url: "/images/services/architectural-scale-models/railways/2.jpeg", title: "Platform Infrastructure", description: "Tracks, overhead structures, and signalling systems represented at precision scale." },
      { url: "/images/services/architectural-scale-models/railways/3.jpeg", title: "Terminal Building Facade", description: "Main entrance, roof design, and structural elements of the station building." },
      { url: "/images/services/architectural-scale-models/railways/4.jpeg", title: "Transit Integration Hub", description: "Connectivity between railway platforms and surrounding transportation networks." },
      { url: "/images/services/architectural-scale-models/railways/5.jpeg", title: "Station Master Plan", description: "Bird's eye overview of complete railway infrastructure and track layout." },
    ],
  },
  {
    id: 3,
    title: "Hiranandani Meadows, Thane",
    category: "Township Master Plan",
    city: "Mumbai / Thane",
    image: "/images/services/architectural-scale-models/3.jpg",
    description:
      "Large-scale township model for Hiranandani Meadows capturing multi-storey clusters, green corridors, and integrated community facilities.",
    hasGallery: true,
    galleryImages: [
      { url: "/images/services/architectural-scale-models/hiranandani/1.jpeg", title: "Township Clusters", description: "Residential tower arrangement showing neighbourhood layout and density distribution." },
      { url: "/images/services/architectural-scale-models/hiranandani/2.jpeg", title: "Central Gardens", description: "Landscaped green spaces with walking paths, water features, and recreational zones." },
      { url: "/images/services/architectural-scale-models/hiranandani/3.jpeg", title: "Tower Detail", description: "Individual tower model showcasing facade treatment and floor-to-floor heights." },
      { url: "/images/services/architectural-scale-models/hiranandani/4.jpeg", title: "Community Centre", description: "Clubhouse, sports areas, and social gathering spaces at scale." },
      { url: "/images/services/architectural-scale-models/hiranandani/5.jpeg", title: "Full Township Layout", description: "Complete site model with road networks, building clusters, and open space distribution." },
    ],
  },
  {
    id: 4,
    title: "Venkatesh Skydale, Pune",
    category: "Residential High-Rise",
    city: "Pune",
    image: "/images/services/architectural-scale-models/4.jpg",
    description:
      "Twin-tower residential model for Venkatesh Skydale — podium-level amenities, contextual urban setting, and accurate proportions for the Pune launch.",
    hasGallery: true,
    galleryImages: [
      { url: "/images/services/architectural-scale-models/venkatesh/1.jpeg", title: "Twin Tower Configuration", description: "Both towers with connecting podium and vertical circulation cores." },
      { url: "/images/services/architectural-scale-models/venkatesh/2.jpeg", title: "Podium Amenities", description: "Ground floor lobbies, parking, and resident facility zones." },
    ],
  },
  {
    id: 5,
    title: "Spree City, Sonipat",
    category: "Mixed-Use Township",
    city: "Delhi NCR",
    image: "/images/services/architectural-scale-models/5.jpg",
    description:
      "Large mixed-use master plan model for Spree City — residential zones, commercial areas, and extensive landscaping across multiple phases.",
    hasGallery: true,
    galleryImages: [
      { url: "/images/services/architectural-scale-models/spree/1.jpeg", title: "Mixed-Use Core", description: "Integration of residential, retail, and commercial components at centre." },
      { url: "/images/services/architectural-scale-models/spree/2.jpeg", title: "Residential Clusters", description: "Apartment buildings, row houses, and supporting infrastructure by phase." },
      { url: "/images/services/architectural-scale-models/spree/3.jpeg", title: "Commercial Zone", description: "Business and retail district with office buildings and shopping complexes." },
      { url: "/images/services/architectural-scale-models/spree/4.jpeg", title: "Green Corridor", description: "Interconnected parks, tree-lined avenues, and pedestrian pathways." },
      { url: "/images/services/architectural-scale-models/spree/5.jpeg", title: "Complete Master Plan", description: "All development phases, infrastructure, and land use distribution in one model." },
    ],
  },
  {
    id: 6,
    title: "Skyline Realty, Hyderabad",
    category: "Luxury Residential",
    city: "Hyderabad",
    image: "/images/services/architectural-scale-models/6.jpg",
    description:
      "Premium high-rise model for Skyline Realty — rooftop amenities, contemporary facade articulation, and sophisticated urban detailing for a Hyderabad launch.",
    hasGallery: true,
    galleryImages: [
      { url: "/images/services/architectural-scale-models/skyline/1.jpeg", title: "Tower Elevation", description: "High-rise facade with detailed balcony projections and cladding." },
      { url: "/images/services/architectural-scale-models/skyline/2.jpeg", title: "Rooftop Amenity Deck", description: "Pool, gym, and sky lounge at top-floor amenity level." },
      { url: "/images/services/architectural-scale-models/skyline/3.jpeg", title: "Entrance Plaza", description: "Grand entrance, drop-off zone, and landscaped arrival court." },
      { url: "/images/services/architectural-scale-models/skyline/4.jpeg", title: "Site Context", description: "Full development in relation to surrounding roads and urban fabric." },
    ],
  },
  {
    id: 7,
    title: "Island City Centre, Mumbai",
    category: "Commercial Mixed-Use",
    city: "Mumbai",
    image: "/images/services/architectural-scale-models/7.jpg",
    description:
      "Landmark commercial scale model for Island City Centre — towers, retail podiums, and waterfront promenade integration for Mumbai's business district.",
    hasGallery: true,
    galleryImages: [
      { url: "/images/services/architectural-scale-models/island/1.jpeg", title: "Tower Complex", description: "Office buildings, retail podium, and multi-level parking structures." },
      { url: "/images/services/architectural-scale-models/island/2.jpeg", title: "Waterfront Promenade", description: "Pedestrian walkways, seating zones, and waterfront landscaping at scale." },
    ],
  },
  {
    id: 8,
    title: "Centonic, Pune",
    category: "Contemporary Residential",
    city: "Pune",
    image: "/images/services/architectural-scale-models/1.jpg",
    description:
      "Precision residential model for Centonic — modern tower structures, detailed landscaping, and comprehensive amenity planning for a Pune developer launch.",
    hasGallery: true,
    galleryImages: [
      { url: "/images/services/architectural-scale-models/centonic/1.jpeg", title: "Main Tower Complex", description: "Primary residential towers with surrounding landscape and pedestrian pathways." },
      { url: "/images/services/architectural-scale-models/centonic/2.jpeg", title: "Amenity Zone", description: "Clubhouse, pool, and community spaces in miniature." },
      { url: "/images/services/architectural-scale-models/centonic/3.jpeg", title: "Facade Detail", description: "Balcony arrangements and facade accuracy close-up." },
      { url: "/images/services/architectural-scale-models/centonic/4.jpeg", title: "Master Plan Overview", description: "Full site planning and spatial organisation from above." },
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

const stats = [
  { value: "200+", label: "Scale Models Delivered" },
  { value: "15+", label: "Years of Craftsmanship" },
  { value: "48hrs", label: "Quote Turnaround" },
  { value: "Pan-India", label: "Delivery & Installation" },
];

export default function ScaleModelMakerIndiaClient() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project_type: "",
    city: "",
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
    if (selectedItem?.galleryImages)
      setCurrentSlideIndex((p) =>
        p === selectedItem.galleryImages!.length - 1 ? 0 : p + 1
      );
  };
  const prevSlide = () => {
    if (selectedItem?.galleryImages)
      setCurrentSlideIndex((p) =>
        p === 0 ? selectedItem.galleryImages!.length - 1 : p - 1
      );
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
          subject: `Scale Model Maker India Inquiry — ${formData.name}`,
          from_name: formData.name,
          from_email: formData.email,
          message: `New Scale Model Maker India Inquiry\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\nProject Type: ${formData.project_type || "Not specified"}\nCity: ${formData.city || "Not specified"}\n\nProject Details:\n${formData.message || "No details provided"}`,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus("success");
        setTimeout(() => {
          setFormData({ name: "", email: "", phone: "", project_type: "", city: "", message: "" });
          setSubmitStatus("idle");
        }, 3000);
      } else throw new Error("Submission failed");
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

        {/* ── HERO ── */}
        <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-black/65"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/images/services/architectural-scale-models/shapoorji/01.png')` }}
          ></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mb-8">
                <i className="ri-building-2-line text-3xl text-black"></i>
              </div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
                <span>/</span>
                <span className="text-gray-300">Services</span>
                <span>/</span>
                <span className="text-yellow-400">Scale Model Maker India</span>
              </nav>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
                India&apos;s Expert<br />
                <span className="text-yellow-400">Scale Model Maker</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-4 leading-relaxed drop-shadow-lg">
                Professional architectural model maker trusted by India&apos;s top real estate developers,
                infrastructure companies, and government agencies.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Precision miniature model making with CNC fabrication, LED integration, hand-craft finishing,
                and white-glove pan-India delivery — from Mumbai to Hyderabad.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#quote-form"
                  className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
                >
                  Get Quote in 24 Hours
                </Link>
                <Link
                  href="/portfolio"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section className="py-10 bg-yellow-400">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-black">{s.value}</p>
                  <p className="text-sm font-medium text-black/70 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY WE'RE INDIA'S BEST SCALE MODEL MAKER ── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                What Makes Us India&apos;s Leading Architectural Model Maker
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                As a full-service scale model maker in India, we control every stage of production
                in-house — digital modelling to delivery. No outsourcing. No quality gaps.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "ri-cpu-line",
                  title: "CNC & Laser Precision",
                  desc: "Every component is fabricated from your CAD or Revit files using CNC routers and laser cutters — eliminating hand-measurement error and delivering architect-grade dimensional accuracy.",
                },
                {
                  icon: "ri-hand-heart-line",
                  title: "Master Hand-Craft Finishing",
                  desc: "Digital fabrication alone doesn't make a great model. Our finishing team hand-paints facades, hand-applies landscaping, and hand-wires LED systems with the precision no machine can replicate.",
                },
                {
                  icon: "ri-lightbulb-flash-line",
                  title: "LED Lighting Expertise",
                  desc: "Phase-wise building illumination, fibre-optic landscape lighting, and zoned control panels. Our LED systems are designed for 18–36 months of continuous sales office operation.",
                },
                {
                  icon: "ri-file-code-line",
                  title: "Direct CAD-to-Model Workflow",
                  desc: "We work from AutoCAD DWG, Revit, SketchUp, and PDF drawings. A formal digital 3D model review before fabrication ensures zero design interpretation errors.",
                },
                {
                  icon: "ri-truck-line",
                  title: "Pan-India Delivery & Installation",
                  desc: "Custom foam-lined crating, supervised transport, and on-site installation across all major Indian cities. Our team doesn't just deliver — we install, test, and brief your sales team.",
                },
                {
                  icon: "ri-shield-check-line",
                  title: "Post-Delivery Warranty",
                  desc: "All models come with a written post-delivery warranty. We return to site for repairs, LED replacements, and updates — treating every model as an ongoing relationship, not a completed transaction.",
                },
              ].map((f) => (
                <div key={f.title} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                    <i className={`${f.icon} text-2xl text-black`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{f.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MODEL TYPES ── */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Types of Architectural Models We Make
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                As a specialist scale model maker in India, we work across all project types —
                residential launches, township master plans, commercial hubs, and government infrastructure.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "ri-building-4-line",
                  title: "Residential & Housing",
                  desc: "Apartment towers, villa clusters, gated communities, and affordable housing. Our miniature model making team captures every facade detail, landscaping layer, and amenity zone.",
                  tags: ["Apartments", "Villas", "Gated Townships"],
                },
                {
                  icon: "ri-community-line",
                  title: "Township Master Plans",
                  desc: "Large-scale integrated townships at 1:500 to 1:1000 scale — road networks, phase boundaries, sector zones, and utility infrastructure. India's most complex models built with confidence.",
                  tags: ["Mixed-Use", "Plotted Dev.", "SEZ"],
                },
                {
                  icon: "ri-store-3-line",
                  title: "Commercial & Hospitality",
                  desc: "Office parks, business districts, retail malls, and hotel developments. Boardroom-ready presentation models that communicate density, scale, and connectivity instantly.",
                  tags: ["Office Parks", "Malls", "Hotels"],
                },
                {
                  icon: "ri-train-line",
                  title: "Infrastructure & Government",
                  desc: "Railway stations, metro hubs, airports, highways, and smart city projects. Trusted by government agencies and urban planners for high-accuracy models used in public consultations and approvals.",
                  tags: ["Railways", "Metro", "Smart City"],
                },
              ].map((type) => (
                <div key={type.title} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                    <i className={`${type.icon} text-2xl text-black`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{type.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {type.tags.map((tag) => (
                      <span key={tag} className="bg-yellow-50 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full border border-yellow-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PORTFOLIO ── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Scale Model Portfolio — Delivered Across India
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                8 featured projects from our 200+ model portfolio — residential towers, township master plans,
                commercial developments, and infrastructure projects across Mumbai, Pune, Delhi NCR, and Hyderabad.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-gray-100"
                  onClick={() => handleItemClick(project)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} — architectural scale model by Alliance Media Labs`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                        <i className="ri-image-line text-2xl text-black"></i>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                      {project.city}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-black mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                    <p className="text-yellow-600 text-xs font-semibold mt-3 flex items-center gap-1">
                      <i className="ri-image-2-line"></i> Click to view gallery
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
              >
                View Full Portfolio
              </Link>
            </div>
          </div>

          {/* Gallery Modal */}
          {selectedItem && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl overflow-hidden max-w-5xl w-full relative max-h-[90vh] overflow-y-auto">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-20"
                >
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
                            <img
                              src={image.url}
                              alt={image.title}
                              className="w-full h-full object-contain bg-gray-100"
                            />
                          </div>
                        ))}
                      </div>
                      {selectedItem.galleryImages.length > 1 && (
                        <>
                          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 cursor-pointer z-10">
                            <i className="ri-arrow-left-line text-xl"></i>
                          </button>
                          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 cursor-pointer z-10">
                            <i className="ri-arrow-right-line text-xl"></i>
                          </button>
                        </>
                      )}
                    </div>
                    {selectedItem.galleryImages.length > 1 && (
                      <div className="flex justify-center space-x-2 py-4 bg-gray-100">
                        {selectedItem.galleryImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlideIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${index === currentSlideIndex ? "bg-yellow-400" : "bg-gray-400"}`}
                          ></button>
                        ))}
                      </div>
                    )}
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">{selectedItem.city}</span>
                        <span className="text-gray-500 text-sm">{selectedItem.category}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-3">{selectedItem.title}</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">{selectedItem.description}</p>
                      {selectedItem.galleryImages[currentSlideIndex] && (
                        <div className="bg-gray-50 rounded-xl p-4">
                          <h4 className="font-semibold text-black mb-1">{selectedItem.galleryImages[currentSlideIndex].title}</h4>
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

        {/* ── SCALE RATIO SPECS TABLE ── */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Scale Ratios & Project Specifications</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Every scale model maker in India uses different ratios. Here&apos;s how we match the scale to your project type, display space, and required level of detail.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-800">
              <table className="w-full text-sm">
                <thead className="bg-yellow-400 text-black">
                  <tr>
                    <th className="px-5 py-4 text-left font-bold">Scale Ratio</th>
                    <th className="px-5 py-4 text-left font-bold">Best For</th>
                    <th className="px-5 py-4 text-left font-bold">Typical Model Size</th>
                    <th className="px-5 py-4 text-left font-bold">Detail Level</th>
                    <th className="px-5 py-4 text-left font-bold">Indicative Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {[
                    ["1:50", "Individual villa / show flat", "2–4 ft", "Very High — furniture visible", "₹75K – ₹2L"],
                    ["1:100", "Apartment block, boutique project", "3–6 ft", "High — floor detail", "₹1.5L – ₹4L"],
                    ["1:200", "Mid-size residential complex", "4–8 ft", "Medium-High — facade detail", "₹2.5L – ₹7L"],
                    ["1:500", "Large residential / commercial project", "6–12 ft", "Medium — massing + landscape", "₹4L – ₹12L"],
                    ["1:1000", "Township master plan", "8–16 ft", "Medium — sector layout", "₹7L – ₹22L"],
                    ["1:2000+", "Smart city / infrastructure", "10–20 ft", "Low — spatial overview", "₹10L – ₹35L+"],
                  ].map(([ratio, best, size, detail, price]) => (
                    <tr key={ratio} className="bg-gray-900 hover:bg-gray-800 transition-colors">
                      <td className="px-5 py-4 font-bold text-yellow-400">{ratio}</td>
                      <td className="px-5 py-4 text-gray-300">{best}</td>
                      <td className="px-5 py-4 text-gray-300">{size}</td>
                      <td className="px-5 py-4 text-gray-400 text-xs">{detail}</td>
                      <td className="px-5 py-4 text-white font-semibold">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs mt-4 text-center italic">Indicative 2026 pricing. GST additional. Final quote based on drawings, finish spec, LED scope, and delivery location.</p>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Our Scale Model Making Process
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Six structured stages from brief to installation — each with a formal client review checkpoint.
                No surprises. No rework. No missed launch dates.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { num: "01", title: "Brief & Drawing Review", desc: "We review your CAD/Revit drawings, confirm scale ratio, base dimensions, LED scope, and delivery date. Written production brief signed off before any fabrication." },
                { num: "02", title: "Digital 3D Model Build", desc: "Our team converts your drawings into a precise digital 3D model. You review and approve before any physical production begins — eliminating rework risk." },
                { num: "03", title: "CNC & Laser Fabrication", desc: "Building components, road surfaces, and structural elements are precision-cut using CNC routers and laser cutters driven directly from your digital files." },
                { num: "04", title: "Assembly & LED Integration", desc: "Components are assembled on the base board. LED systems are wired into concealed channels. Phase-wise lighting zones are tested for reliable sales office operation." },
                { num: "05", title: "Painting, Landscaping & Finishing", desc: "Facades are custom-painted to your specification. Landscaping layers — grass, trees, water bodies — are applied by hand for maximum realism. Protective acrylic cover fitted." },
                { num: "06", title: "QC, Delivery & Installation", desc: "Full quality inspection. Custom foam-crated for transport. Our team delivers, installs, tests all electrics, and briefs your sales staff on operation and maintenance." },
              ].map((step) => (
                <div key={step.num} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow relative">
                  <div className="text-6xl font-bold text-yellow-400/20 absolute top-6 right-6">{step.num}</div>
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-5">
                    <span className="font-bold text-black text-sm">{step.num}</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">What Developers Say</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, j) => <i key={j} className="ri-star-fill text-sm"></i>)}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic mb-6">&ldquo;{t.content}&rdquo;</p>
                  <div>
                    <p className="font-bold text-black">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.position}</p>
                    <p className="text-sm text-yellow-600 font-medium">{t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CITIES WE SERVE ── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">Scale Model Maker Across India</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We are your scale model maker in India — wherever your project is. Our team delivers and installs across all major cities.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {["Mumbai", "Delhi NCR", "Bangalore", "Pune", "Hyderabad", "Gurugram", "Chennai", "Ahmedabad"].map((city) => (
                <div key={city} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center hover:border-yellow-400 hover:bg-yellow-50 transition-colors">
                  <i className="ri-map-pin-line text-yellow-500 text-lg mb-1 block"></i>
                  <p className="text-sm font-semibold text-black">{city}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MATERIALS ── */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Premium Materials — Built to Last</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Every material our architectural model maker team uses is selected for visual accuracy, structural durability, and long-term performance in a sales office environment.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "ri-settings-3-line", title: "CNC-Cut Acrylic & ABS", desc: "Precision-fabricated building shells, glazing panels, and structural components with razor-clean edges and tight tolerances." },
                { icon: "ri-water-flash-line", title: "Clear Acrylic Glazing", desc: "Transparent and frosted acrylic for building facades, water feature surfaces, and illuminated podium levels." },
                { icon: "ri-lightbulb-flash-line", title: "SMD LED Systems", desc: "Warm-white and cool-white SMD LEDs with fibre optics for star-field and water effects — wired for 24/7 reliability." },
                { icon: "ri-tree-line", title: "Architectural Model Foliage", desc: "Professional model grass mats, scatter foliage, and pre-made tree armatures — chosen by species, not generic green." },
                { icon: "ri-paint-fill", title: "Custom-Mixed Paints", desc: "Facade colours matched to your actual specification. Powder-coat durable finishes that don't chip or fade under sales office lighting." },
                { icon: "ri-map-pin-line", title: "Laser-Etched Road Surfaces", desc: "Roads, footpaths, parking bays, and paving patterns engraved directly onto base surfaces — crisp and consistent at any scale." },
              ].map((item) => (
                <div key={item.title} className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-yellow-400 transition-colors">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-4">
                    <i className={`${item.icon} text-xl text-black`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Frequently Asked Questions</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: "What makes Alliance Media Labs the best scale model maker in India?", a: "We are one of India's few scale model makers who control the entire production chain in-house — CNC fabrication, LED integration, hand-finishing, and pan-India installation. With 200+ projects delivered for Shapoorji Pallonji, Hiranandani, Venkatesh Buildcon, and others, our track record speaks directly to our quality and reliability." },
                { q: "How much does a scale model cost in India?", a: "Prices range from ₹75,000 for a simple villa model to ₹20,00,000+ for a large LED-lit township master plan. The main cost drivers are model size, scale ratio, LED scope, finish quality, and delivery location. We provide detailed itemised quotes within 48 hours of receiving your drawings." },
                { q: "How long does the model making process take?", a: "Standard residential block models: 15–25 working days. Large township master plans: 30–50 working days. Rush production (7–15 days) is available at a premium. Timeline starts from drawing sign-off, not from order placement." },
                { q: "What files do you need to start?", a: "AutoCAD DWG site plans, building floor plans, and elevation drawings are the minimum. Revit and SketchUp files are preferred. We can work from PDF drawings but it adds interpretation time. The more complete your digital files, the faster and more accurate the production." },
                { q: "Do you handle delivery and installation across India?", a: "Yes. We custom-crate every model in foam-lined wooden cases, supervise transport, and send our team to site for installation, electrical testing, and sales staff briefing. We cover Mumbai, Delhi NCR, Bangalore, Pune, Hyderabad, Gurugram, Chennai, and all major Indian cities." },
                { q: "Can the model be updated if the building design changes?", a: "Yes. We retain digital model files for all projects. Design changes — new towers, facade updates, landscaping revisions — can be incorporated as targeted updates without rebuilding the full model. Turnaround for component updates is typically 7–15 working days." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-black mb-3">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED SERVICES & BLOGS ── */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">Related Services</h3>
                <div className="space-y-3">
                  {[
                    { label: "Architectural Scale Models Service", href: "/services/architectural-scale-models" },
                    { label: "3D Renders & Isometrics", href: "/services/3d-renders-isometrics" },
                    { label: "3D Walkthrough Videos", href: "/services/3d-walkthrough-videos" },
                    { label: "Virtual Reality Tours", href: "/services/virtual-reality-tours" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-yellow-400 transition-colors group">
                      <i className="ri-arrow-right-circle-line text-yellow-500 group-hover:text-yellow-600"></i>
                      <span className="text-black font-medium text-sm">{s.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">From Our Blog</h3>
                <div className="space-y-3">
                  {[
                    { label: "Best Architectural Scale Model Company India: How to Choose", href: "/blog/best-architectural-scale-model-company-india" },
                    { label: "Scale Model Price India 2026: Complete Cost Guide", href: "/blog/architectural-scale-model-price-india-2026" },
                    { label: "Scale Model Making India: Complete Guide (2026)", href: "/blog/scale-model-making-india-complete-guide" },
                    { label: "The Silent Salesperson: How Scale Models Close Deals", href: "/blog/architectural-scale-models-india-real-estate" },
                  ].map((b) => (
                    <Link key={b.href} href={b.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-yellow-400 transition-colors group">
                      <i className="ri-article-line text-yellow-500 group-hover:text-yellow-600"></i>
                      <span className="text-black font-medium text-sm">{b.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT FORM ── */}
        <section id="quote-form" className="py-24 bg-yellow-400">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                  Get Your Scale Model Quote in 24 Hours
                </h2>
                <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
                <p className="text-lg text-black/80 max-w-2xl mx-auto">
                  Share your project details below. Our team will review your drawings and respond with a detailed,
                  itemised quote and production timeline — within 24 business hours.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        placeholder="your@company.com" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Project City</label>
                      <select name="city" value={formData.city} onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm">
                        <option value="">Select city</option>
                        {["Mumbai", "Delhi NCR", "Bangalore", "Pune", "Hyderabad", "Gurugram", "Chennai", "Ahmedabad", "Other"].map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Model Type</label>
                    <select name="project_type" value={formData.project_type} onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm">
                      <option value="">Select model type</option>
                      <option value="residential">Residential / Apartment</option>
                      <option value="township">Township / Master Plan</option>
                      <option value="commercial">Commercial / Office Park</option>
                      <option value="infrastructure">Infrastructure / Government</option>
                      <option value="villa">Villa / Bungalow</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} maxLength={600}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm resize-none"
                      placeholder="Tell us about your project — size, number of towers, preferred scale, LED requirements, and target delivery date..."></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting}
                    className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <><i className="ri-loader-4-line animate-spin"></i> Sending...</>
                    ) : (
                      <><span>Request My Scale Model Quote</span><i className="ri-arrow-right-line"></i></>
                    )}
                  </button>
                  {submitStatus === "success" && (
                    <p className="text-green-600 text-center font-semibold">
                      ✓ Thank you! We&apos;ll respond with a detailed quote within 24 hours.
                    </p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-red-600 text-center font-medium">Something went wrong. Please try again or call us directly.</p>
                  )}
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
