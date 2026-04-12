"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const features = [
  {
    icon: "ri-camera-line",
    title: "Cinematic Quality",
    description:
      "Hollywood-grade production values with professional lighting, smooth camera movements, and artistic composition.",
  },
  {
    icon: "ri-home-4-line",
    title: "Lifestyle Storytelling",
    description:
      "Immersive narratives that showcase how spaces will be lived in, creating emotional connections with viewers.",
  },
  {
    icon: "ri-lightbulb-line",
    title: "Lighting Design",
    description:
      "Sophisticated lighting scenarios showcasing spaces throughout different times of day and usage patterns.",
  },
  {
    icon: "ri-palette-line",
    title: "Material Showcase",
    description:
      "Detailed presentation of premium finishes, textures, and materials with photorealistic accuracy.",
  },
  {
    icon: "ri-focus-3-line",
    title: "Spatial Flow",
    description:
      "Seamless transitions between spaces highlighting the natural flow and connectivity of interior layouts.",
  },
  {
    icon: "ri-music-2-line",
    title: "Audio Integration",
    description:
      "Professional sound design and music composition that enhances the emotional impact of the visual experience.",
  },
];

const benefits = [
  "Enhanced emotional connection with potential buyers",
  "Premium presentation of interior design and finishes",
  "Effective pre-sales marketing for luxury developments",
  "Reduced need for physical model apartments",
  "Compelling content for digital marketing campaigns",
  "Professional showcase of lifestyle and ambiance",
];

const portfolioItems = [
  {
    title: "Hero Homes, Ludhiana",
    image:
      "https://readdy.ai/api/search-image?query=Cinematic%20interior%20walkthrough%20of%20luxury%20villa%20showcasing%20elegant%20living%20spaces%2C%20modern%20kitchen%2C%20sophisticated%20bedroom%2C%20marble%20bathrooms%2C%20high-end%20furniture%20and%20fixtures%2C%20warm%20ambient%20lighting%2C%20professional%20real%20estate%20photography%20style&width=600&height=400&seq=interior-portfolio-1&orientation=landscape",
    description:
      "Immersive interior walkthrough highlighting the sophisticated apartment interiors with premium finishes, modern amenities, and elegant design elements",
  },
  {
    title: "Modern Apartment Showcase",
    image:
      "https://readdy.ai/api/search-image?query=Contemporary%20apartment%20interior%20cinematic%20tour%20showing%20open%20plan%20living%2C%20designer%20kitchen%2C%20master%20bedroom%2C%20and%20balcony%20views%2C%20modern%20furniture%20styling%2C%20natural%20lighting%2C%20sophisticated%20interior%20design&width=600&height=400&seq=interior-portfolio-2&orientation=landscape",
    description:
      "Stylish apartment interior presentation highlighting modern design and urban living",
  },
  {
    title: "Penthouse Luxury Experience",
    image:
      "https://readdy.ai/api/search-image?query=Luxury%20penthouse%20interior%20walkthrough%20featuring%20panoramic%20city%20views%2C%20premium%20materials%2C%20designer%20furniture%2C%20wine%20cellar%2C%20home%20theater%2C%20and%20rooftop%20terrace%2C%20cinematic%20lighting%20and%20composition&width=600&height=400&seq=interior-portfolio-3&orientation=landscape",
    description:
      "Exclusive penthouse interior tour showcasing ultimate luxury living and premium amenities",
  },
];

export default function InteriorCinematicClient() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Cinematic%20interior%20of%20luxury%20modern%20living%20room%20with%20elegant%20furniture%2C%20warm%20ambient%20lighting%2C%20large%20windows%20with%20city%20views%2C%20professional%20interior%20photography%2C%20sophisticated%20design%20elements%2C%20premium%20materials%20and%20finishes&width=1920&height=1080&seq=interior-hero-bg&orientation=landscape')`,
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Interior Cinematic Walkthrough Videos India
</h1>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Immersive interior walkthroughs that highlight premium finishes,
              spatial flow, and lifestyle experiences within luxury properties
              through cinematic storytelling and professional production.
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
              Cinematic Walkthrough Features
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional interior cinematography that creates emotional
              connections and showcases luxury living experiences
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
                Why Choose Interior Cinematic Walkthroughs?
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
              <p className="text-xl text-gray-600 mb-8">
                Cinematic interior walkthroughs create powerful emotional
                connections and effectively showcase the luxury lifestyle your
                properties offer.
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
                src="https://readdy.ai/api/search-image?query=Professional%20interior%20cinematography%20setup%20with%20camera%20equipment%2C%20lighting%20gear%2C%20and%20crew%20filming%20luxury%20apartment%20interior%2C%20modern%20production%20equipment%2C%20sophisticated%20interior%20design%20background&width=600&height=500&seq=interior-benefits&orientation=landscape"
                alt="Interior Cinematic Production"
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
              Interior Walkthrough Portfolio
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our cinematic interior walkthroughs showcasing luxury
              properties and premium lifestyle experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gray-900 mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <i className="ri-play-circle-line text-4xl mb-2"></i>
                      <p className="text-sm">View Walkthrough</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Production Process</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { num: "01", title: "Floor Plan Input", desc: "Share your floor plans, elevation drawings, and material finishes palette." },
              { num: "02", title: "3D Modelling", desc: "We build photorealistic 3D interiors — furniture, lighting, materials, and accessories." },
              { num: "03", title: "Lighting Setup", desc: "Cinematic lighting rigs simulate natural and artificial light at different times of day." },
              { num: "04", title: "Render & Grade", desc: "High-resolution frames rendered and colour-graded to cinematic quality." },
              { num: "05", title: "Final Delivery", desc: "4K walkthrough video with music, brand overlays, and all requested cut-downs." },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-black">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Production Specifications</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "ri-4k-line", title: "4K Resolution", desc: "3840×2160 cinema-grade output" },
              { icon: "ri-music-2-line", title: "Sound Design", desc: "Professional music & ambient audio" },
              { icon: "ri-palette-line", title: "Colour Grading", desc: "Cinematic LUT-graded colour" },
              { icon: "ri-film-line", title: "Multiple Cut-downs", desc: "30s, 60s & 90s social edits included" },
            ].map((item) => (
              <div key={item.title} className="bg-gray-900 rounded-2xl p-6 border border-gray-800 text-center hover:border-yellow-400 transition-colors">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${item.icon} text-xl text-black`}></i>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
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
              { q: "What is the difference between a 3D walkthrough and an interior cinematic walkthrough?", a: "A standard 3D walkthrough covers the entire project — exteriors, amenities, and multiple unit types — at a high level. An interior cinematic walkthrough focuses exclusively on the interior of a single typology, with cinematic lighting, rich material detail, and a film-grade look." },
              { q: "How many typologies can be covered in one project?", a: "Each typology (e.g. 2BHK, 3BHK, penthouse) is treated as a separate production. We offer package discounts for multiple typologies in a single project." },
              { q: "What inputs do you need from us?", a: "Floor plans, interior design intent (mood board or reference images), material specifications (flooring, wall finish, furniture style), and any specific camera angles or lifestyle moments you want highlighted." },
              { q: "How long is the delivery timeline?", a: "A single typology cinematic walkthrough takes 4–6 weeks from brief to final delivery. Multiple typologies are delivered in phased milestones." },
              { q: "Can we use the video for Instagram and social media ads?", a: "Yes. We deliver the full 2–3 minute cinematic alongside 30-second and 60-second social cuts optimised for Instagram Reels, YouTube Shorts, and Meta ads." },
              { q: "How much does an interior cinematic walkthrough cost?", a: "Pricing depends on the level of interior detail, number of typologies, and output requirements. Contact our experts for a tailored quote." },
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
            <h2 className="text-3xl font-bold text-black mb-4">Interior Cinematic Pricing</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-600 mb-8">Pricing is based on the number of typologies, level of interior detail, and output deliverables. Contact our experts for a package tailored to your project.</p>
            <a href="/contact" className="inline-flex items-center bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
              <i className="ri-phone-line mr-2"></i>Contact Our Experts
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Related Services</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "3D Walkthrough Videos", desc: "Full project walkthroughs covering exteriors, amenities, and multiple unit types.", href: "/services/3d-walkthrough-videos", icon: "ri-video-line" },
              { name: "Virtual Reality Tours", desc: "Interactive VR experiences letting buyers explore spaces at their own pace.", href: "/services/virtual-reality-tours", icon: "ri-vr-goggles-line" },
              { name: "3D Renders & Isometrics", desc: "Photorealistic still images for brochures, hoardings, and digital ads.", href: "/services/3d-renders-isometrics", icon: "ri-image-3d-line" },
            ].map((s) => (
              <a key={s.href} href={s.href} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-yellow-400 transition-colors group">
                <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className={`${s.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.name}</h3>
                <p className="text-gray-400 mb-4">{s.desc}</p>
                <span className="text-yellow-400 font-semibold text-sm">Learn more →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Showcase Your Interiors?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us create cinematic interior walkthroughs that captivate your
            audience and showcase the luxury lifestyle your properties offer.
          </p>
          <Link
            href="/contact"
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
