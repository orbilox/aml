"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sherin Rajan",
    position: "Marketing Manager",
    company: "Hero Realty",
    content:
      "We recently collaborated with Alliance Media for a location video of The Palatial, and they delivered exceptional work. Their attention to detail, creative approach, and seamless execution truly elevated the showcase. Highly recommend them for premium real estate visual storytelling.",
  },
  {
    name: "Akhil Gupta",
    position: "Managing Director",
    company: "Etereo Realty",
    content:
      "Alliance Media Labs handled everything for our latest project Etereo 1, Goa. They delivered a complete end-to-end real estate marketing solution for us, including high-quality 3D walkthroughs, isometric designs, teaser videos, reels, and 3D renders, with great attention to detail. The overall real estate visualisation and video marketing really helped us present the project more effectively to our buyers.",
  },
  {
    name: "Jayanta Ghosh",
    position: "Head of Marketing",
    company: "Aura World",
    content:
      "Alliance Media Labs created an impressive AI-powered 3D walkthrough in just 7 days for Aura Vantaje, Gurugram, helping us visualise the commercial project with great clarity. The experience was great, the team is highly professional and they truly added real value to our real estate presentation and virtual walkthrough marketing.",
  },
  {
    name: "Pratibha Mishra",
    position: "Marketing Manager",
    company: "Peninsula Land Ltd.",
    content:
      "We partnered with Alliance Media Labs for a bulk order of 15 AI-generated reels across multiple projects in Maharashtra, and the output was really impressive. One of the videos even reached 1.9M views on Instagram, which speaks for the quality and impact. Great work by the team.",
  },
  {
    name: "Ajeet Mehta",
    position: "Director",
    company: "SRMG",
    content:
      "For Shree Radha Gopal Residency, Kosi, Alliance Media Labs delivered architectural scale model, 3D walkthrough, renders, a 360 interactive virtual tour, and a location AV exactly the way we had envisioned. Everything felt well thought-through, and the overall real estate visualisation and virtual tour execution came out clean and impactful.",
  },
  {
    name: "Alok Agnihotri",
    position: "OSD Marketing",
    company: "Sanfran Group",
    content:
      "We onboarded Alliance Media Labs for the virtual reality tour of our project Sanfran Sarovar Heights to highlight nearby landmarks, and the outcome was exceptional. The execution was smooth, delivery was on time, and after this experience, we’ve continued working with them, with over 7 real estate virtual tours completed for our projects so far.",
  },
  {
    name: "Abhishek Patel",
    position: "Marketing Manager",
    company: "Smart World Developers",
    content:
      "Working with Alliance Media Labs on the construction update videos for The Edition has been a smooth experience throughout our yearly engagement. The consistency, timelines, and overall real estate construction progress video production have been well maintained across deliverables.",
  },
  {
    name: "Aqil Khan",
    position: "Marketing Manager",
    company: "ATS Homekraft",
    content:
      "ATS Homekraft associated with Alliance Media Labs for Location AV across Province D’olympia, Bonheur Hub, and The Grove, and the experience has been consistently reliable. Handling multiple projects together, their team maintained strong quality, creative storytelling and smooth delivery across all real estate visualisation and marketing content.",
  },
  {
    name: "Nishant Jha",
    position: "Marketing Manager",
    company: "Eka Life & Dhoot Group",
    content:
      "Alliance Media Labs worked on the infographical location AV for our project Altura, and the way they broke down the location details was really well done. It came out clean, informative, and worked perfectly as a real estate location video.",
  },
  {
    name: "Pooran Tomar",
    position: "Head of Marketing",
    company: "Aditya Builders",
    content:
      "Alliance Media Labs handled the construction update videos for Aditya Builders’ project The Kutumb with a clear and consistent approach. The overall real estate construction progress video came out clean, timely, and easy to follow.",
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
  {
    name: "Aditya Developers",
    logo: "/images/testimonial/Aditya-Developers.png",
  },
  { name: "Alphacorp", logo: "/images/testimonial/Alphacorp-Logo.png" },
  { name: "Pyramid", logo: "/images/testimonial/Pyramid-Logo.png" },
  { name: "Westway", logo: "/images/testimonial/Westway-Logo.png" },
  { name: "Shapoorji", logo: "/images/testimonial/Shapoorji-Logo.png" },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* Client Logos */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-black mb-8">
            Trusted by Leading Developers
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="hover:scale-105 transition-transform duration-300 flex items-center justify-center w-36 h-20"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 max-w-32 object-contain opacity-70 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          className="!pb-12"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="!h-auto flex">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col w-full h-full">
                {/* Top */}
                <div>
                  <h4 className="font-bold text-black">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                  <p className="text-sm text-yellow-600 font-medium mb-4">
                    {testimonial.company}
                  </p>

                  <div className="flex text-yellow-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-sm"></i>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}