"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  { icon: "ri-video-camera-line", title: "3D Walkthrough Videos", description: "Immersive property tours for Gurugram's premium developments" },
  { icon: "ri-flight-takeoff-line", title: "Aerial Drone Shoots", description: "Stunning aerial footage showcasing Gurugram's skyline and locations" },
  { icon: "ri-vr-line", title: "Virtual Reality Tours", description: "Interactive VR experiences for Gurugram real estate projects" },
  { icon: "ri-building-line", title: "Architectural Visualization", description: "Photorealistic renders of Gurugram's architectural projects" },
];

const localProjects = [
  {
    id: 1,
    title: "DLF Cyber City Corporate Tower",
    location: "Cyber City, Gurugram",
    type: "3D Walkthrough Video",
    image: "https://readdy.ai/api/search-image?query=Modern%20corporate%20office%20tower%20in%20Cyber%20City%20Gurugram%2C%20glass%20facade%20building%2C%20professional%20business%20district%2C%20contemporary%20commercial%20architecture%2C%20urban%20skyline%20background&width=600&height=400&seq=dlf-cyber-city&orientation=landscape",
    description: "Premium corporate office space with state-of-the-art facilities",
  },
  {
    id: 2,
    title: "M3M Golf Estate Residences",
    location: "Golf Course Extension Road, Gurugram",
    type: "Aerial Drone Video",
    image: "https://readdy.ai/api/search-image?query=Luxury%20residential%20complex%20near%20golf%20course%20in%20Gurugram%2C%20modern%20apartment%20buildings%2C%20green%20landscaping%2C%20premium%20real%20estate%20development%2C%20aerial%20view&width=600&height=400&seq=m3m-golf-estate&orientation=landscape",
    description: "Luxury residential project with golf course views and premium amenities",
  },
  {
    id: 3,
    title: "Ambience Mall Expansion",
    location: "NH-8, Gurugram",
    type: "Construction Progress Video",
    image: "https://readdy.ai/api/search-image?query=Large%20shopping%20mall%20complex%20construction%20in%20Gurugram%2C%20modern%20retail%20architecture%2C%20commercial%20development%2C%20construction%20progress%20documentation&width=600&height=400&seq=ambience-mall&orientation=landscape",
    description: "Major retail expansion project showcasing construction milestones",
  },
];

const whyChooseUs = [
  { title: "Local Gurugram Expertise", description: "Deep understanding of Gurugram's real estate market and architectural trends", icon: "ri-map-pin-line" },
  { title: "Premium Quality Production", description: "Hollywood-grade video production with 4K resolution and cinematic quality", icon: "ri-award-line" },
  { title: "Fast Turnaround", description: "Quick delivery without compromising quality, perfect for Gurugram's fast-paced market", icon: "ri-time-line" },
  { title: "Competitive Pricing", description: "Best rates for real estate video production services in Gurugram", icon: "ri-price-tag-3-line" },
];

const locationBenefits = [
  { title: "Financial District Proximity", desc: "Close to major corporate offices and business centers" },
  { title: "Excellent Connectivity", desc: "Metro, expressways, and proximity to IGI Airport" },
  { title: "Premium Infrastructure", desc: "World-class malls, hospitals, and educational institutions" },
];

const processSteps = [
  { n: 1, t: "Site Visit & Planning", d: "On-site assessment of your Gurugram property and detailed project planning." },
  { n: 2, t: "3D Modeling & Setup", d: "Creating accurate 3D models with realistic materials and lighting." },
  { n: 3, t: "Video Production", d: "Professional filming and rendering with cinematic quality output." },
  { n: 4, t: "Final Delivery", d: "Complete video package with multiple formats for all marketing channels." },
];

export default function VideoProductionGurugramClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service_type: "",
    project_location: "",
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
    setSubmitStatus("idle");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "a557c293-5de3-4d54-8636-50b7d3c406c7",
          subject: `Gurugram Video Production Inquiry - ${formData.name}`,
          from_name: formData.name,
          from_email: formData.email,
          message: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Type: ${formData.service_type || "Not selected"}\nProject Location: ${formData.project_location || "Not provided"}\n\nProject Details:\n${formData.message || "No details provided"}`,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", service_type: "", project_location: "", message: "" });
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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Gurugram%20skyline%20with%20modern%20skyscrapers%20and%20real%20estate%20developments%2C%20professional%20video%20production%20equipment%20in%20foreground%2C%20cinematic%20lighting%2C%20urban%20landscape%20of%20Millennium%20City&width=1920&height=1080&seq=gurugram-hero&orientation=landscape')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
            Real Estate Video Production Service in Gurugram
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-lg">
            Professional 3D Walkthrough Videos, Aerial Drone Shoots & VR Tours for Gurugram&apos;s Premium Real Estate Projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap"
            >
              Get Free Quote
            </a>
            <a
              href="/portfolio"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors whitespace-nowrap"
            >
              View Gurugram Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Real Estate Video Production Services in Gurugram
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-lg text-black/80 leading-relaxed">
              Specializing in premium real estate video production for Gurugram&apos;s top developers and brokers.
              From DLF to M3M, we&apos;ve created stunning visual content for Millennium City&apos;s most prestigious projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${service.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-black/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Portfolio */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Gurugram Real Estate Video Portfolio
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              Showcasing our premium video production work for leading real estate projects across Gurugram
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {project.type}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
                    <i className="ri-map-pin-line mr-1"></i>
                    {project.location}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                  <p className="text-black/70">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Why Choose Us for Gurugram Real Estate Videos?
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${item.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{item.title}</h3>
                <p className="text-black/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Gurugram: India&apos;s Millennium City
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
              <p className="text-lg text-black/80 mb-6">
                Gurugram stands as India&apos;s leading financial and technology hub, making it a prime destination for real estate investment.
                Our video production services help showcase the unique advantages of this dynamic city.
              </p>
              <div className="space-y-4">
                {locationBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-black text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">{benefit.title}</h4>
                      <p className="text-black/70">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Gurugram%20cityscape%20with%20modern%20skyscrapers%2C%20DLF%20Cyber%20City%2C%20financial%20district%2C%20urban%20development%2C%20Millennium%20City%20infrastructure%2C%20professional%20photography&width=600&height=500&seq=gurugram-city&orientation=landscape"
                alt="Gurugram Cityscape"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Video Production Process
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              Streamlined process designed for Gurugram&apos;s fast-paced real estate market
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">{step.n}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{step.t}</h3>
                <p className="text-gray-600">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="quote" className="py-24 bg-yellow-400">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Get Your Gurugram Project Quote
              </h2>
              <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
              <p className="text-lg text-black/80">
                Ready to showcase your Gurugram real estate project? Get a custom quote today.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <form id="gurugram-video-inquiry-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
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
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
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
                      placeholder="Your phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                    <select
                      name="service_type"
                      value={formData.service_type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                    >
                      <option value="">Select service type</option>
                      <option value="3d-walkthrough">3D Walkthrough Video</option>
                      <option value="aerial-drone">Aerial Drone Shoot</option>
                      <option value="vr-tour">Virtual Reality Tour</option>
                      <option value="construction-progress">Construction Progress Video</option>
                      <option value="architectural-visualization">Architectural Visualization</option>
                      <option value="complete-package">Complete Video Package</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Location in Gurugram</label>
                  <input
                    type="text"
                    name="project_location"
                    value={formData.project_location}
                    onChange={handleInputChange}
                    placeholder="e.g., Cyber City, Golf Course Road, Sohna Road"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    maxLength={500}
                    placeholder="Tell us about your Gurugram real estate project, timeline, and specific video requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm resize-none"
                  ></textarea>
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {formData.message.length}/500 characters
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-60 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin"></i>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Get Free Quote</span>
                      <i className="ri-send-plane-line"></i>
                    </>
                  )}
                </button>
                {submitStatus === "success" && (
                  <div className="text-green-600 text-center font-medium">
                    Thank you! We&apos;ll get back to you with a custom quote within 24 hours.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="text-red-600 text-center font-medium">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Showcase Your Gurugram Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading Gurugram developers who trust us with their real estate video production needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer"
            >
              Start Your Project
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors whitespace-nowrap cursor-pointer"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
