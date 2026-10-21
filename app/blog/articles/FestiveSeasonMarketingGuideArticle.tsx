"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { BlogPost } from "../posts";

export default function FestiveSeasonMarketingGuideArticle({ post }: { post: BlogPost }) {
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
            In India, the months around Navratri, Dussehra, and Diwali are when families are most willing to commit to a home. Property is considered auspicious to buy, relatives are visiting, and bonuses are landing. Developers know this — which is why every hoarding, feed, and inbox is full of "festive offers" by mid-October. Here's how to build a festive campaign that stands out instead of adding to the noise.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Why the Festive Season Matters for Real Estate</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The festive period changes buyer behaviour in three ways. Intent rises: many families set aside these weeks to finally act on a plan they've discussed all year. Decision-makers are together: spouses, parents, and siblings are in one place, which shortens a decision that usually takes months. And sentiment matters: a home bought on an auspicious day carries emotional weight that no discount can replicate.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            A campaign that treats this as "just another discount window" misses the point. The strongest festive campaigns sell the feeling of a new home, with the offer in support.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Start Earlier Than You Think</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            By the time festive ads flood the feed, the buyer's shortlist is usually already formed. Buyers research for weeks before the festival and visit sites in the days around it. A workable timeline looks like this:
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Stage</th>
                  <th className="px-4 py-3 text-left font-semibold">What to do</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black">4–6 weeks before</td>
                  <td className="px-4 py-3 text-gray-700">Finalise the offer, refresh creatives, update the website and brochure, brief channel partners</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black">2–4 weeks before</td>
                  <td className="px-4 py-3 text-gray-700">Launch awareness and retargeting campaigns, start collecting leads for site-visit weekends</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black">Festival week</td>
                  <td className="px-4 py-3 text-gray-700">Push site-visit bookings and hold on-site events</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black">After the festival</td>
                  <td className="px-4 py-3 text-gray-700">Follow up every lead within days; many buyers decide after the celebrations end</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8">
            Even if the festival is close, the last two stages still apply. Follow-up is where most festive leads are won or lost.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Build the Campaign Around One Idea</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            "Festive offer, limited time" is what every competitor is saying. Pick one idea and carry it across every format:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li><strong>Light and new beginnings:</strong> warm, glowing visuals of the home at dusk, tied to the Diwali theme.</li>
            <li><strong>Family and togetherness:</strong> the idea of the first festival in a new home, with the whole family in it.</li>
            <li><strong>Ready to celebrate:</strong> for ready-to-move projects, emphasising that the buyer can celebrate there this year or next.</li>
            <li><strong>Auspicious start:</strong> a muhurat-themed booking window, for buyers who care about timing.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Assets Every Festive Campaign Needs</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li><strong>Festive creatives:</strong> consistent <Link href="/graphics-branding" className="text-yellow-600 font-semibold hover:underline">graphics and branding</Link> across hoardings, social posts, WhatsApp forwards, and email, so the campaign looks like one thing.</li>
            <li><strong>A hero video:</strong> a short <Link href="/services/3d-walkthrough-video-company-india" className="text-yellow-600 font-semibold hover:underline">3D walkthrough</Link> or <Link href="/services/interior-cinematic-walkthrough" className="text-yellow-600 font-semibold hover:underline">interior cinematic</Link> clip as the anchor asset for ads and WhatsApp.</li>
            <li><strong>Construction progress proof:</strong> for under-construction projects, a recent <Link href="/construction-update-videos" className="text-yellow-600 font-semibold hover:underline">construction update video</Link> reassures buyers who are about to commit.</li>
            <li><strong>A festive landing page:</strong> one page with the offer, key visuals, and a short enquiry form. Don't send festive ad traffic to the generic homepage.</li>
            <li><strong>Channel partner kit:</strong> brokers are busiest in festival weeks. Give them ready-to-forward creatives and the offer details.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Run Digital Campaigns That Convert, Not Just Click</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cost per click rises during festivals because every developer is bidding. Protect your budget with a tighter setup, building on our <Link href="/blog/real-estate-digital-marketing-guide-india" className="text-yellow-600 font-semibold hover:underline">real estate digital marketing guide</Link>:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li><strong>Retarget first.</strong> People who've already visited your site or watched your video are cheaper and more likely to convert than cold audiences.</li>
            <li><strong>Target by micro-market.</strong> Buyers searching in your locality matter more than a broad city audience.</li>
            <li><strong>Make the call to action a site visit.</strong> In this season, a booked visit is worth more than a brochure download.</li>
            <li><strong>Respond fast.</strong> Festival leads go cold quickly. A call within minutes beats a call the next day.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Common Mistakes to Avoid</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Mistake 1: Competing only on discount.</strong> Buyers comparing five similar offers will pick on trust and visuals, not a marginally larger discount.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Mistake 2: Generic festive greetings.</strong> A logo with "Happy Diwali" builds goodwill but no bookings. Pair the greeting with a reason to visit.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Mistake 3: Starting too late.</strong> Campaigns launched in festival week are competing with the loudest noise of the year and have no time to retarget.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            <strong>Mistake 4: Ignoring post-festival follow-up.</strong> Many decisions are made in the quiet weeks after the celebrations. A dead lead list in November is wasted spend.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">The Bottom Line</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-8">
            The festive season rewards developers who prepare early, sell the emotion of a new home, and follow up relentlessly. The offer gets attention; the visuals, the proof, and the follow-up win the booking.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">What to Do Next</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed">
            If your festive campaign still needs creatives, a hero video, or a landing page, there's still time to put the key pieces in place. Need help?{" "}
            <Link href="/services/digital-marketing" className="text-yellow-600 font-semibold hover:underline">
              Explore our real estate digital marketing service
            </Link>{" "}
            to see how we run festive campaigns end to end.
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
            Ready to Launch Your Festive Season Campaign?
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
              href="/services/digital-marketing"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors"
            >
              View Our Digital Marketing Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
