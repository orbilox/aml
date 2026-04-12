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

export default function ConstructionUpdateVideosClient() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", project_type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const portfolioProjects: Project[] = [
    { id: 1, title: "Pyramid Alban", category: "Construction Update", image: "/images/portfolio/10.png", description: "Monthly construction progress documentation with aerial and ground-level footage.", videoUrl: "https://www.youtube.com/embed/QDJxopvP4Ro?si=y4M05nZkVgJPmB9U&autoplay=1", duration: "3:45" },
    { id: 2, title: "Smart World The Edition", category: "Construction Update", image: "/images/portfolio/11.png", description: "Comprehensive construction timeline documentation for premium residential project.", videoUrl: "https://www.youtube.com/embed/4RebMEfQr3Y?si=y4M05nZkVgJPmB9U&autoplay=1", duration: "4:12" },
    { id: 3, title: "Central Ikon", category: "Construction Update", image: "/images/portfolio/Central-Ikon-Thumbnail.png", description: "Regular construction progress updates showcasing structural milestones.", videoUrl: "https://www.youtube.com/embed/k2jFPH49J0U?autoplay=1", duration: "2:58" },
    { id: 4, title: "The Kutumb", category: "Construction Update", image: "/images/portfolio/Kutumb-Thumbnail.png", description: "Detailed construction documentation with drone and time-lapse footage.", videoUrl: "https://www.youtube.com/embed/ZLblD-AEilk?autoplay=1", duration: "3:22" },
  ];

  const testimonials = [
  {
    name: "Abhishek Patel",
    position: "Marketing Manager",
    company: "Smart World Developers",
    content:
      "Working with Alliance Media Labs on the construction update videos for The Edition has been a smooth experience throughout our yearly engagement. The consistency, timelines, and overall real estate construction progress video production have been well maintained across deliverables.",
  },
  {
    name: "Pooran Tomar",
    position: "Head of Marketing",
    company: "Aditya Builders",
    content:
      "Alliance Media Labs handled the construction update videos for Aditya Builders’ project The Kutumb with a clear and consistent approach. The overall real estate construction progress video came out clean, timely, and easy to follow.",
  },
  {
    name: "Shresth",
    position: "Digital Marketing",
    company: "Pyramid Infratech",
    content:
      "For the past year, Alliance Media Labs has been delivering construction update videos for our project Alban in Gurugram with great consistency every time.",
  },
  {
    name: "Kapil Sharma",
    position: "Marketing Head",
    company: "GMI Infra",
    content:
      "GMI Infra partnered with Alliance Media Labs for the construction update videos of GMI Elite Homes, and the whole process felt well-managed from start to finish. The updates were presented clearly, and the overall real estate construction progress video maintained a professional flow.",
  },
];

  const features = [
    { icon: "ri-flight-takeoff-line", title: "Drone Cinematography", desc: "Professional aerial footage capturing construction progress from unique perspectives and heights." },
    { icon: "ri-calendar-line", title: "Regular Updates", desc: "Scheduled monthly or quarterly shoots to document every milestone of your construction journey." },
    { icon: "ri-time-line", title: "Time-Lapse Creation", desc: "Stunning time-lapse sequences compressing months of construction into compelling short videos." },
    { icon: "ri-shield-check-line", title: "Safety Compliance", desc: "All shoots conducted with proper safety protocols and regulatory compliance for construction sites." },
    { icon: "ri-hd-line", title: "4K Quality", desc: "Ultra-high-definition footage ensuring crystal-clear documentation for all presentation needs." },
    { icon: "ri-cloud-line", title: "Cloud Delivery", desc: "Secure cloud-based delivery system for easy access and sharing of all construction update videos." },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          subject: `Construction Update Videos Inquiry - ${formData.name}`,
          from_name: formData.name,
          from_email: formData.email,
          message: `New Construction Update Videos Inquiry\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\nProject Type: ${formData.project_type || "Not specified"}\n\nProject Details:\n${formData.message || "No additional details provided"}`,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus("success");
        setTimeout(() => {
          setFormData({ name: "", email: "", phone: "", project_type: "", message: "" });
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
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://readdy.ai/api/search-image?query=construction%20site%20aerial%20view%2C%20drone%20footage%2C%20building%20under%20construction%2C%20modern%20real%20estate%20development&width=1440&height=900&seq=construction-hero&orientation=landscape')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">Construction Update Videos for Real Estate India</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-lg">
              Professional construction progress documentation with aerial drone footage and cinematic time-lapse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open("https://calendly.com/lakshay-alliancemedialabs/30min?month=2025-10", "_blank")}
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap"
              >
                Book a Demo
              </button>
              <Link href="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap">
                View Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Comprehensive Progress Documentation</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Professional construction documentation services to keep stakeholders informed and create compelling marketing content.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f) => (
                <div key={f.title} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
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

        {/* Portfolio Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Construction Update Portfolio</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Explore our construction documentation projects across major real estate developments.
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
                    <img src={project.image} alt={project.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                        <i className="ri-play-fill text-2xl text-black"></i>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">{project.duration}</div>
                    <div className="absolute bottom-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">{project.category}</div>
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

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Why Construction Videos Matter</h2>
                <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
                <div className="space-y-6">
                  {[
                    { title: "Stakeholder Communication", desc: "Keep investors, buyers, and management informed with regular visual progress reports." },
                    { title: "Marketing Content", desc: "Transform construction documentation into powerful marketing material that builds buyer confidence." },
                    { title: "Quality Documentation", desc: "Create a comprehensive visual record of the construction process for quality assurance." },
                    { title: "Timeline Tracking", desc: "Visual timeline documentation helps identify and communicate project milestones effectively." },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="ri-check-line text-black text-sm"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=construction%20site%20progress%20documentation%2C%20aerial%20view%2C%20real%20estate%20development%2C%20professional%20photography&width=600&height=400&seq=construction-benefits&orientation=landscape"
                  alt="Construction Documentation"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover object-top"
                />
              </div>
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

        {/* RERA Compliance Highlight */}
<section className="py-16 bg-yellow-400">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center flex-shrink-0">
        <i className="ri-shield-check-line text-3xl text-yellow-400"></i>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-black mb-3">RERA Compliant Construction Documentation</h2>
        <p className="text-gray-800 text-lg leading-relaxed">Under RERA regulations, developers must update buyers on construction progress at regular intervals. Our monthly construction update videos serve as verified visual evidence — keeping you compliant while building buyer confidence throughout the construction period.</p>
      </div>
    </div>
  </div>
</section>

        {/* Process Section */}
<section className="py-24 bg-gray-50">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">How It Works</h2>
      <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { num: "01", title: "Site Visit", desc: "Our crew visits the site on a scheduled date — monthly, bi-monthly, or per milestone." },
        { num: "02", title: "Shoot", desc: "We capture all construction zones, floors, and key structural milestones with ground and aerial footage." },
        { num: "03", title: "Edit & Grade", desc: "Footage is colour-graded, branded with your project identity, and edited to a crisp 2–3 minute update." },
        { num: "04", title: "Deliver", desc: "Final video delivered within 5 working days — ready for WhatsApp broadcast, email, and RERA submission." },
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

        {/* FAQ Section */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Frequently Asked Questions</h2>
      <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
    </div>
    <div className="max-w-3xl mx-auto space-y-4">
      {[
        { q: "How frequently should construction update videos be done?", a: "We recommend monthly shoots for active construction phases and quarterly for foundation or finishing stages. Many developers align shoots with RERA reporting cycles." },
        { q: "Are construction update videos useful for RERA compliance?", a: "Yes. RERA requires developers to provide regular construction updates to buyers. Our branded videos serve as verified visual documentation that you can share with buyers and regulatory authorities." },
        { q: "Do you handle drone permissions for construction sites?", a: "Yes. Our DGCA-licensed drone pilots manage all permissions and compliance for aerial footage at construction sites across India." },
        { q: "Can we get a subscription or retainer plan?", a: "Yes. We offer monthly retainer packages for ongoing documentation — ideal for projects with 12–36 month construction timelines. Contact our experts for retainer pricing." },
        { q: "How quickly do we receive the edited video after the shoot?", a: "Edited videos are delivered within 5–7 working days of the shoot date. Rush delivery in 3 days is available for urgent requirements." },
        { q: "How much does a construction update video cost?", a: "Pricing depends on frequency, site size, and whether aerial footage is included. Contact our experts for a customised retainer package." },
      ].map((faq, i) => (
        <div key={i} className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow">
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
      <h2 className="text-3xl font-bold text-black mb-4">Construction Video Pricing</h2>
      <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
      <p className="text-gray-600 mb-8">Monthly retainer packages and per-shoot pricing available. Pricing depends on frequency, site size, and aerial footage requirements. Contact our experts for a custom package.</p>
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
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Start Your Construction Documentation</h2>
                <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
                <p className="text-lg text-black/80">Ready to document your construction journey? Contact us for a custom quote.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Update Frequency</label>
                      <select name="project_type" value={formData.project_type} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm">
                        <option value="">Select frequency</option>
                        <option value="monthly">Monthly Updates</option>
                        <option value="quarterly">Quarterly Updates</option>
                        <option value="milestone">Milestone-Based</option>
                        <option value="weekly">Weekly Updates</option>
                        <option value="other">Custom Schedule</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm" placeholder="Tell us about your construction project..."></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-yellow-400 text-black py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-50">
                    {isSubmitting ? "Sending..." : "Get Your Quote"}
                  </button>
                  {submitStatus === "success" && <p className="text-green-600 text-center font-medium">Thank you! We&apos;ll get back to you within 24 hours.</p>}
                  {submitStatus === "error" && <p className="text-red-600 text-center font-medium">Something went wrong. Please try again.</p>}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />

      {/* Video Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedProject(null)} className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors">
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
