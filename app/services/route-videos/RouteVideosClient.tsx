"use client";

import { useState } from "react";
import Link from "next/link";
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

const portfolioProjects: Project[] = [
  {
    id: 7,
    title: "Hero Homes-The Palatial, Gurugram",
    category: "Route Videos",
    image: "/images/portfolio/14.png",
    description:
      "Dynamic route visualization showcasing different approach routes to reach the project site highlighting nearby landmarks and markers for easy navigation.",
    videoUrl:
      "https://www.youtube.com/embed/ENlsfe7wQRs?si=y4M05nZkVgJPmB9U&autoplay=1",
    duration: "6:34",
  },
];

const features = [
  {
    icon: "ri-road-map-line",
    title: "Scenic Route Planning",
    description:
      "Strategic route selection highlighting the most attractive pathways and accessibility features to your development.",
  },
  {
    icon: "ri-camera-3-line",
    title: "Cinematic Production",
    description:
      "Professional cinematography with smooth camera movements and dynamic angles showcasing the journey experience.",
  },
  {
    icon: "ri-flight-takeoff-line",
    title: "Aerial Perspectives",
    description:
      "Drone footage providing bird's eye views of routes, connectivity, and surrounding infrastructure.",
  },
  {
    icon: "ri-time-line",
    title: "Journey Timing",
    description:
      "Accurate travel time documentation from key landmarks and transportation hubs to your property.",
  },
  {
    icon: "ri-map-pin-line",
    title: "Landmark Integration",
    description:
      "Highlighting important landmarks, amenities, and points of interest along the route to your development.",
  },
  {
    icon: "ri-navigation-line",
    title: "Navigation Clarity",
    description:
      "Clear directional guidance and signage visibility ensuring easy navigation for potential buyers.",
  },
];

const benefits = [
  "Enhanced location marketing and accessibility demonstration",
  "Improved buyer confidence through route familiarity",
  "Professional presentation of connectivity advantages",
  "Reduced site visit preparation time for clients",
  "Effective showcase of surrounding infrastructure",
  "Compelling visual storytelling of the journey experience",
];

export default function RouteVideosClient() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project_type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
          subject: `Route Videos Inquiry - ${formData.name}`,
          from_name: formData.name,
          from_email: formData.email,
          message: `
New Route Videos Inquiry

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Project Type: ${formData.project_type || "Not specified"}

Project Details:
${formData.message || "No additional details provided"}
          `.trim(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setTimeout(() => {
          setFormData({ name: "", email: "", phone: "", project_type: "", message: "" });
          setSubmitStatus("idle");
        }, 3000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Cinematic%20aerial%20view%20of%20winding%20road%20through%20beautiful%20landscape%20leading%20to%20modern%20residential%20development%2C%20professional%20real%20estate%20route%20video%20cinematography%2C%20golden%20hour%20lighting%2C%20scenic%20pathways%20and%20infrastructure%2C%20birds%20eye%20perspective&width=1920&height=1080&seq=route-hero-bg&orientation=landscape')`,
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Route Videos & Location AV for Real Estate
</h1>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              India&apos;s specialist <strong className="text-yellow-400">real estate location video</strong> and <strong className="text-yellow-400">location AV</strong> production company. We create dynamic <strong className="text-yellow-400">route videos</strong> that showcase your project&apos;s accessibility, connectivity, and location advantage — combining drone aerials, ground-level cinematography, and animated maps into a single compelling <strong className="text-yellow-400">location video</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">
              Route Video Features
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive route documentation that enhances location marketing
              and buyer confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-yellow-400 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${feature.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Why Choose Route Videos?
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
              <p className="text-xl text-gray-600 mb-8">
                Route videos provide potential buyers with essential
                accessibility information and create confidence in location
                advantages.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <i className="ri-check-line text-yellow-400 text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20route%20video%20production%20setup%20with%20camera%20equipment%2C%20drone%2C%20and%20cinematography%20gear%20for%20real%20estate%20marketing%2C%20modern%20technology%20for%20location%20documentation%2C%20clean%20studio%20environment&width=600&height=500&seq=route-benefits&orientation=landscape"
                alt="Route Video Production"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">
              Route Video Portfolio
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our route video projects showcasing various accessibility
              and connectivity solutions
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

      {/* Process */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">How We Produce Your Route Video</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Route Planning", desc: "We map all connectivity highlights — metro stations, schools, hospitals, highways, and landmarks." },
              { num: "02", title: "Shoot Day", desc: "Drone and ground footage of all key routes and landmark destinations around your project." },
              { num: "03", title: "Motion Graphics", desc: "Animated map overlays, distance callouts, proximity labels, and route highlights added in post." },
              { num: "04", title: "Final Delivery", desc: "Branded route video delivered in full HD — with social cuts for Instagram, YouTube, and WhatsApp." },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What&apos;s Included in a Route Video</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "ri-flight-takeoff-line", title: "Drone Aerial B-Roll", desc: "Cinematic overhead shots of the project site, arterial roads, and key landmarks." },
              { icon: "ri-map-2-line", title: "Animated Map Overlays", desc: "Motion graphics showing routes, distances, and travel times to major destinations." },
              { icon: "ri-road-map-line", title: "Proximity Text Labels", desc: "On-screen callouts like '5 mins to Metro', '10 mins to Airport' during the relevant shots." },
              { icon: "ri-music-2-line", title: "Professional Music & VO", desc: "Licensed background music and optional professional voiceover narration." },
              { icon: "ri-scissors-cut-line", title: "Social Media Cut-downs", desc: "30s and 60s versions optimised for Instagram Reels, YouTube Shorts, and WhatsApp." },
              { icon: "ri-building-4-line", title: "Brand Overlays", desc: "Your project logo, brand colours, and developer identity integrated throughout." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-yellow-400 transition-colors">
                <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${item.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Where Route Videos Work Best</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "ri-presentation-line", title: "Pre-Launch Buyer Decks", desc: "Show investors and early buyers why the location is a sound investment before the project is even launched." },
              { icon: "ri-user-star-line", title: "Channel Partner Presentations", desc: "Equip your channel partners with a compelling location story they can present at every client meeting." },
              { icon: "ri-advertisement-line", title: "Digital Ads", desc: "Location-focused ads on Meta and Google targeting buyers searching for properties in the area." },
            ].map((item) => (
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

      {/* Real Estate Videography Info */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">India&apos;s Specialist Real Estate Videography Company</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Alliance Media Labs is one of India&apos;s leading <strong className="text-white">real estate videography</strong> and <strong className="text-white">property videography</strong> companies, specialising exclusively in the real estate sector. Our <strong className="text-white">real estate videography services</strong> go beyond simple filming — we plan every shot to tell the location story that sells your project.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { icon: "ri-video-line", title: "Real Estate Video Packages", desc: "Comprehensive real estate video packages combining route videos, drone aerials, and location AV — available as standalone or bundled with your full launch campaign." },
                { icon: "ri-team-line", title: "Dedicated Video Company", desc: "As a specialist real estate video company, every crew member understands property marketing — from scripting the right location narrative to choosing golden-hour shoot windows." },
                { icon: "ri-film-line", title: "Property Videography Services", desc: "Full-service property videography covering connectivity routes, nearby landmarks, aerial overviews, and ground-level lifestyle shots — everything your brochure and digital ads need." },
              ].map((item) => (
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

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "What is included in a route video?", a: "A route video includes drone aerial footage, ground-level shots of key routes, animated map overlays showing distances and travel times, proximity text callouts, professional music, and branded delivery in full HD. Social media cuts are included." },
              { q: "Can you add animated map graphics showing the route?", a: "Yes. Animated map overlays are a standard feature of every route video — showing the path from key landmarks to your project with travel time callouts and landmark labels." },
              { q: "Can we cover multiple routes in a single video?", a: "Yes. A standard route video typically covers 3–5 key routes (airport, metro, schools, hospitals, malls). Additional routes can be added as extensions." },
              { q: "How long does a route video take to produce?", a: "Typically 2–3 weeks from shoot date to final delivery. Rush timelines in 1 week are available for launch events." },
              { q: "Can we use it for highway connectivity videos near metro projects?", a: "Yes. Route videos are especially impactful for projects near metro stations, expressways, and upcoming infrastructure. We highlight under-construction infrastructure with motion graphics and future-ready overlays." },
              { q: "How much does a route video cost?", a: "Pricing depends on the number of routes, aerial footage requirements, and animation complexity. Contact our experts for a custom quote." },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 hover:shadow-md transition-shadow">
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
            <h2 className="text-3xl font-bold text-black mb-4">Route Video Pricing</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-600 mb-8">Pricing depends on the number of routes covered, aerial footage, animation complexity, and delivery timeline. Contact our experts for a custom quote.</p>
            <a href="/contact" className="inline-flex items-center bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
              <i className="ri-phone-line mr-2"></i>Contact Our Experts
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-yellow-400">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Get Your Route Vidoes Quote
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
                      placeholder="Your phone number"
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
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential Complex</option>
                      <option value="commercial">Commercial Building</option>
                      <option value="retail">Retail/Shopping Center</option>
                      <option value="hospitality">Hotel/Resort</option>
                      <option value="educational">Educational Campus</option>
                      <option value="healthcare">Healthcare Facility</option>
                      <option value="mixed-use">Mixed-Use Development</option>
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
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm resize-none"
                    placeholder="Tell us about your project requirements, timeline, and any specific features you'd like to highlight..."
                  ></textarea>
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {formData.message.length}/500 characters
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 text-black py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center space-x-2">
                      <i className="ri-loader-4-line animate-spin"></i>
                      <span>Sending.....</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <span>Send Inquiry via Email</span>
                      <i className="ri-mail-send-line"></i>
                    </span>
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="text-green-600 text-center font-medium">
                    Thank you! We&apos;ll get back to you with a custom quote within
                    24 hours.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="text-red-600 text-center font-medium">
                    Sorry, there was an error. Please email us directly at
                    info@alliancemedialabs.com
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Showcase Your Location?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us create compelling route videos that highlight your
            development&apos;s accessibility and connectivity advantages.
          </p>
          <Link
            href="/contact"
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Video Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <div className="aspect-video">
                <iframe
                  src={selectedProject.videoUrl}
                  title={selectedProject.title}
                  className="w-full h-full rounded-t-2xl"
                  frameBorder="0"
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
              <h3 className="text-3xl font-bold text-black mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-black/70 text-lg mb-6">
                {selectedProject.description}
              </p>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <i className="ri-time-line text-yellow-400"></i>
                  <span className="text-black">
                    Duration: {selectedProject.duration}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-play-circle-line text-yellow-400"></i>
                  <span className="text-black">HD Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
