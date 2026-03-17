"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const renderTypes = [
  {
    icon: "ri-building-line",
    title: "Exterior Renders",
    description: "Stunning exterior visualizations showcasing Mumbai's architectural beauty",
  },
  {
    icon: "ri-home-4-line",
    title: "Interior Renders",
    description: "Photorealistic interior designs for Mumbai's luxury properties",
  },
  {
    icon: "ri-landscape-line",
    title: "Landscape Renders",
    description: "Beautiful outdoor spaces and landscaping visualizations",
  },
  {
    icon: "ri-camera-3-line",
    title: "Aerial Views",
    description: "Bird's eye perspective renders showing Mumbai skyline integration",
  },
];

export default function RendersMumbaiClient() {
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
          subject: `Mumbai 3D Renders Inquiry - ${formData.name}`,
          from_name: formData.name,
          from_email: formData.email,
          message: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nRender Type: ${formData.service_type || "Not selected"}\nProject Location: ${formData.project_location || "Not provided"}\n\nProject Details:\n${formData.message || "No details provided"}`,
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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Mumbai%20luxury%20real%20estate%203D%20architectural%20renders%2C%20photorealistic%20building%20visualization%2C%20modern%20skyscrapers%20with%20Mumbai%20skyline%2C%20professional%203D%20modeling%20workspace%20with%20high-end%20computers%20and%20design%20software&width=1920&height=1080&seq=mumbai-renders-hero&orientation=landscape')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
            3D Renders in Mumbai
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-lg">
            Photorealistic 3D Architectural Renders & Visualization Services for Mumbai&apos;s Premium Real Estate
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
              View Render Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              3D Rendering Services in Mumbai
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-lg text-black/80 leading-relaxed">
              Creating photorealistic 3D renders for Mumbai&apos;s most prestigious real estate projects.
              From concept to completion, we bring your architectural visions to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {renderTypes.map((service, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300"
              >
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

      {/* Contact Form */}
      <section id="quote" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Get Your Mumbai 3D Render Quote
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
              <p className="text-lg text-black/80">
                Ready to visualize your Mumbai property with stunning 3D renders? Contact us today!
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-black font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-black font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-black font-semibold mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-black font-semibold mb-2">Render Type</label>
                  <select
                    name="service_type"
                    value={formData.service_type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent pr-8"
                  >
                    <option value="">Select Render Type</option>
                    <option value="exterior-renders">Exterior Renders</option>
                    <option value="interior-renders">Interior Renders</option>
                    <option value="landscape-renders">Landscape Renders</option>
                    <option value="aerial-views">Aerial Views</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-black font-semibold mb-2">Project Location in Mumbai</label>
                <input
                  type="text"
                  name="project_location"
                  value={formData.project_location}
                  onChange={handleInputChange}
                  placeholder="e.g., Bandra West, Worli, Lower Parel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label className="block text-black font-semibold mb-2">Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={500}
                  placeholder="Describe your 3D rendering requirements..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                ></textarea>
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-60 whitespace-nowrap"
              >
                {isSubmitting ? "Sending..." : "Get Free Quote"}
              </button>

              {submitStatus === "success" && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you! We&apos;ll contact you soon with your Mumbai 3D render quote.
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

      <Footer />
    </div>
  );
}
