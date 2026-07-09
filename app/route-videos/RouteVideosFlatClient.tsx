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

const processSteps = [
  { step: "01", title: "Route Planning", desc: "We map all connectivity highlights — metro stations, schools, hospitals, highways, and landmarks." },
  { step: "02", title: "Shoot Day", desc: "Drone and ground footage of all key routes and landmark destinations around your project." },
  { step: "03", title: "Motion Graphics", desc: "Animated map overlays, distance callouts, proximity labels, and route highlights added in post." },
  { step: "04", title: "Final Delivery", desc: "Branded location video delivered in full HD — with social cuts for Instagram, YouTube, and WhatsApp." },
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
    },
    {
      id: 2,
      title: "Naman 58, Mumbai",
      category: "Location Video",
      image: "/images/portfolio/Naman-58-Thumbnail.jpg",
      description: "Cinematic location video featuring real estate connectivity showcase, animated map, drone coverage, and highway access highlighting.",
      videoUrl: "https://www.youtube.com/embed/Yqsj9E8-QHI?autoplay=1",
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
      <WhatsAppFloat />

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setSelectedProject(null)}>
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedProject(null)} className="absolute top-3 right-3 z-10 w-9 h-9 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors">
              <i className="ri-close-line text-lg" />
            </button>
            <iframe src={selectedProject.videoUrl} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={selectedProject.title} />
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative bg-[#0a0a0a] text-white overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/home/2.jpg"
            alt="Location video and real estate videography India — Alliance Media Labs"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[2px] bg-yellow-400" />
              <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">Location Video India</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Location <span className="text-yellow-400">Video</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4 max-w-2xl">
              A trusted real estate video company — real estate videography, property videography, and real estate connectivity videos that sell the location advantage.
            </p>
            <p className="text-base text-gray-400 mb-10 max-w-2xl">
              From a single location video to full real estate video packages, our team covers connectivity, landmarks, and drone routes pan-India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                <i className="ri-road-map-line" />
                Request a Quote
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-8 py-4 rounded-lg transition-colors text-lg"
              >
                <i className="ri-play-circle-line" />
                Watch Sample Videos
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
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">Why Choose Our Real Estate Video Company</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Location Videos That Sell the Address</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              As a real estate video company, we deliver real estate videography and property videography that turns location advantage into a buyer decision point.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "ri-flight-takeoff-line", title: "Drone Aerial B-Roll", desc: "Cinematic overhead shots of the project site, arterial roads, and key landmarks in every real estate drone video." },
              { icon: "ri-map-2-line", title: "Animated Map Overlays", desc: "Motion graphics showing routes, distances, and travel times built into every location video." },
              { icon: "ri-road-map-line", title: "Proximity Text Labels", desc: "On-screen callouts like '5 mins to Metro' or '10 mins to Airport' during the relevant shots." },
              { icon: "ri-music-2-line", title: "Professional Music & VO", desc: "Licensed background music and optional professional voiceover narration on every real estate videography project." },
              { icon: "ri-scissors-cut-line", title: "Social Media Cut-Downs", desc: "30s and 60s versions optimised for Instagram Reels, YouTube Shorts, and WhatsApp included in every package." },
              { icon: "ri-building-4-line", title: "Brand Overlays", desc: "Your project logo, brand colours, and developer identity integrated throughout every property videography deliverable." },
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

      {/* Video Types */}
      <section className="py-20 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">Video Types</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">6 Types of Location & Real Estate Videos We Produce</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoTypes.map((mt) => (
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Location Video Portfolio</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Real location video and real estate videography projects delivered as part of our real estate video packages for developers across India.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {portfolioProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                      <i className="ri-play-fill text-2xl text-black ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
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
                  { href: "/services/route-videos", title: "Location AV / Route Videos", desc: "Cinematic connectivity and location advantage videos.", icon: "ri-road-map-line" },
                  { href: "/construction-update-videos", title: "Construction Videos", desc: "Scheduled construction progress documentation.", icon: "ri-vidicon-line" },
                  { href: "/3d-walkthrough-videos", title: "3D Architectural Walkthrough Services", desc: "Cinematic 3D walkthrough videos for property launches.", icon: "ri-video-line" },
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
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">Talk to Our Location Video Team</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Share your project location — we&apos;ll map the connectivity story and send a quote within 24 hours.
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
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Video Type</label>
                      <select name="videoType" value={formData.videoType} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors text-sm appearance-none">
                        <option value="" className="bg-gray-900">Select type</option>
                        <option value="Location Video" className="bg-gray-900">Location Video</option>
                        <option value="Real Estate Videography" className="bg-gray-900">Real Estate Videography</option>
                        <option value="Property Videography" className="bg-gray-900">Property Videography</option>
                        <option value="Full Video Package" className="bg-gray-900">Full Video Package</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Project Details</label>
                    <textarea name="message" rows={4} value={formData.message} onChange={handleInputChange} placeholder="Project name, location, and any specific requirements..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm resize-none" />
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
