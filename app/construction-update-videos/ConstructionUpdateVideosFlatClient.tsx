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
    icon: "ri-vidicon-line",
    title: "Construction Update Videos",
    desc: "Scheduled monthly or quarterly construction update videos combining drone and ground footage with a timeline overlay and narration.",
  },
  {
    icon: "ri-time-line",
    title: "Construction Time Lapse Video",
    desc: "A fixed-camera construction time lapse video compressing weeks or months of progress into a compelling short clip.",
  },
  {
    icon: "ri-flight-takeoff-line",
    title: "Drone Timelapse Construction",
    desc: "Aerial drone timelapse construction coverage showing full-site progress that ground cameras can't capture.",
  },
  {
    icon: "ri-building-4-line",
    title: "Real Estate Construction Video",
    desc: "Edited, narrated real estate construction video updates built for direct distribution to booked buyers and stakeholders.",
  },
  {
    icon: "ri-map-pin-time-line",
    title: "Time Lapse for Construction Sites",
    desc: "Long-duration time lapse for construction sites, from foundation to handover, documenting the full project lifecycle.",
  },
  {
    icon: "ri-repeat-line",
    title: "Recurring Update Packages",
    desc: "Standing monthly or quarterly construction videos engagements — not one-off shoots — for developers who want consistent buyer communication.",
  },
];

const processSteps = [
  { step: "01", title: "Site Visit", desc: "Our team schedules a recurring site visit aligned to your construction milestones." },
  { step: "02", title: "Shoot", desc: "Drone and ground-level footage captured on-site, with time lapse cameras installed for continuous coverage where needed." },
  { step: "03", title: "Edit & Grade", desc: "Footage is edited with a timeline overlay, narration, and colour grading for a polished construction update video." },
  { step: "04", title: "Deliver", desc: "Final video delivered via cloud link, ready for direct WhatsApp and email distribution to buyers." },
];

const stats = [
  { value: "150+", label: "Construction Videos Delivered" },
  { value: "Monthly", label: "Recurring Update Cadence" },
  { value: "4K Drone", label: "Aerial Coverage" },
  { value: "Pan-India", label: "Site Coverage" },
];

export default function ConstructionUpdateVideosFlatClient() {
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
      title: "Pyramid Alban",
      category: "Construction Update",
      image: "/images/portfolio/10.png",
      description: "Monthly construction progress documentation with aerial and ground-level footage.",
      videoUrl: "https://www.youtube.com/embed/QDJxopvP4Ro?autoplay=1",
    },
    {
      id: 2,
      title: "Smart World The Edition",
      category: "Construction Update",
      image: "/images/portfolio/11.png",
      description: "Comprehensive construction timeline documentation for a premium residential project.",
      videoUrl: "https://www.youtube.com/embed/4RebMEfQr3Y?autoplay=1",
    },
    {
      id: 3,
      title: "Central Ikon",
      category: "Construction Update",
      image: "/images/portfolio/Central-Ikon-Thumbnail.png",
      description: "Regular construction progress updates showcasing structural milestones.",
      videoUrl: "https://www.youtube.com/embed/k2jFPH49J0U?autoplay=1",
    },
    {
      id: 4,
      title: "The Kutumb",
      category: "Construction Update",
      image: "/images/portfolio/Kutumb-Thumbnail.png",
      description: "Detailed construction documentation with drone and time-lapse footage.",
      videoUrl: "https://www.youtube.com/embed/ZLblD-AEilk?autoplay=1",
    },
    {
      id: 5,
      title: "HCBS Auroville, Gurugram",
      category: "Construction Updates",
      image: "/images/portfolio/Auroville-Thumbnail.jpg",
      description: "High-quality construction progress video featuring drone videography and real estate construction updates.",
      videoUrl: "https://www.youtube.com/embed/ommJFDhiz-M?autoplay=1",
    },
    {
      id: 6,
      title: "Smart World, Sky Arc, Gurugram",
      category: "Construction Updates",
      image: "/images/portfolio/Sky-Arc-Thumbnail.png",
      description: "Cinematic construction update video with drone shoot and real estate project progress tracking.",
      videoUrl: "https://www.youtube.com/embed/lJ9b5xaa04Q?autoplay=1",
    },
    {
      id: 7,
      title: "HCBS Glenwood, Jhajjar",
      category: "Construction Updates",
      image: "/images/portfolio/Glenwood-Thumbnail.png",
      description: "Professional construction update film with drone coverage and infrastructure progress video.",
      videoUrl: "https://www.youtube.com/embed/19KFjpoBYBA?autoplay=1",
    },
    {
      id: 8,
      title: "HCBS Twin Horizon, Gurugram",
      category: "Construction Updates",
      image: "/images/portfolio/Twin-Horizon-Thumbnail.png",
      description: "Real estate construction update video with aerial drone shoot and monthly project progress coverage.",
      videoUrl: "https://www.youtube.com/embed/5fxjaqWpgYE?autoplay=1",
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
          subject: "New Lead — Construction Update Videos Page",
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
            src="/images/portfolio/10.png"
            alt="Construction videos and construction time lapse India — Alliance Media Labs"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-[2px] bg-yellow-400" />
                <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">Construction Videos India</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Construction <span className="text-yellow-400">Videos</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4 max-w-2xl">
                A trusted construction time lapse company — construction update videos, drone timelapse construction, and real estate construction video coverage on a scheduled cadence.
              </p>
              <p className="text-base text-gray-400 mb-10 max-w-2xl">
                From a single construction time lapse video to a full recurring update engagement, our team keeps buyers confident through every build.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-lg transition-colors text-lg"
                >
                  <i className="ri-vidicon-line" />
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
                    Share your project timeline and we&apos;ll respond within 24 hours.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Name *</label>
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
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone *</label>
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
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
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
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Video Type</label>
                        <select
                          name="videoType"
                          value={formData.videoType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        >
                          <option value="">Select type</option>
                          <option value="Construction Update Video">Construction Update Video</option>
                          <option value="Construction Time Lapse">Construction Time Lapse</option>
                          <option value="Drone Timelapse">Drone Timelapse</option>
                          <option value="Recurring Package">Recurring Package</option>
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
                        placeholder="Project name, construction stage, and update frequency needed..."
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
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">Why Choose Our Construction Time Lapse Company</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Construction Videos That Build Buyer Trust</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              As a construction time lapse company, we deliver construction update videos and real estate construction video coverage that keeps buyers informed and confident.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "ri-calendar-check-line", title: "Recurring Monthly or Quarterly Cadence", desc: "Our construction update videos follow a fixed schedule — consistency, not one-off shoots, is what builds buyer trust." },
              { icon: "ri-flight-takeoff-line", title: "Drone + Ground Footage Together", desc: "Every construction video combines drone timelapse construction with ground-level detail for a complete picture of progress." },
              { icon: "ri-time-line", title: "Long-Duration Time Lapse", desc: "Fixed-camera construction time lapse for construction sites capturing months of progress in a single compelling clip." },
              { icon: "ri-user-voice-line", title: "Narrated, Not Just Footage", desc: "Brief narration from your project lead makes every real estate construction video feel accountable, not just promotional." },
              { icon: "ri-whatsapp-line", title: "Direct Buyer Distribution", desc: "Videos delivered ready for direct WhatsApp and email distribution to booked buyers, not just a website upload." },
              { icon: "ri-shield-check-line", title: "Compliant Drone Operations", desc: "All drone timelapse construction shoots follow standard local flight permissions and site safety clearances." },
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
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">6 Types of Construction Videos We Produce</h2>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Construction Videos Portfolio</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Real construction update videos and construction time lapse projects delivered for developers across India.
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
                q: "What is included in construction update videos?",
                a: "Our construction update videos combine drone and ground-level construction videos, a plan-vs-actual timeline overlay, and brief narration — delivered on a scheduled monthly or quarterly cadence.",
              },
              {
                q: "What is the difference between a construction time lapse and a construction update video?",
                a: "A construction time lapse is continuous fixed-camera footage compressed to show progress over weeks or months, while a construction update video is an edited, narrated piece combining time lapse with drone footage and commentary.",
              },
              {
                q: "Do you offer drone timelapse construction coverage?",
                a: "Yes. Drone timelapse construction coverage is a core part of our construction videos service, giving an aerial view of full-site progress — subject to standard local drone flight permissions.",
              },
              {
                q: "Are you a construction time lapse company that works on a recurring schedule?",
                a: "Yes. We offer recurring monthly or quarterly construction update videos as a standing engagement, not just a one-off shoot.",
              },
              {
                q: "How is a real estate construction video used by developers?",
                a: "Developers share real estate construction video updates directly with booked buyers via WhatsApp and email to maintain confidence through construction, and repurpose the footage for marketing and investor updates.",
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
                  { href: "/services/construction-update-videos", title: "Construction Update Videos", desc: "Scheduled construction progress documentation with drone and ground-level footage.", icon: "ri-vidicon-line" },
                  { href: "/services/route-videos", title: "Location AV / Route Videos", desc: "Cinematic connectivity and location advantage videos.", icon: "ri-road-map-line" },
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
                  { href: "/blog/construction-delay-buyer-trust-india", title: "Construction Delays Are Killing Buyer Trust: How Developers Rebuild Confidence With Video Updates", tag: "Buyer Trust" },
                  { href: "/blog/sell-property-to-nri-buyers-india", title: "How to Sell Property to NRI Buyers Who Can't Visit India", tag: "NRI Guide" },
                  { href: "/blog/real-estate-marketing-video-types-india", title: "7 Types of Real Estate Marketing Videos Every Indian Developer Should Use", tag: "Marketing" },
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
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">Start Your Construction Video Schedule</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Share your project timeline — we&apos;ll set up a recurring construction videos schedule with a quote within 24 hours.
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
                        <option value="Construction Update Video" className="bg-gray-900">Construction Update Video</option>
                        <option value="Construction Time Lapse" className="bg-gray-900">Construction Time Lapse</option>
                        <option value="Drone Timelapse" className="bg-gray-900">Drone Timelapse</option>
                        <option value="Recurring Package" className="bg-gray-900">Recurring Package</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Project Details</label>
                    <textarea name="message" rows={4} value={formData.message} onChange={handleInputChange} placeholder="Project name, construction stage, and update frequency needed..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm resize-none" />
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
