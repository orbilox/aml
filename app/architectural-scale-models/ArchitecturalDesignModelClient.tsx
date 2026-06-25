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
  image: string;
  description: string;
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

const processSteps = [
  { step: "01", title: "Design File Review", desc: "Share your SketchUp, Revit, AutoCAD, or Rhino files along with the model's purpose — concept review, competition, or client pitch." },
  { step: "02", title: "Scale & Scope Quotation", desc: "We recommend the right scale ratio and finish level for your timeline and purpose, with a written quote and production schedule." },
  { step: "03", title: "Digital Model Build", desc: "Our team converts your design files into a precise digital model ready for CNC and laser fabrication — your last chance to flag changes at zero cost." },
  { step: "04", title: "Fabrication & Finishing", desc: "CNC-cut components, hand-finishing, and material-accurate detailing assembled to your design intent." },
  { step: "05", title: "Delivery or Studio Pickup", desc: "Careful packaging and delivery to your studio, client site, or competition venue — anywhere in India." },
];

const stats = [
  { value: "200+", label: "Scale Models Delivered" },
  { value: "7 Days", label: "Fastest Turnaround" },
  { value: "1:1000–1:10", label: "Scale Range" },
  { value: "Pan-India", label: "Studio & Site Delivery" },
];

export default function ArchitecturalDesignModelClient() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    firm: "",
    modelType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const portfolioProjects: Project[] = [
    {
      id: 1,
      title: "The Dualis, Shapoorji Pallonji",
      category: "Architectural Scale Models",
      image: "/images/services/architectural-scale-models/shapoorji/01.png",
      description: "A premium, space-efficient, visually engaging scale model solution that delivers maximum impact without occupying excessive space.",
    },
    {
      id: 2,
      title: "Indian Railways",
      category: "Scale Models",
      image: "/images/services/architectural-scale-models/2.jpg",
      description: "Intricate scale model for Indian Railways infrastructure project, demonstrating station layouts, platform configurations, and surrounding urban integration with meticulous attention to operational details.",
    },
    {
      id: 3,
      title: "Hiranandani Meadows, Thane",
      category: "Scale Models",
      image: "/images/services/architectural-scale-models/3.jpg",
      description: "Elaborate architectural scale model of Hiranandani Meadows in Thane, capturing the sprawling residential township with multi-story buildings, green corridors, and integrated community facilities.",
    },
    {
      id: 4,
      title: "Venkatesh Skydale, Pune",
      category: "Scale Models",
      image: "/images/services/architectural-scale-models/4.jpg",
      description: "Sophisticated scale model of Venkatesh Skydale residential project in Pune, highlighting the twin-tower configuration, podium-level amenities, and contextual urban setting with accurate proportions.",
    },
    {
      id: 5,
      title: "Spree City, Sonipat",
      category: "Scale Models",
      image: "/images/services/architectural-scale-models/5.jpg",
      description: "Comprehensive architectural scale model for Spree City in Sonipat, representing a mixed-use development with residential zones, commercial areas, and extensive landscaping across multiple phases.",
    },
    {
      id: 6,
      title: "Skyline Realty, Hyderabad",
      category: "Scale Models",
      image: "/images/services/architectural-scale-models/6.jpg",
      description: "Detailed architectural scale model for Skyline Realty's premium development in Hyderabad, showcasing contemporary high-rise design, rooftop amenities, and sophisticated urban living spaces.",
    },
    {
      id: 7,
      title: "Island City Centre, Mumbai",
      category: "Scale Models",
      image: "/images/services/architectural-scale-models/7.jpg",
      description: "Premium architectural scale model of Island City Centre in Mumbai, depicting a landmark mixed-use development with commercial towers, retail podiums, and waterfront promenade integration.",
    },
    {
      id: 8,
      title: "Centonic, Pune",
      category: "Scale Models",
      image: "/images/services/architectural-scale-models/1.jpg",
      description: "Precision architectural scale model showcasing Centonic's contemporary residential development in Pune, featuring detailed landscaping, modern tower structures, and comprehensive amenity planning.",
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
          subject: "New Lead — Architectural Design Model Page",
          from_name: formData.name,
          ...formData,
        }),
      });
      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", firm: "", modelType: "", message: "" });
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

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <i className="ri-close-line text-lg" />
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-auto" />
            <div className="p-6">
              <div className="flex gap-2 mb-3">
                <span className="text-xs bg-yellow-400 text-black font-semibold px-2 py-1 rounded">{selectedProject.category}</span>
              </div>
              <h3 className="font-bold text-black text-lg mb-2">{selectedProject.title}</h3>
              <p className="text-gray-600 text-sm">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative bg-[#0a0a0a] text-white overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/services/architectural-scale-models/2.jpg"
            alt="Scale model making company India — Alliance Media Labs"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[2px] bg-yellow-400" />
              <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">
                Scale Model Making Company India
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              India&apos;s Trusted Scale Model Making{" "}
              <span className="text-yellow-400">Company</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4 max-w-2xl">
              As a leading scale model making company, we build architectural scale models, real estate scale models, and miniature models for developers and architects across India — backed by expert scale model makers and scale model builders.
            </p>
            <p className="text-base text-gray-400 mb-10 max-w-2xl">
              From precision miniature model making to full 3D scale model maker and 3D model making service, our scale model making process covers every stage from digital drawings to sales-office installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                <i className="ri-quill-pen-line" />
                Request a Quote
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-8 py-4 rounded-lg transition-colors text-lg"
              >
                <i className="ri-gallery-line" />
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-yellow-400 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-black">{s.value}</div>
                <div className="text-sm font-semibold text-black/70 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose our scale model making company */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">Why Choose Our Scale Model Making Company</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Trusted Scale Model Makers & Scale Model Builders</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              As a scale model making company, we build architectural scale models, real estate scale models, and miniature models under one roof — with no outsourcing at any stage.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "ri-pencil-ruler-2-line", title: "In-House 3D Scale Model Maker Workflow", desc: "Our 3D scale model maker process works directly from SketchUp, Revit, Rhino, and AutoCAD files — a full 3D model making service before any physical fabrication begins." },
              { icon: "ri-time-line", title: "Deadline-Aware Scale Model Making", desc: "Competition entries and sales-office launches run on fixed dates. As a scale model making company, we build production schedules around your deadline, not the other way around." },
              { icon: "ri-stack-line", title: "Experienced Scale Model Makers", desc: "Our scale model makers and scale model builders handle every model type — from quick miniature model making to large real estate scale models — with consistent quality." },
              { icon: "ri-tools-line", title: "Material-Accurate Detailing", desc: "Facade systems, material junctions, and finishes are represented accurately in every architectural scale model — critical for both sales and design-review use." },
              { icon: "ri-shield-check-line", title: "Confidentiality on Unreleased Designs", desc: "Competition entries and unreleased developer projects are handled under NDA on request — your design stays confidential until you choose to reveal it." },
              { icon: "ri-truck-line", title: "Pan-India Delivery by Our Scale Model Builders", desc: "Careful packaging and delivery direct to your studio, sales office, or exhibition venue — our scale model builders install and test on-site anywhere in India." },
            ].map((f) => (
              <div key={f.title} className="bg-gray-50 rounded-xl p-7 border border-gray-100 hover:border-yellow-400/50 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-yellow-400/20 transition-colors">
                  <i className={`${f.icon} text-2xl text-yellow-500`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Types */}
      <section className="py-20 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">Model Types</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">6 Types of Scale Models We Build</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modelTypes.map((mt) => (
              <div key={mt.title} className="rounded-xl p-7 border border-white/10 bg-white/5 hover:border-yellow-400/60 transition-all">
                <div className="w-11 h-11 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-5">
                  <i className={`${mt.icon} text-xl text-yellow-400`} />
                </div>
                <h3 className="text-lg font-bold mb-2">{mt.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">{mt.desc}</p>
                <span className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">Scale: {mt.scale}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">Our Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Architectural Scale Models Portfolio</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              A sample of the architectural scale models and real estate scale models delivered by our scale model makers for developers across India.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolioProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="text-xs bg-yellow-400 text-black font-semibold px-2 py-1 rounded">{project.category}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{project.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-lg transition-colors">
              <i className="ri-gallery-line" />
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">How We Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Our 5-Step Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {processSteps.map((step) => (
              <div key={step.step} className="relative bg-gray-50 rounded-xl p-7 border border-gray-100 hover:border-yellow-400/40 hover:shadow-md transition-all">
                <div className="text-5xl font-black text-yellow-400/20 absolute top-5 right-5">{step.step}</div>
                <div className="w-9 h-9 bg-yellow-400 text-black rounded-lg flex items-center justify-center text-sm font-black mb-5">{step.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-5">
            {[
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
            ].map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Services & Blogs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <i className="ri-stack-line text-yellow-500" />
                Related Services
              </h3>
              <div className="grid gap-4">
                {[
                  { href: "/services/architectural-scale-models", title: "Architectural Scale Models", desc: "Sales-office models for real estate launches and developer presentations.", icon: "ri-building-line" },
                  { href: "/services/scale-model-maker-india", title: "Scale Model Maker India", desc: "Pan-India scale model fabrication for developers and infrastructure projects.", icon: "ri-map-pin-line" },
                  { href: "/services/3d-renders-isometrics", title: "3D Renders & Isometrics", desc: "Photorealistic renders and isometric views for design presentations.", icon: "ri-image-line" },
                ].map((s) => (
                  <Link key={s.href} href={s.href} className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:border-yellow-400/50 hover:bg-yellow-400/5 transition-all group">
                    <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                      <i className={`${s.icon} text-yellow-500 text-lg`} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm group-hover:text-yellow-600 transition-colors">{s.title}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{s.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <i className="ri-article-line text-yellow-500" />
                Related Articles
              </h3>
              <div className="grid gap-4">
                {[
                  { href: "/blog/scale-model-making-india-complete-guide", title: "Scale Model Making in India: The Complete Guide", tag: "Guide" },
                  { href: "/blog/best-architectural-scale-model-company-india", title: "Best Architectural Scale Model Company in India", tag: "B2B Guide" },
                  { href: "/blog/architectural-scale-model-price-india-2026", title: "Architectural Scale Model Price in India 2026", tag: "Pricing" },
                ].map((b) => (
                  <Link key={b.href} href={b.href} className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:border-yellow-400/50 hover:bg-yellow-400/5 transition-all group">
                    <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                      <i className="ri-article-line text-yellow-500 text-lg" />
                    </div>
                    <div>
                      <span className="text-xs text-yellow-600 font-semibold">{b.tag}</span>
                      <div className="font-semibold text-gray-900 text-sm group-hover:text-yellow-600 transition-colors mt-0.5">{b.title}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">Get a Quote</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">Talk to Our Scale Model Making Company</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Share your drawings and deadline — our scale model makers will respond with a recommended scale, timeline, and quote within 24 hours.
              </p>
              <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <i className="ri-whatsapp-line text-green-400 text-2xl" />
                <div>
                  <div className="text-sm font-semibold">WhatsApp Us Directly</div>
                  <a href="https://wa.me/919999999999" className="text-green-400 text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                    +91 99999 99999
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              {submitStatus === "success" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-check-line text-3xl text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-400">We&apos;ve received your enquiry. Our team will respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Name <span className="text-yellow-400">*</span></label>
                      <input type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="Your full name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Phone <span className="text-yellow-400">*</span></label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="+91 98765 43210" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Email <span className="text-yellow-400">*</span></label>
                    <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="you@studio.com" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Firm / Studio Name</label>
                      <input type="text" name="firm" value={formData.firm} onChange={handleInputChange} placeholder="Your firm name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Model Type</label>
                      <select name="modelType" value={formData.modelType} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors text-sm appearance-none">
                        <option value="" className="bg-gray-900">Select type</option>
                        <option value="Architectural Scale Model" className="bg-gray-900">Architectural Scale Model</option>
                        <option value="Real Estate Scale Model" className="bg-gray-900">Real Estate Scale Model</option>
                        <option value="Miniature Model" className="bg-gray-900">Miniature Model</option>
                        <option value="Township/Master Plan Model" className="bg-gray-900">Township / Master Plan Model</option>
                        <option value="Concept/Competition Model" className="bg-gray-900">Concept / Competition Model</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Project Details</label>
                    <textarea name="message" rows={4} value={formData.message} onChange={handleInputChange} placeholder="Project name, deadline, scale preference, and any specific requirements..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm resize-none" />
                  </div>
                  {submitStatus === "error" && (
                    <p className="text-red-400 text-sm">Something went wrong. Please try again or WhatsApp us directly.</p>
                  )}
                  <button type="submit" disabled={isSubmitting} className="w-full bg-yellow-400 hover:bg-yellow-300 disabled:opacity-60 text-black font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="ri-send-plane-line" />
                        Request a Quote
                      </>
                    )}
                  </button>
                  <p className="text-center text-gray-500 text-xs">We respond within 24 hours. Your project details are confidential.</p>
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
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors">
        <span className="font-semibold text-gray-900 text-sm pr-4">{question}</span>
        <i className={`ri-arrow-down-s-line text-xl text-yellow-500 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 bg-white border-t border-gray-100">
          <p className="text-gray-600 text-sm leading-relaxed pt-4">{answer}</p>
        </div>
      )}
    </div>
  );
}
