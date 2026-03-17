"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostBySlug } from "../posts";

export default function BlogDetailClient({ slug }: { slug: string }) {
  const post = getPostBySlug(slug);
  if (!post) notFound();

  if (slug === "3d-walkthrough-video-service") {
    return <WalkthroughArticle post={post} />;
  }

  return notFound();
}

function WalkthroughArticle({ post }: { post: ReturnType<typeof getPostBySlug> }) {
  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Image */}
      <div className="relative h-[480px] overflow-hidden mt-20">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-12">
            <span className="inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-yellow-500 transition-colors">Home</Link>
          <i className="ri-arrow-right-s-line"></i>
          <Link href="/blog" className="hover:text-yellow-500 transition-colors">Blog</Link>
          <i className="ri-arrow-right-s-line"></i>
          <span className="text-gray-400 truncate max-w-xs">{post.title}</span>
        </nav>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-10 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <i className="ri-user-line text-yellow-500"></i>
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-calendar-line text-yellow-500"></i>
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-time-line text-yellow-500"></i>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">

          {/* Introduction */}
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            In India&apos;s booming real estate market, the difference between a project that sells out in months
            and one that struggles for years often comes down to one thing: how well buyers can visualize the
            finished product. <strong>3D walkthrough video services</strong> have become the most powerful
            marketing tool available to real estate developers today — helping them sell faster, reach wider
            audiences, and command premium pricing.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">
            What Is a 3D Walkthrough Video Service?
          </h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            A <strong>3D walkthrough video service</strong> involves the creation of a computer-generated
            animation that allows prospective buyers to virtually tour a property before a single brick
            has been laid. Unlike static images or floor plans, a 3D walkthrough creates a cinematic,
            immersive experience — guiding viewers through every room, corridor, amenity area, and
            outdoor space with smooth, realistic camera movements.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            The result is a photorealistic video that looks and feels like footage of a completed building,
            complete with furniture, finishes, lighting effects, landscaping, and even time-of-day
            lighting variations — all before construction begins.
          </p>

          {/* Inline image after Section 1 */}
          <div className="rounded-2xl overflow-hidden mb-12">
            <img
              src="/images/services/3d-walkthrough-videos/2.jpg"
              alt="Photorealistic 3D walkthrough video of a luxury residential project"
              className="w-full h-72 md:h-96 object-cover"
            />
            <p className="text-xs text-gray-400 text-center mt-2 italic">
              Photorealistic interior 3D walkthrough — Alliance Media Labs
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">
            Why Real Estate Developers Choose 3D Walkthrough Videos
          </h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: "ri-bar-chart-line",
                title: "Sell Before Completion",
                desc: "In pre-launch and under-construction phases, buyers can't visit the property. A high-quality 3D walkthrough bridges this gap, giving buyers the confidence to commit early. Projects using 3D walkthroughs typically see 40–60% higher pre-launch bookings.",
              },
              {
                icon: "ri-map-pin-line",
                title: "Reduce Site Visit Dependency",
                desc: "With a compelling 3D walkthrough, your sales team can conduct digital demos remotely — reducing required site visits and enabling you to reach buyers across India and internationally.",
              },
              {
                icon: "ri-shield-check-line",
                title: "Increase Buyer Confidence",
                desc: "When buyers can see exactly what they're purchasing — the ceiling height, the balcony view, the kitchen layout — they make decisions faster. 3D walkthroughs significantly reduce buyer anxiety and objections.",
              },
              {
                icon: "ri-instagram-line",
                title: "Dominate Digital Marketing",
                desc: "On Instagram, YouTube, and real estate portals, video content outperforms static imagery by 300–400%. A professionally produced 3D walkthrough becomes your most-shared marketing asset.",
              },
              {
                icon: "ri-cursor-line",
                title: "Higher Conversion Rates",
                desc: "Real estate portals report that listings with walkthrough videos receive 3–4x more inquiries than those without. At channel partner events, walkthroughs draw crowds and generate leads organically.",
              },
              {
                icon: "ri-global-line",
                title: "International Buyer Reach",
                desc: "NRI and international investors can tour the property digitally from anywhere in the world, removing geographic barriers and opening your project to a global audience.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className={`${item.icon} text-black text-lg`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section 3 */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">
            The 3D Walkthrough Video Production Process
          </h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-8">
            Understanding how 3D walkthrough videos are made helps you plan better and set
            realistic expectations. Here&apos;s the step-by-step process followed by Alliance Media Labs:
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                n: "01",
                title: "Project Brief & CAD File Review",
                desc: "Our team reviews architectural drawings, CAD files, and floor plans in detail. We discuss the vision for the project — target buyer profile, key selling points, and specific sequences you want to highlight.",
              },
              {
                n: "02",
                title: "3D Modeling",
                desc: "Our artists build a precise 3D model of the structure based on your drawings. Every architectural element — from window frames to ceiling cornices — is modeled to exact specifications.",
              },
              {
                n: "03",
                title: "Material & Texture Application",
                desc: "We apply photorealistic materials: marble flooring, wooden panels, glass facades, brick textures, fabric upholstery. This stage defines the visual quality of the final output.",
              },
              {
                n: "04",
                title: "Lighting Setup",
                desc: "Lighting is the most critical element of photorealism. We set up interior lighting (ambient, task, accent) and exterior lighting (sun angle, sky conditions) to match the mood of your project.",
              },
              {
                n: "05",
                title: "Interior Styling & Furnishing",
                desc: "We add carefully selected furniture, décor, and landscaping that aligns with your project's positioning — whether luxury, affordable, or premium mid-segment.",
              },
              {
                n: "06",
                title: "Camera Path Animation",
                desc: "Our directors design the walkthrough sequence — what the viewer sees first, how the camera moves through spaces, where it pauses for impact. This is where storytelling happens.",
              },
              {
                n: "07",
                title: "High-Resolution Rendering",
                desc: "Rendering is a compute-intensive process. Our render farm processes each frame at maximum quality, ensuring crisp, cinema-grade output for every second of the video.",
              },
              {
                n: "08",
                title: "Post-Production & Delivery",
                desc: "In post, we add color grading, motion blur, depth of field, music, voiceover, and your brand's title cards and logo. The result is a polished, broadcast-ready 3D walkthrough video.",
              },
            ].map((step) => (
              <div key={step.n} className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-black text-sm">
                  {step.n}
                </div>
                <div className="pt-2">
                  <h3 className="font-bold text-black mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Inline image after production process */}
          <div className="grid grid-cols-2 gap-3 mb-12">
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/services/3d-walkthrough-videos/3.jpg"
                alt="3D walkthrough video production — exterior view"
                className="w-full h-52 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/services/3d-walkthrough-videos/4.jpg"
                alt="3D walkthrough video production — interior view"
                className="w-full h-52 object-cover"
              />
            </div>
          </div>

          {/* Section 4 */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">
            Types of 3D Walkthrough Video Services
          </h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              {
                title: "Exterior Walkthroughs",
                desc: "Showcase the building's facade, landscaping, entrance lobby, podium area, and surrounding environment. Ideal for creating a strong first impression at pre-launch events.",
              },
              {
                title: "Interior Walkthroughs",
                desc: "Take buyers through every room: living room, kitchen, bedrooms, bathrooms, and utility areas. Ideal for closing sales and justifying price premiums.",
              },
              {
                title: "Amenities Walkthroughs",
                desc: "Highlight the clubhouse, swimming pool, gym, children's play area, rooftop lounge, and other lifestyle amenities that differentiate your project.",
              },
              {
                title: "Master Plan Flyovers",
                desc: "An aerial animation showing the entire development — towers, roads, landscaping, connectivity. Ideal for township and large-scale commercial projects.",
              },
              {
                title: "Hybrid Walkthroughs",
                desc: "Combines exterior, interior, and amenity sequences into one comprehensive video. The most popular choice for residential launches — tells the complete story of your project.",
              },
              {
                title: "Interactive 3D Tours",
                desc: "Web-based interactive versions where buyers click to navigate between rooms, change material finishes, and view units from multiple angles — the next level of engagement.",
              },
            ].map((type, i) => (
              <div key={i} className="p-5 border border-gray-200 rounded-xl hover:border-yellow-400 transition-colors">
                <h3 className="font-bold text-black mb-2 flex items-center gap-2">
                  <span className="text-yellow-500">•</span> {type.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>

          {/* Portfolio gallery after Types */}
          <div className="mb-12">
            <p className="text-sm text-gray-500 font-medium mb-3 uppercase tracking-wider">Our Work</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { src: "/images/services/3d-walkthrough-videos/5.jpg", alt: "3D walkthrough project sample 1" },
                { src: "/images/services/3d-walkthrough-videos/6.jpg", alt: "3D walkthrough project sample 2" },
                { src: "/images/services/3d-walkthrough-videos/7.jpg", alt: "3D walkthrough project sample 3" },
              ].map((img) => (
                <div key={img.src} className="rounded-xl overflow-hidden">
                  <img src={img.src} alt={img.alt} className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">
            Key Elements of a High-Quality 3D Walkthrough Video
          </h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Not all 3D walkthrough videos are created equal. Here&apos;s what separates a mediocre
            walkthrough from one that genuinely drives sales:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Photorealistic rendering — materials, reflections, and shadows indistinguishable from real photography",
              "Natural lighting — sun, sky, and interior lighting that feels realistic and atmospheric",
              "Thoughtful interior styling — furniture and décor that matches the target buyer's aspirations",
              "Smooth camera movement — professional cinematography principles applied to 3D animation",
              "Cinematic music — background score that enhances the emotional impact of the tour",
              "Professional voiceover — a clear, engaging script that highlights key features",
              "Brand integration — your logo, tagline, and brand colors woven throughout the video",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <i className="ri-checkbox-circle-fill text-yellow-500 mt-0.5 flex-shrink-0"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Section 6 */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">
            What Affects the Cost of 3D Walkthrough Video Services?
          </h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-6">
            The cost of a 3D walkthrough video service depends on several factors. Here&apos;s a
            quick reference:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-black text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">Cost Factor</th>
                  <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">Impact on Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Project size (sq ft)", "Larger projects = more 3D modeling time"],
                  ["Number of floor plan typologies", "Each unique unit type requires separate modeling"],
                  ["Interior styling level", "Luxury styling with high-end materials takes more time"],
                  ["Animation complexity & duration", "More camera sequences and longer runtime"],
                  ["Number of videos (exterior, interior, amenities)", "Each additional video adds to scope"],
                  ["Turnaround time", "Rush projects may carry a premium over standard timelines"],
                ].map(([factor, impact], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-3 text-black font-medium border-b border-gray-200">{factor}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-200">{impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl mb-8">
            <p className="text-gray-700 font-medium">
              <i className="ri-information-line text-yellow-500 mr-2"></i>
              Typical costs in India range from <strong>₹50,000</strong> for a basic residential walkthrough
              to <strong>₹5,00,000+</strong> for a comprehensive luxury project with multiple typologies,
              amenities, and a master plan flyover. Contact us for a detailed quote tailored to your project.
            </p>
          </div>

          {/* Section 7 */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">
            Why Choose Alliance Media Labs for Your 3D Walkthrough Video?
          </h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-6">
            With over 500 projects delivered across India&apos;s top cities, Alliance Media Labs is
            the trusted 3D walkthrough video service partner for India&apos;s leading real estate developers.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { icon: "ri-award-line", title: "500+ Projects Delivered", desc: "Proven experience across residential, commercial, and mixed-use developments." },
              { icon: "ri-map-pin-line", title: "Pan-India Service", desc: "Mumbai, Delhi NCR, Bangalore, Gurugram, Pune, Hyderabad, and beyond." },
              { icon: "ri-user-star-line", title: "Dedicated Project Manager", desc: "Single point of contact from brief to final delivery — no confusion, no delays." },
              { icon: "ri-time-line", title: "Industry-Leading Turnaround", desc: "We deliver faster than the industry standard without ever compromising quality." },
              { icon: "ri-price-tag-3-line", title: "Transparent Pricing", desc: "No hidden charges. Detailed scope and quote provided upfront." },
              { icon: "ri-tools-line", title: "End-to-End Solution", desc: "From CAD review to final post-production, we handle every step in-house." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className={`${item.icon} text-black`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-black text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Conclusion</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>3D walkthrough video services</strong> are no longer a luxury — they are an essential
            component of modern real estate marketing. With buyers spending more time online researching
            properties before visiting, the quality of your digital content directly impacts your sales velocity.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Whether you are launching a luxury residential tower in Mumbai, a commercial complex in Gurugram,
            or a township in Bangalore, a professionally produced 3D walkthrough video from Alliance Media Labs
            will give your project the competitive edge it deserves.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-200 mb-12">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full"
            >
              #{tag.replace(/ /g, "")}
            </span>
          ))}
        </div>

        {/* Back to Blog */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-yellow-500 transition-colors mb-16"
        >
          <i className="ri-arrow-left-line"></i> Back to Blog
        </Link>
      </div>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your 3D Walkthrough Video Project?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Talk to our team today and get a free consultation and quote for your real estate project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services/3d-walkthrough-videos"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors"
            >
              View Our Walkthrough Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
