"use client";
import { useState } from "react";
import Button from "@/components/base/Button";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project_type: "",
    budget: "",
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
          subject: `Contact Form Inquiry - ${formData.name}`,
          from_name: formData.name,
          from_email: formData.email,
          message: `New Contact Form Submission\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "Not provided"}\nProject Type: ${formData.project_type || "Not specified"}\nBudget Range: ${formData.budget || "Not specified"}\n\nProject Details:\n${formData.message || "No additional details provided"}`,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus("success");
        setTimeout(() => {
          setFormData({ name: "", email: "", company: "", project_type: "", budget: "", message: "" });
          setSubmitStatus("idle");
        }, 6000);
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
    <section id="contact" className="py-24 bg-yellow-400">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                Let&apos;s Build Your Next Experience
              </h2>
              <div className="w-20 h-1 bg-black"></div>
            </div>
            <p className="text-lg text-black/80 leading-relaxed">
              Ready to transform your real estate marketing with cutting-edge visualization?
              Let&apos;s discuss your project and create something extraordinary together.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <i className="ri-phone-line text-xl text-yellow-400"></i>
                </div>
                <div>
                  <p className="font-semibold text-black">Phone</p>
                  <p className="text-black/80">+91 9988931093</p>
                  <p className="text-black/80">+91 9999916744</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <i className="ri-mail-line text-xl text-yellow-400"></i>
                </div>
                <div>
                  <p className="font-semibold text-black">Email</p>
                  <p className="text-black/80">info@alliancemedialabs.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <i className="ri-map-pin-line text-xl text-yellow-400"></i>
                </div>
                <div>
                  <p className="font-semibold text-black">Location</p>
                  <p className="text-black/80">D-244, 3rd Floor, Unit-4, Sector 74, Mohali, Chandigarh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                  placeholder="Your company name"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select
                    name="project_type"
                    value={formData.project_type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                  >
                    <option value="">Select project type</option>
                    <option value="3d-walkthrough">3D Walkthrough Videos</option>
                    <option value="vr-tour">Virtual Reality Tours (360°)</option>
                    <option value="construction-updates">Construction Update Videos</option>
                    <option value="drone-cinematography">Location AVs & Drone Shoots</option>
                    <option value="architectural-models">Architectural Scale Models</option>
                    <option value="3d-renders">3D Renders & Isometrics</option>
                    <option value="interactive-3d">Interactive 3D Tools</option>
                    <option value="digital-marketing">Real Estate Digital Marketing</option>
                    <option value="graphics-branding">Graphics & Branding Content</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                  >
                    <option value="">Select budget range</option>
                    <option value="50k-1lakh">INR 50,000 - 1,00,000</option>
                    <option value="1lakh-5lakh">INR 1,00,000 - 5,00,000</option>
                    <option value="5lakh-10lakh">INR 5,00,000 - 10,00,000</option>
                    <option value="over-10lakh">Over INR 10,00,000</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>
              <Button variant="primary" size="lg" className="w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center justify-center space-x-2">
                    <i className="ri-loader-4-line animate-spin"></i>
                    <span>Sending.....</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <span>Send Message via Email</span>
                    <i className="ri-mail-send-line"></i>
                  </span>
                )}
              </Button>
              {submitStatus === "success" && (
                <div className="text-green-600 text-center font-medium">
                  Thank you! We&apos;ll get back to you with a custom quote within 24 hours.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="text-red-600 text-center font-medium">
                  Sorry, there was an error. Please email us directly at info@alliancemedialabs.com
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
