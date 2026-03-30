"use client";

import { useState } from "react";
import Header from "@/components/feature/Header";
import Footer from "@/components/feature/Footer";
import Button from "@/components/base/Button";

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    timeline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const services = [
    "3D Walkthrough Videos",
    "Virtual Reality Tours",
    "3D Renders & Isometrics",
    "Interactive 3D Tools",
    "Architectural Scale Models",
    "Construction Update Videos",
    "Location AV",
    "Graphics & Branding",
    "Digital Marketing",
  ];

  const budgetRanges = [
    "₹50,000 - ₹1,00,000",
    "₹1,00,000 - ₹5,00,000",
    "₹5,00,000 - ₹10,00,000",
    "₹10,00,000 - ₹20,00,000",
    "₹20,00,000+",
  ];

  const timelines = ["ASAP", "1-2 weeks", "1 month", "2-3 months", "3+ months"];

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
          subject: `Contact Inquiry - ${formData.name}`,
          from_name: formData.name,
          from_email: formData.email,
          message: `
New Contact Inquiry

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Service Interested In: ${formData.service || "Not specified"}
Company: ${formData.company || "Not specified"}
Budget Range: ${formData.budget || "Not specified"}
Timeline: ${formData.timeline || "Not specified"}

Project Details:
${formData.message || "No additional details provided"}
          `.trim(),
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
            service: "",
            message: "",
            company: "",
            budget: "",
            timeline: "",
          });
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
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section
        className="relative pt-24 pb-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20creative%20office%20space%20with%20glass%20walls%2C%20contemporary%20architecture%2C%20professional%20meeting%20rooms%2C%20sleek%20design%20elements%2C%20warm%20lighting%2C%20minimalist%20interior%20design%2C%20business%20environment%2C%20high-tech%20workspace%2C%20clean%20lines%2C%20sophisticated%20atmosphere&width=1920&height=800&seq=contact-hero&orientation=landscape')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Let&apos;s Create
              <span className="block text-yellow-400">Something Amazing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to transform your vision into reality? We&apos;re here to
              bring your ideas to life with cutting-edge technology and creative
              excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white">
              <div className="flex items-center space-x-2">
                <i className="ri-time-line text-yellow-400"></i>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-award-line text-yellow-400"></i>
                <span>Award Winning</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-global-line text-yellow-400"></i>
                <span>Global Reach</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Start Your Project
                </h2>
                <p className="text-gray-400">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="+91 1234567890"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Service Interested In
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400 transition-colors appearance-none pr-8"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Budget Range
                    </label>
                    <div className="relative">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400 transition-colors appearance-none pr-8"
                      >
                        <option value="">Select budget</option>
                        {budgetRanges.map((budget, index) => (
                          <option key={index} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                      <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Timeline
                    </label>
                    <div className="relative">
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400 transition-colors appearance-none pr-8"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline, index) => (
                          <option key={index} value={timeline}>
                            {timeline}
                          </option>
                        ))}
                      </select>
                      <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    maxLength={500}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  ></textarea>
                  <div className="text-right text-gray-500 text-xs mt-1">
                    {formData.message.length}/500 characters
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="ri-send-plane-line ml-2"></i>
                    </>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 text-green-400 text-center">
                    <i className="ri-check-line mr-2"></i>
                    Thank you! We&apos;ll get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 text-red-400 text-center">
                    <i className="ri-error-warning-line mr-2"></i>
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Ready to elevate your real estate marketing? Our team of
                  experts is here to help you create stunning visual content
                  that sells properties faster and at better prices.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-400/20 rounded-xl p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <i className="ri-phone-line text-black text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Call Us</h3>
                      <div className="space-y-1">
                        <a
                          href="tel:+919988931093"
                          className="text-gray-300 hover:text-yellow-400 transition-colors block"
                        >
                          +91 9988931093
                        </a>
                        <a
                          href="tel:+919999916744"
                          className="text-gray-300 hover:text-yellow-400 transition-colors block"
                        >
                          +91 9999916744
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <i className="ri-mail-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        Email Us
                      </h3>
                      <a
                        href="mailto:info@alliancemedialabs.com"
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        info@alliancemedialabs.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-xl p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <i className="ri-map-pin-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        Visit Us
                      </h3>
                      <a
                        href="https://maps.google.com/?q=D-244,+Sector+74,+Chandigarh,+Mohali"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-green-400 transition-colors"
                      >
                        D-244, 3rd Floor, Unit-4, Sector 74, Mohali, Chandigarh
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/company/alliance-media-labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black text-white transition-colors"
                  >
                    <i className="ri-linkedin-fill text-xl"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/alliancemedialabs?igsh=MWpsbzI5emhubXNxNA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black text-white transition-colors"
                  >
                    <i className="ri-instagram-line text-xl"></i>
                  </a>
                  <a
                    href="https://youtube.com/@alliancemedialabs?si=N8VEH2cFnl111cDM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black text-white transition-colors"
                  >
                    <i className="ri-youtube-line text-xl"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1KC5TqxSQL/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black text-white transition-colors"
                  >
                    <i className="ri-facebook-fill text-xl"></i>
                  </a>
                </div>
              </div>

              {/* Quick Demo */}
              <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-xl p-6 text-center">
                <h3 className="text-white font-semibold mb-2">
                  Need a Quick Demo?
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Book a 30-minute call to see our work in action
                </p>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() =>
                    window.open(
                      "https://calendly.com/lakshay-alliancemedialabs/30min?month=2025-10",
                      "_blank",
                    )
                  }
                >
                  <i className="ri-calendar-line mr-2"></i>
                  Book Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Find Us</h2>
            <p className="text-gray-400">
              Located in the heart of Chandigarh&apos;s tech hub
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.2886057800215!2d76.6853307!3d30.702913599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef0efbb4a3e7%3A0xd142d88e1f7bc21a!2sAlliance%20Media%20Labs!5e1!3m2!1sen!2sin!4v1768410985617!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alliance Media Labs Location"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
