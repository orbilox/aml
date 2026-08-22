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
    icon: "ri-eye-line",
    title: "Interactive VR Tours",
    desc: "Fully interactive virtual reality tours with clickable hotspots, room-to-room navigation, and multi-device support — the core of our virtual reality tours offering.",
  },
  {
    icon: "ri-compass-3-line",
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
  {
    step: "01",
    title: "Input & Brief",
    desc: "Share your architectural drawings or schedule an on-site 360 photography capture for a completed space.",
  },
  {
    step: "02",
    title: "3D Build",
    desc: "Our team constructs the interactive VR environment, adding hotspots, navigation points, and branded UI elements.",
  },
  {
    step: "03",
    title: "Review & Refine",
    desc: "You review the interactive tour and request adjustments to hotspots, labels, or navigation flow.",
  },
  {
    step: "04",
    title: "Deploy",
    desc: "The finished virtual reality tour is deployed to a shareable link, ready for your website, sales office, and WhatsApp outreach.",
  },
];

const useCases = [
  {
    icon: "ri-building-4-line",
    title: "Pre-Launch Property Marketing",
    desc: "Convert early inquiries into bookings using an interactive VR tour built directly from drawings, before construction begins.",
  },
  {
    icon: "ri-flight-takeoff-line",
    title: "Overseas & NRI Buyer Outreach",
    desc: "Share a single VR tour link with NRI and out-of-city buyers, letting them explore a project from any time zone.",
  },
  {
    icon: "ri-group-line",
    title: "Sales Team & Channel Partner Demos",
    desc: "Equip your sales team and channel partners with an interactive tour they can present on a tablet at every client meeting.",
  },
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
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const portfolioProjects: Project[] = [
    {
      id: 1,
      title: "Shree Radha Gopal Residency, Kosi",
      category: "VR Experience",
      image: "/images/portfolio/2.png",
      description:
        "Interactive VR tour of a residential plotted development with modern amenities and green spaces.",
      tourUrl: "https://amlabs.cloud/SRMG_V06/",
    },
    {
      id: 2,
      title: "House of Hiranandani, Mumbai",
      category: "VR Experience",
      image: "/images/portfolio/23.png",
      description:
        "Immersive VR tour of premium shopping mall featuring interactive retail spaces and modern commercial architecture.",
      tourUrl: "https://amlabs.cloud/HOH-V2/",
    },
    {
      id: 3,
      title: "Province D Olympia, Noida",
      category: "VR Experience",
      image: "/images/portfolio/24.png",
      description:
        "Residential plotted development with a fully interactive VR real estate tour.",
      tourUrl: "https://amlabs.cloud/ATS_PDO/",
    },
    {
      id: 4,
      title: "Mauli Housing, Mumbai",
      category: "VR Experience",
      image: "/images/portfolio/Mauli-VR-Thumbnail.png",
      description:
        "An immersive 360° virtual reality tour for Mauli Housing, showcasing landmark views and multi-height outside perspectives for a complete spatial experience.",
      tourUrl: "https://amlabs.cloud/Mauli_V06/",
    },
    {
      id: 5,
      title: "Dosti Greater Thane, Thane",
      category: "VR Experience",
      image: "/images/portfolio/Dosti-VR-Thumbnail.png",
      description:
        "A 360° VR real estate tour for Dosti Group, featuring a superimposed 3D building for a realistic virtual property walkthrough experience.",
      tourUrl: "https://amlabs.cloud/Dosti_Mumbai_V01/",
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
        "We onboarded Alliance Media Labs for the virtual reality tour of our project Sanfran Sarovar Heights to highlight nearby landmarks, and the outcome was exceptional. The execution was smooth, delivery was on time, and after this experience, we've continued working with them, with over 7 real estate virtual tours completed for our projects so far.",
    },
  ];

  const faqs = [
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
          subject: "New Lead — Virtual Reality Tours Page",
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
          firm: "",
          tourType: "",
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
      {/* Hero Section */}
      <section className="py-24 min-h-[85vh] flex items-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/services/virtual-reality-tours/1.jpg')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mb-8">
                <img src="/images/services/virtual-reality-tours/2.png" alt="VR" className="w-10 h-10" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                Virtual Reality <span className="text-yellow-400">Tours</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-4 leading-relaxed drop-shadow-lg">
                A complete real estate virtual tours service in India —
                interactive VR tour experiences, 3D virtual home tours, and 360
                virtual photography that let buyers explore a project from
                anywhere.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed drop-shadow-lg">
                From a single VR real estate tour to a full multi-device virtual
                reality tours rollout, our team delivers pan-India with fast
                turnaround.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap"
                >
                  Request a Quote
                </a>
                <a
                  href="#portfolio"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap"
                >
                  View Our Work
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
                    Share your project details and we&apos;ll respond within 24 hours.
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
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Tour Type</label>
                      <select
                        name="tourType"
                        value={formData.tourType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      >
                        <option value="">Select type</option>
                        <option value="Interactive VR Tour">Interactive VR Tour</option>
                        <option value="360 Virtual Photography">360 Virtual Photography</option>
                        <option value="3D Virtual Home Tour">3D Virtual Home Tour</option>
                        <option value="Township VR Tour">Township VR Tour</option>
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
                        placeholder="Project name, timeline, and any specific requirements..."
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
      ={/* Why Choose Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Real Estate Virtual Tours Built to Convert
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              As a real estate virtual tours service in India, we build
              interactive VR tour and 360 virtual photography experiences that
              shorten the buyer decision cycle.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "ri-eye-line",
                title: "Fully Interactive VR Tour Navigation",
                desc: "Clickable hotspots, room-to-room jumps, and multi-device support built into every virtual reality tour we deliver.",
              },
              {
                icon: "ri-compass-3-line",
                title: "True 360 Virtual Photography",
                desc: "On-site 360 virtual photography for completed sample flats and sales offices, stitched into a seamless walkable tour.",
              },
              {
                icon: "ri-time-line",
                title: "Fast Turnaround",
                desc: "Standard VR real estate tours are delivered in 10-15 working days, with rush options for time-sensitive launches.",
              },
              {
                icon: "ri-smartphone-line",
                title: "Works Without a Headset",
                desc: "Every 3D virtual home tour we build works on desktop and mobile browsers, upgrading to immersive mode automatically on compatible hardware.",
              },
              {
                icon: "ri-share-forward-line",
                title: "Shareable Anywhere",
                desc: "A single link puts your VR tour in front of NRI and remote buyers over WhatsApp, email, and social media.",
              },
              {
                icon: "ri-building-4-line",
                title: "Built for Every Project Type",
                desc: "From single sample flats to full townships, our VR real estate tours scale to residential, commercial, and mixed-use developments.",
              },
            ].map((f) => (
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
      {/* Tour Types Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              6 Types of Virtual Reality Tours We Build
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourTypes.map((mt) => (
              <div
                key={mt.title}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${mt.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {mt.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {mt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Technology Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              How Our VR Tour Technology Works
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">
                Built for Reliability &amp; Scale
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "High-Resolution Capture & Rendering",
                    desc: "Every virtual reality tour is rendered and captured at high resolution, so detail holds up on large sales-office screens and headsets alike.",
                  },
                  {
                    title: "Optimised Load Times",
                    desc: "VR tours are compressed for fast loading over mobile data, without compromising visual quality.",
                  },
                  {
                    title: "Cross-Platform Compatibility",
                    desc: "Every VR tour works on Oculus, HTC Vive, mobile browsers, and desktop — no app download required.",
                  },
                  {
                    title: "Engagement Analytics",
                    desc: "Track how buyers move through your virtual reality tour, which rooms they revisit, and where they drop off.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start space-x-4">
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
                alt="VR tour technology"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Virtual Reality Tours Portfolio &amp; Case Studies
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real VR tour and 360 virtual photography projects delivered as
              part of our virtual reality tours service for developers across
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
                      <i className="ri-eye-line text-2xl text-black"></i>
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
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap inline-flex"
            >
              View Full Portfolio
            </Link>
          </div>

          {/* Preview Modal */}
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
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs bg-yellow-400 text-black font-semibold px-2 py-1 rounded">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-black text-lg mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {selectedProject.description}
                  </p>
                  <a
                    href={selectedProject.tourUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded-lg transition-colors text-sm"
                  >
                    <i className="ri-eye-line" />
                    Launch VR Tour
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Client Testimonials
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <h4 className="font-bold text-black text-lg">{t.name}</h4>
                  <p className="text-sm text-gray-600">{t.position}</p>
                  <p className="text-sm text-yellow-600 font-medium">
                    {t.company}
                  </p>
                </div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-sm"></i>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic text-sm">
                  &ldquo;{t.content}&rdquo;
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
              Our 4-Step Process
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">
                    {step.step.replace(/^0/, "")}
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
      {/* Use Cases Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Who Uses Our Virtual Reality Tours
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((item) => (
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
      {/* 360 Photography vs 3D Virtual Home Tour */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                360 Virtual Photography vs. 3D Virtual Home Tours: Which Do You
                Need?
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Both formats are part of our virtual reality tours service — the
                right one depends on whether your space is already built.
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
                  Captures a real, completed space with professional 360°
                  cameras, stitched into a walkable panorama — ideal for
                  ready-to-move projects and furnished sample flats.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-yellow-500"></i> Captures
                    real, completed spaces
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-yellow-500"></i> Delivered
                    in 3–5 days
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-yellow-500"></i>{" "}
                    True-to-life photographic accuracy
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-shape-2-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  3D Virtual Home Tour
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Fully computer-generated from architectural drawings, letting
                  buyers walk through a project long before construction is
                  finished.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-yellow-500"></i> Built
                    straight from architectural drawings
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-yellow-500"></i> Ready
                    before construction starts
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-yellow-500"></i> Works on
                    browser, tablet, and headset
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mt-10 text-center">
              Not sure which fits your project? Tell us your construction stage
              and target buyer, and our team will recommend the right format as
              part of your virtual reality tours quote.
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
            {faqs.map((faq, idx) => (
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
      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-black mb-4">
              Get a Custom VR Tour Quote
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-600 mb-8">
              Pricing depends on project size, unit types, and interaction
              requirements. Contact our experts for a tailored quote.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
            >
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
                  {
                    href: "/services/virtual-reality-tours",
                    title: "Virtual Reality Tours",
                    desc: "Full-service VR tour production for real estate sales offices and digital marketing.",
                    icon: "ri-eye-line",
                  },
                  {
                    href: "/3d-walkthrough-videos",
                    title: "3D Architectural Walkthrough Services",
                    desc: "Cinematic 3D walkthrough videos for pre-launch and sales presentations.",
                    icon: "ri-video-line",
                  },
                  {
                    href: "/services/3d-renders-isometrics",
                    title: "3D Renders & Isometrics",
                    desc: "Photorealistic renders and isometric views for design presentations.",
                    icon: "ri-image-line",
                  },
                ].map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:border-yellow-400/50 hover:bg-yellow-400/5 transition-all group"
                  >
                    <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                      <i className={`${s.icon} text-yellow-500 text-lg`} />
                    </div>
                    <div>
                      <div className="font-semibold text-black text-sm group-hover:text-yellow-600 transition-colors">
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
              <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                <i className="ri-article-line text-yellow-500" />
                Related Articles
              </h3>
              <div className="grid gap-4">
                {[
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
                  {
                    href: "/blog/scale-model-sales-gallery-real-estate-india",
                    title:
                      "What a Scale Model Actually Does Inside a Sales Gallery",
                    tag: "Sales Gallery",
                  },
                ].map((b) => (
                  <Link
                    key={b.href}
                    href={b.href}
                    className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:border-yellow-400/50 hover:bg-yellow-400/5 transition-all group"
                  >
                    <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                      <i className="ri-article-line text-yellow-500 text-lg" />
                    </div>
                    <div>
                      <span className="text-xs text-yellow-600 font-semibold">
                        {b.tag}
                      </span>
                      <div className="font-semibold text-black text-sm group-hover:text-yellow-600 transition-colors mt-0.5">
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
                Talk to Our Virtual Reality Tours Team
              </h2>
              <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
              <p className="text-lg text-black/80">
                Share your project details — we&apos;ll recommend the right VR
                tour and 360 virtual photography setup, with a quote within 24
                hours.
              </p>
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
                    We&apos;ve received your enquiry. Our team will respond
                    within 24 hours.
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
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        placeholder="Your full name"
                      />
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
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tour Type
                    </label>
                    <select
                      name="tourType"
                      value={formData.tourType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                    >
                      <option value="">Select type</option>
                      <option value="Interactive VR Tour">
                        Interactive VR Tour
                      </option>
                      <option value="360 Virtual Photography">
                        360 Virtual Photography
                      </option>
                      <option value="3D Virtual Home Tour">
                        3D Virtual Home Tour
                      </option>
                      <option value="Township VR Tour">Township VR Tour</option>
                    </select>
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
                      placeholder="Project name, timeline, and any specific requirements..."
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
    </div>
  );
}
