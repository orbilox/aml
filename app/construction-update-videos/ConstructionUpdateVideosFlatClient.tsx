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
  videoUrl: string;
  duration: string;
}

const features = [
  {
    icon: "ri-flight-takeoff-line",
    title: "Drone Cinematography",
    desc: "Professional aerial filming and drone timelapse construction footage capturing every stage of the construction process from unique cinematic perspectives.",
  },
  {
    icon: "ri-calendar-line",
    title: "Regular Updates",
    desc: "Scheduled construction update videos and construction videos documenting every project milestone with professional editing and branding.",
  },
  {
    icon: "ri-time-line",
    title: "Time-Lapse Creation",
    desc: "Professional construction time lapse and construction time lapse video editing that compresses months of work into engaging visual stories.",
  },
  {
    icon: "ri-shield-check-line",
    title: "Safety Compliance",
    desc: "All shoots conducted with proper safety protocols and regulatory compliance for construction sites.",
  },
  {
    icon: "ri-hd-line",
    title: "4K Quality",
    desc: "Ultra-high-definition footage ensuring crystal-clear documentation for all presentation needs.",
  },
  {
    icon: "ri-cloud-line",
    title: "Cloud Delivery",
    desc: "Easy cloud-based delivery for construction videos, construction update videos, and real estate construction video marketing campaigns.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Site Visit",
    desc: "Our crew visits the site on a scheduled date — monthly, bi-monthly, or per milestone.",
  },
  {
    num: "02",
    title: "Shoot",
    desc: "We capture all construction zones, floors, and milestones with professional construction videos, aerial footage, and drone timelapse construction setups.",
  },
  {
    num: "03",
    title: "Edit & Grade",
    desc: "Construction time lapse video footage is colour-graded, branded, and edited into professional construction update videos for developers and buyers.",
  },
  {
    num: "04",
    title: "Deliver",
    desc: "Final video delivered within 5 working days — ready for WhatsApp broadcast, email, and RERA submission.",
  },
];

const faqs = [
  {
    q: "How frequently should construction update videos be done?",
    a: "We recommend monthly shoots for active construction phases and quarterly for foundation or finishing stages. Many developers align shoots with RERA reporting cycles.",
  },
  {
    q: "Are construction update videos useful for RERA compliance?",
    a: "Yes. RERA requires developers to provide regular construction updates to buyers. Our branded videos serve as verified visual documentation that you can share with buyers and regulatory authorities.",
  },
  {
    q: "Do you handle drone permissions for construction sites?",
    a: "Yes. Our DGCA-licensed drone pilots manage all permissions and compliance for aerial footage at construction sites across India. We also specialise in drone timelapse construction sequences — capturing months of progress in a single compelling clip.",
  },
  {
    q: "Can we get a subscription or retainer plan?",
    a: "Yes. We offer monthly retainer packages for ongoing documentation — ideal for projects with 12–36 month construction timelines. Contact our experts for retainer pricing.",
  },
  {
    q: "How quickly do we receive the edited video after the shoot?",
    a: "Edited videos are delivered within 5–7 working days of the shoot date. Rush delivery in 3 days is available for urgent requirements.",
  },
  {
    q: "Are you a construction time lapse company?",
    a: "Yes. In addition to regular site progress documentation, we are a specialist construction time lapse company offering drone timelapse construction sequences and ground-level time lapse for construction sites — edited into branded videos for developer communications and social media.",
  },
  {
    q: "What is a construction time lapse video?",
    a: "A construction time lapse video captures months or years of construction progress through interval photography and editing, turning long construction timelines into short engaging videos.",
  },
  {
    q: "Do you provide drone timelapse construction services?",
    a: "Yes. We specialise in drone timelapse construction filming for residential, commercial, and infrastructure projects across India.",
  },
  {
    q: "Why are construction videos important for real estate marketing?",
    a: "Construction videos and construction update videos build buyer trust, improve investor communication, support RERA updates, and create valuable real estate construction video content for digital marketing.",
  },
  {
    q: "Can you install time lapse systems for construction sites?",
    a: "Yes. We provide complete time lapse for construction sites including camera setup, monitoring, scheduled captures, and final construction time lapse video editing.",
  },
];

type CUVFormData = {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  firm: string;
  videoType: string;
  message: string;
};

type CUVFormErrors = Partial<Record<keyof CUVFormData, string>>;

function validateField(
  name: keyof CUVFormData,
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

const testimonials = [
  {
    name: "Abhishek Patel",
    position: "Marketing Manager",
    company: "Smart World Developers",
    content:
      "Working with Alliance Media Labs on the construction update videos for The Edition has been a smooth experience throughout our yearly engagement. The consistency, timelines, and overall real estate construction progress video production have been well maintained across deliverables.",
  },
  {
    name: "Pooran Tomar",
    position: "Head of Marketing",
    company: "Aditya Builders",
    content:
      "Alliance Media Labs handled the construction update videos for Aditya Builders' project The Kutumb with a clear and consistent approach. The overall real estate construction progress video came out clean, timely, and easy to follow.",
  },
  {
    name: "Shresth",
    position: "Digital Marketing",
    company: "Pyramid Infratech",
    content:
      "For the past year, Alliance Media Labs has been delivering construction update videos for our project Alban in Gurugram with great consistency every time.",
  },
  {
    name: "Kapil Sharma",
    position: "Marketing Head",
    company: "GMI Infra",
    content:
      "GMI Infra partnered with Alliance Media Labs for the construction update videos of GMI Elite Homes, and the whole process felt well-managed from start to finish. The updates were presented clearly, and the overall real estate construction progress video maintained a professional flow.",
  },
];

export default function ConstructionUpdateVideosFlatClient() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: DEFAULT_COUNTRY_CODE,
    phone: "",
    firm: "",
    videoType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<CUVFormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof CUVFormData, boolean>>
  >({});

  const inputClass = (field: keyof CUVFormData) =>
    `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent text-sm ${
      touched[field] && errors[field]
        ? "border-red-400 focus:ring-red-400"
        : "border-gray-300 focus:ring-yellow-400"
    }`;

  const portfolioProjects: Project[] = [
    {
      id: 1,
      title: "Pyramid Alban",
      category: "Construction Update",
      image: "/images/portfolio/construction-updates/pyramid-alban-gurugram.png",
      description:
        "Monthly construction progress documentation with aerial and ground-level footage.",
      videoUrl: "https://www.youtube.com/embed/QDJxopvP4Ro?autoplay=1",
      duration: "3:45",
    },
    {
      id: 2,
      title: "Smart World The Edition",
      category: "Construction Update",
      image: "/images/portfolio/construction-updates/smart-world-the-edition-gurugram.png",
      description:
        "Comprehensive construction timeline documentation for a premium residential project.",
      videoUrl: "https://www.youtube.com/embed/4RebMEfQr3Y?autoplay=1",
      duration: "4:12",
    },
    {
      id: 3,
      title: "Central Ikon",
      category: "Construction Update",
      image: "/images/portfolio/construction-updates/central-ikon-noida.png",
      description:
        "Regular construction progress updates showcasing structural milestones.",
      videoUrl: "https://www.youtube.com/embed/k2jFPH49J0U?autoplay=1",
      duration: "2:58",
    },
    {
      id: 4,
      title: "The Kutumb",
      category: "Construction Update",
      image: "/images/portfolio/construction-updates/the-kutumb-ghaziabad.png",
      description:
        "Detailed construction documentation with drone and time-lapse footage.",
      videoUrl: "https://www.youtube.com/embed/ZLblD-AEilk?autoplay=1",
      duration: "3:22",
    },
    {
      id: 5,
      title: "HCBS Auroville, Gurugram",
      category: "Construction Updates",
      image: "/images/portfolio/construction-updates/hcbs-auroville-gurugram.jpg",
      description:
        "High-quality construction progress video featuring drone videography and real estate construction updates.",
      videoUrl: "https://www.youtube.com/embed/ommJFDhiz-M?autoplay=1",
      duration: "4:05",
    },
    {
      id: 6,
      title: "Smart World, Sky Arc, Gurugram",
      category: "Construction Updates",
      image: "/images/portfolio/construction-updates/smart-world-sky-arc-gurugram.png",
      description:
        "Cinematic construction update video with drone shoot and real estate project progress tracking.",
      videoUrl: "https://www.youtube.com/embed/lJ9b5xaa04Q?autoplay=1",
      duration: "3:50",
    },
    {
      id: 7,
      title: "HCBS Glenwood, Jhajjar",
      category: "Construction Updates",
      image: "/images/portfolio/construction-updates/hcbs-glenwood-jhajjar.png",
      description:
        "Professional construction update film with drone coverage and infrastructure progress video.",
      videoUrl: "https://www.youtube.com/embed/19KFjpoBYBA?autoplay=1",
      duration: "4:15",
    },
    {
      id: 8,
      title: "HCBS Twin Horizon, Gurugram",
      category: "Construction Updates",
      image: "/images/portfolio/construction-updates/hcbs-twin-horizon-gurugram.png",
      description:
        "Real estate construction update video with aerial drone shoot and monthly project progress coverage.",
      videoUrl: "https://www.youtube.com/embed/5fxjaqWpgYE?autoplay=1",
      duration: "3:40",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    const field = name as keyof CUVFormData;
    const sanitized =
      field === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value;
    setFormData((prev) => ({ ...prev, [field]: sanitized }));
    if (touched[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: validateField(field, sanitized),
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    const field = name as keyof CUVFormData;
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors: CUVFormErrors = {
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
          subject: "New Lead — Construction Update Videos Page",
          from_name: formData.name,
          ...formData,
          phone: formData.phone
            ? `${formData.countryCode} ${formData.phone}`
            : "Not provided",
        }),
      });
      if (res.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          countryCode: DEFAULT_COUNTRY_CODE,
          phone: "",
          firm: "",
          videoType: "",
          message: "",
        });
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
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors"
            >
              <i className="ri-close-line text-3xl" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={selectedProject.videoUrl}
                className="w-full h-full rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={selectedProject.title}
              />
            </div>
            <div className="mt-4 text-white text-center">
              <h3 className="text-xl font-bold">{selectedProject.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative bg-[#0a0a0a] text-white overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/portfolio/construction-updates/pyramid-alban-gurugram.png"
            alt="Construction update videos and construction time lapse India — Alliance Media Labs"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-6 py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Construction Update Videos &amp; Construction Time Lapse
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                Professional construction videos, construction update videos,
                construction time lapse video production, drone timelapse
                construction, and real estate construction video services for
                developers across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-full transition-colors"
                >
                  Get Quote
                </a>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl w-full">
              {submitStatus === "success" ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-check-line text-2xl text-green-500" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-1">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We&apos;ve received your enquiry. Our team will respond
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-black mb-1">
                    Get a Free Quote
                  </h3>
                  <p className="text-gray-500 text-sm mb-5">
                    Share your project timeline and we&apos;ll respond within 24
                    hours.
                  </p>
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Name *
                        </label>
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
                          <p className="text-red-500 text-xs mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Phone *
                        </label>
                        <div className="flex gap-2">
                          <select
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleInputChange}
                            className="px-2 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm bg-white w-[92px] flex-shrink-0"
                          >
                            {COUNTRY_CODES.map((c) => (
                              <option key={c.code} value={c.code}>
                                {c.code}
                              </option>
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
                          <p className="text-red-500 text-xs mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email *
                      </label>
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
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Company Name
                        </label>
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
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Video Type
                        </label>
                        <select
                          name="videoType"
                          value={formData.videoType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        >
                          <option value="">Select type</option>
                          <option value="Construction Update Video">
                            Construction Update Video
                          </option>
                          <option value="Construction Time Lapse">
                            Construction Time Lapse
                          </option>
                          <option value="Drone Timelapse">
                            Drone Timelapse
                          </option>
                          <option value="Recurring Package">
                            Recurring Package
                          </option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Project Details
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Project name, construction stage, and update frequency needed..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm resize-none"
                      />
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
      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Construction Update Videos &amp; Construction Time Lapse Portfolio
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore our construction videos, construction update videos,
              construction time lapse video projects, and real estate
              construction video campaigns across India&apos;s leading
              developments.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-6">
              From drone timelapse construction shoots to full-scale time lapse
              for construction sites, we help developers create compelling
              visual documentation and investor-ready construction communication
              assets.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedProject(project)}
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
                  <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
                    {project.duration}
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
        </div>
      </section>

      {/* Leading Construction Time Lapse Company */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Leading Construction Time Lapse Company in India
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Alliance Media Labs is a specialist construction time lapse
              company offering construction videos, construction update videos,
              construction time lapse video production, and drone timelapse
              construction services for real estate developers across India.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Our team creates professional real estate construction video
              content designed for investor communication, RERA compliance,
              project launches, digital marketing, and social media campaigns.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              From monthly construction update videos to long-duration time
              lapse for construction sites, we provide complete visual
              documentation solutions tailored for residential, commercial, and
              township developments.
            </p>
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

      {/* RERA Compliance Highlight */}
      <section className="py-16 bg-yellow-400">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center flex-shrink-0">
              <i className="ri-shield-check-line text-3xl text-yellow-400"></i>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-black mb-3">
                RERA Compliant Construction Documentation
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                Under RERA regulations, developers must update buyers on
                construction progress at regular intervals. Our construction
                update videos, construction videos, and construction time lapse
                video documentation serve as verified visual evidence while
                building buyer confidence throughout the construction cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              How It Works
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
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
            {faqs.map((faq, i) => (
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

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Construction Videos &amp; Construction Time Lapse Documentation
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Professional construction videos, construction update videos, time
              lapse for construction sites, and real estate construction video
              services designed for developers, investors, and buyers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${f.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
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
                  {
                    href: "/route-videos",
                    title: "Location AV / Route Videos",
                    desc: "Cinematic connectivity and location advantage videos.",
                    icon: "ri-road-map-line",
                  },
                  {
                    href: "/services/3d-walkthrough-video-company-india",
                    title: "3D Architectural Walkthrough Services",
                    desc: "Cinematic 3D walkthrough videos for property launches.",
                    icon: "ri-video-line",
                  },
                  {
                    href: "/services/drone-shoots",
                    title: "Drone Shoots & Location AV",
                    desc: "Aerial cinematography for real estate marketing.",
                    icon: "ri-flight-takeoff-line",
                  },
                ].map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:border-yellow-400/50 hover:bg-yellow-400/5 transition-all group"
                  >
                    <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                      <i className={`${s.icon} text-yellow-500 text-lg`} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm group-hover:text-yellow-600 transition-colors">
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
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <i className="ri-article-line text-yellow-500" />
                Related Articles
              </h3>
              <div className="grid gap-4">
                {[
                  {
                    href: "/blog/construction-delay-buyer-trust-india",
                    title:
                      "Construction Delays Are Killing Buyer Trust: How Developers Rebuild Confidence With Video Updates",
                    tag: "Buyer Trust",
                  },
                  {
                    href: "/blog/sell-property-to-nri-buyers-india",
                    title:
                      "How to Sell Property to NRI Buyers Who Can't Visit India",
                    tag: "NRI Guide",
                  },
                  {
                    href: "/blog/real-estate-marketing-video-types-india",
                    title:
                      "7 Types of Real Estate Marketing Videos Every Indian Developer Should Use",
                    tag: "Marketing",
                  },
                ].map((b) => (
                  <Link
                    key={b.href}
                    href={b.href}
                    className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:border-yellow-400/50 hover:bg-yellow-400/5 transition-all group"
                  >
                    <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                      <i className="ri-article-line text-yellow-500 text-lg" />
                    </div>
                    <div>
                      <span className="text-xs text-yellow-600 font-semibold">
                        {b.tag}
                      </span>
                      <div className="font-semibold text-gray-900 text-sm group-hover:text-yellow-600 transition-colors mt-0.5">
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
                Start Your Construction Videos &amp; Time Lapse Project
              </h2>
              <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
              <p className="text-lg text-black/80">
                Need construction videos, construction update videos, drone
                timelapse construction, or construction time lapse video
                services? Contact our experts for a custom quote.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {submitStatus === "success" ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-check-line text-2xl text-green-500" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-1">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We&apos;ve received your enquiry. Our team will respond
                    within 24 hours.
                  </p>
                </div>
              ) : (
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
                        required
                        className={inputClass("name")}
                        placeholder="Your full name"
                      />
                      {touched.name && errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name}
                        </p>
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
                        required
                        className={inputClass("email")}
                        placeholder="your@email.com"
                      />
                      {touched.email && errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <div className="flex gap-2">
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleInputChange}
                          className="px-2 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm bg-white w-[92px] flex-shrink-0"
                        >
                          {COUNTRY_CODES.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.code}
                            </option>
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
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Video Type
                      </label>
                      <select
                        name="videoType"
                        value={formData.videoType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      >
                        <option value="">Select type</option>
                        <option value="Construction Update Video">
                          Construction Update Video
                        </option>
                        <option value="Construction Time Lapse">
                          Construction Time Lapse
                        </option>
                        <option value="Drone Timelapse">Drone Timelapse</option>
                        <option value="Recurring Package">
                          Recurring Package
                        </option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm resize-none"
                      placeholder="Tell us about your construction project..."
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
