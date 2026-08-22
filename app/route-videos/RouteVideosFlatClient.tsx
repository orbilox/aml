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
  videoUrl: string;
  duration: string;
}

const videoTypes = [
  {
    icon: "ri-road-map-line",
    title: "Location Videos",
    desc: "Cinematic location video showing connectivity to metro stations, schools, hospitals, and highways around your project.",
  },
  {
    icon: "ri-vidicon-line",
    title: "Real Estate Videography",
    desc: "Full-service real estate videography covering site, surroundings, and lifestyle context in one cinematic package.",
  },
  {
    icon: "ri-camera-3-line",
    title: "Property Videography",
    desc: "Property videography services capturing the site itself alongside its neighbourhood and connectivity advantages.",
  },
  {
    icon: "ri-flight-takeoff-line",
    title: "Real Estate Drone Video",
    desc: "Aerial real estate drone video of approach routes, arterial roads, and key landmarks around the project site.",
  },
  {
    icon: "ri-map-2-line",
    title: "Real Estate Connectivity Videos",
    desc: "Animated map overlays and proximity callouts showing distance and travel time to major destinations.",
  },
  {
    icon: "ri-briefcase-4-line",
    title: "Real Estate Video Packages",
    desc: "Bundled real estate video packages combining location video, drone B-roll, and social media cut-downs.",
  },
];

const productionCapabilities = [
  {
    icon: "ri-road-map-line",
    title: "Smart Route Planning",
    desc: "We map out the most scenic and relevant approach routes to your project before a single shot is scheduled.",
  },
  {
    icon: "ri-camera-3-line",
    title: "Cinematic Ground Coverage",
    desc: "Smooth ground-level cinematography capturing the journey experience along every key access road.",
  },
  {
    icon: "ri-flight-takeoff-line",
    title: "Aerial Drone Perspectives",
    desc: "4K drone footage giving buyers a bird's-eye view of connectivity, traffic flow, and surrounding infrastructure.",
  },
  {
    icon: "ri-time-line",
    title: "Accurate Travel-Time Callouts",
    desc: "On-screen travel-time labels sourced from real distances, not rough estimates, to major landmarks.",
  },
  {
    icon: "ri-map-pin-line",
    title: "Landmark & Amenity Highlights",
    desc: "Nearby schools, hospitals, malls, and transit hubs are called out visually along the route.",
  },
  {
    icon: "ri-navigation-line",
    title: "Clear Navigation Cues",
    desc: "Directional signage and turn-by-turn visual cues so buyers can picture the actual drive to site.",
  },
];

const locationVideoBenefits = [
  "Turns a location advantage into a concrete buyer decision point",
  "Cuts down on repeat site-visit questions about connectivity",
  "Gives channel partners a ready-made location story to present",
  "Performs well as a stand-alone digital ad creative",
  "Documents infrastructure that's still under construction",
  "Pairs naturally with your 3D walkthrough and construction updates",
];

const processSteps = [
  { step: "01", title: "Route Planning", desc: "We map all connectivity highlights — metro stations, schools, hospitals, highways, and landmarks." },
  { step: "02", title: "Shoot Day", desc: "Drone and ground footage of all key routes and landmark destinations around your project." },
  { step: "03", title: "Motion Graphics", desc: "Animated map overlays, distance callouts, proximity labels, and route highlights added in post." },
  { step: "04", title: "Final Delivery", desc: "Branded location video delivered in full HD — with social cuts for Instagram, YouTube, and WhatsApp." },
];

const useCases = [
  {
    icon: "ri-presentation-line",
    title: "Pre-Launch Buyer Decks",
    desc: "Show early buyers and investors why the location is a sound bet, before the project has even launched.",
  },
  {
    icon: "ri-user-star-line",
    title: "Channel Partner Enablement",
    desc: "Equip brokers and channel partners with a ready location story for every client meeting.",
  },
  {
    icon: "ri-advertisement-line",
    title: "Performance Digital Ads",
    desc: "Location-led creative for Meta and Google campaigns targeting buyers searching in the area.",
  },
];

const companyCards = [
  {
    icon: "ri-briefcase-4-line",
    title: "Bundled Video Packages",
    desc: "Combine location video, drone B-roll, and construction updates into one launch-ready package.",
  },
  {
    icon: "ri-team-line",
    title: "A Crew That Understands Real Estate",
    desc: "Every shoot is planned by people who know what sells a location — not a generic film crew.",
  },
  {
    icon: "ri-film-line",
    title: "Full-Service Property Videography",
    desc: "Connectivity routes, nearby landmarks, aerial overviews, and ground-level shots in one shoot day.",
  },
];

const stats = [
  { value: "80+", label: "Location Videos Delivered" },
  { value: "4K Drone", label: "Aerial Coverage" },
  { value: "3 Cut-Downs", label: "Per Project" },
  { value: "Pan-India", label: "Location Coverage" },
];

export default function RouteVideosFlatClient() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    firm: "",
    videoType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const portfolioProjects: Project[] = [
    {
      id: 1,
      title: "Hero Homes-The Palatial, Gurugram",
      category: "Location Video",
      image: "/images/portfolio/14.png",
      description: "Dynamic location video showcasing different approach routes to reach the project site, highlighting nearby landmarks and markers for easy navigation.",
      videoUrl: "https://www.youtube.com/embed/ENlsfe7wQRs?autoplay=1",
      duration: "6:34",
    },
    {
      id: 2,
      title: "Naman 58, Mumbai",
      category: "Location Video",
      image: "/images/portfolio/Naman-58-Thumbnail.jpg",
      description: "Cinematic location video featuring real estate connectivity showcase, animated map, drone coverage, and highway access highlighting.",
      videoUrl: "https://www.youtube.com/embed/Yqsj9E8-QHI?autoplay=1",
      duration: "4:00",
    },
  ];

  const faqs = [
    {
      q: "What is a location video and why do developers need one?",
      a: "A location video shows a buyer the location advantage of a project — connectivity to metro stations, schools, hospitals, and highways — using drone footage, animated map overlays, and proximity text labels.",
    },
    {
      q: "What's included in real estate videography services?",
      a: "Our real estate videography services include drone aerial B-roll, animated map overlays, proximity callouts, licensed music and voiceover, and social media cut-downs.",
    },
    {
      q: "How is property videography different from a construction update video?",
      a: "Property videography and location videos focus on the site's surroundings and connectivity for marketing, while a construction update video documents the building's own progress.",
    },
    {
      q: "Do you offer real estate drone video as part of location videos?",
      a: "Yes. Real estate drone video is a core part of every location video we produce — capturing aerial approach routes, arterial roads, and key landmarks around your project site.",
    },
    {
      q: "Can real estate connectivity videos be used for channel partner presentations?",
      a: "Yes. Real estate connectivity videos are commonly used in channel partner presentations, pre-launch buyer decks, and digital ads.",
    },
    {
      q: "Do you offer real estate location AV in India for cities beyond the metros?",
      a: "Yes. Our real estate location av in India covers Tier 1 and Tier 2 cities alike — every real estate location video we produce is scoped to the actual connectivity landmarks relevant to that city, not a generic template.",
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
          subject: "New Lead — Location Video / Route Videos Page",
          from_name: formData.name,
          ...formData,
        }),
      });
      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", firm: "", videoType: "", message: "" });
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

      {/* Hero Section */}
      <section className="py-24 min-h-[85vh] flex items-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/home/2.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                Location <span className="text-yellow-400">Video</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-4 leading-relaxed drop-shadow-lg">
                A trusted real estate video company — real estate videography, property videography, and real estate connectivity videos that sell the location advantage.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed drop-shadow-lg">
                From a single location video to full real estate video packages, our team covers connectivity, landmarks, and drone routes pan-India.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap">
                  Request a Quote
                </a>
                <a href="#portfolio" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap">
                  Watch Sample Videos
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
                    Share your project location and we&apos;ll respond within 24 hours.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="firm"
                          value={formData.firm}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Video Type</label>
                      <select
                        name="videoType"
                        value={formData.videoType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      >
                        <option value="">Select type</option>
                        <option value="Location Video">Location Video</option>
                        <option value="Real Estate Videography">Real Estate Videography</option>
                        <option value="Property Videography">Property Videography</option>
                        <option value="Full Video Package">Full Video Package</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Project Details</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm resize-none"
                        placeholder="Project name, location, and any specific requirements..."
                      ></textarea>
                    </div>
                    {submitStatus === "error" && (
                      <p className="text-red-600 text-sm">Something went wrong. Please try again or WhatsApp us directly.</p>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-yellow-400 text-black py-3.5 rounded-lg font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="ri-loader-4-line animate-spin"></i>
                          Sending...
                        </>
                      ) : (
                        <>
                          Get My Free Quote
                          <i className="ri-send-plane-line"></i>
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

      {/* Stats */}
      <section className="bg-yellow-400 py-6">
        <div className="container mx-auto px-6">
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

      {/* Production Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Real Estate Video Production Capabilities</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive route documentation that enhances location marketing and buyer confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productionCapabilities.map((f) => (
              <div key={f.title} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-yellow-400 transition-all duration-300">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${f.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Types Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">6 Types of Location &amp; Real Estate Videos We Produce</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Every real estate location video we deliver is part of a broader real estate videos toolkit — combined with your walkthroughs and construction updates for a complete marketing package.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTypes.map((mt) => (
              <div key={mt.title} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${mt.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{mt.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{mt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">What a Location Video Does For Your Launch</h2>
              <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
              <p className="text-xl text-gray-600 mb-8">
                Location videos give potential buyers the accessibility context that photos and floor plans can&apos;t — and give your sales team a story to sell before the first site visit.
              </p>
              <ul className="space-y-4">
                {locationVideoBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <i className="ri-check-line text-yellow-400 text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img src="/images/home/1.jpg" alt="Location video production" className="rounded-2xl shadow-2xl w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Location Video Portfolio</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real location video and real estate videography projects delivered as part of our real estate video packages for developers across India.
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
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                      <i className="ri-play-fill text-2xl text-black"></i>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">{project.duration}</div>
                  <div className="absolute bottom-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">{project.category}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                  <p className="text-black/70">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap inline-flex">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our 4-Step Process</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">{step.step.replace(/^0/, "")}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose / Included Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Our Real Estate Video Company</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              As a real estate video company, we deliver real estate videography and property videography that turns location advantage into a buyer decision point.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "ri-flight-takeoff-line", title: "Drone Aerial B-Roll", desc: "Cinematic overhead shots of the project site, arterial roads, and key landmarks in every real estate drone video." },
              { icon: "ri-map-2-line", title: "Animated Map Overlays", desc: "Motion graphics showing routes, distances, and travel times built into every location video." },
              { icon: "ri-road-map-line", title: "Proximity Text Labels", desc: "On-screen callouts like '5 mins to Metro' or '10 mins to Airport' during the relevant shots." },
              { icon: "ri-music-2-line", title: "Professional Music & VO", desc: "Licensed background music and optional professional voiceover narration on every real estate videography project." },
              { icon: "ri-scissors-cut-line", title: "Social Media Cut-Downs", desc: "30s and 60s versions optimised for Instagram Reels, YouTube Shorts, and WhatsApp included in every package." },
              { icon: "ri-building-4-line", title: "Brand Overlays", desc: "Your project logo, brand colours, and developer identity integrated throughout every property videography deliverable." },
            ].map((f) => (
              <div key={f.title} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-yellow-400 transition-colors">
                <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${f.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Who Uses Our Location Videos</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((item) => (
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

      {/* Company Info Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Developers Choose Our Real Estate Video Company</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We specialise exclusively in real estate video — location videos, property videography, and real estate connectivity videos — so every shoot is planned around what actually helps a project sell.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {companyCards.map((item) => (
                <div key={item.title} className="bg-white/10 rounded-xl p-6">
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                    <i className={`${item.icon} text-black`}></i>
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-black mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center bg-gray-50 rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-black mb-4">Get a Custom Location Video Quote</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-600 mb-8">
              Pricing depends on the number of routes covered, aerial footage, animation complexity, and delivery timeline. Contact our experts for a custom quote.
            </p>
            <a href="#contact" className="inline-flex items-center bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
              <i className="ri-phone-line mr-2"></i>Talk to Our Team
            </a>
          </div>
        </div>
      </section>

      {/* Related Services & Blogs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                <i className="ri-stack-line text-yellow-500" />
                Related Services
              </h3>
              <div className="grid gap-4">
                {[
                  { href: "/services/route-videos", title: "Location AV / Route Videos", desc: "Cinematic connectivity and location advantage videos.", icon: "ri-road-map-line" },
                  { href: "/construction-update-videos", title: "Construction Videos", desc: "Scheduled construction progress documentation.", icon: "ri-vidicon-line" },
                  { href: "/3d-walkthrough-videos", title: "3D Architectural Walkthrough Services", desc: "Cinematic 3D walkthrough videos for property launches.", icon: "ri-video-line" },
                ].map((s) => (
                  <Link key={s.href} href={s.href} className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:border-yellow-400/50 hover:bg-yellow-400/5 transition-all group">
                    <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                      <i className={`${s.icon} text-yellow-500 text-lg`} />
                    </div>
                    <div>
                      <div className="font-semibold text-black text-sm group-hover:text-yellow-600 transition-colors">{s.title}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{s.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                <i className="ri-article-line text-yellow-500" />
                Related Articles
              </h3>
              <div className="grid gap-4">
                {[
                  { href: "/blog/real-estate-marketing-video-types-india", title: "7 Types of Real Estate Marketing Videos Every Indian Developer Should Use", tag: "Marketing" },
                  { href: "/blog/sell-property-to-nri-buyers-india", title: "How to Sell Property to NRI Buyers Who Can't Visit India", tag: "NRI Guide" },
                  { href: "/blog/premium-real-estate-marketing-differentiation-india", title: "Why Your Premium Project Looks Like Every Other Listing Online", tag: "Marketing" },
                ].map((b) => (
                  <Link key={b.href} href={b.href} className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:border-yellow-400/50 hover:bg-yellow-400/5 transition-all group">
                    <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                      <i className="ri-article-line text-yellow-500 text-lg" />
                    </div>
                    <div>
                      <span className="text-xs text-yellow-600 font-semibold">{b.tag}</span>
                      <div className="font-semibold text-black text-sm group-hover:text-yellow-600 transition-colors mt-0.5">{b.title}</div>
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
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Talk to Our Location Video Team</h2>
              <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
              <p className="text-lg text-black/80">
                Share your project location — we&apos;ll map the connectivity story and send a quote within 24 hours.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {submitStatus === "success" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-check-line text-3xl text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Thank You!</h3>
                  <p className="text-gray-600">We&apos;ve received your enquiry. Our team will respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        placeholder="you@company.com"
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
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        name="firm"
                        value={formData.firm}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Video Type</label>
                    <select
                      name="videoType"
                      value={formData.videoType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                    >
                      <option value="">Select type</option>
                      <option value="Location Video">Location Video</option>
                      <option value="Real Estate Videography">Real Estate Videography</option>
                      <option value="Property Videography">Property Videography</option>
                      <option value="Full Video Package">Full Video Package</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm resize-none"
                      placeholder="Project name, location, and any specific requirements..."
                    ></textarea>
                  </div>
                  {submitStatus === "error" && (
                    <p className="text-red-600 text-sm">Something went wrong. Please try again or WhatsApp us directly.</p>
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
                    We respond within 24 hours. Your information is confidential. Or{" "}
                    <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="text-green-600 font-medium hover:underline">
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

      {/* Final CTA */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Tell Your Location Story?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            From a single connectivity clip to a full location-video package, our team is ready to map the route.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap">
              Start Your Project
            </a>
            <a href="#portfolio" className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors whitespace-nowrap">
              View Our Work
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />

      {/* Video Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <div className="aspect-video">
                <iframe
                  src={selectedProject.videoUrl}
                  title={selectedProject.title}
                  className="w-full h-full rounded-t-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/80 text-white rounded-full flex items-center justify-center hover:bg-black transition-colors"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-black mb-4">{selectedProject.title}</h3>
              <p className="text-black/70 text-lg mb-6">{selectedProject.description}</p>
              <div className="flex items-center space-x-6 mb-2">
                <div className="flex items-center space-x-2">
                  <i className="ri-time-line text-yellow-500"></i>
                  <span className="text-black">Duration: {selectedProject.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-play-circle-line text-yellow-500"></i>
                  <span className="text-black">HD Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
