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
    icon: "ri-door-line",
    title: "Interior Cinematic Walkthroughs",
    desc: "Ultra-detailed interior walkthroughs with custom furniture, material finishes, lighting moods, and architectural detailing — ideal for premium launches and interior brand storytelling.",
    tags: [
      "Luxury Interiors",
      "Material Finishes",
      "Lighting Design",
      "Branded",
    ],
  },
  {
    icon: "ri-vip-diamond-line",
    title: "AI-Enhanced Premium Walkthroughs",
    desc: "Next-generation AI-powered walkthroughs with hyper-realistic textures, real-time atmosphere effects, and cinematic colour grading — for ultra-luxury and international-grade projects.",
    tags: [
      "AI Rendering",
      "Hyper-Realistic",
      "Cinematic Grade",
      "Luxury Launches",
    ],
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

const cityLinks = [
  { city: "Mumbai", href: "/city-services/3d-walkthrough-videos-mumbai" },
  { city: "Delhi NCR", href: "/city-services/3d-walkthrough-videos-delhi" },
  { city: "Bangalore", href: "/city-services/3d-walkthrough-videos-bangalore" },
  {
    city: "Gurugram",
    href: "/city-services/real-estate-video-production-gurugram",
  },
  { city: "Pune", href: "/contact" },
  { city: "Hyderabad", href: "/contact" },
  { city: "Chennai", href: "/contact" },
  { city: "Ahmedabad", href: "/contact" },
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
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const portfolioProjects: Project[] = [
    {
      id: 1,
      title: "Etereo 1, Goa",
      category: "3D Walkthrough",
      image: "/images/portfolio/1.png",
      description:
        "Cinematic 3D property walkthrough and 3D virtual house tour showcasing luxury residential units with panoramic city views.",
      videoUrl: "https://www.youtube.com/embed/BiCCdx0fDik?autoplay=1&t",
      duration: "2:45",
    },
    {
      id: 2,
      title: "Aura Vantaje, Gurugram",
      category: "3D Walkthrough",
      image: "/images/portfolio/Aura-Vantaje-Thumbnail.png",
      description:
        "Developed an AI-powered 3D walkthrough real estate presentation and architectural walkthrough for a commercial project, highlighting scale, usability, and immersive buyer experience.",
      videoUrl: "https://www.youtube.com/embed/YGaAU9B37nc?autoplay=1",
      duration: "1:20",
    },
    {
      id: 49,
      title: "Briston, Neemrana",
      category: "3D Walkthrough",
      image: "/images/portfolio/Briston-Thumbnail.png",
      description:
        "AI-powered teaser video showcasing Japanese-inspired apartments, architecture, and lifestyle.",
      videoUrl: "https://www.youtube.com/embed/5aCZOQxUZg4?autoplay=1",
      duration: "0:53",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
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
        setFormData({
          name: "",
          email: "",
          phone: "",
          project_type: "",
          city: "",
          message: "",
        });
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

      {/* ── HERO ── */}
      <section className="py-24 h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/services/3d-walkthrough-videos/2.jpg')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mb-8">
                <i className="ri-video-line text-3xl text-black"></i>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                3D Walkthrough Video{" "}
                <span className="text-yellow-400">Company India</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-4 leading-relaxed drop-shadow-lg">
                Photorealistic architectural walkthrough videos that sell
                projects before a brick is laid. From residential apartments to
                township master plans — we build buyer confidence with cinematic
                3D storytelling.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed drop-shadow-lg">
                Trusted by Etereo Realty, Aura World, SRMG, and 200+ Indian
                developers. Delivery in as fast as 7 working days.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap"
                >
                  Get Quote
                </a>
                <a
                  href="#portfolio"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap"
                >
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
                  <h3 className="text-lg font-bold text-black mb-1">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We&apos;ve received your enquiry. Our team will get back to
                    you within 24 hours with a detailed quote.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-black mb-1">
                    Get a Free Quote
                  </h3>
                  <p className="text-gray-500 text-sm mb-5">
                    Share your project drawings and we&apos;ll respond within 24
                    hours.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
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
                          placeholder="Your full name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        />
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
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Walkthrough Type
                        </label>
                        <select
                          name="project_type"
                          value={formData.project_type}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        >
                          <option value="">Select type</option>
                          <option value="Residential Walkthrough">
                            Residential Walkthrough
                          </option>
                          <option value="Commercial Walkthrough">
                            Commercial Walkthrough
                          </option>
                          <option value="Township Flythrough">
                            Township Flythrough
                          </option>
                          <option value="Interior Cinematic">
                            Interior Cinematic
                          </option>
                          <option value="AI-Enhanced Premium">
                            AI-Enhanced Premium
                          </option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          City
                        </label>
                        <select
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        >
                          <option value="">Select city</option>
                          <option value="Mumbai">Mumbai</option>
                          <option value="Delhi NCR">Delhi NCR</option>
                          <option value="Bangalore">Bangalore</option>
                          <option value="Gurugram">Gurugram</option>
                          <option value="Pune">Pune</option>
                          <option value="Hyderabad">Hyderabad</option>
                          <option value="Chennai">Chennai</option>
                          <option value="Ahmedabad">Ahmedabad</option>
                          <option value="Other">Other City</option>
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
                        placeholder="Project name, location, scale, timeline..."
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
                      className="w-full bg-yellow-400 hover:bg-yellow-300 disabled:opacity-60 text-black font-bold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="ri-loader-4-line animate-spin"></i>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="ri-send-plane-line" />
                          Get My Free Quote
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our 3D Walkthrough Portfolio
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              Explore our collection of immersive 3D walkthrough video projects,
              3D virtual house tours, and 3D property walkthrough solutions for
              residential, commercial, and architectural developments across
              India.
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

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              India&apos;s Most Trusted 3D Walkthrough Company
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              We combine AI-powered rendering, architectural precision, and
              cinematic storytelling to produce walkthroughs that move buyers
              from interest to booking.
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
                className="bg-gray-50 rounded-xl p-7 border border-gray-100 hover:border-yellow-400/50 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-yellow-400/20 transition-colors">
                  <i className={`${f.icon} text-2xl text-yellow-400`} />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WALKTHROUGH TYPES ── */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              5 Types of 3D Walkthrough Videos We Produce
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Every project type demands a different visual approach. We&apos;re
              India&apos;s only 3D walkthrough company with deep specialisation
              across all five.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {walkthroughTypes.map((wt, idx) => (
              <div
                key={wt.title}
                className={`rounded-xl p-7 border transition-all hover:border-yellow-400/60 ${
                  idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                } bg-white/5 border-white/10`}
              >
                <div className="w-11 h-11 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-5">
                  <i className={`${wt.icon} text-xl text-yellow-400`} />
                </div>
                <h3 className="text-lg font-bold mb-3">{wt.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {wt.desc}
                </p>
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

      {/* ── PRODUCTION PROCESS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our 6-Step Production Process
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              A structured pipeline built for speed, accuracy, and zero
              surprises — designed for developer timelines and sales office
              deadlines.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {productionProcess.map((step) => (
              <div
                key={step.step}
                className="relative bg-gray-50 rounded-xl p-7 border border-gray-100 hover:border-yellow-400/40 hover:shadow-md transition-all"
              >
                <div className="text-5xl font-black text-yellow-400/20 absolute top-5 right-5">
                  {step.step}
                </div>
                <div className="w-9 h-9 bg-yellow-400 text-black rounded-lg flex items-center justify-center text-sm font-black mb-5">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-black mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              What India&apos;s Top Developers Say
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className="ri-star-fill text-yellow-400 text-sm"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
                  <div className="w-10 h-10 bg-yellow-400/10 rounded-full flex items-center justify-center">
                    <i className="ri-user-line text-yellow-400" />
                  </div>
                  <div>
                    <div className="font-bold text-black text-sm">{t.name}</div>
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
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              3D Walkthrough Company Serving All Major Indian Cities
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {cityLinks.map((c) => (
              <Link
                key={c.city}
                href={c.href}
                className="inline-flex items-center gap-2 border border-gray-200 hover:border-yellow-400 hover:bg-yellow-400/5 text-gray-700 hover:text-black px-5 py-2.5 rounded-full text-sm font-medium transition-all"
              >
                <i className="ri-map-pin-line text-yellow-400 text-xs" />
                {c.city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Questions developers ask before choosing a 3D walkthrough video
              company in India.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
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
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-black mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES & BLOGS ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Related Services */}
            <div>
              <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                <i className="ri-stack-line text-yellow-400" />
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
                    icon: "ri-eye-line",
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
                    className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:border-yellow-400/50 hover:bg-yellow-400/5 transition-all group"
                  >
                    <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                      <i className={`${s.icon} text-yellow-400 text-lg`} />
                    </div>
                    <div>
                      <div className="font-semibold text-black text-sm group-hover:text-yellow-400 transition-colors">
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

            {/* Related Blog Posts */}
            <div>
              <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                <i className="ri-article-line text-yellow-400" />
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
                    className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:border-yellow-400/50 hover:bg-yellow-400/5 transition-all group"
                  >
                    <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                      <i className="ri-article-line text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <span className="text-xs text-yellow-400 font-semibold">
                        {b.tag}
                      </span>
                      <div className="font-semibold text-black text-sm group-hover:text-yellow-400 transition-colors mt-0.5">
                        {b.title}
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5">
                        {b.desc}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="contact" className="py-24 bg-yellow-400">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Start Your 3D Walkthrough Project Today
              </h2>
              <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
              <p className="text-lg text-black/80">
                Share your project drawings and we&apos;ll send a detailed quote
                within 24 hours — with production timeline, pricing breakdown,
                and sample references relevant to your project type.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {[
                {
                  icon: "ri-time-line",
                  title: "Quote in 24 Hours",
                  desc: "Detailed scope, timeline, and pricing breakdown",
                },
                {
                  icon: "ri-draft-line",
                  title: "Drawing Review Included",
                  desc: "We review your CAD/PDF files before quoting",
                },
                {
                  icon: "ri-shield-check-line",
                  title: "NDA on Request",
                  desc: "Your project data and drawings stay confidential",
                },
              ].map((i) => (
                <div
                  key={i.title}
                  className="flex items-start gap-3 bg-white/40 rounded-xl p-4"
                >
                  <i
                    className={`${i.icon} text-black text-xl flex-shrink-0 mt-0.5`}
                  />
                  <div>
                    <div className="font-semibold text-black text-sm">
                      {i.title}
                    </div>
                    <div className="text-black/70 text-xs">{i.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {submitStatus === "success" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-check-line text-3xl text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    We&apos;ve received your enquiry. Our team will get back to
                    you within 24 hours with a detailed quote.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      />
                    </div>
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
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Walkthrough Type
                      </label>
                      <select
                        name="project_type"
                        value={formData.project_type}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      >
                        <option value="">Select type</option>
                        <option value="Residential Walkthrough">
                          Residential Walkthrough
                        </option>
                        <option value="Commercial Walkthrough">
                          Commercial Walkthrough
                        </option>
                        <option value="Township Flythrough">
                          Township Flythrough
                        </option>
                        <option value="Interior Cinematic">
                          Interior Cinematic
                        </option>
                        <option value="AI-Enhanced Premium">
                          AI-Enhanced Premium
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City
                      </label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      >
                        <option value="">Select city</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi NCR">Delhi NCR</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Gurugram">Gurugram</option>
                        <option value="Pune">Pune</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Other">Other City</option>
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
                      placeholder="Tell us about your project — project name, location, scale, timeline, and any specific requirements..."
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
                    className="w-full bg-yellow-400 text-black py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
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
                    We respond within 24 hours. Your information is
                    confidential. Or{" "}
                    <a
                      href="https://wa.me/919999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-medium hover:underline"
                    >
                      WhatsApp us directly
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
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
    </div>
  );
}
