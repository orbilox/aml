"use client";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

type GalleryImage = { url: string; title: string; description: string };
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  hasGallery?: boolean;
  galleryImages?: GalleryImage[];
}

const modelTypes = [
  {
    icon: "ri-shape-2-line",
    title: "Architectural Scale Models",
    desc: "Our core architectural scale models for real estate launches, design reviews, and investor presentations — built with precision CNC fabrication and LED lighting.",
    scale: "1:200 – 1:100",
  },
  {
    icon: "ri-building-line",
    title: "Real Estate Scale Models",
    desc: "Detailed real estate scale models for residential towers, townships, and commercial projects — the centrepiece of every sales office we equip.",
    scale: "1:200 – 1:100",
  },
  {
    icon: "ri-magic-line",
    title: "Miniature Models & Miniature Model Making",
    desc: "Compact miniature models for site context, exhibitions, and quick-turnaround presentations — precision miniature model making at smaller scale ratios.",
    scale: "1:1000 – 1:500",
  },
  {
    icon: "ri-trophy-line",
    title: "Competition & Concept Models",
    desc: "Precision presentation models built to deadline for architectural competitions and early design concepts — clean finish, accurate massing.",
    scale: "1:500 – 1:200",
  },
  {
    icon: "ri-palette-line",
    title: "Material & Facade Study Models",
    desc: "Close-up models of facade systems and material junctions — built using our 3D scale model maker and 3D model making service workflow.",
    scale: "1:20 – 1:10",
  },
  {
    icon: "ri-map-2-line",
    title: "Township & Master Plan Models",
    desc: "Large-format real estate scale models for township master plans, showing phase-wise development, amenities, and connectivity.",
    scale: "1:1000 – 1:500",
  },
];

const applications = [
  {
    icon: "ri-presentation-line",
    title: "Sales-Office Presentation Models",
    desc: "Premium display-ready real estate scale models built for sales offices, marketing suites, and investor walkthroughs — engineered by our scale model makers for maximum visual impact.",
    items: [
      "LED-lit towers and landscaping",
      "Premium acrylic display cases",
      "Sales-office installation included",
    ],
  },
  {
    icon: "ri-tools-line",
    title: "Competition & Design Study Models",
    desc: "Precision study and competition models built by our scale model builders for architects working to tight design-review or submission deadlines.",
    items: [
      "Removable and modular components",
      "Fast-turnaround fabrication",
      "Accurate massing for jury review",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Design File Review",
    desc: "Share your SketchUp, Revit, AutoCAD, or Rhino files along with the model's purpose — concept review, competition, or client pitch.",
  },
  {
    step: "02",
    title: "Scale & Scope Quotation",
    desc: "We recommend the right scale ratio and finish level for your timeline and purpose, with a written quote and production schedule.",
  },
  {
    step: "03",
    title: "Digital Model Build",
    desc: "Our team converts your design files into a precise digital model ready for CNC and laser fabrication — your last chance to flag changes at zero cost.",
  },
  {
    step: "04",
    title: "Fabrication & Finishing",
    desc: "CNC-cut components, hand-finishing, and material-accurate detailing assembled to your design intent.",
  },
  {
    step: "05",
    title: "Delivery or Studio Pickup",
    desc: "Careful packaging and delivery to your studio, client site, or competition venue — anywhere in India.",
  },
];

const whyChooseBullets = [
  {
    title: "Deadline-Driven Production Schedules",
    desc: "Competition entries and sales-office launches run on fixed dates. We build our production schedules around your deadline, not the other way around — so your scale model is ready when you need it.",
  },
  {
    title: "NDA-Protected Confidential Projects",
    desc: "Competition entries and unreleased developer projects are handled under NDA on request — your architectural scale model stays confidential until you choose to reveal it.",
  },
  {
    title: "Pan-India Studio & Site Delivery",
    desc: "Careful packaging and delivery direct to your studio, sales office, or exhibition venue — our scale model builders install and test on-site anywhere in India.",
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

const materials = [
  {
    icon: "ri-settings-3-line",
    title: "ABS Plastic",
    desc: "CNC-machined ABS gives our architectural scale models crisp edges and accurate structural detailing.",
  },
  {
    icon: "ri-water-flash-line",
    title: "Acrylic & Glass",
    desc: "Clear and frosted acrylic panels form glazing, water bodies, and feature facades on real estate scale models.",
  },
  {
    icon: "ri-lightbulb-flash-line",
    title: "LED Lighting",
    desc: "Custom LED circuits light up towers, streets, and lobbies for sales-office-ready scale models.",
  },
  {
    icon: "ri-tree-line",
    title: "Laser-Cut Wood",
    desc: "MDF and balsa wood shape landscape elements, podium levels, and organic contours in our miniature model making.",
  },
  {
    icon: "ri-paint-fill",
    title: "Powder Coating",
    desc: "Powder-coated finishes match brand colour palettes precisely across every township and master plan model.",
  },
  {
    icon: "ri-map-pin-line",
    title: "Landscaping Elements",
    desc: "Hand-placed trees, water features, and road networks give every scale model complete site context.",
  },
];

export default function ArchitecturalDesignModelClient() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleItemClick = (item: Project) => {
    setSelectedProject(item);
    setCurrentSlideIndex(0);
  };
  const closeModal = () => {
    setSelectedProject(null);
    setCurrentSlideIndex(0);
  };
  const nextSlide = () => {
    if (selectedProject?.galleryImages)
      setCurrentSlideIndex((p) =>
        p === selectedProject.galleryImages!.length - 1 ? 0 : p + 1,
      );
  };
  const prevSlide = () => {
    if (selectedProject?.galleryImages)
      setCurrentSlideIndex((p) =>
        p === 0 ? selectedProject.galleryImages!.length - 1 : p - 1,
      );
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    firm: "",
    modelType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const portfolioProjects: Project[] = [
    {
      id: 1,
      title: "The Dualis, Shapoorji Pallonji",
      category: "Architectural Scale Models",
      image: "/images/services/architectural-scale-models/shapoorji/01.png",
      description:
        "A premium, space-efficient, visually engaging scale model solution that delivers maximum impact without occupying excessive space.",
      hasGallery: true,
      galleryImages: [
        {
          url: "/images/services/architectural-scale-models/shapoorji/01.png",
          title: "The Dualis Scale Model View",
          description:
            "Premium architectural scale model showcasing The Dualis by Shapoorji Pallonji with detailed tower structure, landscape elements, and modern residential planning.",
        },
        {
          url: "/images/services/architectural-scale-models/shapoorji/02.jpeg",
          title: "The Dualis Residential Layout",
          description:
            "Detailed residential scale model highlighting tower placement, internal circulation, landscaped zones, and luxury project planning.",
        },
        {
          url: "/images/services/architectural-scale-models/shapoorji/03.jpeg",
          title: "The Dualis Master Planning Model",
          description:
            "Comprehensive architectural model presenting the master layout, premium amenities, open spaces, and urban design visualization.",
        },
        {
          url: "/images/services/architectural-scale-models/shapoorji/04.jpeg",
          title: "The Dualis Premium Model Display",
          description:
            "High-detail scale model crafted for real estate presentations, investor showcases, and luxury residential marketing visualization.",
        },
      ],
    },
    {
      id: 2,
      title: "Indian Railways",
      category: "Scale Models",
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
      id: 3,
      title: "Hiranandani Meadows, Thane",
      category: "Scale Models",
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
      id: 4,
      title: "Venkatesh Skydale, Pune",
      category: "Scale Models",
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
      id: 5,
      title: "Spree City, Sonipat",
      category: "Scale Models",
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
      id: 6,
      title: "Skyline Realty, Hyderabad",
      category: "Scale Models",
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
      id: 7,
      title: "Island City Centre, Mumbai",
      category: "Scale Models",
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
      id: 8,
      title: "Centonic, Pune",
      category: "Scale Models",
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
  ];

  const faqs = [
    {
      q: "What does a scale model making company do?",
      a: "A scale model making company designs and fabricates miniature physical replicas of buildings, townships, and infrastructure projects. As a scale model making company, we handle digital modelling, CNC fabrication, LED integration, and hand-finishing — delivering architectural scale models and real estate scale models for sales offices, exhibitions, and design presentations.",
    },
    {
      q: "What are architectural scale models used for?",
      a: "Architectural scale models are used to showcase building design, layout, and scale to buyers, investors, and design review panels. Real estate developers use architectural scale models at sales offices and launch events, while architects use them for design presentations and competition entries.",
    },
    {
      q: "Who are the best scale model makers and scale model builders in India?",
      a: "The best scale model makers and scale model builders combine in-house digital modelling, CNC and laser fabrication, and hand-finishing under one roof. We're a trusted scale model making company with 200+ projects delivered as scale model makers and scale model builders for developers across India.",
    },
    {
      q: "What is the difference between miniature model making and a full-scale architectural scale model?",
      a: "Miniature model making typically refers to smaller-scale, detailed builds at ratios like 1:500 or 1:1000, while architectural scale models for real estate are often larger, more detailed builds at 1:100 or 1:200 with LED lighting and landscaping. Both fall under our scale model making services.",
    },
    {
      q: "Do you offer 3D scale model maker and 3D model making service together?",
      a: "Yes. Our 3D scale model maker workflow starts with a 3D model making service — converting your CAD or BIM drawings into a precise digital model — before any physical fabrication begins, ensuring accuracy in every real estate scale model we build.",
    },
    {
      q: "Do you provide architectural scale models service in India for all cities?",
      a: "Yes. We deliver our architectural scale models service in India across Mumbai, Delhi NCR, Bangalore, Pune, Hyderabad, Gurugram, and other major cities, with on-site installation support included.",
    },
  ];

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
          subject: "New Lead — Architectural Design Model Page",
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
          modelType: "",
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
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900/10 via-gray-900/15 to-gray-900/10 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/services/architectural-scale-models/1.jpg')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-shape-2-line text-3xl text-black"></i>
                </div>
                <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">
                  Scale Model Making Company India
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                India&apos;s Trusted Scale Model Making{" "}
                <span className="text-yellow-400">Company</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-4 leading-relaxed drop-shadow-lg">
                As a leading scale model making company, we build architectural
                scale models, real estate scale models, and miniature models for
                developers and architects across India — backed by expert scale
                model makers and scale model builders.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed drop-shadow-lg">
                From precision miniature model making to full 3D scale model
                maker and 3D model making service, our scale model making
                process covers every stage from digital drawings to sales-office
                installation.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Get Quote
                </a>
                <a
                  href="#portfolio"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer"
                >
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features / Why Choose Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Why Choose Our Scale Model Making Company
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Trusted scale model makers and scale model builders — as a scale
                model making company, we build architectural scale models, real
                estate scale models, and miniature models under one roof, with
                no outsourcing at any stage.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "ri-pencil-ruler-2-line",
                  title: "In-House 3D Scale Model Maker Workflow",
                  desc: "Our 3D scale model maker process works directly from SketchUp, Revit, Rhino, and AutoCAD files — a full 3D model making service before any physical fabrication begins.",
                },
                {
                  icon: "ri-time-line",
                  title: "Deadline-Aware Scale Model Making",
                  desc: "Competition entries and sales-office launches run on fixed dates. As a scale model making company, we build production schedules around your deadline, not the other way around.",
                },
                {
                  icon: "ri-stack-line",
                  title: "Experienced Scale Model Makers",
                  desc: "Our scale model makers and scale model builders handle every model type — from quick miniature model making to large real estate scale models — with consistent quality.",
                },
                {
                  icon: "ri-tools-line",
                  title: "Material-Accurate Detailing",
                  desc: "Facade systems, material junctions, and finishes are represented accurately in every architectural scale model — critical for both sales and design-review use.",
                },
                {
                  icon: "ri-shield-check-line",
                  title: "Confidentiality on Unreleased Designs",
                  desc: "Competition entries and unreleased developer projects are handled under NDA on request — your design stays confidential until you choose to reveal it.",
                },
                {
                  icon: "ri-truck-line",
                  title: "Pan-India Delivery by Our Scale Model Builders",
                  desc: "Careful packaging and delivery direct to your studio, sales office, or exhibition venue — our scale model builders install and test on-site anywhere in India.",
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

        {/* Model Types Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                6 Types of Scale Models We Build
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                From compact miniature models to large-format township master
                plans, our scale model making company builds every scale model
                type your project needs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modelTypes.map((mt) => (
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
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {mt.desc}
                  </p>
                  <span className="bg-yellow-50 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full border border-yellow-200">
                    Scale: {mt.scale}
                  </span>
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
                Scale Model Portfolio &amp; Case Studies
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                A sample of the architectural scale models and real estate scale
                models delivered by our scale model makers for developers across
                India.
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
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer inline-flex"
              >
                View Full Portfolio
              </Link>
            </div>
          </div>

          {/* Gallery Modal */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl overflow-hidden max-w-5xl w-full relative max-h-[90vh] overflow-y-auto">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-20"
                >
                  <i className="ri-close-line text-xl" />
                </button>
                {selectedProject.hasGallery &&
                  selectedProject.galleryImages && (
                    <div>
                      <div className="relative h-96 md:h-[500px] overflow-hidden">
                        <div
                          className="flex transition-transform duration-500 ease-in-out h-full"
                          style={{
                            transform: `translateX(-${currentSlideIndex * 100}%)`,
                          }}
                        >
                          {selectedProject.galleryImages.map((image, index) => (
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
                        {selectedProject.galleryImages.length > 1 && (
                          <>
                            <button
                              onClick={prevSlide}
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-10"
                            >
                              <i className="ri-arrow-left-line text-xl" />
                            </button>
                            <button
                              onClick={nextSlide}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-10"
                            >
                              <i className="ri-arrow-right-line text-xl" />
                            </button>
                          </>
                        )}
                      </div>
                      {selectedProject.galleryImages.length > 1 && (
                        <div className="flex justify-center space-x-2 py-4 bg-gray-100">
                          {selectedProject.galleryImages.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentSlideIndex(index)}
                              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${index === currentSlideIndex ? "bg-yellow-400" : "bg-gray-400"}`}
                            />
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
                        {selectedProject.galleryImages[currentSlideIndex] && (
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h4 className="font-semibold text-black mb-2">
                              {
                                selectedProject.galleryImages[currentSlideIndex]
                                  .title
                              }
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {
                                selectedProject.galleryImages[currentSlideIndex]
                                  .description
                              }
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
              </div>
            </div>
          )}
        </section>

        {/* Applications Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                How Developers &amp; Architects Use Our Scale Models
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {applications.map((app) => (
                <div
                  key={app.title}
                  className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                    <i className={`${app.icon} text-2xl text-black`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {app.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{app.desc}</p>
                  <ul className="space-y-2 text-gray-600">
                    {app.items.map((item) => (
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
                Our 5-Step Scale Model Making Process
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
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

        {/* Why Choose (bullets) Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                What Sets Our Scale Model Makers Apart
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {whyChooseBullets.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="text-yellow-400 text-3xl font-bold">•</span>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">
                      {item.title}
                    </h3>
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
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-sm"></i>
                    ))}
                  </div>
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
              <h2 className="text-4xl font-bold text-white mb-4">
                The Materials Behind Every Scale Model
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Every material is chosen for its durability, visual accuracy,
                and ability to represent your design intent at scale.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-yellow-400 transition-colors"
                >
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-4">
                    <i className={`${item.icon} text-xl text-black`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
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
                Get a Custom Scale Model Quote
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-gray-600 mb-8">
                Every scale model is handcrafted to your specifications. Pricing
                depends on scale, size, materials, LED integration, and delivery
                requirements.
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
                      href: "/services/architectural-scale-models",
                      title: "Architectural Scale Models",
                      desc: "Sales-office models for real estate launches and developer presentations.",
                      icon: "ri-building-line",
                    },
                    {
                      href: "/services/scale-model-maker-india",
                      title: "Scale Model Maker India",
                      desc: "Pan-India scale model fabrication for developers and infrastructure projects.",
                      icon: "ri-map-pin-line",
                    },
                    {
                      href: "/3d-renders-isometrics",
                      title: "3D House Rendering",
                      desc: "Photorealistic 3D renders and isometric views for design presentations.",
                      icon: "ri-image-line",
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
                      href: "/blog/scale-model-making-india-complete-guide",
                      title: "Scale Model Making in India: The Complete Guide",
                      tag: "Guide",
                    },
                    {
                      href: "/blog/best-architectural-scale-model-company-india",
                      title: "Best Architectural Scale Model Company in India",
                      tag: "B2B Guide",
                    },
                    {
                      href: "/blog/architectural-scale-model-price-india-2026",
                      title: "Architectural Scale Model Price in India 2026",
                      tag: "Pricing",
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
                  Talk to Our Scale Model Making Company
                </h2>
                <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
                <p className="text-lg text-black/80">
                  Share your drawings and deadline — our scale model makers will
                  respond with a recommended scale, timeline, and quote within
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
                          placeholder="you@studio.com"
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
                          Firm / Studio Name
                        </label>
                        <input
                          type="text"
                          name="firm"
                          value={formData.firm}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                          placeholder="Your firm name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Model Type
                      </label>
                      <select
                        name="modelType"
                        value={formData.modelType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      >
                        <option value="">Select type</option>
                        <option value="Architectural Scale Model">
                          Architectural Scale Model
                        </option>
                        <option value="Real Estate Scale Model">
                          Real Estate Scale Model
                        </option>
                        <option value="Miniature Model">Miniature Model</option>
                        <option value="Township/Master Plan Model">
                          Township / Master Plan Model
                        </option>
                        <option value="Concept/Competition Model">
                          Concept / Competition Model
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
                        placeholder="Project name, deadline, scale preference, and any specific requirements..."
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
                      className="w-full bg-yellow-400 text-black py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="ri-loader-4-line animate-spin"></i>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Request a Quote</span>
                          <i className="ri-send-plane-line"></i>
                        </>
                      )}
                    </button>
                    <p className="text-center text-gray-500 text-xs">
                      We respond within 24 hours. Your project details are
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
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
