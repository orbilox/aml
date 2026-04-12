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

export default function DroneShootsClient() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", project_type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const portfolioProjects: Project[] = [
    { id: 1, title: "Province D Olympia, Noida", category: "Location AV", image: "/images/portfolio/3.png", description: "Aerial showcase highlighting Province D Olympia's prime connectivity and surroundings.", videoUrl: "VPTirPc5a1I?si=y4M05nZkVgJPmB9U&autoplay=1", duration: "4:41" },
    { id: 2, title: "Altura DXP 92, Gurugram", category: "Location AV", image: "/images/portfolio/26.png", description: "Stunning aerial footage showcasing Altura DXP 92's strategic location in Gurugram.", videoUrl: "z6RclcDFWAA?si=y4M05nZkVgJPmB9U&autoplay=1", duration: "5:14" },
    { id: 3, title: "Shree Radha Gopal Residency, Kosi", category: "Location AV", image: "/images/portfolio/27.png", description: "Comprehensive aerial tour showcasing the residency's peaceful location and surroundings.", videoUrl: "nl1xegGywlc?si=y4M05nZkVgJPmB9U&autoplay=1", duration: "4:54" },
    { id: 4, title: "Aura, Sector 79, Gurugram", category: "Location AV", image: "/images/portfolio/34.png", description: "Dynamic aerial footage highlighting Aura's premium location in Sector 79, Gurugram.", videoUrl: "-6icu6ALbr4?si=0H-4fGbiNLi3y0fG&autoplay=1", duration: "3:18" },
  ];
  const testimonials = [
  {
    name: "Aqil Khan",
    position: "Marketing Manager",
    company: "ATS Homekraft",
    content:
      "ATS Homekraft associated with Alliance Media Labs for Location AV across Province D’olympia, Bonheur Hub, and The Grove, and the experience has been consistently reliable. Handling multiple projects together, their team maintained strong quality, creative storytelling, and smooth delivery across all real estate visualisation and marketing content.",
  },
  {
    name: "Nishant Jha",
    position: "Marketing Manager",
    company: "Eka Life & Dhoot Group",
    content:
      "Alliance Media Labs worked on the infographical location AV for our project Altura, and the way they broke down the location details was really well done. It came out clean, informative, and worked perfectly as a real estate location video.",
  },
  {
    name: "Sherin Rajan",
    position: "Marketing Manager",
    company: "Hero Realty",
    content:
      "We recently collaborated with Alliance Media for a location video of The Palatial, and they delivered exceptional work. Their attention to detail, creative approach, and seamless execution truly elevated the showcase. Highly recommend them for premium real estate visual storytelling.",
  },
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
          subject: `Drone Shoots Inquiry - ${formData.name}`,
          from_name: formData.name,
          from_email: formData.email,
          message: `New Drone Shoots Inquiry\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\nProject Type: ${formData.project_type || "Not specified"}\n\nProject Details:\n${formData.message || "No additional details provided"}`,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus("success");
        setTimeout(() => { setFormData({ name: "", email: "", phone: "", project_type: "", message: "" }); setSubmitStatus("idle"); }, 3000);
      } else throw new Error();
    } catch { setSubmitStatus("error"); } finally { setIsSubmitting(false); }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20drone%20aerial%20photography%20real%20estate%20property%20cinematic%20overhead%20view&width=1920&height=1080&seq=drone-hero&orientation=landscape')` }}></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mb-8">
                <i className="ri-flight-takeoff-line text-3xl text-black"></i>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">Drone Shoots & Location AV for Real Estate India</h1>
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg">Professional aerial cinematography and location AV services that showcase your property&apos;s surroundings with breathtaking drone footage.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer">Get Quote</Link>
                <Link href="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer">View Portfolio</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Location AV</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">Showcase your property&apos;s location advantages with breathtaking aerial footage and professional cinematography</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "ri-camera-3-line", title: "4K Aerial Footage", desc: "Ultra-high definition aerial cinematography capturing stunning views and location context." },
                { icon: "ri-map-2-line", title: "Location Showcase", desc: "Highlight proximity to amenities, transportation, and key landmarks that add property value." },
                { icon: "ri-sun-line", title: "Golden Hour Shoots", desc: "Optimal timing for cinematic lighting that creates warm, inviting aerial perspectives." },
                { icon: "ri-movie-2-line", title: "Cinematic Movements", desc: "Professional camera movements including reveals, orbits, and dynamic tracking shots." },
                { icon: "ri-shield-check-line", title: "Licensed Operations", desc: "Fully licensed drone pilots with comprehensive insurance and regulatory compliance." },
                { icon: "ri-edit-2-line", title: "Professional Editing", desc: "Expert post-production with color grading, stabilization, and cinematic finishing." },
              ].map((f, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
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

        {/* Portfolio */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Aerial Photography Portfolio</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">Stunning aerial footage showcasing properties and locations from breathtaking perspectives</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={() => setSelectedProject(project)}>
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
            <div className="text-center mt-12">
              <Link href="/portfolio" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer">View Our Portfolio</Link>
            </div>
          </div>
        </section>

        {/* Aerial Video Services */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Aerial Video Services</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: "ri-building-line", title: "Property Overview Videos", desc: "Comprehensive aerial tours showcasing the entire property, surrounding area, and key features from unique perspectives.", items: ["360-degree property reveals", "Neighbourhood context shots", "Amenity proximity highlights"] },
                { icon: "ri-road-map-line", title: "Location Advantage Videos", desc: "Strategic aerial footage highlighting transportation links, commercial centers, schools, and lifestyle amenities.", items: ["Transportation connectivity", "Commercial district proximity", "Recreational facility access"] },
                { icon: "ri-landscape-line", title: "Lifestyle & Environment", desc: "Showcase the lifestyle and environmental benefits of the location with beautiful aerial cinematography.", items: ["Natural landscape features", "Parks and green spaces", "Waterfront or scenic views"] },
                { icon: "ri-time-line", title: "Time-Lapse Documentation", desc: "Long-term aerial time-lapse projects capturing seasonal changes and area development over time.", items: ["Seasonal transformation", "Development progress", "Infrastructure improvements"] },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                    <i className={`${s.icon} text-2xl text-black`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">{s.title}</h3>
                  <p className="text-gray-600 mb-6">{s.desc}</p>
                  <ul className="space-y-2 text-gray-600">
                    {s.items.map((item, j) => (
                      <li key={j} className="flex items-center space-x-2">
                        <i className="ri-check-line text-yellow-400"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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

        {/* DGCA Credentials */}
<section className="py-16 bg-black">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-white mb-4">Fully Compliant & Certified Operations</h2>
      <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
    </div>
    <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
      {[
        { icon: "ri-government-line", title: "DGCA Certified", desc: "All pilots hold valid DGCA Remote Pilot Licences (RPL) as mandated by Indian aviation law." },
        { icon: "ri-shield-check-line", title: "Insured Operations", desc: "Full liability insurance on every shoot — protecting your project and our crew." },
        { icon: "ri-moon-line", title: "Night & Golden Hour", desc: "Equipped for twilight and golden hour shoots with low-light optimised drones and lenses." },
      ].map((item) => (
        <div key={item.title} className="bg-gray-900 rounded-2xl p-8 border border-yellow-400 text-center">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className={`${item.icon} text-2xl text-black`}></i>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
          <p className="text-gray-400">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Process */}
<section className="py-24 bg-gray-50">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-black mb-4">Our Drone Shoot Process</h2>
      <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { num: "01", title: "Permissions", desc: "We handle all DGCA permissions, local authority approvals, and airspace clearances before the shoot." },
        { num: "02", title: "Shoot Day", desc: "Our pilots execute the shot list at optimal lighting — dawn, golden hour, or day as planned." },
        { num: "03", title: "Edit & Grade", desc: "Raw 4K footage is colour-graded, stabilised, and edited with music and motion graphics." },
        { num: "04", title: "Delivery", desc: "Final edit delivered in broadcast-quality MP4 and optimised versions for digital ads and social." },
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
        { q: "Are your drone operators DGCA certified?", a: "Yes. Every Alliance Media Labs drone pilot holds a valid DGCA Remote Pilot Licence (RPL). We handle all regulatory permissions and airspace clearances for every shoot." },
        { q: "What happens if it rains or the weather is bad on shoot day?", a: "We monitor weather 48 hours in advance and reschedule if conditions are unsuitable. Our retainer clients get priority rescheduling at no extra cost." },
        { q: "Can you shoot near airports or in restricted areas?", a: "We apply for special airspace permissions through DGCA's Digital Sky platform. Approvals depend on the specific zone — we advise on feasibility before confirming bookings in sensitive areas." },
        { q: "What resolution is the footage shot in?", a: "We shoot in 4K (3840×2160) using DJI Mavic 3 and Inspire series drones with gimbal stabilisation. We also offer 6K and higher on request for broadcast-quality deliverables." },
        { q: "Do you also produce the edit and post-production?", a: "Yes. Every shoot package includes professional colour grading, music, and editing. We deliver broadcast-quality MP4 files ready for TV, YouTube, and digital ads." },
        { q: "How much does a drone shoot cost in India?", a: "Pricing depends on shoot duration, location, number of deliverables, and aerial complexity. Contact our experts for a custom quote." },
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
    <h2 className="text-3xl font-bold text-white mb-4">Pan-India Drone Shoot Coverage</h2>
    <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
    <p className="text-gray-400 mb-10">We operate across India with DGCA-compliant shoots in every major real estate market</p>
    <div className="flex flex-wrap justify-center gap-4">
      {["Mumbai", "Delhi NCR", "Bangalore", "Gurugram", "Pune", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad"].map((city) => (
        <span key={city} className="px-6 py-3 bg-gray-900 border border-gray-700 rounded-full text-white font-medium hover:border-yellow-400 hover:text-yellow-400 transition-colors cursor-pointer">
          {city}
        </span>
      ))}
    </div>
  </div>
</section>

        {/* Pricing */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-6">
    <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl p-12 shadow-lg">
      <h2 className="text-3xl font-bold text-black mb-4">Drone Shoot Pricing</h2>
      <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
      <p className="text-gray-600 mb-8">Pricing depends on shoot duration, location, number of deliverables, and post-production requirements. Contact our experts for a custom quote.</p>
      <a href="/contact" className="inline-flex items-center bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
        <i className="ri-phone-line mr-2"></i>Contact Our Experts
      </a>
    </div>
  </div>
</section>

        {/* Form */}
        <section className="py-24 bg-yellow-400">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Get Your Drone Shoot Quote</h2>
                <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
                <p className="text-lg text-black/80">Ready to capture stunning aerial footage? Contact us for a custom quote.</p>
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
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm" placeholder="Your phone number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Shoot Type</label>
                      <select name="project_type" value={formData.project_type} onChange={handleInputChange} className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm">
                        <option value="">Select shoot type</option>
                        <option value="aerial-photography">Aerial Photography</option>
                        <option value="aerial-videography">Aerial Videography</option>
                        <option value="construction-progress">Construction Progress</option>
                        <option value="property-showcase">Property Showcase</option>
                        <option value="site-survey">Site Survey</option>
                        <option value="marketing-content">Marketing Content</option>
                        <option value="comprehensive">Comprehensive Package</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} maxLength={500} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm resize-none" placeholder="Tell us about your drone shoot requirements, location, timeline, and any specific shots you need..."></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50">
                    {isSubmitting ? <><i className="ri-loader-4-line animate-spin"></i><span>Sending...</span></> : <><span>Send Inquiry via Email</span><i className="ri-mail-send-line"></i></>}
                  </button>
                  {submitStatus === "success" && <p className="text-green-600 text-center font-medium">Thank you! We&apos;ll get back to you within 24 hours.</p>}
                  {submitStatus === "error" && <p className="text-red-600 text-center font-medium">Sorry, there was an error. Please email us at info@alliancemedialabs.com</p>}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Elevate Your Perspective</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Capture breathtaking aerial footage that showcases your properties from every angle.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer">Book Your Shoot</Link>
              <Link href="/services" className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors whitespace-nowrap cursor-pointer">View All Services</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Video Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer z-20">
              <i className="ri-close-line text-xl"></i>
            </button>
            <div className="aspect-video">
              <iframe src={`https://www.youtube.com/embed/${selectedProject.videoUrl}`} className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen title={selectedProject.title}></iframe>
            </div>
            <div className="p-6">
              <div className="text-yellow-500 text-sm font-medium mb-2">{selectedProject.category}</div>
              <h3 className="text-2xl font-bold text-black mb-2">{selectedProject.title}</h3>
              <p className="text-gray-600">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
