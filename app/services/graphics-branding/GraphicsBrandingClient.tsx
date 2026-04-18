"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function GraphicsBrandingClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project_type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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
          subject: `Graphic Branding Inquiry - ${formData.name}`,
          from_name: formData.name,
          from_email: formData.email,
          message: `New Graphic Branding Inquiry\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\nProject Type: ${formData.project_type || "Not specified"}\n\nProject Details:\n${formData.message || "No additional details provided"}`,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus("success");
        setTimeout(() => {
          setFormData({ name: "", email: "", phone: "", project_type: "", message: "" });
          setSubmitStatus("idle");
        }, 3000);
      } else throw new Error("Failed");
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
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20graphic%20design%20workspace%20with%20branding%20materials%2C%20logo%20designs%2C%20color%20palettes%2C%20modern%20design%20studio%2C%20creative%20workspace%2C%20clean%20minimalist%20background%2C%20design%20tools%20and%20materials&width=1920&height=1080&seq=branding-hero&orientation=landscape')`,
            }}
          ></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mb-8">
                <i className="ri-palette-line text-3xl text-black"></i>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                Real Estate Graphics & Branding Design India
</h1>
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg">
                Professional graphic design and branding solutions to establish
                strong visual identity for real estate projects.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Get Quote
                </Link>
                <Link
                  href="/portfolio"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer"
                >
                  View Portfolio
                </Link>
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
      <p className="text-xl text-gray-600">A complete real estate brand toolkit — from logo to launch campaign</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { icon: "ri-pen-nib-line", title: "Brand Identity & Logo", desc: "Custom logo design, brand guidelines, colour palette, typography, and brand voice documentation." },
        { icon: "ri-file-text-line", title: "Property Brochure Design", desc: "Print-ready and digital property brochure design — from 8-page teasers to 60-page project catalogues. Available as brochure design online or via full design agency engagement." },
        { icon: "ri-megaphone-line", title: "Construction Hoarding Design", desc: "Large-format construction hoarding design, site signage, entrance banners, and OOH creatives in any dimension — built for maximum roadside impact." },
        { icon: "ri-instagram-line", title: "Social Media Kit", desc: "Branded social media templates for Instagram, Facebook, YouTube thumbnails, and WhatsApp campaigns." },
        { icon: "ri-mail-line", title: "Email & WhatsApp Templates", desc: "Branded communication templates for launch mailers, construction updates, and festival creatives." },
        { icon: "ri-building-4-line", title: "Sales Office Branding", desc: "Backlit panels, wall graphics, directional signage, and touchpoint branding for your experience centre." },
      ].map((item) => (
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

        {/* Services Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Complete Branding Solutions
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Create a powerful visual identity that resonates with your
                target audience and differentiates your real estate projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "ri-award-line", title: "Logo & Brand Identity", desc: "Distinctive logos and comprehensive brand identity systems that capture your project's essence." },
                { icon: "ri-book-open-line", title: "Marketing Collaterals", desc: "Professional brochures, flyers, and sales materials that effectively communicate your value proposition." },
                { icon: "ri-global-line", title: "Digital Assets", desc: "Website graphics, social media templates, and digital marketing materials optimized for online platforms." },
                { icon: "ri-signpost-line", title: "Signage & Wayfinding", desc: "Professional signage systems for sales offices, construction sites, and property developments." },
                { icon: "ri-presentation-line", title: "Presentation Design", desc: "Compelling presentation templates and pitch decks for investor meetings and client presentations." },
                { icon: "ri-layout-line", title: "Layout & Typography", desc: "Professional layout design and typography systems that ensure consistent brand communication." },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
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
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Branding & Design Portfolio
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Creative branding solutions that establish strong visual identities for real estate projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { img: "branding-portfolio-1", title: "Prestige Towers", desc: "Complete brand identity for luxury high-rise development with premium positioning.", tag: "ri-palette-line", label: "Brand Identity • Marketing" },
                { img: "branding-portfolio-2", title: "Urban Living Brochure", desc: "Comprehensive sales brochure showcasing modern residential development features.", tag: "ri-book-open-line", label: "Print Design • Sales Materials" },
                { img: "branding-portfolio-3", title: "Property Portal Website", desc: "User-friendly website design with advanced property search and virtual tours.", tag: "ri-global-line", label: "Web Design • UX/UI" },
                { img: "branding-portfolio-4", title: "Social Media Campaign", desc: "Engaging social media templates and content strategy for property marketing.", tag: "ri-smartphone-line", label: "Social Media • Digital Marketing" },
                { img: "branding-portfolio-5", title: "Development Signage", desc: "Comprehensive signage system for large-scale mixed-use development project.", tag: "ri-signpost-line", label: "Signage • Wayfinding" },
                { img: "branding-portfolio-6", title: "Investor Presentation", desc: "Professional pitch deck design for major real estate investment opportunity.", tag: "ri-presentation-line", label: "Presentation • Corporate Design" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={`https://readdy.ai/api/search-image?query=Real%20estate%20branding%20design%20professional&width=400&height=300&seq=${item.img}&orientation=landscape`}
                    alt={item.title}
                    className="w-full h-48 object-cover object-top"
                  />
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
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer"
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
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Design Process</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { num: "1", title: "Discovery & Research", desc: "Understanding your brand values, target audience, and competitive landscape to inform design decisions." },
                { num: "2", title: "Concept Development", desc: "Creating multiple design concepts and exploring different creative directions based on research insights." },
                { num: "3", title: "Design Refinement", desc: "Refining chosen concepts through iterative design process and client feedback integration." },
                { num: "4", title: "Final Delivery", desc: "Delivering final designs with comprehensive brand guidelines and all necessary file formats." },
              ].map((step, i) => (
                <div key={i} className="text-center">
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
              {[
                {
                  icon: "ri-building-line",
                  title: "Project Branding",
                  desc: "Complete brand identity for individual real estate projects and developments.",
                  items: ["Project logos and naming", "Color schemes and typography", "Marketing material templates", "Environmental graphics"],
                },
                {
                  icon: "ri-store-line",
                  title: "Corporate Branding",
                  desc: "Comprehensive brand identity for real estate companies and development firms.",
                  items: ["Corporate logo and identity", "Business card and stationery", "Office branding and signage", "Brand guidelines manual"],
                },
                {
                  icon: "ri-smartphone-line",
                  title: "Digital Graphics",
                  desc: "Digital-first design solutions for online marketing and social media presence.",
                  items: ["Social media templates", "Website graphics and banners", "Email marketing templates", "Digital advertising creatives"],
                },
                {
                  icon: "ri-printer-line",
                  title: "Print Materials",
                  desc: "High-quality print design for traditional marketing and sales materials.",
                  items: ["Sales brochures and catalogs", "Floor plan layouts", "Outdoor advertising materials", "Trade show displays"],
                },
              ].map((cat, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                    <i className={`${cat.icon} text-2xl text-black`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">{cat.title}</h3>
                  <p className="text-gray-600 mb-6">{cat.desc}</p>
                  <ul className="space-y-2 text-gray-600">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-center space-x-2">
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
      {[
        { icon: "ri-building-4-line", title: "Real Estate Specialists", desc: "We work exclusively with real estate developers. We understand RERA disclaimers, buyer psychology, and what sells at a site visit." },
        { icon: "ri-palette-line", title: "Design + Strategy", desc: "We don't just make things look good — we design for conversion. Every brochure, hoarding, and social post is built to generate enquiries." },
        { icon: "ri-time-line", title: "Fast Turnarounds", desc: "Launch deadline approaching? We deliver high-quality branding in days, not weeks. Our team works across time zones to meet your schedule." },
        { icon: "ri-refresh-line", title: "One Creative Partner", desc: "From brand identity to launch campaign — one team handles everything. No briefing multiple agencies. No inconsistency in brand language." },
      ].map((item) => (
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
      {[
        { q: "How long does a real estate brochure take to design?", a: "A standard 16-page sales brochure takes 7–10 working days from brief to final files. We share concept layouts for approval before proceeding to detailed design." },
        { q: "What formats do you deliver design files in?", a: "We deliver print-ready PDF files (CMYK, 300 DPI) for physical production and web-optimised PDF/JPG versions for digital use. Source files (AI, PSD, InDesign) are available on request." },
        { q: "How many revision rounds are included?", a: "Every project includes 2 rounds of revisions. Additional rounds are available. We present concepts clearly and work collaboratively to get the design right." },
        { q: "Can you design hoardings in custom sizes?", a: "Yes. We design hoardings in any dimension — from 10x20 ft site boards to 40x80 ft highway hoardings. We provide files formatted for your printer's specifications." },
        { q: "Do you also handle brand identity from scratch?", a: "Yes. We offer complete brand identity packages — logo, colour palette, typography, brand guidelines, and usage documentation. Ideal for new project launches or rebranding existing ones." },
        { q: "How much does real estate branding and design cost?", a: "Pricing varies by scope — a single brochure is priced differently from a full brand identity + launch campaign. Contact our experts for a tailored quote." },
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
      <h2 className="text-3xl font-bold text-black mb-4">Branding & Design Pricing</h2>
      <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
      <p className="text-gray-600 mb-8">Whether you need a single brochure or a complete brand launch package, our experts will tailor a scope and budget that works for your project timeline.</p>
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
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Get Your Branding Quote
                </h2>
                <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
                <p className="text-lg text-black/80">
                  Ready to build a powerful brand identity? Contact us for a custom quote.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                      <select
                        name="project_type"
                        value={formData.project_type}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      >
                        <option value="">Select project type</option>
                        <option value="logo">Logo Design</option>
                        <option value="branding">Full Brand Identity</option>
                        <option value="marketing">Marketing Collaterals</option>
                        <option value="digital">Digital Assets</option>
                        <option value="signage">Signage & Wayfinding</option>
                        <option value="presentation">Presentation Design</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm resize-none"
                      placeholder="Tell us about your branding requirements, project timeline, and any specific design preferences..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center space-x-2">
                        <i className="ri-loader-4-line animate-spin"></i>
                        <span>Sending...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center space-x-2">
                        <span>Send Inquiry via Email</span>
                        <i className="ri-mail-send-line"></i>
                      </span>
                    )}
                  </button>
                  {submitStatus === "success" && (
                    <div className="text-green-600 text-center font-medium">
                      Thank you! We'll get back to you with a custom quote within 24 hours.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="text-red-600 text-center font-medium">
                      Sorry, there was an error. Please email us directly at info@alliancemedialabs.com
                    </div>
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
