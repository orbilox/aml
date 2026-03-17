"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "./posts";

export default function BlogIndexClient() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/images/services/3d-walkthrough-videos/1.jpg')`,
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block bg-yellow-400 text-black text-sm font-bold px-4 py-1 rounded-full mb-6 uppercase tracking-widest">
            Our Blog
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Real Estate Visualization
            <span className="block text-yellow-400">Insights & Guides</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Expert articles on 3D walkthrough videos, virtual reality tours, drone photography,
            and the latest trends in real estate marketing technology.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">

            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-black">Latest Articles</h2>
              <div className="w-16 h-1 bg-yellow-400"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Thumbnail */}
                  <div className="overflow-hidden h-52">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-xs">{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-black mb-3 leading-snug group-hover:text-yellow-500 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-400">{post.date}</div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-black hover:text-yellow-500 transition-colors"
                      >
                        Read More <i className="ri-arrow-right-line"></i>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Real Estate Marketing?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Talk to our team and get a free consultation for your next project.
          </p>
          <Link
            href="/contact"
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors inline-block"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
