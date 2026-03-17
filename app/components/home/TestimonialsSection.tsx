const testimonials = [
  {
    name: "Sherin Rajan",
    position: "Marketing Manager",
    company: "Hero Realty",
    content:
      "We recently collaborated with Alliance Media for a location video of The Palatial, and they delivered exceptional work. Their attention to detail, creative approach, and seamless execution truly elevated the showcase. Highly recommend them for premium real estate visual storytelling.",
    avatar: "/images/testimonial/2.jpg",
  },
];

const clientLogos = [
  { name: "ATS", logo: "/images/testimonial/ATS.png" },
  { name: "Hero Homes", logo: "/images/testimonial/Hero Homes.png" },
  { name: "Smartworld", logo: "/images/testimonial/Smartworld.png" },
  { name: "Eka", logo: "/images/testimonial/Eka.png" },
  { name: "Etereo", logo: "/images/testimonial/Etereo.png" },
  { name: "Experion", logo: "/images/testimonial/Experion.png" },
  { name: "Fute", logo: "/images/testimonial/Fute.png" },
  { name: "Gulnaar", logo: "/images/testimonial/Gulnaar.png" },
  { name: "OPS", logo: "/images/testimonial/OPS.png" },
  { name: "SRMG", logo: "/images/testimonial/SRMG.png" },
  { name: "TRG", logo: "/images/testimonial/TRG.png" },
  { name: "GMI", logo: "/images/testimonial/GMI-Infra-logo.png" },
  { name: "Prime", logo: "/images/testimonial/Prime-Developments-Logo.png" },
  { name: "Rajdarbar", logo: "/images/testimonial/Rajdarbar-Ventures.png" },
  { name: "SAP", logo: "/images/testimonial/SAP-Logo.png" },
  { name: "Soul-n-Fuel", logo: "/images/testimonial/Soul-n-Fuel.png" },
  { name: "Aura", logo: "/images/testimonial/Aura_Logo.png" },
  { name: "Peninsula", logo: "/images/testimonial/Peninsula-Logo.png" },
  { name: "Sanfran", logo: "/images/testimonial/Sanfran-logo.png" },
  { name: "ATS 2", logo: "/images/testimonial/ATS-Logo.png" },
  { name: "Aditya Developers", logo: "/images/testimonial/Aditya-Developers.png" },
  { name: "Alphacorp", logo: "/images/testimonial/Alphacorp-Logo.png" },
  { name: "Pyramid", logo: "/images/testimonial/Pyramid-Logo.png" },
  { name: "Westway", logo: "/images/testimonial/Westway-Logo.png" },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Client Logos */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-black mb-8">Trusted by Leading Developers</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="hover:scale-105 transition-transform duration-300 flex items-center justify-center w-36 h-20"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 max-w-32 w-auto h-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="font-bold text-black">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-yellow-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-sm"></i>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">&ldquo;{testimonial.content}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
