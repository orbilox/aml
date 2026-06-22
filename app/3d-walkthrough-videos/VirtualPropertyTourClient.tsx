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
}

const testimonials = [
  {
    name: "Akhil Gupta",
    position: "Managing Director",
    company: "Etereo Realty",
    content:
      "Several of our Etereo 1 buyers were based overseas. The virtual tour video Alliance Media Labs produced let them walk through the project on a video call before ever landing in Goa — it shortened our sales cycle considerably.",
  },
  {
    name: "Jayanta Ghosh",
    position: "Head of Marketing",
    company: "Aura World",
    content:
      "Aura Vantaje attracted a lot of NRI interest, and the AI-powered virtual tour Alliance Media Labs delivered in 7 days became our single most-shared asset with overseas leads on WhatsApp.",
  },
];

const remoteBuyerNeeds = [
  {
    icon: "ri-shield-check-line",
    title: "Builds Trust Without a Site Visit",
    desc: "A cinematic, accurate virtual tour answers the scale and quality questions that cause NRI and remote buyers to hesitate on high-ticket bookings.",
  },
  {
    icon: "ri-whatsapp-line",
    title: "Optimised for WhatsApp & Video Calls",
    desc: "Compressed, fast-loading files built specifically for sharing over WhatsApp and screen-sharing on live sales calls across time zones.",
  },
  {
    icon: "ri-translate-2",
    title: "Market-Specific Cuts Available",
    desc: "Subtitle and messaging variants for Gulf, US, UK, Canada, and Australia NRI markets — tailored to how each diaspora segment evaluates a purchase.",
  },
  {
    icon: "ri-timer-flash-line",
    title: "Fast Turnaround for Roadshows",
    desc: "7-day rush production available for overseas property roadshows and time-sensitive digital campaigns targeting NRI investors.",
  },
];

export default function VirtualPropertyTourClient() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    targetMarket: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const portfolioProjects: Project[] = [
    {
      id: 1,
      title: "Etereo 1, Goa",
      category: "3D Walkthrough",
      image: "/images/portfolio/1.png",
      description: "Cinematic 3D property walkthrough and virtual house tour showcasing luxury residential units with panoramic city views — shareable with buyers anywhere.",
      videoUrl: "https://www.youtube.com/embed/BiCCdx0fDik?autoplay=1",
    },
    {
      id: 2,
      title: "Aura Vantaje, Gurugram",
      category: "3D Walkthrough",
      image: "/images/portfolio/Aura-Vantaje-Thumbnail.png",
      description: "AI-powered 3D walkthrough produced in 7 days for a commercial project, highlighting scale, usability, and immersive buyer experience for remote viewing.",
      videoUrl: "https://www.youtube.com/embed/YGaAU9B37nc?autoplay=1",
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
          subject: "New Lead — Virtual Property Tour Video Page",
          from_name: formData.name,
          ...formData,
        }),
      });
      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", targetMarket: "", message: "" });
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

      {selectedProject && selectedProject.videoUrl && (
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
          <img src="/images/services/3d-walkthrough-videos/2.jpg" alt="Virtual property tour video for NRI buyers — Alliance Media Labs" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[2px] bg-[#e8b86d]" />
              <span className="text-[#e8b86d] text-sm font-semibold tracking-widest uppercase">For NRI & Remote Buyers</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Virtual Property Tour <span className="text-[#e8b86d]">Video India</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4 max-w-2xl">
              Shareable online 3D property tours that let NRI and remote buyers experience your project before they ever visit India — built for WhatsApp, video calls, and overseas marketing campaigns.
            </p>
            <p className="text-base text-gray-400 mb-10 max-w-2xl">
              Trusted by Etereo Realty and Aura World for NRI-led project launches. Delivery in as fast as 7 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-[#e8b86d] hover:bg-[#d4a55a] text-black font-bold px-8 py-4 rounded-lg transition-colors text-lg">
                <i className="ri-video-line" />
                Get a Free Quote
              </a>
              <a href="#portfolio" className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-8 py-4 rounded-lg transition-colors text-lg">
                <i className="ri-play-circle-line" />
                Watch Sample Tours
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why this matters for remote buyers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e8b86d] text-sm font-semibold tracking-widest uppercase">Built for Remote Buyers</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Why a Standard Walkthrough Isn&apos;t Enough for NRI Sales</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              NRI and remote buyers don&apos;t evaluate a project on a sales-office screen — they evaluate it on a phone, on a video call, across a time zone. The video needs to be built for that.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {remoteBuyerNeeds.map((n) => (
              <div key={n.title} className="bg-gray-50 rounded-xl p-7 border border-gray-100 hover:border-[#e8b86d]/50 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-[#e8b86d]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#e8b86d]/20 transition-colors">
                  <i className={`${n.icon} text-2xl text-[#e8b86d]`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{n.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e8b86d] text-sm font-semibold tracking-widest uppercase">Our Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Virtual Tours Shared With Remote Buyers</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {portfolioProjects.map((project) => (
              <div key={project.id} className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {project.videoUrl && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 bg-[#e8b86d] rounded-full flex items-center justify-center shadow-lg">
                        <i className="ri-play-fill text-2xl text-black ml-1" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="text-xs bg-[#e8b86d] text-black font-semibold px-2 py-1 rounded">{project.category}</span>
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
            <Link href="/portfolio" className="inline-flex items-center gap-2 bg-[#e8b86d] hover:bg-[#d4a55a] text-black font-bold px-8 py-4 rounded-lg transition-colors">
              <i className="ri-gallery-line" />
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e8b86d] text-sm font-semibold tracking-widest uppercase">Client Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">What Developers Say About NRI Conversion</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-7 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-[#e8b86d] text-sm" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
                  <div className="w-10 h-10 bg-[#e8b86d]/10 rounded-full flex items-center justify-center">
                    <i className="ri-user-line text-[#e8b86d]" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.position}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e8b86d] text-sm font-semibold tracking-widest uppercase">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-5">
            {[
              {
                q: "How is a virtual property tour video different from a regular 3D walkthrough?",
                a: "It's produced and packaged specifically for remote viewing — optimised file sizes for WhatsApp sharing, subtitle options for overseas audiences, and a presentation style designed for a buyer who has never visited the site.",
              },
              {
                q: "Can NRI buyers really make a booking decision from a virtual tour alone?",
                a: "Yes, when combined with supporting content like drone footage and construction updates. A well-produced virtual tour addresses the scale and quality verification concerns that are the biggest source of remote-buyer hesitation.",
              },
              {
                q: "How quickly can a virtual property tour video be produced?",
                a: "Standard virtual tours take 10–18 working days. We also offer 7-day rush production for time-sensitive overseas campaigns or roadshows.",
              },
              {
                q: "Can the video be customised for different overseas markets?",
                a: "Yes. We produce market-specific cuts with subtitles, currency-relevant messaging, and adjusted pacing for Gulf, US, UK, Canada, Australia, and Singapore NRI markets.",
              },
              {
                q: "Do you provide this service across India?",
                a: "Yes, we produce virtual property tour videos for developers pan-India, working remotely from your architectural drawings — Mumbai, Delhi NCR, Bangalore, Gurugram, Pune, Hyderabad, and other cities.",
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
                <i className="ri-stack-line text-[#e8b86d]" />
                Related Services
              </h3>
              <div className="grid gap-4">
                {[
                  { href: "/services/3d-walkthrough-videos", title: "3D Walkthrough Video Service", desc: "Architectural walkthrough videos for property launches and investor presentations.", icon: "ri-video-line" },
                  { href: "/services/3d-walkthrough-video-company-india", title: "3D Walkthrough Video Company", desc: "Full-service 3D walkthrough production for real estate developers.", icon: "ri-building-line" },
                  { href: "/services/virtual-reality-tours", title: "Virtual Reality Tours", desc: "Immersive VR property experiences for high-ticket remote buyer conversion.", icon: "ri-vr-goggles-line" },
                  { href: "/services/drone-shoots", title: "Drone Shoots", desc: "Aerial footage showing location and context for remote buyer confidence.", icon: "ri-flight-takeoff-line" },
                ].map((s) => (
                  <Link key={s.href} href={s.href} className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:border-[#e8b86d]/50 hover:bg-[#e8b86d]/5 transition-all group">
                    <div className="w-10 h-10 bg-[#e8b86d]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#e8b86d]/20 transition-colors">
                      <i className={`${s.icon} text-[#e8b86d] text-lg`} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm group-hover:text-[#e8b86d] transition-colors">{s.title}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{s.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <i className="ri-article-line text-[#e8b86d]" />
                Related Articles
              </h3>
              <div className="grid gap-4">
                {[
                  { href: "/blog/sell-property-to-nri-buyers-india", title: "How to Sell Property to NRI Buyers Who Can't Visit India", tag: "NRI Guide" },
                  { href: "/blog/3d-walkthrough-video-service", title: "The Ultimate Guide to 3D Walkthrough Video Services", tag: "Visualization" },
                  { href: "/blog/real-estate-marketing-video-types-india", title: "7 Types of Real Estate Marketing Videos India", tag: "Marketing" },
                ].map((b) => (
                  <Link key={b.href} href={b.href} className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:border-[#e8b86d]/50 hover:bg-[#e8b86d]/5 transition-all group">
                    <div className="w-10 h-10 bg-[#e8b86d]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#e8b86d]/20 transition-colors">
                      <i className="ri-article-line text-[#e8b86d] text-lg" />
                    </div>
                    <div>
                      <span className="text-xs text-[#e8b86d] font-semibold">{b.tag}</span>
                      <div className="font-semibold text-gray-900 text-sm group-hover:text-[#e8b86d] transition-colors mt-0.5">{b.title}</div>
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
              <span className="text-[#e8b86d] text-sm font-semibold tracking-widest uppercase">Get a Free Quote</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">Reach Your NRI & Remote Buyers Today</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Share your project drawings and target overseas markets — we&apos;ll send a detailed quote and production timeline within 24 hours.
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
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Name <span className="text-[#e8b86d]">*</span></label>
                      <input type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="Your full name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#e8b86d] transition-colors text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Phone <span className="text-[#e8b86d]">*</span></label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="+91 98765 43210" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#e8b86d] transition-colors text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Email <span className="text-[#e8b86d]">*</span></label>
                    <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="you@company.com" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#e8b86d] transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Target NRI Market</label>
                    <select name="targetMarket" value={formData.targetMarket} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e8b86d] transition-colors text-sm appearance-none">
                      <option value="" className="bg-gray-900">Select market</option>
                      <option value="Gulf (UAE/Saudi/Qatar)" className="bg-gray-900">Gulf (UAE / Saudi / Qatar)</option>
                      <option value="USA" className="bg-gray-900">USA</option>
                      <option value="UK" className="bg-gray-900">UK</option>
                      <option value="Canada" className="bg-gray-900">Canada</option>
                      <option value="Australia" className="bg-gray-900">Australia</option>
                      <option value="Singapore" className="bg-gray-900">Singapore</option>
                      <option value="Multiple Markets" className="bg-gray-900">Multiple Markets</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Project Details</label>
                    <textarea name="message" rows={4} value={formData.message} onChange={handleInputChange} placeholder="Tell us about your project and overseas buyer segment..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#e8b86d] transition-colors text-sm resize-none" />
                  </div>
                  {submitStatus === "error" && (
                    <p className="text-red-400 text-sm">Something went wrong. Please try again or WhatsApp us directly.</p>
                  )}
                  <button type="submit" disabled={isSubmitting} className="w-full bg-[#e8b86d] hover:bg-[#d4a55a] disabled:opacity-60 text-black font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
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
                  <p className="text-center text-gray-500 text-xs">We respond within 24 hours. Your information is confidential.</p>
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
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors">
        <span className="font-semibold text-gray-900 text-sm pr-4">{question}</span>
        <i className={`ri-arrow-down-s-line text-xl text-[#e8b86d] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 bg-white border-t border-gray-100">
          <p className="text-gray-600 text-sm leading-relaxed pt-4">{answer}</p>
        </div>
      )}
    </div>
  );
}
