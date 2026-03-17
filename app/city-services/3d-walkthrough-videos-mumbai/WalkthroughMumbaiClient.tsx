"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  { icon: "ri-building-line", title: "Residential 3D Tours", description: "Immersive walkthroughs for Mumbai's premium residential projects" },
  { icon: "ri-community-line", title: "Commercial Visualizations", description: "Professional 3D tours for Mumbai's business districts and offices" },
  { icon: "ri-home-smile-line", title: "Luxury Property Tours", description: "High-end 3D experiences for Mumbai's most exclusive properties" },
  { icon: "ri-camera-3-line", title: "Interactive Presentations", description: "Engaging 3D walkthroughs with interactive hotspots and information" },
];

const localProjects = [
  {
    id: 1,
    title: "Lodha World Towers",
    location: "Lower Parel, Mumbai",
    type: "Luxury Residential 3D Tour",
    image: "https://readdy.ai/api/search-image?query=Luxury%20residential%20towers%20in%20Lower%20Parel%20Mumbai%2C%20modern%20high-rise%20apartments%2C%20premium%20real%20estate%20development%2C%20Mumbai%20skyline%20background%2C%20contemporary%20architecture%20with%20glass%20facades%20and%20urban%20landscape&width=600&height=400&seq=lodha-world&orientation=landscape",
    description: "Premium residential towers with world-class amenities and Mumbai harbor views",
  },
  {
    id: 2,
    title: "Palais Royale Worli",
    location: "Worli, Mumbai",
    type: "Ultra-Luxury 3D Walkthrough",
    image: "https://readdy.ai/api/search-image?query=Ultra%20luxury%20residential%20building%20in%20Worli%20Mumbai%2C%20premium%20high-rise%20tower%2C%20exclusive%20real%20estate%2C%20Mumbai%20coastline%20view%2C%20sophisticated%20architecture%20with%20modern%20design%20elements&width=600&height=400&seq=palais-royale&orientation=landscape",
    description: "India's most expensive residential project with unparalleled luxury features",
  },
  {
    id: 3,
    title: "Phoenix Mills Commercial",
    location: "Kurla, Mumbai",
    type: "Commercial 3D Visualization",
    image: "https://readdy.ai/api/search-image?query=Modern%20commercial%20complex%20in%20Kurla%20Mumbai%2C%20office%20buildings%2C%20business%20district%2C%20contemporary%20corporate%20architecture%2C%20urban%20development%20with%20glass%20towers%20and%20professional%20environment&width=600&height=400&seq=phoenix-mills&orientation=landscape",
    description: "State-of-the-art commercial complex with premium office spaces",
  },
];

const whyUsItems = [
  { title: "High-Quality Real Estate Walkthrough Videos", description: "We deliver photorealistic 3D walkthrough videos with highly detailed interiors and exteriors. Our visuals capture materials, lighting, landscaping, and spatial flow to create a realistic preview of the final project." },
  { title: "Cinematic Camera Movement & Smooth Transitions", description: "Our walkthroughs feature cinematic camera paths, smooth transitions, and dynamic angles that enhance storytelling. This results in engaging videos that hold viewer attention and elevate the overall presentation quality." },
  { title: "Architectural Visualization & Cinematic Storytelling", description: "We combine architectural visualization with cinematic storytelling to communicate your project's vision clearly. Ideal for marketing campaigns, sales galleries, investor presentations, and digital promotions." },
  { title: "Perfect for Marketing, Sales & Investor Presentations", description: "Our 3D walkthrough videos help developers and marketers explain layouts, highlight key amenities, and create emotional engagement— leading to stronger buyer interest and faster conversions." },
  { title: "Fast Turnaround & Mumbai-Focused Expertise", description: "With local Mumbai production expertise, we understand market trends, buyer expectations, and real estate launch timelines. We ensure fast, seamless delivery aligned with your promotional schedule." },
  { title: "Seamless Delivery for Launches & Promotional Campaigns", description: "Our walkthrough videos are optimized for websites, social media, exhibitions, and large displays—making them perfect for real estate launches, roadshows, and digital marketing campaigns." },
];

const faqItems = [
  { q: "What are 3D walkthrough videos?", a: "3D walkthrough videos are animated visual tours that allow viewers to experience a property or architectural design in a realistic and immersive way before construction or project completion." },
  { q: "Who should use 3D walkthrough videos?", a: "3D walkthrough videos are widely used by real estate developers, architects, builders, and marketing teams to present residential, commercial, and mixed-use projects effectively." },
  { q: "How do 3D walkthrough videos help real estate marketing?", a: "These videos help buyers clearly understand layouts, space flow, and amenities, increasing engagement at sales offices, online listings, digital campaigns, and property launch events." },
  { q: "How long does it take to create a 3D walkthrough video?", a: "The timeline depends on project size, complexity, and level of detailing. Most 3D walkthrough videos are delivered within a defined project schedule after design finalization." },
  { q: "Do you provide 3D walkthrough video services in Mumbai?", a: "Yes, we provide professional 3D walkthrough video services in Mumbai for real estate, architectural visualization, and property marketing projects." },
];

export default function WalkthroughMumbaiClient() {
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
          subject: `Mumbai 3D Walkthrough Inquiry - ${formData.name}`,
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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Mumbai%20skyline%20with%20iconic%20skyscrapers%20and%20Marine%20Drive%2C%20professional%203D%20visualization%20equipment%20in%20foreground%2C%20cinematic%20lighting%2C%20financial%20capital%20of%20India%20cityscape%20with%20modern%20architecture&width=1920&height=1080&seq=mumbai-hero&orientation=landscape')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
            3D Walkthrough Videos in Mumbai
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-lg">
            Professional 3D Architectural Walkthroughs & Virtual Tours for Mumbai&apos;s Premium Real Estate Projects
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
              View Mumbai Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              3D Walkthrough Services in Mumbai
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-lg text-black/80 leading-relaxed">
              Creating stunning 3D architectural walkthroughs for Mumbai&apos;s leading real estate developers.
              From Bandra to Worli, we bring your projects to life with photorealistic 3D visualizations.
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
              { n: 1, t: "Consultation & Planning", d: "Understanding your vision, target audience, and key selling points to create the perfect narrative." },
              { n: 2, t: "3D Modeling & Setup", d: "Creating detailed 3D models with accurate materials, lighting, and environmental elements." },
              { n: 3, t: "Animation & Rendering", d: "Crafting smooth camera movements and rendering high-quality frames with photorealistic detail." },
              { n: 4, t: "Post-Production", d: "Professional editing, color grading, audio integration, and final delivery in multiple formats." },
            ].map((step) => (
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

      {/* Local Portfolio */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Mumbai 3D Walkthrough Portfolio
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              Showcasing our premium 3D walkthrough work for leading real estate projects across Mumbai
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
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Why Choose Our 3D Walkthrough Video Services
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We create immersive, photorealistic 3D walkthrough videos that help real estate developers, architects,
              and marketers showcase projects with clarity, impact, and cinematic storytelling.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {whyUsItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-yellow-400 text-3xl font-bold">•</span>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="quote" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Get Your Mumbai Project Quote
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
              <p className="text-lg text-black/80">
                Ready to showcase your Mumbai property with stunning 3D walkthroughs? Contact us today!
              </p>
            </div>
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-black font-semibold mb-2">Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-black font-semibold mb-2">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-black font-semibold mb-2">Phone *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-black font-semibold mb-2">Service Type</label>
                  <select name="service_type" value={formData.service_type} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent pr-8">
                    <option value="">Select Service</option>
                    <option value="residential-3d-tour">Residential 3D Tour</option>
                    <option value="commercial-walkthrough">Commercial Walkthrough</option>
                    <option value="luxury-property-tour">Luxury Property Tour</option>
                    <option value="interactive-presentation">Interactive Presentation</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-black font-semibold mb-2">Project Location in Mumbai</label>
                <input type="text" name="project_location" value={formData.project_location} onChange={handleInputChange} placeholder="e.g., Bandra West, Worli, Lower Parel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />
              </div>
              <div className="mb-6">
                <label className="block text-black font-semibold mb-2">Project Details</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} maxLength={500} placeholder="Tell us about your project requirements..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"></textarea>
                <div className="text-right text-sm text-gray-500 mt-1">{formData.message.length}/500 characters</div>
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-60 whitespace-nowrap">
                {isSubmitting ? "Sending..." : "Get Free Quote"}
              </button>
              {submitStatus === "success" && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you! We&apos;ll contact you soon with your Mumbai 3D walkthrough quote.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  Something went wrong. Please try again or call us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Common questions about our 3D walkthrough video production and architectural visualization video services in Mumbai.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, i) => (
              <details key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <summary className="cursor-pointer text-xl font-semibold text-black">{item.q}</summary>
                <p className="text-gray-600 mt-3">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
