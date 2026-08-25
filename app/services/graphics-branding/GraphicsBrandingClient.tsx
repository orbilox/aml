"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { COUNTRY_CODES, DEFAULT_COUNTRY_CODE } from "@/lib/countryCodes";

type FormFields = {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  project_type: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

function validateField(name: keyof FormFields, value: string): string | undefined {
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
      if (!value.trim()) return undefined;
      const digits = value.replace(/\D/g, "");
      if (digits.length !== 10) return "Enter a valid 10-digit mobile number.";
      return undefined;
    }
    default:
      return undefined;
  }
}

export default function GraphicsBrandingClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: DEFAULT_COUNTRY_CODE,
    phone: "",
    project_type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    const field = name as keyof FormFields;
    const sanitized = field === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value;
    setFormData((prev) => ({ ...prev, [field]: sanitized }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, sanitized) }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    const field = name as keyof FormFields;
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors: FormErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
    };
    setErrors(nextErrors);
    setTouched((prev) => ({ ...prev, name: true, email: true, phone: true }));
    if (Object.values(nextErrors).some(Boolean)) return;

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
          message: `New Graphic Branding Inquiry\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone ? `${formData.countryCode} ${formData.phone}` : "Not provided"}\nProject Type: ${formData.project_type || "Not specified"}\n\nProject Details:\n${formData.message || "No additional details provided"}`,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus("success");
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            countryCode: DEFAULT_COUNTRY_CODE,
            phone: "",
            project_type: "",
            message: "",
          });
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
  Real Estate Graphics & Branding Design Services in India
</h1>
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg">
  We provide premium real estate graphics, commercial real estate graphics, and real estate graphic design services for developers, builders, and property brands. From real estate brochure design and property brochure design to construction hoarding design and digital branding, we create impactful graphics for real estate marketing campaigns.
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
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                What We Deliver
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
  A complete real estate graphics design toolkit — from logo creation and brochure design service to launch campaigns and construction hoarding design.
</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
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
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                    <i className={`${item.icon} text-2xl text-black`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {item.title}
                  </h3>
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
  Comprehensive real estate graphic design services tailored for developers, builders, and commercial real estate marketing campaigns.
</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
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
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                    <i className={`${item.icon} text-2xl text-black`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    {item.title}
                  </h3>
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
  Explore premium real estate graphics, brochure design services, and commercial real estate graphics created for leading property brands.
</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  img: "branding-portfolio-1",
                  title: "Prestige Towers",
                  desc: "Complete brand identity for luxury high-rise development with premium positioning.",
                  tag: "ri-palette-line",
                  label: "Brand Identity • Marketing",
                },
                {
                  img: "branding-portfolio-2",
                  title: "Urban Living Brochure",
                  desc: "Comprehensive sales brochure showcasing modern residential development features.",
                  tag: "ri-book-open-line",
                  label: "Print Design • Sales Materials",
                },
                {
                  img: "branding-portfolio-3",
                  title: "Property Portal Website",
                  desc: "User-friendly website design with advanced property search and virtual tours.",
                  tag: "ri-global-line",
                  label: "Web Design • UX/UI",
                },
                {
                  img: "branding-portfolio-4",
                  title: "Social Media Campaign",
                  desc: "Engaging social media templates and content strategy for property marketing.",
                  tag: "ri-smartphone-line",
                  label: "Social Media • Digital Marketing",
                },
                {
                  img: "branding-portfolio-5",
                  title: "Development Signage",
                  desc: "Comprehensive signage system for large-scale mixed-use development project.",
                  tag: "ri-signpost-line",
                  label: "Signage • Wayfinding",
                },
                {
                  img: "branding-portfolio-6",
                  title: "Investor Presentation",
                  desc: "Professional pitch deck design for major real estate investment opportunity.",
                  tag: "ri-presentation-line",
                  label: "Presentation • Corporate Design",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img
                    src={`https://readdy.ai/api/search-image?query=Real%20estate%20branding%20design%20professional&width=400&height=300&seq=${item.img}&orientation=landscape`}
                    alt={item.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2">
                      {item.title}
                    </h3>
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
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                  Our Real Estate Graphics Design Process
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  num: "1",
                  title: "Discovery & Research",
                  desc: "Understanding your brand values, target audience, and competitive landscape to inform design decisions.",
                },
                {
                  num: "2",
                  title: "Concept Development",
                  desc: "Creating multiple design concepts and exploring different creative directions based on research insights.",
                },
                {
                  num: "3",
                  title: "Design Refinement",
                  desc: "Refining chosen concepts through iterative design process and client feedback integration.",
                },
                {
                  num: "4",
                  title: "Final Delivery",
                  desc: "Delivering final designs with comprehensive brand guidelines and all necessary file formats.",
                },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-black">
                      {step.num}
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

        {/* Design Categories Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Design Categories
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: "ri-building-line",
                  title: "Project Branding",
                  desc: "Complete real estate graphics and branding systems for residential, commercial, and mixed-use property developments.",
                  items: [
                    "Project logos and naming",
                    "Color schemes and typography",
                    "Marketing material templates",
                    "Environmental graphics",
                  ],
                },
                {
                  icon: "ri-store-line",
                  title: "Corporate Branding",
                  desc: "Commercial real estate graphics and visual identity systems for real estate companies and developer brands.",
                  items: [
                    "Corporate logo and identity",
                    "Business card and stationery",
                    "Office branding and signage",
                    "Brand guidelines manual",
                  ],
                },
                {
                  icon: "ri-smartphone-line",
                  title: "Digital Graphics",
                  desc: "Modern graphics for real estate marketing including digital creatives, social media templates, and online branding campaigns.",
                  items: [
                    "Social media templates",
                    "Website graphics and banners",
                    "Email marketing templates",
                    "Digital advertising creatives",
                  ],
                },
                {
                  icon: "ri-printer-line",
                  title: "Print Materials",
                  desc: "Premium property brochure design, sales catalogues, and brochure design service solutions for print marketing.",
                  items: [
                    "Sales brochures and catalogs",
                    "Floor plan layouts",
                    "Outdoor advertising materials",
                    "Trade show displays",
                  ],
                },
              ].map((cat, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                    <i className={`${cat.icon} text-2xl text-black`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {cat.title}
                  </h3>
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
              <h2 className="text-4xl font-bold text-white mb-4">
                Real Estate Design Experts — Not a Generic Agency
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
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
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-yellow-400 transition-colors flex gap-6"
                >
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-xl text-black`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
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
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
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
                  q: "How much does real estate branding and design cost?",
                  a: "Pricing varies by scope — a single brochure is priced differently from a full brand identity + launch campaign. Contact our experts for a tailored quote.",
                },
                {
                  q: "Do you provide brochure design online services?",
                  a: "Yes. We provide brochure design online services for developers across India and internationally. Clients can collaborate remotely while receiving complete brochure design service support including layouts, revisions, and print-ready delivery.",
                },
                {
                  q: "Do you handle commercial real estate graphics?",
                  a: "Yes. We create commercial real estate graphics including leasing brochures, office branding, construction hoarding design, investor decks, and marketing campaigns for commercial projects.",
                }
        
              ].map((faq, i) => (
                <div
                  key={i}
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
                Branding & Design Pricing
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-gray-600 mb-8">
  Whether you need real estate brochure design, property brochure design, commercial real estate graphics, or complete real estate graphic design services, we create custom branding packages tailored to your project.
</p>
              <a
                href="/contact"
                className="inline-flex items-center bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
              >
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
  Ready to create premium real estate graphics, brochure designs, and impactful branding for your next project? Contact our experts today.
</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent text-sm ${
                          touched.name && errors.name
                            ? "border-red-400 focus:ring-red-400"
                            : "border-gray-300 focus:ring-yellow-400"
                        }`}
                        placeholder="Your full name"
                      />
                      {touched.name && errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent text-sm ${
                          touched.email && errors.email
                            ? "border-red-400 focus:ring-red-400"
                            : "border-gray-300 focus:ring-yellow-400"
                        }`}
                        placeholder="your@email.com"
                      />
                      {touched.email && errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
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
                          maxLength={10}
                          inputMode="numeric"
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent text-sm ${
                            touched.phone && errors.phone
                              ? "border-red-400 focus:ring-red-400"
                              : "border-gray-300 focus:ring-yellow-400"
                          }`}
                          placeholder="10-digit mobile number"
                        />
                      </div>
                      {touched.phone && errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type
                      </label>
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
                        <option value="presentation">
                          Presentation Design
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
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
                      Thank you! We'll get back to you with a custom quote
                      within 24 hours.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="text-red-600 text-center font-medium">
                      Sorry, there was an error. Please email us directly at
                      info@alliancemedialabs.com
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
