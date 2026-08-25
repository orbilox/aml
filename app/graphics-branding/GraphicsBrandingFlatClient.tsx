"use client";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { COUNTRY_CODES, DEFAULT_COUNTRY_CODE } from "@/lib/countryCodes";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const deliverableTypes = [
  {
    icon: "ri-palette-line",
    title: "Real Estate Graphics Design",
    desc: "Complete real estate graphics design for launches, sales offices, and digital campaigns — the foundation of our graphics for real estate offering.",
  },
  {
    icon: "ri-book-open-line",
    title: "Real Estate Brochure Design",
    desc: "Real estate brochure design and property brochure design built to convert — from concept to print-ready file.",
  },
  {
    icon: "ri-signpost-line",
    title: "Hoarding Design Service",
    desc: "Large-format hoarding design service and construction hoarding design for site signage and pre-launch visibility.",
  },
  {
    icon: "ri-store-2-line",
    title: "Commercial Real Estate Graphics",
    desc: "Commercial real estate graphics for office parks, retail, and mixed-use developments — investor-ready visuals.",
  },
  {
    icon: "ri-global-line",
    title: "Brochure Design Online",
    desc: "Fully remote brochure design online engagements — share drawings and get a brochure design company workflow without an in-person meeting.",
  },
  {
    icon: "ri-team-line",
    title: "Brochure Design Agency Engagement",
    desc: "Full brochure design agency support across brochures, hoardings, digital ads, and presentation decks on one visual system.",
  },
];

const processSteps = [
  { step: "01", title: "Discovery & Research", desc: "We study your project, target buyer, and competitor positioning before any design work begins." },
  { step: "02", title: "Concept Development", desc: "Initial real estate graphics concepts and brochure layouts presented for your review." },
  { step: "03", title: "Design Refinement", desc: "Revisions to typography, layout, and messaging until the design is launch-ready." },
  { step: "04", title: "Final Delivery", desc: "Print-ready and digital-ready files delivered — brochure, hoarding, and social assets in one package." },
];

const stats = [
  { value: "100+", label: "Brochures & Hoardings Designed" },
  { value: "10 Days", label: "Average Turnaround" },
  { value: "Print + Digital", label: "Every Deliverable" },
  { value: "Pan-India", label: "Remote Delivery" },
];

type GraphicsFormData = {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  firm: string;
  deliverableType: string;
  message: string;
};

type GraphicsFormErrors = Partial<Record<keyof GraphicsFormData, string>>;

function validateField(
  name: keyof GraphicsFormData,
  value: string,
): string | undefined {
  switch (name) {
    case "name":
      if (!value.trim()) return "Name is required.";
      if (value.trim().length < 2) return "Name must be at least 2 characters.";
      return undefined;
    case "email":
      if (!value.trim()) return "Email is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()))
        return "Enter a valid email address.";
      return undefined;
    case "phone": {
      if (!value.trim()) return "Phone number is required.";
      const digits = value.replace(/\D/g, "");
      if (digits.length !== 10) return "Enter a valid 10-digit mobile number.";
      return undefined;
    }
    default:
      return undefined;
  }
}

export default function GraphicsBrandingFlatClient() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: DEFAULT_COUNTRY_CODE,
    phone: "",
    firm: "",
    deliverableType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<GraphicsFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof GraphicsFormData, boolean>>>({});

  const inputClass = (field: keyof GraphicsFormData) =>
    `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent text-sm ${
      touched[field] && errors[field]
        ? "border-red-400 focus:ring-red-400"
        : "border-gray-300 focus:ring-yellow-400"
    }`;

  const darkInputClass = (field: keyof GraphicsFormData) =>
    `w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors text-sm ${
      touched[field] && errors[field]
        ? "border-red-400 focus:border-red-400"
        : "border-white/10 focus:border-yellow-400"
    }`;

  const portfolioProjects: Project[] = [
    {
      id: 1,
      title: "Prestige Towers",
      category: "Brand Identity • Marketing",
      image: "https://readdy.ai/api/search-image?query=Real%20estate%20branding%20design%20professional&width=600&height=400&seq=branding-portfolio-1&orientation=landscape",
      description: "Complete brand identity for luxury high-rise development with premium positioning.",
    },
    {
      id: 2,
      title: "Urban Living Brochure",
      category: "Print Design • Sales Materials",
      image: "https://readdy.ai/api/search-image?query=Real%20estate%20branding%20design%20professional&width=600&height=400&seq=branding-portfolio-2&orientation=landscape",
      description: "Comprehensive sales brochure showcasing modern residential development features.",
    },
    {
      id: 3,
      title: "Property Portal Website",
      category: "Web Design • UX/UI",
      image: "https://readdy.ai/api/search-image?query=Real%20estate%20branding%20design%20professional&width=600&height=400&seq=branding-portfolio-3&orientation=landscape",
      description: "User-friendly website design with advanced property search and virtual tours.",
    },
    {
      id: 4,
      title: "Social Media Campaign",
      category: "Social Media • Digital Marketing",
      image: "https://readdy.ai/api/search-image?query=Real%20estate%20branding%20design%20professional&width=600&height=400&seq=branding-portfolio-4&orientation=landscape",
      description: "Engaging social media templates and content strategy for property marketing.",
    },
    {
      id: 5,
      title: "Development Signage",
      category: "Signage • Wayfinding",
      image: "https://readdy.ai/api/search-image?query=Real%20estate%20branding%20design%20professional&width=600&height=400&seq=branding-portfolio-5&orientation=landscape",
      description: "Comprehensive signage system for large-scale mixed-use development project.",
    },
    {
      id: 6,
      title: "Investor Presentation",
      category: "Presentation • Corporate Design",
      image: "https://readdy.ai/api/search-image?query=Real%20estate%20branding%20design%20professional&width=600&height=400&seq=branding-portfolio-6&orientation=landscape",
      description: "Professional pitch deck design for major real estate investment opportunity.",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const field = name as keyof GraphicsFormData;
    const sanitized = field === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value;
    setFormData((prev) => ({ ...prev, [field]: sanitized }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, sanitized) }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const field = name as keyof GraphicsFormData;
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors: GraphicsFormErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
    };
    setErrors(nextErrors);
    setTouched((prev) => ({ ...prev, name: true, email: true, phone: true }));
    if (Object.values(nextErrors).some(Boolean)) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "a557c293-5de3-4d54-8636-50b7d3c406c7",
          subject: "New Lead — Real Estate Graphics & Branding Page",
          from_name: formData.name,
          ...formData,
        }),
      });
      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", countryCode: DEFAULT_COUNTRY_CODE, phone: "", firm: "", deliverableType: "", message: "" });
        setErrors({});
        setTouched({});
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
            src="/images/home/3.jpg"
            alt="Real estate graphics and brochure design India — Alliance Media Labs"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-[2px] bg-yellow-400" />
                <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">Real Estate Graphics & Brochure Design</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Real Estate <span className="text-yellow-400">Graphics</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4 max-w-2xl">
                A full brochure design agency partner — real estate brochure design, hoarding design service, and commercial real estate graphics for developers across India.
              </p>
              <p className="text-base text-gray-400 mb-10 max-w-2xl">
                From a single property brochure design to a complete graphics for real estate rollout, we deliver print-ready and digital-ready in 10 days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-lg transition-colors text-lg"
                >
                  <i className="ri-palette-line" />
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
                    Share your project details and we&apos;ll respond within 24 hours.
                  </p>
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="Your full name"
                          className={inputClass("name")}
                        />
                        {touched.name && errors.name && (
                          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone *</label>
                        <div className="flex gap-2">
                          <select
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleInputChange}
                            className="px-2 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm bg-white w-[92px] flex-shrink-0"
                          >
                            {COUNTRY_CODES.map((c) => (
                              <option key={c.code} value={c.code}>{c.code}</option>
                            ))}
                          </select>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            maxLength={10}
                            inputMode="numeric"
                            placeholder="10-digit mobile number"
                            className={inputClass("phone")}
                          />
                        </div>
                        {touched.phone && errors.phone && (
                          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="you@company.com"
                        className={inputClass("email")}
                      />
                      {touched.email && errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="firm"
                          value={formData.firm}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Deliverable Type</label>
                        <select
                          name="deliverableType"
                          value={formData.deliverableType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        >
                          <option value="">Select type</option>
                          <option value="Real Estate Brochure Design">Real Estate Brochure Design</option>
                          <option value="Hoarding Design">Hoarding Design</option>
                          <option value="Commercial Real Estate Graphics">Commercial Real Estate Graphics</option>
                          <option value="Full Brochure Design Agency Package">Full Brochure Design Agency Package</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Project Details</label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Project name, deadline, and any specific requirements..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm resize-none"
                      />
                    </div>
                    {submitStatus === "error" && (
                      <p className="text-red-600 text-sm">Something went wrong. Please try again or WhatsApp us directly.</p>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-yellow-400 hover:bg-yellow-300 disabled:opacity-50 text-black font-bold py-3.5 rounded-lg transition-colors"
                    >
                      {isSubmitting ? "Sending..." : "Get My Free Quote"}
                    </button>
                  </form>
                </>
              )}
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
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">Why Choose Our Brochure Design Company</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Real Estate Graphic Design Services That Convert</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              As a brochure design agency, we deliver real estate graphics, hoarding design service, and commercial real estate graphics under one visual system.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "ri-pencil-ruler-2-line", title: "Real Estate-Specific Design Team", desc: "Our real estate graphic design services are built by a team that understands buyer psychology, not a generic design shop." },
              { icon: "ri-time-line", title: "Fast, Deadline-Aware Delivery", desc: "Real estate brochure design and hoarding design service delivered on schedule for launches and print deadlines." },
              { icon: "ri-stack-line", title: "One Visual System, Every Touchpoint", desc: "Brochures, hoardings, digital ads, and presentation decks stay consistent across every commercial real estate graphics deliverable." },
              { icon: "ri-global-line", title: "Brochure Design Online, No Site Visit Needed", desc: "Our brochure design service works fully remote — share your drawings and we handle the rest as a brochure design company." },
              { icon: "ri-signpost-line", title: "Construction Hoarding Expertise", desc: "Construction hoarding design built for real-world site conditions — large format, weatherproof, and on-brand." },
              { icon: "ri-team-line", title: "Full Brochure Design Agency Support", desc: "From a single property brochure design to a full brochure design agency engagement — scale up as your project grows." },
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

      {/* Deliverable Types */}
      <section className="py-20 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">Deliverable Types</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">6 Types of Real Estate Graphics We Design</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverableTypes.map((mt) => (
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Branding & Design Portfolio</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Explore real estate graphics, brochure design, and commercial real estate graphics created for leading property brands.
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
                q: "What is included in real estate graphic design services?",
                a: "Our real estate graphic design services cover real estate brochure design, hoarding design service, social media graphics, sales office branding, and digital ad creatives.",
              },
              {
                q: "What is the difference between property brochure design and a brochure design agency engagement?",
                a: "Property brochure design refers to a single brochure deliverable, while a full brochure design agency engagement includes brand-consistent collateral across brochures, hoardings, digital ads, and presentation decks.",
              },
              {
                q: "Do you offer brochure design online for developers outside major cities?",
                a: "Yes. Our brochure design service is delivered fully online — share your project details remotely, and we handle everything without requiring an in-person meeting.",
              },
              {
                q: "What is construction hoarding design and when is it needed?",
                a: "Construction hoarding design is large-format signage installed at a project site during construction — showing renders, amenities, and contact details to passersby.",
              },
              {
                q: "How do I choose the right brochure design company for a real estate project?",
                a: "Look for a brochure design company with real estate-specific experience, a portfolio of commercial real estate graphics, and the ability to handle hoarding design service and digital assets under one visual system.",
              },
              {
                q: "Does real estate graphics design cover both print and digital formats?",
                a: "Yes. Our real estate graphics design work is delivered in both print-ready and digital-ready formats — the same visual system scales from a hoarding to a brochure to an Instagram ad.",
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
                  { href: "/services/graphics-branding", title: "Real Estate Graphics & Branding", desc: "Full brand identity and marketing collateral design.", icon: "ri-palette-line" },
                  { href: "/services/digital-marketing", title: "Digital Marketing", desc: "Meta and Google campaigns for real estate lead generation.", icon: "ri-advertisement-line" },
                  { href: "/3d-renders-isometrics", title: "3D House Rendering", desc: "3D renders and floor plans for brochures and hoardings.", icon: "ri-image-2-line" },
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
                  { href: "/blog/premium-real-estate-marketing-differentiation-india", title: "Why Your Premium Project Looks Like Every Other Listing Online", tag: "Marketing" },
                  { href: "/blog/real-estate-marketing-video-types-india", title: "7 Types of Real Estate Marketing Videos Every Indian Developer Should Use", tag: "Marketing" },
                  { href: "/blog/scale-model-sales-gallery-real-estate-india", title: "What a Scale Model Actually Does Inside a Sales Gallery", tag: "Sales Gallery" },
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
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">Talk to Our Brochure Design Team</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Share your project details — we&apos;ll recommend the right mix of brochure, hoarding, and digital graphics, with a quote within 24 hours.
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
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Name <span className="text-yellow-400">*</span></label>
                      <input type="text" name="name" required value={formData.name} onChange={handleInputChange} onBlur={handleBlur} placeholder="Your full name" className={darkInputClass("name")} />
                      {touched.name && errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Phone <span className="text-yellow-400">*</span></label>
                      <div className="flex gap-2">
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleInputChange}
                          className="bg-white/5 border border-white/10 rounded-lg px-2 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors text-sm w-[92px] flex-shrink-0"
                        >
                          {COUNTRY_CODES.map((c) => (
                            <option key={c.code} value={c.code} className="bg-gray-900">{c.code}</option>
                          ))}
                        </select>
                        <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} onBlur={handleBlur} maxLength={10} inputMode="numeric" placeholder="10-digit mobile number" className={darkInputClass("phone")} />
                      </div>
                      {touched.phone && errors.phone && (
                        <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Email <span className="text-yellow-400">*</span></label>
                    <input type="email" name="email" required value={formData.email} onChange={handleInputChange} onBlur={handleBlur} placeholder="you@company.com" className={darkInputClass("email")} />
                    {touched.email && errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Company Name</label>
                      <input type="text" name="firm" value={formData.firm} onChange={handleInputChange} placeholder="Your company name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Deliverable Type</label>
                      <select name="deliverableType" value={formData.deliverableType} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors text-sm appearance-none">
                        <option value="" className="bg-gray-900">Select type</option>
                        <option value="Real Estate Brochure Design" className="bg-gray-900">Real Estate Brochure Design</option>
                        <option value="Hoarding Design" className="bg-gray-900">Hoarding Design</option>
                        <option value="Commercial Real Estate Graphics" className="bg-gray-900">Commercial Real Estate Graphics</option>
                        <option value="Full Brochure Design Agency Package" className="bg-gray-900">Full Brochure Design Agency Package</option>
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
