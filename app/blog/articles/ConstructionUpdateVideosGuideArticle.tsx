"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { BlogPost } from "../posts";

export default function ConstructionUpdateVideosGuideArticle({ post }: { post: BlogPost }) {
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
            A buyer who has paid a booking amount on an under-construction flat has one recurring question: "Is my building actually getting built?" Most developers answer it with a few WhatsApp photos and a quarterly email. A well-run construction update video programme answers it with proof — and quietly becomes one of the strongest trust assets a developer owns. Here's what construction update videos cover, how they're produced, and how to set up a schedule that works.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">What Are Construction Update Videos?</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <Link href="/construction-update-videos" className="text-yellow-600 font-semibold hover:underline">Construction update videos</Link> are short, branded videos that document the real progress of a project at a fixed point in time — aerial and ground-level footage of every tower, floor, and amenity zone, edited into a clean piece a buyer can watch in two or three minutes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            They are different from a launch film. A launch film sells a vision; a construction update proves delivery. That difference is exactly why existing buyers, investors, and channel partners trust them more than any other marketing asset.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Why Developers Need Them in 2026</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Trust after booking.</strong> The sales cycle doesn't end at the booking form. Buyers who see steady visible progress stay calm, pay milestone instalments on time, and refer friends. Buyers who hear nothing start asking about refunds. We covered the trust side in detail in our piece on <Link href="/blog/construction-delay-buyer-trust-india" className="text-yellow-600 font-semibold hover:underline">construction delays and buyer trust</Link>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Regulatory documentation.</strong> RERA expects developers to report project progress regularly. A dated, professionally shot video is far stronger visual documentation than a folder of phone photos, and it can be shared with buyers and authorities alike.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            <strong>Fresh marketing content.</strong> Every update is also new content for social media and ads. "Tower B, 14th slab cast" is more believable than any render — and it costs nothing extra once the shoot is done.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">What a Good Construction Update Video Includes</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li><strong>Aerial overview:</strong> a <Link href="/services/drone-shoots" className="text-yellow-600 font-semibold hover:underline">drone</Link> pass showing the whole site, so buyers can see every tower's stage at once.</li>
            <li><strong>Tower-by-tower coverage:</strong> each building filmed separately, with the current floor or stage clearly identified.</li>
            <li><strong>Ground-level detail:</strong> structure, finishing quality, and site cleanliness — the things buyers can't see from the road.</li>
            <li><strong>Amenity and landscape progress:</strong> clubhouse, podium, and landscaping, which buyers care about as much as the towers.</li>
            <li><strong>Time-lapse sequences:</strong> months of progress compressed into a short, shareable clip.</li>
            <li><strong>Date stamps and branding:</strong> each video clearly dated and on-brand, so it works as a record as well as marketing.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">How the Production Process Works</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <ol className="list-decimal list-inside text-gray-700 space-y-1 mb-8">
            <li><strong>Site visit and schedule.</strong> The crew agrees a shoot cadence with your project team — monthly, bi-monthly, or per milestone.</li>
            <li><strong>Shoot.</strong> Drone and ground footage is captured across all construction zones, floors, and milestones, following safety rules on site.</li>
            <li><strong>Edit and grade.</strong> Footage is cut, colour-graded, branded, and dated so each update looks consistent with the last.</li>
            <li><strong>Delivery.</strong> The final video is delivered in formats ready for WhatsApp broadcast, email, social media, and regulatory submission.</li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">How Often Should You Shoot?</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Construction phase</th>
                  <th className="px-4 py-3 text-left font-semibold">Suggested cadence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black">Excavation and foundation</td>
                  <td className="px-4 py-3 text-gray-700">Quarterly — change is slow and mostly below ground</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black">Structure (active slab casting)</td>
                  <td className="px-4 py-3 text-gray-700">Monthly — progress is visible every few weeks</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black">Finishing and facade</td>
                  <td className="px-4 py-3 text-gray-700">Monthly or per milestone</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-black">Handover preparation</td>
                  <td className="px-4 py-3 text-gray-700">Per milestone, with a final walkthrough-style video</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8">
            Projects with a 12–36 month build usually do best on a retainer, since the same crew and the same shot positions make month-on-month comparisons far more convincing.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Where to Use Each Update</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Buyer communication:</strong> send it with every milestone demand letter, so the payment request arrives alongside visible proof of progress.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Sales and channel partners:</strong> brokers selling inventory in a half-built project need current visuals. A fresh update beats an old render every time.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            <strong>Social and paid campaigns:</strong> progress content supports a wider <Link href="/services/digital-marketing" className="text-yellow-600 font-semibold hover:underline">digital marketing</Link> plan and shows prospects the project is real and moving.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">What Do Construction Update Videos Cost?</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-8">
            <li><strong>Single shoot:</strong> a one-off documentation video for a milestone such as topping out. Lowest commitment.</li>
            <li><strong>Monthly retainer:</strong> a fixed monthly shoot and edit, priced per month, with the best per-video cost.</li>
            <li><strong>Multi-tower or large township:</strong> priced on the number of towers and zones covered, plus any time-lapse scope.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-8">
            The biggest cost driver is how many towers and zones need covering, not the video length. A short, well-edited update usually serves buyers better than a long one.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">Common Mistakes to Avoid</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Mistake 1: Irregular shoots.</strong> Updates that come every three months, then twice in one month, look like they're being used to manage perception. A fixed cadence builds credibility.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Mistake 2: Filming only the best tower.</strong> Buyers in the slower tower will notice. Cover every tower, every time.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Mistake 3: Changing the camera positions.</strong> Repeating the same drone and ground positions lets buyers compare updates side by side.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            <strong>Mistake 4: Sending the video and nothing else.</strong> Pair each update with two lines on what was completed and what's next. The footage shows progress; the note sets expectations.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">The Bottom Line</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-8">
            Construction update videos aren't a compliance chore. For developers with projects under construction, they're the cheapest way to keep buyers confident, payments flowing, and referrals coming — while generating marketing content from work that's already happening.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4">What to Do Next</h2>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 leading-relaxed">
            If your buyers are only seeing progress through site-visit photos, a regular update schedule is the quickest upgrade. Looking for a partner to run it?{" "}
            <Link href="/construction-update-videos" className="text-yellow-600 font-semibold hover:underline">
              Explore our construction update videos service
            </Link>{" "}
            for portfolio examples and retainer options.
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
            Ready to Show Buyers Your Project's Real Progress?
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
              href="/construction-update-videos"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors"
            >
              View Our Construction Update Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
