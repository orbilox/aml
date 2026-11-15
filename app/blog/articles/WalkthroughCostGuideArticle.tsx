"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { BlogPost } from "../posts";

export default function WalkthroughCostGuideArticle({ post }: { post: BlogPost }) {
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
            "How much does a 3D walkthrough video cost?" is usually the first question a developer asks, and the honest answer is that it depends on the project. Quotes in India can differ several times over for what looks like the same brief. Here's what drives the price, what typical ranges look like, and how to compare quotes so you pay for the right thing.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Typical 3D Walkthrough Video Pricing in India</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <p className="text-gray-700 leading-relaxed mb-4">At Alliance Media Labs, a <Link href="/services/3d-walkthrough-video-company-india" className="text-yellow-600 font-semibold hover:underline">3D walkthrough video</Link> starts from about ₹75,000 for a simple residential unit walkthrough. Township master plan walkthroughs start from about ₹3,50,000, and a full project walkthrough covering exterior, amenities and multiple unit types can go to ₹5,00,000 and above. These are starting points, not fixed rates.</p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
            <table className="w-full text-sm">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Project type</th>
                  <th className="px-4 py-3 text-left font-semibold">What the walkthrough covers</th>
                  <th className="px-4 py-3 text-left font-semibold">Indicative starting price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black">Single apartment or unit</td>
                  <td className="px-4 py-3 text-gray-700">One unit interior, with a short exterior intro</td>
                  <td className="px-4 py-3 text-gray-700">From about ₹75,000</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black">Full residential project</td>
                  <td className="px-4 py-3 text-gray-700">Exterior, amenities, lobby and key unit types</td>
                  <td className="px-4 py-3 text-gray-700">Mid range, scoped per project</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black">Township master plan</td>
                  <td className="px-4 py-3 text-gray-700">Large-scale site, roads, amenities and phases</td>
                  <td className="px-4 py-3 text-gray-700">From about ₹3,50,000</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black">Large, multi-phase project</td>
                  <td className="px-4 py-3 text-gray-700">Several towers, many unit types, long runtime</td>
                  <td className="px-4 py-3 text-gray-700">₹5,00,000 and above</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">What Drives the Price</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li><strong>Scope and number of scenes:</strong> every extra unit type or amenity adds modelling and rendering time.</li>
            <li><strong>Length of the film:</strong> a 90-second launch cut costs less than a 4-minute full walkthrough.</li>
            <li><strong>Level of detail:</strong> furnished interiors, landscape and moving elements (traffic, people, water) raise the effort.</li>
            <li><strong>Quality of the source drawings:</strong> complete, approved drawings keep modelling quick. Design changes mid-project cost extra.</li>
            <li><strong>Voice-over, music and languages:</strong> multi-language versions add production steps.</li>
            <li><strong>Turnaround time:</strong> faster delivery before a launch date usually costs more.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">What Should Be Included in a Quote</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <p className="text-gray-700 leading-relaxed mb-4">Two quotes with the same headline price can include very different things. Check that the quote states:</p>

          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li>The exact length of the video and the scenes it covers</li>
            <li>The number of revision rounds included</li>
            <li>Output formats: full HD or 4K, and the aspect ratios you need for ads and social media</li>
            <li>Voice-over, music and subtitle options</li>
            <li>The delivery timeline, stage by stage</li>
            <li>Ownership of the final files</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">How to Keep Costs in Check Without Cutting Quality</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li><strong>Freeze the design first.</strong> Late changes are the most common reason a budget overruns.</li>
            <li><strong>Start with a hero cut.</strong> A short, polished film for ads and WhatsApp, with the longer version added later.</li>
            <li><strong>Reuse the 3D models.</strong> The same models can produce <Link href="/services/3d-renders-isometrics" className="text-yellow-600 font-semibold hover:underline">renders</Link>, a <Link href="/services/virtual-reality-tours" className="text-yellow-600 font-semibold hover:underline">VR tour</Link> and the walkthrough at a lower combined cost than three separate projects.</li>
            <li><strong>Plan the scenes.</strong> Decide the camera route before production so effort goes where buyers look.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Red Flags in a Low Quote</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <p className="text-gray-700 leading-relaxed mb-4"><strong>An unusually low price.</strong> It often means reused stock assets, limited revisions, or a rushed process that shows in the final film.</p>

          <p className="text-gray-700 leading-relaxed mb-4"><strong>No sample work from similar projects.</strong> Ask to see a walkthrough of a project like yours, not just a showreel.</p>

          <p className="text-gray-700 leading-relaxed mb-4"><strong>Vague scope.</strong> If the quote doesn't state length and scenes, expect extra charges later.</p>

          <p className="text-gray-700 leading-relaxed mb-8"><strong>No revision policy.</strong> You will almost always need changes, so know how many are included.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Is a 3D Walkthrough Worth the Cost?</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <p className="text-gray-700 leading-relaxed mb-8">A walkthrough lets buyers experience a project before it exists, and it can be reused across ads, the website, WhatsApp, the sales gallery and investor presentations. Treat it as an asset that works across the whole campaign, not a one-off expense. For how it fits with other formats, see our guide to <Link href="/blog/real-estate-marketing-video-types-india" className="text-yellow-600 font-semibold hover:underline">real estate marketing video types</Link>.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Cost by City</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <p className="text-gray-700 leading-relaxed mb-8">Pricing does not vary much by city, since the work is built from your drawings. For examples of local projects, see our pages for <Link href="/city-services/3d-walkthrough-videos-mumbai" className="text-yellow-600 font-semibold hover:underline">3D walkthrough videos in Mumbai</Link> and <Link href="/city-services/3d-walkthrough-videos-bengaluru" className="text-yellow-600 font-semibold hover:underline">3D walkthrough videos in Bengaluru</Link>.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">The Bottom Line</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <p className="text-gray-700 leading-relaxed mb-8">The cost of a 3D walkthrough video depends on scope, length, detail and drawing quality. Compare quotes on what they include, not only on the headline number, and plan the scope before you ask for prices.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">What to Do Next</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <p className="text-gray-700 leading-relaxed">
            Share your project details and we'll send a clear, itemised quote.{" "}
            <Link href="/services/3d-walkthrough-video-company-india" className="text-yellow-600 font-semibold hover:underline">
              Explore our 3D walkthrough video service
            </Link>{" "}
            or read our guide to{" "}
            <Link href="/blog/3d-walkthrough-video-service" className="text-yellow-600 font-semibold hover:underline">
              3D walkthrough video services
            </Link>.
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
            Want a Clear Quote for Your Walkthrough?
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
              href="/services/3d-walkthrough-video-company-india"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors"
            >
              View 3D Walkthrough Service
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
