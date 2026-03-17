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
              Interior Cinematic Walkthrough
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
