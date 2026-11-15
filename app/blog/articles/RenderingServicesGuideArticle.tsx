"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { BlogPost } from "../posts";

export default function RenderingServicesGuideArticle({ post }: { post: BlogPost }) {
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
            Every real estate launch starts with images. Before a brick is laid, buyers judge the project by its renders: the tower facade, the lobby, the sample flat, the aerial view of the township. That makes 3D rendering the first and most reused visual asset a developer commissions. Here's what 3D rendering services cover, what they cost in India, and how to pick a studio that delivers renders buyers actually believe.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">What 3D Rendering Services Cover</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <p className="text-gray-700 leading-relaxed mb-4">A real estate rendering studio rarely produces just one kind of image. A typical project needs a small set that works together. Our <Link href="/services/3d-renders-isometrics" className="text-yellow-600 font-semibold hover:underline">3D renders and isometrics service</Link> covers the full set, built from your approved architectural drawings.</p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
            <table className="w-full text-sm">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Render type</th>
                  <th className="px-4 py-3 text-left font-semibold">What it shows</th>
                  <th className="px-4 py-3 text-left font-semibold">Where it's used</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black">Exterior renders</td>
                  <td className="px-4 py-3 text-gray-700">The building facade, entrance, landscape and surroundings, often at dusk and day</td>
                  <td className="px-4 py-3 text-gray-700">Hoardings, brochures, website hero, ads</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black">Interior renders</td>
                  <td className="px-4 py-3 text-gray-700">Living rooms, bedrooms, kitchens and lobbies with finishes and lighting</td>
                  <td className="px-4 py-3 text-gray-700">Brochures, sales presentations, social media</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black">3D floor plans</td>
                  <td className="px-4 py-3 text-gray-700">Furnished, colour-coded unit layouts in 3D</td>
                  <td className="px-4 py-3 text-gray-700">Unit selection, brochures, sales gallery screens</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black">Aerial and bird's-eye views</td>
                  <td className="px-4 py-3 text-gray-700">The whole project in its neighbourhood</td>
                  <td className="px-4 py-3 text-gray-700">Launch material, investor decks, location marketing</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black">Isometric views</td>
                  <td className="px-4 py-3 text-gray-700">A clean angled view of the master plan</td>
                  <td className="px-4 py-3 text-gray-700">Township launches, highway hoardings, <Link href="/services/3d-isometrics" className="text-yellow-600 font-semibold hover:underline">master plan visuals</Link></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">How 3D Rendering Is Priced in India</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <p className="text-gray-700 leading-relaxed mb-4">Rendering is priced per view, and the price depends mainly on how complex the scene is. As starting points we quote: standard residential exterior views from about ₹8,000–₹15,000 per view, and high-rise, luxury or commercial renders with complex materials and lighting from about ₹25,000 per view. Final pricing depends on your project; these are not fixed rates.</p>

          <p className="text-gray-700 leading-relaxed mb-4">The factors that move the price are:</p>

          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li><strong>Scene complexity:</strong> a single villa is simpler than a 40-storey tower with podium landscape and neighbouring buildings.</li>
            <li><strong>Number of views:</strong> most studios offer better per-view rates on a larger set.</li>
            <li><strong>Material and lighting detail:</strong> glass facades, water features and night lighting take longer to get right.</li>
            <li><strong>Revision rounds:</strong> how many changes are included before extra charges apply.</li>
            <li><strong>Turnaround time:</strong> rush delivery before a launch date usually costs more.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">What to Give the Studio Before You Start</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <p className="text-gray-700 leading-relaxed mb-4">Renders are only as accurate as the drawings behind them. A good brief saves a revision round or two:</p>

          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li>Approved plans, elevations and sections (CAD or PDF)</li>
            <li>Material and finish specifications: facade colours, flooring, fixtures</li>
            <li>Landscape plan and the amenities that must be visible</li>
            <li>A few reference images of the mood you want, such as time of day, warm or cool tone</li>
            <li>A list of the exact views needed and where each will be used</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">How to Choose a Rendering Studio</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <p className="text-gray-700 leading-relaxed mb-4">Most studios show beautiful sample images. The difference shows up in the details. Check these before you commit:</p>

          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li><strong>Relevant portfolio:</strong> look for projects like yours, such as high-rise, township or villa. See our <Link href="/portfolio" className="text-yellow-600 font-semibold hover:underline">portfolio</Link> for the kind of work we deliver.</li>
            <li><strong>Fidelity to drawings:</strong> ask how they check that the render matches the approved plan. Renders that look better than the real building create trust problems later.</li>
            <li><strong>Revision policy:</strong> get the number of included rounds in writing.</li>
            <li><strong>Turnaround:</strong> ask for a timeline per stage: clay model, materials and final render.</li>
            <li><strong>File formats and usage rights:</strong> you should receive high-resolution files you can use in print and online without extra fees.</li>
            <li><strong>Communication:</strong> one point of contact who understands real estate launches.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Common Mistakes to Avoid</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <p className="text-gray-700 leading-relaxed mb-4"><strong>Mistake 1: Choosing only on price.</strong> A very low quote often means templated lighting, stock materials, or limited revisions, and you pay for it in the final image quality.</p>

          <p className="text-gray-700 leading-relaxed mb-4"><strong>Mistake 2: Finalising drawings late.</strong> Changing the facade after rendering starts means redoing work. Freeze the design before you begin.</p>

          <p className="text-gray-700 leading-relaxed mb-4"><strong>Mistake 3: Ordering too few views.</strong> Brochures, hoardings, ads and the website each need different crops and angles. Plan the full set at the start.</p>

          <p className="text-gray-700 leading-relaxed mb-8"><strong>Mistake 4: Ignoring the surroundings.</strong> Buyers want to see the project in context. Include nearby roads and landmarks where they help.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Rendering for Your City</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <p className="text-gray-700 leading-relaxed mb-8">Local context matters, from the skyline to the way light falls on a facade. We deliver renders across India, with a dedicated page for <Link href="/city-services/3d-renders-mumbai" className="text-yellow-600 font-semibold hover:underline">3D renders in Mumbai</Link>. For a deeper look at residential work, read our guide to <Link href="/blog/3d-house-rendering-guide-india" className="text-yellow-600 font-semibold hover:underline">3D house rendering in India</Link>.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">The Bottom Line</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <p className="text-gray-700 leading-relaxed mb-8">Good 3D rendering services give you images buyers trust and teams can reuse across every channel. Pick a studio on portfolio fit, fidelity to your drawings and a clear revision policy, not on the lowest price per view.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">What to Do Next</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <p className="text-gray-700 leading-relaxed">
            Planning a launch and need renders? Share your drawings and the views you need, and we'll send a clear quote.{" "}
            <Link href="/services/3d-renders-isometrics" className="text-yellow-600 font-semibold hover:underline">
              Explore our 3D renders and isometrics service
            </Link>{" "}
            to see sample work.
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
            Need 3D Renders for Your Next Launch?
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
              href="/services/3d-renders-isometrics"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors"
            >
              View Our 3D Rendering Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
