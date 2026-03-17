"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const localProjects = [
  {
    id: 1,
    title: "Manyata Tech Park",
    location: "Nagavara, Bangalore",
    type: "IT Campus 3D Walkthrough",
    image: "https://readdy.ai/api/search-image?query=Modern%20IT%20tech%20park%20in%20Bangalore%2C%20corporate%20campus%20buildings%2C%20technology%20hub%2C%20contemporary%20office%20architecture%20with%20glass%20facades%20and%20landscaped%20environment&width=600&height=400&seq=manyata-tech&orientation=landscape",
    description: "India's largest IT SEZ with world-class infrastructure and amenities",
  },
  {
    id: 2,
    title: "Prestige Lakeside Habitat",
    location: "Varthur, Bangalore",
    type: "Luxury Residential 3D Tour",
    image: "https://readdy.ai/api/search-image?query=Luxury%20residential%20towers%20in%20Varthur%20Bangalore%2C%20premium%20apartment%20complex%2C%20lakeside%20development%2C%20modern%20residential%20architecture%20with%20green%20spaces%20and%20water%20features&width=600&height=400&seq=prestige-lakeside&orientation=landscape",
    description: "Premium lakeside residential project with luxury amenities",
  },
  {
    id: 3,
    title: "Forum Mall Koramangala",
    location: "Koramangala, Bangalore",
    type: "Retail 3D Visualization",
    image: "https://readdy.ai/api/search-image?query=Modern%20shopping%20mall%20in%20Koramangala%20Bangalore%2C%20retail%20complex%2C%20contemporary%20commercial%20architecture%2C%20urban%20shopping%20destination%20with%20glass%20and%20steel%20design&width=600&height=400&seq=forum-mall&orientation=landscape",
    description: "Premier shopping and entertainment destination in South Bangalore",
  },
];

export default function WalkthroughBangaloreClient() {
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
          subject: `Bangalore 3D Walkthrough Inquiry - ${formData.name}`,
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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Bangalore%20cityscape%20with%20IT%20parks%20and%20modern%20skyscrapers%2C%20Silicon%20Valley%20of%20India%2C%20professional%203D%20visualization%20equipment%2C%20tech%20city%20architecture%20with%20lush%20greenery%20and%20urban%20development&width=1920&height=1080&seq=bangalore-hero&orientation=landscape')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
            3D Walkthrough Videos in Bangalore
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-lg">
            Professional 3D Architectural Walkthroughs for Bangalore&apos;s IT Parks, Residential & Commercial Projects
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
              View Bangalore Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              3D Walkthrough Services in Bangalore
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-lg text-black/80 leading-relaxed">
              Serving India&apos;s Silicon Valley with cutting-edge 3D architectural visualization services.
              From IT campuses to luxury residences, we create immersive experiences for Bangalore&apos;s dynamic market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-computer-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">IT Parks & Campuses</h3>
              <p className="text-black/70">Specialized 3D tours for technology parks and corporate campuses</p>
            </div>
            <div className="text-center p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-building-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Residential Projects</h3>
              <p className="text-black/70">Premium 3D walkthroughs for Bangalore&apos;s luxury residential developments</p>
            </div>
            <div className="text-center p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shopping-bag-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Commercial Spaces</h3>
              <p className="text-black/70">Engaging visualizations for malls, offices, and retail developments</p>
            </div>
            <div className="text-center p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-hospital-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Healthcare & Education</h3>
              <p className="text-black/70">Specialized 3D tours for hospitals, schools, and institutional projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Portfolio */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Bangalore 3D Portfolio
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              Showcasing our premium 3D walkthrough work across Bangalore&apos;s key locations
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

      {/* Contact Form */}
      <section id="quote" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Get Your Bangalore Project Quote
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
              <p className="text-lg text-black/80">
                Ready to showcase your Bangalore property with stunning 3D walkthroughs? Contact us today!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl">
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
                  <label className="block text-black font-semibold mb-2">Service Type</label>
                  <select
                    name="service_type"
                    value={formData.service_type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent pr-8"
                  >
                    <option value="">Select Service</option>
                    <option value="it-campus-tour">IT Campus Tour</option>
                    <option value="residential-3d-tour">Residential 3D Tour</option>
                    <option value="commercial-walkthrough">Commercial Walkthrough</option>
                    <option value="healthcare-education">Healthcare & Education</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-black font-semibold mb-2">Project Location in Bangalore</label>
                <input
                  type="text"
                  name="project_location"
                  value={formData.project_location}
                  onChange={handleInputChange}
                  placeholder="e.g., Whitefield, Electronic City, Koramangala, HSR Layout"
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
                  placeholder="Tell us about your project requirements..."
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
                  Thank you! We&apos;ll contact you soon with your Bangalore 3D walkthrough quote.
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
