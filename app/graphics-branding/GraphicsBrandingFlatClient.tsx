"use client";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { COUNTRY_CODES, DEFAULT_COUNTRY_CODE } from "@/lib/countryCodes";

interface PortfolioItem {
  id: number;
  title: string;
  desc: string;
  image: string;
  tag: string;
  label: string;
}

const whatWeDeliver = [
  {
    icon: "ri-pen-nib-line",
    title: "Brand Identity & Logo",
    desc: "Professional real estate graphics design including logos, brand guidelines, typography systems, and complete visual identity solutions for real estate brands.",
  },
  {
    icon: "ri-file-text-line",
    title: "Real Estate Brochure Design",
    desc: "Premium real estate brochure design and property brochure design services for developers. We offer brochure design online, print-ready sales collaterals, and complete brochure design agency support for luxury and commercial projects.",
  },
  {
    icon: "ri-megaphone-line",
    title: "Construction Hoarding Design",
    desc: "Creative hoarding design service and large-scale construction hoarding design solutions built for high visibility, branding impact, and roadside marketing.",
  },
  {
    icon: "ri-instagram-line",
    title: "Social Media Kit",
    desc: "Custom graphics for real estate campaigns including branded social media creatives, launch posts, digital ads, and marketing templates.",
  },
  {
    icon: "ri-mail-line",
    title: "Email & WhatsApp Templates",
    desc: "Branded communication templates for launch mailers, construction updates, and festival creatives.",
  },
  {
    icon: "ri-building-4-line",
    title: "Sales Office Branding",
    desc: "Commercial real estate graphics and sales office branding including wall graphics, directional signage, backlit panels, and customer experience design.",
  },
];

const brandingSolutions = [
  {
    icon: "ri-award-line",
    title: "Logo & Brand Identity",
    desc: "Premium real estate graphics and brand identity systems that establish a strong visual presence for residential and commercial developments.",
  },
  {
    icon: "ri-book-open-line",
    title: "Marketing Collaterals",
    desc: "Professional real estate brochure design, property brochure design, flyers, and marketing materials crafted for maximum buyer engagement.",
  },
  {
    icon: "ri-global-line",
    title: "Digital Assets",
    desc: "Modern graphics for real estate websites, social media campaigns, and digital advertising creatives optimized for online marketing.",
  },
  {
    icon: "ri-signpost-line",
    title: "Signage & Wayfinding",
    desc: "Professional hoarding design service, construction hoarding design, and signage systems for sales offices and project sites.",
  },
  {
    icon: "ri-presentation-line",
    title: "Presentation Design",
    desc: "Compelling presentation templates and pitch decks for investor meetings and client presentations.",
  },
  {
    icon: "ri-layout-line",
    title: "Layout & Typography",
    desc: "Strategic real estate graphics design and typography systems that ensure premium and consistent brand communication.",
  },
];

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Prestige Towers",
    desc: "Complete brand identity for luxury high-rise development with premium positioning.",
    image: "https://readdy.ai/api/search-image?query=Real%20estate%20branding%20design%20professional&width=400&height=300&seq=branding-portfolio-1&orientation=landscape",
    tag: "ri-palette-line",
    label: "Brand Identity • Marketing",
  },
  {
    id: 2,
    title: "Urban Living Brochure",
    desc: "Comprehensive sales brochure showcasing modern residential development features.",
    image: "https://readdy.ai/api/search-image?query=Real%20estate%20branding%20design%20professional&width=400&height=300&seq=branding-portfolio-2&orientation=landscape",
    tag: "ri-book-open-line",
    label: "Print Design • Sales Materials",
  },
  {
    id: 3,
    title: "Property Portal Website",
    desc: "User-friendly website design with advanced property search and virtual tours.",
    image: "https://readdy.ai/api/search-image?query=Real%20estate%20branding%20design%20professional&width=400&height=300&seq=branding-portfolio-3&orientation=landscape",
    tag: "ri-global-line",
    label: "Web Design • UX/UI",
  },
  {
    id: 4,
    title: "Social Media Campaign",
    desc: "Engaging social media templates and content strategy for property marketing.",
    image: "https://readdy.ai/api/search-image?query=Real%20estate%20branding%20design%20professional&width=400&height=300&seq=branding-portfolio-4&orientation=landscape",
    tag: "ri-smartphone-line",
    label: "Social Media • Digital Marketing",
  },
  {
    id: 5,
    title: "Development Signage",
    desc: "Comprehensive signage system for large-scale mixed-use development project.",
    image: "https://readdy.ai/api/search-image?query=Real%20estate%20branding%20design%20professional&width=400&height=300&seq=branding-portfolio-5&orientation=landscape",
    tag: "ri-signpost-line",
    label: "Signage • Wayfinding",
  },
  {
    id: 6,
    title: "Investor Presentation",
    desc: "Professional pitch deck design for major real estate investment opportunity.",
    image: "https://readdy.ai/api/search-image?query=Real%20estate%20branding%20design%20professional&width=400&height=300&seq=branding-portfolio-6&orientation=landscape",
    tag: "ri-presentation-line",
    label: "Presentation • Corporate Design",
  },
];

const processSteps = [
  { num: "1", title: "Discovery & Research", desc: "Understanding your brand values, target audience, and competitive landscape to inform design decisions." },
  { num: "2", title: "Concept Development", desc: "Creating multiple design concepts and exploring different creative directions based on research insights." },
  { num: "3", title: "Design Refinement", desc: "Refining chosen concepts through iterative design process and client feedback integration." },
  { num: "4", title: "Final Delivery", desc: "Delivering final designs with comprehensive brand guidelines and all necessary file formats." },
];

const designCategories = [
  {
    icon: "ri-building-line",
    title: "Project Branding",
    desc: "Complete real estate graphics and branding systems for residential, commercial, and mixed-use property developments.",
    items: ["Project logos and naming", "Color schemes and typography", "Marketing material templates", "Environmental graphics"],
  },
  {
    icon: "ri-store-line",
    title: "Corporate Branding",
    desc: "Commercial real estate graphics and visual identity systems for real estate companies and developer brands.",
    items: ["Corporate logo and identity", "Business card and stationery", "Office branding and signage", "Brand guidelines manual"],
  },
  {
    icon: "ri-smartphone-line",
    title: "Digital Graphics",
    desc: "Modern graphics for real estate marketing including digital creatives, social media templates, and online branding campaigns.",
    items: ["Social media templates", "Website graphics and banners", "Email marketing templates", "Digital advertising creatives"],
  },
  {
    icon: "ri-printer-line",
    title: "Print Materials",
    desc: "Premium property brochure design, sales catalogues, and brochure design service solutions for print marketing.",
    items: ["Sales brochures and catalogs", "Floor plan layouts", "Outdoor advertising materials", "Trade show displays"],
  },
];

const whyChoose = [
  {
    icon: "ri-building-4-line",
    title: "Real Estate Specialists",
    desc: "We work exclusively with real estate developers. We understand RERA disclaimers, buyer psychology, and what sells at a site visit.",
  },
  {
    icon: "ri-palette-line",
    title: "Design + Strategy",
    desc: "We combine real estate graphic design services with strategic marketing thinking to create brochures, hoardings, and branding assets that generate enquiries.",
  },
  {
    icon: "ri-time-line",
    title: "Fast Turnarounds",
    desc: "Launch deadline approaching? We deliver high-quality branding in days, not weeks. Our team works across time zones to meet your schedule.",
  },
  {
    icon: "ri-refresh-line",
    title: "One Creative Partner",
    desc: "From brochure design company support to complete brochure design agency services, one team handles your entire branding ecosystem.",
  },
];

const faqs = [
  {
    q: "How long does a real estate brochure take to design?",
    a: "A standard 16-page sales brochure takes 7–10 working days from brief to final files. We share concept layouts for approval before proceeding to detailed design.",
  },
  {
    q: "What formats do you deliver design files in?",
    a: "We deliver print-ready PDF files (CMYK, 300 DPI) for physical production and web-optimised PDF/JPG versions for digital use. Source files (AI, PSD, InDesign) are available on request.",
  },
  {
    q: "How many revision rounds are included?",
    a: "Every project includes 2 rounds of revisions. Additional rounds are available. We present concepts clearly and work collaboratively to get the design right.",
  },
  {
    q: "Can you design hoardings in custom sizes?",
    a: "Yes. We design hoardings in any dimension — from 10x20 ft site boards to 40x80 ft highway hoardings. We provide files formatted for your printer's specifications.",
  },
  {
    q: "Do you also handle brand identity from scratch?",
    a: "Yes. We offer complete brand identity packages — logo, colour palette, typography, brand guidelines, and usage documentation. Ideal for new project launches or rebranding existing ones.",
  },
  {
    q: "Do you provide brochure design online services?",
    a: "Yes. We provide brochure design online services for developers across India and internationally. Clients can collaborate remotely while receiving complete brochure design service support including layouts, revisions, and print-ready delivery.",
  },
  {
    q: "Do you handle commercial real estate graphics?",
    a: "Yes. We create commercial real estate graphics including leasing brochures, office branding, construction hoarding design, investor decks, and marketing campaigns for commercial projects.",
  },
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
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-lg transition-colors text-lg"
                >
                  <i className="ri-palette-line" />
                  Get Quote
                </a>
                <a
                  href="/portfolio"
                  className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-8 py-4 rounded-lg transition-colors text-lg"
                >
                  <i className="ri-gallery-line" />
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

      {/* What We Deliver */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">What We Deliver</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              A complete real estate graphics design toolkit — from logo creation and brochure design service to launch campaigns and construction hoarding design.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeDeliver.map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${item.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Branding Solutions */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Complete Branding Solutions</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive real estate graphic design services tailored for developers, builders, and commercial real estate marketing campaigns.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandingSolutions.map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${item.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Branding &amp; Design Portfolio</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore premium real estate graphics, brochure design services, and commercial real estate graphics created for leading property brands.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover object-top" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className={`${item.tag} mr-2`}></i>
                    <span>{item.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-full transition-colors"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Real Estate Graphics Design Process</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
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

      {/* Design Categories Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Design Categories</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {designCategories.map((cat) => (
              <div key={cat.title} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${cat.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{cat.title}</h3>
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

      {/* Why Choose */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Real Estate Design Experts — Not a Generic Agency</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whyChoose.map((item) => (
              <div key={item.title} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-yellow-400 transition-colors flex gap-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className={`${item.icon} text-xl text-black`}></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
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
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-black mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services & Blogs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <i className="ri-stack-line text-yellow-500" />
                Related Services
              </h3>
              <div className="grid gap-4">
                {[
                  { href: "/services/digital-marketing", title: "Digital Marketing", desc: "Meta and Google campaigns for real estate lead generation.", icon: "ri-advertisement-line" },
                  { href: "/services/3d-renders-isometrics", title: "3D House Rendering", desc: "3D renders and floor plans for brochures and hoardings.", icon: "ri-image-2-line" },
                  { href: "/construction-update-videos", title: "Construction Update Videos", desc: "Scheduled construction progress documentation.", icon: "ri-vidicon-line" },
                ].map((s) => (
                  <Link key={s.href} href={s.href} className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:border-yellow-400/50 hover:bg-yellow-400/5 transition-all group">
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
                  <Link key={b.href} href={b.href} className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:border-yellow-400/50 hover:bg-yellow-400/5 transition-all group">
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

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-yellow-400">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Get Your Branding Quote
              </h2>
              <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
              <p className="text-lg text-black/80">
                Ready to create premium real estate graphics, brochure designs, and impactful branding for your next project? Contact our experts today.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
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
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required
                        className={inputClass("name")}
                        placeholder="Your full name"
                      />
                      {touched.name && errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required
                        className={inputClass("email")}
                        placeholder="your@email.com"
                      />
                      {touched.email && errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
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
                          value={formData.phone}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          required
                          maxLength={10}
                          inputMode="numeric"
                          className={inputClass("phone")}
                          placeholder="10-digit mobile number"
                        />
                      </div>
                      {touched.phone && errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Deliverable Type</label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
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
                    <p className="text-red-600 text-sm">Something went wrong. Please try again or WhatsApp us directly.</p>
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
