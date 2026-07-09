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
  tourUrl: string;
}

const tourTypes = [
  {
    icon: "ri-vr-glasses-line",
    title: "Interactive VR Tours",
    desc: "Fully interactive virtual reality tours with clickable hotspots, room-to-room navigation, and multi-device support — the core of our virtual reality tours offering.",
  },
  {
    icon: "ri-360-line",
    title: "360 Virtual Photography",
    desc: "True 360 virtual photography of sample flats, sales offices, and completed spaces — captured on-site and stitched into a seamless walkable tour.",
  },
  {
    icon: "ri-home-smile-2-line",
    title: "3D Virtual Home Tours",
    desc: "Browser-based 3D virtual home tours viewable on any device without special hardware — ideal for sharing directly with buyers over WhatsApp and email.",
  },
  {
    icon: "ri-building-2-line",
    title: "3D Virtual Reality Tours for Townships",
    desc: "Large-format 3D virtual reality tours covering entire townships and master-planned developments, letting buyers explore amenities and multiple unit types as 3d virtual real estate tours in one session.",
  },
  {
    icon: "ri-global-line",
    title: "Pre-Launch VR Tour",
    desc: "A rendered VR tour built directly from architectural drawings for under-construction projects — letting NRI and remote buyers explore before a single brick is laid.",
  },
  {
    icon: "ri-smartphone-line",
    title: "Multi-Device VR Experiences",
    desc: "Every VR tour we deliver works on desktop and mobile browsers, and upgrades to full immersive mode automatically on a compatible headset.",
  },
];

const processSteps = [
  { step: "01", title: "Input & Brief", desc: "Share your architectural drawings or schedule an on-site 360 photography capture for a completed space." },
  { step: "02", title: "3D Build", desc: "Our team constructs the interactive VR environment, adding hotspots, navigation points, and branded UI elements." },
  { step: "03", title: "Review & Refine", desc: "You review the interactive tour and request adjustments to hotspots, labels, or navigation flow." },
  { step: "04", title: "Deploy", desc: "The finished virtual reality tour is deployed to a shareable link, ready for your website, sales office, and WhatsApp outreach." },
];

const stats = [
  { value: "200+", label: "VR Tours Delivered" },
  { value: "Multi-Device", label: "Headset, Mobile & Desktop" },
  { value: "360°", label: "Full Room Navigation" },
  { value: "Pan-India", label: "Studio & Site Capture" },
];

export default function VirtualRealityToursFlatClient() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    firm: "",
    tourType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const portfolioProjects: Project[] = [
    {
      id: 1,
      title: "Shree Radha Gopal Residency, Kosi",
      category: "VR Experience",
      image: "/images/portfolio/2.png",
      description: "Interactive VR tour of a residential plotted development with modern amenities and green spaces.",
      tourUrl: "https://amlabs.cloud/SRMG_V06/",
    },
    {
      id: 2,
      title: "House of Hiranandani, Mumbai",
      category: "VR Experience",
      image: "/images/portfolio/23.png",
      description: "Immersive VR tour of premium shopping mall featuring interactive retail spaces and modern commercial architecture.",
      tourUrl: "https://amlabs.cloud/HOH-V2/",
    },
    {
      id: 3,
      title: "Province D Olympia, Noida",
      category: "VR Experience",
      image: "/images/portfolio/24.png",
      description: "Residential plotted development with a fully interactive VR real estate tour.",
      tourUrl: "https://amlabs.cloud/ATS_PDO/",
    },
    {
      id: 4,
      title: "Mauli Housing, Mumbai",
      category: "VR Experience",
      image: "/images/portfolio/Mauli-VR-Thumbnail.png",
      description: "An immersive 360° virtual reality tour for Mauli Housing, showcasing landmark views and multi-height outside perspectives for a complete spatial experience.",
      tourUrl: "https://amlabs.cloud/Mauli_V06/",
    },
    {
      id: 5,
      title: "Dosti Greater Thane, Thane",
      category: "VR Experience",
      image: "/images/portfolio/Dosti-VR-Thumbnail.png",
      description: "A 360° VR real estate tour for Dosti Group, featuring a superimposed 3D building for a realistic virtual property walkthrough experience.",
      tourUrl: "https://amlabs.cloud/Dosti_Mumbai_V01/",
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
          subject: "New Lead — Virtual Reality Tours Page",
          from_name: formData.name,
          ...formData,
        }),
      });
      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", firm: "", tourType: "", message: "" });
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
              <p className="text-gray-600 text-sm mb-4">{selectedProject.description}</p>
              <a
                href={selectedProject.tourUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                <i className="ri-vr-glasses-line" />
                Launch VR Tour
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative bg-[#0a0a0a] text-white overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/services/virtual-reality-tours/1.jpg"
            alt="Virtual reality tours India — Alliance Media Labs"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[2px] bg-yellow-400" />
              <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">Virtual Reality Tours India</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Virtual Reality <span className="text-yellow-400">Tours</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4 max-w-2xl">
              A complete real estate virtual tours service in India — interactive VR tour experiences, 3D virtual home tours, and 360 virtual photography that let buyers explore a project from anywhere.
            </p>
            <p className="text-base text-gray-400 mb-10 max-w-2xl">
              From a single VR real estate tour to a full multi-device virtual reality tours rollout, our team delivers pan-India with fast turnaround.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                <i className="ri-vr-glasses-line" />
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
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">Why Choose Our Virtual Reality Tours</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Real Estate Virtual Tours Built to Convert</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              As a real estate virtual tours service in India, we build interactive VR tour and 360 virtual photography experiences that shorten the buyer decision cycle.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "ri-vr-glasses-line", title: "Fully Interactive VR Tour Navigation", desc: "Clickable hotspots, room-to-room jumps, and multi-device support built into every virtual reality tour we deliver." },
              { icon: "ri-360-line", title: "True 360 Virtual Photography", desc: "On-site 360 virtual photography for completed sample flats and sales offices, stitched into a seamless walkable tour." },
              { icon: "ri-time-line", title: "Fast Turnaround", desc: "Standard VR real estate tours are delivered in 10-15 working days, with rush options for time-sensitive launches." },
              { icon: "ri-smartphone-line", title: "Works Without a Headset", desc: "Every 3D virtual home tour we build works on desktop and mobile browsers, upgrading to immersive mode automatically on compatible hardware." },
              { icon: "ri-share-forward-line", title: "Shareable Anywhere", desc: "A single link puts your VR tour in front of NRI and remote buyers over WhatsApp, email, and social media." },
              { icon: "ri-building-4-line", title: "Built for Every Project Type", desc: "From single sample flats to full townships, our VR real estate tours scale to residential, commercial, and mixed-use developments." },
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

      {/* Tour Types */}
      <section className="py-20 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">Tour Types</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">6 Types of Virtual Reality Tours We Build</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourTypes.map((mt) => (
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Virtual Reality Tours Portfolio</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Real VR tour and 360 virtual photography projects delivered as part of our virtual reality tours service for developers across India.
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
                      <i className="ri-vr-glasses-line text-2xl text-black" />
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
                q: "What is included in a virtual reality tours service in India?",
                a: "Our real estate virtual tours service in India includes a fully interactive VR tour with clickable hotspots, room-to-room navigation, and multi-device support, plus 360 virtual photography of every space captured during production.",
              },
              {
                q: "What is the difference between a VR tour and a 3D virtual home tour?",
                a: "A VR tour is built for headset and interactive navigation with hotspots and room jumps, while a 3D virtual home tour typically refers to a browser-based walkthrough viewable on any device without special hardware. We build both.",
              },
              {
                q: "Can 360 virtual photography be produced before construction is complete?",
                a: "Yes. For under-construction or pre-launch projects, we build a rendered virtual reality tour directly from architectural drawings. For completed sample flats, we capture true 360 virtual photography on-site.",
              },
              {
                q: "Are these VR real estate tours accessible without a VR headset?",
                a: "Yes. Every VR tour we deliver works on desktop and mobile browsers with mouse or touch navigation, and upgrades to full immersive mode automatically when viewed on a compatible headset.",
              },
              {
                q: "Do you offer the best virtual reality tours for pre-launch marketing?",
                a: "Yes. Interactive virtual reality tours are one of the highest-converting pre-launch assets for developers, letting NRI and out-of-city buyers explore a project remotely.",
              },
              {
                q: "Can you produce 3D virtual reality tours for large, multi-tower developments?",
                a: "Yes. Our 3D virtual reality tours scale from a single sample flat to full townships, and our 3D virtual real estate tours can include multiple unit types and amenity zones navigable from one shared link.",
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
                  { href: "/services/virtual-reality-tours", title: "Virtual Reality Tours", desc: "Full-service VR tour production for real estate sales offices and digital marketing.", icon: "ri-vr-glasses-line" },
                  { href: "/3d-walkthrough-videos", title: "3D Architectural Walkthrough Services", desc: "Cinematic 3D walkthrough videos for pre-launch and sales presentations.", icon: "ri-video-line" },
                  { href: "/services/3d-renders-isometrics", title: "3D Renders & Isometrics", desc: "Photorealistic renders and isometric views for design presentations.", icon: "ri-image-line" },
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
                  { href: "/blog/sell-property-to-nri-buyers-india", title: "How to Sell Property to NRI Buyers Who Can't Visit India", tag: "NRI Guide" },
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
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">Talk to Our Virtual Reality Tours Team</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Share your project details — we&apos;ll recommend the right VR tour and 360 virtual photography setup, with a quote within 24 hours.
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
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Tour Type</label>
                      <select name="tourType" value={formData.tourType} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors text-sm appearance-none">
                        <option value="" className="bg-gray-900">Select type</option>
                        <option value="Interactive VR Tour" className="bg-gray-900">Interactive VR Tour</option>
                        <option value="360 Virtual Photography" className="bg-gray-900">360 Virtual Photography</option>
                        <option value="3D Virtual Home Tour" className="bg-gray-900">3D Virtual Home Tour</option>
                        <option value="Township VR Tour" className="bg-gray-900">Township VR Tour</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Project Details</label>
                    <textarea name="message" rows={4} value={formData.message} onChange={handleInputChange} placeholder="Project name, timeline, and any specific requirements..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm resize-none" />
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
