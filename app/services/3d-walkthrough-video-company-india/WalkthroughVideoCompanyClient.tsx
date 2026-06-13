"use client";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

interface Project {
  id: number;
  title: string;
  category: string;
  city: string;
  image: string;
  description: string;
  videoUrl: string | null;
  duration: string | null;
}

const testimonials = [
  {
    name: "Akhil Gupta",
    position: "Managing Director",
    company: "Etereo Realty",
    content:
      "Alliance Media Labs handled everything for our latest project Etereo 1, Goa. They delivered a complete end-to-end real estate marketing solution for us, including high-quality 3D walkthroughs, isometric designs, teaser videos, reels, and 3D renders, with great attention to detail. The overall real estate visualisation and video marketing really helped us present the project more effectively to our buyers.",
  },
  {
    name: "Jayanta Ghosh",
    position: "Head of Marketing",
    company: "Aura World",
    content:
      "Alliance Media Labs created an impressive AI-powered 3D walkthrough in 7 days for Aura Vantaje, Gurugram, helping us visualise the commercial project with great clarity. The experience was great, the team is highly professional and they truly added real value to our real estate presentation and virtual walkthrough marketing.",
  },
  {
    name: "Ajeet Mehta",
    position: "Director",
    company: "SRMG",
    content:
      "For Shree Radha Gopal Residency, Kosi, Alliance Media Labs delivered 3D walkthroughs, renders, a 360 interactive virtual tour, and a location AV exactly the way we had envisioned. Everything felt well thought-through, and the overall real estate visualisation and virtual tour execution came out clean and impactful.",
  },
];

const walkthroughTypes = [
  {
    icon: "ri-building-2-line",
    title: "Residential Walkthroughs",
    desc: "Apartment, villa, and row-house 3D walkthroughs with photorealistic interiors, natural lighting, and lifestyle staging — designed to shorten the buyer decision cycle.",
    tags: ["Apartments", "Villas", "Row Houses", "Penthouses"],
  },
  {
    icon: "ri-store-2-line",
    title: "Commercial Walkthroughs",
    desc: "Office park, retail mall, and mixed-use 3D walkthroughs communicating scale, functionality, and leasing potential to enterprise tenants and investors.",
    tags: ["Offices", "Retail", "IT Parks", "Mixed-Use"],
  },
  {
    icon: "ri-map-2-line",
    title: "Township Flythrough Animations",
    desc: "Aerial and ground-level flythrough animations for large township master plans — covering phase-wise development, amenities, and connectivity in a single cinematic video.",
    tags: ["Master Plans", "Phase-wise", "Amenity Zones", "Landscaping"],
  },
  {
    icon: "ri-sofa-line",
    title: "Interior Cinematic Walkthroughs",
    desc: "Ultra-detailed interior walkthroughs with custom furniture, material finishes, lighting moods, and architectural detailing — ideal for premium launches and interior brand storytelling.",
    tags: ["Luxury Interiors", "Material Finishes", "Lighting Design", "Branded"],
  },
  {
    icon: "ri-vip-diamond-line",
    title: "AI-Enhanced Premium Walkthroughs",
    desc: "Next-generation AI-powered walkthroughs with hyper-realistic textures, real-time atmosphere effects, and cinematic colour grading — for ultra-luxury and international-grade projects.",
    tags: ["AI Rendering", "Hyper-Realistic", "Cinematic Grade", "Luxury Launches"],
  },
];

const productionProcess = [
  {
    step: "01",
    title: "Drawing Intake & Brief",
    desc: "We collect your AutoCAD DWG, Revit, SketchUp, or PDF drawings and conduct a detailed brief call to understand the project, buyer persona, and key selling propositions.",
  },
  {
    step: "02",
    title: "3D Modelling & Layout",
    desc: "Our modelling team builds a construction-accurate 3D model from your architectural drawings — every wall, slab, window, and landscape element precisely placed.",
  },
  {
    step: "03",
    title: "Material & Lighting Design",
    desc: "We apply photorealistic textures, brand-specific materials, and architectural lighting (natural + artificial) to bring the model to life before any rendering begins.",
  },
  {
    step: "04",
    title: "Camera Choreography",
    desc: "Our creative directors plan the walkthrough camera path, pacing, and narrative flow — designing a viewing experience that guides the buyer's eye to your key selling points.",
  },
  {
    step: "05",
    title: "Render & AI Enhancement",
    desc: "We render the walkthrough at cinematic resolution using AI-enhanced pipelines — then apply colour grading, atmospheric effects, and sound design for full production value.",
  },
  {
    step: "06",
    title: "Review & Delivery",
    desc: "You review and approve. We deliver master files in MP4 (4K), optimised web versions, and social media cuts — all sized and tagged for your digital marketing workflow.",
  },
];

const companyStats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "7 Days", label: "Fastest Delivery" },
  { value: "4K", label: "Render Resolution" },
  { value: "Pan-India", label: "Coverage" },
];

const cityLinks = [
  { city: "Mumbai", href: "/city-services/3d-walkthrough-videos-mumbai" },
  { city: "Delhi NCR", href: "/city-services/3d-walkthrough-videos-delhi" },
  { city: "Bangalore", href: "/city-services/3d-walkthrough-videos-bangalore" },
  { city: "Gurugram", href: "/city-services/real-estate-video-production-gurugram" },
  { city: "Pune", href: "/contact" },
  { city: "Hyderabad", href: "/contact" },
  { city: "Chennai", href: "/contact" },
  { city: "Ahmedabad", href: "/contact" },
];

const pricingTiers = [
  {
    name: "Starter",
    subtitle: "Single unit / apartment walkthrough",
    price: "₹75,000",
    priceNote: "onwards",
    duration: "10–15 working days",
    features: [
      "Up to 2.5 min walkthrough",
      "1 residential unit",
      "Photorealistic textures & lighting",
      "2 rounds of revision",
      "HD 1080p + MP4 delivery",
      "Social media cut included",
    ],
    cta: "Get Quote",
    highlight: false,
  },
  {
    name: "Professional",
    subtitle: "Multi-block or commercial project",
    price: "₹1,80,000",
    priceNote: "onwards",
    duration: "15–25 working days",
    features: [
      "Up to 4 min walkthrough",
      "Multi-unit or commercial block",
      "AI-enhanced rendering",
      "Lifestyle staging & human figures",
      "3 rounds of revision",
      "4K UHD + social cuts delivery",
      "Aerial approach shot included",
    ],
    cta: "Get Quote",
    highlight: true,
  },
  {
    name: "Township",
    subtitle: "Master plan flythrough & premium launch",
    price: "₹3,50,000",
    priceNote: "onwards",
    duration: "25–40 working days",
    features: [
      "5–8 min cinematic presentation",
      "Full township / master plan",
      "Phase-wise animation",
      "Amenity zone detailing",
      "Custom brand voiceover + music",
      "4K + social cuts + web optimised",
      "Dedicated project manager",
      "Unlimited revisions",
    ],
    cta: "Get Quote",
    highlight: false,
  },
];

export default function WalkthroughVideoCompanyClient() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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

  const portfolioProjects: Project[] = [
    {
      id: 1,
      title: "Etereo 1, Goa",
      category: "Residential Walkthrough",
      city: "Goa",
      image: "/images/portfolio/1.png",
      description:
        "Cinematic 3D property walkthrough showcasing luxury residential units with panoramic views, lifestyle staging, and premium architectural detailing.",
      videoUrl: "https://www.youtube.com/embed/BiCCdx0fDik?autoplay=1",
      duration: "2:45",
    },
    {
      id: 2,
      title: "Aura Vantaje, Gurugram",
      category: "Commercial Walkthrough",
      city: "Gurugram",
      image: "/images/portfolio/Aura-Vantaje-Thumbnail.png",
      description:
        "AI-powered 3D walkthrough for a premium commercial project in Gurugram, produced in 7 days — highlighting scale, usability, and immersive buyer experience.",
      videoUrl: "https://www.youtube.com/embed/YGaAU9B37nc?autoplay=1",
      duration: "1:20",
    },
    {
      id: 3,
      title: "Auroville Township, Pune",
      category: "Township Flythrough",
      city: "Pune",
      image: "/images/portfolio/Auroville-Thumbnail.jpg",
      description:
        "Master plan flythrough animation for a large township project — covering phase-wise development, amenity zones, and connectivity in a cinematic aerial presentation.",
      videoUrl: null,
      duration: null,
    },
    {
      id: 4,
      title: "Glenwood Residences, Bangalore",
      category: "Residential Walkthrough",
      city: "Bangalore",
      image: "/images/portfolio/Glenwood-Thumbnail.png",
      description:
        "Photorealistic 3D walkthrough for premium residential towers — detailed landscaping, clubhouse, and unit interior sequences with natural lighting and lifestyle staging.",
      videoUrl: null,
      duration: null,
    },
    {
      id: 5,
      title: "Naman 58, Mumbai",
      category: "Luxury Walkthrough",
      city: "Mumbai",
      image: "/images/portfolio/Naman-58-Thumbnail.jpg",
      description:
        "Ultra-premium walkthrough for a luxury sea-facing residential project — AI-enhanced photorealism with custom material finishes and branded colour grading.",
      videoUrl: null,
      duration: null,
    },
    {
      id: 6,
      title: "Sky Arc, Hyderabad",
      category: "Interior Cinematic",
      city: "Hyderabad",
      image: "/images/portfolio/Sky-Arc-Thumbnail.png",
      description:
        "Interior cinematic walkthrough featuring custom furniture staging, bespoke material finishes, and architectural lighting design for a premium apartment launch.",
      videoUrl: null,
      duration: null,
    },
    {
      id: 7,
      title: "Twin Horizon, Delhi NCR",
      category: "Commercial Walkthrough",
      city: "Delhi NCR",
      image: "/images/portfolio/Twin-Horizon-Thumbnail.png",
      description:
        "Dual-tower commercial walkthrough and aerial flythrough for a Grade-A office project — communicating scale, connectivity, and workspace quality to enterprise tenants.",
      videoUrl: null,
      duration: null,
    },
    {
      id: 8,
      title: "Central Ikon, Mumbai",
      category: "Retail Walkthrough",
      city: "Mumbai",
      image: "/images/portfolio/Central-Ikon-Thumbnail.png",
      description:
        "3D walkthrough for a large-format retail and mixed-use development — showcasing retail frontage, food court, and entertainment zones to attract anchor tenants.",
      videoUrl: null,
      duration: null,
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
          subject: "New Lead — 3D Walkthrough Video Company Page",
          from_name: formData.name,
          ...formData,
        }),
      });
      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", project_type: "", city: "", message: "" });
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
      <WhatsAppFloat />

      {/* Video Modal */}
      {selectedProject && selectedProject.videoUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <i className="ri-close-line text-lg" />
            </button>
            <iframe
              src={selectedProject.videoUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={selectedProject.title}
            />
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <section className="relative bg-[#0a0a0a] text-white overflow-hidden min-h-[88vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/services/3d-walkthrough-videos/1.jpg"
            alt="3D Walkthrough Video Company India — Alliance Media Labs"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[2px] bg-[#e8b86d]" />
              <span className="text-[#e8b86d] text-sm font-semibold tracking-widest uppercase">
                India&apos;s Premier 3D Walkthrough Company
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              3D Walkthrough Video{" "}
              <span className="text-[#e8b86d]">Company India</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4 max-w-2xl">
              Photorealistic architectural walkthrough videos that sell projects before a brick is laid. From residential apartments to township master plans — we build buyer confidence with cinematic 3D storytelling.
            </p>
            <p className="text-base text-gray-400 mb-10 max-w-2xl">
              Trusted by Etereo Realty, Aura World, SRMG, and 200+ Indian developers. Delivery in as fast as 7 working days.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#e8b86d] hover:bg-[#d4a55a] text-black font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                <i className="ri-video-line" />
                Get a Free Quote
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-8 py-4 rounded-lg transition-colors text-lg"
              >
                <i className="ri-play-circle-line" />
                Watch Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#e8b86d] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {companyStats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-black">{s.value}</div>
                <div className="text-sm font-semibold text-black/70 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e8b86d] text-sm font-semibold tracking-widest uppercase">
              Why Developers Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              India&apos;s Most Trusted 3D Walkthrough Company
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              We combine AI-powered rendering, architectural precision, and cinematic storytelling to produce walkthroughs that move buyers from interest to booking.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "ri-ai-generate",
                title: "AI-Enhanced Rendering",
                desc: "We use the latest AI rendering pipelines to achieve photorealistic quality at 2–3× the speed of traditional rendering — meaning faster delivery and sharper visuals.",
              },
              {
                icon: "ri-building-line",
                title: "Construction-Accurate Modelling",
                desc: "Every walkthrough is built from your actual architectural drawings — CAD, Revit, or SketchUp. No guesswork. No generic templates. RERA-ready accuracy.",
              },
              {
                icon: "ri-film-line",
                title: "Cinematic Camera Direction",
                desc: "Our creative directors plan every camera move for storytelling impact — guiding the buyer's eye to key selling points just like a seasoned property consultant would.",
              },
              {
                icon: "ri-timer-flash-line",
                title: "7-Day Rush Delivery",
                desc: "Urgent project launch? We can produce residential walkthroughs in as fast as 7 working days without compromising on quality — for developers who can't wait.",
              },
              {
                icon: "ri-palette-line",
                title: "Full Brand Integration",
                desc: "We integrate your logo, brand colours, voiceover, and music seamlessly into every walkthrough — so the final video is a complete marketing asset, not just a render.",
              },
              {
                icon: "ri-customer-service-2-line",
                title: "Dedicated Project Manager",
                desc: "Every project gets a dedicated manager — single point of contact from brief to delivery. No chasing multiple departments. No lost feedback. Just results.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-gray-50 rounded-xl p-7 border border-gray-100 hover:border-[#e8b86d]/50 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-[#e8b86d]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#e8b86d]/20 transition-colors">
                  <i className={`${f.icon} text-2xl text-[#e8b86d]`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WALKTHROUGH TYPES ── */}
      <section className="py-20 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e8b86d] text-sm font-semibold tracking-widest uppercase">
              Our Specialisations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              5 Types of 3D Walkthrough Videos We Produce
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Every project type demands a different visual approach. We&apos;re India&apos;s only 3D walkthrough company with deep specialisation across all five.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {walkthroughTypes.map((wt, idx) => (
              <div
                key={wt.title}
                className={`rounded-xl p-7 border transition-all hover:border-[#e8b86d]/60 ${
                  idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                } bg-white/5 border-white/10`}
              >
                <div className="w-11 h-11 bg-[#e8b86d]/10 rounded-lg flex items-center justify-center mb-5">
                  <i className={`${wt.icon} text-xl text-[#e8b86d]`} />
                </div>
                <h3 className="text-lg font-bold mb-3">{wt.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{wt.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {wt.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full"
                    >
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
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e8b86d] text-sm font-semibold tracking-widest uppercase">
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              3D Walkthrough Portfolio
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              From luxury gated communities to large-format commercial parks — explore how India&apos;s top developers use our walkthroughs to sell faster and smarter.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {portfolioProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {project.videoUrl ? (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-14 h-14 bg-[#e8b86d] rounded-full flex items-center justify-center shadow-lg">
                        <i className="ri-play-fill text-2xl text-black ml-1" />
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <i className="ri-zoom-in-line text-xl text-white" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="text-xs bg-[#e8b86d] text-black font-semibold px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <span className="text-xs bg-black/60 text-white px-2 py-1 rounded backdrop-blur-sm">
                      {project.city}
                    </span>
                  </div>
                  {project.duration && (
                    <div className="absolute bottom-3 right-3">
                      <span className="text-xs bg-black/70 text-white px-2 py-1 rounded backdrop-blur-sm">
                        {project.duration}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{project.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-[#e8b86d] hover:bg-[#d4a55a] text-black font-bold px-8 py-4 rounded-lg transition-colors"
            >
              <i className="ri-gallery-line" />
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRODUCTION PROCESS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e8b86d] text-sm font-semibold tracking-widest uppercase">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Our 6-Step Production Process
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              A structured pipeline built for speed, accuracy, and zero surprises — designed for developer timelines and sales office deadlines.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {productionProcess.map((step) => (
              <div
                key={step.step}
                className="relative bg-gray-50 rounded-xl p-7 border border-gray-100 hover:border-[#e8b86d]/40 hover:shadow-md transition-all"
              >
                <div className="text-5xl font-black text-[#e8b86d]/20 absolute top-5 right-5">
                  {step.step}
                </div>
                <div className="w-9 h-9 bg-[#e8b86d] text-black rounded-lg flex items-center justify-center text-sm font-black mb-5">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-20 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e8b86d] text-sm font-semibold tracking-widest uppercase">
              Transparent Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              3D Walkthrough Video Pricing
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              No hidden costs. No vague quotes. Clear pricing tiers designed for the Indian real estate developer budget — from a single apartment to a full township.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 border transition-all ${
                  tier.highlight
                    ? "bg-[#e8b86d] border-[#e8b86d] text-black"
                    : "bg-white/5 border-white/10 text-white"
                }`}
              >
                {tier.highlight && (
                  <div className="text-xs font-black tracking-widest uppercase bg-black text-[#e8b86d] px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-xl font-black mb-1 ${tier.highlight ? "text-black" : "text-white"}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm mb-5 ${tier.highlight ? "text-black/70" : "text-gray-400"}`}>
                  {tier.subtitle}
                </p>
                <div className="mb-2">
                  <span className={`text-3xl font-black ${tier.highlight ? "text-black" : "text-[#e8b86d]"}`}>
                    {tier.price}
                  </span>
                  <span className={`text-sm ml-1 ${tier.highlight ? "text-black/60" : "text-gray-400"}`}>
                    {tier.priceNote}
                  </span>
                </div>
                <p className={`text-xs mb-6 ${tier.highlight ? "text-black/60" : "text-gray-500"}`}>
                  Delivery: {tier.duration}
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <i className={`ri-check-line text-base flex-shrink-0 mt-0.5 ${tier.highlight ? "text-black" : "text-[#e8b86d]"}`} />
                      <span className={tier.highlight ? "text-black/80" : "text-gray-300"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center font-bold py-3 rounded-lg transition-colors ${
                    tier.highlight
                      ? "bg-black text-[#e8b86d] hover:bg-gray-900"
                      : "bg-[#e8b86d] text-black hover:bg-[#d4a55a]"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            All prices are indicative. Final pricing depends on project scope, duration, and revision requirements.{" "}
            <a href="#contact" className="text-[#e8b86d] hover:underline">
              Contact us for a custom quote.
            </a>
          </p>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e8b86d] text-sm font-semibold tracking-widest uppercase">
              Client Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              What India&apos;s Top Developers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-[#e8b86d] text-sm" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
                  <div className="w-10 h-10 bg-[#e8b86d]/10 rounded-full flex items-center justify-center">
                    <i className="ri-user-line text-[#e8b86d]" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">
                      {t.position}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CITY COVERAGE ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#e8b86d] text-sm font-semibold tracking-widest uppercase">
              Pan-India Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3">
              3D Walkthrough Company Serving All Major Indian Cities
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {cityLinks.map((c) => (
              <Link
                key={c.city}
                href={c.href}
                className="inline-flex items-center gap-2 border border-gray-200 hover:border-[#e8b86d] hover:bg-[#e8b86d]/5 text-gray-700 hover:text-gray-900 px-5 py-2.5 rounded-full text-sm font-medium transition-all"
              >
                <i className="ri-map-pin-line text-[#e8b86d] text-xs" />
                {c.city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e8b86d] text-sm font-semibold tracking-widest uppercase">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 mt-4">
              Questions developers ask before choosing a 3D walkthrough video company in India.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                q: "What makes Alliance Media Labs India's best 3D walkthrough video company?",
                a: "We combine architectural accuracy, AI-powered rendering, and cinematic storytelling in a single in-house team — no outsourcing, no quality gaps. With 200+ projects delivered and rush timelines as fast as 7 days, we're the trusted choice for Indian developers who need walkthroughs that actually drive bookings.",
              },
              {
                q: "How fast can your 3D walkthrough company deliver?",
                a: "Standard residential walkthroughs take 10–18 working days. Commercial and mixed-use walkthroughs take 15–25 days. Township flythroughs take 25–40 days. Rush delivery in 5–8 days is available for residential projects at a premium. Timeline starts from drawing and reference sign-off.",
              },
              {
                q: "What drawings do you need to start a 3D walkthrough?",
                a: "We work from AutoCAD DWG, Revit, SketchUp, or detailed PDF floor plans and elevations. The more complete your drawings, the faster and more accurate the walkthrough. We'll flag any gaps before starting so there are no delays mid-production.",
              },
              {
                q: "Do you provide 3D walkthrough services across India?",
                a: "Yes — we serve developers pan-India. Our cloud-based production means your city doesn't limit our ability to deliver. We have dedicated city pages for Mumbai, Delhi, Bangalore, and Gurugram, with ongoing projects in Pune, Hyderabad, Chennai, Ahmedabad, and Kolkata.",
              },
              {
                q: "Can your walkthrough company integrate our brand identity?",
                a: "Absolutely. We incorporate your logo, brand colours, project name typography, custom voiceover, and background music into every walkthrough. The final video is a fully branded marketing asset ready for YouTube, social media, and sales office screens.",
              },
              {
                q: "What file formats do you deliver the walkthrough video in?",
                a: "We deliver in MP4 (4K UHD master), web-optimised 1080p for digital platforms, compressed social cuts (9:16 for Instagram Reels / Stories and 1:1 for feed), and a full-resolution master for display screens at your sales office. All files are cloud-shared for instant access.",
              },
            ].map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES & BLOGS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Related Services */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <i className="ri-stack-line text-[#e8b86d]" />
                Related Services
              </h3>
              <div className="grid gap-4">
                {[
                  {
                    href: "/services/3d-walkthrough-videos",
                    title: "3D Walkthrough Video Service",
                    desc: "Architectural walkthrough videos for property launches and investor presentations.",
                    icon: "ri-video-line",
                  },
                  {
                    href: "/services/virtual-reality-tours",
                    title: "Virtual Reality Tours",
                    desc: "Immersive VR property experiences for sales offices and remote buyers.",
                    icon: "ri-vr-goggles-line",
                  },
                  {
                    href: "/services/3d-renders-isometrics",
                    title: "3D Renders & Isometrics",
                    desc: "Photorealistic 3D renders and aerial isometric views for marketing collateral.",
                    icon: "ri-image-line",
                  },
                  {
                    href: "/services/interior-cinematic-walkthrough",
                    title: "Interior Cinematic Walkthrough",
                    desc: "Premium interior walkthroughs with luxury finishes and designer furniture staging.",
                    icon: "ri-home-smile-line",
                  },
                ].map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:border-[#e8b86d]/50 hover:bg-[#e8b86d]/5 transition-all group"
                  >
                    <div className="w-10 h-10 bg-[#e8b86d]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#e8b86d]/20 transition-colors">
                      <i className={`${s.icon} text-[#e8b86d] text-lg`} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm group-hover:text-[#e8b86d] transition-colors">
                        {s.title}
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5">{s.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Blog Posts */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <i className="ri-article-line text-[#e8b86d]" />
                Related Articles
              </h3>
              <div className="grid gap-4">
                {[
                  {
                    href: "/blog/3d-walkthrough-video-service",
                    title: "What Is a 3D Walkthrough Video Service?",
                    desc: "Complete guide to 3D walkthrough videos for Indian real estate developers — types, costs, and ROI.",
                    tag: "Guide",
                  },
                  {
                    href: "/blog/real-estate-marketing-video-types-india",
                    title: "Real Estate Marketing Video Types India",
                    desc: "The 7 types of real estate marketing videos every Indian developer needs to know in 2026.",
                    tag: "Marketing",
                  },
                  {
                    href: "/blog/3d-house-rendering-guide-india",
                    title: "3D House Rendering Guide India",
                    desc: "How photorealistic 3D renders and walkthroughs shorten sales cycles and increase booking rates.",
                    tag: "Rendering",
                  },
                  {
                    href: "/blog/real-estate-drone-photography-india",
                    title: "Real Estate Drone Photography India",
                    desc: "How aerial drone shoots complement 3D walkthroughs for a complete property marketing package.",
                    tag: "Drone",
                  },
                ].map((b) => (
                  <Link
                    key={b.href}
                    href={b.href}
                    className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:border-[#e8b86d]/50 hover:bg-[#e8b86d]/5 transition-all group"
                  >
                    <div className="w-10 h-10 bg-[#e8b86d]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#e8b86d]/20 transition-colors">
                      <i className="ri-article-line text-[#e8b86d] text-lg" />
                    </div>
                    <div>
                      <span className="text-xs text-[#e8b86d] font-semibold">{b.tag}</span>
                      <div className="font-semibold text-gray-900 text-sm group-hover:text-[#e8b86d] transition-colors mt-0.5">
                        {b.title}
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5">{b.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="contact" className="py-20 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left: CTA Copy */}
            <div>
              <span className="text-[#e8b86d] text-sm font-semibold tracking-widest uppercase">
                Get a Free Quote
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
                Start Your 3D Walkthrough Project Today
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Share your project drawings and we&apos;ll send a detailed quote within 24 hours — with production timeline, pricing breakdown, and sample references relevant to your project type.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  { icon: "ri-time-line", title: "Quote in 24 Hours", desc: "Detailed scope, timeline, and pricing breakdown" },
                  { icon: "ri-draft-line", title: "Drawing Review Included", desc: "We review your CAD/PDF files before quoting — no hidden scope gaps" },
                  { icon: "ri-shield-check-line", title: "NDA on Request", desc: "Your project data and drawings are fully confidential" },
                ].map((i) => (
                  <div key={i.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#e8b86d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${i.icon} text-[#e8b86d] text-lg`} />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{i.title}</div>
                      <div className="text-gray-400 text-sm">{i.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <i className="ri-whatsapp-line text-green-400 text-2xl" />
                <div>
                  <div className="text-sm font-semibold">WhatsApp Us Directly</div>
                  <a
                    href="https://wa.me/919999999999"
                    className="text-green-400 text-sm hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 99999 99999
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              {submitStatus === "success" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-check-line text-3xl text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-400">
                    We&apos;ve received your enquiry. Our team will get back to you within 24 hours with a detailed quote.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">
                        Name <span className="text-[#e8b86d]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#e8b86d] transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">
                        Phone <span className="text-[#e8b86d]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#e8b86d] transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Email <span className="text-[#e8b86d]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#e8b86d] transition-colors text-sm"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">
                        Walkthrough Type
                      </label>
                      <select
                        name="project_type"
                        value={formData.project_type}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e8b86d] transition-colors text-sm appearance-none"
                      >
                        <option value="" className="bg-gray-900">Select type</option>
                        <option value="Residential Walkthrough" className="bg-gray-900">Residential Walkthrough</option>
                        <option value="Commercial Walkthrough" className="bg-gray-900">Commercial Walkthrough</option>
                        <option value="Township Flythrough" className="bg-gray-900">Township Flythrough</option>
                        <option value="Interior Cinematic" className="bg-gray-900">Interior Cinematic</option>
                        <option value="AI-Enhanced Premium" className="bg-gray-900">AI-Enhanced Premium</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">
                        City
                      </label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e8b86d] transition-colors text-sm appearance-none"
                      >
                        <option value="" className="bg-gray-900">Select city</option>
                        <option value="Mumbai" className="bg-gray-900">Mumbai</option>
                        <option value="Delhi NCR" className="bg-gray-900">Delhi NCR</option>
                        <option value="Bangalore" className="bg-gray-900">Bangalore</option>
                        <option value="Gurugram" className="bg-gray-900">Gurugram</option>
                        <option value="Pune" className="bg-gray-900">Pune</option>
                        <option value="Hyderabad" className="bg-gray-900">Hyderabad</option>
                        <option value="Chennai" className="bg-gray-900">Chennai</option>
                        <option value="Ahmedabad" className="bg-gray-900">Ahmedabad</option>
                        <option value="Other" className="bg-gray-900">Other City</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project — project name, location, scale, timeline, and any specific requirements..."
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#e8b86d] transition-colors text-sm resize-none"
                    />
                  </div>

                  {submitStatus === "error" && (
                    <p className="text-red-400 text-sm">
                      Something went wrong. Please try again or WhatsApp us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#e8b86d] hover:bg-[#d4a55a] disabled:opacity-60 text-black font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
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
                    We respond within 24 hours. Your information is confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 text-sm pr-4">{question}</span>
        <i
          className={`ri-arrow-down-s-line text-xl text-[#e8b86d] flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 bg-white border-t border-gray-100">
          <p className="text-gray-600 text-sm leading-relaxed pt-4">{answer}</p>
        </div>
      )}
    </div>
  );
}
