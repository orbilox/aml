"use client";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { COUNTRY_CODES, DEFAULT_COUNTRY_CODE } from "@/lib/countryCodes";

type FieldName = "name" | "email" | "countryCode" | "phone" | "project_type" | "message";
type FormErrors = Partial<Record<FieldName, string>>;

function validateField(name: FieldName, value: string): string | undefined {
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

export default function VirtualRealityToursClient() {
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
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});

  const portfolioProjects = [
    {
      id: 1,
      title: "Shree Radha Gopal Residency, Kosi",
      category: "VR Experience",
      image: "/images/portfolio/2.png",
      description:
        "Interactive VR tour of a residential plotted development with modern amenities and green spaces.",
      videoUrl: "https://amlabs.cloud/SRMG_V06/",
    },
    {
      id: 2,
      title: "House of Hiranandani, Mumbai",
      category: "VR Experience",
      image: "/images/portfolio/23.png",
      description:
        "Immersive VR tour of premium shopping mall featuring interactive retail spaces and modern commercial architecture.",
      videoUrl: "https://amlabs.cloud/HOH-V2/",
    },
    {
      id: 3,
      title: "Province D Olympia, Noida",
      category: "VR Experience",
      image: "/images/portfolio/24.png",
      description: "Residential plotted development",
      videoUrl: "https://amlabs.cloud/ATS_PDO/",
    },
    {
      id: 4,
      title: "Mauli Housing, Mumbai",
      category: "VR Experience",
      image: "/images/portfolio/Mauli-VR-Thumbnail.png",
      description:
        "An immersive 360° Virtual Reality tour for Mauli Housing, showcasing landmark views and multi-height outside perspectives for a complete spatial experience.",
      videoUrl: "https://amlabs.cloud/Mauli_V06/",
    },
    {
      id: 5,
      title: "Dosti Greater Thane, Thane",
      category: "VR Experience",
      image: "/images/portfolio/Dosti-VR-Thumbnail.png",
      description:
        "A 360° VR real estate tour for Dosti Group, featuring a superimposed 3D building for a realistic virtual property walkthrough experience.",
      videoUrl: "https://amlabs.cloud/Dosti_Mumbai_V01/",
    },
  ];
  const testimonials = [
    {
      name: "Soma Rathish",
      position: "Director",
      company: "Fute Services",
      content:
        "I am truly proud that my company works with Alliance Media Labs. They are one of the most creative agencies out there. They helped us on numerous virtual reality projects, drone shoots, and route videos. Truly commendable and highly recommended workforce.",
    },
    {
      name: "Ajeet Mehta",
      position: "Director",
      company: "SRMG",
      content:
        "For Shree Radha Gopal Residency, Kosi, Alliance Media Labs delivered 3D walkthroughs, renders, a 360 interactive virtual tour, and a location AV exactly the way we had envisioned. Everything felt well thought-through, and the overall real estate visualisation and virtual tour execution came out clean and impactful.",
    },
    {
      name: "Bhushan Jagdish Gorde",
      position: "Director",
      company: "Mauli Housing",
      content:
        "Our recent project in Mumbai deserved to be showcased in an interactive manner, and Alliance Media Labs delivered a well-executed 360 virtual reality tour that captured the space with great clarity. It turned out to be a practical and engaging real estate virtual tour solution for showcasing the project.",
    },
    {
      name: "Alok Agnihotri",
      position: "OSD Marketing",
      company: "Sanfran Group",
      content:
        "We onboarded Alliance Media Labs for the virtual reality tour of our project Sanfran Sarovar Heights to highlight nearby landmarks, and the outcome was exceptional. The execution was smooth, delivery was on time, and after this experience, we’ve continued working with them, with over 7 real estate virtual tours completed for our projects so far.",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    const field = name as FieldName;
    const sanitized = field === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value;
    setFormData((prev) => ({ ...prev, [field]: sanitized }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, sanitized) }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    const field = name as FieldName;
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
  };

  const inputClass = (field: FieldName) =>
    `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent text-sm ${
      touched[field] && errors[field]
        ? "border-red-400 focus:ring-red-400"
        : "border-gray-300 focus:ring-yellow-400"
    }`;

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
          subject: `Virtual Reality Tours Inquiry - ${formData.name}`,
          from_name: formData.name,
          from_email: formData.email,
          message: `New Virtual Reality Tours Inquiry\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone ? `${formData.countryCode} ${formData.phone}` : "Not provided"}\nProject Type: ${formData.project_type || "Not specified"}\n\nProject Details:\n${formData.message || "No additional details provided"}`,
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
      } else throw new Error("Form submission failed");
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
              backgroundImage: `url('/images/services/virtual-reality-tours/1.jpg')`,
            }}
          ></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mb-8">
                  <img
                    src="/images/services/virtual-reality-tours/2.png"
                    alt="VR"
                    className="w-10 h-10"
                  />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                  Virtual Reality Tours & VR Real Estate Tours in India
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg">
                  We create immersive VR tours, 3D virtual reality tours, and real
                  estate virtual tours service in India for developers,
                  architects, and real estate brands. Explore properties through
                  interactive 3D virtual home tour experiences, 360 virtual
                  photography, and VR real estate tours designed for modern
                  buyers.
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
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl w-full">
                <h3 className="text-xl font-bold text-black mb-1">Get Your VR Tour Quote</h3>
                <p className="text-gray-500 text-sm mb-5">
                  Ready to create immersive VR tours for your next project? Contact our experts today.
                </p>
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={inputClass("name")}
                        placeholder="Your full name"
                      />
                      {touched.name && errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={inputClass("email")}
                        placeholder="your@email.com"
                      />
                      {touched.email && errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
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
                          className={inputClass("phone")}
                          placeholder="10-digit mobile number"
                        />
                      </div>
                      {touched.phone && errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Project Type</label>
                      <select
                        name="project_type"
                        value={formData.project_type}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      >
                        <option value="">Select project type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="retail">Retail</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Project Details</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-400 text-black py-3.5 rounded-lg font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Get Your VR Quote"}
                  </button>
                  {submitStatus === "success" && (
                    <p className="text-green-600 text-center font-medium text-sm">
                      Thank you! We&apos;ll get back to you within 24 hours.
                    </p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-red-600 text-center font-medium text-sm">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Immersive VR Experience Features
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Experience the best virtual reality tours with interactive VR
                tour technology, 3D virtual real estate tours, and immersive
                real estate virtual tours built for next-generation property
                marketing.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <img
                    src="/images/services/virtual-reality-tours/2.png"
                    alt="VR"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Full 360° Immersion
                </h3>
                <p className="text-gray-600">
                  Complete 360 virtual photography and VR tour experiences
                  allowing users to explore every angle of a property through
                  immersive 3D virtual reality tours.
                </p>
              </div>
              {[
                {
                  icon: "ri-hand-heart-line",
                  title: "Interactive Hotspots",
                  desc: "Clickable elements providing detailed information about features, materials, and specifications.",
                },
                {
                  icon: "ri-smartphone-line",
                  title: "Multi-Device Support",
                  desc: "Compatible with VR headsets, smartphones, tablets, and desktops for seamless VR real estate tours and 3D virtual home tour experiences.",
                },
                {
                  icon: "ri-map-pin-line",
                  title: "Room Navigation",
                  desc: "Seamless transitions between rooms and floors with intuitive navigation controls and floor plans.",
                },
                {
                  icon: "ri-palette-line",
                  title: "Customization Options",
                  desc: "Real-time material changes, furniture arrangements, and lighting scenarios to visualize options.",
                },
                {
                  icon: "ri-share-line",
                  title: "Easy Sharing",
                  desc: "Share real estate virtual tours instantly with buyers, investors, and channel partners through simple web-based VR tour links.",
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

        {/* Technology Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Advanced VR Technology
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-black mb-6">
                  Advanced VR Tour & 3D Virtual Reality Solutions
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <img
                        src="/images/services/virtual-reality-tours/2.png"
                        alt="VR"
                        className="w-4 h-4"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">
                        High-Resolution Rendering
                      </h4>
                      <p className="text-gray-600">
                        High-end rendering technology for realistic 3D virtual
                        reality tours, VR real estate tours, and interactive
                        real estate virtual tours service in India.
                      </p>
                    </div>
                  </div>
                  {[
                    {
                      title: "Real-Time Rendering",
                      desc: "Instant loading and smooth navigation with optimized performance.",
                    },
                    {
                      title: "Cross-Platform Compatibility",
                      desc: "Works with Oculus, HTC Vive, mobile VR, and web browsers.",
                    },
                    {
                      title: "Analytics Integration",
                      desc: "Track user engagement and behavior within VR experiences.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="ri-check-line text-black text-sm"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/services/virtual-reality-tours/3.jpg"
                  alt="VR Technology"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                VR Experience Portfolio
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Explore immersive VR tour projects, 3D virtual real estate
                tours, and real estate virtual tours created for leading
                developers across India.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => window.open(project.videoUrl, "_blank")}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                        <i className="ri-play-fill text-2xl text-black"></i>
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
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer"
              >
                View Our Portfolio
              </Link>
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
                  {/* User Info */}
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

                  {/* Stars */}
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-sm"></i>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 leading-relaxed italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
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
                How We Build Your VR Tour & Real Estate Virtual Tours
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  num: "01",
                  title: "Input & Brief",
                  desc: "Share floor plans, CAD files, or drawings. We discuss style, materials, and target audience.",
                },
                {
                  num: "02",
                  title: "3D Build",
                  desc: "Our team models the space in full 3D — architecture, interiors, lighting, and landscaping.",
                },
                {
                  num: "03",
                  title: "Review & Refine",
                  desc: "You get a preview link for feedback. We refine materials, camera paths, and interactions.",
                },
                {
                  num: "04",
                  title: "Deploy",
                  desc: "Final VR tour delivered as a web link, iPad app, or VR headset package ready for launch.",
                },
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-black">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Ideal For</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "ri-building-4-line",
                  title: "Pre-Launch Sales",
                  desc: "Convert inquiries into bookings using immersive VR tours, 3D virtual home tour experiences, and real estate virtual tours before construction begins.",
                },
                {
                  icon: "ri-flight-takeoff-line",
                  title: "NRI Buyers",
                  desc: "Share VR real estate tours and 3D virtual reality tours with overseas buyers through simple web links.",
                },
                {
                  icon: "ri-group-line",
                  title: "Channel Partner Training",
                  desc: "Equip your channel partners with an interactive demo they can carry on iPad to every client meeting.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-yellow-400 transition-colors"
                >
                  <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                    <i className={`${item.icon} text-2xl text-black`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 360 Virtual Photography & 3D Virtual Home Tour */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  360° Virtual Photography & 3D Virtual Home Tours
                </h2>
                <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  We create immersive 360 virtual photography experiences, VR
                  tours, and 3D virtual home tour solutions for developers,
                  architects, and real estate companies across India.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                    <i className="ri-camera-3-line text-2xl text-black"></i>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    360° Virtual Photography
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    <strong>360 virtual photography</strong> captures completed
                    or show-flat spaces using professional 360° cameras,
                    stitched into an interactive panorama. Ideal for
                    ready-to-move projects, furnished showflats, and experience
                    centres — giving buyers a photorealistic, navigable view of
                    the actual space.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <i className="ri-check-line text-yellow-500"></i> Works
                      for completed / furnished spaces
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="ri-check-line text-yellow-500"></i> Faster
                      turnaround — 3–5 days
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="ri-check-line text-yellow-500"></i>{" "}
                      Photorealistic real-world accuracy
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                    <i className="ri-3d-glasses-line text-2xl text-black"></i>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    3D Virtual Home Tour
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    A <strong>3D virtual home tour</strong> is fully
                    computer-generated — built from architectural drawings
                    before the property is constructed. Buyers can walk through
                    every room, explore amenities, and experience the layout of
                    their future home from any device. Best for
                    under-construction pre-launch marketing.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <i className="ri-check-line text-yellow-500"></i> No
                      construction required — pre-launch ready
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="ri-check-line text-yellow-500"></i> Fully
                      interactive with hotspots
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="ri-check-line text-yellow-500"></i>{" "}
                      Multi-device: browser, iPad, VR headset
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mt-10 text-center">
                Our real estate virtual tours service in India combines advanced
                VR tour technology, 360 virtual photography, and interactive 3D
                virtual real estate tours to help developers improve buyer
                engagement and project presentation.
              </p>
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
                  q: "What is the difference between a VR tour and a 3D walkthrough video?",
                  a: "A 3D walkthrough is a pre-rendered video — like a movie of your property. A VR tour is interactive: users can look around freely, move through rooms, and explore at their own pace using a browser, iPad, or VR headset.",
                },
                {
                  q: "Do buyers need a VR headset to experience the tour?",
                  a: "No. Our VR tours are built to work on any device — mobile, tablet, desktop, or VR headset. Buyers can explore via a simple web link with no app or download required.",
                },
                {
                  q: "Can the VR tour work offline at a sales office?",
                  a: "Yes. We provide a fully offline-capable version of the VR tour that runs on a dedicated iPad or laptop at your sales office without requiring internet connectivity.",
                },
                {
                  q: "How long does a VR tour take to build?",
                  a: "Typically 4–6 weeks depending on the size and complexity of the project. We share progress previews at key milestones for your feedback.",
                },
                {
                  q: "Can we update the VR tour if the design changes?",
                  a: "Yes. We offer revision rounds during production. Post-delivery updates are available as a separate service, especially useful if floor plans or material specifications change.",
                },
                {
                  q: "How much does a VR tour cost?",
                  a: "Pricing depends on the number of unit types, amenity areas, and interactive features required. Contact our experts for a custom quote.",
                },
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
                VR Tour Pricing
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-gray-600 mb-8">
                Pricing for VR tours, VR real estate tours, 3D virtual reality
                tours, and real estate virtual tours service in India depends on
                project size, unit types, and interaction requirements.
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

        {/* Related Services */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Related Services
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "3D Walkthrough Videos",
                  desc: "Cinematic pre-rendered property tours for marketing and RERA.",
                  href: "/services/3d-walkthrough-videos",
                  icon: "ri-video-line",
                },
                {
                  name: "Interactive 3D Tools",
                  desc: "Touch-screen unit selectors and configurators for sales offices.",
                  href: "/services/interactive-3d-tools",
                  icon: "ri-cursor-line",
                },
                {
                  name: "3D Renders & Isometrics",
                  desc: "Photorealistic stills for brochures, hoardings, and digital ads.",
                  href: "/services/3d-renders-isometrics",
                  icon: "ri-image-3d-line",
                },
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-yellow-400 transition-colors group"
                >
                  <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <i className={`${s.icon} text-2xl text-black`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {s.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{s.desc}</p>
                  <span className="text-yellow-400 font-semibold text-sm">
                    Learn more →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 bg-yellow-400">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Get Your VR Tour Quote
                </h2>
                <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
                <p className="text-lg text-black/80">
                  Ready to create immersive VR tours, 3D virtual home tours, and
                  real estate virtual tours for your next project? Contact our
                  experts today.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
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
                        onBlur={handleBlur}
                        className={inputClass("name")}
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
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
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
                          className={inputClass("phone")}
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      >
                        <option value="">Select project type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="retail">Retail</option>
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
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-400 text-black py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Get Your VR Quote"}
                  </button>
                  {submitStatus === "success" && (
                    <p className="text-green-600 text-center font-medium">
                      Thank you! We&apos;ll get back to you within 24 hours.
                    </p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-red-600 text-center font-medium">
                      Something went wrong. Please try again.
                    </p>
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
