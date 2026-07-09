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

const renderTypes = [
  {
    icon: "ri-building-line",
    title: "3D House Rendering",
    desc: "Photorealistic exterior and interior 3D house rendering for individual units, sample flats, and full towers.",
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
    title: "3D Isometric Views",
    desc: "Isometric renders showing full-site layouts, unit distribution, and master plans in a single, easy-to-read visual.",
  },
  {
    icon: "ri-sofa-line",
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
  { step: "01", title: "Drawing Review", desc: "Share your CAD, Revit, or SketchUp files along with reference material and the purpose of the render." },
  { step: "02", title: "Scope & Quotation", desc: "We recommend the right render type — 3D house rendering, floor plan, or isometric — with a written quote and timeline." },
  { step: "03", title: "3D Build & Render", desc: "Our team models, textures, and lights every scene for photorealistic accuracy, using AI 3D rendering tools to speed up iteration." },
  { step: "04", title: "Review & Delivery", desc: "You review draft renders, request revisions, and receive final high-resolution files ready for print and digital use." },
];

const stats = [
  { value: "500+", label: "3D Renders Delivered" },
  { value: "7 Days", label: "Fastest Turnaround" },
  { value: "4K+", label: "Delivery Resolution" },
  { value: "Pan-India", label: "Remote Delivery" },
];

export default function RendersIsometricsFlatClient() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    firm: "",
    renderType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const portfolioProjects: Project[] = [
    {
      id: 1,
      title: "Multiple Projects",
      category: "3D Rendering",
      image: "/images/portfolio/4.png",
      description: "Comprehensive collection of 3D still renders showcasing various residential developments with detailed architectural visualization.",
    },
    {
      id: 2,
      title: "Etereo 1, Goa",
      category: "3D Isometrics",
      image: "/images/portfolio/15.jpg",
      description: "Premium residential project featuring contemporary design and luxury amenities in the heart of Goa with comprehensive isometric visualization.",
    },
    {
      id: 3,
      title: "Shree Radha Gopal Residency, Kosi",
      category: "3D Renders",
      image: "/images/services/3d-renders-isometrics/shree-radha/1.png",
      description: "Photorealistic 3D renders of a residential plotted development with modern amenities and green spaces.",
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
          subject: "New Lead — 3D Renders & Isometrics Page",
          from_name: formData.name,
          ...formData,
        }),
      });
      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", firm: "", renderType: "", message: "" });
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
            src="/images/services/3d-renders-isometrics/1.jpg"
            alt="3D house rendering India — Alliance Media Labs"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[2px] bg-yellow-400" />
              <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">3D House Rendering India</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              3D House <span className="text-yellow-400">Rendering</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4 max-w-2xl">
              A complete architectural visualization services partner — 3D renders, 3D floor plan design, and isometric views for real estate developers across India.
            </p>
            <p className="text-base text-gray-400 mb-10 max-w-2xl">
              From a single 3D render to a full architectural rendering services rollout, our team delivers with AI-assisted speed and in-house precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                <i className="ri-image-2-line" />
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

      {/* Why choose us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">Why Choose Our Architectural Rendering Company</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">3D Rendering Services Built for Real Estate</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              As an architectural rendering company, we deliver 3D house rendering, 3D visualisation, and architectural rendering services under one roof.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "ri-pencil-ruler-2-line", title: "In-House 3D Rendering Team", desc: "Our 3D rendering services work directly from CAD, Revit, and SketchUp files — no outsourcing at any stage of the architectural visualization process." },
              { icon: "ri-time-line", title: "Fast, Deadline-Aware Delivery", desc: "3D renders and 3D floor plan design delivered on schedule for launches, brochures, and hoarding print deadlines." },
              { icon: "ri-magic-line", title: "AI 3D Rendering, Human Finishing", desc: "AI 3D rendering speeds up texturing and lighting studies; our artists refine every scene for photorealistic accuracy." },
              { icon: "ri-hd-line", title: "High-Resolution Output", desc: "Every 3D render is delivered print-ready at 4K+ resolution, suitable for hoardings, brochures, and digital ads." },
              { icon: "ri-shape-line", title: "Isometric & Floor Plan Expertise", desc: "3D floor plan designer skills combined with full-site isometric renders for master plans and unit-level marketing." },
              { icon: "ri-global-line", title: "Architectural Visualization Services Pan-India", desc: "We deliver architectural visualization services in India remotely — no site visit required for most rendering work." },
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

      {/* Render Types */}
      <section className="py-20 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">Rendering Types</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">6 Types of 3D Rendering We Deliver</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderTypes.map((mt) => (
              <div key={mt.title} className="rounded-xl p-7 border border-white/10 bg-white/5 hover:border-yellow-400/60 transition-all">
                <div className="w-11 h-11 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-5">
                  <i className={`${mt.icon} text-xl text-yellow-400`} />
                </div>
                <h3 className="text-lg font-bold mb-2">{mt.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{mt.desc}</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">3D Renders & Isometrics Portfolio</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              A sample of the 3D house rendering, 3D renders, and isometric visualisation delivered by our team for developers across India.
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
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                      <i className="ri-image-line text-2xl text-black" />
                    </div>
                  </div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Our 4-Step Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
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
                a: "Look for an architectural rendering company with an in-house team, a real estate-specific portfolio, and a track record of accurate scale and lighting. Ask to see full-resolution 3D renders from a completed project first.",
              },
              {
                q: "Can you produce 3D rendering of house plans before construction begins?",
                a: "Yes. Our 3D rendering services work directly from architectural drawings, so we can produce accurate 3D house rendering and floor plans months before ground-breaking.",
              },
              {
                q: "Do you offer 3D rendering services near me across India?",
                a: "Yes. Our 3D rendering services are delivered remotely to developers across Mumbai, Delhi NCR, Bangalore, Pune, Hyderabad, and all major Indian cities.",
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
                  { href: "/services/3d-renders-isometrics", title: "3D Renders & Isometrics", desc: "Full-service architectural rendering for real estate marketing.", icon: "ri-image-line" },
                  { href: "/3d-walkthrough-videos", title: "3D Architectural Walkthrough Services", desc: "Cinematic 3D walkthrough videos built from your renders.", icon: "ri-video-line" },
                  { href: "/virtual-reality-tours", title: "Virtual Reality Tours", desc: "Interactive VR tours and 360 virtual photography.", icon: "ri-vr-glasses-line" },
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
                  { href: "/blog/3d-house-rendering-guide-india", title: "3D House Rendering in India: The Complete Guide for Real Estate Developers (2026)", tag: "Rendering" },
                  { href: "/blog/premium-real-estate-marketing-differentiation-india", title: "Why Your Premium Project Looks Like Every Other Listing Online", tag: "Marketing" },
                  { href: "/blog/real-estate-marketing-video-types-india", title: "7 Types of Real Estate Marketing Videos Every Indian Developer Should Use", tag: "Marketing" },
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
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">Talk to Our 3D Rendering Team</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Share your drawings — we&apos;ll recommend the right mix of 3D renders, floor plans, and isometric views, with a quote within 24 hours.
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
                    <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="you@company.com" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Company Name</label>
                      <input type="text" name="firm" value={formData.firm} onChange={handleInputChange} placeholder="Your company name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Render Type</label>
                      <select name="renderType" value={formData.renderType} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors text-sm appearance-none">
                        <option value="" className="bg-gray-900">Select type</option>
                        <option value="3D House Rendering" className="bg-gray-900">3D House Rendering</option>
                        <option value="3D Floor Plan Design" className="bg-gray-900">3D Floor Plan Design</option>
                        <option value="3D Isometric View" className="bg-gray-900">3D Isometric View</option>
                        <option value="3D Rendering Interior Design" className="bg-gray-900">3D Rendering Interior Design</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Project Details</label>
                    <textarea name="message" rows={4} value={formData.message} onChange={handleInputChange} placeholder="Project name, deadline, and any specific requirements..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm resize-none" />
                  </div>
                  {submitStatus === "error" && (
                    <p className="text-red-400 text-sm">Something went wrong. Please try again or WhatsApp us directly.</p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-400 hover:bg-yellow-300 disabled:opacity-50 text-black font-bold py-4 rounded-lg transition-colors"
                  >
                    {isSubmitting ? "Sending..." : "Get My Free Quote"}
                  </button>
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
        className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 text-sm sm:text-base">{question}</span>
        <i className={`ri-arrow-down-s-line text-xl text-gray-500 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed bg-white">{answer}</div>
      )}
    </div>
  );
}
