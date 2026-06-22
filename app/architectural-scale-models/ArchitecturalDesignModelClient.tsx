"use client";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

interface Project {
  id: number;
  title: string;
  type: string;
  scale: string;
  image: string;
  description: string;
}

const modelTypes = [
  {
    icon: "ri-shape-2-line",
    title: "Concept & Massing Models",
    desc: "Early-stage volumetric studies that test form, proportion, and site relationships before detailing begins. Simple material blocks, fast turnaround.",
    scale: "1:500 – 1:200",
  },
  {
    icon: "ri-trophy-line",
    title: "Competition Entry Models",
    desc: "Precision presentation models built to deadline for architectural competitions — clean finish, accurate massing, and the visual impact a jury notices.",
    scale: "1:200 – 1:100",
  },
  {
    icon: "ri-presentation-line",
    title: "Client Presentation Models",
    desc: "Detailed, finished models for client pitches and design reviews — material-accurate finishes, landscaping, and context buildings included.",
    scale: "1:100 – 1:50",
  },
  {
    icon: "ri-layout-3-line",
    title: "Design Development Models",
    desc: "Working models that evolve alongside the design process — staged production as a scheme is refined from concept to construction-ready.",
    scale: "1:100 – 1:50",
  },
  {
    icon: "ri-palette-line",
    title: "Material & Facade Study Models",
    desc: "Close-up models of facade systems, material junctions, and detailing — used to test and present material choices at large scale.",
    scale: "1:20 – 1:10",
  },
  {
    icon: "ri-building-4-line",
    title: "Context & Site Models",
    desc: "Models showing a proposed building within its urban or landscape context — critical for planning submissions and urban design reviews.",
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
  { value: "150+", label: "Design Models Delivered" },
  { value: "7 Days", label: "Fastest Competition Turnaround" },
  { value: "1:1000–1:10", label: "Scale Range" },
  { value: "Pan-India", label: "Studio Delivery" },
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
      title: "Residential Tower Massing Study",
      type: "Concept Model",
      scale: "1:500",
      image: "/images/services/architectural-scale-models/2.jpg",
      description: "Early massing study exploring tower form and floor-plate efficiency for a residential design proposal.",
    },
    {
      id: 2,
      title: "Mixed-Use Competition Entry",
      type: "Competition Model",
      scale: "1:200",
      image: "/images/services/architectural-scale-models/3.jpg",
      description: "Competition-ready presentation model built to a 10-day deadline for a mixed-use design competition submission.",
    },
    {
      id: 3,
      title: "Township Master Plan Presentation",
      type: "Client Presentation Model",
      scale: "1:100",
      image: "/images/services/architectural-scale-models/4.jpg",
      description: "Detailed presentation model for a design review with the client board — full landscaping and amenity detailing.",
    },
    {
      id: 4,
      title: "Facade System Study Model",
      type: "Material Study Model",
      scale: "1:20",
      image: "/images/services/architectural-scale-models/5.jpg",
      description: "Close-scale model studying a louvre facade system and material junctions ahead of construction documentation.",
    },
    {
      id: 5,
      title: "Institutional Campus Context Model",
      type: "Context Model",
      scale: "1:500",
      image: "/images/services/architectural-scale-models/6.jpg",
      description: "Site and context model for an institutional campus design, showing the proposal within its urban surroundings.",
    },
    {
      id: 6,
      title: "Design Development Working Model",
      type: "Design Development Model",
      scale: "1:100",
      image: "/images/services/architectural-scale-models/7.jpg",
      description: "Staged working model produced alongside a residential design as it evolved from concept to construction-ready.",
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
                <span className="text-xs bg-yellow-400 text-black font-semibold px-2 py-1 rounded">{selectedProject.type}</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{selectedProject.scale}</span>
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
            alt="Architectural design model maker for architects — Alliance Media Labs"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[2px] bg-yellow-400" />
              <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">
                For Architects & Design Studios
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Architectural Design Model Maker for{" "}
              <span className="text-yellow-400">Architects</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4 max-w-2xl">
              Concept models, competition entries, client presentation models, and design-development models — built from your drawings with precision CNC fabrication, for architecture firms and design studios across India.
            </p>
            <p className="text-base text-gray-400 mb-10 max-w-2xl">
              From early massing studies to detailed presentation models, we support every stage of the design process.
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

      {/* Why architects choose us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">Why Architecture Firms Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Built for the Design Process, Not Just Sales</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Real estate sales models and architectural design models solve different problems. We understand the difference — and build accordingly.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "ri-pencil-ruler-2-line", title: "We Read Design Drawings, Not Just Marketing Briefs", desc: "Our team works directly from SketchUp, Revit, Rhino, and AutoCAD files — understanding design intent, not just translating a brochure." },
              { icon: "ri-time-line", title: "Deadline-Aware Production", desc: "Competition entries and client pitches run on fixed dates. We build production schedules around your deadline, not the other way around." },
              { icon: "ri-stack-line", title: "Staged Model Production", desc: "Models can evolve with your design — an early massing study followed by a refined presentation model once the scheme is locked." },
              { icon: "ri-tools-line", title: "Material-Accurate Detailing", desc: "Facade systems, material junctions, and finishes are represented accurately — critical for design-development and material study models." },
              { icon: "ri-shield-check-line", title: "Confidentiality on Unreleased Designs", desc: "Competition entries and unreleased client work are handled under NDA on request — your design stays confidential until you choose to reveal it." },
              { icon: "ri-truck-line", title: "Studio & Venue Delivery Anywhere in India", desc: "Careful packaging and delivery direct to your studio, a client's office, or a competition venue — nationwide." },
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
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">6 Types of Design Models We Build</h2>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Design Model Portfolio</h2>
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
                    <span className="text-xs bg-yellow-400 text-black font-semibold px-2 py-1 rounded">{project.type}</span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="text-xs bg-black/70 text-white px-2 py-1 rounded backdrop-blur-sm">{project.scale}</span>
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
                q: "Do you make models for architecture firms, not just real estate developers?",
                a: "Yes. We work directly with architecture firms and design studios on concept models, massing studies, competition entries, and client presentation models — produced from your design drawings at any stage of the design process.",
              },
              {
                q: "What is a concept or massing model and when is it needed?",
                a: "A concept or massing model is a simplified physical study of a building's volumes, proportions, and site relationships — used early in design to test form and context before detailing begins.",
              },
              {
                q: "Can you produce a model for a design competition on a tight deadline?",
                a: "Yes. We offer rush production for concept and presentation models — typically 7–12 working days depending on scale and detail level, once drawings are finalised.",
              },
              {
                q: "What scale ratios do you work in for design and presentation models?",
                a: "We work across the full range used in architectural practice — from 1:500 and 1:200 site/massing models to 1:100 and 1:50 detailed presentation models, and 1:20 material/facade study models.",
              },
              {
                q: "Do you work directly with architects on revisions during the design process?",
                a: "Yes. We support staged model production — an initial massing study followed by a refined presentation model once the design is locked — keeping cost proportional to each design stage.",
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
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">Start Your Design Model Project</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Share your design files and deadline — we&apos;ll respond with a recommended scale, timeline, and quote within 24 hours.
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
                        <option value="Concept/Massing Model" className="bg-gray-900">Concept / Massing Model</option>
                        <option value="Competition Entry" className="bg-gray-900">Competition Entry</option>
                        <option value="Client Presentation Model" className="bg-gray-900">Client Presentation Model</option>
                        <option value="Design Development Model" className="bg-gray-900">Design Development Model</option>
                        <option value="Material/Facade Study" className="bg-gray-900">Material / Facade Study</option>
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
