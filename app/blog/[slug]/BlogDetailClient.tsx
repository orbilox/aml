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

  if (slug === "3d-house-rendering-guide-india") {
    return <HouseRenderingArticle post={post} />;
  }

  if (slug === "real-estate-drone-photography-india") {
    return <DronePhotographyArticle post={post} />;
  }

  if (slug === "architectural-scale-models-india-real-estate") {
    return <ScaleModelsArticle post={post} />;
  }

  if (slug === "scale-model-making-india-complete-guide") {
    return <ScaleModelMakingGuideArticle post={post} />;
  }

  if (slug === "real-estate-marketing-video-types-india") {
    return <RealEstateMarketingVideosArticle post={post} />;
  }

  if (slug === "best-architectural-scale-model-company-india") {
    return <BestScaleModelCompanyArticle post={post} />;
  }

  if (slug === "architectural-scale-model-price-india-2026") {
    return <ScaleModelPriceArticle post={post} />;
  }

  if (slug === "scale-model-vs-3d-walkthrough-video-india") {
    return <ScaleModelVsWalkthroughArticle post={post} />;
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
            will give your project the competitive edge it deserves. Looking for India&apos;s best 3D walkthrough video company?{" "}
            <Link href="/services/3d-walkthrough-video-company-india" className="text-yellow-600 font-semibold hover:underline">
              Explore our dedicated 3D walkthrough video company page
            </Link>{" "}
            for full pricing, portfolio, and production timelines.
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

function HouseRenderingArticle({ post }: { post: ReturnType<typeof getPostBySlug> }) {
  if (!post) return null;

  const faqs = [
    {
      q: "What is 3D house rendering and how is it different from a photograph?",
      a: "3D house rendering is a computer-generated image of a building that looks like a photograph — but is produced entirely from architectural drawings, before the building exists. Unlike photography, a 3D render can be created during the design stage, giving you complete control over lighting, weather, season, materials, and viewpoint.",
    },
    {
      q: "How much does 3D house rendering cost in India?",
      a: "A standard exterior 3D house rendering starts from ₹8,000–₹15,000 per view for residential projects. Luxury villas and high-rise towers with detailed facade work range from ₹20,000–₹50,000 per view. Interior renders are priced similarly. 3D floor plan design starts from ₹3,000 per unit. Contact Alliance Media Labs for a project-specific quote.",
    },
    {
      q: "How long does architectural rendering take to deliver?",
      a: "A standard exterior render takes 5–7 working days. Interior renders and 3D floor plan designs take 7–10 days. Full sets of 10+ views or township isometrics are scoped individually. Rush delivery in 3 days is available for launch deadlines.",
    },
    {
      q: "What inputs do 3D rendering companies need from developers?",
      a: "Most professional 3D rendering companies need: AutoCAD DWG drawings or PDF floor plans, elevation drawings, a site plan, material/finish specifications or reference images, and your brand colour palette. Even rough sketch drawings are sufficient to begin — our team handles all 3D modelling in-house.",
    },
    {
      q: "Can a 3D floor plan replace a traditional 2D floor plan for marketing?",
      a: "For marketing purposes, yes — a 3D floor plan design consistently outperforms a 2D plan. Buyers understand room proportions, furniture placement, and natural light far better from a 3D floor plan. Many developers use both: a 2D plan for technical reference and a 3D floor plan for brochures and digital ads.",
    },
    {
      q: "What is AI 3D rendering and should I use it?",
      a: "AI 3D rendering uses machine learning tools to accelerate specific parts of the rendering pipeline — particularly lighting and texture generation. It does not replace the 3D modelling and creative work that goes into a quality render. At Alliance Media Labs, we use AI-assisted 3D rendering tools selectively to improve turnaround on large sets without sacrificing photorealistic quality.",
    },
    {
      q: "Can 3D renders be used for RERA registration?",
      a: "Yes. Architectural renders are accepted for RERA project marketing submissions across Maharashtra, Karnataka, Delhi NCR, Telangana, and other states. Our renders include mandatory RERA disclaimer overlays and are built from approved architectural drawings — making them the safest possible visual for compliance.",
    },
    {
      q: "What is the difference between a 3D render and a 3D walkthrough video?",
      a: "A 3D render is a still image — like a photograph of your building. A 3D walkthrough video is an animated film that takes the viewer on a guided tour through the property. Renders are used in brochures, hoardings, and print materials. Walkthroughs are used for digital campaigns, YouTube, and sales office screens. Most developers use both.",
    },
    {
      q: "How do I find reliable 3D rendering services near me in India?",
      a: "Look for a company with a dedicated real estate rendering portfolio — not a generic product or game studio. Key things to verify: do they have in-house modellers or outsource? Do they have experience with RERA submissions? Can they show before-and-after comparisons? Alliance Media Labs operates from India with an in-house team serving developers nationwide.",
    },
    {
      q: "What is the difference between a 3D render and an isometric view?",
      a: "A 3D render is a photorealistic perspective image of one building or interior — like a camera shot. An isometric view is a top-down bird's-eye illustration of the entire site — showing how multiple buildings, roads, landscaping, and amenities relate to each other. Isometrics are used for master plan marketing, township brochures, and launch hoardings.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <div className="relative h-[480px] overflow-hidden mt-20">
        <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-12">
            <span className="inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl leading-tight">{post.title}</h1>
          </div>
        </div>
      </div>

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
          <div className="flex items-center gap-2"><i className="ri-user-line text-yellow-500"></i><span>{post.author}</span></div>
          <div className="flex items-center gap-2"><i className="ri-calendar-line text-yellow-500"></i><span>{post.date}</span></div>
          <div className="flex items-center gap-2"><i className="ri-time-line text-yellow-500"></i><span>{post.readTime}</span></div>
        </div>

        <div className="prose prose-lg max-w-none">

          {/* Intro */}
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            If you search for any real estate visualization service in India, one term comes up more than any other: <strong>3D house rendering</strong>. With over 10,000 monthly searches, it is the single most sought-after architectural visualization service among Indian property buyers, developers, and architects. Yet despite its popularity, there is a lot of confusion about what 3D house rendering actually involves, how it differs from related services, and how to choose the right company.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            This guide covers everything — from the types of <strong>3D renders</strong> available, to <strong>3D floor plan design</strong>, to AI-assisted rendering, to choosing between <strong>architectural rendering companies</strong> in India. By the end, you will know exactly what to brief, what to expect, and what to pay.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">What Is 3D House Rendering?</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>3D house rendering</strong> is the process of generating a photorealistic image of a building from architectural drawings using specialist 3D software. The result looks indistinguishable from a professional photograph — except that the building does not need to exist yet.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The process involves three stages: <strong>3D modelling</strong> (building a digital replica of the structure from drawings), <strong>texturing and lighting</strong> (applying realistic materials, shadows, and time-of-day lighting), and <strong>rendering</strong> (calculating the final photorealistic output). Professional <strong>3D rendering services</strong> handle all three stages in-house, delivering images at 300 DPI print resolution.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            For Indian real estate developers, <strong>architectural rendering</strong> solves a fundamental problem: under-construction projects cannot be photographed. A developer launching a project two years before completion needs visual assets for hoardings, brochures, digital ads, and RERA registration — all before the first floor is built. 3D rendering makes this possible.
          </p>

          {/* Inline image 1 */}
          <div className="rounded-2xl overflow-hidden mb-12">
            <img src="/images/services/3d-renders-isometrics/2.jpg" alt="Photorealistic 3D house rendering exterior — Alliance Media Labs" className="w-full h-72 md:h-96 object-cover" />
            <p className="text-xs text-gray-400 text-center mt-2 italic">Photorealistic exterior 3D house rendering — Alliance Media Labs</p>
          </div>

          {/* Section 2 */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Types of 3D Rendering Services for Real Estate</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Not all <strong>rendering services</strong> are the same. Here are the six main types that Indian real estate developers commission, and what each one is used for:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              { icon: "ri-home-4-line", title: "Exterior 3D House Rendering", desc: "The most common type — a photorealistic front, side, or aerial perspective of the building facade. Used for hoardings, brochures, launch campaigns, and RERA submissions. Can show any time of day, season, or weather condition." },
              { icon: "ri-sofa-line", title: "Interior 3D Rendering", desc: "Photorealistic images of living rooms, kitchens, bedrooms, lobbies, and amenity areas. Used to showcase finishes, furniture layout, lighting moods, and material quality. Particularly powerful for luxury apartments and villas." },
              { icon: "ri-layout-grid-line", title: "3D Floor Plan Design", desc: "A top-down three-dimensional view of a unit showing room layout, furniture placement, and proportions. Far more readable than a 2D plan for buyers. Used in brochures, on websites, and at sales offices. The 3D floor plan designer role involves translating raw CAD plans into client-ready visuals." },
              { icon: "ri-earth-line", title: "Isometric & Aerial View", desc: "A bird's-eye 3D illustration of the entire project — showing multiple towers, roads, landscaping, amenities, and the surrounding context. Essential for township launches and master plan brochures. Also used as a hoarding creative." },
              { icon: "ri-building-line", title: "3D Architectural Rendering", desc: "Full architectural rendering services covering both the building exterior and contextual surroundings — including neighbouring streets, greenery, and sky. Used by architects for client presentations and by developers for investor decks." },
              { icon: "ri-cpu-line", title: "AI-Assisted 3D Rendering", desc: "AI 3D rendering uses machine learning to accelerate the lighting and denoising stages of production, reducing turnaround time on large sets without compromising quality. Best used for bulk orders of 10+ views with tight launch deadlines." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 bg-gray-50 rounded-xl">
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

          {/* Section 3 */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">3D House Rendering vs 3D Walkthrough vs VR Tour: Which Do You Need?</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-6">
            This is the most common question developers ask. All three are produced from the same 3D model — but they serve completely different purposes:
          </p>

          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-4 py-3 text-left font-semibold">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold">3D House Rendering</th>
                  <th className="px-4 py-3 text-left font-semibold">3D Walkthrough Video</th>
                  <th className="px-4 py-3 text-left font-semibold">VR Tour</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Output format", "Still image (JPG/PNG)", "Video (MP4)", "Interactive web link"],
                  ["Used in", "Hoardings, brochures, print, RERA", "YouTube, social media, screens", "Sales office, website, NRI"],
                  ["Buyer experience", "Passive — views image", "Passive — watches video", "Active — explores freely"],
                  ["Production time", "5–7 days per view", "3–6 weeks", "4–6 weeks"],
                  ["Best for", "Launch marketing collateral", "Pre-launch digital campaigns", "NRI buyers, premium launches"],
                  ["Can show 3D floor plan", "✓ As a separate render", "✓ As a section in video", "✓ As an interactive overlay"],
                ].map(([feature, render, walkthrough, vr], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-3 font-medium text-gray-800 border-b border-gray-100">{feature}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{render}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{walkthrough}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{vr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8">
            Most successful launch campaigns use all three: <strong>3D renders</strong> for print and hoardings, a <strong>3D walkthrough video</strong> for digital ads and social media, and a <strong>VR tour</strong> for the sales office and NRI portal. The renders are produced first, since the walkthrough video and VR tour are built from the same 3D model.
          </p>

          {/* Inline image 2 */}
          <div className="rounded-2xl overflow-hidden mb-12">
            <img src="/images/services/3d-renders-isometrics/4.jpg" alt="3D floor plan design and architectural rendering for real estate brochure" className="w-full h-72 md:h-96 object-cover" />
            <p className="text-xs text-gray-400 text-center mt-2 italic">3D floor plan design + exterior render for a residential launch — Alliance Media Labs</p>
          </div>

          {/* Section 4 */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">How to Choose Between Architectural Rendering Companies in India</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            There are hundreds of <strong>3D rendering companies</strong> and freelancers in India. The quality difference between the best and worst is enormous. Here are the five criteria that separate professional <strong>architectural rendering companies</strong> from generic studios:
          </p>

          <div className="space-y-4 mb-10">
            {[
              { num: "01", title: "Real Estate Portfolio Depth", desc: "Look for 3D rendering services that have delivered work specifically for real estate developers — not product renders, game assets, or animations. Real estate rendering requires understanding of RERA requirements, sales office context, and what actually converts buyers." },
              { num: "02", title: "In-House Modelling Team", desc: "Many companies outsource 3D modelling to third parties. This creates quality gaps and delays. Choose architectural rendering services with an in-house team — it means faster communication, better quality control, and more accountability." },
              { num: "03", title: "RERA-Ready Output", desc: "If you are in Maharashtra, Karnataka, Delhi NCR, or any RERA-active state, your renders must include specific disclaimer overlays and be produced from approved drawings. A specialist real estate rendering company will know this without being told." },
              { num: "04", title: "Transparent Revision Policy", desc: "Professional architectural visualization services include structured revision rounds — typically 2 rounds during modelling and 2 rounds after final render. Avoid companies that charge per change or provide no revision policy upfront." },
              { num: "05", title: "3D Floor Plan Design Capability", desc: "The best 3D rendering services near you should also offer 3D floor plan design as a standalone or bundled service. A dedicated 3D floor plan designer on the team means your brochure layouts and unit floor plans are consistent with your exterior renders." },
            ].map((item) => (
              <div key={item.num} className="flex gap-4 p-5 border border-gray-200 rounded-xl">
                <span className="text-3xl font-black text-yellow-400 leading-none flex-shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-black mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section 5 */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Architectural Visualization Services in India — Timeline & What to Expect</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            A typical <strong>architectural visualization services</strong> project in India follows this timeline once drawings are shared:
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-10">
            {[
              { step: "Day 1–2", title: "Brief & Modelling Start", desc: "Drawings reviewed, camera angles agreed, 3D modelling begins" },
              { step: "Day 3–5", title: "Grey Structure Review", desc: "Raw 3D model shared for proportion and accuracy feedback before texturing" },
              { step: "Day 5–7", title: "Texturing & Lighting", desc: "Materials applied, lighting set up, environment built around the structure" },
              { step: "Day 6–8", title: "Final Render Delivery", desc: "High-resolution JPG/PNG files delivered at 300 DPI print-ready quality" },
            ].map((item) => (
              <div key={item.step} className="bg-gray-50 rounded-xl p-5 text-center">
                <div className="inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full mb-3">{item.step}</div>
                <h3 className="font-bold text-black text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Inline image 3 */}
          <div className="rounded-2xl overflow-hidden mb-12">
            <img src="/images/services/3d-renders-isometrics/6.jpg" alt="Architectural rendering of residential township with isometric view India" className="w-full h-72 md:h-96 object-cover" />
            <p className="text-xs text-gray-400 text-center mt-2 italic">Township aerial 3D render — Alliance Media Labs</p>
          </div>

          {/* Section 6 */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">3D Rendering Services Near Me — Why Location Doesn&apos;t Matter Anymore</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Many developers search for <strong>3D rendering services near me</strong> assuming they need a local vendor for in-person meetings. In reality, 100% of the 3D rendering workflow happens digitally — drawings are shared electronically, renders are reviewed on screen, and feedback is given via video call or email.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Alliance Media Labs provides <strong>3D architectural rendering services</strong> for developers across Mumbai, Delhi NCR, Pune, Bangalore, Hyderabad, Chennai, Kolkata, and tier-2 cities — all managed remotely with the same quality standards. Your project&apos;s location determines the architectural context of the render; your proximity to our studio determines nothing.
          </p>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Frequently Asked Questions</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-8"></div>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-black mb-3 flex items-start gap-3">
                  <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-black text-black flex-shrink-0 mt-0.5">{i + 1}</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm pl-9">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Conclusion</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>3D house rendering</strong> is not just a marketing tool — it is the foundation of every successful real estate launch in India today. From the hoarding that stops traffic on the highway, to the brochure a buyer takes home, to the RERA registration package submitted to the authority — photorealistic <strong>architectural rendering</strong> is everywhere.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Whether you need a single exterior <strong>3D render</strong>, a complete set of interior and exterior views, a <strong>3D floor plan design</strong> for your brochure, or a full campaign covering renders, walkthrough videos, and VR tours — Alliance Media Labs handles it all with one brief, one team, and one point of accountability.
          </p>

          {/* Internal links */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h3 className="font-bold text-black mb-4">Explore Related Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/services/3d-renders-isometrics", label: "3D Renders & Isometrics", icon: "ri-image-line" },
                { href: "/services/3d-walkthrough-videos", label: "3D Walkthrough Videos", icon: "ri-movie-line" },
                { href: "/services/3d-walkthrough-video-company-india", label: "3D Walkthrough Company", icon: "ri-building-line" },
                { href: "/services/virtual-reality-tours", label: "VR Tours", icon: "ri-3d-glasses-line" },
              ].map((s) => (
                <Link key={s.href} href={s.href} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 hover:shadow-md transition-shadow border border-gray-200">
                  <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${s.icon} text-black text-sm`}></i>
                  </div>
                  <span className="font-semibold text-black text-sm">{s.label}</span>
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-200 mb-12">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
              #{tag.replace(/ /g, "")}
            </span>
          ))}
        </div>

        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-yellow-500 transition-colors mb-16">
          <i className="ri-arrow-left-line"></i> Back to Blog
        </Link>
      </div>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get a Quote for Your 3D Rendering Project</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Share your drawings with our team and get a detailed quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
              Get Free Quote
            </Link>
            <Link href="/services/3d-renders-isometrics" className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors">
              View Our Render Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function DronePhotographyArticle({ post }: { post: ReturnType<typeof getPostBySlug> }) {
  if (!post) return null;

  const faqs = [
    {
      q: "What is real estate drone photography and why do developers use it?",
      a: "Real estate drone photography uses DGCA-licensed unmanned aerial vehicles to capture aerial images and video of a property, its surroundings, and access routes. Developers use it to showcase location advantages, scale, and connectivity that ground-level cameras cannot convey. A single aerial reveal shot can communicate what takes minutes to explain in words.",
    },
    {
      q: "Is drone photography legal for real estate in India?",
      a: "Yes, provided the operator holds a DGCA Remote Pilot License (RPL), the drone is registered on the Digital Sky platform, and the shoot zone is approved for drone operations. Restricted zones (near airports, defence areas, and certain government buildings) require additional clearance. Alliance Media Labs handles all DGCA compliance and permissions for every shoot.",
    },
    {
      q: "What resolution does a professional real estate drone video use?",
      a: "Professional real estate drone video is shot in 4K (3840×2160) resolution using DJI Inspire or Zenmuse series cameras with 3-axis gimbal stabilisation. Footage is colour-graded in post-production, delivering broadcast-quality output suitable for TV commercials, YouTube, Instagram Reels, and property portal listings.",
    },
    {
      q: "What is a location AV video for real estate?",
      a: "A location AV (audio-visual) video is a cinematic film showcasing the project's surrounding environment — nearby schools, hospitals, metro stations, malls, highways, and scenic features. Unlike a drone shoot that focuses on the project itself, a location AV tells the story of the neighbourhood, making it a powerful tool for buyers evaluating connectivity and lifestyle.",
    },
    {
      q: "How long does a real estate drone shoot take?",
      a: "A standard drone shoot covering a project site with 8–12 aerial angles takes half a day (3–4 hours). A full location AV with drone footage, ground-level B-roll, and route videography typically requires one full day. Post-production editing and colour grading adds 5–10 working days depending on the output length and complexity.",
    },
    {
      q: "Can you shoot during golden hour or twilight for a premium look?",
      a: "Yes. We plan shoots around the golden hour (30–60 minutes after sunrise or before sunset) and blue-hour twilight for maximum cinematic impact. These lighting conditions are especially valuable for luxury and ultra-luxury projects where premium lifestyle is the core sales message. Low-light drone footage is available with appropriate sensor equipment.",
    },
    {
      q: "How much does a real estate drone shoot cost in India?",
      a: "Real estate drone photography pricing in India starts from ₹15,000 for a standard half-day aerial shoot. Full-day packages with golden hour sessions, location AV production, and post-production editing start from ₹30,000. Township or multi-location shoots covering 50+ acres with multiple angles and a 3–5 minute edited video are priced on request.",
    },
    {
      q: "Can drones be used for construction progress monitoring?",
      a: "Absolutely. Construction progress drone monitoring — scheduled aerial shoots at regular intervals (weekly, fortnightly, or monthly) — provides developers with accurate visual records of construction milestones. This aerial documentation is invaluable for RERA compliance reporting, investor updates, and pre-launch marketing content when the project reaches a visually impressive stage.",
    },
    {
      q: "What is the difference between aerial photography and aerial videography for real estate?",
      a: "Aerial photography produces high-resolution still images used for brochures, billboards, and press materials. Aerial videography captures moving footage for promotional films, social media, and property portals. Most real estate projects commission both in a single shoot — stills for print and video for digital channels — to maximise the ROI of each drone session.",
    },
    {
      q: "How do I brief a drone photography company for a real estate project?",
      a: "A good brief includes: project address and site layout (share DWG or Google Maps pin), the number of aerial angles needed, whether a location AV route is required, the target output platforms (TV, YouTube, Instagram, property portal), the preferred time of day (golden hour vs midday), and the delivery deadline. Alliance Media Labs provides a standardised brief template to every client before shoot planning begins.",
    },
  ];

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
            The most powerful sales tool in modern real estate marketing is not a brochure, a VR headset,
            or a CGI render — it is a 4K drone shot that reveals your project from 200 feet above the
            earth, showing the full sweep of land, the connectivity to the city, and the lifestyle
            promise of the location in a single cinematic frame. <strong>Real estate drone photography</strong> has
            become the non-negotiable opening act of every premium property launch in India. This
            guide tells you exactly how to plan, commission, and get the most from a professional
            drone shoot for your project.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">
            What Is Real Estate Drone Photography — And Why Buyers Respond to It
          </h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Real estate drone photography</strong> uses DGCA-licensed unmanned aerial vehicles (UAVs)
            equipped with high-resolution cameras to capture images and video of a property from the air.
            Unlike a ground-level photograph that shows a building&apos;s facade, an aerial shot reveals
            the full relationship between the project, its land, and its surroundings.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Buyers respond powerfully to aerial footage because it answers questions that no other medium
            can: How close is this project to the highway? How much green cover surrounds it? How does
            Phase 1 relate to Phase 2? Is the view from upper floors truly panoramic? These are
            questions that determine buying decisions, and aerial drone video answers them in seconds.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            For developers, the ROI of a single drone shoot session is extraordinary — the footage can
            be repurposed across the project website, property portals (MagicBricks, 99acres, Housing.com),
            social media, TV commercials, channel partner presentations, and NRI digital campaigns,
            all from one day&apos;s work.
          </p>

          {/* Section 2 — Shot Types */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">
            6 Types of Aerial Drone Shots Used in Real Estate Marketing
          </h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-6">
            A professional real estate drone shoot is not just &quot;flying above and recording.&quot;
            Every angle is planned for a specific storytelling purpose. Here are the six shot types
            that form a complete aerial library for a real estate project:
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {[
              {
                icon: "ri-flight-takeoff-line",
                title: "Establishing Aerial Reveal",
                desc: "The drone rises from ground level while the camera tilts up to reveal the full project against the horizon. This is the cinematic opening shot used in nearly every property launch film — visually impressive and immediately establishes scale.",
              },
              {
                icon: "ri-road-map-line",
                title: "Location & Connectivity Flyover",
                desc: "A slow tracking shot from the project outward, showing the highway, metro line, schools, hospitals, and landmarks within the catchment area. This shot is the core of every location AV video and directly answers the buyer's connectivity questions.",
              },
              {
                icon: "ri-building-line",
                title: "Overhead Master Plan Shot",
                desc: "A bird's-eye view directly above the site showing the full land parcel, internal road network, amenity placement, and phase layout. Essential for township and plotted development marketing where the macro layout is the product.",
              },
              {
                icon: "ri-sun-line",
                title: "Golden Hour Cinematic Pass",
                desc: "Shot 30 minutes before sunset, the golden hour aerial pass bathes the project in warm directional light that no artificial lighting can replicate. These shots are used in luxury project films and billboard campaigns to communicate premium lifestyle.",
              },
              {
                icon: "ri-camera-3-line",
                title: "Construction Progress Documentation",
                desc: "Scheduled aerial shots at regular intervals during construction — weekly, fortnightly, or monthly. Creates a visual time-lapse record of construction milestones, valuable for RERA compliance, investor updates, and pre-launch marketing.",
              },
              {
                icon: "ri-compass-3-line",
                title: "360° Orbit Around the Tower",
                desc: "The drone orbits the completed or near-complete tower in a smooth circular motion while the camera keeps the tower centred. This shot showcases all four facades, the view potential from different elevations, and the surrounding context from every direction.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 bg-gray-50 rounded-xl">
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

          {/* Inline image 1 */}
          <div className="rounded-2xl overflow-hidden mb-12">
            <img
              src="/images/services/drone-shoots/2.jpg"
              alt="4K drone aerial shot of a real estate project in India showing connectivity and surroundings"
              className="w-full h-72 md:h-96 object-cover"
            />
            <p className="text-xs text-gray-400 text-center mt-2 italic">
              4K aerial drone footage for a real estate project — Alliance Media Labs
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">
            Location AV Production: Beyond the Drone Shot
          </h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            A <strong>location AV video</strong> is one of the most strategically valuable — and most
            underused — tools in real estate marketing. Where a drone shoot covers the project itself,
            a location AV covers everything around it: the drive from the nearest metro station,
            the school gates three minutes away, the weekend lifestyle of the neighbourhood,
            the sunrise view from the highway approach.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Location AV production combines <strong>aerial drone footage</strong> with ground-level
            cinematography — steady-cam city shots, vehicle-mounted tracking shots along the
            access route, time-lapses of traffic flow, and golden-hour lifestyle footage of
            nearby destinations. The result is a 2–4 minute film that answers the buyer&apos;s
            most fundamental question: <em>Is this the right place to live?</em>
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            For projects where location is the primary differentiator — a project near a new
            metro corridor, a township adjacent to a proposed IT park, a villa cluster near
            a lake or hill station — the location AV often converts more buyers than the
            project walkthrough itself.
          </p>

          {/* Comparison table */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-4 py-3 text-left font-semibold">Aerial Content Type</th>
                  <th className="px-4 py-3 text-left font-semibold">Best Used For</th>
                  <th className="px-4 py-3 text-left font-semibold">Output Length</th>
                  <th className="px-4 py-3 text-left font-semibold">Platform</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Aerial Drone Photography (Stills)", "Brochures, billboards, portals, press", "10–20 edited stills", "Print + Digital"],
                  ["Project Drone Video", "Launch films, website hero, YouTube", "60–90 seconds", "Digital"],
                  ["Location AV Film", "NRI campaigns, channel partners, TV", "2–4 minutes", "TV + Digital"],
                  ["Construction Progress Shoot", "RERA, investor updates, social media", "30–60 second cut", "Digital"],
                  ["Golden Hour Luxury Reel", "Premium social, OOH, luxury portals", "30–45 seconds", "Instagram + Outdoor"],
                ].map(([type, use, length, platform], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-3 text-gray-800 font-medium border-b border-gray-100">{type}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{use}</td>
                    <td className="px-4 py-3 text-yellow-600 font-semibold border-b border-gray-100">{length}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{platform}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 4 — DGCA */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">
            Why DGCA-Licensed Drone Operators Matter for Your Project
          </h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            India&apos;s drone regulations under the DGCA (Directorate General of Civil Aviation) have
            matured significantly since 2021. Every commercial drone operator must hold a{" "}
            <strong>Remote Pilot License (RPL)</strong>, operate a DGCA-registered drone, and obtain
            zone clearance before every shoot via the Digital Sky platform.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For real estate developers, this matters for two reasons: <strong>legal protection</strong> and
            <strong> quality assurance</strong>. A DGCA-licensed operator carries the right equipment
            (typically DJI Matrice or Inspire series with professional-grade cameras), understands
            airspace rules, and can legally fly in zones that unlicensed operators cannot — including
            urban areas with restricted airspace that require individual DGCA permissions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Unlicensed drone operators are cheaper — but they expose developers to significant
            liability if footage is used commercially, if an incident occurs on site, or if
            the footage quality is insufficient for broadcast or billboard use. Alliance Media Labs
            uses exclusively DGCA-licensed pilots for all real estate aerial shoots across India.
          </p>

          {/* Steps for planning a shoot */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">
            How to Plan a Real Estate Drone Shoot: 5-Step Process
          </h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <div className="space-y-4 mb-10">
            {[
              {
                num: "01",
                title: "Define Your Shot List and Output Deliverables",
                desc: "Before the drone goes up, decide what you need: a project reveal video, a location AV, construction documentation, or stills for the brochure? Each output has a different shot list, time-of-day requirement, and post-production workflow. A well-defined brief eliminates costly re-shoots.",
              },
              {
                num: "02",
                title: "Check Zone Clearance and DGCA Permissions",
                desc: "Your shoot location determines the regulatory complexity. Green zones require only Digital Sky clearance. Yellow and red zones require individual DGCA approval — a process that can take 1–7 days. Always confirm zone status before locking the shoot date.",
              },
              {
                num: "03",
                title: "Choose the Right Time of Day",
                desc: "Golden hour (30 minutes after sunrise or before sunset) delivers the best cinematic quality for luxury and premium projects. Midday shoots work well for construction documentation where even lighting and maximum site visibility are the priority. Twilight shoots with LED lighting require specialised equipment.",
              },
              {
                num: "04",
                title: "Plan the Ground-Level B-Roll",
                desc: "The best real estate drone videos intercut aerial footage with ground-level shots — lobby entries, amenity areas, lifestyle vignettes, the approach road. Plan B-roll requirements alongside the aerial shot list so both crews shoot simultaneously, cutting down the production day.",
              },
              {
                num: "05",
                title: "Brief the Post-Production Team on the Final Cut",
                desc: "Raw 4K drone footage needs colour grading, stabilisation, music scoring, and editing before it is ready for use. Share your brand colour palette, preferred music tone (cinematic, aspirational, energetic), and the platform where the video will be used — Instagram ratios differ from YouTube and TV broadcast specs.",
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-4 p-5 border border-gray-200 rounded-xl">
                <span className="text-3xl font-black text-yellow-400 leading-none flex-shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-black mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Inline image 2 */}
          <div className="rounded-2xl overflow-hidden mb-12">
            <img
              src="/images/services/drone-shoots/3.jpg"
              alt="Drone aerial videography for real estate - location AV shoot in India"
              className="w-full h-72 md:h-96 object-cover"
            />
            <p className="text-xs text-gray-400 text-center mt-2 italic">
              Location AV aerial shoot — Alliance Media Labs
            </p>
          </div>

          {/* Section 5 — Construction */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">
            Aerial Drone for Construction Progress Monitoring
          </h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            One of the most underutilised applications of <strong>real estate drone video</strong> is
            construction progress documentation. Scheduled aerial shoots at consistent intervals —
            same time of day, same camera angles, same altitude — create a visual record that serves
            multiple business purposes simultaneously.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              {
                icon: "ri-file-list-3-line",
                title: "RERA Compliance",
                desc: "Dated aerial photographs provide irrefutable evidence of construction progress for quarterly RERA reporting — a legal obligation for all registered projects.",
              },
              {
                icon: "ri-building-4-line",
                title: "Investor & NRI Updates",
                desc: "Monthly drone footage updates shared with investors and NRI buyers build confidence and reduce transaction friction by showing tangible construction progress.",
              },
              {
                icon: "ri-megaphone-line",
                title: "Pre-Launch Marketing",
                desc: "When the project reaches a photogenic construction milestone — slab casting, tower topping, facade cladding — aerial documentation creates launch-worthy marketing content.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-black text-white p-6 rounded-2xl">
                <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${item.icon} text-black`}></i>
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{item.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Section 6 — Choosing a company */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">
            How to Choose the Right Drone Photography Company for Real Estate
          </h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Not every <strong>aerial photography company</strong> has the real estate-specific expertise
            to plan and execute a shoot that delivers marketing-ready content. Here are the five
            questions every developer should ask before booking:
          </p>

          <div className="space-y-3 mb-10">
            {[
              ["Are your pilots DGCA-licensed?", "Non-negotiable. Ask for the Remote Pilot License number and drone registration certificate before signing any agreement."],
              ["What camera and drone equipment do you use?", "Professional real estate shoots require at minimum DJI Inspire 2 or Matrice series with Zenmuse X7 or equivalent camera. Consumer-grade drones (Mavic Air) are not suitable for broadcast or large-format print."],
              ["Can you show a real estate aerial video portfolio?", "Generic drone footage is very different from real estate-optimised aerial cinematography. Ask specifically for property launch films or location AV videos they have produced."],
              ["Do you handle post-production in-house?", "An operator who outsources editing has less control over colour consistency and delivery timelines. In-house post-production ensures your footage matches your brand."],
              ["Can you coordinate a same-day drone and ground shoot?", "The most cost-effective real estate productions combine aerial and ground-level crews on the same day. This requires production management expertise — not just a pilot with a drone."],
            ].map(([q, a], i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <p className="font-bold text-black text-sm mb-1">Q: {q}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          {/* Internal links */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-12">
            <h3 className="font-bold text-black mb-4 text-sm uppercase tracking-widest">
              Related Services by Alliance Media Labs
            </h3>
            <div className="space-y-3">
              {[
                { href: "/services/drone-shoots", label: "Drone Shoots & Location AV", desc: "4K aerial cinematography, golden hour shoots, DGCA-licensed pilots, location AV production" },
                { href: "/services/route-videos", label: "Route & Location Videos", desc: "Cinematic route videography showing project connectivity, access roads, and lifestyle context" },
                { href: "/services/3d-walkthrough-videos", label: "3D Walkthrough Videos", desc: "Pair aerial drone footage with interior 3D walkthroughs for a complete property film package" },
                { href: "/services/construction-update-videos", label: "Construction Update Videos", desc: "Scheduled construction progress documentation with drone and ground-level footage" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-yellow-100 transition-colors group"
                >
                  <i className="ri-arrow-right-circle-fill text-yellow-500 mt-0.5 flex-shrink-0 group-hover:text-yellow-600"></i>
                  <div>
                    <span className="font-semibold text-black text-sm">{item.label}</span>
                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">
            Frequently Asked Questions: Real Estate Drone Photography India
          </h2>
          <div className="w-12 h-1 bg-yellow-400 mb-8"></div>

          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-black mb-3 flex items-start gap-3">
                  <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-black text-black flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm pl-9">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Conclusion</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Real estate drone photography</strong> is no longer a premium add-on for only the
            largest developers — it is a baseline expectation for any serious property launch in India.
            Buyers have been trained by years of cinematic drone footage on property portals and social
            media to expect an aerial perspective. A project without it signals either a tight budget
            or a small site — neither of which is the impression any developer wants to make.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The ROI is undeniable: one well-planned <strong>aerial drone video shoot</strong> generates
            content for your website, property portals, social media, investor decks, TV commercials,
            and NRI digital campaigns — all from a single day&apos;s production. When combined with a
            location AV film and a{" "}
            <Link href="/services/3d-walkthrough-video-company-india" className="text-yellow-600 font-semibold hover:underline">
              3D walkthrough video
            </Link>
            , you have a complete digital marketing toolkit
            that positions your project against any competitor in the market.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Choose a production partner with DGCA-licensed pilots, broadcast-quality equipment,
            real estate-specific experience, and in-house post-production. That combination — not
            just the drone itself — is what turns aerial footage into a sales asset.
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
            Book a Real Estate Drone Shoot
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            DGCA-licensed pilots. 4K aerial cinematography. Location AV production. Pan-India service.
            Get a quote for your next project launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services/drone-shoots"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors"
            >
              View Drone Shoot Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ScaleModelsArticle({ post }: { post: ReturnType<typeof getPostBySlug> }) {
  if (!post) return null;

  const faqs = [
    {
      q: "Are architectural scale models still relevant in the age of VR and 3D walkthroughs?",
      a: "Absolutely. Scale models serve a fundamentally different purpose than digital tools. They trigger tactile curiosity, draw crowds at sales offices, and anchor trust in a way that a screen cannot replicate. The most sophisticated developers use both — digital tools for remote reach, and scale models for in-person conversion.",
    },
    {
      q: "What materials are used to make a high-quality architectural scale model?",
      a: "Premium scale models use a combination of ABS plastic or acrylic for structural elements, powder-coated metal for precision detailing, real-texture landscaping materials (sawdust dye, moss flock, sponge foliage), LED fibre-optic lighting for units and amenities, and laser-cut acrylic for glazing. The choice of material depends on the scale, purpose, and display lifespan required.",
    },
    {
      q: "How long does it take to build an architectural scale model for a large township?",
      a: "A detailed township model at 1:500 or 1:300 scale typically takes 45–75 days from drawing receipt to delivery. A single tower or boutique villa cluster at 1:100 can be completed in 20–30 days. Rush timelines are possible with early brief sharing and dedicated production slots.",
    },
    {
      q: "What scale should I choose for my project's model?",
      a: "For township master plans, 1:1000 or 1:500 gives the full picture. For mid-rise or high-rise towers, 1:300 or 1:200 shows podium detail well. For luxury villas, duplex units, or showflat replicas, 1:100 or 1:50 captures interior layouts and finish quality. Your AML team will recommend the right scale based on your sales office footprint.",
    },
    {
      q: "Can the model be updated if the design changes during construction?",
      a: "Yes. Modular model construction allows individual building blocks, phases, or landscape sections to be replaced or updated without rebuilding the entire model. This is important for phased township launches where buildings are released over 3–5 years.",
    },
    {
      q: "How do you safely transport a large scale model across cities?",
      a: "All AML models are built in modular sections and packed in custom foam-lined ATA-rated cases. For transport to Tier-2 cities or international NRI exhibitions, we provide double-walled crating with vibration dampening. Our team can also supervise installation at the destination venue.",
    },
    {
      q: "Can LED lighting and interactive screens be integrated into the model?",
      a: "Yes. We offer LED fibre-optic lighting for individual units, common areas, and pool decks; programmable RGB zone lighting to highlight different phases; embedded touchscreen panels for floor plan selection; and motion-sensor illumination that activates when visitors approach. These features dramatically increase dwell time at the model.",
    },
    {
      q: "What inputs do you need to begin production?",
      a: "We need architectural drawings (AutoCAD DWG files preferred), a site plan with north orientation, elevation drawings for all towers, a landscaping brief or reference images, and your brand colour palette. If drawings are not finalised, we can work from BIM models or even rendered images as a starting reference.",
    },
    {
      q: "Do RERA regulations require a scale model at the sales office?",
      a: "RERA does not mandate a physical scale model, but it requires that all marketed materials accurately represent the approved project layout. A scale model built precisely to approved drawings is therefore the safest marketing tool under RERA — it cannot be accused of misrepresentation the way a stylised render might.",
    },
    {
      q: "How much does an architectural scale model cost in India?",
      a: "Pricing depends on scale, complexity, materials, and interactive features. A single tower model starts from ₹2–4 lakhs; a mid-size residential complex is typically ₹6–15 lakhs; large township models with full LED integration can range from ₹20–50 lakhs. Contact our team for a detailed quote based on your specific project.",
    },
  ];

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
        <div className="absolute inset-0 bg-black/60"></div>
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
            Walk into any top-performing real estate sales office in Mumbai, Pune, Bengaluru, or Hyderabad
            and you will find it at the centre of the room — a hand-crafted architectural scale model,
            lit from within, drawing buyers like a magnet. In a world saturated with VR headsets, CGI
            fly-throughs, and interactive 3D tools, the physical scale model has not just survived —
            it has quietly become the single highest-converting sales asset in premium real estate.
            Here is why.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">
            The Neuroscience of Physical Models: Why Touch Beats Screen
          </h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Neuroscience research consistently shows that <strong>physical objects activate more regions
            of the brain</strong> than digital representations of the same object. When a buyer leans
            over an architectural scale model, their motor cortex, spatial reasoning centres, and
            emotional memory circuits all fire simultaneously. They are not just looking — they are
            mentally inhabiting the space.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A 3D walkthrough video, no matter how photorealistic, is processed by the brain as
            television — a passive observation experience. A scale model, by contrast, is processed
            as <em>reality</em>. The buyer subconsciously scales themselves into the model. They trace
            the route from the lobby to their floor. They notice how the park faces east. They point
            to the unit they want.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            This transition from passive observer to active explorer is precisely what triggers the
            emotional commitment that leads to a booking. Sales teams across India consistently report
            that buyers who spend more than five minutes at a scale model are <strong>3–4× more
            likely to book</strong> than those who only watch a presentation screen.
          </p>

          {/* Inline image 1 */}
          <div className="rounded-2xl overflow-hidden mb-12">
            <img
              src="/images/services/architectural-scale-models/2.jpg"
              alt="Detailed architectural scale model of a luxury residential township"
              className="w-full h-72 md:h-96 object-cover"
            />
            <p className="text-xs text-gray-400 text-center mt-2 italic">
              A detailed township scale model with LED lighting — Alliance Media Labs
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">
            The Trust Gap That Digital Cannot Bridge
          </h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Indian real estate buyers carry a deep-seated skepticism born of a generation of undelivered
            promises. Delays, design changes, amenity deletions — these experiences have made the modern
            buyer acutely suspicious of marketing materials. A render can be made to look like anything.
            A VR tour can exaggerate ceiling heights and views. But a precisely built architectural scale
            model, constructed to approved drawings and placed under glass in a sales office, communicates
            one thing above all else: <strong>we are serious, and this is real</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The physical permanence of a scale model is itself a trust signal. It cannot be edited
            overnight. It exists in three dimensions and can be photographed from every angle. It
            invites scrutiny rather than avoiding it. For a developer launching a ₹5 crore or ₹50 crore
            product, this tangibility is not a marketing luxury — it is a psychological necessity.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            RERA-registered projects gain an additional benefit: a scale model built precisely to
            approved drawings is the safest possible marketing tool under RERA, because it represents
            only what has been officially sanctioned — unlike a render, which can depict aspirational
            finishes that may not be delivered.
          </p>

          {/* Feature grid — what makes a premium model */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">
            What Separates a Premium Scale Model from an Average One
          </h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Not all scale models are created equal. The difference between a model that impresses
            and one that underwhelms comes down to six craft decisions:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                icon: "ri-landscape-line",
                title: "Landscape Realism",
                desc: "Sponge foliage dyed to species-accurate colours, model-scale street furniture, and water features with actual resin pooling create a miniature world that feels lived-in rather than toylike.",
              },
              {
                icon: "ri-lightbulb-line",
                title: "LED Fibre-Optic Lighting",
                desc: "Individual unit lighting, programmable zone illumination by phase, and underwater LED for pool areas transform an evening model viewing into a cinematic experience that mirrors the project's lifestyle promise.",
              },
              {
                icon: "ri-building-2-line",
                title: "Facade Material Accuracy",
                desc: "ABS plastic panels etched to replicate the actual cladding pattern, powder-coated metal handrails, and laser-cut acrylic glazing ensure the model matches the approved architectural drawings in every visible detail.",
              },
              {
                icon: "ri-map-pin-line",
                title: "Contextual Surroundings",
                desc: "Premium models include the immediate neighbourhood — roads, existing landmarks, the metro line, the river — giving buyers the spatial context to understand why this location commands a premium.",
              },
              {
                icon: "ri-cursor-line",
                title: "Interactive Integration",
                desc: "Touchscreen panels embedded in the model table allow buyers to select a floor, highlight a unit, or view a floor plan — merging the tactile power of the physical model with the information depth of digital tools.",
              },
              {
                icon: "ri-shield-check-line",
                title: "Archival Durability",
                desc: "Models built for long-term sales office deployment use UV-stable paints, tempered glass display cases, and anti-static protective coatings to remain pristine for 3–5 years of continuous display.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 bg-gray-50 rounded-xl">
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

          {/* Inline image 2 */}
          <div className="rounded-2xl overflow-hidden mb-12">
            <img
              src="/images/services/architectural-scale-models/4.jpg"
              alt="LED-lit architectural scale model detail showing tower facades and landscaping"
              className="w-full h-72 md:h-96 object-cover"
            />
            <p className="text-xs text-gray-400 text-center mt-2 italic">
              Fibre-optic lit tower model with landscape detailing — Alliance Media Labs
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">
            The Scale Model as a Sales Office Centrepiece Strategy
          </h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The placement and presentation of a scale model within a sales experience centre is itself
            a science. Leading sales office designers treat the model as the room&apos;s anchor — the
            first thing a buyer sees on entry and the last thing they interact with before stepping into
            the closing booth.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A well-designed sales office journey works as follows: The buyer enters and is immediately
            drawn to the model, which gives them a macro understanding of the project. A sales manager
            then walks them through the model, pointing out their specific building, the amenities deck,
            the view corridor. Only after this spatial orientation does the buyer sit down to review
            floor plans and pricing — arriving at that conversation already emotionally anchored.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            This sequence is not accidental. It mirrors the way the brain processes decisions: emotion
            first, logic second. The scale model handles the emotional priming. Everything that follows
            is the logical justification for a decision the buyer has already made instinctively.
          </p>

          {/* Section 4 — Scale choices */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">
            Choosing the Right Scale: A Developer&apos;s Guide
          </h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Scale selection is the first and most consequential decision in the model brief. The wrong
            scale can make a luxury project look cramped, or make an intimate boutique development
            look sparse. Here is a practical guide:
          </p>

          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-4 py-3 text-left font-semibold">Project Type</th>
                  <th className="px-4 py-3 text-left font-semibold">Recommended Scale</th>
                  <th className="px-4 py-3 text-left font-semibold">What It Shows Best</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Large Township (50+ acres)", "1:1000 or 1:500", "Phase layout, road network, macro amenities"],
                  ["Mid-Rise Residential Complex", "1:300 or 1:200", "Building massing, podium, landscaping"],
                  ["Single High-Rise Tower", "1:200 or 1:150", "Facade detail, setbacks, tower crown design"],
                  ["Luxury Villa Cluster", "1:100", "Individual villa volumes, private gardens, driveways"],
                  ["Showflat / Unit Interior", "1:50 or 1:25", "Room proportions, furniture layout, ceiling features"],
                  ["Commercial / Mixed-Use", "1:300 or 1:200", "Retail podium, office floors, connectivity"],
                ].map(([type, scale, shows], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-3 text-gray-800 font-medium border-b border-gray-100">{type}</td>
                    <td className="px-4 py-3 text-yellow-600 font-semibold border-b border-gray-100">{scale}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{shows}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Inline image 3 */}
          <div className="rounded-2xl overflow-hidden mb-12">
            <img
              src="/images/services/architectural-scale-models/6.jpg"
              alt="Large-scale township architectural model showing roads, towers, and amenities"
              className="w-full h-72 md:h-96 object-cover"
            />
            <p className="text-xs text-gray-400 text-center mt-2 italic">
              Township-scale model at 1:500 — Alliance Media Labs
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">
            When Scale Models Outperform VR and 3D Walkthroughs
          </h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            VR tours and 3D walkthroughs excel at showing interior finishes, material quality, and
            the emotional feel of a space. But they have a structural limitation: they are inherently
            first-person experiences. The buyer is always inside the project, never able to see it
            as a whole.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A scale model solves this. It gives the buyer a <strong>god-eye view</strong> of the
            entire project — showing how the towers relate to each other, how the park is positioned
            relative to the main building, how Phase 1 connects to Phase 2. This macro understanding
            is critical for township decisions, where buyers are investing in a neighbourhood, not
            just an apartment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            There are five specific scenarios where a scale model consistently outperforms digital:
          </p>

          <div className="space-y-4 mb-10">
            {[
              { num: "01", title: "Large Group Presentations", desc: "A scale model can be viewed simultaneously by 8–12 people. A VR headset accommodates one person at a time. For channel partner presentations, investor days, or group site visits, the model wins by design." },
              { num: "02", title: "NRI and Diaspora Buyers", desc: "NRI buyers making multi-crore decisions from abroad typically visit on short trips. A scale model gives them a definitive physical reference that they can photograph, share with family, and return to — creating a tangible anchor for a remote decision." },
              { num: "03", title: "Senior Buyer Demographics", desc: "Buyers above 55 — a significant segment for retirement communities and senior living projects — are more comfortable with physical objects than digital interfaces. A model is inclusive in a way that a VR headset is not." },
              { num: "04", title: "Government and Institutional Sales", desc: "Government housing projects, PSU staff housing, and institutional bulk sales involve committees, not individuals. A scale model facilitates group deliberation and creates a shared visual reference for multi-stakeholder decisions." },
              { num: "05", title: "Media and PR Launches", desc: "A scale model is photogenic in a way that a screen presentation is not. Press coverage of a project launch almost always features the model — the newspaper photograph, the social media post, the news segment. The model is PR infrastructure." },
            ].map((item) => (
              <div key={item.num} className="flex gap-4 p-5 border border-gray-200 rounded-xl">
                <span className="text-3xl font-black text-yellow-400 leading-none flex-shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-black mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section 6 */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">
            The Alliance Media Labs Approach to Scale Model Production
          </h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Alliance Media Labs, we treat every architectural scale model as a piece of precision
            craft — not a commodity product. Our production process begins with a deep brief: we study
            the approved architectural drawings, understand the project&apos;s market positioning,
            and align the model&apos;s level of detail with the sales experience it needs to support.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our models are built by a team of trained model-makers using CNC-cut acrylic and ABS
            structural cores, hand-finished facades, real-texture landscape materials, and LED
            fibre-optic lighting systems integrated before final assembly. Every model goes through
            a client review at the 60% completion stage, ensuring any design refinements can be
            incorporated before final finishing.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            We have built models for some of India&apos;s most recognisable developers — from township
            launches covering hundreds of acres to intimate luxury villa clusters of eight homes.
            Each model ships in custom-built protective cases, with installation supervision at the
            destination sales office.
          </p>

          {/* Inline image 4 */}
          <div className="rounded-2xl overflow-hidden mb-12">
            <img
              src="/images/services/architectural-scale-models/3.jpg"
              alt="Scale model production process showing hand-finishing of facade details"
              className="w-full h-72 md:h-96 object-cover"
            />
            <p className="text-xs text-gray-400 text-center mt-2 italic">
              Precision model production — Alliance Media Labs
            </p>
          </div>

          {/* FAQ Section */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-1 bg-yellow-400 mb-8"></div>

          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-black mb-3 flex items-start gap-3">
                  <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-black text-black flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm pl-9">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Conclusion</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The architectural scale model is not a relic of pre-digital marketing. It is the one
            sales tool that digital technology has consistently failed to replace — because it operates
            in a dimension that screens cannot reach: the physical world that buyers trust with their
            bodies, not just their eyes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            In India&apos;s fiercely competitive real estate market, where buyers carry both ambition
            and skepticism into every sales office visit, a meticulously crafted architectural scale
            model is the silent salesperson that never loses its composure, never oversells, and
            never needs a day off. It works every hour the sales office is open — drawing crowds,
            building trust, and closing deals.
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
            Commission Your Architectural Scale Model
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Talk to our team today for a detailed consultation and quote tailored to your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services/architectural-scale-models"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors"
            >
              View Scale Model Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SCALE MODEL MAKING — COMPLETE GUIDE
   ───────────────────────────────────────────────────────────── */
function ScaleModelMakingGuideArticle({ post }: { post: ReturnType<typeof getPostBySlug> }) {
  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-black pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/services/architectural-scale-models/1.jpg"
            alt="Scale model making in India — architectural miniature by Alliance Media Labs"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-gray-400 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <div className="container mx-auto px-6 max-w-4xl py-16">

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* TOC */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
          <h2 className="text-lg font-bold text-black mb-4">In This Guide</h2>
          <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
            <li><a href="#what-are" className="hover:text-yellow-500 transition-colors">What Is Architectural Scale Model Making?</a></li>
            <li><a href="#types" className="hover:text-yellow-500 transition-colors">Types of Architectural Scale Models</a></li>
            <li><a href="#process" className="hover:text-yellow-500 transition-colors">The Complete Scale Model Making Process</a></li>
            <li><a href="#materials" className="hover:text-yellow-500 transition-colors">Materials Used in Miniature Model Making</a></li>
            <li><a href="#scale-ratios" className="hover:text-yellow-500 transition-colors">Scale Ratios — Which One Is Right for You?</a></li>
            <li><a href="#choose" className="hover:text-yellow-500 transition-colors">How to Choose a Scale Model Making Company</a></li>
            <li><a href="#cost" className="hover:text-yellow-500 transition-colors">Cost of Architectural Scale Models in India</a></li>
            <li><a href="#vs-digital" className="hover:text-yellow-500 transition-colors">Scale Models vs Digital Visualization</a></li>
            <li><a href="#faq" className="hover:text-yellow-500 transition-colors">Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* Section 1 — What Are */}
        <section id="what-are" className="mb-14">
          <h2 className="text-3xl font-bold text-black mb-6">What Is Architectural Scale Model Making?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Architectural scale model making is the craft of building a precisely proportioned physical replica of a building, township, infrastructure project, or landscape. These three-dimensional miniatures are crafted at a fraction of the actual size — typically anywhere between 1:50 and 1:2000 — preserving every architectural detail, landscaping element, road network, and structural nuance of the original design.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In India's competitive real estate market, scale model making has evolved from a simple presentation tool into a sophisticated sales instrument. When a prospective buyer walks into a project site office and sees a premium miniature model illuminated with fibre-optic lighting, phase-wise LED systems, and hand-crafted landscaping, the emotional impact is immediate and powerful — far beyond what any render or animation can replicate.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The discipline sits at the intersection of architecture, engineering, and fine craftsmanship. A professional <strong>3D scale model maker</strong> must read and interpret CAD drawings, understand structural and material properties, operate CNC routers and laser cutters with precision, and apply hand-finishing skills to achieve the lifelike quality that top developers demand.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Alliance Media Labs has been delivering high-precision architectural scale models for India's leading real estate developers, infrastructure companies, and government agencies. Our models combine digital fabrication technology with master craftsmanship — built to impress investors, buyers, and approval committees alike.
          </p>
        </section>

        {/* Section 2 — Types */}
        <section id="types" className="mb-14">
          <h2 className="text-3xl font-bold text-black mb-6">Types of Architectural Scale Models</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Not all projects need the same type of model. The right format depends on the size of the development, the intended audience, and the stage of the sales or approval process.
          </p>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-black mb-2">1. Residential Housing Models</h3>
              <p className="text-gray-700 leading-relaxed">
                Built for individual villas, apartment blocks, or gated communities. These models showcase building elevations, floor layouts, balcony designs, landscaping, and amenity zones such as pools, gyms, and clubhouses. They are the most common type used in pre-launch sales offices across India's metros and Tier 1 cities.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-black mb-2">2. Township Master Plan Models</h3>
              <p className="text-gray-700 leading-relaxed">
                These are large-format models — often spanning 8 to 20 feet — built to represent integrated townships, SEZs, and master-planned communities. They depict roads, sector divisions, phase boundaries, open spaces, and utility infrastructure, making them ideal for government presentations, investor roadshows, and large project launches.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-black mb-2">3. Commercial and Mixed-Use Models</h3>
              <p className="text-gray-700 leading-relaxed">
                Office parks, business districts, malls, and mixed-use high-rises require models that convey scale, density, and connectivity. These models often include removable floor plates, interior fit-out displays, and directional lighting to highlight retail podiums or anchor zones.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-black mb-2">4. Infrastructure and Government Project Models</h3>
              <p className="text-gray-700 leading-relaxed">
                Highways, metro rail corridors, airports, ports, and smart city developments are frequently presented using large terrain models. These capture topography, existing structures, and new infrastructure overlays — critical for government approvals, public consultations, and media presentations.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-black mb-2">5. Interior Show Flat Models</h3>
              <p className="text-gray-700 leading-relaxed">
                Cutaway or open-top models that show the internal layout of a single apartment or villa — furniture arrangement, ceiling heights, kitchen design, and room adjacencies. These are especially effective for off-plan sales when a physical show flat cannot yet be constructed.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-black mb-2">6. Heritage Conservation and Institutional Models</h3>
              <p className="text-gray-700 leading-relaxed">
                Museums, universities, and heritage bodies commission detailed scale replicas of monuments, campuses, and historical structures. These models prioritise accuracy of architectural detail and historical material representation over commercial sales utility.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 — Process */}
        <section id="process" className="mb-14">
          <h2 className="text-3xl font-bold text-black mb-6">The Complete Scale Model Making Process</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A professionally executed scale model does not emerge from guesswork. Every model Alliance Media Labs produces follows a rigorous six-stage workflow — from drawing review to final delivery and installation — ensuring dimensional accuracy and finish quality that withstands close client scrutiny.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black text-lg">1</div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Design Brief and Drawing Review</h3>
                <p className="text-gray-700 leading-relaxed">
                  We begin by reviewing your architectural drawings — AutoCAD files, BIM models, site plans, and elevation sheets. Our team calculates the optimal scale ratio based on project size, model base dimensions, and the level of detail required. We confirm scope: which phases to include, what landscaping to show, and whether LEDs, water features, or interactive elements are needed. A detailed production brief is signed off before any fabrication begins.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black text-lg">2</div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Digital Modelling and CNC Preparation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our <strong>3D scale model maker</strong> team converts 2D drawings into precise 3D digital models using specialised CAD software. Every building component — walls, columns, rooflines, staircases, railings — is modelled to exact scaled dimensions. These digital files drive our CNC routers and laser cutters, eliminating the human measurement error that plagued traditional hand-cut model making.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black text-lg">3</div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Material Cutting and Fabrication</h3>
                <p className="text-gray-700 leading-relaxed">
                  Components are precision-cut from acrylic, ABS plastic, MDF, foam board, or specialist architectural modelling materials, depending on the element type. Glass facades are simulated with clear acrylic panels. Road networks are laser-etched onto the base. Green areas are built up using model grass, foam foliage, and hand-placed tree armatures. This is the most time-intensive stage of miniature model making — it can take anywhere from 5 to 40 working days depending on model size and complexity.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black text-lg">4</div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Assembly and Electrical Integration</h3>
                <p className="text-gray-700 leading-relaxed">
                  Individual components are assembled on the base board using precision adhesives and alignment jigs. LED lighting systems — warm white for habitable buildings, cool white for commercial, amber for landscape paths — are wired into hidden channels beneath the base. Phase-wise lighting controls allow salespeople to highlight specific blocks independently during a client walkthrough. Water simulation features, if specified, are plumbed and tested at this stage.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black text-lg">5</div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Painting, Finishing, and Landscaping</h3>
                <p className="text-gray-700 leading-relaxed">
                  Buildings are painted in custom-mixed colours matching your actual facade specifications. Window frames, balconies, and cladding patterns are hand-painted with fine brushes. Landscaping is layered in — ground cover, shrubs, specimen trees, water body colouring, and amenity area detailing. A protective acrylic cover and illuminated base complete the assembly. This final stage is where our craft sets Alliance Media Labs apart — it is the difference between a model that looks like a toy and one that looks like a luxury presentation piece.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black text-lg">6</div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Quality Check, Packaging, and Delivery</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every model undergoes a structured quality inspection — checking dimensional accuracy, lighting function, finish consistency, and structural rigidity. Models are then photographed for documentation, packed in custom foam-lined crates, and transported to site by our own team. We supervise installation, test all electrics on-site, and brief your sales team on operation and maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — Materials */}
        <section id="materials" className="mb-14">
          <h2 className="text-3xl font-bold text-black mb-6">Materials Used in Miniature Model Making</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Material selection in miniature model making is not arbitrary. Each material serves a specific structural or visual purpose, and the choice directly affects the model's durability, finish quality, and cost. Here's how we think about material selection:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-bold text-black mb-2">Acrylic (PMMA)</h3>
              <p className="text-gray-700 text-sm leading-relaxed">The workhorse of architectural model making. Available in transparent, frosted, and coloured variants. Used for glazing, water surfaces, illuminated panels, and structural building shells. Machines cleanly on CNC routers and laser cutters. Bonds with solvent cement for invisible joints.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-bold text-black mb-2">ABS Plastic</h3>
              <p className="text-gray-700 text-sm leading-relaxed">High-strength thermoplastic used for complex moulded components — curved facades, dome structures, and bespoke architectural features. Can be vacuum-formed, 3D-printed, or CNC-milled. Paints and primes exceptionally well.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-bold text-black mb-2">MDF and Foam Board</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Used for internal structure, base boards, terrain sculpting, and wall infill. MDF is dimensionally stable and takes paint well. High-density foam board is used for terrain contouring and lightweight construction of large base sections.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-bold text-black mb-2">Model Foliage and Ground Cover</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Professional architectural model grass mats, scatter foliage, and pre-made tree armatures from specialist model suppliers. Applied in layers to create depth and realism. Colours are selected to represent planted species — not generic green.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-bold text-black mb-2">Laser-Etched Road and Paving Surfaces</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Roads, footpaths, parking bays, and pavement patterns are engraved directly onto the base or road surface material using laser etching. This produces crisp, consistent line work impossible to achieve by hand at small scales.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-bold text-black mb-2">LED Systems and Fibre Optics</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Warm-white, cool-white, and coloured SMD LEDs are wired into buildings and landscape elements. Fibre optic strands are used for star-field effects, swimming pool lighting, and ultra-fine feature illumination where conventional LEDs are too bulky.</p>
            </div>
          </div>
        </section>

        {/* Section 5 — Scale Ratios */}
        <section id="scale-ratios" className="mb-14">
          <h2 className="text-3xl font-bold text-black mb-6">Scale Ratios — Which One Is Right for Your Project?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Choosing the correct scale ratio is one of the most important decisions in scale model making. Too large a scale and the model becomes physically unmanageable; too small and critical detail is lost. The right ratio balances visual impact with practical constraints.
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Scale Ratio</th>
                  <th className="px-4 py-3 text-left font-semibold">Best For</th>
                  <th className="px-4 py-3 text-left font-semibold">Typical Model Size</th>
                  <th className="px-4 py-3 text-left font-semibold">Level of Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">1:50</td>
                  <td className="px-4 py-3 text-gray-700">Individual villa, show flat layout</td>
                  <td className="px-4 py-3 text-gray-700">2–4 ft</td>
                  <td className="px-4 py-3 text-gray-700">Very High — furniture visible</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">1:100</td>
                  <td className="px-4 py-3 text-gray-700">Apartment block, boutique development</td>
                  <td className="px-4 py-3 text-gray-700">3–6 ft</td>
                  <td className="px-4 py-3 text-gray-700">High — floor-by-floor detail</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">1:200</td>
                  <td className="px-4 py-3 text-gray-700">Mid-size residential complex, commercial tower</td>
                  <td className="px-4 py-3 text-gray-700">4–8 ft</td>
                  <td className="px-4 py-3 text-gray-700">Medium-High — window and balcony detail</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">1:500</td>
                  <td className="px-4 py-3 text-gray-700">Large housing project, township phase</td>
                  <td className="px-4 py-3 text-gray-700">6–12 ft</td>
                  <td className="px-4 py-3 text-gray-700">Medium — building massing, roads, landscape</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">1:1000</td>
                  <td className="px-4 py-3 text-gray-700">Full township master plan</td>
                  <td className="px-4 py-3 text-gray-700">8–16 ft</td>
                  <td className="px-4 py-3 text-gray-700">Medium — sector layout, phase zoning</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">1:2000+</td>
                  <td className="px-4 py-3 text-gray-700">Regional infrastructure, smart city overview</td>
                  <td className="px-4 py-3 text-gray-700">10–20 ft</td>
                  <td className="px-4 py-3 text-gray-700">Low — overall spatial relationships</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm italic">
            Note: Custom ratios are possible when standard ratios don't fit your site dimensions or base table constraints. Our team will calculate the optimal ratio during the design brief phase.
          </p>
        </section>

        {/* Section 6 — How to Choose */}
        <section id="choose" className="mb-14">
          <h2 className="text-3xl font-bold text-black mb-6">How to Choose a Scale Model Making Company in India</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            India has hundreds of vendors calling themselves a scale model making company — ranging from single-person workshops to larger production studios. Not all are equal. Here are six questions to ask before you commission your next architectural model:
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 text-yellow-400 font-bold text-xl mt-1">01</div>
              <div>
                <h3 className="text-lg font-bold text-black mb-2">Do they work directly from your CAD/BIM drawings?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A professional <strong>scale model making company</strong> should be able to work directly from AutoCAD DWG, Revit, or SketchUp files — not hand-trace printed drawings. CNC-driven fabrication from digital files eliminates measurement errors and produces the dimensional precision your architects expect.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-yellow-400 font-bold text-xl mt-1">02</div>
              <div>
                <h3 className="text-lg font-bold text-black mb-2">Can they show completed project portfolios similar to yours?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Photographs of past models are the best predictor of quality. Ask to see projects of similar type, scale, and complexity. Pay attention to window alignment, edge finish quality, landscape realism, and LED integration — these are the areas where lesser vendors cut corners.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-yellow-400 font-bold text-xl mt-1">03</div>
              <div>
                <h3 className="text-lg font-bold text-black mb-2">What is their in-house capability versus outsourcing?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Some vendors outsource CNC cutting, painting, or electrical work to third parties — introducing quality control gaps and timeline risks. The best scale model making companies control the full production process in-house: digital modelling, CNC/laser cutting, hand-finishing, painting, and electrical integration.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-yellow-400 font-bold text-xl mt-1">04</div>
              <div>
                <h3 className="text-lg font-bold text-black mb-2">Do they provide a formal production timeline?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Reliable vendors provide a written production schedule with milestones — drawing review sign-off, prototype component review, assembly completion, quality check, dispatch. If a vendor can't provide a structured timeline, your delivery risk is high, especially if you have a launch date to meet.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-yellow-400 font-bold text-xl mt-1">05</div>
              <div>
                <h3 className="text-lg font-bold text-black mb-2">What are the post-delivery support terms?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Models live in sales offices for months or years. LED bulbs fail. Acrylic components get scratched. Landscaping elements get accidentally dislodged. Ask what the maintenance and repair policy is, and whether the vendor will travel to site if an issue arises.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 text-yellow-400 font-bold text-xl mt-1">06</div>
              <div>
                <h3 className="text-lg font-bold text-black mb-2">Are they familiar with your city's developer market?</h3>
                <p className="text-gray-700 leading-relaxed">
                  A vendor who has worked with developers in Mumbai, Delhi, Bangalore, Pune, and Hyderabad understands regional project typologies, builder preferences, and site office space constraints. Local experience shortens the briefing cycle and reduces the risk of design misalignment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 — Cost */}
        <section id="cost" className="mb-14">
          <h2 className="text-3xl font-bold text-black mb-6">Cost of Architectural Scale Models in India</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Scale model pricing in India varies enormously based on size, complexity, material quality, and the level of finish. The following ranges reflect 2026 market pricing for professionally produced architectural scale models — they do not include rock-bottom quotations from unqualified vendors who deliver low-quality work.
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Project Type</th>
                  <th className="px-4 py-3 text-left font-semibold">Scale</th>
                  <th className="px-4 py-3 text-left font-semibold">Approx. Cost Range (INR)</th>
                  <th className="px-4 py-3 text-left font-semibold">Timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Individual Villa / Bungalow</td>
                  <td className="px-4 py-3 text-gray-700">1:50 – 1:100</td>
                  <td className="px-4 py-3 text-gray-700">₹80,000 – ₹2,00,000</td>
                  <td className="px-4 py-3 text-gray-700">10–20 days</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Mid-Rise Residential Block</td>
                  <td className="px-4 py-3 text-gray-700">1:100 – 1:200</td>
                  <td className="px-4 py-3 text-gray-700">₹1,50,000 – ₹4,00,000</td>
                  <td className="px-4 py-3 text-gray-700">15–25 days</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Large Residential Complex (with LED)</td>
                  <td className="px-4 py-3 text-gray-700">1:200 – 1:500</td>
                  <td className="px-4 py-3 text-gray-700">₹3,00,000 – ₹8,00,000</td>
                  <td className="px-4 py-3 text-gray-700">20–35 days</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Township Master Plan Model</td>
                  <td className="px-4 py-3 text-gray-700">1:500 – 1:1000</td>
                  <td className="px-4 py-3 text-gray-700">₹6,00,000 – ₹20,00,000</td>
                  <td className="px-4 py-3 text-gray-700">30–50 days</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Infrastructure / Government Model</td>
                  <td className="px-4 py-3 text-gray-700">1:1000 – 1:2000</td>
                  <td className="px-4 py-3 text-gray-700">₹10,00,000 – ₹40,00,000</td>
                  <td className="px-4 py-3 text-gray-700">40–70 days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
            <p className="text-gray-800 text-sm leading-relaxed">
              <strong>What drives cost up:</strong> LED phase-wise zoning, water simulation features, motorised rotating bases, custom acrylic covers with integrated lighting, extremely fine scale detail at 1:50, and tight delivery timelines requiring parallel production teams.
            </p>
            <p className="text-gray-800 text-sm leading-relaxed mt-3">
              <strong>What drives cost down:</strong> Standard scale ratios with existing component libraries, single-phase builds without interactive features, and projects where digital files are clean and complete from day one.
            </p>
          </div>
        </section>

        {/* Section 8 — vs Digital */}
        <section id="vs-digital" className="mb-14">
          <h2 className="text-3xl font-bold text-black mb-6">Architectural Scale Models vs Digital Visualization — Which Is Better?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This is one of the most common questions developers ask. The honest answer is: they serve different buyer psychology, and the strongest sales offices use both.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Digital visualization — 3D walkthroughs, VR tours, 3D renders — delivers immersive visual experience, unlimited iteration speed, and the ability to show interior finishes in photorealistic detail before construction begins. These are powerful tools for remote buyers, social media marketing, and early-stage concept presentation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Physical architectural scale models do something no screen can replicate: they create a tangible, spatial experience. A buyer standing in front of a premium scale model can immediately understand the relationship between blocks, the depth of the landscaping buffer, the height of surrounding buildings relative to theirs, and the overall site context — all in a single glance. Research in consumer neuroscience consistently shows that physical interaction with objects triggers greater emotional engagement and memory retention than viewing the same information on a screen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            India's top developers — those running flagship launches in Mumbai's Western suburbs, Gurugram's Golf Course Extension, Bangalore's North and East corridors, and Pune's Hinjewadi belt — routinely invest in both. The scale model anchors the sales office physically. The 3D walkthrough extends the reach digitally to NRI buyers and investors who cannot visit in person.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If your budget forces a choice, consider your buyer profile. For high-ticket projects (₹2 Cr+ ticket size) with on-site buyer visits as the primary sales channel, a premium architectural scale model will consistently outperform any digital tool in terms of sales office conversion rate. For projects relying heavily on digital and broker channels, the 3D walkthrough takes priority. For landmark projects, invest in both.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="text-3xl font-bold text-black mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-black mb-3">How long does scale model making take?</h3>
              <p className="text-gray-700 leading-relaxed">
                Timeline depends on model size and complexity. A single residential block typically takes 15–25 working days from drawing sign-off to delivery. A large township master plan model can take 40–60 days. We recommend building in at least 4 weeks of buffer before your project launch date.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-black mb-3">What files do you need to start production?</h3>
              <p className="text-gray-700 leading-relaxed">
                We work from AutoCAD DWG site plans and building floor plans, elevation drawings, and 3D model files (Revit or SketchUp preferred). The more complete your digital files, the faster and more accurate the production. If your drawings are still at schematic stage, we can work from that but will require multiple review rounds.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-black mb-3">Can the scale model be updated if the design changes during construction?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. We retain the digital model files for all projects, which allows targeted updates without rebuilding the entire model. Facade colour changes, block additions, or landscaping revisions can typically be incorporated within 7–15 days depending on scope.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-black mb-3">Do you deliver and install the model at our site office?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. Our team handles crating, transportation, and on-site installation. We supervise the placement, test all lighting, and brief your sales staff on maintenance and operation. We cover Mumbai, Delhi NCR, Bangalore, Pune, Hyderabad, Gurugram, and other major Indian cities.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-black mb-3">What makes Alliance Media Labs different from other scale model making companies?</h3>
              <p className="text-gray-700 leading-relaxed">
                We combine CNC precision with master hand-craft finishing — a combination that most Indian vendors don't offer. Our miniature model making team has worked on over 200 real estate and infrastructure projects across India. We control the full production chain in-house: digital modelling, CNC fabrication, painting, electrical integration, and delivery. We also offer a post-delivery warranty and site visit for repairs.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-black mb-3">Can you make models for RERA registration or government approval purposes?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. Our models are built to architectural accuracy standards required for regulatory presentations. We provide dimensional verification documentation on request. For government tenders and municipal approvals, we also produce scaled terrain models that accurately represent topography and infrastructure alignment.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-black mb-6">Conclusion — Why Professional Scale Model Making Still Matters in 2026</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In an era where every developer has access to the same 3D renders and CGI walkthroughs, a premium handcrafted architectural scale model is the one thing your sales office will have that no competitor can instantly replicate. It signals commitment. It signals quality. And it gives buyers the tangible spatial experience that closes high-ticket deals.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The key is choosing the right <strong>scale model making company</strong> — one that operates with CNC precision, genuine craft skill, and the project management discipline to deliver on time. Cutting corners on model quality is a false economy when the model will be the centrepiece of your sales office for the next 18–24 months.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Alliance Media Labs has built its reputation as India's trusted <strong>3D scale model maker</strong> by delivering models that routinely stop visitors in their tracks and give your sales team a powerful conversation starter. If you're planning a project launch and want to know what's possible, reach out to our team today for a no-obligation consultation.
          </p>
        </section>

        {/* Related Posts */}
        <div className="border-t border-gray-100 pt-12 mb-12">
          <h3 className="text-xl font-bold text-black mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/architectural-scale-models-india-real-estate" className="group border border-gray-200 rounded-xl p-5 hover:border-yellow-400 transition-colors">
              <p className="text-xs text-yellow-500 font-semibold uppercase mb-2">Scale Models</p>
              <h4 className="font-bold text-black group-hover:text-yellow-500 transition-colors leading-tight">The Silent Salesperson: How Architectural Scale Models Close Deals That Digital Can&apos;t</h4>
            </Link>
            <Link href="/blog/real-estate-drone-photography-india" className="group border border-gray-200 rounded-xl p-5 hover:border-yellow-400 transition-colors">
              <p className="text-xs text-yellow-500 font-semibold uppercase mb-2">Drone Photography</p>
              <h4 className="font-bold text-black group-hover:text-yellow-500 transition-colors leading-tight">Real Estate Drone Photography in India: The Complete Guide (2026)</h4>
            </Link>
          </div>
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
            Commission Your Architectural Scale Model
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Talk to our team today for a detailed consultation and quote tailored to your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services/architectural-scale-models"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors"
            >
              View Scale Model Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   REAL ESTATE MARKETING VIDEOS — 7 TYPES HUB POST
   ───────────────────────────────────────────────────────────── */
function RealEstateMarketingVideosArticle({ post }: { post: ReturnType<typeof getPostBySlug> }) {
  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-black pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/services/3d-walkthrough-videos/1.jpg"
            alt="Real estate marketing videos — 7 types for Indian developers"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-gray-400 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <div className="container mx-auto px-6 max-w-4xl py-16">

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* TOC */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
          <h2 className="text-lg font-bold text-black mb-4">In This Guide</h2>
          <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
            <li><a href="#why-video" className="hover:text-yellow-500 transition-colors">Why Real Estate Video Marketing Wins in 2026</a></li>
            <li><a href="#type-1" className="hover:text-yellow-500 transition-colors">Type 1 — 3D Walkthrough Videos</a></li>
            <li><a href="#type-2" className="hover:text-yellow-500 transition-colors">Type 2 — Aerial Drone Videos</a></li>
            <li><a href="#type-3" className="hover:text-yellow-500 transition-colors">Type 3 — Construction Update Videos</a></li>
            <li><a href="#type-4" className="hover:text-yellow-500 transition-colors">Type 4 — Virtual Reality (VR) Tours</a></li>
            <li><a href="#type-5" className="hover:text-yellow-500 transition-colors">Type 5 — Interior Cinematic Walkthroughs</a></li>
            <li><a href="#type-6" className="hover:text-yellow-500 transition-colors">Type 6 — Location &amp; Route Videos</a></li>
            <li><a href="#type-7" className="hover:text-yellow-500 transition-colors">Type 7 — 3D Renders &amp; Isometric Visuals</a></li>
            <li><a href="#mix" className="hover:text-yellow-500 transition-colors">Building the Right Video Marketing Mix</a></li>
            <li><a href="#comparison" className="hover:text-yellow-500 transition-colors">Comparison Table</a></li>
            <li><a href="#faq" className="hover:text-yellow-500 transition-colors">Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* Intro */}
        <section id="why-video" className="mb-14">
          <h2 className="text-3xl font-bold text-black mb-6">Why Real Estate Video Marketing Wins in 2026</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Indian real estate buyers have never been more visually literate — or more demanding. A static brochure and a site plan no longer move units the way they once did. Today&apos;s buyer expects to experience the project before they visit, understand it before they invest, and trust it before they sign. That trust is built through <strong>real estate marketing videos</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The numbers back this up. Listings with video content receive over 400% more enquiries than those without. Project launches supported by <strong>real estate video production</strong> content — walkthroughs, drone aerials, VR tours — consistently see faster sales velocity, higher booking-to-site-visit conversion rates, and stronger NRI buyer engagement.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            But &quot;video&quot; is not a monolith. There are seven distinct types of <strong>real estate marketing videos</strong>, each serving a different buyer mindset, a different moment in the sales funnel, and a different distribution channel. The developers who achieve the best results don&apos;t just commission one video — they build a deliberate content stack that covers every stage of the buyer journey.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This guide breaks down all seven types — what each one does, who it&apos;s for, when to use it, and how Alliance Media Labs produces it. By the end, you&apos;ll know exactly which combination of <strong>property video production</strong> formats is right for your next project launch.
          </p>
        </section>

        {/* Type 1 */}
        <section id="type-1" className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black text-xl flex-shrink-0">1</div>
            <h2 className="text-3xl font-bold text-black">3D Walkthrough Videos</h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden mb-6 h-64">
            <img src="/images/services/3d-walkthrough-videos/1.jpg" alt="3D walkthrough video for real estate" className="w-full h-full object-cover" />
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The 3D architectural walkthrough video is the single most powerful real estate marketing tool in India. It takes a buyer on a fully rendered, first-person journey through your project — towers, lobbies, apartments, amenities, and landscape — before a single brick has been laid.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A professional 3D walkthrough video captures every material finish, lighting mood, view angle, and spatial proportion in cinematic quality. For pre-launch projects — where buyers must make decisions without seeing a physical product — it transforms uncertainty into confidence.
          </p>
          <h3 className="text-xl font-bold text-black mb-3">Best for:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Pre-launch and soft launch campaigns</li>
            <li>Off-plan sales to NRI and outstation buyers</li>
            <li>Digital marketing: YouTube, Instagram Reels, Facebook Ads</li>
            <li>Sales office screens and presentation decks</li>
            <li>Channel partner and broker briefings</li>
          </ul>
          <h3 className="text-xl font-bold text-black mb-3">What sets a great 3D walkthrough apart:</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cinematic camera movement, photo-real material rendering, accurate natural and artificial lighting, populated environments (people, cars, foliage), and a professional music soundtrack. Low-cost walkthroughs use template camera paths and generic textures — buyers notice the difference immediately.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl mb-4">
            <p className="text-gray-800 text-sm">
              <strong>Alliance Media Labs</strong> produces 3D walkthrough videos using Lumion, Unreal Engine, and 3ds Max V-Ray depending on project size and quality requirements. Our walkthroughs are optimised for both 4K screen display and compressed social delivery.
            </p>
          </div>
          <Link
            href="/services/3d-walkthrough-videos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-600 hover:text-yellow-700 transition-colors"
          >
            Explore our 3D Walkthrough Video Service <i className="ri-arrow-right-line"></i>
          </Link>
          <br />
          <Link
            href="/services/3d-walkthrough-video-company-india"
            className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-600 hover:text-yellow-700 transition-colors mt-2"
          >
            Why choose us as your 3D Walkthrough Video Company <i className="ri-arrow-right-line"></i>
          </Link>
        </section>

        {/* Type 2 */}
        <section id="type-2" className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black text-xl flex-shrink-0">2</div>
            <h2 className="text-3xl font-bold text-black">Aerial Drone Videos</h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden mb-6 h-64">
            <img src="/images/services/drone-shoots/1.jpg" alt="Aerial drone video for real estate" className="w-full h-full object-cover" />
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aerial drone videography gives buyers the one view that no other format can provide: the bird&apos;s-eye perspective of your project in its real geographic context. Location is one of the top three purchase drivers in Indian real estate — and drone video is the most convincing way to demonstrate it.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A well-executed drone video shows proximity to highways, metro stations, schools, business parks, and city landmarks. It reveals the scale of the project, the quality of surrounding development, the depth of landscaping, and the view lines from upper floors. This is context that no 3D render or floor plan can convey.
          </p>
          <h3 className="text-xl font-bold text-black mb-3">Best for:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Demonstrating location advantages and connectivity</li>
            <li>Large township and master plan launches</li>
            <li>Construction progress documentation</li>
            <li>High-impact social media and YouTube content</li>
            <li>Investor and channel partner presentations</li>
          </ul>
          <h3 className="text-xl font-bold text-black mb-3">Regulatory note:</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Commercial drone operations in India require DGCA Remote Pilot Licence (RPL) certification and site-specific permissions for many urban locations. Always verify that your drone vendor is DGCA-compliant — using an unlicensed operator exposes you to legal risk and flight cancellations.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl mb-4">
            <p className="text-gray-800 text-sm">
              Alliance Media Labs operates DGCA-licensed pilots with 4K and 6K cinema drones across Mumbai, Delhi NCR, Bangalore, Pune, Hyderabad, and Gurugram. We handle all airspace permissions and provide colour-graded, music-tracked deliverables.
            </p>
          </div>
          <Link
            href="/services/drone-shoots"
            className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-600 hover:text-yellow-700 transition-colors"
          >
            Explore our Drone Shoot Service <i className="ri-arrow-right-line"></i>
          </Link>
        </section>

        {/* Type 3 */}
        <section id="type-3" className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black text-xl flex-shrink-0">3</div>
            <h2 className="text-3xl font-bold text-black">Construction Update Videos</h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden mb-6 h-64">
            <img src="/images/services/construction-update-videos/1.jpg" alt="Construction update video RERA real estate" className="w-full h-full object-cover" />
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Construction update videos are one of the most underutilised assets in Indian real estate marketing — and one of the most powerful for post-booking buyer retention and RERA compliance. These are regular video dispatches — typically monthly or quarterly — showing actual on-site construction progress, delivered directly to buyers who have already booked.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In an environment where project delays and delivery uncertainty are among the biggest buyer anxieties, a professionally produced construction update video does something no email or PDF can: it shows buyers that their project is physically advancing, their money is being deployed, and the developer is accountable.
          </p>
          <h3 className="text-xl font-bold text-black mb-3">Best for:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Post-booking buyer communication and trust-building</li>
            <li>RERA quarterly progress reporting</li>
            <li>Channel partner confidence updates</li>
            <li>Referral marketing — satisfied buyers share progress</li>
            <li>Financing and bank milestone documentation</li>
          </ul>
          <h3 className="text-xl font-bold text-black mb-3">Format options:</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ground-level walkaround footage with voiceover narration; drone aerials showing slab progress; timelapse sequences; project manager interviews; combination of live site footage with progress-against-plan graphics overlay.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl mb-4">
            <p className="text-gray-800 text-sm">
              Alliance Media Labs offers retainer-based construction video packages — monthly site visits, filming, editing, and delivery within 5 business days — making it the most hassle-free way to maintain buyer communication at scale.
            </p>
          </div>
          <Link
            href="/services/construction-update-videos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-600 hover:text-yellow-700 transition-colors"
          >
            Explore our Construction Update Video Service <i className="ri-arrow-right-line"></i>
          </Link>
        </section>

        {/* Type 4 */}
        <section id="type-4" className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black text-xl flex-shrink-0">4</div>
            <h2 className="text-3xl font-bold text-black">Virtual Reality (VR) Tours</h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden mb-6 h-64">
            <img src="/images/services/virtual-reality-tours/1.jpg" alt="Virtual reality tour for real estate India" className="w-full h-full object-cover" />
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            A virtual reality tour allows buyers to physically step inside your project — using a VR headset or a 360° browser experience — and explore it in full spatial immersion. Unlike a linear walkthrough video, a VR tour is interactive: the buyer controls where they go, what they look at, and how long they stay in each space.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This interactivity is what makes VR tours uniquely powerful for high-ticket real estate. When a buyer can stand in the master bedroom of a ₹4 Cr apartment, look out of the window at a rendered view, and turn around to examine the wardrobes and ceiling height — the purchase decision accelerates dramatically. They are not watching someone else&apos;s experience; they are having their own.
          </p>
          <h3 className="text-xl font-bold text-black mb-3">Best for:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Sales office experiential setups with Oculus/VIVE headsets</li>
            <li>NRI buyer roadshows in Dubai, Singapore, UK, USA</li>
            <li>Premium residential launches (₹2 Cr+ ticket size)</li>
            <li>Virtual property expos and online home fairs</li>
            <li>Luxury hospitality and resort properties</li>
          </ul>
          <h3 className="text-xl font-bold text-black mb-3">Deployment options:</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Standalone VR headset (Oculus Quest 2/3) for sales office use; web-based 360° tour embeddable on your website and shared via link for remote buyers; custom-branded kiosk installations for property expos.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl mb-4">
            <p className="text-gray-800 text-sm">
              Alliance Media Labs builds VR tours in Unreal Engine and custom WebGL environments, optimised for headset, browser, and kiosk deployment. All experiences are fully branded and include hotspot navigation, unit selector overlays, and lead capture integration.
            </p>
          </div>
          <Link
            href="/services/virtual-reality-tours"
            className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-600 hover:text-yellow-700 transition-colors"
          >
            Explore our Virtual Reality Tour Service <i className="ri-arrow-right-line"></i>
          </Link>
        </section>

        {/* Type 5 */}
        <section id="type-5" className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black text-xl flex-shrink-0">5</div>
            <h2 className="text-3xl font-bold text-black">Interior Cinematic Walkthroughs</h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden mb-6 h-64">
            <img src="/images/services/interior-cinematic-walkthrough/1.jpg" alt="Interior cinematic walkthrough real estate" className="w-full h-full object-cover" />
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Where a 3D architectural walkthrough covers the entire project — towers, landscape, amenities — an interior cinematic walkthrough goes deep inside a single unit. It&apos;s a room-by-room, surface-by-surface showcase of your design intent: materials, finishes, furniture, lighting, and atmosphere, rendered in film-quality visual fidelity.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Think of it as a virtual show flat. When physical show flats are too expensive to build at launch — or when you want to showcase multiple configuration types (2BHK, 3BHK, duplex, penthouse) simultaneously — an interior cinematic walkthrough delivers every finish option in a single, shareable video asset.
          </p>
          <h3 className="text-xl font-bold text-black mb-3">Best for:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Luxury residential interior showcase</li>
            <li>Multiple unit type differentiation at a single launch</li>
            <li>Replacing or supplementing physical show flats</li>
            <li>Premium Instagram content and YouTube long-form</li>
            <li>Interior design specification presentations to buyers</li>
          </ul>
          <h3 className="text-xl font-bold text-black mb-3">Distinguishing features:</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Slow, deliberate camera movement. Extreme close-up of material details — stone veining, wood grain, fabric texture. Transitional lighting from day to evening. Stylised composition and colour grade consistent with your brand identity. Background ambience sound design. Duration typically 90 seconds to 3 minutes.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl mb-4">
            <p className="text-gray-800 text-sm">
              Alliance Media Labs&apos; interior cinematic walkthroughs are produced using 3ds Max with V-Ray or Corona render engines, post-processed in DaVinci Resolve for professional colour grading. Each project is storyboarded before rendering to ensure every frame serves the sales narrative.
            </p>
          </div>
          <Link
            href="/services/interior-cinematic-walkthrough"
            className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-600 hover:text-yellow-700 transition-colors"
          >
            Explore our Interior Cinematic Walkthrough Service <i className="ri-arrow-right-line"></i>
          </Link>
        </section>

        {/* Type 6 */}
        <section id="type-6" className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black text-xl flex-shrink-0">6</div>
            <h2 className="text-3xl font-bold text-black">Location &amp; Route Videos</h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden mb-6 h-64">
            <img src="/images/services/route-videos/1.jpg" alt="Location route video real estate marketing" className="w-full h-full object-cover" />
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Location videos and route videos bridge the gap between your project and the world around it. A location video cinematically captures the neighbourhood — nearby landmarks, parks, markets, schools, hospitals, and lifestyle amenities — making the case for why your project&apos;s address is a genuine lifestyle upgrade.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A route video specifically demonstrates the daily commute from your project to key destinations — office parks, metro stations, city centres, airports. For connectivity-driven buyers (particularly in NCR, Pune, and Bangalore tech corridors), proving a commute takes 20 minutes rather than 45 can be the deciding factor.
          </p>
          <h3 className="text-xl font-bold text-black mb-3">Best for:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Peripheral and emerging location projects where connectivity is a key objection</li>
            <li>Lifestyle-led premium projects (hill stations, resort communities)</li>
            <li>City fringe developments targeting metro commuters</li>
            <li>Social media storytelling content alongside product visuals</li>
            <li>Micro-market awareness for channel partners unfamiliar with the location</li>
          </ul>
          <h3 className="text-xl font-bold text-black mb-3">Production approach:</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Combination of ground-level live cinematography, drone aerials, and motion graphics overlays showing distances and travel times. Voice narration or upbeat music depending on tone. Duration: 60–120 seconds for social; 2–4 minutes for full sales presentation.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl mb-4">
            <p className="text-gray-800 text-sm">
              Alliance Media Labs produces route and location AV shoots across India. Our location videos are storyboarded around your project&apos;s specific sales narrative — not generic real estate b-roll templates.
            </p>
          </div>
          <Link
            href="/services/route-videos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-600 hover:text-yellow-700 transition-colors"
          >
            Explore our Route &amp; Location Video Service <i className="ri-arrow-right-line"></i>
          </Link>
        </section>

        {/* Type 7 */}
        <section id="type-7" className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black text-xl flex-shrink-0">7</div>
            <h2 className="text-3xl font-bold text-black">3D Renders &amp; Isometric Visuals</h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden mb-6 h-64">
            <img src="/images/services/3d-renders-isometrics/1.jpg" alt="3D renders and isometric visuals real estate" className="w-full h-full object-cover" />
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            While not video in the traditional sense, 3D architectural renders and isometric visuals are essential components of any real estate marketing content stack. They are the still images — the hero visuals — that appear across every digital and print touchpoint: brochures, hoardings, newspaper ads, social carousels, website landing pages, and investor decks.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Isometric 3D views — the &quot;elevated&quot; perspective that shows the entire master plan or complex from a 45° angle — are particularly powerful for township and large mixed-use projects. They allow buyers to instantly comprehend the full scale, layout, and density of a development in a single visual.
          </p>
          <h3 className="text-xl font-bold text-black mb-3">Types of 3D render deliverables:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Exterior elevation renders (building facade, landscaping)</li>
            <li>Aerial perspective / master plan views</li>
            <li>Isometric township layout renders</li>
            <li>Interior room renders (living, kitchen, master bedroom)</li>
            <li>Amenity area renders (clubhouse, pool, gym, garden)</li>
            <li>3D floor plan renders</li>
            <li>Night view and golden-hour renders</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every video-based <strong>real estate promotional video</strong> campaign needs a bank of 3D renders as supporting visual assets. The renders feed your digital ads, website hero sections, and brochure design — making the overall marketing package cohesive and visually compelling across every channel.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl mb-4">
            <p className="text-gray-800 text-sm">
              Alliance Media Labs produces architectural renders in 3ds Max with V-Ray and Corona, delivering images at up to 8K resolution suitable for large-format hoarding printing. All renders include multiple camera angles and a day/evening variant.
            </p>
          </div>
          <Link
            href="/services/3d-renders-isometrics"
            className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-600 hover:text-yellow-700 transition-colors"
          >
            Explore our 3D Renders &amp; Isometrics Service <i className="ri-arrow-right-line"></i>
          </Link>
        </section>

        {/* Bonus: Interactive 3D */}
        <section className="mb-14 bg-gray-50 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center font-bold text-yellow-400 text-sm flex-shrink-0">+1</div>
            <h2 className="text-2xl font-bold text-black">Bonus: Interactive 3D Tools — The Next Frontier</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beyond the seven core video formats lies a growing category of interactive 3D digital tools — unit configurators, master plan selectors, and embedded 3D viewers hosted directly on your project website. These allow buyers to select their preferred unit from the master plan, configure their interior finish packages, and explore floor plates interactively — all from a browser or tablet in your sales office.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Interactive tools extend the life of your visual content well beyond launch. They live on your website permanently, collecting lead data from every buyer who interacts with them. They reduce the burden on your sales team for routine product navigation, freeing them for higher-value closing conversations.
          </p>
          <Link
            href="/services/interactive-3d-tools"
            className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-600 hover:text-yellow-700 transition-colors"
          >
            Explore our Interactive 3D Tools <i className="ri-arrow-right-line"></i>
          </Link>
        </section>

        {/* Mix Section */}
        <section id="mix" className="mb-14">
          <h2 className="text-3xl font-bold text-black mb-6">Building the Right Real Estate Video Marketing Mix</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Not every project needs all seven types. Budget, project scale, target buyer, and timeline all influence which formats to prioritise. Here&apos;s how to think about it:
          </p>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-black mb-3">Pre-Launch (0–3 months before RERA registration)</h3>
              <p className="text-gray-700 leading-relaxed mb-2"><strong>Priority formats:</strong> 3D walkthrough + 3D renders + drone video</p>
              <p className="text-gray-700 leading-relaxed text-sm">Create desire and anticipation before the project is publicly announced. 3D content lets you generate interest and collect pre-registrations without relying on physical assets.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-black mb-3">Launch Phase (Month 1–6)</h3>
              <p className="text-gray-700 leading-relaxed mb-2"><strong>Priority formats:</strong> 3D walkthrough + VR tour + interior cinematic + location video</p>
              <p className="text-gray-700 leading-relaxed text-sm">Maximum immersive impact for sales office visits and digital campaigns. VR in the sales office dramatically increases booking-to-visit conversion. Location video handles the connectivity objection proactively.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-black mb-3">Active Sales Phase (Month 6–24)</h3>
              <p className="text-gray-700 leading-relaxed mb-2"><strong>Priority formats:</strong> Construction update videos + 3D renders (seasonal refreshes) + interactive 3D tools</p>
              <p className="text-gray-700 leading-relaxed text-sm">Keep booked buyers engaged, manage referral marketing, and maintain digital presence as the project progresses physically.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-black mb-3">Luxury / High-Ticket Projects (₹2 Cr+)</h3>
              <p className="text-gray-700 leading-relaxed mb-2"><strong>All seven formats + interactive tools</strong></p>
              <p className="text-gray-700 leading-relaxed text-sm">Premium buyers expect premium content. Every touchpoint — from the first digital ad to the sales office experience — must reinforce quality. Budget for the full stack and treat the visual content as a core cost of sale, not a marketing overhead.</p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section id="comparison" className="mb-14">
          <h2 className="text-3xl font-bold text-black mb-6">Comparison Table — Which Video Type Does What?</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Video Type</th>
                  <th className="px-4 py-3 text-left font-semibold">Sales Stage</th>
                  <th className="px-4 py-3 text-left font-semibold">Primary Use</th>
                  <th className="px-4 py-3 text-left font-semibold">Best Channel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">3D Walkthrough</td>
                  <td className="px-4 py-3 text-gray-700">Pre-launch + Launch</td>
                  <td className="px-4 py-3 text-gray-700">Create desire</td>
                  <td className="px-4 py-3 text-gray-700">YouTube, Social, Sales Office</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Drone Aerial</td>
                  <td className="px-4 py-3 text-gray-700">Launch + Active</td>
                  <td className="px-4 py-3 text-gray-700">Prove location</td>
                  <td className="px-4 py-3 text-gray-700">Social, Digital Ads, Site</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Construction Update</td>
                  <td className="px-4 py-3 text-gray-700">Active Sales</td>
                  <td className="px-4 py-3 text-gray-700">Build trust</td>
                  <td className="px-4 py-3 text-gray-700">Email, WhatsApp, Buyer Portal</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">VR Tour</td>
                  <td className="px-4 py-3 text-gray-700">Launch</td>
                  <td className="px-4 py-3 text-gray-700">Immersive decision</td>
                  <td className="px-4 py-3 text-gray-700">Sales Office, NRI Roadshows</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Interior Cinematic</td>
                  <td className="px-4 py-3 text-gray-700">Launch</td>
                  <td className="px-4 py-3 text-gray-700">Showcase finishes</td>
                  <td className="px-4 py-3 text-gray-700">Instagram, Sales Office, Brochure</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Location / Route</td>
                  <td className="px-4 py-3 text-gray-700">Pre-launch + Launch</td>
                  <td className="px-4 py-3 text-gray-700">Handle objections</td>
                  <td className="px-4 py-3 text-gray-700">Digital Ads, Broker Decks</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">3D Renders</td>
                  <td className="px-4 py-3 text-gray-700">All stages</td>
                  <td className="px-4 py-3 text-gray-700">Visual identity</td>
                  <td className="px-4 py-3 text-gray-700">Print, Hoardings, Website, Ads</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="text-3xl font-bold text-black mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-black mb-3">How much does real estate video production cost in India?</h3>
              <p className="text-gray-700 leading-relaxed">
                Costs vary widely by format and quality tier. A professional 3D walkthrough video typically ranges from ₹80,000 to ₹3,00,000+ depending on project size and render quality. Drone videos start from ₹25,000 for a basic half-day shoot. Construction update video retainer packages start from ₹15,000 per month. VR tours range from ₹1,50,000 to ₹5,00,000+ depending on scope and deployment. Contact Alliance Media Labs for a detailed quote tailored to your project.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-black mb-3">How long does it take to produce a 3D walkthrough video?</h3>
              <p className="text-gray-700 leading-relaxed">
                Standard production timeline is 15–25 working days from approved drawings to final delivery, depending on project complexity and number of revision rounds. Fast-track production (7–12 days) is available at a premium for urgent launch requirements. VR tours typically take 25–40 days. Construction videos can be delivered within 5 business days of the site shoot.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-black mb-3">Which type of real estate marketing video gives the best ROI?</h3>
              <p className="text-gray-700 leading-relaxed">
                For most Indian developers, a professional 3D walkthrough video delivers the highest ROI because it is used across the longest span of the sales cycle and the widest range of channels. It feeds your digital ads, your website, your broker presentations, and your sales office screen simultaneously. For NRI-focused launches, combining a 3D walkthrough with a VR tour delivers the strongest conversion results.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-black mb-3">Can you handle the full real estate promotional video package — all types?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. Alliance Media Labs is a full-service real estate video production company — we produce all seven video types in-house, alongside 3D renders, interactive tools, and scale models. Working with a single vendor means consistent visual identity across all content, streamlined project management, and better cost efficiency through package bundling.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-black mb-3">Do you work with developers outside Mumbai and Delhi?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. We serve real estate developers across India — Mumbai, Delhi NCR, Bangalore, Pune, Hyderabad, Gurugram, Chennai, Kolkata, Ahmedabad, and Tier 1 and 2 cities. 3D and interactive content is produced remotely from your drawings; drone and live cinematography requires physical site visits which we coordinate and travel for.
              </p>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <div className="border-t border-gray-100 pt-12 mb-12">
          <h3 className="text-xl font-bold text-black mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/3d-walkthrough-video-service" className="group border border-gray-200 rounded-xl p-5 hover:border-yellow-400 transition-colors">
              <p className="text-xs text-yellow-500 font-semibold uppercase mb-2">3D Walkthrough</p>
              <h4 className="font-bold text-black group-hover:text-yellow-500 transition-colors leading-tight">The Ultimate Guide to 3D Walkthrough Video Services for Real Estate</h4>
            </Link>
            <Link href="/blog/real-estate-drone-photography-india" className="group border border-gray-200 rounded-xl p-5 hover:border-yellow-400 transition-colors">
              <p className="text-xs text-yellow-500 font-semibold uppercase mb-2">Drone Photography</p>
              <h4 className="font-bold text-black group-hover:text-yellow-500 transition-colors leading-tight">Real Estate Drone Photography in India: The Complete Guide (2026)</h4>
            </Link>
          </div>
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
            Ready to Build Your Real Estate Video Marketing Stack?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Get a custom quote for the video formats that match your project, timeline, and buyer profile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   BEST ARCHITECTURAL SCALE MODEL COMPANY — B2B GUIDE
   ───────────────────────────────────────────────────────────── */
function BestScaleModelCompanyArticle({ post }: { post: ReturnType<typeof getPostBySlug> }) {
  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-black pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/services/architectural-scale-models/1.jpg"
            alt="Best architectural scale model company India — Alliance Media Labs"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-gray-400 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="container mx-auto px-6 max-w-4xl py-16">

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Intro */}
        <section className="mb-12">
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            When a real estate developer, infrastructure firm, or government agency begins shortlisting vendors for an architectural scale model, the search almost always starts the same way: a Google query for the <strong>best architectural scale model company in India</strong>, a round of referrals from peers, and a series of portfolio reviews. The problem is that most vendors look similar at first glance — similar websites, similar quoted prices, similar promises about quality and timelines.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The difference only becomes visible after you&apos;ve commissioned the model. By then, a poor choice means a delayed project launch, a model that underwhelms in the sales office, or a vendor who disappears after delivery when you need a repair or an update.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This guide gives project heads, marketing directors, and procurement teams a structured framework for evaluating <strong>architectural scale model companies in India</strong> — so you choose right the first time. We&apos;ll cover the seven non-negotiable criteria, the red flags that predict problems, and what a professional engagement actually looks like from brief to delivery.
          </p>
        </section>

        {/* Section 1 — Why it matters */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Why Choosing the Right Scale Model Company Directly Affects Your Sales</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            An architectural scale model is not a commodity purchase. It will sit at the centre of your sales office — the first thing every prospective buyer sees, the visual anchor of every sales presentation, and the physical manifestation of your brand quality before a single apartment is handed over.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A premium model from the <strong>best architectural model maker</strong> creates immediate credibility: it signals to buyers that the developer is serious, solvent, and committed to quality. A poorly executed model does the opposite — it raises doubts about the project itself, regardless of how strong the underlying design or location actually is.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For high-ticket launches (₹2 Cr+ per unit), the model is often the single most cost-effective marketing investment in the entire budget. The right scale model company turns it into a 24-month sales asset. The wrong one turns it into a liability you have to explain away.
          </p>
        </section>

        {/* Section 2 — 7 Criteria */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">7 Criteria to Evaluate Every Architectural Scale Model Company</h2>

          <div className="space-y-6">

            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-lg font-bold text-black mb-2">1. End-to-End In-House Production</h3>
              <p className="text-gray-700 leading-relaxed">
                The best <strong>architectural scale model companies</strong> control the entire production chain internally — digital modelling, CNC cutting, laser etching, hand-finishing, painting, electrical integration, and quality control. Vendors who outsource even one stage introduce quality gaps and timeline dependencies they cannot control. Always ask directly: what is outsourced, and to whom?
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-lg font-bold text-black mb-2">2. CAD-to-CNC Digital Workflow</h3>
              <p className="text-gray-700 leading-relaxed">
                A professional architectural model maker works directly from your AutoCAD, Revit, or SketchUp files — not from printed drawings measured by hand. CNC and laser-cut components driven from digital files eliminate measurement error and produce the dimensional precision that passes an architect&apos;s scrutiny. If a vendor cannot take your DWG files and produce a 3D model from them, they are not operating at a professional standard.
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-lg font-bold text-black mb-2">3. Verifiable Portfolio of Comparable Projects</h3>
              <p className="text-gray-700 leading-relaxed">
                Ask to see completed models of similar type (township, residential high-rise, commercial, infrastructure) and similar scale ratio to yours. Look specifically at: edge finish quality on acrylic components, window alignment consistency across multiple floors, landscape realism (not uniform green plastic), and LED integration quality. Photographs on a website are a starting point — a video walkthrough of completed models is more reliable evidence.
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-lg font-bold text-black mb-2">4. Written Production Schedule with Milestones</h3>
              <p className="text-gray-700 leading-relaxed">
                Any reputable <strong>scale model company</strong> should provide a written production timeline before you sign the order — drawing review sign-off date, prototype component review, assembly completion, electrical testing, quality check, dispatch, and installation. If a vendor quotes a delivery date without a milestone schedule, your risk of a late delivery is high. Always align the delivery to your launch date minus 10 working days of buffer.
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-lg font-bold text-black mb-2">5. Mid-Project Review Process</h3>
              <p className="text-gray-700 leading-relaxed">
                The best architectural model makers build formal client review points into the production workflow. At minimum: a digital 3D model review before any physical fabrication begins, and a component review before final assembly. These checkpoints prevent costly rework caused by design misinterpretation. A vendor who builds and delivers without showing you anything in between is a vendor who is not confident in their accuracy.
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-lg font-bold text-black mb-2">6. Post-Delivery Support and Repair Terms</h3>
              <p className="text-gray-700 leading-relaxed">
                Scale models operate in sales offices for 18–36 months. LED systems need maintenance. Acrylic panels scratch. Landscape elements dislodge. Ask every prospective vendor: what is covered under warranty, for how long, and will they travel to site for repairs? A <strong>scale model company</strong> that cannot commit to post-delivery support is one that treats your commission as a transaction rather than a relationship.
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-lg font-bold text-black mb-2">7. Developer-Side References in Your City</h3>
              <p className="text-gray-700 leading-relaxed">
                Ask for two or three references from real estate developers in your target city. Call them. Ask about timeline adherence, how issues were handled, whether the model held up over months in a sales office environment, and whether they would use the vendor again. A vendor with no referable clients in your city either lacks the experience or lacks the confidence to offer references — both are warning signals.
              </p>
            </div>

          </div>
        </section>

        {/* Section 3 — Red Flags */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Red Flags That Predict a Poor Outcome</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { flag: "Unusually low quote", detail: "Scale model quality is a direct function of time and material. A quote 40–50% below market rates means corners are being cut — on materials, finish quality, or production time." },
              { flag: "No digital file requirement", detail: "A vendor who says they can work from a photo or a printed plan is working by hand measurement — errors are inevitable at any scale ratio below 1:200." },
              { flag: "No milestone schedule", detail: "No timeline structure = no accountability. You will chase for updates and likely miss your launch date." },
              { flag: "Generic portfolio", detail: "A portfolio full of generic residential blocks with no visible client names, project details, or delivery dates is difficult to verify and may not represent their actual standard." },
              { flag: "No site installation offer", detail: "A professional scale model company delivers and installs. A vendor who dispatches via courier and asks your team to assemble it has not accounted for the complexity of final installation." },
              { flag: "No post-delivery contact", detail: "If the sales team stops responding after payment is received and before delivery is complete, escalation becomes impossible. Verify before signing." },
            ].map(({ flag, detail }) => (
              <div key={flag} className="bg-red-50 border border-red-100 rounded-xl p-4">
                <p className="font-bold text-red-800 text-sm mb-1">⚠ {flag}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 — Why AML */}
        <section className="mb-12 bg-black rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold text-white mb-4">Why Alliance Media Labs is India&apos;s Best Architectural Scale Model Company</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Alliance Media Labs was founded on a single belief: that real estate developers deserve a <strong>scale model company</strong> that operates with the rigour of an engineering firm and the craft of a design studio. We are not a model shop that scales up volume at the cost of quality. We are a precision fabrication team that treats every model as a flagship project.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { title: "200+ Projects Delivered", body: "Across Mumbai, Delhi NCR, Bangalore, Pune, Hyderabad, Gurugram, and Tier 1 cities — residential, commercial, township, and infrastructure." },
              { title: "Full In-House Production", body: "Digital modelling → CNC fabrication → hand-finishing → LED integration → delivery and installation. Every stage controlled by our team." },
              { title: "CAD-to-Model Precision", body: "We work directly from AutoCAD DWG, Revit, and SketchUp files. No hand measurements. No guesswork. Dimensional accuracy verified at every stage." },
              { title: "Named Client References", body: "We work with India's leading real estate developers and are happy to provide direct references for projects in your city and segment." },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white/10 rounded-xl p-4">
                <p className="font-bold text-yellow-400 text-sm mb-1">{title}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-300 leading-relaxed mb-2">
            As an <strong>architectural model maker</strong> with a track record across India&apos;s most competitive real estate markets, we know that the model is not a cost — it is a sales asset with a measurable return. Our clients consistently report faster buyer decisions, higher sales office engagement, and stronger NRI buyer conversion when our models are present.
          </p>
          <p className="text-gray-300 leading-relaxed">
            If you are evaluating vendors for your next project launch, we welcome the comparison. Our portfolio, references, and production process are fully transparent. Many of our clients also pair their scale model with a{" "}
            <Link href="/services/3d-walkthrough-video-company-india" className="text-yellow-400 font-semibold hover:underline">
              3D walkthrough video
            </Link>{" "}
            — creating a complete sales office experience that covers every buyer touchpoint.
          </p>
        </section>

        {/* Section 5 — What to expect */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">What a Professional Scale Model Engagement Looks Like</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For developers who have not previously worked with a professional <strong>architectural scale model company</strong>, here is what a well-managed engagement should look like — from first contact to sales office installation:
          </p>
          <ol className="space-y-3">
            {[
              { step: "Initial Brief Call (Day 1)", detail: "Scope discussion — project type, scale ratio, model dimensions, special features (LEDs, water, rotating base), delivery date, and budget range." },
              { step: "Drawing Review & Quotation (Days 2–3)", detail: "Review of your CAD/BIM files. Written quotation with itemised scope, production timeline, milestone dates, and payment terms." },
              { step: "Drawing Sign-Off (Day 4–5)", detail: "Formal confirmation that drawings are complete and production can begin. Any incomplete drawing packages extend the timeline." },
              { step: "Digital 3D Model Review (Days 8–12)", detail: "A rendered preview of the digital model built from your drawings — your chance to flag any interpretation issues before physical fabrication begins." },
              { step: "Component Review (Day 15–20)", detail: "Sample components — building facades, landscape sections — for finish and colour approval before full assembly." },
              { step: "Assembly, Electrical & Quality Check (Days 20–30+)", detail: "Full assembly, LED wiring, landscaping, painting, cover fitting. Comprehensive quality check before dispatch." },
              { step: "Delivery & Installation (Final Day)", detail: "Our team delivers, installs, tests all electrics, and briefs your sales team on operation and care." },
            ].map(({ step, detail }, i) => (
              <li key={step} className="flex gap-4">
                <div className="flex-shrink-0 w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center text-black text-xs font-bold mt-0.5">{i + 1}</div>
                <div>
                  <span className="font-bold text-black">{step} — </span>
                  <span className="text-gray-700">{detail}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              {
                q: "How do we initiate a project with an architectural scale model company?",
                a: "The fastest way is to share your project drawings (AutoCAD DWG or PDF), confirm the model size and scale you have in mind, and provide your launch date. Most professional vendors including Alliance Media Labs will respond with a quotation and timeline within 48 hours of receiving complete drawings.",
              },
              {
                q: "What drawings do we need to provide?",
                a: "At minimum: site plan (plot boundary, building footprints, road layout), floor plans for each unit type, all four building elevations, and a landscape or master plan layout. 3D model files (Revit, SketchUp) are ideal. Schematic drawings can work but add time for interpretation and review cycles.",
              },
              {
                q: "Can a scale model be updated if the building design changes mid-production?",
                a: "Yes, if the change is caught before the affected components are fabricated. Changes post-fabrication require rework at additional cost and extend the timeline. This is why the digital 3D model review checkpoint (before any physical production) is critical — it is your last zero-cost opportunity to incorporate design changes.",
              },
              {
                q: "How do we evaluate quality before placing an order?",
                a: "Ask for high-resolution photographs and videos of completed models of similar type. Ask for references you can call directly. If possible, visit a live sales office where one of the vendor's models is on display — nothing reveals real quality better than seeing an installed model under sales office conditions after several months of use.",
              },
              {
                q: "Is Alliance Media Labs able to deliver models outside Mumbai and Delhi?",
                a: "Yes. We deliver and install across India — Bangalore, Pune, Hyderabad, Gurugram, Chennai, Ahmedabad, and other cities. Our team supervises transportation and handles on-site installation at every location. Pan-India delivery is standard for us, not an exception.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-black mb-2 text-base">{q}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Posts */}
        <div className="border-t border-gray-100 pt-10 mb-12">
          <h3 className="text-lg font-bold text-black mb-5">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-5">
            <Link href="/blog/scale-model-making-india-complete-guide" className="group border border-gray-200 rounded-xl p-5 hover:border-yellow-400 transition-colors">
              <p className="text-xs text-yellow-500 font-semibold uppercase mb-2">Complete Guide</p>
              <h4 className="font-bold text-black group-hover:text-yellow-500 transition-colors leading-tight text-sm">Scale Model Making in India: The Complete Guide for Real Estate Developers (2026)</h4>
            </Link>
            <Link href="/blog/architectural-scale-models-india-real-estate" className="group border border-gray-200 rounded-xl p-5 hover:border-yellow-400 transition-colors">
              <p className="text-xs text-yellow-500 font-semibold uppercase mb-2">Sales Strategy</p>
              <h4 className="font-bold text-black group-hover:text-yellow-500 transition-colors leading-tight text-sm">The Silent Salesperson: How Architectural Scale Models Close Deals That Digital Can&apos;t</h4>
            </Link>
          </div>
        </div>

        {/* Back */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-yellow-500 transition-colors mb-16">
          <i className="ri-arrow-left-line"></i> Back to Blog
        </Link>
      </div>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get a Quote from India&apos;s Best Architectural Scale Model Company
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Share your drawings and launch date. We&apos;ll respond with a detailed quote and production timeline within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
              Request a Quote
            </Link>
            <Link href="/services/architectural-scale-models" className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors">
              View Scale Model Service
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ARCHITECTURAL SCALE MODEL PRICE INDIA — B2B PRICING GUIDE
   ───────────────────────────────────────────────────────────── */
function ScaleModelPriceArticle({ post }: { post: ReturnType<typeof getPostBySlug> }) {
  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-black pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/services/architectural-scale-models/1.jpg"
            alt="Architectural scale model price India 2026 — Alliance Media Labs"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-gray-400 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="container mx-auto px-6 max-w-4xl py-16">

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Intro */}
        <section className="mb-12">
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            &quot;How much does an architectural scale model cost in India?&quot; — it is one of the most common questions project heads and marketing managers ask when planning a real estate launch, and one of the hardest to answer without context. <strong>Architectural scale model price in India</strong> ranges from under ₹1 lakh for a simple residential block to over ₹30 lakhs for a large township master plan — a 30x variance that makes budgeting feel like guesswork.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            It doesn&apos;t have to be. Once you understand the five variables that drive <strong>scale model cost</strong>, you can estimate a realistic budget for any project type, evaluate vendor quotes intelligently, and avoid the two most common mistakes developers make: under-budgeting for a model they later have to compromise on, and over-paying for features they don&apos;t actually need.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This guide gives you the complete 2026 pricing picture — including the full <strong>architectural model making charges</strong> breakdown by project type, a pricing table you can use for internal budget approval, and a clear explanation of what separates a ₹2 lakh quote from a ₹6 lakh quote for what looks like the same scope.
          </p>
        </section>

        {/* Section 1 — 5 factors */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">The 5 Variables That Determine Architectural Scale Model Price</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Every quote you receive from an architectural model company is a function of these five variables. Understanding them puts you in control of the budget conversation.
          </p>

          <div className="space-y-5">
            <div className="flex gap-5 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black">1</div>
              <div>
                <h3 className="font-bold text-black mb-1">Model Size and Base Footprint</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  The single biggest cost driver. A 4×3 ft model of a residential block and a 16×12 ft township master plan involve fundamentally different quantities of material, fabrication time, and assembly labour. Every additional square foot of base footprint adds proportional cost — not just for the base itself, but for all the buildings, roads, and landscape elements on top of it. Discuss base dimensions before anything else.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black">2</div>
              <div>
                <h3 className="font-bold text-black mb-1">Scale Ratio and Level of Detail</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  A 1:50 scale model of a villa shows window frames, balcony railings, door reveals, and surface cladding detail. A 1:500 model of the same villa shows massing and roofline only. The finer the scale ratio, the more components, the more hand-finishing hours, and the higher the <strong>scale model price</strong>. For large master plan models, 1:500 or 1:1000 is standard and cost-efficient. For sales-office feature models of a signature tower, 1:100 with maximum detail delivers maximum impact.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black">3</div>
              <div>
                <h3 className="font-bold text-black mb-1">LED Lighting and Electrical Features</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  A model without LED lighting costs significantly less than one with phase-wise building illumination, fibre-optic landscape lighting, animated water simulation, and a zoned control panel. For a sales-office model intended to create buyer impact, LED integration is typically non-negotiable. For an approval-committee or internal planning model, it may not be required. Be explicit about which electrical features you want — they can add ₹50,000 to ₹3,00,000+ depending on scope.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black">4</div>
              <div>
                <h3 className="font-bold text-black mb-1">Material and Finish Specification</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Premium-grade acrylic, professional architectural model foliage, custom-mixed paints, and hand-etched road surfaces cost more than standard MDF, generic plastic trees, and off-the-shelf paint. The difference is immediately visible in the finished model. For flagship launches by top developers, the premium finish is essential — it directly reflects on the brand. For mid-segment projects or internal presentations, a mid-grade specification can be cost-efficient without being embarrassing.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black">5</div>
              <div>
                <h3 className="font-bold text-black mb-1">Timeline and Rush Premium</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Standard production timelines for professional models are 15–45 working days depending on size. Compressing a 30-day timeline to 15 days requires parallel production teams and extended working hours — that premium is real and typically adds 20–35% to the base <strong>architectural model making charges</strong>. The single most cost-effective thing a developer can do is engage their model vendor at least 6–8 weeks before the launch date.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Architectural Scale Model Price in India — 2026 Reference Table</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The ranges below reflect professionally produced models with quality materials, CNC fabrication, and LED integration at the standard level. Budget-tier vendors may quote lower — the difference is always visible in the finished product.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Project Type</th>
                  <th className="px-4 py-3 text-left font-semibold">Typical Scale</th>
                  <th className="px-4 py-3 text-left font-semibold">Price Range (INR)</th>
                  <th className="px-4 py-3 text-left font-semibold">Timeline</th>
                  <th className="px-4 py-3 text-left font-semibold">LED Included?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Individual Villa / Bungalow", "1:50 – 1:100", "₹75,000 – ₹1,80,000", "10–18 days", "Optional"],
                  ["Boutique Apartment Block (G+8)", "1:100 – 1:200", "₹1,50,000 – ₹3,50,000", "15–22 days", "Standard"],
                  ["Mid-Rise Residential Complex", "1:200 – 1:300", "₹2,50,000 – ₹6,00,000", "18–28 days", "Standard"],
                  ["Large Residential Project w/ Amenities", "1:200 – 1:500", "₹4,00,000 – ₹10,00,000", "22–35 days", "Standard + Zones"],
                  ["Township / Master Plan Model", "1:500 – 1:1000", "₹7,00,000 – ₹22,00,000", "30–50 days", "Phase-wise Zones"],
                  ["Commercial Tower / Office Park", "1:100 – 1:300", "₹3,00,000 – ₹8,00,000", "20–32 days", "Standard"],
                  ["Infrastructure / Government Project", "1:1000 – 1:2000", "₹10,00,000 – ₹35,00,000", "40–65 days", "Optional"],
                ].map(([type, scale, price, timeline, led]) => (
                  <tr key={type} className="even:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-black">{type}</td>
                    <td className="px-4 py-3 text-gray-700">{scale}</td>
                    <td className="px-4 py-3 text-gray-900 font-semibold">{price}</td>
                    <td className="px-4 py-3 text-gray-700">{timeline}</td>
                    <td className="px-4 py-3 text-gray-700">{led}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs italic">
            Prices are indicative for 2026. Final quotes depend on exact scope, drawings completeness, finish specification, and delivery location. GST additional. Rush delivery adds 20–35%.
          </p>
        </section>

        {/* Section — What's included */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">What Should Be Included in a Professional Quote</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            When you receive a <strong>scale model price</strong> quote from a vendor, it should clearly itemise the following. If any of these are missing or vague, ask explicitly — hidden costs and scope gaps are where budget overruns happen.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { item: "Drawing review and 3D digital modelling", note: "The digital setup work before any physical production — some vendors charge this separately." },
              { item: "All building fabrication and finishing", note: "Number of buildings, towers, blocks included. Phase exclusions should be clearly stated." },
              { item: "Base board, roads, and site boundary", note: "The base platform with road network and plot boundary. Sometimes quoted separately for large bases." },
              { item: "Landscaping and amenity areas", note: "Grass, trees, water bodies, pool, clubhouse detailing. Specify quality level expected." },
              { item: "LED lighting system", note: "Which zones, what colour temperatures, control panel type. Fibre optics if specified." },
              { item: "Protective acrylic cover", note: "Included as standard by most professional vendors. Confirm dimensions and locking mechanism." },
              { item: "Packaging, transport, and installation", note: "Custom crating, delivery to site, installation supervision. Some vendors charge this separately." },
              { item: "Post-delivery warranty", note: "Duration, what is covered, and response time for on-site repairs. Get this in writing." },
            ].map(({ item, note }) => (
              <div key={item} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-black text-sm mb-1">✓ {item}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section — comparing quotes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">How to Compare Quotes — It&apos;s Not Just About the Number</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you have three quotes in front of you for what looks like the same scope, the lowest number is rarely the best choice. Here is how to compare them properly:
          </p>
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="text-yellow-500 font-bold text-lg flex-shrink-0">→</span>
              <p className="text-gray-700 leading-relaxed"><strong>Check what is excluded.</strong> The lowest quote almost always excludes something — transport and installation, the acrylic cover, one phase of the project, or the LED wiring. Bring all quotes to the same scope before comparing price.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-yellow-500 font-bold text-lg flex-shrink-0">→</span>
              <p className="text-gray-700 leading-relaxed"><strong>Ask for the production timeline in writing.</strong> A ₹3 lakh quote with a 45-day timeline and a ₹3.5 lakh quote with a 22-day milestone schedule are not the same product — one will make your launch and one probably won&apos;t.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-yellow-500 font-bold text-lg flex-shrink-0">→</span>
              <p className="text-gray-700 leading-relaxed"><strong>Request portfolio evidence at the quoted finish level.</strong> Ask the vendor to show you a completed model produced at the specification and price point they have quoted. This immediately separates vendors who can deliver from those who quote low and upgrade to extract more later.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-yellow-500 font-bold text-lg flex-shrink-0">→</span>
              <p className="text-gray-700 leading-relaxed"><strong>Verify post-delivery terms.</strong> A lower <strong>architectural scale model price</strong> means nothing if the vendor becomes unreachable when your LED system fails three months into the sales campaign. Confirm the warranty scope and response time in writing before placing the order.</p>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="mb-12 bg-black rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold text-white mb-4">The Real ROI of Architectural Scale Model Investment</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            A common objection from finance teams is that ₹5–8 lakhs on a scale model is a significant marketing expense. Here is the counter-argument: a single unit sold at ₹2 Cr generates a sales brokerage and marketing cost that makes the scale model a rounding error. The question is not whether the model is expensive — it is whether it accelerates your sales velocity enough to justify the cost within the first two to four bookings.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Developers who use Alliance Media Labs&apos; architectural scale models in their sales offices consistently report that buyer dwell time in the office increases, the number of follow-up visits per buyer drops (buyers decide faster), and NRI buyer conversion on{" "}
            <Link href="/services/3d-walkthrough-video-company-india" className="text-yellow-400 font-semibold hover:underline">
              video walkthroughs
            </Link>{" "}
            of the model is measurably higher than walkthroughs without a physical model reference.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The model is not a cost of marketing. It is a cost of sale — and at a ₹2 Cr+ ticket size, the ROI calculation is straightforward. The real risk is not spending ₹5–8 lakhs on a great model. It is spending ₹2–3 lakhs on a poor one that undermines buyer confidence every day it sits in your sales office.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Frequently Asked Questions — Scale Model Pricing</h2>
          <div className="space-y-5">
            {[
              {
                q: "Why does architectural scale model price vary so much between vendors?",
                a: "The variance reflects real differences in production method, material quality, and scope inclusion. Budget vendors use hand-cut components, generic materials, and outsource finishing — lower input costs produce a visibly inferior output. Professional vendors use CNC and laser-cut digital fabrication, premium architectural model materials, in-house finishing, and full project management. The difference is immediately apparent when you compare finished models side by side.",
              },
              {
                q: "Is GST included in the quoted scale model price?",
                a: "GST is almost always quoted separately and applied at 18% on the model fabrication value. Confirm with your vendor whether the quoted price is inclusive or exclusive of GST, and ensure a proper GST invoice is issued — this is essential for your accounts team and for input tax credit eligibility if applicable.",
              },
              {
                q: "Can we get a model made in phases — start with one building and add more later?",
                a: "Yes. Phased models are a cost-efficient approach for large township projects where not all phases are ready at launch. The base is typically built to full master plan size from the start (with empty landscape in future phase zones), and individual buildings are added as phases are launched. This is more cost-effective than building separate models for each phase.",
              },
              {
                q: "How do we get an accurate quote from Alliance Media Labs?",
                a: "Share your AutoCAD site plan, building floor plans, elevations, and your target delivery date. We will review your drawings and provide a detailed written quote with full scope itemisation, production timeline milestones, payment terms, and post-delivery warranty terms — typically within 48 business hours of receiving complete drawings.",
              },
              {
                q: "What happens if our design changes after production has started?",
                a: "Design changes before the digital 3D model review stage (typically Days 5–10 of production) are incorporated at no additional cost. Changes after physical fabrication has begun incur rework charges depending on which components are affected. The practical advice: freeze your design before placing the model order, or build 10–15 working days of buffer into your timeline to absorb a revision cycle.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-black mb-2 text-base">{q}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Posts */}
        <div className="border-t border-gray-100 pt-10 mb-12">
          <h3 className="text-lg font-bold text-black mb-5">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-5">
            <Link href="/blog/best-architectural-scale-model-company-india" className="group border border-gray-200 rounded-xl p-5 hover:border-yellow-400 transition-colors">
              <p className="text-xs text-yellow-500 font-semibold uppercase mb-2">Vendor Selection</p>
              <h4 className="font-bold text-black group-hover:text-yellow-500 transition-colors leading-tight text-sm">Best Architectural Scale Model Company in India: How to Choose the Right Partner</h4>
            </Link>
            <Link href="/blog/scale-model-making-india-complete-guide" className="group border border-gray-200 rounded-xl p-5 hover:border-yellow-400 transition-colors">
              <p className="text-xs text-yellow-500 font-semibold uppercase mb-2">Complete Guide</p>
              <h4 className="font-bold text-black group-hover:text-yellow-500 transition-colors leading-tight text-sm">Scale Model Making in India: The Complete Guide for Real Estate Developers (2026)</h4>
            </Link>
          </div>
        </div>

        {/* Back */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-yellow-500 transition-colors mb-16">
          <i className="ri-arrow-left-line"></i> Back to Blog
        </Link>
      </div>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get an Accurate Scale Model Price for Your Project
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Share your drawings and we&apos;ll send a detailed, itemised quote within 48 hours — no generic pricing, no hidden charges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
              Request a Detailed Quote
            </Link>
            <Link href="/services/architectural-scale-models" className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors">
              View Scale Model Service
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SCALE MODEL VS 3D WALKTHROUGH VIDEO — B2B COMPARISON GUIDE
   ───────────────────────────────────────────────────────────── */
function ScaleModelVsWalkthroughArticle({ post }: { post: ReturnType<typeof getPostBySlug> }) {
  if (!post) return null;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-black pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/services/architectural-scale-models/1.jpg"
            alt="Architectural scale model vs 3D walkthrough video — Alliance Media Labs"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-gray-400 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="container mx-auto px-6 max-w-4xl py-16">

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Intro */}
        <section className="mb-12">
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Every real estate marketing director planning a project launch eventually faces the same budget question: should the visualization spend go toward a physical <strong>architectural scale model</strong>, a <strong>3D walkthrough video</strong>, or both? The two are often framed as competing line items in the same budget — but they solve fundamentally different problems for fundamentally different buyer journeys.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A scale model is a physical, tactile sales-office asset that builds trust the moment a buyer walks in. A 3D walkthrough video is a digital, shareable asset that builds intent before a buyer ever visits. Choosing between them — or combining them — depends on your launch timeline, buyer profile, and how much of your sales funnel happens online versus in person.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This guide breaks down exactly when each format wins, what they cost, and why an increasing number of Alliance Media Labs&apos; developer clients now commission both together as a single, coordinated sales office and digital marketing package.
          </p>
        </section>

        {/* Section 1 — What a scale model does */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">What an Architectural Scale Model Does Best</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A physical <strong>scale model</strong> sits permanently in your sales office for 18–36 months, anchoring every walk-in presentation. Buyers can walk around it, point at specific units, and physically grasp the scale of the project in a way no screen replicates. It signals permanence and financial seriousness — a developer who commissions a premium model is making a statement about the quality of the project itself.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Scale models work best for high-footfall sales offices, premium ticket sizes (₹1.5 Cr+), and township or multi-phase launches where buyers need to understand spatial relationships between blocks, amenities, and phases at a glance.{" "}
            <Link href="/services/scale-model-maker-india" className="text-yellow-600 font-semibold hover:underline">
              Explore our architectural scale model maker service
            </Link>{" "}
            for pricing and project examples.
          </p>
        </section>

        {/* Section 2 — What a walkthrough does */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">What a 3D Walkthrough Video Does Best</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A <strong>3D walkthrough video</strong> is a digital, infinitely shareable asset. It travels through WhatsApp, property portals, YouTube, Instagram, and investor decks — reaching NRI buyers, out-of-city investors, and online leads who will never set foot in your sales office before making a shortlisting decision. It demonstrates flow, lifestyle, and unit interiors in motion, something a static model cannot show.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Walkthrough videos win when your buyer base is digitally led, when you need a pre-launch asset before the sales office is even built, or when speed matters — a walkthrough can be produced and published in as fast as 7 days.{" "}
            <Link href="/services/3d-walkthrough-video-company-india" className="text-yellow-600 font-semibold hover:underline">
              See our 3D walkthrough video company page
            </Link>{" "}
            for production timelines and sample work.
          </p>
        </section>

        {/* Section 3 — Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-xl text-sm">
              <thead>
                <tr className="bg-black text-white">
                  <th className="text-left p-4 font-semibold">Factor</th>
                  <th className="text-left p-4 font-semibold">Scale Model</th>
                  <th className="text-left p-4 font-semibold">3D Walkthrough Video</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Typical Cost", "₹1.5L – ₹20L+", "₹75K – ₹3.5L+"],
                  ["Production Timeline", "15–50 working days", "7–35 working days"],
                  ["Best Buyer Reach", "Local & walk-in buyers", "NRI, online & remote buyers"],
                  ["Shareability", "Fixed to sales office", "Unlimited digital sharing"],
                  ["Lifespan", "18–36 months physical asset", "Permanent digital asset"],
                  ["Update Flexibility", "Costly to modify post-build", "Easy to re-edit or re-cut"],
                  ["Strongest Use Case", "Township & premium launches", "Pre-launch & digital campaigns"],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    {row.map((cell, j) => (
                      <td key={j} className={`p-4 ${j === 0 ? "font-semibold text-black" : "text-gray-700"}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4 — When model alone */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">When a Scale Model Alone Is the Right Call</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Choose a scale model as your primary asset when: your sales office sees consistent local walk-in traffic, the project is a high-ticket single-tower or township launch where spatial scale is the key selling point, or your buyer base skews heavily toward in-person, relationship-driven sales (common in tier-2 and tier-3 Indian cities).
          </p>
          <p className="text-gray-700 leading-relaxed">
            If your digital marketing spend is minimal and most bookings close after a physical site or sales office visit, the model alone can carry the bulk of the persuasion work.
          </p>
        </section>

        {/* Section 5 — When walkthrough alone */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">When a 3D Walkthrough Video Alone Is the Right Call</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Choose a 3D walkthrough video as your primary asset when: you need a pre-launch teaser before construction or the sales office exists, your buyer base includes a significant NRI or out-of-city segment, your campaign is digital-led (Meta, Google, property portals), or your timeline is too tight for a physical model&apos;s production schedule.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A walkthrough is also the better first move for commercial and office-leasing projects, where decision-makers are often based outside the project city and need a shareable asset for internal stakeholder approval.
          </p>
        </section>

        {/* Section 6 — Why use both */}
        <section className="mb-12 bg-black rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold text-white mb-4">Why India&apos;s Top Developers Increasingly Use Both Together</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The strongest sales funnels don&apos;t treat these as competing choices — they sequence them. A <strong>3D walkthrough video</strong> runs in digital campaigns and drives qualified footfall to the sales office. Once a buyer arrives, the <strong>architectural scale model</strong> closes the deal by giving them a tactile, trust-building experience that a screen cannot replicate.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            We increasingly see Alliance Media Labs clients commission both from a single drawing set — the same CAD files used to build the digital walkthrough inform the physical model&apos;s proportions, reducing rework and keeping both assets visually consistent with each other and with the final built product.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Explore both services:{" "}
            <Link href="/services/scale-model-maker-india" className="text-yellow-400 font-semibold hover:underline">
              Scale Model Maker India
            </Link>{" "}
            and{" "}
            <Link href="/services/3d-walkthrough-video-company-india" className="text-yellow-400 font-semibold hover:underline">
              3D Walkthrough Video Company India
            </Link>
            .
          </p>
        </section>

        {/* Section 7 — Budget framework */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">A Simple Budget Framework</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For developers planning to commission both, a practical starting split is roughly 65–70% of the visualization budget toward the scale model and 30–35% toward the walkthrough video for premium township launches — since the model carries a longer lifespan and higher unit cost. For digital-led or pre-launch campaigns, this often flips to 60–70% toward the walkthrough video, with the model commissioned closer to sales office opening.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The right split always depends on where your buyers actually convert — local sales office footfall versus digital lead-to-site-visit funnels. Track your own conversion data from the last launch before fixing next quarter&apos;s split.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              {
                q: "Can we commission a scale model and a 3D walkthrough video at the same time without delays?",
                a: "Yes. Since both are built from the same architectural drawings, running them in parallel is efficient — our 3D modelling team builds the digital walkthrough while the fabrication team begins CNC and laser-cutting on the physical model. Parallel production typically adds no extra time over commissioning either one alone.",
              },
              {
                q: "Which has better ROI for a launch with a tight timeline?",
                a: "If your launch is under 3 weeks away, a 3D walkthrough video is the faster asset — it can be produced in 7–15 working days versus 15–50 for a scale model. For tight timelines, lead with the walkthrough and commission the model for a slightly later sales office opening.",
              },
              {
                q: "Does a physical scale model still matter when most buyers research online first?",
                a: "Yes — online research narrows the shortlist, but the in-person sales office visit is where most high-ticket bookings are finalised. A scale model converts the buyer who has already self-selected via your digital content, making it the final and often decisive step in the funnel, not a replacement for it.",
              },
              {
                q: "Can the same drawings be used for both productions to save cost and time?",
                a: "Yes. The same AutoCAD, Revit, or SketchUp files used for the 3D walkthrough inform the model's dimensional accuracy, and vice versa. Sharing one drawing package across both productions avoids duplicate interpretation work and keeps both assets consistent with each other.",
              },
              {
                q: "How much should we budget if commissioning both for a mid-size residential project?",
                a: "For a typical mid-size residential launch (₹50 Cr–₹150 Cr project value), a reasonable combined visualization budget is ₹3–8 lakhs — split roughly 60/40 or 70/30 between model and walkthrough depending on whether your sales strategy is sales-office-led or digital-led. Contact us with your project details for a precise itemised quote.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-black mb-2 text-base">{q}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Posts */}
        <div className="border-t border-gray-100 pt-10 mb-12">
          <h3 className="text-lg font-bold text-black mb-5">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-5">
            <Link href="/blog/best-architectural-scale-model-company-india" className="group border border-gray-200 rounded-xl p-5 hover:border-yellow-400 transition-colors">
              <p className="text-xs text-yellow-500 font-semibold uppercase mb-2">B2B Guide</p>
              <h4 className="font-bold text-black group-hover:text-yellow-500 transition-colors leading-tight text-sm">Best Architectural Scale Model Company in India: How to Choose the Right Partner (2026)</h4>
            </Link>
            <Link href="/blog/3d-walkthrough-video-service" className="group border border-gray-200 rounded-xl p-5 hover:border-yellow-400 transition-colors">
              <p className="text-xs text-yellow-500 font-semibold uppercase mb-2">Visualization</p>
              <h4 className="font-bold text-black group-hover:text-yellow-500 transition-colors leading-tight text-sm">The Ultimate Guide to 3D Walkthrough Video Services for Real Estate</h4>
            </Link>
          </div>
        </div>

        {/* Back */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-yellow-500 transition-colors mb-16">
          <i className="ri-arrow-left-line"></i> Back to Blog
        </Link>
      </div>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Which One Your Project Needs?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Share your project details and launch timeline — we&apos;ll recommend the right mix of scale model and 3D walkthrough video, with a detailed quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
              Get a Free Recommendation
            </Link>
            <Link href="/services/scale-model-maker-india" className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors">
              View Scale Model Service
            </Link>
            <Link href="/services/3d-walkthrough-video-company-india" className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors">
              View Walkthrough Service
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
