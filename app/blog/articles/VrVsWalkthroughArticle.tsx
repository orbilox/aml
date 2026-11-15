"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { BlogPost } from "../posts";

export default function VrVsWalkthroughArticle({ post }: { post: BlogPost }) {
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
            Developers often ask us the same question: should we invest in a VR tour or a 3D walkthrough video? Both let buyers see a project before it is built, and both are built from your approved drawings. But they work very differently in the sales process. Here's how to choose, and when to use both.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">What Each Format Is</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <p className="text-gray-700 leading-relaxed mb-4">A <Link href="/services/3d-walkthrough-video-company-india" className="text-yellow-600 font-semibold hover:underline">3D walkthrough video</Link> is a produced film. A camera moves along a planned path through the exterior, amenities and homes, with music or voice-over. The viewer watches; the developer controls the story.</p>

          <p className="text-gray-700 leading-relaxed mb-8">A <Link href="/services/virtual-reality-tours" className="text-yellow-600 font-semibold hover:underline">VR tour</Link> is interactive. The buyer chooses where to look and where to go, moving between rooms through hotspots on a phone, a browser, an iPad in the sales office, or a headset. The viewer explores; the buyer controls the story.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">VR Tour vs 3D Walkthrough Video: At a Glance</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
            <table className="w-full text-sm">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold"></th>
                  <th className="px-4 py-3 text-left font-semibold">3D walkthrough video</th>
                  <th className="px-4 py-3 text-left font-semibold">VR tour</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black">Experience</td>
                  <td className="px-4 py-3 text-gray-700">Watched like a film</td>
                  <td className="px-4 py-3 text-gray-700">Explored by the buyer</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black">Control</td>
                  <td className="px-4 py-3 text-gray-700">Developer decides the path</td>
                  <td className="px-4 py-3 text-gray-700">Buyer decides the path</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black">Best for</td>
                  <td className="px-4 py-3 text-gray-700">Launches, ads, WhatsApp, YouTube, investor decks</td>
                  <td className="px-4 py-3 text-gray-700">Sales gallery, remote buyers, unit comparison</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black">Where it lives</td>
                  <td className="px-4 py-3 text-gray-700">Any video platform or screen</td>
                  <td className="px-4 py-3 text-gray-700">Website link, iPad or kiosk, headset</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black">Starting cost we quote</td>
                  <td className="px-4 py-3 text-gray-700">From about ₹75,000</td>
                  <td className="px-4 py-3 text-gray-700">From about ₹80,000</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black">Strength</td>
                  <td className="px-4 py-3 text-gray-700">Emotion and storytelling</td>
                  <td className="px-4 py-3 text-gray-700">Understanding of layout and space</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8">Starting costs depend on project size and scope; they're indicative, not fixed.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">When a 3D Walkthrough Video Wins</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li><strong>Launch campaigns.</strong> A short film gets shared widely and works in paid ads, social media and WhatsApp.</li>
            <li><strong>Telling the project's story.</strong> If the neighbourhood, amenities and lifestyle are the pitch, a guided film shows them in the right order.</li>
            <li><strong>Investor and channel partner presentations.</strong> A video plays the same way for every audience.</li>
            <li><strong>Projects with strong visuals.</strong> A podium garden or a skyline view lands best in a cinematic shot.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">When a VR Tour Wins</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li><strong>Remote and NRI buyers.</strong> Someone who can't visit the site can still walk through a unit on their own time. See our guide to <Link href="/blog/sell-property-to-nri-buyers-india" className="text-yellow-600 font-semibold hover:underline">selling to NRI buyers</Link>.</li>
            <li><strong>The sales gallery.</strong> Buyers can explore the exact unit they're considering instead of waiting for a guide.</li>
            <li><strong>Comparing unit types.</strong> Moving between a 2 BHK and a 3 BHK shows the difference faster than any brochure.</li>
            <li><strong>Projects without a finished sample flat.</strong> The VR tour stands in for the show flat.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Why Many Developers Use Both</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <p className="text-gray-700 leading-relaxed mb-8">The two formats do different jobs, so they work well together. A common setup: the 3D walkthrough video drives awareness at launch, in ads and on social media, and a VR tour on the website and sales iPad turns that interest into understanding and a site visit. Both come from the same 3D models, which keeps the cost of the second format lower. Read our guides to <Link href="/blog/virtual-reality-tours-real-estate-india-guide" className="text-yellow-600 font-semibold hover:underline">VR tours for real estate</Link> and <Link href="/blog/3d-walkthrough-video-service" className="text-yellow-600 font-semibold hover:underline">3D walkthrough video services</Link> for more detail on each.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">How to Decide</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <p className="text-gray-700 leading-relaxed mb-4">Ask three questions:</p>

          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li><strong>Where will most buyers first see the project?</strong> Online ads and social favour video; the sales office and website favour VR.</li>
            <li><strong>Do buyers need to understand layouts, or feel the lifestyle?</strong> Layouts point to VR; lifestyle points to video.</li>
            <li><strong>What is the budget for this phase?</strong> If you can only fund one, start with the format your main channel uses, and add the second later.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Common Mistakes to Avoid</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <p className="text-gray-700 leading-relaxed mb-4"><strong>Mistake 1: Treating them as the same thing.</strong> A video is not a substitute for exploring a unit, and a VR tour is not a launch film.</p>

          <p className="text-gray-700 leading-relaxed mb-4"><strong>Mistake 2: Hiding the VR tour.</strong> A tour buried on a sub-page gets few visits. Link it from the homepage and the sales material.</p>

          <p className="text-gray-700 leading-relaxed mb-8"><strong>Mistake 3: Making the video too long.</strong> For ads and WhatsApp, keep the hero cut short and put the full film on your site or YouTube.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">For Developers in Bengaluru and Beyond</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <p className="text-gray-700 leading-relaxed mb-8">We build both formats for projects across India. See our city pages for <Link href="/city-services/virtual-reality-tours-bengaluru" className="text-yellow-600 font-semibold hover:underline">VR tours in Bengaluru</Link> and <Link href="/city-services/3d-walkthrough-videos-bengaluru" className="text-yellow-600 font-semibold hover:underline">3D walkthrough videos in Bengaluru</Link>, or <Link href="/city-services/3d-walkthrough-videos-mumbai" className="text-yellow-600 font-semibold hover:underline">3D walkthrough videos in Mumbai</Link>.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">The Bottom Line</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <p className="text-gray-700 leading-relaxed mb-8">A 3D walkthrough video tells your project's story; a VR tour lets buyers explore it. Choose by where your buyers meet the project, and use both when the budget allows.</p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">What to Do Next</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <p className="text-gray-700 leading-relaxed">
            Tell us about your project and where your buyers are, and we'll recommend the right format.{" "}
            <Link href="/services/virtual-reality-tours" className="text-yellow-600 font-semibold hover:underline">
              Explore our VR tours service
            </Link>{" "}
            or see our{" "}
            <Link href="/services/3d-walkthrough-video-company-india" className="text-yellow-600 font-semibold hover:underline">
              3D walkthrough video service
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
            Not Sure Which Format Fits Your Project?
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
              href="/services/virtual-reality-tours"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors"
            >
              Explore VR Tours
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
