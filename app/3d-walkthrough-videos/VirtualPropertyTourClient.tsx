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
  duration: string;
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
  {
    name: "Ajeet Mehta",
    position: "Director",
    company: "SRMG",
    content:
      "For Shree Radha Gopal Residency, Kosi, Alliance Media Labs delivered 3D walkthroughs, renders, a 360 interactive virtual tour, and a location AV exactly the way we had envisioned. Everything felt well thought-through, and the overall real estate visualisation and virtual tour execution came out clean and impactful.",
  },
];

const remoteBuyerNeeds = [
  {
    icon: "ri-shield-check-line",
    title: "Accurate 3D Architectural Walkthrough",
    desc: "Every 3D architectural walkthrough we deliver is built from your real drawings — answering the scale and quality questions that drive remote-buyer hesitation.",
  },
  {
    icon: "ri-whatsapp-line",
    title: "3D Walkthrough Video Optimised for Sharing",
    desc: "Compressed, fast-loading 3D walkthrough video files built for WhatsApp sharing and screen-sharing on live sales calls across time zones.",
  },
  {
    icon: "ri-translate-2",
    title: "3D Virtual House Tours for Every Market",
    desc: "Subtitle and messaging variants for our 3D virtual house tours and 3D virtual tours real estate campaigns — tailored to overseas and domestic buyers alike.",
  },
  {
    icon: "ri-timer-flash-line",
    title: "Fast 3D Property Walkthrough Turnaround",
    desc: "7-day rush production available for any 3D property walkthrough in India — built for time-sensitive launches and digital campaigns.",
  },
];

const processSteps = [
  {
    num: "1",
    title: "Drawing & Brief Review",
    desc: "We review your CAD, Revit, or SketchUp drawings alongside your target buyer market — domestic, NRI, or both — to scope the walkthrough.",
  },
  {
    num: "2",
    title: "3D Modelling & Scene Setup",
    desc: "Accurate 3D models with real materials, lighting, and landscaping are built to match your architectural drawings precisely.",
  },
  {
    num: "3",
    title: "Camera Path & Rendering",
    desc: "Cinematic camera movements are choreographed and rendered in high resolution for a polished, sales-ready 3D walkthrough video.",
  },
  {
    num: "4",
    title: "Sharing-Ready Delivery",
    desc: "Final files are exported in full resolution plus compressed, WhatsApp-friendly formats for instant sharing with remote and overseas buyers.",
  },
];

const remoteBuyerBullets = [
  "Lets NRI and out-of-state buyers tour a property before flying in",
  "Cuts down repeat site visits and no-show viewings",
  "Shareable directly on WhatsApp and video calls across time zones",
  "Builds buyer confidence for under-construction projects",
  "Improves ad click-through and landing-page engagement",
  "Speeds up decision-making for high-value remote purchases",
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
        "Cinematic 3D property walkthrough and virtual house tour showcasing luxury residential units with panoramic city views — shareable with buyers anywhere.",
      videoUrl: "https://www.youtube.com/embed/BiCCdx0fDik?autoplay=1",
      duration: "2:45",
    },
    {
      id: 2,
      title: "Aura Vantaje, Gurugram",
      category: "3D Walkthrough",
      image: "/images/portfolio/Aura-Vantaje-Thumbnail.png",
      description:
        "AI-powered 3D walkthrough produced in 7 days for a commercial project, highlighting scale, usability, and immersive buyer experience for remote viewing.",
      videoUrl: "https://www.youtube.com/embed/YGaAU9B37nc?autoplay=1",
      duration: "1:20",
    },
  ];

  const faqs = [
    {
      q: "What are 3D architectural walkthrough services?",
      a: "3D architectural walkthrough services produce a cinematic 3D walkthrough video that takes viewers through a building or property digitally — covering everything from a 3D property walkthrough of individual units to full 3D virtual house tours of a complete project, before construction is finished.",
    },
    {
      q: "What is the difference between a 3D property walkthrough and 3D virtual house tours?",
      a: "A 3D property walkthrough is typically a pre-rendered cinematic 3D walkthrough video showing a fixed camera path through a property, while 3D virtual house tours can include interactive elements that let viewers navigate at their own pace. We offer both as part of our 3D walkthrough services.",
    },
    {
      q: "Do you provide a Real Estate 3D walkthrough service in India for all project types?",
      a: "Yes. Our Real Estate 3D walkthrough service in India covers residential, commercial, and township projects — producing 3D walkthrough real estate content and 3D virtual tours real estate developers use for sales offices, digital marketing, and investor presentations.",
    },
    {
      q: "How quickly can you deliver a 3D property walkthrough in India?",
      a: "Standard 3D architectural walkthrough projects take 10–18 working days. We also offer 7-day rush production for time-sensitive launches anywhere in India.",
    },
    {
      q: "Can a 3D architectural walkthrough be produced from drawings alone?",
      a: "Yes. We build every 3D walkthrough video directly from your AutoCAD, Revit, or SketchUp drawings, ensuring the architectural walkthrough is dimensionally accurate before any rendering begins.",
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
          subject: "New Lead — Virtual Property Tour Video Page",
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
          targetMarket: "",
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/services/3d-walkthrough-videos/2.jpg')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            3D Architectural Walkthrough{" "}
            <span className="text-yellow-400">Services</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90 drop-shadow-lg">
            A complete Real Estate 3D walkthrough service in India — our 3D
            walkthrough services cover everything from a single 3D property
            walkthrough to full 3D virtual house tours and 3D virtual tours real
            estate campaigns.
          </p>
          <p className="text-lg text-white/70 mb-8 drop-shadow-lg">
            From a quick 3D walkthrough video to a complete 3D property
            walkthrough in India, our architectural walkthrough team delivers in
            as fast as 7 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </section>

      {/* Service Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              What Our 3D Walkthrough Services Cover
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From a single 3D architectural walkthrough to a full 3D
              walkthrough real estate campaign — our architectural walkthrough
              services are built for both sales-office screens and remote video
              calls.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {remoteBuyerNeeds.map((n) => (
              <div
                key={n.title}
                className="text-center p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${n.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{n.title}</h3>
                <p className="text-black/70">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              3D Walkthrough Video Portfolio &amp; Case Studies
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real 3D walkthrough video and 3D virtual real estate tours
              delivered as part of our 3D architectural walkthrough services for
              Indian developers.
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
                      <i className="ri-play-fill text-2xl text-black ml-1"></i>
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
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap inline-flex"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              How We Produce Every 3D Walkthrough Video
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
                <h3 className="text-xl font-bold text-black mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why 3D Walkthroughs Matter Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Why 3D Walkthrough Videos Convert Remote Buyers
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {remoteBuyerBullets.map((point) => (
              <div key={point} className="flex items-start gap-4">
                <span className="text-yellow-400 text-3xl font-bold">•</span>
                <p className="text-gray-700 text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              What Developers Say About Our 3D Virtual Real Estate Tours
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
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
                <p className="text-gray-700 leading-relaxed italic">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest mb-8">
            Trusted by Leading Real Estate Developers
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              "Godrej Properties",
              "Prestige Group",
              "Brigade Group",
              "Sobha Realty",
              "Mahindra Lifespaces",
              "Tata Housing",
            ].map((brand) => (
              <div
                key={brand}
                className="px-6 py-3 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <span className="text-gray-700 font-semibold text-sm">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remote & NRI Buyer Intro */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black mb-6">
              3D Walkthrough Videos Built for NRI &amp; Remote Property Buyers
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A large share of India&apos;s real estate demand now comes from
              buyers who can&apos;t visit the site in person — NRIs,
              out-of-state investors, and busy professionals. Our{" "}
              <strong>3D walkthrough services</strong> are built specifically to
              answer their questions: scale, layout, quality, and context, all
              from a video they can watch on a call.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every <strong>3D architectural walkthrough</strong> we produce is
              optimised for WhatsApp sharing and screen-sharing on live sales
              calls, with subtitle and messaging variants available for{" "}
              <strong>3D virtual house tours</strong> aimed at overseas markets.
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

      {/* City Coverage */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            3D Walkthrough Video Services Across India
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-gray-400 mb-10">
            We serve real estate developers across India with fast turnarounds
            and remote collaboration
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                city: "Mumbai",
                href: "/city-services/3d-walkthrough-videos-mumbai",
              },
              {
                city: "Delhi NCR",
                href: "/city-services/3d-walkthrough-videos-delhi",
              },
              {
                city: "Bangalore",
                href: "/city-services/3d-walkthrough-videos-bangalore",
              },
              {
                city: "Gurugram",
                href: "/city-services/real-estate-video-production-gurugram",
              },
              { city: "Pune", href: "/contact" },
              { city: "Hyderabad", href: "/contact" },
              { city: "Chennai", href: "/contact" },
            ].map(({ city, href }) => (
              <a
                key={city}
                href={href}
                className="px-6 py-3 bg-gray-900 border border-gray-700 rounded-full text-white font-medium hover:border-yellow-400 hover:text-yellow-400 transition-colors"
              >
                {city}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services & Blogs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
            Our 3D architectural walkthrough services pair well with VR tours
            and drone footage — explore the full visualization stack behind our
            3D virtual real estate tours below.
          </p>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                <i className="ri-stack-line text-yellow-500" />
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
                    href: "/virtual-reality-tours",
                    title: "Virtual Reality Tours",
                    desc: "Immersive VR property experiences for high-ticket remote buyer conversion.",
                    icon: "ri-eye-line",
                  },
                  {
                    href: "/3d-renders-isometrics",
                    title: "3D House Rendering",
                    desc: "Photorealistic 3D renders and isometric views for design presentations.",
                    icon: "ri-image-2-line",
                  },
                  {
                    href: "/route-videos",
                    title: "Location Video",
                    desc: "Aerial footage showing location and connectivity for remote buyer confidence.",
                    icon: "ri-flight-takeoff-line",
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
                    href: "/blog/3d-walkthrough-video-service",
                    title:
                      "The Ultimate Guide to 3D Walkthrough Video Services",
                    tag: "Visualization",
                  },
                  {
                    href: "/blog/real-estate-marketing-video-types-india",
                    title: "7 Types of Real Estate Marketing Videos India",
                    tag: "Marketing",
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
                Talk to Our 3D Architectural Walkthrough Team
              </h2>
              <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
              <p className="text-lg text-black/80">
                Share your project drawings — we&apos;ll recommend the right 3D
                walkthrough services for your launch and send a detailed quote
                within 24 hours.
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
                        Target NRI Market
                      </label>
                      <select
                        name="targetMarket"
                        value={formData.targetMarket}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      >
                        <option value="">Select market</option>
                        <option value="Gulf (UAE/Saudi/Qatar)">
                          Gulf (UAE / Saudi / Qatar)
                        </option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Multiple Markets">
                          Multiple Markets
                        </option>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm resize-none"
                      placeholder="Tell us about your project and overseas buyer segment..."
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

      {/* Video Modal */}
      {selectedProject && selectedProject.videoUrl && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
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
              <i className="ri-close-line text-3xl"></i>
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={selectedProject.videoUrl}
                title={selectedProject.title}
                className="w-full h-full rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4 text-white text-center">
              <h3 className="text-xl font-bold">{selectedProject.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
