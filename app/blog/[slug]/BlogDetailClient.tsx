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

  if (slug === "architectural-scale-models-india-real-estate") {
    return <ScaleModelsArticle post={post} />;
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
