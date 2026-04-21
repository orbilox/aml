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

export default function WalkthroughVideosClient() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project_type: "",
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
        "Cinematic 3D walkthrough showcasing luxury residential units with panoramic city views.",
      videoUrl: "https://www.youtube.com/embed/BiCCdx0fDik?autoplay=1&t",
      duration: "2:45",
    },
    {
      id: 2,
      title: "Aura Vantaje, Gurugram",
      category: "3D Walkthrough",
      image: "/images/portfolio/Aura-Vantaje-Thumbnail.png",
      description:
        "Developed an AI-powered 3D walkthrough for a commercial project, bringing out the scale, layout, and usability of the spaces in a smart way. Delivered at record speed of 7 days.",
      videoUrl: "https://www.youtube.com/embed/YGaAU9B37nc?autoplay=1",
      duration: "1:20",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "a557c293-5de3-4d54-8636-50b7d3c406c7",
          subject: `3D Walkthrough Inquiry - ${formData.name}`,
          from_name: formData.name,
          from_email: formData.email,
          message: `New 3D Walkthrough Inquiry\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\nProject Type: ${formData.project_type || "Not specified"}\n\nProject Details:\n${formData.message || "No additional details provided"}`,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus("success");
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
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
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/services/3d-walkthrough-videos/7.jpg')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            3D Walkthrough Video Service for Real Estate &amp; Architecture
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-lg">
            Immersive cinematic experiences that bring your architectural
            visions to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap"
            >
              View Our Portfolio
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Cinematic 3D Walkthroughs
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-lg text-black/80 leading-relaxed">
              Transform your architectural designs into stunning cinematic experiences. Our <strong>3D walkthrough video service</strong> delivers photorealistic <strong>architectural walkthrough</strong> animations — also called <strong>3D virtual house tours</strong> — that let buyers experience your property before a single brick is laid. Whether you need a <strong>3D walkthrough real estate</strong> presentation for a pre-launch campaign, a <strong>3D architectural walkthrough</strong> for RERA submissions, or a cinematic fly-through for investor decks, we handle it all in-house.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "ri-movie-2-line",
                title: "Cinematic Quality",
                desc: "Hollywood-grade rendering with realistic lighting, materials, and camera movements",
              },
              {
                icon: "ri-time-line",
                title: "Fast Delivery",
                desc: "Quick turnaround times without compromising on quality or attention to detail",
              },
              {
                icon: "ri-customer-service-line",
                title: "Expert Support",
                desc: "Dedicated project managers and unlimited revisions until you're satisfied",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${item.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  {item.title}
                </h3>
                <p className="text-black/70">{item.desc}</p>
              </div>
            ))}
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
              Explore our collection of immersive 3D walkthrough videos across
              various project types
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

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our 3D Walkthrough Video Production Process
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: "1",
                title: "Consultation & Planning",
                desc: "Understanding your vision, target audience, and key selling points to create the perfect narrative.",
              },
              {
                num: "2",
                title: "3D Modeling & Setup",
                desc: "Creating detailed 3D models with accurate materials, lighting, and environmental elements.",
              },
              {
                num: "3",
                title: "Animation & Rendering",
                desc: "Crafting smooth camera movements and rendering high-quality frames with photorealistic detail.",
              },
              {
                num: "4",
                title: "Post-Production",
                desc: "Professional editing, color grading, audio integration, and final delivery in multiple formats.",
              },
            ].map((step) => (
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

      {/* Why 3D Walkthroughs Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Why Modern Real Estate Marketing Needs 3D Walkthroughs
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real estate has become competitive — 3D walkthroughs give
              developers and builders a winning edge.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Builds buyer trust before first contact",
              "Increases time spent on property pages (SEO benefit)",
              "Improves ad performance & click-to-lead ratio",
              "Works perfectly for under-construction projects",
              "Reduces unnecessary site visits",
              "Helps close deals faster",
            ].map((point) => (
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

      {/* Trusted By */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest mb-8">Trusted by Leading Real Estate Developers</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["Godrej Properties", "Prestige Group", "Brigade Group", "Sobha Realty", "Mahindra Lifespaces", "Tata Housing"].map((brand) => (
              <div key={brand} className="px-6 py-3 bg-white rounded-xl shadow-sm border border-gray-100">
                <span className="text-gray-700 font-semibold text-sm">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Everything you need to know about 3D walkthrough videos</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "How long does it take to deliver a 3D walkthrough video?", a: "Typically 3–5 weeks depending on project size. A standard 2–3 BHK residential walkthrough takes about 3 weeks; large township projects with multiple typologies and amenities take 6–8 weeks. We share milestone previews throughout production." },
              { q: "What files or inputs do you need to start?", a: "We work from architectural drawings, CAD files, floor plans, elevations, and site plans. Even rough sketches or PDF drawings are sufficient to begin modelling. Our team handles all 3D modelling, texturing, lighting, and animation in-house." },
              { q: "How many revision rounds are included?", a: "Every project includes 2 rounds of revisions at the grey-structure stage and 2 rounds after final render — so 4 structured feedback cycles in total. Additional revisions are available at a nominal cost." },
              { q: "What video formats and resolutions do you deliver?", a: "We deliver in Full HD (1080p) and 4K resolution as MP4 files. We also provide editable formats for further use in ads or presentations upon request." },
              { q: "Can the walkthrough be used for RERA registration or project approvals?", a: "Yes. Our 3D walkthroughs are accepted for RERA project marketing submissions across states. We ensure all visuals include mandatory RERA disclaimer overlays." },
              { q: "How much does a 3D walkthrough video cost?", a: "Every project is unique. Pricing depends on number of typologies, amenity areas, and output requirements. Contact our experts for a tailored quote." },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow">
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
          <h2 className="text-3xl font-bold text-white mb-4">Pan-India 3D Walkthrough Services</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-gray-400 mb-10">We serve real estate developers across India with fast turnarounds and remote collaboration</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { city: "Mumbai", href: "/city-services/3d-walkthrough-videos-mumbai" },
              { city: "Delhi NCR", href: "/city-services/3d-walkthrough-videos-delhi" },
              { city: "Bangalore", href: "/city-services/3d-walkthrough-videos-bangalore" },
              { city: "Gurugram", href: "/city-services/real-estate-video-production-gurugram" },
              { city: "Pune", href: "/contact" },
              { city: "Hyderabad", href: "/contact" },
              { city: "Chennai", href: "/contact" },
            ].map(({ city, href }) => (
              <a key={city} href={href} className="px-6 py-3 bg-gray-900 border border-gray-700 rounded-full text-white font-medium hover:border-yellow-400 hover:text-yellow-400 transition-colors">
                {city}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Related Services</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Virtual Reality Tours", desc: "Immersive VR experiences for NRI buyers and sales offices.", href: "/services/virtual-reality-tours", icon: "ri-vr-goggles-line" },
              { name: "Interior Cinematic Walkthrough", desc: "Cinematic-grade interior animations with photorealistic lighting.", href: "/services/interior-cinematic-walkthrough", icon: "ri-film-line" },
              { name: "3D Renders & Isometrics", desc: "Photorealistic exterior and interior renders for marketing.", href: "/services/3d-renders-isometrics", icon: "ri-image-3d-line" },
            ].map((s) => (
              <a key={s.href} href={s.href} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className={`${s.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{s.name}</h3>
                <p className="text-gray-600 mb-4">{s.desc}</p>
                <span className="text-yellow-600 font-semibold text-sm">Learn more →</span>
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
                Get Your 3D Walkthrough Quote
              </h2>
              <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
              <p className="text-lg text-black/80">
                Ready to bring your architectural vision to life? Contact us for
                a custom quote.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
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
                      placeholder="your@email.com"
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
                      Project Type
                    </label>
                    <select
                      name="project_type"
                      value={formData.project_type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential Project</option>
                      <option value="commercial">Commercial Project</option>
                      <option value="villa">Villa / Bungalow</option>
                      <option value="township">Township</option>
                      <option value="interior">Interior Design</option>
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
                  {isSubmitting ? "Sending..." : "Get Your Quote"}
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

      <Footer />
      <WhatsAppFloat />

      {/* Video Modal */}
      {selectedProject && (
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
