"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { BlogPost } from "../posts";

export default function RouteVideosGuideArticle({ post }: { post: BlogPost }) {
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
            "How far is it from the metro?" is one of the first questions a real estate buyer asks — and one of the hardest to answer convincingly with a static map screenshot. A route video answers it the way a buyer actually experiences it: from the driver's seat and from the air. Here's what route videos actually cover, how they're produced, and where they earn their budget back fastest.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">What Is a Route Video in Real Estate?</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            A <Link href="/route-videos" className="text-yellow-600 font-semibold hover:underline">route video</Link> is a cinematic piece that shows the actual journey to a project — the approach roads, nearby landmarks, and connectivity points — combined with ground-level and aerial drone footage and on-screen travel-time callouts. Instead of telling a buyer "12 minutes from the airport," it shows them the drive.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            It sits alongside real estate videography and property videography as a connectivity-first format — the site itself is secondary; the focus is everything around it that determines whether the location actually works for a buyer's daily life.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Why Connectivity Is the First Objection Buyers Raise</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before amenities, before unit layouts, most buyers are silently running a commute calculation — school, workplace, hospital, highway. A location a buyer can't picture reaching easily gets mentally rejected before the rest of the pitch even lands.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            A route video removes the guesswork. It's especially effective for projects positioned on an emerging or peripheral corridor, where the connectivity story — not the building itself — is the actual sales argument.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">What a Professional Route Video Actually Includes</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li><strong>Smart route planning:</strong> the most scenic and relevant approach roads are mapped out before a single shot is scheduled.</li>
            <li><strong>Cinematic ground coverage:</strong> smooth ground-level cinematography capturing the actual journey experience along every key access road.</li>
            <li><strong>Aerial drone perspectives:</strong> 4K <Link href="/services/drone-shoots" className="text-yellow-600 font-semibold hover:underline">drone footage</Link> giving buyers a bird's-eye view of connectivity, traffic flow, and surrounding infrastructure.</li>
            <li><strong>Accurate travel-time callouts:</strong> on-screen labels sourced from real distances, not rough estimates, to major landmarks.</li>
            <li><strong>Landmark and amenity highlights:</strong> nearby schools, hospitals, malls, and transit hubs called out visually along the route.</li>
            <li><strong>Clear navigation cues:</strong> directional signage and turn-by-turn visual cues so buyers can picture the actual drive to site.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">How a Route Video Is Actually Produced</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <ol className="list-decimal list-inside text-gray-700 space-y-1 mb-8">
            <li><strong>Route planning.</strong> Every connectivity highlight is mapped — metro stations, schools, hospitals, highways, and landmarks worth showing.</li>
            <li><strong>Shoot day.</strong> Drone and ground footage is captured across all key routes and landmark destinations around the project.</li>
            <li><strong>Motion graphics.</strong> Animated map overlays, distance callouts, proximity labels, and route highlights are added in post-production.</li>
            <li><strong>Final delivery.</strong> A branded location video is delivered in full HD, with social cut-downs ready for Instagram, YouTube, and WhatsApp.</li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Route Videos vs Drone Shoots vs Construction Update Videos</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-6">
            These three formats overlap in equipment but not in purpose, and mixing them up wastes shoot days.
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
                  <td className="px-4 py-3 font-medium text-black">Route Video</td>
                  <td className="px-4 py-3 text-gray-700">"How do I actually get here, and what's around it?"</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black"><Link href="/services/drone-shoots" className="text-yellow-600 font-semibold hover:underline">Drone Shoot</Link></td>
                  <td className="px-4 py-3 text-gray-700">"What does the site and its immediate surroundings look like from above?"</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black"><Link href="/construction-update-videos" className="text-yellow-600 font-semibold hover:underline">Construction Update Video</Link></td>
                  <td className="px-4 py-3 text-gray-700">"How far along is construction, and is my money safe?"</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8">
            A well-planned launch campaign usually needs all three at different points in the buyer journey — route video to win the location argument, drone shoot for the hero marketing asset, and construction updates to maintain trust after booking.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Where Route Videos Deliver the Highest ROI</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Pre-launch buyer decks:</strong> show early buyers and investors why the location is a sound bet, before the project has even launched.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Channel partner enablement:</strong> equip brokers and channel partners with a ready location story for every client meeting, rather than relying on their own pitch.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Performance digital ads:</strong> location-led creative performs strongly in Meta and Google campaigns targeting buyers already searching in that area, tying directly into a broader <Link href="/services/digital-marketing" className="text-yellow-600 font-semibold hover:underline">digital marketing</Link> push.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            <strong>Bundled launch packages:</strong> combining a route video with drone B-roll and construction updates into one package is usually more cost-efficient than commissioning each separately later.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">What Does a Route Video Cost in India?</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pricing scales with the number of routes covered and whether motion-graphics overlays and social cut-downs are included:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li><strong>Single-route video</strong> (one primary approach road, basic callouts): Lower cost, fastest turnaround.</li>
            <li><strong>Multi-route coverage</strong> with full motion-graphics overlays and landmark highlights: Mid-range, the most common launch-campaign scope.</li>
            <li><strong>Bundled package</strong> combining route video, drone B-roll, and social cut-downs: Highest value per rupee spent, since crew and edit time are shared across deliverables.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">How to Choose a Route Video Production Partner</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li><strong>A crew that understands real estate,</strong> not a generic film crew — knowing what actually sells a location changes what gets filmed and highlighted.</li>
            <li><strong>DGCA-compliant drone operations</strong> with valid permissions for the routes and areas being filmed.</li>
            <li><strong>Accurate distance data,</strong> not rough estimates — travel-time callouts that don't match reality damage trust fast.</li>
            <li><strong>Motion-graphics capability in-house,</strong> so map overlays and callouts match the same visual system as your other marketing assets.</li>
            <li><strong>Social-ready delivery formats</strong> included by default, not billed as a separate add-on.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Common Mistakes to Avoid</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Mistake 1: Filming the "ideal" route instead of the real one.</strong> Buyers will drive the actual route themselves — an unrealistically smooth or shortened depiction only creates disappointment at the site visit.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Mistake 2: Guessing at travel times.</strong> Approximate or optimistic callouts are one of the fastest ways to lose buyer trust once they check the route themselves.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Mistake 3: Skipping ground footage for drone-only coverage.</strong> Aerial shots alone don't communicate what the drive actually feels like — traffic, road quality, turns — which is what buyers really want to know.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            <strong>Mistake 4: Treating it as a one-off asset.</strong> A route video works hardest when reused across pre-launch decks, channel partner kits, and paid ads — not filed away after the launch event.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Real Numbers: The Business Impact</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li><strong>Fewer connectivity objections at the site visit:</strong> buyers who've already seen the route arrive with the location question pre-answered.</li>
            <li><strong>Stronger channel partner pitches:</strong> brokers equipped with a ready location story close the connectivity conversation faster and more consistently.</li>
            <li><strong>Better-performing location-led ad creative:</strong> connectivity-focused video consistently outperforms static map graphics in paid campaigns.</li>
            <li><strong>Higher perceived value for peripheral or emerging locations:</strong> a well-produced route video reframes "far" as "well-connected."</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">The Bottom Line</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-8">
            A route video isn't a nice-to-have extra clip for the website — for any project where connectivity is part of the pitch, it's often the single asset that resolves a buyer's biggest silent objection before the sales team even opens the conversation.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">What to Do Next</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed">
            If your project's connectivity story is stronger than your current marketing shows, a route video is usually the fastest gap to close before your next paid campaign or channel partner briefing. Looking for a partner to build it?{" "}
            <Link href="/route-videos" className="text-yellow-600 font-semibold hover:underline">
              Explore our route videos service
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
            Ready to Tell Your Location's Connectivity Story?
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
              href="/route-videos"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors"
            >
              View Our Route Video Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
