"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { BlogPost } from "../posts";

export default function IsometricViewsGuideArticle({ post }: { post: BlogPost }) {
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
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Show a buyer a master plan on a flat drawing and they see lines. Show them the same plan as a 3D isometric view and they see a neighbourhood — where the towers stand, how far the clubhouse is, where the garden sits relative to their own flat. That is why isometric views have become standard in township launches, hoardings, and brochures. Here's what they are, how they're made, and where they work hardest.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">What Is a 3D Isometric View?</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            A <Link href="/services/3d-isometrics" className="text-yellow-600 font-semibold hover:underline">3D isometric view</Link> is a rendered illustration of a project seen from a fixed elevated angle — typically 30 degrees — with no perspective distortion. Because every building keeps its true proportions, the viewer can read the whole layout at once: block positions, roads, amenities, open spaces, and unit stacking.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            It sits between a technical drawing and a photorealistic render. It's accurate enough to explain the plan and attractive enough to put on a hoarding.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Isometric Views vs Perspective 3D Renders</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-6">
            They answer different buyer questions, so most projects eventually need both.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Format</th>
                  <th className="px-4 py-3 text-left font-semibold">Answers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black">Isometric View</td>
                  <td className="px-4 py-3 text-gray-700">"How is the whole project laid out, and where is everything?"</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black"><Link href="/services/3d-renders-isometrics" className="text-yellow-600 font-semibold hover:underline">Perspective 3D Render</Link></td>
                  <td className="px-4 py-3 text-gray-700">"What will it look and feel like to stand there?"</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black"><Link href="/services/3d-walkthrough-video-company-india" className="text-yellow-600 font-semibold hover:underline">3D Walkthrough Video</Link></td>
                  <td className="px-4 py-3 text-gray-700">"What is it like to move through the project?"</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8">
            Isometric views lead with layout, renders lead with feeling, and walkthroughs lead with experience. Together they cover the whole buyer journey.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Types of Isometric Views Developers Commission</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li><strong>Master plan isometric:</strong> the entire township or campus, showing roads, towers, amenities, and green space in one frame.</li>
            <li><strong>Building isometric:</strong> a single tower or block, often cut away to show floor plates and stacking.</li>
            <li><strong>Floor plan isometric:</strong> a 3D version of a unit layout, easier for buyers to read than a 2D plan.</li>
            <li><strong>Amenity and podium isometric:</strong> a close view of the clubhouse, pool, and podium landscape.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">What Makes an Isometric View Good</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li><strong>Technical precision:</strong> scale and proportion match the approved drawings, so nothing in the view contradicts the plan.</li>
            <li><strong>Clear visual hierarchy:</strong> your towers stand out and context stays quieter, so the eye lands where it should.</li>
            <li><strong>Useful labelling:</strong> numbered towers, amenity callouts, and a legend turn the image into something buyers can navigate.</li>
            <li><strong>Consistent styling:</strong> colours and finishes that match your brochure and hoardings, so every asset looks like one project.</li>
            <li><strong>Detail where it counts:</strong> landscaping, road networks, and nearby context rendered believably, not as flat filler.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">How an Isometric View Is Produced</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <ol className="list-decimal list-inside text-gray-700 space-y-1 mb-8">
            <li><strong>Brief and drawings.</strong> You share the master plan, tower plans, elevations, and finishes. The team confirms the angle and what to emphasise.</li>
            <li><strong>3D modelling.</strong> The project is built to scale from the approved drawings, including roads, landscape, and context.</li>
            <li><strong>Styling and rendering.</strong> Materials, lighting, and vegetation are applied, and the view is rendered at print resolution.</li>
            <li><strong>Labelling and revisions.</strong> Callouts and legends are added, one structured revision round is run, and final files are delivered for print and digital.</li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Where Isometric Views Work Hardest</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Township and plotted-development launches:</strong> when buyers are choosing a plot or block, they need to see position, orientation, and neighbours.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Hoardings and outdoor media:</strong> a single isometric view communicates scale at a glance, which is what a passing viewer needs. See our guide to <Link href="/blog/real-estate-graphics-branding-guide-india" className="text-yellow-600 font-semibold hover:underline">real estate graphics and branding</Link> for how it fits into the wider design system.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Brochure centrepiece:</strong> the double-page spread most buyers open first is almost always the master plan.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            <strong>Sales gallery and channel partner kits:</strong> brokers use the isometric view to explain the project in under a minute, and it works alongside an <Link href="/services/scale-model-maker-india" className="text-yellow-600 font-semibold hover:underline">architectural scale model</Link> for physical presentations.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">What Do Isometric Views Cost in India?</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li><strong>Single building or floor plan view:</strong> the lowest-cost option, with the fastest turnaround.</li>
            <li><strong>Master plan isometric:</strong> priced on site size and the amount of landscape and context to model.</li>
            <li><strong>Multi-view package:</strong> master plan plus building and amenity views, usually the best value since the 3D model is built once and reused.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-8">
            Complexity drives the price: the number of towers, the level of landscape detail, and how many labelled variants are needed.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Common Mistakes to Avoid</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Mistake 1: Briefing from outdated drawings.</strong> A view that doesn't match the approved plan creates problems at RERA registration and at the site visit.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Mistake 2: Over-decorating the context.</strong> Too much surrounding detail pulls attention from your own towers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Mistake 3: Low-resolution delivery.</strong> A view that looks sharp on screen but pixelates on a hoarding wastes the whole shoot. Ask for print-resolution files from the start.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            <strong>Mistake 4: Using it in only one place.</strong> One good isometric view can anchor the brochure, hoarding, website, and ads. Plan every use up front.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">The Bottom Line</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-8">
            Isometric views are the fastest way to make a project's layout understandable. For any development with more than a single tower, they're usually the first visual asset worth getting right.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">What to Do Next</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed">
            If your project is still being sold from flat 2D plans, an isometric view is a quick, high-impact upgrade. Looking for a partner to create it?{" "}
            <Link href="/services/3d-isometrics" className="text-yellow-600 font-semibold hover:underline">
              Explore our 3D isometric views service
            </Link>{" "}
            for portfolio examples and pricing.
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
            Ready to Make Your Master Plan Easy to Understand?
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
              href="/services/3d-isometrics"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors"
            >
              View Our Isometric Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
